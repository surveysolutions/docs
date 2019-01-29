+++
title = "Version 19.02"
keywords = ["19.02"]
date = 2019-01-14T09:09:09Z
draft=true
+++


## Dynamic roster limits

Dynamic limits on rosters replace the static limits checked at design time in the earlier versions permitting to create more flexible data structures.

Survey Solutions provides capabilities for building complex multilevel data structures and at the same time prevents these data structures from exploding uncontrollably. Earlier this has been done at design-time - when the questionnaire was checked during compilation, error 

```[WB0262]:Roster has reached size limit. Reduce roster size or decrease nesting.```

was sometimes issued, when the structure may have resulted in a large (multiple thousands of) number of items. At design time the actual number of elements was not known, so the Survey Solutions applied the pessimistic strategy of taking maximum values for each trigger. This worked, but resulted in some seemingly valid designs to be banned, notably listing questionnaires where in an enumeration area there could be a large number of small dwellings or a small number of large houses, but never a large number of large houses. The pessimistic strategy deemed that possible. 

In the new version this check is now applied at run-time during the data entry, and when an attempt is made to overshoot this limit, the corresponding error message is issued to the enumerator and the change in the trigger question is declined. The limit on the total number of items remains the same, but rather the check is moved from inspecting the blank form to the real data being entered by the interviewer. Notably, every questionnaire that compiled in the earlier versions (before this change) will also compile in the new version (after the change), but now you will see more questionnaires compiling and the interviewers should be properly informed/trained as to how to react to this error message.


## Plain-mode roster

A plain mode roster is a presentation of the roster without buttons leading to a deeper level, but rather showing all the roster questions repeated in the same scrollable area. This is especially convenient when there are only a handful of questions in the roster, such as price-quantity-unit for many items, and going behind the button and back is very time consuming for the interviewers. We designate the roster to be shown in plain mode simply by checking the corresponding checkbox in the Designer.

{{< imgproc "images/flat_roster.png" Fit "640x480" />}}

Read more about plain-mode presentation of rosters in the following [article](/questionnaire-designer/components/plain-roster/).


## Section functions

New functions inspecting the completeness of sections have been introduced in the syntax, which return the the number of answered, unanswered and total number of questions in a section. The sections and subsections are now also given (optional) variable names. 

For example, to enable section _employment_ only when the section _demogr_ has been fully answered, we can write its enabling condition as: 
```demogr.IsSectionAnswered()```

Read more about the section functions in the following [article](/syntax-guide/functions/section-functions/).


## Hyperlinks

Hyperlinks to various parts of the questionnaire may be included into the texts of the questions or error messages. For example, when verifying the age variable we may issue an message 
```Error! The entered age does not agree with the [date of birth](dob) entered earlier. Please check both answers!”```

In this case the words ‘_date of birth_’ will be shown as a hyperlink offering to jump to the question with variable name _dob_. This helps interviewers navigate through the questionnaire, especially when the validation check utilizes answers from different sections. 

Read more about the section functions in the following [article](/questionnaire-designer/components/questionnaire-hyperlinks/).


