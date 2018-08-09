+++
title = "Multiple interviewers using the same tablet"
keywords = ["interviewer relink re-link relinking re-linking multiple users tablet "]
date = 2018-05-07T19:50:12Z
lastmod = 2018-05-07T19:50:12Z
aliases = ["/customer/portal/articles/2938134-multiple-interviewers-using-the-same-tablet"]

+++

Survey Solutions uses device tracking mechanism where for each
interviewer account there is an indication of the currently linked
device. In short this means that at any moment any interviewer may be
utilizing only one device for data collection. Re-linking of the devices
is possible, but it has some important consequences (explained
[here](http://support.mysurvey.solutions/customer/en/portal/articles/2578016)).   
  
At the same time it is still possible for multiple interviewers to use
the same tablet for data collection, but every interviewer must have a
<span class="underline">**different user account in the Android
operating system**</span> to permit this. If this is not done, once the
first interviewer initializes the connection, his name will be fixed in
Survey Solutions, and other interviewers will not be able to log in.
Refer to the Android OS documentation for [supporting multiple
users](https://source.android.com/devices/tech/admin/multi-user) on the
same tablet.  
  
When logging in under a different account on the same tablet, the second
interviewer will have an opportunity to enter his login/password and
connect to the server without a conflict with the first interviewer.  
  
WARNING: if an interviewer starts working under one account and later
creates a different account on the tablet and still tries to login with
the same credentials, this would be equivalent to switching to a new
device (re-linking) and will provoke the re-linking warning with the
same consequences (described
[here](http://support.mysurvey.solutions/customer/en/portal/articles/2578016)).
Hence it is important that the interviewer continues to use the same
(Android OS) user account for logging in to Survey Solutions.
