+++
title = "Standalone Installation"
keywords = ["local installation"]
date = 2019-07-03T00:59:53Z
aliases = ["/customer/portal/articles/2768436-standalone-installation","/customer/en/portal/articles/2768436-standalone-installation","/customer/portal/articles/2768436","/customer/en/portal/articles/2768436","/headquarters/standalone-installation"]

+++

The setup has two parts, database installation and the application after
that. <span class="underline">Before running SurveySolutions.exe</span>
make sure that you have an installed and running instance of
PostgreSQL.  
  
You can download PostgreSQL from
[here](https://www.postgresql.org/download/windows/) and run the
setup. _We currently run PostgreSQL **version 10.6** on our servers_.  
During the process you'll set the port on which server will be running as well
as a password for built-in user (postgres by default).  
  
Now you can run SurveySolutions.exe. It will ask you for two
parameters:  
Install location – choose any or keep the default (C:\\Program Files);  
PostgreSQL connection parameters (default values will be already there)
– here specify port and password from step 1.  
  
That's it. At the end, finish installation page will automatically open
in your browser where you'll be able to create administrator user for
Survey Solutions Headquarters application. The link to the site will be
automatically added to your start menu, but you can always access it by
directly typing the address in the browser's address bar.  

