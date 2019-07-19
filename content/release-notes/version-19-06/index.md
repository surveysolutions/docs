+++
title = "Version 19.06"
keywords = ["19.06"]
date = 2019-06-05T06:06:06Z
+++


## Table presentation of rosters in web interviews

Some rosters may be presented in grid form in web interviews (also if the interviewer
is using web-interviewer by logging in to the server through the web site, but not
on the tablet).

{{< imgScale src="images/table_roster.png" class="lg-img">}}

The rosters that can be presented in such a form are [for the moment] limited to
only the numeric and text question types, with up to the 10 questions, but we intend
to improve and extend this functionality to other types of questions and design
elements.

Read more about tabular presentation of rosters in
[this article](/questionnaire-designer/components/table-rosters).


## Notifications for the interviewers

The Survey Solutions Interviewer App will now show notifications to the interviewers 
reminding them on some of the actions recommended at this time. For example, if the 
interviewer has not synchronized for several days with the server, or if she has not
acted on a rejected interview.

Some of the notifications are displayed in the Android notifications area, while 
others are displayed within the application.

The administrator of the server can turn on/off the notifications for all the 
interviewers centrally from the server settings.

Read more about interviewers' notifications in
[this article](/interviewer/app/app-notifications).


## Improvements to cascading questions

From this version onwards the cascading questions are now:

- Available for the supervisor's scope (previously limited only to the interviewer's scope). 
This will allow the supervisors to also take benefit of progressive multi-step selections in 
large classifications, such as selecting an occupation or an administrative unit.

- Permit validations at all the levels of cascade (for example, you can construct a 
questionnaire which would indicate an error or a warning as soon as the branch of occupations 
'professional' is selected for the people who are having lowest level of education).



## Other changes and improvements

- Keyword 'self' may now be used in the substitutions in error messages simplifying 
the reference to the current value. For example, the error message could be: 
"<I>Error! The entered value for age %self% is too large!</I>", which may appear for a
particular value as "<I><FONT color="red">Error! The entered value for age 195 is too large!</FONT></I>".

- You can transfer the ownership of a questionnaire that you've designed to another
user, which may be useful in cases when this is your deliverable, or if you are 
leaving the project and want another user to continue maintaining and developing 
the questionnaire.

- Collaborators in the Designer are now presented in the following order: owner
of the questionnaire is listed first, then all the other collaborators in the 
alphabetical order of their emails.

- During the export of binary data to a cloud storage the user will be notified
if there is not enough storage in the destination.

- At headquarters an indicator has been added to the assignments page to reflect
whether the assignment has been already received by the interviewer (similar to
the same indicator for the rejected interviews).

- Questions linked to text lists or to non-nested options are exported in
numeric-type columns, rather than string-type columns with numeric content.
(already present in version 19.05). Some variables have changed their types in the
system generated files. These changes (earlier announced) are highlighted in 
[this article](/headquarters/export/system-generated---export-file-anatomy).


<FONT color="maroon"><B>

(!) Version [19.04](/release-notes/version-19-04) was the <U>last</U> version of Survey Solutions compatible
with Android OS prior to version 5.0.

If you haven't upgraded the tablets to OS Android 5.0 yet, upgrade without further delay.

</B></FONT>