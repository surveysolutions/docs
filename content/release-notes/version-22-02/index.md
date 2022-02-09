+++
title = "Version 22.02"
keywords = ["22.02"]
date = 2022-02-09T00:00:00Z
+++

The new version 22.02 brings the following new features:

1. [Changes to the Designer](#changes-to-the-designer)
1. [Changes to data server management](#changes-to-data-server-management)
1. [Supervisor-related changes](#supervisor-related-changes)
1. [Web-Interview related changes](#web-interview-related-changes)
1. [Stability related changes](#stability-related-changes)


## Changes to the Designer

- Questionnaires with only a cover page are now allowed. Previously any questionnaire must have contained at least one section with a question beyond the cover page. This allows creating more compact questionnaires, such as ones collecting contact information, registrations, etc.
- The first section of a questionnaire may not have contained an enabling condition. Now it is allowed. This can be useful if all sections in the questionnaire depend somehow on the information specified in the cover page, and even the first section of the questionnaire may need to be switched off sometimes.
- Removed custom title checkbox for rosters. Survey Solutions generates the roster titles automatically, and provides a possibility to override the default title. This used to be done by setting a checkbox `Custom title` and then specifying the template for it. Now this interface is simplified: the template field for the titles is always visible, and is initialized to the default template when the roster is added. The user has a possibility to edit this template directly if necessary. For existing questionnaires the migration will populate the title field with the appropriate template taking into account any earlier made customizations.
- The limit on the number of items in a single section has been raised to `1,000` (earlier was `400`). This limit applies to the total number of elements in the section counting all elements in that section and all sub-sections. The limit of 400 still applies to any sub-section. Example, if there is a section A, and it includes sub-sections A1, A2, A3, then the questions can be accommodated: 100 in A, 300 in A1, 300 in A2, 300 in A3 (total is 1000 and no sub-section contains more than 400). But the following can’t be accommodated: 100 in A, 100 in A1, 500 in A2 and 300 in A3. (despite the total is 1000, sub-section A2 may not accommodate 500 questions).

## Changes to data server management

- API user accounts may additionally enable an access token. An access token may be used to submit API queries using bearer-authentication mode, instead of the login+password combination for the basic-authentication mode. To enable this feature changes must be made to the server configuration mode. [Read more about token-based authentication](/headquarters/accounts/token-based-authentication/).

## Supervisor-related changes

- The pop-up balloon at the supervisor’s map dashboard now contains buttons Approve and Reject to act on a particular interview. This is useful, for example, when the supervisor needs to reject an interview simply based on the recorded location being outside of the area of collection.

## Web-Interview related changes
- It was possible to override the title of the `complete` button in the complete screen of a CAWI interview using the web-survey settings in the data server. (see details in this forum post: https://forum.mysurvey.solutions/t/complete-button-title/4356 now the customized title propagates also into the places marked as `fixed` in the forum post.

## Stability related changes

- An important bug has been fixed in hotfix 21.09.4 affecting data servers where questionnaires with the same GUIDs have been imported to different workspaces. See also announcement in the users’ forum: https://forum.mysurvey.solutions/t/important-application-stability-alert/4121
- A problem has been reported where answering a geography or photograph image may lock the question in a state where it is not possible to modify the provided answer in the tablet Interviewer App under some conditions. This has been fixed.
- A bug has been reported where a specific string constant "*INF*" was incorrectly replaced with "*-1*" anywhere where it was mentioned in the preloading of assignments data. See details here: https://forum.mysurvey.solutions/t/string-inf-is-displayed-1-in-the-interviewer-tab/4277 . This has been fixed.
- The interface of the Interviewer app will be temporarily frozen while the app is processing newly entered answers. This usually takes fractions of a second, but in case of particularly complex or inefficiently written enabling conditions may take a noticeable time. Earlier versions allowed thus to interact with the questions which should have been disabled intermittently during this time. Earlier versions already applied this prevention to answering the GPS question, where recording the answer commonly takes a considerable time.
- Detected and addressed memory leaks, which were negatively affecting Interviewer app performance, leading to slowing down of the app after prolonged use.
