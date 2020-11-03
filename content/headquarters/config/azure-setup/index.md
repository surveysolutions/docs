+++
title = "Azure setup"
keywords = ["installation", "configuration", "cloud", "azure"]
date = 2020-11-03T12:00:00Z
aliases = []
+++

# Installation of Survey Solutions on Microsoft Azure

This is a step by step instruction to show minimal setup for survey solutions to run. It is not recommended to go live after completing.
Additional steps should be executed after completing this instruction by IT specialist - applying DNS name and configuring SSL connection. These steps are out of scope for this article.

In order to install - register on [azure portal](https://azure.microsoft.com/en-us/free/) and login. Installation steps are going to use [azure shell](https://docs.microsoft.com/en-us/azure/cloud-shell/overview).

After loggedin into azure shell execute command with variables that are going to be needed lateron. Feel free to change them as you need:

``` bash
RG=surveysolutions \
LOC=westeurope \
STOREACC=surveysolutions \
SHARE_NAME=surveysolutions \
PGSERVER=suso-postgres \
PGPASS=password
```

> - `RG` - resource group where all survey solutions related resources are going to be grouped
> - `LOC` - location where you will run survey solutions software. Choose the one that fits your needs <https://azure.microsoft.com/en-us/global-infrastructure/geographies/>
> - `STOREACC` - storage account that will contain binary data <https://docs.microsoft.com/en-us/azure/storage/common/storage-account-overview>. Should be unique so change it, do not use one provided here
> - `SHARE_NAME` - name of file share for survey solutions to store binary data
> - `PGSERVER` - name for PostgreSQL server
> - `PGPASS` - password for PostgreSQL database change. Make your own password, **do not use the one provided in here**.

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
```

Now you are ready to run Survey Solutions container. Please choose unique dns prefix within selected location and change `HQ_Headquarters__BaseUrl` and `dns-name-label` accordingly. More details can be found [here](https://docs.microsoft.com/en-us/azure/container-instances/container-instances-quickstart#create-a-container). To run container use command:

``` bash
az container create \
    --resource-group $RG \
    --name surveysolutions \
    --image surveysolutions/surveysolutions:latest \
    --location $LOC \
    --dns-name-label surveysolutions \
    --ports 80 \
    --azure-file-volume-account-key $STOREKEY \
    --azure-file-volume-account-name $STOREACC \
    --azure-file-volume-share-name surveysolutions \
    --azure-file-volume-mount-path /app/AppData \
    --environment-variables \
        ASPNETCORE_ENVIRONMENT=Production \
        HQ_ConnectionStrings__DefaultConnection="Server=${PGSERVER}.postgres.database.azure.com;Database=SurveySolutions;Port=5432;User Id=postgres@${PGSERVER};Password=${PGPASS};Ssl Mode=Require;" \
        HQ_Headquarters__TenantName=hq \
        HQ_Headquarters__BaseUrl=http://surveysolutions.westeurope.azurecontainer.io
```

In order to see running instance execute command:

``` bash
echo "http://$(az container show --resource-group $RG --name surveysolutions --query "ipAddress.fqdn" -o tsv)"
```

It will output address of your instance. Copy it from console to your browser application is up and running.
