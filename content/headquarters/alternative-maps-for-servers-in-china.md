+++
title = "Alternative maps for servers in China"
keywords = [""]
date = 2018-04-03T17:03:44Z
lastmod = 2018-04-03T17:03:44Z
aliases = ["/customer/portal/articles/2932213-alternative-maps-for-servers-in-china"]

+++

Survey Solutions map reports utilize maps provided by Google through
their online service. To enable access to Google maps from China, the
following two parameters should be added to the ***appSettings***
section in ***web.config*** configuration file of the Survey Solutions
server:  
  
`<add key="Google.Map.BaseApiUrl" value="http://maps.google.cn"/> <add key="Google.Map.BaseUrl" value="http://google.cn"/>`  
  
This will replace the common Google maps engine used by all countries
with the one specific for China. A restart of the web server may be
required for the new settings to take effect.  
  
It is recommended that the users do not change any other settings or
parameters in this file without prior consultation with the support
team, as it may negatively affect the security and reliability of the
service.
