+++
title = "Interviewer Password Reset"
keywords = ["interviewer","password","reset"]
date = 2019-04-05T07:07:07Z
lastmod = 2019-04-05T07:07:07Z

+++

This article describes the actions of the supervisor in case the interviewer forgets the
password that was assigned to him.

Survey Solutions doesn't store the passwords of interviewers in the clear text. So if it 
is forgotten, no user may look it up inside Survey Solutions, neither the Supervisors, 
nor the Headquarters, nor the Administrator users.

<U>Important</U>: The interviewer may not change his own password himself. This requires
cooperation of his supervisor or a headquarters user.

The practical sequence of actions is the following:

1. Interviewer realizes he has forgotten the password and can't login to the application.
2. Interviewer contacts the supervisor and asks to assign a new password.
3. Supervisor assigns the new password to the interviewer (in this interviewer's profile).
4. Supervisor communicates the new password to the interviewer.
5. Interviewer enters any text to the password box at the login screen 5 times. After that
the system will suggest to login online with the message
"*YOU COULD TRY TO SIGN IN ONLINE IF YOU FORGOT YOUR PASSWORD OR IT WAS RESET*".
6. Interviewer enters the newly communicated password and presses the "*Try to sign in
online*" button. This step requires connection to the server, so the tablet must be online.
7. If the password was entered incorrectly, the interviewer will receive the message
"*AUTHENTICATION PROBLEM ON THE REMOTE SERVER. PLEASE CONTACT YOUR SUPERVISOR*".
8. If the password was entered correctly, the interviewer will be taken to the dashboard.
The new password should be utilized from this moment on by this interviewer for all logins.

Note: If for any reason the supervisor or the headquarters users change the password of an
interviewer while he is logged in, he will not be able to synchronize: once he tries to 
synchronize a message will pop up requesting him to enter the new password.

**Caution:**

All interviewers accounts are made either by headquarters or administrator users. This means 
that initially the supervisors have no knowledge of their interviewers' passwords. Once an 
interviewer requests that the supervisor assigns a new password, the supervisor will 
automatically have the knowledge of that interviewer's password. If this is not desirable,
the interviewer should ask the headquarters (or an administrator) to perform the change of 
the password.

When an interviewer requests a new password the supervisor must make sure that he can
confirm the identity of the person using other means.

See also: password best practices.
