+++
title = "Server Audit Log"
keywords = ["admin", "Audit Log"]
date = 2019-08-04T22:22:22Z
lastmod = 2019-08-04T22:22:22Z

+++

Survey Solutions server [administrator](/headquarters/accounts/survey-solutions-server-administrator/) 
may inspect the server audit log. The audit log lists important events that were initiated by the users on the server, identifying who
made that action, and when.

For actions of interviewers, see the [detailed actions log](/headquarters/reporting/detailed-action-log/).

The following actions/events are recorded in the audit log on the server:

<OL>
  <LI> survey questionnaire imported;
  <LI> survey data exported;
  <LI> survey deleted (questionnaire and data);
  <LI> [observer](http://localhost:1313/headquarters/accounts/survey-solutions-server-observer/), 
headquarters or [API user](http://localhost:1313/headquarters/api/survey-solutions-api/) created;
  <LI> interviewer moved from one team to another;
  <LI> assignment size changed;
  <LI> assignments upgraded to a newer version of the questionnaire.
  <LI> encryption of exported data has changed.
</OL>
  
{{< imgproc "images/852912.png" Fit "800x600" />}}   