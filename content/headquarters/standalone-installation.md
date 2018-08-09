+++
title = "Standalone Installation"
keywords = ["local installation"]
date = 2017-03-17T00:59:53Z
lastmod = 2017-03-17T00:59:53Z
aliases = ["/customer/portal/articles/2768436-standalone-installation","/customer/en/portal/articles/2768436-standalone-installation","/customer/portal/articles/2768436","/customer/en/portal/articles/2768436"]

+++

The setup has two parts, database installation and the application after
that. <span class="underline">Before running SurveySolutions.exe</span>
make sure that you have an installed and running instance of
PostgreSQL.  
  
You can download PostgreSQL from
[here](https://www.bigsql.org/postgresql/installers.jsp) and run the
setup. During the process you'll set the port on which server will be
running as well as a password for built-in user (postgres by default).  
  
Now you can run SurveySolutions.exe. It will ask you for two
parameters:  
Install location â€“ choose any or keep the default (C:\\Program Files);  
PostgreSQL connection parameters (default values will be already there)
â€“ here specify port and password from step 1.  
  
That's it. At the end, finish installation page will automatically open
in your browser where you'll be able to create administrator user for
Survey Solutions Headquarters application. The link to the site will be
automatically added to your start menu, but you can always access it by
directly typing the address in the browser's address bar.  
  
If you are setting up a new system on Windows 2016 and plan to use
secure http protocol (recommended) please refer to
[this](/faq/local-installation-interviwer-app-cannot-connect-to-the-server-over-https)
FAQ article about a known issue.
