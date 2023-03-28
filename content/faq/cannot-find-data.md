+++
title="Where is My Interview?"
keywords = ["data loss", "data lost", "interview lost"]
+++

This page is summarizing information that may help resolve the issue of the user not being able to find interviews. All of the below situations were encountered in practice while troubleshooting users' reports of "*Data loss*" (no matter how absurd they may sound).

None of the situations described below constitutes a defect or a bug, as in these cases data is not lost by the system itself, but rather it is erased as a result of a specific and predictable action by the user.

Inspecting the situations together with the HQ staff and the interviewer involved often allows determining what exactly has happened, so please, do this before requesting support on the 'data loss' issues.

The developers are not aware of any reproducible scenario where the data loss occurs from the defects of the design of Survey Solutions. If you become aware of such a scenario, please raise an issue with a sufficient description.

-------

### The Data is being Collected with the Tester App.
The Tester App should not be used for data collection because it doesn't save or send the data anywhere. Some facilitators inappropriately conduct training with the Tester App, thus creating a confusion which App should be used for data collection.

**Recommendation:** Actual interviewers should not be exposed to the Tester App, only the Interviewer App. The Tester App is a tool for questionnaire designers and QAs.

-------

### The Data is being Collected and Sent to a Different Server
If the training and actual fieldwork are taking place on different servers some interviewers may fail to receive, understand, or perform the instructions to switch the server, and if their application was configured to use the training server, they may be sending the data there.

**Recommendations:**

1. If the training and actual data collection is done in different servers, after the training is completed, the training server should be disposed of. If it is still needed (e.g. for training of other groups of interviewers) then the accounts of the interviewers that have completed training should be locked or archived. This will make the problem apparent.

2. To confirm the issue the troubleshooter should inspect the synchronization point as saved in the Interviewer App's settings for that interviewer.

3. When troubleshooting remotely, check if the interviewer has connected to the new server. If not, this is evidence that he/she is probably sending data elsewhere. If yes, it may be inconclusive, as the synchronization point can be manipulated afterwards.

-------

### The Questionnaire has been Deleted on the Server
If the questionnaire is [deleted on the server](/faq/deleting-a-survey/) all the data in that survey is deleted with it. Including any and all data on any mobile devices whether it was or was not sent to the server before such deletion. The deletion is only available to the administrator user, and an adequate warning and precaution is taken no to allow this to be clicked accidentally.

**Recommendation:** Only delete the surveys when you are absolutely sure that no new data can be sent from any of the mobile devices or web-respondents, and when the data has been properly downloaded and securely stored.

-------

### The Interviewer App has been Uninstalled
Uninstalling the Interviewer App automatically erases all the data associated with this app (this is a standard Android behavior). The App itself can't resist from being uninstalled.

**Recommendations:**

1. Explain to the interviewers that uninstalling the Interviewer App will erase all unsynchronized interviews.
2. Explain to the interviewers that when they need to update the Interviewer App, they need to install the new version on top of the existing version, rather than uninstall the previous version and install the newer one.
3. Block the possibility for the interviewers to uninstall Apps in Android (this may require restricting the user account and/or installation of third-party Apps delivering such specialized functionality).

-------

### The Interviewer App's Data Cleared
Android OS allows an App's data to be cleared. In the user selects this action all the data of that App is erazed, resulting in the deletion and loss of any interviews that haven't been yet sent to the server.

**Recommendations:**

1. Explain to the interviewers that clearing the Interviewer App's data will erase all unsynchronized interviews.
2. Explain to the interviewers that when they need to update the Interviewer App, they need to install the new version on top of the existing version, rather than clear the data for the previous version and install the newer one.
3. Block the possibility for the interviewers to clear Apps's data in Android (this may require restricting the user account and/or installation of third-party Apps delivering such specialized functionality).

-------

### The interviewer's Mobile Device has been Re-Linked
When the interviewer links a new device to his/her account on the server, no data from the old device will be received by the server anymore. Correspondingly the old device should not be used for any data collection. But if it is not actully lost, stolen, or damaged, the interviewer may be tempted to continue using it (and may do so for a considerable time without realizing that she will not be able to send that data anywhere).

