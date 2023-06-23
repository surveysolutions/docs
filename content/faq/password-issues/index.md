+++
title = "Password issues"
keywords = ["Password"]
date = 2023-06-22T00:00:00Z
lastmod = 2023-06-22T00:00:00Z
+++

Click on the description of the case (1-15) below. Instructions vary depending on the type of password/login you are having an issue with.

<details>
  <summary>
    <B>1. Forgot your password for the Designer tool?</B>
  </summary>

1. Go to the Designer tool online: https://designer.mysurvey.solutions
2. Click `FORGOT PASSWORD?`
3. Enter your login (account name) or email address into the form field and click `RESTORE`.
4. Check your email inbox for a new message with a password reset link.

IMPORTANT: The email address here is always the same email address that you've used to register.
</details>

<details>
  <summary><B>2. Forgot your username for the Designer tool?</B></summary>

You can login with the email address that you've submitted during registration. Just specify your email address instead of the login in the same field.
</details>

<details>
  <summary><B>3. Forgot your email address in the Designer tool?</B></summary>

You can login with the account name instead, then check with which email address you've registered by selecting `MANAGE ACCOUNT` menu.
</details>

<details>
  <summary><B>4. Changed your email address? Update your account information in the Designer tool.</B></summary>

You can update the email address associated with your account:

1. Login to the Designer tool online: https://designer.mysurvey.solutions ;
2. Click on your username as displayed in the top-right of the page;
3. Click `MANAGE ACCOUNT`;
4. Update the email address in the corresponding field;
5. Click `CHANGE` to save your changes.
</details>

<details>
  <summary><B>5. Forgot your password and/or username for the users' forum?</B></summary>

Users' forum is located at https://forum.mysurvey.solutions .

It uses the same accounts as the Designer, so follow the steps for resetting the password in the Designer if you've lost access to the users' forum.
</details>

<details>
  <summary><B>6. Forgot password and/or username for the Android Tester App?</B></summary>

The Android Tester App imports questionnaires from the Designer, so it is using the same accounts as the Designer. Hence, follow the steps for resetting the password in the Designer if you can't log in to the Tester App.
</details>


<details>
  <summary><B>7. Forgot password for your PDS server? (your role was Administrator at that PDS server)</B></summary>

1. Login to the PDS portal: https://pds.mysurvey.solutions with the Designer credentials.
2. Click on the `SERVERS` tab.
3. Click on the server name.
4. Select `Request password reset` from the menu.
5. You will receive a password reset link to your email inbox.
Follow the instructions in this email.

[Click for more information](/headquarters/config/pds-password-reset/).
</details>

<details>
  <summary><B>8. Forgot password for an account on a PDS server? (your role is any other than Administrator at that PDS server).</B></summary>
  <BR>
  <P>
Contact the administrator of that PDS server for assistance. If you don't know who the administrator is, contact the person who has issued you the account credentials in the first place. The new password assigned to the user by the Administrator will need to be reset by that user after the first successful login.
</P><P>
A headquarters user may perform the password reset operation for user accounts of interviewers and supervisors only if that headquarters user is controlling that interviewer (resp. supervisor) in all workspaces that that interviewer (resp. supervisor) has access to. Otherwise only the server administrator may do the password reset for that user.
</P>
</details>

<details>
  <summary><B>9. Forgot password for an account on a data collection server? (your role is any other than Administrator at that server).</B></summary>
<BR>
<P>
Contact the administrator of that data collection server for assistance. If you don't know who the administrator is, contact the person who has issued you the account credentials in the first place. The new password assigned to the user by the Administrator will need to be reset by that user after the first successful login.
</P>
<P>
A headquarters user may perform the password reset operation for user accounts of interviewers and supervisors only if that headquarters user is controlling that interviewer (resp. supervisor) in all workspaces that that interviewer (resp. supervisor) has access to. Otherwise only the server administrator may do the password reset for that user.
</P>
</details>

<details>
  <summary><B>10. Forgot password for an account on a data collection server? (Your role is Administrator on that server).</B></summary>

Use the command line `support tool` as described [here](/headquarters/config/support-tool/).

Using this tool requires file-level access to the server. If you don't have access to the server at the file level (no access to the command-line) contact the person who does. (Typically this is the person who assisted you in installing the Survey Solutions server).
</details>

<details>
  <summary><B>11. Forgot the password for the export data archive?</B></summary>

Export data archive password is set up by the server administrator (separately for each workspace). If you are the user of exported data and can't unpack the data because it requires the password that you don't know, or the password that you know does not allow the data to be unpacked you need to contact your Survey Solutions Administrator, this must be the person who created an account for you.
</details>

