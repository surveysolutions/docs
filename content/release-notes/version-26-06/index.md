+++
title = "Version 26.06"
keywords = ["26.06"]
date = 2026-06-16T00:00:00Z
lastmod = 2026-06-16T00:00:00Z
+++

This release has benefitted from collaboration with colleagues from the [50x2030
initiative](https://www.50x2030.org/).

**Assignment statuses:** this version introduces statuses for assignments (previously only for interviews), which can be `Open`/`Completed`/`Closed`. This allows interviewers to signal to their supervisors that the assignments with infinite or multiple interviews are completed.

Read more about the assignment status and related workflows in the [Assignment Status](/headquarters/svymanage/assignment_status) article.

*Please note that this new feature is turned on by default.* If you are upgrading your Survey Solutions server this feature will immediately take effect providing the interviewers the possibility to close assignments. If this is not desirable in your operation - this can be switched off at the workspace level, (see [workspace settings](/headquarters/config/admin-settings#user-profile-settings)).


**Close is renamed to Downsize:** the functionality to change the expected number of interviews which was [introduced earlier](https://docs.mysurvey.solutions/release-notes/version-19-10#closing-assignments) in version 19.10 is still available, but is now known as ***Downsize*** not to be confused with the *Close* action and *Closed* status of an assignment that were introduced in this release.

**WebTester can be launched with Ctrl+I:** users of the Survey Solutions Designer that actively test their questionnaires will find a new shortcut in the Designer to quickly test their questionnaires: `Ctrl+I` compiles the questionnaire and launches the Web-Tester.

**Interviewers may change their own password:** to prevent abuse of a compromised password the interviewers now have the possibility to modify their own password at the server immediately. Interviewers logging in to the server through the web interface also have a possibility to set up 2 factor authentication. Earlier this functionality was entangled with the change of their name/contact information.

**Bugfixes:**

Several bugs were reported to the team including messages in the users' forum, GitHub issues and directly to the team that were now fixed:

- Android application crash occurred related to an audio recording question;
- Duplicate GPS coordinates were obtained in separate measurements;
- Map report was not drawing the map data;
- The assignment size changed event was not logged in the workspace audit log when it was done via *Close* (now *Downsize*) functionality.
- Geography data was exported as a Survey Solutions string despite selection of GeoJSON/WKTEXT (for some old questionnaires).
- `APPROVE` button was disabled in the Supervisor App when it was expected to be enabled.

If you are experiencing issues resembling those mentioned in this list, please update at the soonest.

Thank you to everyone who reported these problems!
