+++
title = "Batch User Upload"
keywords = ["batch","create case","survey case","sample mode"]
date = 2016-06-30T18:18:21Z
lastmod = 2016-06-30T18:18:21Z
aliases = ["/customer/portal/articles/2483438-batch-user-upload"]

+++

Up to 10,000 user accounts can be created from a single tab-delimited
file, which must include the ***login***, ***password***, and ***role***
of the user, and may include additional attributes, like *email* or
*phone*.  
  
Batch creation of user accounts comes handy when:

-   the same accounts need to be replicated on a different server;
-   migrating from a different CAPI system with established accounts;
-   the survey is so huge that manual creation of accounts via a web
    interface would take a significant amount of time.

  
  
Creating user accounts in batch mode is available to both the
administrator and the headquarter users. For new supervisor accounts the
role must be specified as **Supervisor** (case-sensitive). For
interviewer accounts the role must be specified as **Interviewer**
(case-sensitive), and in addition the login of the supervisor must be
specified, which determines the team where the interviewer account will
be added. Interviewers may be added to existing supervisors, or to new
supervisors mentioned anywhere in the users list.  
  
When creating new users with a batch upload feature, select the *Batch
user upload* menu item of the *Teams and Roles* menu.  
  
{{< imgproc "images/653458.png" Fit "800x600" />}}  
  
  
Survey Solutions will present the layout of the file it expects:  
  
{{< imgproc "images/653459.png" Fit "800x600" />}}  
  
  
The fields *login*, *password* and *role* are mandatory, and must be
filled out for every user in the list. Other fields are optional. Click
the *Choose File* button to locate the file on your drive which contains
the list of the users and click the *Upload* button to upload it to the
Survey Solutions server.  
  
{{< imgproc "images/653460.png" Fit "800x600" />}}  
  
  
Survey Solutions will validate the uploaded list of the users report if
any problems are found:

-   empty required fields (login, password, role);
-   passwords not conforming to the security requirements (too short,
    etc);
-   duplicate user accounts;
-   unknown supervisors (all interviewers created must become part of
    the team of a supervisor known to the system);
-   and other checks.

  
  
{{< imgproc "images/653461.png" Fit "800x600" />}}  
  
If the program didn’t find any problems with the list of users, click
the *Create users* button to start creating accounts in the batch mode.
Depending on the number of users and server performance this process may
take a few minutes.
