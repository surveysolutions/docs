+++
title = "Version 5.21"
keywords = [""]
date = 2017-07-06T22:40:48Z
lastmod = 2017-07-06T22:40:48Z
aliases = ["/customer/portal/articles/2836630-version-5-21"]

+++

Moving from interviews to assignments
=====================================

Conceptually, version 5.21 introduces an important change in how
interview assignments are distributed.

Previously, survey managers had a binary choice for distributing
assignments: sample or census mode. Sample mode offered complete control
over survey targets, but imposed the cost of specifying all identifying
information for each survey target (e.g., name, address, etc.). Census
mode offered complete flexibility for identifying survey targets, but
provided no control over the identifying information of potential survey
targets (e.g., region where households have been selected).

Now, with assignments, survey managers have a continuum of choices:
sample mode, census mode, and everything in between. To be clear, users
can still distribute interviews just as before. But, importantly, there
are also new choices that are more closely aligned with common, but
previously unmet, user needs. To see this, consider a few use cases.
When faced with HQ-based selection of primary sampling units (PSUs) but
field-based sampling of households, survey managers can now pre-populate
identifying details of PSUs (e.g., region, district, village name) while
requiring interviewers to provide identifying details of households
selected for interview (e.g., household head's name, etc.). When
confronted with tracking members of a panel study, survey managers can
now dynamically determined the number of copies of interviews associated
with an assignment, so that any split-offs from an original household
can be quickly captured with the benefit of any preloaded information.

Practically, this conceptual change in version 5.21 is relatively minor
for all users.

For Headquarters, there is no longer any need to choose the mode of
distribution (i.e., select sample or census mode). When assignments are
created, the mode of distribution is determined by the quantity of
interviews associated with an assignment (i.e., 1 to replicate sample
mode, unlimited to replicate census mode, and for new modes some number
in between).

For Supervisor, survey management now happens in two spaces. When making
or revising assignments, supervisors work from the Assignments screen.
When reviewing completed interviews, supervisors work from the
Interviews screen. In other words, there is a space for each entity.
Assignments in Assignments; Interviews in Interviews.

For Interviewer, there is a new tab on the dashboard: Create New. From
this tab, interviewers can create interviews from their assignments. For
example, if an assignment consists of three interviews, the interviewer
can create up to three interviews. Once an interview is created, it
moves from one status tab to another as before (e.g., Started,
Completed, etc.). Meanwhile, the list of all assignments will remain in
the Create New tab.  
  
For a compact but comprehensive summary of what's new and how legacy
questionnaires are handled, read
[here](http://support.mysurvey.solutions/customer/en/portal/articles/2835383-notes-on-compatibility-with-version-5-21?b_id=12728).

Interviewer improvements
========================

The Interviewer application has seen three improvements aimed at
increasing usability.

-   **Interviewer app updates are incremental.** Previously, updating
    the Interviewer application required downloading the full
    installation file with each new release. Now, updating the
    application downloads a smaller file, making it easier and less
    costly for interviewers to keep their tablets up to date in the
    field. Upgrading from the previous version to the current version
    might require downloading just few hundred kilobytes.
-   **Dashboard cards are expandable.** Previously, assignment cards
    displayed only the first three identifying questions. Now, cards can
    be expanded to see all identifying questions. To expand a card,
    simply tap. To collapse, tap the card again.
-   **Dashboard interface uses swipe navigation.** Previously,
    interviewers needed to tap on the status tab to move between lists
    of interviews (e.g., Started, Completed). Now, they can swipe right
    or left.

Designer improvements
=====================

The Designer application has also seen several improvements to
usability:

-   **Login with email address.** Previously, users needed to enter
    their login in order to access Designer or recover their password.
    Now, they may also use the email address used to sign up for their
    Designer account, making login and password recovery easier.
-   **Save partially complete questions and validations.** Previously,
    questionnaire designers needed to complete the question text field
    before saving a question, and provide an error message to save a
    validation. Now, designers may leave both blank. Questions without
    question text will appear as compilation errors. Validations without
    error messages will simply not show an error message for invalid
    answers. These changes makes creating rough drafts easier.
-   **Simplifies data types.** Previously, Survey Solutions several C\#
    data types to store answers to questions and values of system
    variables. Now, those data types have simplified. The number of
    types have been reduced. The types now more closely match user
    intuition. Most users will not notice the change. Advanced users
    should consult [this summary table of data
    types](http://support.mysurvey.solutions/customer/en/portal/articles/2531232-data-types?b_id=12728).

Tester improvements
===================

Previously, testing with Tester could be tedious. When a problem was
found in a questionnaire, one made a correction in Designer, reloaded
the questionnaire in Tester, and then re-entered testing data.

Now, when the user reloads a questionnaire, Tester tries to keep all
previously entered data intact. That way, one can more quickly confirm
that identified problems have been resolved.

Application Programming Interface (API)
=======================================

In version 5.21, Survey Solutions' API have been considerably improved
and expanded. First, virtually every user action now has a corresponding
API (e.g., creating assignments, assigning interviews, downloading data,
and approving and rejecting interviews). Second, each server features
up-to-date and interactive documentation on what API actions are
allowed, how to formulate them, and what server responses to expect.

Please note that this feature is aimed at advanced users who are
comfortable with server queries and REST APIs.

Area question type
==================

Working in partnership with ESRI, the Survey Solutions team has
integrated some of ESRI's mobile GIS tools into Survey Solutions. The
result: a new question type that measures area by tracing a shape's
outlines on satellite imagery (e.g., bounds of a farmer's field). The
appeal: the ability to measure area without traversing a shape (e.g.,
walking around a farmer's potentially distant field).

In version 5.21, this new question type should be considered
experimental. In future versions, this question type will be improved
and extended. Stay tuned.
