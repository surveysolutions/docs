+++
title = "Creating Assignments One at Time"
keywords = [""]
date = 2017-06-29T21:45:21Z
lastmod = 2026-04-13T00:00:00Z
aliases = ["/customer/portal/articles/2832911-creating-assignments-one-at-time","/customer/en/portal/articles/2832911-creating-assignments-one-at-time","/customer/portal/articles/2832911","/customer/en/portal/articles/2832911","/getting-started/creating-assignments-one-at-time"]

+++

New assignments can be created by users in the roles of *Headquarters* or
*Administrator*.

1. In the main menu, select `Survey setup` → `Questionnaires`.
2. Click the specific questionnaire. Note that there may be several
versions of the same questionnaire imported already. Survey Solutions allows
creating new assignments based on any version of a questionnaire, though in
most case the most recent version is the one expected to be utilized.
3. In the menu that appears select `New assignment`.
4. Populate any identifying fields (such as target address, enumeration area,
etc). A particular questionnaire may have one, several, or no identifying
fields depending on the author's preference. Keep in mind that any
identifying fields prefilled at this step will be protected from being
subsequently modified by interviewers/web respondents.
5. Select responsible account.

The rest of the parameters here are optional:

6. Specify the requested number of interviews (default is 1). This number can
be subsequently changed.
7. Select the mode of an assignment (default is CAPI, but CAWI can be specified
if needed). This mode can't be subsequently changed for an assignment, but
interviews can be switched between the modes.
8. Optionally specify the email and password to access the assignment and any
interviews started from that assignment (CAWI mode only). Email and password
can't be subsequently changed.
9. Optionally select whether audio audit shall be activated for interviews
started from this assignment (CAPI mode only). This parameter can be changed
later.
10. Optionally specify target area (shapefile name) (default is none). This
parameter can be changed later.
11. Optionally specify a comment for the new assignment (default is blank). A
new comment can be specified at the change of the responsible (reassign).

12. Click `CREATE` to create a new assignment.

After a new assignment is created the user is redirected to the list of the
assignments. If the new assignment does not appear at the top of the list, use
filtering, search, and sorting capabilities here to locate it if needed.

* **Filtering** - specify questionnaire title, version, and other assignment
attributes to shorten the list.

* **Search** - use the search field to specify particular identifying information.
The assignments list is shortened to show only the assignments which contain the
entered values.

* **Sorting** - click the column headers to sort assignments by values of that
column or toggle the direction (increasing/decreasing).


Note that you cannot specify values for any questions other than *identifying*
in this method of creating assignments. If you need to specify answers to
*hidden*, *supervisor*'s, or *interviewer*'s questions, use the functionality
to upload assignments.


**See also**

[Uploading Many Assignments at a time](/headquarters/preloading/uploading-many-assignments-at-a-time/)

[Web interviewing -> make web assignments](/headquarters/cawi/web-interviewing/#3-make-web-assignments)
