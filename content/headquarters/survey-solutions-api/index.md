+++
title = "Survey Solutions API"
keywords = [""]
date = 2017-07-19T19:29:51Z
lastmod = 2017-07-19T19:29:51Z
aliases = ["/customer/portal/articles/2844104-survey-solutions-api"]

+++

Survey Solutions includes a powerful and flexible API which allows
automating some tasks and allows our users to build larger systems,
which may compliment Survey Solutions to achieve larger goals.   
  
We have shown earlier how an external application may use [API to make
Survey Solutions to export the data in the desired
format](/headquarters/api-for-data-export).  
  
Other examples of use could be:

-   an external dashboard or monitoring and reporting system, which
    updates some indicators every night and publishes them to a website,
    or
-   an external checking and validation system which verifies collected
    data against some external sources of information and rejects
    automatically the incorrect interviews, or
-   an integrated system, which utilizes Survey Solutions for data
    collections tasks and a statistical package for continuous analysis,
-   facility management, inventory and price monitoring systems, etc,
    etc.

  
It is up to our users to decide on the particular scenario of use taking
into account their needs and existing legacy systems already in place.
The integration mode is usually dictated by the external system, which
may determine, for example, in which language the system is implemented
or to which storage the data is transferred from Survey Solutions.  
  
What Survey Solutions is making available to external
applications/systems is a set of levers, which allow performing the same
tasks performed by the actual users of the software. This functionality
is implemented through a set of standardized web requests which are
documented in the following [interactive guide for API
users](https://demo.mysurvey.solutions/apidocs/index#/).  
  
To utilize an API in your application an API user account must be
created by the server administrator:  
![](images/799204.png)  
  
Every Survey Solutions server provides an API. It is important to verify
the reference against the exact version contained in your server to make
sure the correct syntax for API calls is being used. This syntax may be
expanded or revised in future releases.