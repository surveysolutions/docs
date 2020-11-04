+++
title = "Azure setup"
keywords = ["installation", "configuration", "cloud", "azure"]
date = 2020-11-03T12:00:00Z
aliases = []
+++

# Installation of Survey Solutions on Microsoft Azure

In order to install - register on [azure portal](https://azure.microsoft.com/en-us/free/) and login. Installation steps are going to use [azure shell](https://docs.microsoft.com/en-us/azure/cloud-shell/overview).

After loggedin into azure shell execute command with variables that are going to be needed later. Feel free to change them as you need:

``` bash
RG=surveysolutions \
LOC=westeurope \
STOREACC=surveysolutions \
SHARE_NAME=surveysolutions \
PGSERVER=suso-postgres \
PGPASS=password \
WEBAPPNAME=surveysolutions-webapp \
SRVPLAN=AppSvc-SurveySolutions-plan
```

> - `RG` - resource group where all survey solutions related resources are going to be grouped
> - `LOC` - location where you will run survey solutions software. Choose the one that fits your needs <https://azure.microsoft.com/en-us/global-infrastructure/geographies/>
> - `STOREACC` - storage account that will contain binary data <https://docs.microsoft.com/en-us/azure/storage/common/storage-account-overview>. Should be unique so change it, do not use one provided here
> - `SHARE_NAME` - name of file share for survey solutions to store binary data
> - `PGSERVER` - name for PostgreSQL server
> - `PGPASS` - password for PostgreSQL database change. Make your own password, **do not use the one provided in here**.
> - `WEBAPPNAME` - address and name of created survey solutions intallation. Should be unique across all other web apps.
> - `SRVPLAN` - name for created [service plan](https://docs.microsoft.com/en-us/azure/app-service/overview-hosting-plans)

Create a resource group:

``` bash
az group create --name $RG --location $LOC
```

Create PostgreSQL server instance:

``` bash
az postgres server create -l $LOC  -g $RG -n $PGSERVER -u postgres -p $PGPASS \
    --sku-name B_Gen5_2 --version 11
```

Allow connections from azure services to PostgreSQL:

``` bash
az postgres server firewall-rule create -g $RG \
    -s $PGSERVER -n "AllowAllWindowsAzureIps" \
    --start-ip-address "0.0.0.0" \
    --end-ip-address "0.0.0.0"
```

Create a storage account:

``` bash
az storage account create -n $STOREACC -g $RG -l $LOC --sku Standard_LRS
```

Get store key for later use:

``` bash
STOREKEY=$(az storage account keys list --account-name $STOREACC --query [0].value -o tsv)
```

Create file share:

``` bash
az storage share create \
  --name $SHARE_NAME \
  --account-key $STOREKEY \
  --account-name $STOREACC

az storage share create \
  --name $SHARE_NAME-logs \
  --account-key $STOREKEY \
  --account-name $STOREACC

```

Create a service plan:

``` bash
az appservice plan create --name $SRVPLAN --resource-group $RG --is-linux
```

Create a web application that will host survey solutions:

``` bash
az webapp create --resource-group $RG --plan $SRVPLAN --name $WEBAPPNAME --deployment-container-image-name surveysolutions/surveysolutions:latest
```

Set required configuration properties for Survey Solutions:

``` bash

az webapp config appsettings set -g $RG -n $WEBAPPNAME --settings HQ_Headquarters__TenantName=hq 

az webapp config appsettings set -g $RG -n $WEBAPPNAME --settings HQ_Headquarters__BaseUrl=https://${WEBAPPNAME}.azurewebsites.net

az webapp config appsettings set --resource-group $RG --name $WEBAPPNAME --settings HQ_ConnectionStrings__DefaultConnection="Server=${PGSERVER}.postgres.database.azure.com;Database=SurveySolutions;Port=5432;User Id=postgres@${PGSERVER};Password=${PGPASS};Ssl Mode=Require;"
```

Mount file shares to docker image:

``` bash

az webapp config storage-account add --resource-group $RG --name $WEBAPPNAME --custom-id appdata --storage-type AzureFiles --share-name $SHARE_NAME --account-name $STOREACC --access-key $STOREKEY --mount-path /app/AppData

az webapp config storage-account add --resource-group $RG --name $WEBAPPNAME --custom-id logs --storage-type AzureFiles --share-name $SHARE_NAME-logs --account-name $STOREACC --access-key $STOREKEY --mount-path /logs

```

Now to make sure all changes take affect restart webapp:

``` bash
az webapp restart --name $WEBAPPNAME --resource-group $RG
```

Enable https redirect:

``` bash
az webapp update -g $RG -n $WEBAPPNAME --https-only true
```

In order to see running instance execute command:

``` bash
echo "https://$(az webapp list --query "[0].{hostName: defaultHostName}" -o tsv)"
```

It will output address of your instance. Copy it from console to your browser application is up and running.

## Post installation settings

Shown example creates smallest possible sku tier. It is enough to get started and do minor trainings, but its not recommended for production use. When you configured the software its possible to scaleup used App Service Plan. To do it find resource group you created in the beginning and find AppSvc-SurveySolutions-plan in the list (or name you gave to service plan). Here you can [change available resources](https://docs.microsoft.com/en-us/azure/app-service/overview-hosting-plans#what-if-my-app-needs-more-capabilities-or-features) for Survey Solutions. On the overview tab you can see how much resources is consumed right now, so you can decide if its enough or not.

If you encreased app service plan resources but system still works slowly check if database instance keeps up with load. In same resources group find suso-postgres resource. On the overview tab you see resource utilization graph. See if current tier is enough for your load and scale up/down accordingly.

{{< panel title="Warning:" style="warning">}}

Please note that changing to and from the Basic compute tier or changing the backup redundancy options after server creation is not supported for PostgreSQL database. So if you plan a large scale survey start with general purpose instance at the beginning.

{{% /panel %}}