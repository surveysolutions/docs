+++
title = "Version 18.10"
keywords = ["18.10"]
date = 2018-10-01T11:38:43-04:00
lastmod = 2018-10-01T11:38:43-04:00
draft = false
+++
The changes in this release were focused on improvements in the backend functionality, refactoring, and code optimization. These new features, while invisible to the end users, greatly improve scalability of Survey Solutions for the very large surveys and censuses, significantly reduce the size of the main database, reduce processing time in many core activities, and ultimately allow developing more efficient, higher quality code.

A lot of effort was dedicated to further improvements in the Offline Supervisor app. We encourage you to start intensive testing and using of the Offline Supervisor in your surveys. Please [send us](https://forum.mysurvey.solutions/c/feature-suggestions) your feedback and reports on any issues you have encountered.

We also expanded and improved the set of low-level APIs to allow Survey Solutions to communicate more efficiently with external datasets. This work is done in preparation to the upcoming functionality of integrating Survey Solutions with external repositories.

Among other improvements:

#### Designer

- Comments on questions can now be deleted
- A *variable name* column is added to the questionnaire translation file to simplify search of lines to be translated
- A new optional field *full name* added to the user registration. We plan to use this name (instead of username) as display name
in our [portal](https://mysurvey.solutions) and the [forum](https://forum.mysurvey.solutions).

#### Headquarters

- Harmonization of *interview__id* variable names in export files
- Improvements in the interviewer path representation on the Interviewer profile page
- Interviewer profile now shows the correct serial number that coinsides with the serial number printed on the tablet cover
- Supervisor/Team filter is added to the Status Duration Report
- New filter added on the Assignment page. Assignments could be filtered by: "All", "Received by interviewer", "Not received by interviewer"

#### Interviewer

- Long text entered into the Text questions on tablets and on the web interviews is now wrapped into several line, thus making the content visible without scrolling.
