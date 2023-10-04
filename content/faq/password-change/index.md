+++
title = "Changing password"
keywords = ["Password"]
date = 2023-06-22T00:00:00Z
lastmod = 2023-06-22T00:00:00Z
+++

This article describes who can change passwords and for whom in the hierarchy of Survey Solutions users.

In the following table users assuming the role mentioned in the rows can change passwords of users mentioned in the columns.

<TABLE class="table table-striped table-hover">
<TR><TH width=14.28%>ROLES<TH width=14.28%>administrator<TH width=14.28%>headquarters<TH width=14.28%>supervisor<TH width=14.28%>interviewer<TH width=14.28%>observer<TH>API</TR>
  <TR><TH>administrator</TD><TD>only own password</TD><TD>yes</TD><TD>yes</TD><TD>yes</TD><TD>yes</TD><TD>yes</TD></TR>
  <TR><TH>headquarters</TD><TD>no</TD><TD>only own password</TD><TD>only if controlling this supervisor in all workspaces, to which the supervisor has access</TD><TD>only if controlling this interviewer in all workspaces, to which the interviewer has access</TD><TD>no</TD><TD>no</TD></TR>
  <TR><TH>supervisor</TD><TD>no</TD><TD>no</TD><TD>only own password</TD><TD>no</TD><TD>no</TD><TD>no</TD></TR>
  <TR><TH>interviewer</TD><TD>no</TD><TD>no</TD><TD>no</TD><TD>only own password</TD><TD>no</TD><TD>no</TD></TR>
  <TR><TH>observer</TD><TD>no</TD><TD>no</TD><TD>no</TD><TD>no</TD><TD>no</TD><TD>no</TD></TR>
  <TR><TH>API</TD><TD>no</TD><TD>no</TD><TD>no</TD><TD>no</TD><TD>no</TD><TD>no</TD></TR>
</TABLE>

##### Note also:

1. To change *own* password the user needs to enter the old password in addition to the new password. To change the password of another user (when permitted) there is no need to enter the value of the old password.

2. There is no functionality to *reveal* own password (or the password of another user) in clear text after that password is set. If the user forgets the password, the password for that account needs to be reset. See also [Password issues](/faq/password-issues/).

3. If the password for a user account has been assigned by a user other than the owner of that account that password must be changed on first login by the account owner (own password enforcement). For interviewers and supervisors that can be done from the tablet application or by logging in to the server, for other user accounts only by logging in to the server. Own password enforcement does not apply to accounts in API and administrator roles.