The Interviewer App issues a prominent warning about this including the warning of the data loss, which happens only when the interviewer confirms.

There are many different variations when this may occur even without the interviewer doing anything wrong, but they mostly depend on the interviewer's login/password made known to other users.

**Recommendations:**
1. Explain [consequences of re-linking](/interviewer/troubleshooting/consequences-of-relinking-a-tablet-device/) to interviewers.
2. Do not share the passwords.
3. Follow [best practices](/interviewer/app/password-best-practices/): do not make passwords ***same*** for all the users, do not make passwords, which are ***predictable*** for the users (e.g. password same as the user name), and other bad practices.
4. Keep track on which accounts have been issued to real persons (such as when you are distributing generic accounts interviewer1, interviewer2, etc). This is best done by populating the full name of the user in the account properties.
5. Make sure the old device is ***successfully*** synchronized before re-linking to the new device! Remember that not every synchronization session is successful!

-------

### The Interviewer is 'No Longer Responsible'
An interview is rejected to an interviewer X, and then after that interviewer synchronizes and receives the rejected interview, it is reassigned to another interviewer Y.

The person performing such reassingment receives a prominent warning from Survey Solutions that this action may result in such an undesirable result.

When interviewer X tries to submit the interview to the server, it is accepted by the server, is erased on the tablet, and the supervisor/HQ do not see the changes made by interviewer X when they review the interview.

This happens because the interview was already reassigned to interviewer Y. Correspondingly receiving it from interviewer X is not expected by the system and that data is discarded (technically it is stored in the `broken packages`, but it is irrecoverable for users' purposes).

**Recommendations:**
1. Only reassign if you know that original responsible will not be able to work on the interview.
2. Notify the original responsible about the reassignment asap using other means (email, phone, messenger) that he/she is no longer responsible for the interview and request to synchronize asap, in that case the rejected interview card will be removed from the dashboard of that interviewer and he/she will not be able to work on that interview.

-------

### The Mobile Device of the Supervisor is Lost
When interviewers are synchronizing with the supervisor's mobile device, rather than with the server directly, the supervisor's device stores the data collected by all the interviewers of his/her team. If the supervisor's device is lost, stolen, or damaged before the synchronization is performed, that destroys all of these interviews as well.

**Recommendations:**
1. Synchronize the supervisor's device as frequently as possible.
2. Protect the supervisor's device with extra care. This includes all sort of protection from damage (water damage, breaking damage, electric shock, battery overcharge/burn/explosion, etc) and theft. The survey coordinator must give explicit instructions to the field staff on what their behavior should be in case of physical threat to balance personal safety and safety of the data.

-------

### The Interviewer Discards the Data
The interviewer has the possibility to discard an interview (started or completed) in the Interviewer App. This functionality is available before the interview has been sent upstream (to the supervisor or to the server) at least once.

The interviewer gets a prominent warning that he/she is erasing the data and this can't be undone, and the interview is discarded only when the interviewer confirms.

**Recommendations:**
1. Explain to the interviewer that discarding an interview is an irreversible action.
2. Evidence that an interview was discarded can be found in the `detailed actions log` for that interviewer's account (after synchronization with the server).

-------

### The Headquarters Database was Restored from a Backup
Restoring the database from a backup reinstates it in that volume as it was backed up. Thus any interviews sent by the interviewers after the backup was done will be discarded when the database is restored from the backup.

-------

If you are aware of any other situations where the data may appear to be 'lost' purely because of the actions of the user, please, discuss in the [users' forum](https://forum.mysurvey.solutions) to append to this list.

The Interviewer App contains several tools in the `Diagnostics` menu, among which is `Collect and send to HQ all tablet information`, `Send trace logs`, and `Generate support package`. None of these tools was designed as a data backup/restore feature, nor should the end users attempt to use this functionality for this purpose. Even in cases when these files may contain the data of the interviews that the survey coordinator may wish to restore, the software developers have no capacity to assist with these matters.
