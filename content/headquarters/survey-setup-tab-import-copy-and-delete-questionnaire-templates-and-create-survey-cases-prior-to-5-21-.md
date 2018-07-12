+++
title = "Survey Setup Tab: Import, Copy, and Delete Questionnaire Templates, and Create Survey Cases (prior to 5.21)"
keywords = ["import","copy","delete","headquarters","templates","sample","survey cases"]
date = 2016-07-06T00:08:04Z
lastmod = 2016-07-06T00:08:04Z
+++

  
![](/images/732254.png)  
  
The survey setup tab lets you do several things:

1.  **[Import template.](#import)** Import questionnaires from the
    Designer site to the headquarters software.
2.  **[Create survey cases](#create):** Headquarters provides two ways
    of adding survey cases for a given questionnaire: [one at a
    time](#oneatatime), or in a [many at a time (batch)](#severalcases).
3.  **[Clone questionnaire template](#copy):** Copy the questionnaire
    templates previously imported to the server. 
4.  **[Delete questionnaire.](#copy)** This feature is only available to
    the administrator.

  
  
When you first navigate to the Survey Setup tab in Headquarters, you
will first see this screen:  
  
![](/images/756583.png)  
 

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

  
When clicked, the green *Import template* button prompts the user to
connect to the Designer site and to select a questionnaire template for
import. To connect to Designer, headquarters must enter a valid login
and password (as pictured below). Note that these login credentials are
for the Designer site, not the headquarters software.  
  
![](/images/732258.png)  
  
  
After connecting to the Designer site, the user must select a
questionnaire template to import. To do so, the user must first find a
questionnaire, either by scrolling through the list of questionnaires
available or using the search box. Click on the questionnaire to import
it.   
  
![](/images/732262.png)  
  
  
Then, you will be prompted to select the mode of the survey: Sample or
Census.   
  
![](/images/778561.png)  
  
Once import of the selected questionnaire is complete, the name of that
questionnaire appears in the list of questionnaires on the
Questionnaires tab. If this is the first time the questionnaire has been
imported, the headquarters software will add “(1)” in the column titled
"Version". Each time a new version of the same questionnaire is
imported, the software will add the corresponding version number in that
column.  
  
![](/images/732264.png)

<span id="create"></span>Create survey cases
--------------------------------------------

  
To create survey cases, click on the questionnaire you want to create
cases for. Then you will see a menu that will have two options for
creating new survey cases: *New Interview*, which creates survey cases
one at a time; and *Batch upload* , which creates several survey cases
at once.  
  
![](/images/756611.png)  
 

### <span id="oneatatime"></span>One case at a time

  
After clicking on *New Interview* menu, you will be prompted to provide
identifying information for the survey case—typically name and
geographic location of the respondent—and to select a supervisor to be
responsible for the interviewing case.  The set of identifying
information, which corresponds to the questions marked as *Identifying*
on the Designer site, must be provided by headquarters when creating a
case and will appear on the interviewer’s dashboard when assigned.  
  
You will also prompted to designate a supervisor as responsible for the
case (Responsible). Once assigned to a supervisor, the survey case will
appear on the supervisor’s dashboard and will be available to assign to
one of the supervisor’s data collection team.  
  
![](/images/656117.png)  
 

### <span id="severalcases"></span>Several cases at a time

  
While selecting *New Interview* requires you to enter case address
information manually, the *Batch upload* method relies on an external
tab delimited .tab file that contains that same information for each
case to be created—and potentially other information to include into
those cases as well. The headquarters software offers two ways of using
external .tab files to pre-fill survey cases in a batch upload:

1.  Identifying data only, typically used for cross-sectional surveys,
    which loads only respondent address information (e.g., region,
    enumeration area, village, name of household head)
2.  An advanced mode which involves preloading info (identifying data
    and collected data), typically used for panel surveys, which loads
    not only information on the respondent’s address, but also
    information for any other field of the questionnaire (e.g., name and
    age all of household members from last wave of data collection).

  
![](/images/778549.png)  
  
For Batch Upload mode, either create a .tab file with variable names of
identifying questions or download the template.  
  
![](/images/778551.png)  
  
Then, in the first row and variable values in subsequent rows The
variable names in the top row of the .tab file must match those in the
Designer template. The format of those variables must match those
specified in Designer. Moreover, no variable values may be left blank.
Instead, blank values should be recorded as codes that fall within the
variable’s valid range (e.g., using -9 for blank entries in a numeric
field only if -9 is in the admissible range).  
  
![](/images/656295.png)  
  
Then, upload the data in the .tab file. To do so, first click on the
"Upload .TAB File" and select your file.   
Next, the headquarters software will confirm that the uploaded .tab file
contains valid contents and follows the format that the headquarters
software expects. If there are any error messages, check the .tab file
and make the necessary changes. Otherwise, proceed to the next step.  
  
![](/images/732272.png)  
   
Then, select which supervisor will be responsible for this batch of
survey cases. To do so, choose the name of a supervisor from the
drop-down menu. Note that in this method headquarters must upload one
.tab file per supervisor.  
  
![](/images/732273.png)  
   
However, you can upload one .tab for the survey sample by adding a
column in the .tab file with the heading **\_responsible** and
populating all the fields with the appropriate interviewer or supervisor
usernames.  
  
![](/images/656298.png)  
 

### <span id="preloading"></span>Preloading

  
Preloading (identifying and collected data) is used primarily for panel
surveys, is generally similar to the mode described previously but
involves a few additional steps.  To preload both identifying and
collected data, you need to first create a .tab file or set of .tab
files.  
  
To do this, click on the *download .zip template* link.  
  
![](/images/778552.png)  
  
A .zip file containing one .tab file for each hierarchical level in the
questionnaire will download (e.g., one file containing all
household-level variables, another file containing all household
member-level variables, and still another file containing all
consumption item-level variables). In other words, this provides
headquarters with a template to fill with any pre-existing information
about the survey cases that will be created.  
  
![](/images/692348.png)  
  
  
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
  
![](/images/692351.png)  
  
Note that the
[numbering](/headquarters/numbering-in-subordinate-rosters-during-preloading) in
the subordinate data files should correspond to the type of roster.  
  
Once the .tab file has been created, fill it with three sets of
information. First, headquarters must provide the same set of respondent
address information as outlined in the previous section—that is,
information for the fields marked in the Designer tool as *Identifying*.
Second, headquarters may fill in any pre-existing information about
respondents, using any field in the questionnaire. This would be done by
filling in the columns for any variables, in any one of the .tab files
that make up the questionnaire template. These questions will not appear
on the interviewer's dashboard, and the values can be edited on the
tablet.  Third, headquarters must include identifiers in the Id and
ParentId fields so that each record is unique and that the headquarters
software can link each *child *.tab file to its *parent* file. The Id,
typically a simple number, serves as a unique identifier for each
record—that is, a computer identifier that is distinct from the case
identifiers used for locating respondents. The ParentId links records at
one level of hierarchy with records from another level of hierarchy—for
example, an Id that links household members with the household to which
they belong.  
  
  
After all .tab files have been filled in this way, zip all the .tab
files into one .zip file. Then, upload the .zip file using *Upload Zip
File* button.  
  
![](/images/778552.png)  
  
  
As in the previous method of creating cases, the headquarter software
will then evaluate the uploaded files for validity and consistency with
the questionnaire template. If any errors are identified, correct the
files. Otherwise proceed to the next step and assign the batch of cases
to a supervisor.  
  
![](/images/732284.png)  
  
Note that headquarters must either upload one set of .tab files per
supervisor (i.e., one .zip file containing one or more .tab files) or
one .tab file for all supervisors where each survey case has been
assigned a supervisor within the file.  
  
 

<span id="copy"></span>Copy questionnaire templates
---------------------------------------------------

  
Cloning questionnaires on headquarters allows you to start a new survey
using the same questionnaire that has been imported to the HQ
previously.  
  
To copy a questionnaire in headquarters, click on the questionnaire you
would like to copy and then select *Clone questionnaire* from the
menu.  
  
![](/images/756618.png)  
  
If necessary, a new name can be given to the survey initiated from a
cloned questionnaire, such as LFS Quarter 1, LFS Quarter 2, and so on.  
 

<span id="delete"></span>Delete questionnaires (Administrators)
---------------------------------------------------------------

This feature is only available to the administrator. <span
class="underline">**This should should only be used in special
circumstances with extreme caution because it will delete all data
collected with that questionnaire from the server. **</span>

To delete a questionnaire, click on the questionnaire you would like to
delete and select *Delete questionnaire *from the menu.  
  
![](/images/756622.png)
