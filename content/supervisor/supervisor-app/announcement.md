+++
title = "Supervisor App"
keywords = ["supervisor","app"]
date = 2018-09-27
+++

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
