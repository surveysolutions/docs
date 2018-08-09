+++
title = "Version 18.04-a"
keywords = [""]
date = 2018-03-29T02:29:55Z
lastmod = 2018-03-29T02:29:55Z
aliases = ["/customer/portal/articles/2931394-version-18-04-a","/customer/en/portal/articles/2931394-version-18-04-a","/customer/portal/articles/2931394","/customer/en/portal/articles/2931394"]
draft = true
+++

The April 2018 release ushers in numerous improvements to each component
of the Survey Solutions. The most noteworthy are:

-   **Self-service portal for server requests.** Previously, to request
    a new server or to extend the use period of an existing one, users
    first emailed the support team and then filled out a form. Now, to
    streamline this process, we have created a self-service portal for
    making these same requests: https://portal.mysurvey.solutions.

<!-- -->

-   **Validation warnings** Up until now, Survey Solutions did not
    distinguish between validation errors and validation warnings. Any
    violation of a validation conditon was simply considered an error.
    Now, Survey Solutions allows questionnaire developers to make this
    distinction by designating each validation condition an error
    (default) or a warning.

<!-- -->

-   **Special values for numeric questions** Survey protocol sometimes
    requires that special codes be recorded for answers such as "do not
    know", "refused to answer", or "not applicable". Previously, this
    protocol could be communicated, just as on paper, by instructions to
    the interviewer that these special values be used for special
    circumstances. Now, to make adherence to these protocols easier,
    Survey Solutions allows questionnaire designers to add special codes
    as selectable answer options, reducing the risking that inattentive
    interviewers write the wrong code (e.g., write -9 instead of -9999
    for "do not know").

<!-- -->

-   **Comments in Designer for better collaboration** Previously,
    several users could work together on the same questionnaire, but
    they needed to communicate on design decisions outside of the
    questionnaire. Now, Designer users may leave comments on any object
    in the questionnaire, may communicate through comment treads, and
    may resolve comment that that have been adressed.

Read more about these and other released features below. For
convenience, feature release notes have been grouped by the main
software component concerned: User portal, Designer, Headquarters,
Supervisor, and Interviewer.  
  
Separately, this release marks a break with the old numbering system for
releases. Each release number reflects the calendar date of release.
This release, for example, is 18,04 because the release year is 18 and
the release month is 04. 

Self-service user portal
------------------------

Through the self-service portal, users may the following types of
requests:

-   New server request

<!-- -->

-   Server extension request

