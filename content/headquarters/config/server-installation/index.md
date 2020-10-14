+++
title = "Server Installation"
keywords = ["installation", "configuration"]
date = 2020-05-06T14:14:00Z
aliases = ["/customer/portal/articles/standalone-installation", "/customer/portal/articles/2768436-standalone-installation","/customer/en/portal/articles/2768436-standalone-installation","/customer/portal/articles/2768436","/customer/en/portal/articles/2768436","/headquarters/standalone-installation"]

+++

Installation has following steps:

1. [Installing PostgreSQL](#installing-postgresql)
2. [Installing SurveySolutions](#installing-surveysolutions)
3. [Post installation configuration](#post-installation-configuration)

## Installing PostgreSQL

Make sure that you have an installed and running instance of PostgreSQL **before running SurveySolutions.exe**

You can download PostgreSQL from [here](https://www.postgresql.org/download/windows/) and run the
setup. Pick latest stable version.

During the process you'll set the password:
![Postgres password](images/pg_password.png "PostgreSQL password")

Port on which server will be running:
![Postgres port](images/pg_port.png "PostgreSQL port").

After installation is complete, follow the instructions for [tuning PostgreSQL for production use](https://wiki.postgresql.org/wiki/Tuning_Your_PostgreSQL_Server)

## Installing Survey Solutions

Download [survey solutions installer](https://mysurvey.solutions/Download)

Run SurveySolutions.exe. It will ask you for two parameters:  
Install location – choose any or keep the default (`C:\Survey Solutions`)
![Survey Solutions location](images/ss_location.png)

PostgreSQL connection parameters (default values will be already there)
– here specify port and password from step 1:
![Survey Solutions database connection](images/ss_connection_settings.png)

That's it. At the end, finish installation page will automatically open
in your browser where you'll be able to create administrator user for
Survey Solutions Headquarters application. The link to the site will be
automatically added to your start menu, but you can always access it by
directly typing the address in the browser's address bar.

In order to check if application is running correctly you can open
http://localhost:9700/.hc URL. It should output `Healthy` message.

## Post installation configuration

By default survey solutions is installed as web application and runs behind IIS web server. It uses 9700 port, it is fine for the default setup, but will require all users when referring to your server to write this :9700 port name at the end of the URL. Also most firewalls will block custom ports by default and it might require additional configuration on client side to access server. If you need to change port you can do it in IIS config. To access it right click on start menu, select run option and execute `inetmgr` command. There you can find Survey Solutions application:
![Survey Solutions in IIS](images/ss_iis_settings.png)

If you click on Bindings... link in the right panel you will be able to add new ports, like 80 for http and 443 for https.

If your survey solutions instance is exposed via public internet access it is highly recommended to setup SSL encryption for web server. Configuration depends on certificate provider that you are going to choose, so refer to their documentation on how to setup IIS.

### Firewall rules

To permit communication of Survey Solutions with the Designer and other utilized
services you may need to enable certain ports or types of communication as
listed below. The instructions vary by type of the security software used.
See #3 in the [FAQ for IT](/getting-started/faq-for-it-personnel/) for common
security software instructions.

- allow incoming connections to the port that you've set up the server binding of Survey Solutions;
- allow outgoing connections to the Designer site: `https://designer.mysurvey.solutions`;
- allow outgoing connections to the Survey Solutions portal: `https://mysurvey.solutions`.

In addition expect the client (browser) to

- send queries to the Maps server being used:
typically `https://maps.googleapis.com` and `https://google.com`
(or see [here](/headquarters/config/alternative-maps-for-servers-in-china/) for
alternative settings for China);
- send queries to the CAPTCHA server being used (if it is used): https://www.google.com and https://www.gstatic.com

### Application configuration

Open `/Site` folder where survey solutions is installed, and open `appsettings.Production.ini` file. This file will not be replaced during application upgrades and will retain your local server configuration.
![Survey Solutions configuration file](images/ss_config.png)

#### Base URL

If your server has domain name you need to change `BaseUrl` value to the name you have (without trailing slash at the end of the URL). Make sure that this URL can be used to open Survey Solutions app from server where application is installed, otherwise export won't work.

Example of an ini-file with configured base URL:

``` INI
[Headquarters]
BaseUrl=https://demo.mysurvey.solutions
```

#### Captcha

Captcha is used to application from brute force attacks on user accounts and for protection of web mode from automatic creation of interviews.
Default version is hosted one, it does not require any configuration but is less secure.
Other option is to use google recapcha. You will need 2 keys from google recaptcha service. Navigate to [creation page](https://www.google.com/recaptcha/admin/create) and create new site. Use your public DNS name that is configured in survey solutions `BaseUrl` property. On creation page select reCAPTCHA v2. After creation you will see a page where you can copy site key and secret key.

To use google catpcha service add following content into your `appsettings.Production.ini` file:

``` INI
[Captcha]
CaptchaType=Recaptcha
SecretKey=%Your secret key%
SiteKey=%Your site key%
Version=v2
```

#### Google maps

If you are using gps question you should change [google maps api key](https://developers.google.com/maps/documentation/javascript/get-api-key). After creating it on console add it to the `appsettings.Production.ini`:

``` INI
[GoogleMap]
ApiKey=%your api key%
```

when not configured properly you will see error `ReferenceError: google is not defined` on maps report page:
![Survey Solutions maps error](images/ss_maps_error.png)

#### GeoTIFF files support

If you are using [gis](/questionnaire-designer/questions/offline-gis-functionality-expansion/) functionality and plan using TIFF files as maps you need to install [GDAL](https://gdal.org/) library. Easiest way to do it (on windows) is to use [OSGeo4W project](https://trac.osgeo.org/osgeo4w/wiki). Download installer from their web site and install only "GDAL". By default survey solutions is using default installation path to find GDAL binaries: `C:\OSGeo4W64\bin\`. If you installed it to another folder add configuration in your `appsettings.Production.ini`:

``` INI
[Geospatial]
GdalHome=%Path to bin where GDAL is intalled%
```

#### Load Balancer

If you are using a load balancer, please make sure that it is configured to use:

- sticky sessions, and
- web sockets.

If this is not satisfied, web interviews will not work resulting in errors for
the respondents (this may not be immediately obvious to the person setting up
the Survey Solutions server).
