+++
title = "Deployment with Docker"
keywords = ["installation", "configuration", "docker"]
date = 2020-11-01T12:00:00Z
aliases = []
draft = true
+++

You can install and run Survey Solutions Headquarters using the [official Docker image](https://hub.docker.com/r/surveysolutions/surveysolutions).

### Prerequisite

Survey Solutions container can be executed on any hosting system that is capable of running linux/amd64 containers.
Please refer to docker documentation page on how to install Docker for Your operating system - <https://docs.docker.com/get-docker>

> Survey Solutions has linux based container image and cannot be run in Windows Containers. To run Survey Solutions in Docker on Windows you will need [WSL2](https://docs.microsoft.com/en-us/windows/wsl/compare-versions#whats-new-in-wsl-2)

You still need to have **PostgreSQL** server running, there is an [example](https://hub.docker.com/r/surveysolutions/surveysolutions) on doing it using docker with docker-compose.

### Run Survey Solutions

> Note: If you are on a Linux system, you might need to add `sudo` before the commands.

``` CMD
docker pull surveysolutions/surveysolutions

docker run -p 80:80 --name hq \
    -e "HQ_Headquarters__TenantName=hq" \
    -e "HQ_Headquarters__BaseUrl=http://localhost" \
    -e "HQ_ConnectionStrings__DefaultConnection: 'Persist Security Info=true;Server=db;Port=5432;User Id=postgres;Password=pg_password;Database=SurveySolutions" \
    surveysolutions/surveysolutions:latest
```

> `HQ_Headquarters__TenantName` is required env variable in this release, this setting will be optional in future
> `HQ_ConnectionStrings__DefaultConnection` Connection String to Postgres instance. For parameters documentation refer to [documentation](https://www.npgsql.org/doc/connection-string-parameters.html)

#### Volumes

Survey Solutions has 3 usages of file system that should be persisted: interview binary data (images), asp.net core data protection keys and logs.

Docker provide quite a lot of options on how to [handle persitent data](https://docs.docker.com/storage). To preserve Survey Solutions data You must map local folder into container or use [Docker Volumes](https://docs.docker.com/storage/volumes).

When hosting in Docker, aspnet core applications should manage a volume for Data Protection keys: <https://docs.microsoft.com/en-us/aspnet/core/security/data-protection/configuration/overview?view=aspnetcore-3.1#persisting-keys-when-hosting-in-a-docker-containe>.

Use following volume map to handle: `dataprotection:/root/.aspnet/DataProtection-Keys`, where `dataprotection` is a volume name.

All images uploaded to HQ during interviews are stored in `/app/AppData` folder.

#### Using docker volumes

```bash
docker create volume hq_data
docker create volume data_protection

docker run -p 80:80 --name hq \
    -e "HQ_Headquarters__TenantName=hq" \
    -e "HQ_Headquarters__BaseUrl=http://localhost" \
    -e "HQ_ConnectionStrings__DefaultConnection=Server=db;Port=5432;User Id=postgres;Password=pg_password;Database=SurveySolutions" \
    -v "hq_data:/app/AppData" \
    -v "data_protection:/root/.aspnet/DataProtection-Keys" \
    surveysolutions/surveysolutions:latest
```

#### Using local folder

```bash
docker run -p 80:80 --name hq \
    -e "HQ_Headquarters__TenantName=hq" \
    -e "HQ_Headquarters__BaseUrl=http://localhost" \
    -e "HQ_ConnectionStrings__DefaultConnection=Server=db;Port=5432;User Id=postgres;Password=pg_password;Database=SurveySolutions" \
    -v "./data/app:/app/AppData" \
    -v "./data/protection:/root/.aspnet/DataProtection-Keys" \
    surveysolutions/surveysolutions:latest
```

### SSL

It is possible to run Survey Solutions with SSL in Docker. You can refer to Microsoft documentation on how to run in docker with HTTPS - <https://docs.microsoft.com/en-us/aspnet/core/security/docker-compose-https?view=aspnetcore-3.1>

Following configuration can be provided to Survey Solutions with [enviroment variables](https://docs.docker.com/engine/reference/commandline/run/#set-environment-variables--e---env---env-file)

Environment variables:

- `-e ASPNETCORE_URLS=https://+:443;http://+:80`
- `-e ASPNETCORE_Kestrel__Certificates__Default__Path=/ssl/cert.pfx` - path to SSL certificate inside docker
- `-e ASPNETCORE_Kestrel__Certificates__Default__Password` - password for PFX certificate

Volume:

- `-v ./path/to/ssl.pfx:/ssl/cert.pfx`

Ports

- `-p 80:80`
- `-p 443:443`

#### Full example with SSL

Assume that certificate is located in folder `/srv/hq/.ssl/cert.pfx` with password `password`

```bash
docker run -p 80:80 -p 443:443 --name hq \
    -e "HQ_Headquarters__TenantName=hq" \
    -e "HQ_Headquarters__BaseUrl=https://mysurvey.example.com" \
    -e "HQ_ConnectionStrings__DefaultConnection=Server=192.168.192.72;Port=5432;User Id=postgres;Password=Qwerty1234;Database=SurveySolutions" \
    -e "ASPNETCORE_URLS=https://+:443;http://+:80" \
    -e "ASPNETCORE_Kestrel__Certificates__Default__Path=/ssl/cert.pfx" \
    -e "ASPNETCORE_Kestrel__Certificates__Default__Password=password" \
    -v "/srv/hq/hq_data/app:/app/AppData" \
    -v "/srv/hq/.ssl/cert.pfx:/ssl/cert.pfx" \
    -v "/srv/hq/protection:/root/.aspnet/DataProtection-Keys" \
    surveysolutions/surveysolutions:latest
```

### Docker-compose

Typing all those docker run parameters can be quite error prone. We provide a template for sample repository for running Survey Solutions with `docker-compose` in this repository <https://github.com/surveysolutions/docker-compose>.

> While running Postgres instance in docker is viable solution, we strongly recommend to run PostgreSQL in separate server or use "managed" solutions provided by cloud providers(i.e. Amazon RDS, Azure Database for PostgreSQL, Google Cloud SQL, etc...)

### Required configuration settings

There is several required configuration that You should be aware of to run in Docker.

- `HQ_Headquarters__TenantName` is required in Survey Solution as of version `v20.10`. There is no visual features linked to this configuration. Will be dropped in future versions.
- `HQ_ConnectionStrings__DefaultConnection` - connection string to Postgres database instance
- `HQ_Headquarters__BaseUrl` - Base URL for HQ. Used in Web mode and emails.
- `HQ_Logging__LogsLocation: /app/AppData/logs` can be configured to specify logs locations
- `Export_ExportSettings__DirectoryPath: /app/AppData/Export` to preserve data export artifacts

## Updating Survey Solutions

- Stop docker container with Survey Solutions
- Run `docker pull surveysolutions/surveysolutions`
- Restart docker container
