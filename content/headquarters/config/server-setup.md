+++
title = "Survey Solutions Server"
keywords = ["local installation", "standalone", "own server"]
date = 2020-05-27T00:00:01Z
aliases = ["/headquarters/config/standalone-server"]
+++

This article describes the main steps to setup your own 
Survey Solutions server.

- Study the [requirements for a server]({{< ref "/faq/server-requirements" >}}). 
These requirements are minimal and may be periodically revised. 
Your survey may require a different hardware configuration.
You may need to calibrate for a few months before the survey
to determine the optimal configuration.

- Follow the [installation instructions]({{< ref "/headquarters/config/server-installation" >}})
to install the prerequisites and the Survey Solutions itself. 

- Note: there is only one installation set regardless where you want 
to install: to a physical server or to a cloud-based server. The 
installation file for survey solutions may be obtained 
from the [Download](https://mysurvey.solutions/download) section of 
the self-service portal. 

    - To install the Survey Solutions to your Windows server, follow the 
[installation instructions]({{< ref "/headquarters/config/server-installation" >}}).

    - To host your Survey Solitions instance inside a docker container, follow the 
[docker instructions]({{< ref "/headquarters/config/docker" >}}).

    - If you are deploying to Amazon AWS cloud, there 
are additional instructions available:
[Installation to AWS]({{< ref "/headquarters/config/aws-setup" >}}).

    - For deployment on Microsoft Azure, please take a look at
[Azure setup]({{< ref "/headquarters/config/azure-setup" >}}).

- Your network firewall or security software may need to
be configured to permit Survey Solutions. See 
[#3 in the FAQ]({{< ref "/getting-started/faq-for-it-personnel" >}}).

- Your backup system may need to be configured to cover
the Survey Solutions data.

After the installation and configuration of your server 
follow the Survey Solutions release notifications and
update your server periodically. You decide yourself on
the frequency of the backups, updates and other maintenance
that you do on your server.

The following page may be helpful in troubleshooting the errors with your server 
installation: [Server errors]({{< ref "/headquarters/config/standalone-server-errors" >}}).

If you experience any problem with exporting the data from the server, 
check out [these instructions]({{< ref "/headquarters/config/export-service" >}}) first.

