+++
title = "Alternative maps for servers in China"
keywords = ["maps", "configuration"]
date = 2018-04-03T17:03:44Z
lastmod = 2020-05-06T13:03:44Z
aliases = ["/customer/portal/articles/2932213-alternative-maps-for-servers-in-china","/customer/en/portal/articles/2932213-alternative-maps-for-servers-in-china","/customer/portal/articles/2932213","/customer/en/portal/articles/2932213","/headquarters/alternative-maps-for-servers-in-china"]

+++

Survey Solutions map reports at the data server utilize maps provided by Google
through their online service. The installation sets the parameters regulating
access to this service with the parameters applicable to the majority of users,
but these servers are known to be inaccessible from the networks in China.

To enable access to Google maps from China, a different server, specific to
China, must be used. The following two parameters should be changed in the
`GoogleMap` section in `appsettings.Production.ini` configuration file of the
Survey Solutions server:  

```
[GoogleMap]
# write your API key (that you receive from Google) instead of ... below:
ApiKey="..."
ApiBaseUrl=http://maps.google.cn
BaseUrl=http://google.cn
```  

This will replace the common Google maps engine used by all countries
with the [maps server that is specific for China](https://en.wikipedia.org/wiki/Restrictions_on_geographic_data_in_China). A restart of the web server may be
required for the new settings to take effect.

These map server settings apply to all the map reports on the Survey Solutions
data server. Hence if you are planning multiple surveys with access inside and
outside of China you will need to have two separate servers with different
configurations.

The default values of `BaseUrl` and `ApiBaseUrl` in this section (for all
users outside of China):
```
[GoogleMap]
ApiBaseUrl=https://maps.googleapis.com
BaseUrl=https://google.com
```  

It is recommended that the users do not change any other settings or
parameters in this file without prior consultation with the support
team, as it may negatively affect the security and reliability of the
service.
