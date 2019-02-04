+++
title = "Version 19.02"
keywords = ["19.02"]
date = 2019-01-14T09:09:09Z
draft=false
+++


## Hyperlinks

Hyperlinks to various parts of the questionnaire may be included into the texts of the questions or error messages. For example, when verifying the age variable we may issue an message 
```Error! The entered age does not agree with the [date of birth](dob) entered earlier. Please check both answers!”```

In this case the words ‘_date of birth_’ will be shown as a hyperlink offering to jump to the question with variable name _dob_. 

{{< imgproc "images/hyperlink_in_error.png" Fit "330x374" />}}

This helps interviewers navigate through the questionnaire, especially when the validation check utilizes answers from different sections. 

Read more about the section functions in the following [article](/questionnaire-designer/components/questionnaire-hyperlinks/).


## Audio audit

Mechanism for recording the full interview(s) for select assignments. This feature uses the tablet's microphone to record the interview without the interviewer's knowledge, store recordings in audio files, and sync those files back to Headquarters for further review.

Read more about audio audit [here](/headquarters/audio-audit).


## Question bank and classifications library

Searchable libraries of questions and answer options from which users may copy content. The question bank draws from questions in public questionnaires. The classifications library draws from a [compilation by the International Household Survey Network](http://www.ihsn.org/projects/question-bank).

{{< imgproc "images/classification-tab.png" Fit "635x480" />}}

Read more about the question bank [here](/questionnaire-designer/components/question-bank/), and the classifications library [here](/questionnaire-designer/components/classification-library/).


## Plain-mode roster

A plain mode roster is a presentation of the roster without buttons leading to a deeper level, but rather showing all the roster questions repeated in the same scrollable area. This is especially convenient when there are only a handful of questions in the roster, such as price-quantity-unit for many items, and going behind the button and back is very time consuming for the interviewers. We designate the roster to be shown in plain mode simply by checking the corresponding checkbox in the Designer.

{{< imgproc "images/flat_roster.png" Fit "640x480" />}}

Read more about plain-mode presentation of rosters in the following [article](/questionnaire-designer/components/plain-roster/).


## Dynamic roster limits

Dynamic limits on rosters replace the static limits checked at design time in the earlier versions permitting to create more flexible data structures.

Survey Solutions provides capabilities for building complex multilevel data structures and at the same time prevents these data structures from exploding uncontrollably. Earlier this has been done at design-time - when the questionnaire was checked during compilation, error 

```[WB0262]:Roster has reached size limit. Reduce roster size or decrease nesting.```

was sometimes issued, when the structure may have resulted in a large (multiple thousands of) number of items. At design time the actual number of elements was not known, so the Survey Solutions applied the pessimistic strategy of taking maximum values for each trigger. This worked, but resulted in some seemingly valid designs to be banned, notably listing questionnaires where in an enumeration area there could be a large number of small dwellings or a small number of large houses, but never a large number of large houses. The pessimistic strategy deemed that possible. 

In the new version this check is now applied at run-time during the data entry, and when an attempt is made to overshoot this limit, the corresponding error message is issued to the enumerator and the change in the trigger question is declined. The limit on the total number of items remains the same, but rather the check is moved from inspecting the blank form to the real data being entered by the interviewer. Notably, every questionnaire that compiled in the earlier versions (before this change) will also compile in the new version (after the change), but now you will see more questionnaires compiling and the interviewers should be properly informed/trained as to how to react to this error message.

Read more about dynamic roster limits in the following [article](/questionnaire-designer/limits/roster-limits/).

## Section functions

New functions inspecting the completeness of sections have been introduced in the syntax, which return the the number of answered, unanswered and total number of questions in a section: 

- IsSectionAnswered(), 
- TotalNumberQuestions(), 
- NumberUnansweredQuestions(), 
- NumberAnsweredQuestions(). 

The sections and subsections are now also given (optional) variable names. 

For example, to enable section _employment_ only when the section _demogr_ has been fully answered, we can write its enabling condition as: 
```demogr.IsSectionAnswered()```

Read more about the section functions in the following [article](/syntax-guide/functions/section-functions/).

## Improved reporting for multi version questionnaires

Reports presented at the Survey Solutions Headquarters are revised to display summaries for the surveys as a whole, with possible break down by versions. This is convenient in case the version revision was technical and the HQ users are interested in the overall progress of the survey, regardless which revision has been applied.

For example, the Surveys and Statuses report may present the surveys you are running, such as LFS, LSMS, price survey, etc. with counts of interviews in each status for every one of these surveys. Clicking on the name of the survey will show the corresponding report only for selected survey, but with break down by versions of the questionnaire.

## Requiring updates

Admin user may select to always enforce the current version of the Interviewer App or allow the interviewers to remain on an older version.

Some interviewers are reluctant to update the Interviewer App, which causes a chaos in supporting the various versions of the software. The new option allows to enforce updates of the Interviewer App and is available to the administrator user in the server settings. When the checkbox is set, only the current version of the Interviewer App is permitted to synchronize with the server, when it is not set, older versions are tolerated. This option is on by default and reflects our recommendation and best practice.


## Other changes

- new page for creating interview: when an interview is created from an assignment, interviewer will be taken to a page indicating the status of this operation;
- removed some titles from the interviewer's UI;
- added possibility to unshare the questionnaire shared in read-only mode; 
- comments in the Designer are now available only to users with questionnaire edit permissions;
- harmonization of reports' appearance: titles, descriptions, versions display.
- improvements and additions to the Chinese translations.


(!) **We also would like to inform you that we plan to phase out compatibility of Survey solutions with older versions of Android OS, prior to version 5.0, over the next several months. Please keep this in mind while purchasing tablets for your upcoming surveys.**