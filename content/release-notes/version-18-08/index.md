+++
title = "Version 18.08"
keywords = ["18.08"]
date = 2018-08-06T09:00:00Z
+++

Version 18.08 of Survey Solutions contains a major, new component: an offline Supervisor App that can be used on Android tablets to provide supervision and quality control while in remote areas and disconnected from the Survey Solutions' data server. We have also made a number of other improvements outlined below.

## Supervisor App
The Supervisor App is an Android application for the supervisors to perform their main responsibilities in the field. A connection to the internet is no longer required for the supervisors to perform the following duties:

1. Distribute assignments between the team members (interviewers);
2. Receive completed interviews from the interviewers;
3. Review information in completed interviews and leave comments;
4. Answer supervisor questions;
5. Approve or reject the submitted interviews;

The Supervisor app synchronizes with the main Survey Solutions server (HQ) to receive new assignments and submit completed interviews received from the interviewers when the internet connection is available.

This means that a team of interviewers traveling with a supervisor to a location with no internet coverage can be fully autonomous, provided they are travelling with installed and configured Interviewer and Supervisor Apps, and the supervisor has downloaded from the HQ server the assignments for the whole team. That means that the supervisors can review the interviews while disconnected from internet without worrying about the cost or reliability of internet during these reviews.

The Supervisor App has the same technical (i.e., hardware and software) requirements as the Interviewer App so that the same tablets may be used by interviewers and supervisors working offline. The communication between the interviewer and the supervisor components while disconnected from internet relied on a combination of a Bluetooth or WiFi connections. A supervisor’s and interviewer's tablets should be within several meters from each other to connect.

The Survey Solutions data server does not receive any updates from the Supervisor App when it works disconnected. This has the following implications:

- Reports shown in the Headquarters are less up to date. They reflect only those interviews collected up until the point when each supervisors synchronizes. Any interview completed after supervisor synchronization will be reflected in reports only after the supervisor syncs again. In earlier versions of Survey Solutions, when the interviews were sent directly to the server, Headquarters’ reports were always up to date. In the current version, there is now some potential for reports to be stale. But frequent supervisor synchronization can help minimize this difference;
- Supervisor tablets that accumulate completed interviews are the only storage of these interviews and must be especially protected from loss or damage, or else all the unsynchronized data will perish with them.

The Offline Supervision is major, new functionality that we are releasing, initially, as experimental. Over the next one to two development sprints, we plan to work on stabilizing and improving this functionality. During that period, we are seeking your feedback, and your help in identifying any issues with Offline Supervisor app. Before using this feature for an important survey survey, we ask that you carefully test its use, confirming that everything works correctly for your intended field protocol, survey equipment, and questionnaire. If you discover any issues, let us know.

Should users want to continue using the Survey Solutions’ online supervision mode-- server-based Headquarters, server-based Supervisor, and tablet-based Interviewer--no additional actions are required. Survey Solutions will continue working the same as before this release.

## Other changes

1. Interviewers and Supervisors may now **review interviews in a flat, compact view**. By clicking OVERVIEW, they can see a compact presentation of the interview. The purpose of the flat view representation both on tablets and on HQ is to offer to interviewers and supervisors an alternative and, for some users, more convenient way to review interviews. _This feature was requested by Statistical Mauritius and other users_.
{{< imgproc "images/interview flat view - on tablet, and on HQ or Supervisor.png" Fit "800x600" />}}
2. **interview__diagnostics file** is a special service file, automatically produced with every data export, that contains useful information for assessing the quality of interviews: number of questions left unanswered, number of invalid answers, number of questions with comments, duration of the interview etc. This is especially useful for user-written monitoring systems that work alongside Survey Solutions and continually monitor the quality of incoming data by periodically exporting the data and building customized reports. Supervisors already had access to all the same information interactively through interview details and interview history pages. The interview statistics API endpoint has been updated to obtain the same information for API consumers. _This feature was proposed by Andreas Kutka and other users._
3. **Questionnaire variable** field is a new mandatory field for questionnaires in Designer. Previously, the Questionnaire name field dictated the name of both the questionnaire and its main export file. Now, the questionnaires have two fields in Designer: the Questionnaire name field is a human-readable name that can contain any characters you wish, in any language, and can be rather large. The Questionnaire variable field is an identifier that will be utilized by Survey Solutions during export of the data for naming the main data file and should follow the same rules as applied to variable names and roster names. This makes the naming of files more rigid and independent of the language in which the questionnaire was designed. For questionnaires to be valid, both identification fields must be populated. That means that this field must be filled for new old questionnaires as well as newly created ones.  
{{< imgproc "images/questionnaire name, questionnaire variable fields.png" Fit "800x600" />}}
4. Questionnaires may now utilize **text substitution in instructions**.
5. **Timestamps in paradata** now reflect the local time on the clock of the device where an event was recorded. A new column ‘offset’ was added to reflect the time-zone difference of the device where the event was recorded compared to Greenwich Mean Time (GMT).
6. **Set up an Interviewer tablet by scanning a barcode**. Setting up the Interviewer App just got much easier. Previously, set-up required manually inputting three parameters: URL of the server, login of the interviewer, and the password of the interviewer, the first two of which are stored immutably after being entered. Now, Survey Solutions HQ displays a QR-code in the interviewer’s profile that can be scanned by the tablet to automate set-up. To do this, press the QR-code button during the initialization phase, and point the tablet camera at the screen displaying the QR-code or a print out of the QR-code. Server URL/IP and user login name will be prefilled. The password is never read or shown as a QR-code and still must be entered manually. This simplifies the entry of the configuration information, especially when it is an IP address and not a server name. 

{{< imgproc "images/Interviewer set-up with QR code.png" Fit "800x600" />}}
