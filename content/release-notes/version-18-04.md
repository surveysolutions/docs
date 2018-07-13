+++
title = "Version 18.04"
keywords = [""]
date = 2018-04-02T22:42:28Z
lastmod = 2018-04-02T22:42:28Z
aliases = ["/customer/portal/articles/2932045-version-18-04"]

+++

The April 2018 release ushers in numerous improvements to each component
of the Survey Solutions. We have also changed our version numbering
notation and from now on will use the YY.MM notation for new versions,
such as 18.04 for the April 2018 release. Some of the features below are
new functionality that are described in more details in the
corresponding linked articles.

### Designer

-   **Validation warnings**, [read the
    article](/questionnaire-designer/validation-warnings);
-   **Special values** for numeric questions, [read the
    article](/questionnaire-designer/special-values-for-numeric-questions);
-   **Capturing signatures**, (as requested by Mr. *Eugene Ehlers*,
    AHRI) [read the
    article](http://support.mysurvey.solutions/customer/en/portal/articles/2931992);
-   **Comments in Designer**, [read the
    article](http://support.mysurvey.solutions/customer/en/portal/articles/2932008);
-   **Export questionnaires as HTML** (as requested by Mr. *Edwin St.
    Catherine*, CSO St. Lucia);
-   **Reload questionnaire in Web Tester**: When the reload button is
    pressed, the web tester will behave just like the tablet Tester
    application: the questionnaire will be updated to reflect recent
    changes, while the data previously entered will be preserved and all
    condtions re-evaluated.
-   Prevent **circular references** in enabling and filter conditions,
    [read the
    article](http://support.mysurvey.solutions/customer/en/portal/articles/2932022). 

### Headquarters

-   **Compact presentation** of answered categorical questions in
    interview details view with only selected answers shown in single-
    and multi-select categorical questions;
-   Old interview details page retained in several previous versions to
    facilitate transition to the new design is now **deprecated**;
-   **Customize web interview messages**, (as requested by Mr. *Michael
    Rahija*, FAO) [read the
    article](/headquarters/customize-web-interview-messages);
-   Export binary data to user-designated **cloud data storage**, [read
    the
    article](http://support.mysurvey.solutions/customer/en/portal/articles/2932041).

### Supervisor

-   **Map report** is now available **for supervisors**, (as requested
    by Mr. *Phil Bright*, SPC and other users) covering interviews in
    their responsibility (report for all interviews remains available to
    the Headquarters users).
-   Speed report uses **active interview time**: active interview time
    is defined as time when the tablet screen is on and an interview is
    open in the Survey Solutions Interviewer application. This is more
    relevant for interview duration estimation, over the approach in
    earlier versions, which based the reports on simple difference
    between the timestamps at start and finish of the interviews.

### Interviewer

-   **Search on the dashboard** (as suggested by Mr. *Luqmaan Omar*,
    StatsSA) allows locating the interviews across the various tabs of
    the Interviewer application.

### Advanced features and troubleshooting tools

-   **Automatic update of the Interviewer application** is now default
    mode on all Survey Solutions servers. The updates are performed
    automatically by determining only the minimal information that is
    necessary to be send and the size of the files is typically smaller
    than 200kb, which makes it possible to receive the critical update
    for interviewers working even in the most difficult connectivity
    modes; automatic updates can be disabled by server administrators,
    though this is not desirable in typical scenarios.
-   **Export questionnaires from the Headquarters** for the Survey
    Solutions technical support team in case the original questionnaire
    has been modified or deleted in the Designer.
-   **Capture log of interviews created and deleted on the tablet**: the
    Interviewer application captures what happens to each interview,
    including those that are created and deleted on the tablet before
    syncing. In this way, the Headquarters and technical support teams
    can know what happened on the tablet, and thereby better
    troubleshoot interview reports of missing interviews.
-   **New API endpoints** for users utilizing API automation: posting
    comments to interviews and getting the interview statistics (number
    of questions answered, unanswered, flagged, valid, invalid, with
    comments, etc). [See the API
    documentation](https://demo.mysurvey.solutions/apidocs/index).
