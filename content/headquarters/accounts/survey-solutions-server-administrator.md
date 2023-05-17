+++
title = "Survey Solutions Server Administrator"
keywords = [""]
date = 2017-10-06T15:14:22Z
lastmod = 2023-05-17T00:00:00Z
aliases = [
"/customer/portal/articles/2885558-survey-solutions-server-administrator",
"/customer/en/portal/articles/2885558-survey-solutions-server-administrator",
"/customer/portal/articles/2885558","/customer/en/portal/articles/2885558",
"/headquarters/survey-solutions-server-administrator",
"/faq/actions-before-the-survey-starts",
"/faq/actions-during-the-survey/",
"/faq/actions-after-the-end-of-the-survey/",
"/customer/portal/articles/2723106-actions-before-the-survey-starts",
"/customer/en/portal/articles/2723106-actions-before-the-survey-starts",
"/customer/portal/articles/2723106","/customer/en/portal/articles/2723106",
"/customer/portal/articles/2723112-actions-during-the-survey",
"/customer/en/portal/articles/2723112-actions-during-the-survey",
"/customer/portal/articles/2723112","/customer/en/portal/articles/2723112",
"/customer/portal/articles/2723118-actions-after-the-end-of-the-survey",
"/customer/en/portal/articles/2723118-actions-after-the-end-of-the-survey",
"/customer/portal/articles/2723118","/customer/en/portal/articles/2723118",
"/customer/portal/articles/2723099-cloud-server-instructions",
"/customer/en/portal/articles/2723099-cloud-server-instructions",
"/customer/portal/articles/2723099","/customer/en/portal/articles/2723099"]

+++

Every Survey Solutions server has an administrator. This is the first user
account created after Survey Solutions is installed, typically by the same
person who performed the installation.

{{< panel title="" style="warning">}}
<BR>
Administrator is a privileged account and can do important actions which
may result in damage to data. Assign a responsible and informed person
as an administrator! We recommend that the administrator has attended a comprehensive
Survey Solutions training.
{{% /panel %}}

An administrator can do (almost) everything an HQ user can do plus some
exclusive actions:

- create and manage [workspaces](/headquarters/accounts/workspaces/);  
- [create HQ](/headquarters/teams-and-roles-tab-creating-user-accounts-#hqaccounts)
    user accounts,
    [observer](/headquarters/teams-and-roles-tab-creating-user-accounts-#observer)
    user accounts and
    [API](/headquarters/survey-solutions-api)
    user accounts (in addition to supervisors and interviewers as an HQ
    user can do), change passwords for these users;
-   configure [workspace-related settings](/headquarters/admin-settings):
  - set up a logo for the server and the tablets;
  - leave a message for all of the HQ users and supervisors;
  - password-protect downloadable data;
  - configure other workspace-related settings and permissions.
-   [delete a survey](/faq/deleting-a-survey)
    (questionnaire and all data);
-   unarchive a user;
-   inspect the [server audit log](/headquarters/svymanage/audit-log/).

Note that a server administrator may not be designated responsible for
assignments, while a headquarters user may be.

An administrator of the Survey Solutions data server must be familiar with the
following procedures:

<details>
  <summary>Actions before the survey starts</summary>

  1. If the password has been received via email, log in and change the password:

     -  make sure you select a strong password!
     -  do not share the administrator password with anyone;
     -  do not forget the administrator password and store securely with
        important records, (but not in an open/visible place!);
     -  do not mention the administrator password in emails;
     -  do not use administrator account for day-to-day HQ operations.

     See more recommendations in the [Password Best Practices](/interviewer/app/password-best-practices/).

  1. It is recommended to turn on the
     [two factor authentication (2FA)](/headquarters/accounts/two-factor-authentication/)
     for the administrator account.
  1. Check the [admin server settings](/headquarters/config/admin-settings/),
     adjust the logo, global message,
     [bulk email providers](/headquarters/cawi/email-providers/), and other
     parameters as necessary.
  1. [Create accounts](/headquarters/accounts/teams-and-roles-tab-creating-user-accounts/)
      for one or more headquarter users (including one for yourself).
  1. Log out from the administrator account. For your own safety do not
      use administrative account for day-to-day operations. Use
      administrative account exclusively to perform the tasks that HQ
      users can’t perform, such as adjusting the server's
      [admin settings](/headquarters/config/admin-settings/) or
      [deleting a survey](/faq/deleting-a-survey/).
  1. Do communicate the credentials for the accounts you create on your
      server with the corresponding users (supervisors, interviewers,
      etc). These users do not receive their credentials per email, even if an
      email is specified at the time the user account is created.

</details>
<details>
  <summary>Actions during the survey</summary>

  1. Monitor the functioning of the server. Analyze any crashes, faults,
     overloads or abnormal behavior.
  1. Address user requests, such as password reset for HQ users, and other
     tasks that can't be performed by HQs.
  1. Collect and analyze user problem reports. Attempt to address them to
      the extent possible. Refer the users to the corresponding sections
      of the manuals and for non-described situations to the [Survey Solutions users' forum](https://forum.mysurvey.solutions).
  1. Preserve the copies of the uploaded sample files and split-key
      files.
  1. Periodically download, back up, and securely store the export data.
  1. Promptly respond to the notifications of the network administrator.
  1. Monitor the progress of the survey.
  1. Monitor and install the updates to the Survey Solutions software (!).
  1. Monitor and install updates to other software and OS installed on
     the server to maintain safe and secure environment(!).

*(!) requires access to the server's operating system GUI or command line.*

</details>
<details>
  <summary>Actions after the end of the survey</summary>

  At the end of your survey you need to secure the collected data, to avoid it being irreversibly lost. You may need to repeat the following actions for every workspace (if there are multiple workspaces set up on the server).

  1. Instruct the interviewers to stop conducting interviews, mark them
      as completed.
  1. Synchronize all the interviews data from the tablets to the server.
     Make sure that the synchronizations complete successfully. (If a
     synchronization is finished with an error, the server may not have
     received the data from the tablet!)
  1. Do the final approvals/rejections of the submitted interviews.
  1. In HQ proceed to the data export screen.
  1. Download ALL data in all formats (tab-delimited and Stata and SPSS).
      Download data even in formats which you don't immediately plan to
      use.
  1. Repeat for every version of the questionnaire (if the questionnaire
     was ever updated on the server).
  1. Repeat for other statuses (approved by headquarter, etc) as
      necessary.
  1. If you collected any multimedia data (images, audio,..) you need to
      download the binary files too. This can often be a lengthy download.
  1. Count the files and make sure you have downloaded all of them.
  1. Test every downloaded archive to make sure there is no data transfer
      error.
  1. Open every archive and visually inspect downloaded files. Do not
     delete the survey from the server if you notice any irregularities
     in the downloaded data.
  1. Store your downloads on a secure media
  1. Immediately make a secondary backup copy of the downloads,
      preferably on a non-eraseable media (CD/DVD).
  1. Clearly mark each backup copy. Indicate the user who created the
      backup, date, survey name, and other information. If you are
      uploading your backup to the file storage create an accompanying
      readme file.
  1. Do not transform, convert, or otherwise process the data downloaded
      from Survey Solutions server before securing the downloaded files.
  1. Review and save/print any reports you may need from the server.
      Reports are not part of data export.
  1. Only [delete a survey](/faq/deleting-a-survey/) or dispose of the
     server once you complete all the procedures in this list.

</details>
