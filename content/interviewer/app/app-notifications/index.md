+++
title = "Interviewer App Notifications"
keywords = ["notifications", "alerts", "messages"]
date = 2019-06-03T03:03:03Z
lastmod = 2019-06-03T03:03:03Z

+++

The Interviewer App reminds the interviewers about recommended actions when 
certain conditions are met by issuing user notifications. It is expected 
that if the interviewers follow the notifications issued by the software 
their work will be more efficient, and will let other team members 
(e.g. supervisors) to act sooner on the collected data.

Some notifications are shown inside the Interviewer app (at the dashboard) 
and some are shown in the Android system notifications tray. The following
table outlines where the notifications are shown and the situations when 
they are issued.

<TABLE border=1>
<TR bgcolor="PowderBlue">
<TH align=center>Situation/Message
<TH width=120>Notification type
<TH>Recommendation
<TR>
<TD><FONT color="navy"><I>Synchronization was not performed lately. Please synchronize.</I></FONT>
<TD>System tray
<TD>Synchronize as soon as possible. New assignments or rejected interviews may be awaiting at the server for pickup.

<TR>
<TD><FONT color="navy"><I>There was no retry after failed synchronization. Please try again.</I></FONT>
<TD>System tray
<TD>Synchronize as soon as possible since the last synchronization session was
terminated with errors and hence is incomplete.

<TR>
<TD><FONT color="navy"><I>You have X completed interview(s) that should be synchronized.</I></FONT>
<TD>System tray
<TD>Synchronize as soon as possible so that the completed interviews may be reviewed by the supervisors.

<TR>
<TD><FONT color="navy"><I>You have X rejected interview(s) that were not handled.</I></FONT>
<TD>System tray
<TD>Interviewer should direct attention to the rejected interviews before starting new interviews.

<TR>
<TD><FONT color="navy"><I>There are a lot of completed interviews. Please synchronize.</I></FONT>
<TD>App
<TD>Synchronize as soon as possible to send completed interviews to the server and reduce a chance of data loss in case the tabled gets damaged or stolen.

<TR>
<TD><FONT color="navy"><I>Some assignments were not updated last 3 days</I></FONT>
<TD>App
<TD>The interviewer is expected to fulfill the assingments sent to him and should not abandon the assignments that are received by him.

<TR>
<TD><FONT color="navy"><I>You've started too many interviews. Please complete them.</I></FONT>
<TD>App
<TD>The interviewer may start an interview without completing the previous one, but starting too many at the same time is a bad practice and started interviews are best to complete before moving forward to start other new interviews.
</TABLE>

**Setting up**

Notifications are controlled centrally by the server administrator in the server settings
and are turned on by default for all servers.

Administrators finding this feature not
helpful may turn it off (or back on) for all interviewers from the server settings page.
The new setting will take effect after the next synchronization of the interviewer with
the server.

Survey coordinators must realize that Android OS provides a possibility for the user
(in this case the interviewer) to disable the notifications from a particular application 
(in this case the Interviewer App) even if the notifications were turned on at the server.
Hence the management should not solely rely on the in-app generated notifications, but
continue to supervise and manage the interviewers to ensure the steady circulation of the 
interviews in the system.