<details>
  <summary><B>12. Assignment</B></summary>

In case when you've sent an invitation for a respondent to participate in a web-survey and that respondent has accidentally deleted that email:

1. seek through the assignments for mentioning of the respondent's email address;
2. If the assignment with this email is located, click on the assignment number and in the assignment details you will find both the link (URL) to the assignment page and the password to start it.

Note, that there may exist multiple assignments to the same email address, for example if you are running multiple surveys and the same respondent is a participant in 2 or more of them.

Make sure you are responding to the same email to which the original invitation has been sent or have otherwise reliably identified that the person requesting this password is the intended original respondent.
</details>

<details>
  <summary><B>13. Can't login to the Interviewer App on the tablet?</B></summary>

1. Ask your server's administrator to reset your account's password.
2. Verify that it was reset by signing in online. If it is, then you will be asked to create a new password for your account (your own password, different from the one issued to you by the administrator).
3. On the tablet when logging in login with the new password that you've selected. Do this for at least 5 times and the login form will display an additional button `TRY TO SIGN IN ONLINE`. Use this button to let the tablet connect to the server and get updated information on the changed password. The tablet must be connected to the internet at this step.

[Click for more information](/interviewer/app/password-reset/).
</details>


<details>
  <summary><B>14. Survey Solutions database restored from backup</B></summary>

The account password information is stored in the database on the server. If this database is restored from a backup then the passwords effective at the moment of the backup will be restored as current. Users not remembering their old passwords will need to utilize the above-listed procedures as appropriate for their role.
</details>

<details>
  <summary><B>15. Interviewer can sign in to the account online, but can't sign in to the tablet.</B></summary>

A firewall between your tablet and server may be preventing successful communication of the Interviewer App with the server. This has been experienced by several users, see e.g. [here](https://forum.mysurvey.solutions/t/incorrect-login-or-password-interviewer-app/3698).

The recommendations vary by situation, but the general advice is to work with the network administrator to identify the device/program responding instead of Survey Solutions, which happens to be the underlying reason for this problem.

Administrators of the servers in the WB can contact the WB LBADMIN to help detect and troubleshoot this issue.
</details>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
#### Instruction to the Survey Solutions administrators on how to reset user passwords.

1. Login to the data server under your administrative account.
2. Click on the gear-icon in the top-right of the screen.
3. Click on the `Users` in the menu that appears.
4. In the users' click on the user account for the user requesting the password reset.
5. Select the `Change password` tab.
6. Enter the new password twice and confirm the change by clicking `UPDATE`.
7. If necessary reset the 2FA for the user (see below).

Note that the user will have to select a new password the first time he or she logs into the system after such a password reset.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
#### Instruction to the Survey Solutions administrators on how to reset user two factor authentication (2FA)

Users that have lost the possibility to login to their accounts e.g. due to a loss of the authenticating device have to ask the Survey Solutions data server administrator to reset the 2FA for them.

As the administrator you:

1. Login to the data server under your administrative account.
2. Click on the gear-icon in the top-right of the screen.
3. Click on the `Users` in the menu that appears.
4. In the list of the users find and click on the user account for the user requesting the password reset.
5. Select the `Two factor authentication` tab.
6. Click the `RESET AUTHENTICATOR` button and follow the instructions.

If the 2FA must be reset for a user in the Administrator role, then it must be done with the [support tool](/headquarters/config/support-tool/).

[Click for more information on the 2FA](/headquarters/accounts/two-factor-authentication/).

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
#### Other reasons for not being able to log in

There are multiple other possible reasons why a user is not able to login:

- **the user attempts to log in to an incorrect synchronization point:** check the synchronization point address (the address of the server the user connects to);
- **account has been locked by a superior user:** users in the Administrator role can unlock it;
- **account has been archived:** users in the Administrator role can un-archive the user; [more](/headquarters/accounts/deleting-accounts/);
- **account in the disabled workspace:** users in the Administrator role can enable or disable workspaces; [more](/headquarters/accounts/workspaces/);
- **account is locked-out by the system**: this happens when there are too many unsuccessful login attempts, this issue will resolve itself after a cooling-off period; [more](/headquarters/accounts/autolock/);
- **account has been deleted as part of the workspace that has been deleted:** this account access is not recoverable.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
#### See also
- [Password change](/faq/password-change/).
- [Password best practices](/interviewer/app/password-best-practices/).
- [Survey Solutions Server Administrator](/headquarters/accounts/survey-solutions-server-administrator/).
- [Creating user accounts](/headquarters/accounts/teams-and-roles-tab-creating-user-accounts/).
- [Adding users to workspaces](/headquarters/accounts/adding-users-to-workspaces/).
