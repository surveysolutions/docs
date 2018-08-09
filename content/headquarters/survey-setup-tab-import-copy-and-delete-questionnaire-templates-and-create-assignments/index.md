+++
title = "Survey Setup Tab: Import, Copy, and Delete Questionnaire Templates, and Create Assignments"
keywords = [""]
date = 2017-06-29T22:00:07Z
lastmod = 2017-06-29T22:00:07Z
aliases = ["/customer/portal/articles/2832918-survey-setup-tab-import-copy-and-delete-questionnaire-templates-and-create-assignments","/customer/en/portal/articles/2832918-survey-setup-tab-import-copy-and-delete-questionnaire-templates-and-create-assignments","/customer/portal/articles/2832918","/customer/en/portal/articles/2832918"]

+++

  
{{< imgproc "images/852920.png" Fit "800x600" />}}  
  
The survey setup tab lets you do several things:

[Questionnaires](#qnr)
----------------------

1.  **[Import template.](#import)** Import questionnaires from the
    Designer site to the headquarters software.
2.  **[Create assignments](#create):** Headquarters provides two ways of
    creating assignments for a given questionnaire: [one at a
    time](#oneatatime), or in a [many at a time (batch)](#severalcases).
3.  **[Clone questionnaire template](#copy):** Copy the questionnaire
    templates previously imported to the server. This feature is only
    available to the administrator.
4.  **[Delete questionnaire.](#copy)** This feature is only available to
    the administrator.

[Assignments](#assignments) 
----------------------------

1.  [Archive and reallocate assignments](#reallocate) to members of the
    data collection team. 
2.  Monitor assignments. Displays a tabular view of all assignment and
    enables you to edit the [quantity of interviews](#quantity) for any
    assignment. 

[Maps](#maps)

1.  Upload and assign maps (.tpk) for interviewers to download onto
    their tablet devices. Maps are used for the Area question type. 

<span id="qnr"></span>Questionnaires 
=====================================

When you first navigate to the questionnaires page under the Survey
Setup tab in Headquarters, you will see this screen:  
  
{{< imgproc "images/756583.png" Fit "800x600" />}}  
 

1.  **List of questionnaires: **This has the list of questionnaires that
    you have already imported. For each questionnaire, you will see the
    following information: name of questionnaire, version, the date and
    time the questionnaire was imported to the server, the date and time
    the questionnaire was created on Designer, and the date and time the
    questionnaire was last changed on Designer. The questionnaires can
    be sorted by any of these information.
2.  **Import template button:** This will allow you to import a new
    questionnaire onto the server
3.  **Search button**: If you have a lot of questionnaires on your
    server, you can quickly search for the questionnaire you want by
    clicking on the search button and typing the name of the
    questionnaire. 

 

<span id="import"></span>Import a questionnaire template
--------------------------------------------------------

  
When clicked, the green *Import template* button prompts the user to
connect to the Designer site and to select a questionnaire template for
import. To connect to Designer, headquarters must enter a valid login
and password (as pictured below). Note that these login credentials are
for the Designer site, not the headquarters software.  
  
{{< imgproc "images/732258.png" Fit "800x600" />}}  
  
  
After connecting to the Designer site, the user must select a
questionnaire template to import. To do so, the user must first find a
questionnaire, either by scrolling through the list of questionnaires
available or using the search box. Click on the questionnaire to import
it.   
  
{{< imgproc "images/732262.png" Fit "800x600" />}}  
  
  
Then, you will be prompted to confirm the import.   
  
{{< imgproc "images/794223.png" Fit "800x600" />}}  
  
Once import of the selected questionnaire is complete, the name of that
questionnaire appears in the list of questionnaires on the
Questionnaires tab. If this is the first time the questionnaire has been
imported, the headquarters software will add “(1)” in the column titled
"Version". Each time a new version of the same questionnaire is
imported, the software will add the corresponding version number in that
column.  
  
When a new version of an existing questionnaire is imported to the
server, any unfulfilled assignments in the old version may be migrated
to the new version. If the HQ user decides to migrate the assignments,
the system will examine them one by one and decide whether the migration
is possible and if so, archive the original assignment and recreate a
new assignment in the new version of the questionnaire (for the
remaining number of interviews still not delivered). We recommend
testing the questionnaires extensively to minimize any revisions to the
questionnaires during fieldwork.  
  
{{< imgproc "images/794222.png" Fit "800x600" />}}

<span id="create"></span>Create assignments
-------------------------------------------

  
To create assignment, click on the questionnaire you want to create
assignments for. Then you will see a menu that will have two options for
creating assignments: *New Assignment*, which creates assignments one at
a time; and *Upload assignment* , which creates several assignments at
once.  
  
{{< imgproc "images/794225.png" Fit "800x600" />}}  
 

### <span id="oneatatime"></span>One assignment at a time

  
After clicking on *New assignment *menu, you will be prompted to provide
identifying information for the survey case—typically name and
geographic location of the respondent—and to select a
supervisor/interviewer to be responsible for the assignment. The system
does not require you to fill in all the information. The set of
identifying information, which corresponds to the questions marked
as *Identifying* on the Designer site, should be provided by
headquarters when creating a case and will appear on the interviewer’s
dashboard when assigned. ** **Next, define the number of interviews that
should be generated for the assignment. To allow an unlimited number of
interviews, leave the ***Quantity*** field blank.  
  
You will also prompted to designate a supervisor/interviewer as
responsible for the case (Responsible). Once assigned to a supervisor,
the survey case will appear on the supervisor’s dashboard and will be
available to assign to one of the supervisor’s data collection team. If
assigned to a interviewer, the survey case will appear on the
interviewers device after synchronization.  
  
{{< imgproc "images/794230.png" Fit "800x600" />}}  
 

### <span id="severalcases"></span>Several assignments at a time

  
While selecting *New assignments *requires you to enter case address
information manually, the *Upload assignments* method relies on an
external tab delimited .tab file that contains that same information for
each case to be created—and potentially other information to include
into those cases as well. The headquarters software offers two ways of
using external .tab files to pre-fill survey cases in a batch upload:

1.  Identifying data only, typically used for cross-sectional surveys,
    which loads only respondent address information (e.g., region,
    enumeration area, village, name of household head)
2.  An advanced mode which involves preloading info (identifying data
    and collected data), typically used for panel surveys, which loads
    not only information on the respondent’s address, but also
    information for any other field of the questionnaire (e.g., name and
    age all of household members from last wave of data collection).

  
{{< imgproc "images/794256.png" Fit "800x600" />}}  
  
For uploading assignments , either create a .tab file with variable
names of identifying questions or download the template.  
  
{{< imgproc "images/778551.png" Fit "800x600" />}}  
  
Then, in the first row variable names and variable values in subsequent
rows. The variable names in the top row of the .tab file must match
those in the Designer template. The format of those variables must match
those specified in Designer. To set a specific number of cases for each
assignment add the column **\_quantity**.   
  
{{< imgproc "images/818940.png" Fit "800x600" />}}  
  
Then, upload the data in the .tab file. To do so, first click on the
"Upload .TAB File" and select your file.   
Next, the headquarters software will confirm that the uploaded .tab file
contains valid contents and follows the format that the headquarters
software expects. If there are any error messages, check the .tab file
and make the necessary changes. Otherwise, proceed to the next step.  
  
{{< imgproc "images/794258.png" Fit "800x600" />}}  
   
Then, select the person responsible for this batch of survey
assignments. To do so, choose the username from the drop-down menu.
Lastly, click on *Create Assignments*. Note that in this method
headquarters must upload one .tab file per person responsible.  
  
   
However, you can upload one .tab for the survey sample by adding a
column in the .tab file with the heading **\_responsible** and
populating all the fields with the appropriate interviewer or supervisor
usernames.  
{{< imgproc "images/818942.png" Fit "800x600" />}}

### <span id="preloading"></span>Preloading

  
Preloading (identifying and collected data) is used primarily for panel
surveys, is generally similar to the mode described previously but
involves a few additional steps.  To preload both identifying and
collected data, you need to first create a .tab file or set of .tab
files.  
  
To do this, click on the *download .zip template *link.  
  
{{< imgproc "images/778552.png" Fit "800x600" />}}  
  
A .zip file containing one .tab file for each hierarchical level in the
questionnaire will download (e.g., one file containing all
household-level variables, another file containing all household
member-level variables, and still another file containing all
consumption item-level variables). In other words, this provides
headquarters with a template to fill with any pre-existing information
about the survey cases that will be created.  
  
{{< imgproc "images/692348.png" Fit "800x600" />}}  
  
  
While the number of such template files depends on the questionnaire,
the structures of these template files follow the same format. Each file
is composed of: Id, ParentId, and all other variables. The Id is meant
to be a unique identifier for the template file (e.g. a simple serial
number). The ParentId is an identifier that links a lower-level item to
a higher-level item (e.g., serial number of household that operate a
plot). If a roster is nested in another roster, the template file can
also have ParentId1 and ParentId2. See the image below for a graphical
explanation. The other variables in the file correspond to the variables
present at that hierarchical level of observation.  
  
**<span style="color: rgb(255, 0, 0);">Note that the numbering in the
subordinate data files should correspond to the type of roster, please
refer to [this
article](/headquarters/numbering-in-subordinate-rosters-during-preloading)
for more information. </span>**  
  
  
{{< imgproc "images/692351.png" Fit "800x600" />}}  
  
  
Once the .tab file has been created, fill it with three sets of
information. First, headquarters must provide the same set of respondent
address information as outlined in the previous section—that is,
information for the fields marked in the Designer tool as *Identifying*.
Second, headquarters may fill in any pre-existing information about
respondents, using any field in the questionnaire. This would be done by
filling in the columns for any variables, in any one of the .tab files
that make up the questionnaire template. These questions will not appear
on the interviewer's dashboard, and the values can be edited on the
tablet. (**For information on how to protect the values of some question
types from being changed on the tablet, please refer to [this
article](http://support.mysurvey.solutions/customer/en/portal/articles/2942758-protecting-pre-loaded-answers)**).
Third, headquarters must include identifiers in the Id and ParentId
fields so that each record is unique and that the headquarters software
can link each *child *.tab file to its *parent* file. The Id, typically
a simple number, serves as a unique identifier for each record—that is,
a computer identifier that is distinct from the case identifiers used
for locating respondents. The ParentId links records at one level of
hierarchy with records from another level of hierarchy—for example, an
Id that links household members with the household to which they
belong.  
  
  
After all .tab files have been filled in this way, zip all the .tab
files into one .zip file. Then, upload the .zip file using *Upload Zip
File* button.  
  
{{< imgproc "images/778552.png" Fit "800x600" />}}  
  
  
As in the previous method of creating cases, the headquarter software
will then evaluate the uploaded files for validity and consistency with
the questionnaire template. If any errors are identified, correct the
files. Otherwise proceed to the next step and assign the batch of cases
to a supervisor.  
  
{{< imgproc "images/794261.png" Fit "800x600" />}}  
  
Note that headquarters must either upload one set of .tab files per
supervisor (i.e., one .zip file containing one or more .tab files) or
one .tab file for all supervisors where each survey case has been
assigned a supervisor within the file.  
  
 

<span id="copy"></span>Copy questionnaire templates (Administrators)
--------------------------------------------------------------------

  
Cloning questionnaires on headquarters allows you to start a new survey
using the same questionnaire that has been imported to the HQ
previously.  
  
To copy a questionnaire in headquarters, click on the questionnaire you
would like to copy and then select *Clone questionnaire* from the
menu.  
  
{{< imgproc "images/794264.png" Fit "800x600" />}}  
  
If necessary, a new name can be given to the survey initiated from a
cloned questionnaire, such as LFS Quarter 1, LFS Quarter 2, and so on.  
 

<span id="delete"></span>Delete questionnaires (Administrators)
---------------------------------------------------------------

This feature is only available to the administrator. <span
class="underline">**This should should only be used in special
circumstances with extreme caution because it will delete all data
collected with that questionnaire from the server. **</span>

To delete a questionnaire, click on the questionnaire you would like to
delete and select *Delete questionnaire *from the menu.  
  
{{< imgproc "images/794264.png" Fit "800x600" />}}

<span id="assignments"></span>Assignments 
==========================================

  
When you first navigate to the assignments page under the Survey Setup
tab in Headquarters, you will see this screen:  
  
{{< imgproc "images/794265.png" Fit "800x600" />}}  
  
This page displays a tabular view of all assignments that have been
created, the quantity of interviews within each assignment, and other
information about the assignment such as the person responsible,
identifying questions, update date, and create date.  

### <span id="quantity"></span>Quantity of interview cases 

The quantity of interviews for each assignment can be changed on this
page. This is especially useful for cases where Survey Solutions is
being used for a listing exercise and you wish to set or later change a
maximum number interviews for each assignments. To change the quantity,
click on the number in the quantity column and edit the field before
clicking on *Save*.  
  
{{< imgproc "images/794269.png" Fit "800x600" />}}

### <span id="reallocate"></span>Reallocating and archiving assignments

Assignments can be archived or reallocated to another member of the data
collection team. To do this, select the check box corresponding to the
assignments, then select *Assign* or *Archive*. If reassigning, select
the new person responsible and confirm the change.   
{{< imgproc "images/818943.png" Fit "800x600" />}}  
 

<span id="maps"></span>Maps
===========================

To upload and make assignments, follow these simple steps:  
  
{{< imgproc "images/839994.png" Fit "800x600" />}}

-   **First, log into Headquarters.**
-   **Then, upload maps to the server.** Click on UPLOAD .ZIP FILE.
    Select a zip archive containing one or more maps (.tpk)
-   **Next, assign maps to users.** Click on the Update user-to-map
    linking. Upload a tab-delimited file that assigns one or more maps
    to users. 

{{< imgproc "images/839995.png" Fit "800x600" />}}
