+++
title = "Survey Solutions API"
keywords = ["api", "ssaw", "REST", "GraphQL", "SurveySolutionsAPI"]
date = 2017-07-19T19:29:51Z
lastmod = 2022-05-010T10:10:10Z
aliases = ["/customer/portal/articles/2844104-survey-solutions-api","/customer/en/portal/articles/2844104-survey-solutions-api","/customer/portal/articles/2844104","/customer/en/portal/articles/2844104","/headquarters/survey-solutions-api","/headquarters/api/api-for-data-export"]

+++

Survey Solutions includes a powerful and flexible API which allows
automating some tasks and allows our users to build larger systems,
which may compliment Survey Solutions to achieve larger goals.   

Some examples of use could be:

-   schedule periodic export of collected data
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

To utilize an API in your application an API user account must be
created by the server administrator.

What Survey Solutions is making available to external
applications/systems is a set of levers, which allow performing the same
tasks performed by the actual users of the software. This functionality
is implemented through a set of standardized web requests which are implemented following the REST and GraphQL standards and are
documented in the following:

- [interactive guide for REST API
users](https://demo.mysurvey.solutions/apidocs/index.html)
- [interactive guide for GraphQL API users](https://demo.mysurvey.solutions/graphql)

Every Survey Solutions server provides an API. It is important to verify
the reference against the exact version contained in your server to make
sure the correct syntax for API calls is being used. This syntax may be
expanded or revised in future releases.  


#### API Clients

The API clients listed below provide convenient access to the API functionality for developers in the corresponding environments/languages.

<TABLE  class="table table-striped table-hover" border>
<TR>
  <TH width=100><CENTER>API Client</CENTER></TH>
  <TH width=100><CENTER>Source code</CENTER></TH>
  <TH width=100><CENTER>Manual</CENTER></TH>
  <TH width=100><CENTER>More info</CENTER></TH>
</TR>

<TR>
  <TD><CENTER><IMG src="images/ms-dot-net-logo.png" width=48><BR>.NET package<BR>Maintained by: <I>Andrii Kozhyn</I></CENTER></TD>
  <TD><CENTER><A href="https://github.com/SlyNet/SurveySolutionsClient"><IMG src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg" width=48><BR>Source code</A></CENTER></TD>
  <TD></TD>
  <TD><CENTER><A href="/headquarters/api/dot-net-package/">more</A></CENTER></TD>

<TR>
  <TD><CENTER><IMG src="https://upload.wikimedia.org/wikipedia/commons/a/af/PowerShell_Core_6.0_icon.png" width=48><BR>PowerShell module<BR>Maintained by: <I>Zurab Sajaia</I></CENTER></TD>
  <TD><CENTER><A href="https://github.com/vavalomi/ssaw-powershell"><IMG src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg" width=48><BR>Source code</A></CENTER></TD>
  <TD></TD>
  <TD><CENTER><A href="/headquarters/api/ps-module/">more</A></CENTER></TD>

<TR>
  <TD><CENTER><IMG src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/48px-Python.svg.png" width=48><BR>Python package<BR>Maintained by: <I>Zurab Sajaia</I></CENTER></TD>
  <TD><CENTER><A href="https://github.com/vavalomi/ssaw"> <IMG src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg" width=48><BR>Source code</A></CENTER></TD>
  <TD><CENTER><A href="https://ssaw.readthedocs.io/">online documentation</A></CENTER></TD>
  <TD><CENTER><A href=""></A></CENTER></TD>

<TR>
  <TD><CENTER><IMG src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/310px-R_logo.svg.png" width=48><BR>R package<BR>Maintained by: <I>Michael Wild</I></CENTER></TD>
    <TD><CENTER><A href="https://github.com/michael-cw/SurveySolutionsAPI"> <IMG src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg" width=48><BR>Source code</A></CENTER></TD>
  <TD></TD>
  <TD><CENTER><A href="/headquarters/api/api-r-package/">more</A></CENTER></TD></TR>

  <TR>
    <TD><CENTER><IMG src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/310px-R_logo.svg.png" width=48><BR>R package<BR>Maintained by: <I>Arthur Shaw</I></CENTER></TD>
      <TD><CENTER><A href="https://github.com/arthur-shaw/susoapi"> <IMG src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg" width=48><BR>Source code</A></CENTER></TD>
    <TD><CENTER><A href="https://arthur-shaw.github.io/susoapi/">online documentation</A></CENTER></TD>
    <TD></TD></TR>

  <TR>
    <TD><CENTER><IMG src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/310px-R_logo.svg.png" width=48><BR>R package<BR>Maintained by: <I>Lena Nguyen</I></CENTER></TD>
      <TD><CENTER><A href="https://github.com/l2nguyen/SuSoAPI"> <IMG src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg" width=48><BR>Source code</A></CENTER></TD>
    <TD></TD>
    <TD><CENTER></CENTER></TD></TR>

<TR>
  <TD><CENTER><IMG src="images/s16_72.png" width=48><BR>Stata package<BR>Maintained by: <I>Sergiy Radyakin</I></CENTER></TD>
  <TD><CENTER><A href="https://github.com/radyakin/susoapi"> <IMG src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg" width=48><BR>Source code</A></CENTER></TD>
  <TD><CENTER><A href="https://github.com/radyakin/susoapi/releases/latest/download/susoapi.pdf"><IMG src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg" style="height:48px;"><BR>Manual in PDF</A></CENTER></TD>
  <TD></TD>
</TABLE>

Users of other languages can develop their applications by calling the API points directly, or by developing own API client for their specific programming language. If you do so, please share a notice in the <A href="https://forum.mysurvey.solutions">users' forum</A>.