To access the portal, first, navigate to
[https://portal.mysurvey.solutions](https://portal.mysurvey.solutions/).
Then, use Designer credentials to log in. As with Designer, this may be
either the user name and password or the user email and password.

{{< imgproc "images/866430.png" Fit "800x600" />}}  
  
To make a request:

-   Expand the Create a Requestion menu

<!-- -->

-   Click on the desired type of request

<!-- -->

-   Complete the corresponding form

To track the status of a prior request, click on Requests to see the
current status of all earlier requests.

Designer
--------

New features can be divided into the following categories: 

-   New data capture controls

<!-- -->

-   New design tools

<!-- -->

-   New limitations

### Special values for numeric questions

To add special values in Designer, click on ADD OPTIONS, and add a value
and label pair for each desired special value, in same way that answer
options are added for a single- or multi-select questions  
{{< imgproc "images/866432.png" Fit "800x600" />}}

To use special values in Interviewer, either tap the radio button
associated with the desired special value or compose its code.

{{< imgproc "images/866433.png" Fit "800x600" />}}

To prevent interviewers from answering both a number and a special
value, no additional work is needed. The Interviewer application allows
either one or the other to be recorded, but not both. Once a number is
recorded, the special values are disabled. Once a special value is
recorded, the numeric entry field is disabled.  
{{< imgproc "images/866437.png" Fit "800x600" />}}

### Signature question

To create a signature question in Designer, first simply create an Image
question, and then tick the Use signature pad box.

{{< imgproc "images/866438.png" Fit "800x600" />}}

How to capture a signature in Interviewer depends on the interview mode.
For face-to-face interviews, write the name in the signature field and,
importantly, tap on the store signature button. For web interviews,
search for an image of the signature stored on the device

{{< imgproc "images/866439.png" Fit "800x600" />}}

### Comment in Designer

To leave a comment, click on the ADD COMMENT link, compose a comment,
and click on the ADD COMMENT button. This may be done for any object in
the questionnaire--a question, a variable, a roster, etc.

{{< imgproc "images/866444.png" Fit "800x600" />}}

To view all comments, click on the comments icon in the sidebar of
Designer. Doing so will reveal the list of all comments throughout the
questionnaire. Clicking on an individual element of the list will take
the user to the comment's location.

{{< imgproc "images/866448.png" Fit "800x600" />}}  
To hide this compilation of comments, close the comment sidebar. To hide
comments on an individual question, click on HIDE COMMENTS. To resolve a
comment, click RESOLVE on the desired comment.

{{< imgproc "images/866453.png" Fit "800x600" />}}

### Reload questionnaire in Web Tester

When the reload button is pressed, the web tester will behave just like
the tablet Tester application: the questionnaire will be updated to
reflect recent changes, while the data previously entered will be
preserved and all condtions re-evaluated.

{{< imgproc "images/866454.png" Fit "800x600" />}}

### Export questionnaires as HTML

Previously, Survey Solutions questionnaires could be exported to PDF
format. Now, questionnaires may also be exported to HTML format.

{{< imgproc "images/866455.png" Fit "800x600" />}}

### Prevent circular references in enablement and filter conditions

To prevent questionnaire problems, Designer now prevents two types of
circular references, and shows them as compilation errors.

The first type of circular reference is where question A's enablement
condtion depends on question B, and question B's enablement condition in
turn depends on question A. To assist questionnaire designers resolve
the problem, Designer will show the full chain in the circular
references.

The second type now forbidden circular reference is a filter condition
that depends on the the current question itself--that is a condition
evaluated for each answer optiont that depends on answer options of the
current question. As above, all such issues will be shown as compilation
errors that the questionnaire designer must resolve in order for the
questionnarie to be valid.

Headquarters
------------

New features can be divided into the following categories:

-   Data quality review

<!-- -->

-   Troubleshooting tools

<!-- -->

-   Customize web interview messages

<!-- -->

-   Export binary data to user-designated web services

### Compact presentation of answered categorical questions in Interview Details

To make the task of reviewing completed interviews easier, categorical
single-select and multi-select questions are now presented in compact
format, with only the selected answer shown and other answer options
only revealed upon request.

### Old Interview Details page design deprecated

For several months, Headquarters users had the option of using the new
or old Interview Details design. Now, the old design has been
permanently disabled in favor of the new, cleaner, and more user
friendly design.

### Two new API endpoints

To help power users accomplish with the API everything they could with
the user interface, two new API endpoints have been added:

-   **Posting comments to a question in an interview.** With the
    interview ID, the question name, and roster address, one may post a
    comment to a particular question.

<!-- -->

-   **Getting interview statistic** With the interview ID, one may
    obtain the counts of questions that appear on the Interview Details
    screen: answered, not answered, flagged, valid, invalid, with
    comments, for interviewer, and for supervisor. See the API
    interactive page for more details.

### Automatic update of Interviewer application

When interviewers sync, Headquarters automatically pushes them updates
to the Interviewer application. While server administrators may disable
this feature, there is more to be gained than lost through keeping this
default auto-update intact. Since updates to the Interviewer application
are typically 200 kb or smaller, these files can be received even in the
most difficult connectivity contexts. Since these updates typically
improve application performance and stability, automatic updates offer a
beneficial way to keep tablets up to date with no effort for survey
managers.

### Export questionnaires for better tech support

When issues arise, the technical support team often wants to review the
questionnaire. But since the version of the questionnaire imported into
Headquarters and the current version on Designer may differ. Hence,
exporting the previously imported questionnaire can be a useful tool for
technical support.

### Capture log of interviews created and deleted on the tablet

Previously, when interviewers claimed that interviews had disappeared,
there was not always a complete audit trail of what happened. Now, the
Interviewer application captures what happens to each interview,
including those that are created and deleted on the tablet before
syncing. In this way, the Headquarters and technical support teams can
know what happened on the tablet, and thereby better troubleshoot
interview reports of missing interviews.

### Customize web interview messages

Previously, headquarters users had no control over the the messages that
web interview respondents saw upon starting an interview, upon resuming
it, or upon finishing it. Now, when setting up a web survey,
headquarters users may either retain the default message or craft their
own for text for the following message components:

{{< imgproc "images/866456.png" Fit "800x600" />}}

### Export binary data to user-designated web services

When taken in large numbers, binary files, such as image or audio files,
can be time-consuming to download. Rather than oblige users to download
a zip file of all images, Headquarters now allows users to export
unzipped image files directly to the cloud storage solution of their
choice: DropBox, Google Drive, or OneDrive. Doing so will, among other
things, allow users to download files individually, or in smaller
batches than the zip file Survey Solutions creates.

{{< imgproc "images/866457.png" Fit "800x600" />}}

Supervisor
----------

### Map report now available for supervisors

Previously, the map report was only available to Headquarters users.
Now, the map report is equally available for Supervisor users. Whereas
Headquarters users' report covers all interviews, Supervisor users' map
report displays only those interviews under their responsibility.

### Speed report uses active interview time

Previously, the Speed report computed interview time as the simple
difference between the question being answered and the Complete button
being pressed. Now, the Speed report has been revised to compute
interview duration as the some of all active interview time between
these two points. Active interview time is defined as when the tablet
screen is on and an interview is open in the Interviewer application.

Interviewer
-----------

### Search

To find an interview, interviewers needed to search manually, looking
through all of the cases on each interview status tab of the Interviewer
application. Now, interviewers can search for cases across all statuses.

To do so, first tap on the overflow menu. Then select search. Next,
input search terms. Search operates over  
  
{{< imgproc "images/866458.png" Fit "800x600" />}}
