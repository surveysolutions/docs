+++
title = "Standalone Server"
keywords = ["local installation", "standalone"]
date = 2019-07-17T00:00:01Z
+++

A Standalone Survey Solutions Server is any server where 
Survey Solutions is installed outside of the cloud 
facilities managed by the Survey Solutions developers 
team.

Most of the users prefer the cloud-based servers for their
reliability and convenience, yet standalone servers
may be sometimes required for performance or legal 
considerations.

We strongly recommend our users who are just starting with 
Survey Solutions to use our [free cloud servers](https://support.mysurvey.solutions/faq/cloud-server-instructions/)
on the WB infrastructure. There is a learning curve in 
collecting data with Survey Solutions CAPI and, from our 
experience, it might difficult for our users to adjust 
their data collection practices to protocols imposed by 
Survey Solutions simultaneously with dealing with issues 
that might arise from a local installation.

Local installation of Survey Solutions is also much harder 
for us to support. It is very difficult for us to separate 
issues related with local network configurations, firewalls, 
ports, etc. from the issue directly related with Survey 
Solutions. It is also difficult for the Survey Solutions 
support to work on the remote servers. In some cases, 
actions of inexperienced users caused data loses and 
interruptions in the data collection.

The server instances on the World Bank cloud provide level 
of data [security](https://support.mysurvey.solutions/faq/how-secure-is-the-world-bank-cloud-/)
and reliability that is extremely difficult to achieve with 
the local installation.

We recommend you using Survey Solutions on the World Bank 
cloud servers for two-three surveys and then discuss with 
us a possibility of switching to a local server.

The following articles describe the main points that you
would need to know before you setup your server.

- Study the [requirements for a local server](https://support.mysurvey.solutions/faq/server-requirements/). These
requirements are minimal and may be periodically revised. 
Your survey may require a different hardware configuration.
You may need to calibrate for a few months before the survey
to determine the optimal configuration.

- Submit a [request for a local server](https://mysurvey.solutions/NewServerRequest).
This is similar to
[requesting a cloud server](https://support.mysurvey.solutions/faq/cloud-server-request/),
but keep in mind that you will need to specify a public (external)
fixed IP address of your server when you fill out the request. To
find your public IP address, [click here](https://www.google.com/search?q=my+ip)
or [here](https://www.myip.com/).

- Follow the [installation instructions](https://support.mysurvey.solutions/headquarters/config/standalone-installation/)
to install the prerequisites and the Survey Solutions itself. The installation
file for survey solutions may be obtained from the Downloads 
section of the [self-service portal](https://mysurvey.solutions)
after your request for a local server is approved. The 
local installation requires the request to be submitted and
approved (previous step).

- Your network firewall or security software may need to
be configured to permit Survey Solutions. See [#3 in the FAQ](https://support.mysurvey.solutions/getting-started/faq-for-it-personnel/).

- Your backup system may need to be configured to cover
the Survey Solutions data.

After the installation and configuration of your server 
follow the Survey Solutions release notifications and
update your server periodically.