+++
title = "Version 19.07"
keywords = ["19.07"]
date = 2019-07-18T13:13:13Z
lastmod = 2019-07-18T13:13:13Z
+++


## Improvements to management of interviewers at HQ

- The list of interviewers presented at the server for the Headquarters and 
Supervisors will now contain the full name of the interviewers alongside 
their login names.

- For interviewers whose account is locked, a padlock icon will be displayed
next to their account name as a reminder for their supervising staff that 
the user is blocked from communicating with the server.

- The administrator of the server may decide whether to allow or disallow 
the interviewers to update/modify their profile information. If permitted, 
interviewers may enter, change, or remove their contact information:
email, phone, and full name. If not permitted, the changes will be permitted
for the supervisors/HQ users only.

## Improvements to presentation of the table rosters

- table rosters (present in web mode only) will display the roster title, 
which was previously omitted ([requested by the NSSO team](https://forum.mysurvey.solutions/t/roster-name-is-not-appearing-while-testing-the-questionnaire/1707));

- table rosters will indicate the question has an instruction with a blue
marker on the column header. The instruction will be displayed when the 
mouse cursor hovers on top of it.

## Controlling audio recording

Audio recording can now be controlled at assignment creation in both
single and batch mode:

- for single assignment creation: the checkbox is available, which must
be set or left blank by the HQ user creating the assignment. The default
setting is OFF (regardless of the current survey audio audit setting!).

- for batch assignment creation: a new variable _record_audio may be 
specified in the preloaded assignments files, which may specify for every
assignment values: 1 if the recording should be done, 0 should not be 
done, or left blank to inherit the value from the setting currently
specified for this survey.

## Changes to export

- export screen now visualizes the queue of data export requests, showing 
which results are available to be picked up, and which are still waiting
in queue for processing, and which push-to-cloud requests are currently
being performed.

- the structure of folders in the cloud storage has changed to facilitate
accumulation of data from multiple servers in the same cloud storage and 
to allow export of multiple main data files (in different formats or statuses) 
in addition to the binary data files.

## Other/miscelleneous changes

- Interviewers will see the UPDATE button at the end of synchronization of
their tablets if a new version of the Interviewer App is available and may
be installed.

- A comment may be specified by the HQ/Supervisor user when approving or
rejecting multiple interviews. In this case the same comment is attached
to each interview that will be affected by the operation.


## Minimal requirements updated

- Android 5.0 or higher is required for all Android-based Survey Solutions
components (interviewer, supervisor and tester apps). If the Tester App
does not appear in your search results when you are searching for it in the
Google Play, then it is likely your device has an older version of Android,
please, update or use a different device.

- Microsoft .Net 4.8 is now required for the standalone server installation.
If the installer can't download the corresponding .Net version automatically,
you may need to download and install it manually prior to installing or
updating Survey Solutions.
