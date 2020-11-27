+++
title = "Batch User Upload"
keywords = ["batch","create case","survey case","sample mode"]
date = 2016-06-30T18:18:21Z
lastmod = 2020-11-27T01:01:01Z
aliases = ["/customer/portal/articles/2483438-batch-user-upload","/customer/en/portal/articles/2483438-batch-user-upload","/customer/portal/articles/2483438","/customer/en/portal/articles/2483438","/headquarters/batch-user-upload"]

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

To upload the list of users in batch mode select: `Menu` &#x2192;
`Teams and Roles` &#x2192; `Batch User Upload`.

Survey Solutions will request a file with the user accounts to be created,
validate the uploaded file, and create the user accounts. If any problems or
inconsistencies are found in the uploaded file, they will be reported and
accounts not created.

Depending on the number of users and server performance this process may
take a few minutes.


#### File format

The file with user accounts to be created must be prepared as a tab-delimited
text file, with the first line listing the column names and subsequent lines
(up to 10,000) listing user accounts (one account per each line).

The column names (case-insensitive) are as following:

<TABLE  class="table table-striped table-hover" border>
<TR class="header bg-warning"><TH>Column name</TH><TH>Column meaning</TH></TR>

<TR><TD colspan=2>Mandatory fields</TD></TR>
<TR><TD>Login</TD><TD>The login name of the user to be created. Note that the
spelling (capitalization) of the user name will be retained in the reports and
selections in the HQ. Note also, that the specified login name for an account
may not be changed in the future (though the whole account may be locked).
<BR><BR>
The login name must be between 3 and 15 characters long, and may contain only
letters, digits and the underscore symbol.
</TD></TR>

<TR><TD>Password</TD><TD>The password to the user account. The password is
case-sensitive.
<BR><BR>
An account password must satisfy the following complexity requirements:

<UL>
<LI>be at least 10 characters long,
<LI>include at least one digit ('0'-'9'),
<LI>include at least one uppercase ('A'-'Z') letter,
<LI>include at least one lowercase ('a'-'z') letter.
</UL></TD></TR>

<TR><TD>Role</TD><TD>The Survey Solutions user role assigned to the newly created
user account. It is one of the following words: <I>Supervisor</I>,
<I>Interviewer</I>. The spelling of the role is case-insensitive.</TD></TR>

<TR><TD>Supervisor</TD><TD>This value must only be specified for interviewer
accounts and denotes the login-name of the supervisor, to whose team this
interviewer account is added. The spelling of the supervisor's login-name
is case-insensitive.
</TD></TR>

<TR><TD colspan=2>Optional fields</TD></TR>

<TR><TD>Fullname</TD><TD>Real full name of the user that receives this account.
<BR><BR>
Person's name must be no longer than 100 characters and may only consist of
letters, dots, spaces, and apostrophes. </TD></TR>

<TR><TD>Email</TD><TD>Email address of the user that receives this account.
<BR><BR>
An email address must conform to the rules of email addresses. Invalid email
addresses may not be stored.</TD></TR>

<TR><TD>Phonenumber</TD><TD>Phone number of the user that receives this account.
<BR><BR>
The phone number must be numeric and no longer than 15 digits.</TD></TR>

</TABLE>

Note that the fields **login**, **password** and **role** are mandatory, and
must be filled out for every user in the list. The supervisor field **must**
be specified for the interviewers' accounts only.

#### Example file

Here is an [example file](users.tab), which creates a new team of supervisor
*Heidy Jones*, and adds two new interviewer accounts for
*Mary Smith* and *John Smith* to this team.

Do not use this file to create actual interviewer accounts as it shows the
passwords publicly in clear text.

#### Possible problems that may be reported

Survey Solutions will validate the uploaded list of the users report if
any problems are found:

-   empty required fields (login, password, role);
-   duplicate user accounts;
-   passwords not conforming to the security requirements (too short,
    etc);
-   unknown supervisors (all interviewers created must become part of
    the team of a supervisor known to the system);
-   and other checks as described in the fields' descriptions above.
