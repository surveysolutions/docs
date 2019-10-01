+++
title = "Version 19.10"
keywords = ["19.10"]
date = 2019-10-01T01:01:01Z
+++



Survey Solutions v19.10 adds the following useful features:

- Assignments history and details page;
- Assignment comments;
- Headquarters users may be responsible for assignments;
- Closing assignments;
- Multiselect combobox allows for large number of selections;
- Testing scenarios.



## Assignments history and details page.

Survey Solutions has a strong interviews tracking system, which logs the circulation 
of the interviews during the data collection and approval process. This has not been 
previously covering the assignments. Now, the assignments are also covered.

By clicking on the assignment number in the assignments list one gets to the 
assignment details page. The page contains two kinds of information:

- Historical report on the creation and circulation of the assignment;
- Detailed assignment information showing the currently effective properties of the assignment.

A new system-generated file is available with every export of the data: 
assignment__actions, which tracks the changes made to assignments. 
Read more on the format of this file in the 
[following article](/headquarters/export/system-generated-export-file-anatomy/).


## Assignment comments

A commentary can be left by a person creating an assignment or making a reassignment. 
This commentary will be visible to an interviewer when he/she receives the assignment. 
For example: *Finish this assignment before Friday!*

Only the last comment is shown to the interviewer at the assignments page (*create new*).


## Headquarters users may be responsible for assignments

Headquarters users may now be made responsible for assignments. This is helpful when 
the sample file needs to be loaded to the headquarters at the time when the workforce 
has not yet been finalized and it is not clear who will be responsible for which area, 
how many teams/persons will be involved, and other dimensions of the operation plan. 
In that case all of the assignments can be made for a headquarters user, who can later 
redistribute them to supervisors and interviewers.

Other headquarters users do see all of the assignments and can take away or reassign 
assignments made to another headquarters users.

Note that administrator user may not be made responsible for assignments (though 
he/she may make assignments to other headquarters users).


## Closing assignments

A new action has been added for assignments: to close an assignment. For assignments
requesting multiple interviews (including infinite) a closing action means resetting
the quantity to the amount of the currently delivered interviews. This is a shortcut
for a manual change of assignment size to the corresponding number, and it can be
undertaken on multiple assignments at a time.

This action is only applicable to active assignments and not applicable to archived
assignments.


## Multiselect combobox allows for large number of selections

A multiselect categorical question has long been restricted to 200 options. This made 
sense in the situations where all options were visible on the screen, but was not 
suitable for some survey situations, when the number of potential choices is large. 
The introduction of a combobox version of the multiselect question in version 19.04 
earlier this year has opened a way to extend the multiselect question to a larger 
number of categories, since they don't have to be all shown to the interviewers.

The typical use of this kind of question is most suitable for, e.g. agricultural 
surveys, where question like *"What crops do you grow on this plot?"* are common, 
and imply a large number of possible option categories, yet, typically only a 
handful of selections.

A multiselect question with large number of categories may still trigger a roster,
such as to inquire about details of every crop that is being cultivated in the above 
example.

The number of positive selections is still 
[limited to 200](/questionnaire-designer/limits/survey-solutions-limits/) 
(but can be further restricted to a lower number, as in any multiselect categorical 
question).

Note also, that with a multiselect question asked in a combobox format, the exported 
data will not be a set of dummies (as for e.g. checkbox version), but a number of
variables recording option codes (for first selection, second selection, and so on).


## Testing scenarios

Testing scenarios is a major new feature that we are releasing and plan to continue 
developing further in the future.

Testing scenarios are recordings of the interviewer input that can be applied to an 
evolving version of the questionnaire to simplify, speed up and standardize testing.

Testing scenarios are created in the Survey Solutions Tester (Web Tester or the 
Tester App) and are saved at the Designer site.

Testing questionnaires is time consuming, especially for large and complex ones, 
with lots of skips or possible filters for options, validations, etc.

Scenarios simplify the testing of the questionnaires, especially large ones, where 
some minimal input is required before the tester can even reach a certain point in 
the questionnaire. By recording e.g. different family configurations (large, small, 
with or without children, etc) it becomes more straightforward to test large and 
complex questionnaires.

Scenarios have some limitations, such as binary data or the interview-specific
random value may not be stored in a scenario.

Read more about testing scenarios in
[this article](/questionnaire-designer/testing/scenarios/).
