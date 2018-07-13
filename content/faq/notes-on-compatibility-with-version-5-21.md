+++
title = "Notes on Compatibility with version 5.21"
keywords = [""]
date = 2017-07-05T16:42:01Z
lastmod = 2017-07-05T16:42:01Z
aliases = ["/customer/portal/articles/2835383-notes-on-compatibility-with-version-5-21"]

+++

With version 5.21, we are making a big change by replacing census and
sample mode with assignments. Previously when importing a questionnaire,
users had to decide between sample mode (with a quantity of 1 interview
per case) and census mode (with an unlimited quantity of interviews).
With version 5.21, users will simply import the questionnaire and then
proceed to making assignments with the imported template. Assignments
will give headquarters users more flexibility because they can now
specify the quantity of interviews they want when they generate each
assignment.

What's New with Assignments
---------------------------

-   Users will no longer be asked to specify census mode or sample mode
    when importing a questionnaire
-   Headquarters/admin can now specify the quantity of interviews they
    would like an interviewer to perform for each assignment.
    Headquarters/admin users will still be able to o specify an
    unlimited number of interviews per assignment (previously known as
    census mode). To specify an unlimited quantity when creating
    assignments one at a time, leave the *Quantity *field blank when
    creating the assignment. To add quantity in batch uploads for
    assignments, add a column titled *\_quantity* to your tab delimited
    file to specify the quantity for each assignment. To specify an
    unlimited quantity, put '-1' in the \_quantity column for that
    assignment.
-   Assignments can now be made to either supervisors or interviewers.
    Previously, assignments could only be made to supervisors.
-   Headquarter/admin users are no longer required to to fill out all
    the identifying variables when making an assignment.
-   Interviewers can fill in any identifying information that was left
    blank by the headquarters/admin users when the assignment was
    created.
-   Interviewers can discard incomplete interviews that are made
    accidentally or are no longer valid.

 

Compatibility with older versions
---------------------------------

If you currently have a survey in the field and the tablets have the
Interviewer application of versions earlier than 5.21, it is not
necessary to update the interviewer application on the tablets to
proceed with fieldwork. To prevent disruption to your fieldwork, version
5.21 on the server will be backwards compatible with previous versions
of the Interviewer application. Below are important information on
compatibility:

-   **Synchronization to the server**: Synchronization of completed and
    rejected interviews on tablets with Interviewer application versions
    earlier than 5.21 will work the same as before.
-   **Making assignments with a template imported in an older version**:
    Assignments can still be made to supervisors/interviewers with
    templates imported on versions older than 5.21. The interviewer
    application does not need to be updated to 5.21 to receive these
    assignments made with questionnaires imported in an older version.
    Similar to previous versions, interviewers will see one card per
    interview. Additionally, assignments can be made using templates
    imported in older versions to tablets running version 5.21 of
    Interviewer applications. The cards for the assignments will look
    the same as an assignment created with a template imported in
    version 5.21.
-   **Making assignments with a newly imported template to an older
    version of the Interviewer application**: If you make any
    assignments with a questionnaire template imported after your server
    has been updated to version 5.21, then the interviewers will have to
    update their Interviewer applications to version 5.21 in order to
    receive any assignments made with those templates. Interviewers will
    see an error when they try to login prompting them to update their
    Interviewer application. Interviewers can update in the Interviewer
    application by going to the link in the Diagnostics screen.
-   **Interviews created in previous versions**: You will still be able
    to see and complete interviews created with earlier versions after
    updating the Interviewer application to version 5.21. However, these
    interviews cannot be discarded.
-   **Census mode questionnaires**: Questionnaires imported as census
    mode will have the same functionality as before. It will have the
    added feature of being able to discard an interview that has been
    started.
-   **Batch upload of assignments**: Users can continue to use the same
    batch upload tab files that they used in previous versions. If the
    tab file has no quantity column (column title: \_quantity) or the
    quantity is left blank, then one interview will automatically be
    created for each assignment.
