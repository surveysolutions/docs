+++
title = "Version 21.09"
keywords = ["21.09"]
date = 2021-09-30T00:00:00Z
+++

The new version 21.09 brings the following new features:

1. [Security-related changes](#security-related-changes)
1. [Accessibility of functions](#accessibility-of-functions)
1. [Data format changes](#data-format-changes)
1. [Appearance](#appearance-changes)
1. [Other changes](#other-changes)


### Security-related changes
- API users could get information about user accounts (supervisor or interviewer) in a workspace to which the API user didn’t have access to. The information exposed in this way included the information specified in the user profile (full name, email, phone number). This has been fixed. The API request will result in an error 404 if the request is about a user account, which is not present in the workspace to which the query is addressed.

- API-based attempts to guess passwords were not counted towards the limit of invalid password entry attempts, and thus not causing the account lock to engage. This has been fixed.

- The issue reported in the [forum](https://forum.mysurvey.solutions/t/moving-interviewers/3731) that a certain sequence of actions at the HQ may result in the wrong supervisor receiving an interview for approval has been fixed.

### Stability of application

- Interviewers trying to set up the 2 factor authentication (2FA) for their own accounts received “The application has encountered an unknown error“ error message. This has been fixed.

- A problem has been detected with management of the objects in memory, which manifested in possible Interviewer application crashes during creation of rosters in flat mode and immediate exiting from the interview to the dashboard. This has been fixed.

- A problem has been detected with archiving an assignment during the [typically short] time when a questionnaire is being deleted can cause the export process to become dysfunctional. This has been fixed.

- The problem with the application experiencing an error while sending email invitations for CAWI interviews from a non-default workspace has been fixed.

### Accessibility of functions

- For HQ/admin users managing their own account was inaccessible from the screen managing the account of another user. This has been fixed.

- Issue with sections not responding to clicks in the table of contents under certain conditions, reported in the users forum [here](https://forum.mysurvey.solutions/t/interviewer-app-sections-bug/3924) has been confirmed and fixed.

- Under certain zoom levels the footer of the page "*Get Interviewer App*" was overlapping with the page content, preventing checking/unchecking the "*Exclude ESRI Map support*" checkbox. This has been fixed.

- Map imagery was not displayed in the interviewer profile even when the interviewer had already submitted some location data. This has been fixed.

- Sorting by `locked` status didn't work in the Designer [admin only]. This has been fixed.

### Data format changes

- Changes to questionnaire metadata. The following changes pertain to the JSON document representing the questionnaire as part of the data export file:

  - `AnswerOrder` property removed. A specific attribute `AnswerOrder` was previously included among the attributes of all questions despite this property being applicable only to multiselect-type questions. This has been fixed. The attribute will no longer be written for question types for which it doesn’t apply.
  - Property `Revision` was previously always having zero value. This has been fixed. The revision will be set to the revision of the questionnaire during its import from the Designer to the data server.

- Changes to events recording:
  - `InterviewCreated` (code 32) event has been added to the paradata file.
  - `InterviewReceivedBySupervisor` (code 21) event has been added to the paradata file.
  - `Paused` (code 15) and `Resumed` (code 14) events are removed from the `interview__actions` file. If needed, they are still part of the paradata stream.

### Appearance changes

- Flat roster - change of limits. A flat roster is a convenient way of presenting repetitive information (questions, texts) on the same page. We have changed the following two aspects of the roster:

  1. A roster may contain up to 20 child elements (previously: up to 10 child elements);
  2. Only those child elements that are having visual representation are counted towards the limit (previously all child elements are counted).


- In practice this means that you can include a number of variables into the roster and still designate it as a flat roster, without having to worry that additional variables will overload it and prevent a flat presentation on the page. This has been discussed earlier in our users' [forum](https://forum.mysurvey.solutions/t/adjustment-to-roster-flat-display-mode/1917). The change does not affect compatibility. If the roster was configured as a flat roster, it will continue to be presented in the flat mode.

- Rendering of the shapefiles has been changed. Shapefiles are overlaid over the base layer, which is typically a satellite image. We’ve heard from the users that the rendering parameters that we’ve used earlier were not sufficient and interviewers had difficulties distinguishing text labels and boundaries of areas in such composite images shown on map dashboard and in geography-type questions. We believe these changes will improve the readability of the text and recognition of the boundaries, especially over a satellite image base layer. We have improved the following two aspects of the rendering of the shapefiles:
  - The boundaries of the shapes contained in the shapefiles are now shown in a more contrast red color;
  - The labels of the shapes are shown in dual white-red color,

- Hyperlink for assignment details:  A connection between an interview and an assignment from which it has been produced has now been established with a hyperlink that can be seen in the interview details. A supervisor or an HQ-user can jump directly to the assignment details by clicking the assignment number while reviewing an interview.

- A problem with the map dashboard in the interviewer application has been reported that the users could observe the markers in an undocumented yellow color. These markers corresponded to the interviews in a transitional 'restarted' status. This has been fixed and they will now appear in the same color as the interviews in the 'started' status (blue).

- The page footer was either displayed correctly below the map or overlapped with the map in the map report at HQ depending on the custom zoom level set up in the browser. This has now been fixed and the footer appears always below the map.

- Questionnaire details at HQ used to show "*Mode: No*" for CAPI and "*Mode: Yes*" for CAWI. This has been fixed. Now it is showing "*Mode: CAPI*" or "*Mode: CAWI*" respectively.

- Image proportions were distorted in PDF documents generated in the Designer, this has been fixed.

- Questionnaire titles are now wrapped (multiline) in the questionnaires list at the Headquarters, similarly to how it was done in the Designer earlier. It is still recommended to keep the questionnaire titles brief and distinct for convenience of use.

- Long titles in CAWI interviews now use the header space more efficiently (truncation of the title occurs less often).

- Options in the "*Additional Settings*" group of the web-survey setup have been rearranged for readability without changes to their functionality.

- We have added a button to show the password being entered for the password-protected CAWI interviews. This should reduce the number of incorrect password entries due to wrong language selection or `CAPS LOCK` mode being engaged.

- There has been some confusion with the treatment at HQ of the questionnaires the title of which has been changed in the Designer (refer to [this](https://forum.mysurvey.solutions/t/interviews-filtering-bug/3819) discussion in the users’ forum) and the resulting problems with setting up the filters. We have adopted the following solution:

  - For each dynasty of questionnaires where only one title can be displayed, the title of the most recently imported questionnaire will be used. This is used most evidently in the filters where the user selects one questionnaire, the title of which may have changed between the revisions.
  - The same rule applies in the map report and map dashboard pages, with a difference that the revisions where all GPS location questions were removed in the revision are disregarded.

- Incorrect behavior of the filter in the map report (under the scenario where the questionnaire was renamed) has been fixed.

### Other changes

- Some questionnaires contained duplicates in the list of the collaborators when a PDF version of the questionnaire was rendered despite no duplicates can be seen in the list of the collaborators in the questionnaire settings. This has been the result of a legacy bug that has been fixed a long time ago. Maintenance was performed to remove the duplicates from the shares list in the Designer storage.

- Translation of the user interface to *Czech* language has been updated.
