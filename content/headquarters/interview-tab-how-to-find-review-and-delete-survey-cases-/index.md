+++
title = "Interview Tab: How to Find, Review, and Delete Survey Cases "
keywords = ["filter","review","check","delete"]
date = 2016-06-30T06:20:07Z
lastmod = 2016-06-30T06:20:07Z
aliases = ["/customer/portal/articles/2482221-interview-tab-how-to-find-review-and-delete-survey-cases-","/customer/en/portal/articles/2482221-interview-tab-how-to-find-review-and-delete-survey-cases-","/customer/portal/articles/2482221","/customer/en/portal/articles/2482221"]

+++

{{< imgproc "images/773854.png" Fit "800x600" />}}  
  
  
The Interview tab is designed for taking action. Under the Interview
tab, [headquarters may search for survey cases](#search), [reallocate
them to different teams](#reallocate), [review them for quality
assurance](#review), and [delete them to fix problems](#delete).  
  
  
The interview tab consists of the following tools:  
 

1.  **Database of survey cases**. The rows are survey case entries. The
    columns capture details about survey cases, such as the respondent’s
    address, interview status, and an indicator that the interviewer has
    or has not received the survey case.  
     
2.  **Filters for querying the database.** The database can be filtered
    to show only the survey cases of interest—for example, those with a
    particular status or those done by a particular supervisor.  
     
3.  **Toolbar with a Delete, Approve, and Reject button. **Survey cases
    can be deleted, approved, or rejected individually or as a group by
    selecting the check box next to each case. The toolbar will appear
    if one or more cases have been selected. If you would like to select
    all the survey cases displayed on that page, click on the first
    check box at the top of the list.  
     
4.  **Interview Key.** This is a system generated random number for each
    survey assignment. Completed survey cases can be reviewed in detail
    by clicking on the interview key for that case. This will open
    another interface that will be discussed below.
5.  **Search bar to navigate through the survey cases quickly.**

**{{< imgproc "images/886356.png" Fit "800x600" />}}**

 <span id="search"></span>Search for survey cases
-------------------------------------------------

  
The Interview tab contains a detailed list of survey cases— those that
have been completed, those that supervisors have approved and sent for
headquarters’ review.  
   
The details can be used to search for particular survey cases. The
interview panel in the lower right-hand quadrant of the screen presents
a list of interviews and information about them—where the respondent is
located (Identifying Questions), which supervisor is responsible
(Responsible), when the assignment was last updated (Last Updated), how
many errors the interview contains (Errors), what status the interview
has (Status), whether the interviewer has received the assignment
(Received by Interviewer), and in the case of census mode surveys
whether the case has been created on the device by the interviewer
(Created on Client).  
  
  
{{< imgproc "images/886354.png" Fit "800x600" />}}  
  
   
There are three mechanisms for finding a survey. The first is by
clicking on the arrow associated with any column of the information in
the lower right-hand quadrant. This will sort the list of surveys in
ascending (^) or descending (v) order by that chosen column.   
  
{{< imgproc "images/773857.png" Fit "800x600" />}}  
  
  
The second mechanism is through the filters located on the left-hand
side of the screen. To narrow down the list of survey cases,
headquarters may filter by the questionnaire (Questionnaire), team
member responsible (Responsible), the status of the interview (Status),
and/or the assignment of the interview.  
  
{{< imgproc "images/818932.png" Fit "800x600" />}}  
  
The third mechanism is through the search field located in the toolbar.
Use keywords to narrow down the list of survey cases.

{{< imgproc "images/773861.png" Fit "800x600" />}}
-----------------------

  
The following are searched:

-   values of identifying questions;
-   Interview keys
-   Interview IDs.

The search term must appear from the start of the value. If the search
term appears in the middle or end of the value, it will not be matched.
For example, if you are searching for 321 the following records will
match:  
  
***ENUMERATION AREA:** 3218 **ADDRESS:** 1064 Main str.  
**ENUMERATION AREA:** 1800 **ADDRESS:** 3212 Freedom Ave.*  
  
And the following will not match:  
***ENUMERATION AREA:** 3118 **ADDRESS:** 1321 Main str.  
**ENUMERATION AREA:** 5216 **ADDRESS:** 1064 Main str., apt 321*

 <span id="reallocate"></span>Reallocate survey cases between teams
-------------------------------------------------------------------

Survey cases will need to be reallocated when a new team is created and
needs to take over some of the work from existing teams. Cases can be
reassigned by a Headquarter user from one team to another.  
  
Reassignment is possible when the interview is in any status except the
following two: *“ApprovedByHeadquarter”* and *“ApprovedBySupervisor”*.
 To reassign cases, select the check boxes for the cases you wish to
reassign, and click on the green *assign* button.   
  
{{< imgproc "images/773873.png" Fit "800x600" />}}

<span id="review"></span>Review survey cases
--------------------------------------------

  
The questionnaire review interface consists of five components:

1.  **Navigation pane.** Displays a table of contents for the
    questionnaire, where you can use each entry in this pane to see a
    particular part of the questionnaire. Clicking on the top entry, the
    name of the questionnaire, brings the full questionnaire back into
    focus.
2.  **Filters.** These boxes can be used to see questions that have
    certain attributes—for example, comments or flags.
3.  **Questionnaire review pane.** Questions and their answers are
    rendered just like the Interviewer application.  
4.  **Comment.** Click on the three dots on the corner of the question.
    Then, select add comment.  Comments associated with the selected
    item will be shown below the question answer.
5.  **Approve/reject buttons.** These buttons determine whether a
    questionnaire returns to the supervisor or is integrated into the
    final data set.
6.  **Language dropdown menu. **If the questionnaire is a [multilingual
    questionnaire](/questionnaire-designer/multilingual-questionnaires),
    the user can toggle between languages using this menu.
7.  **Flags. **Questions can be marked during the review process.
    Use the filters (2) to only show the questions that have been
    flagged. 

  
  
{{< imgproc "images/852904.png" Fit "800x600" />}}  
  
  
Headquarters plays a critical quality control role in the Survey
Solutions workflow. Supervisors supervise enumerators, reviewing
questionnaires the latter completes. Headquarters supervises
supervisors, reviewing the questionnaires the latter approves.  
  
To do this, first headquarters clicks on the *Interview Key* associated
with any questionnaire whose status is ApprovedBySupervisor.  
  
{{< imgproc "images/773884.png" Fit "800x600" />}}  
  
  
Then, headquarters reviews the questionnaire for completeness,
consistency, and plausibility of answers using the questionnaire review
interface. The questionnaire pane, located in the middle of the screen,
contains the questions and their answers.  
  
Groups, on the left-hand part of the screen, allow headquarters to see
different parts of the questionnaire when any element of the pane is
clicked. The top heading corresponds to the complete questionnaire.
Bolded headings lead to modules (chapters) within the questionnaire.
Indented headings are linked to either groups of questions or rows of
rosters.  
  
Filters, arrayed atop the questionnaire pane, facilitate the display of
questions that have particular attributes. The “All” filter presents all
questions. The “commented” and “flag” filters display questions with
comments or flags, respectively. The “answered” questions, as the name
suggests, are all those that have an answer. The “invalid” filter
displays questions that failed a validation check (e.g., range,
consistency with other responses, etc.). The “supervisor’s” filter
yields special questions that only the supervisor sees and can answer.
The “enabled” filter returns questions that are available to be answered
based on the skip logic of the questionnaire and answers provided to key
questions.  
  
Next, headquarters either approves or rejects the questionnaire by
clicking the appropriate button. The headquarters’ choice determines
whether the assignment is included in the survey database (Approve) or
returned to the supervisor for correction (Reject).  
  
To unapprove any interview in the *Approved by Headquarters* status
select this interview(s) by checking the checkbox next to it and click
the *Unapprove* button. Alternatively, open the interview case and click
on the *Unapprove* button on the toolbar. The interview will be reverted
to the *Approved by Supervisor* status, and the headquarters user will
have a possibility to reject it back to the supervisor if necessary. You
can apply this operation to multiple interviews if necessary.  
  
{{< imgproc "images/773886.png" Fit "800x600" />}}  
  
  
  
{{< imgproc "images/773889.png" Fit "800x600" />}}  
  
Additionally, the headquarter user, has the authority to approve
completed interviews directly, without waiting for the supervisor’s
decision. This results in faster turnaround of the data circulating in
the system in case the supervisor is swamped with work, in which case
the headquarters can reduce the workload by pulling the good-quality
interviews from the supervisor’s stack. There is no change in the user
interface, but the button will now permit headquarters approvals of the
interviews in status “Completed”. Note that you cannot reject an
interview to an interviewer directly.  
 

<span id="delete"></span>Delete survey cases
--------------------------------------------

  
Deletion is a dangerous tool reserved for rare occasions—for example,
when errors arise in survey sampling or in creating survey cases.  
   
Because deletion is dangerous, only the **administrator/headquarters
users** have the authority to delete selected interviews. It is only
allowed for interviews with the status SupervisorAssigned or
InterviewerAssigned. Those with the former status have been assigned to
a supervisor, but not yet assigned by the supervisor to an interviewer.
Those with the latter status have been assigned to an interviewer, but
have not been completed. In both cases, headquarters should exercise
extreme caution. Once deleted, an interview cannot be restored. Hence,
administrator should only delete interviews that have been carefully
confirmed as errors to be deleted.  
   
To delete an interview, first find an eligible case. The most efficient
strategy for doing so may be to filter the questionnaires based on
status so that only those with status SupervisorAssigned or
InterviewerAssigned appear. (See the section *Search for survey cases*
above for more details.)  
  
Next, select the case(s) to delete by clicking in the check box to the
left of the case. Make sure the correct cases have been selected before
proceeding.  
  
Then, click on the Delete interview button located immediately above the
interview panel. This will permanently delete the selected survey
cases.  
  
{{< imgproc "images/773891.png" Fit "800x600" />}}
