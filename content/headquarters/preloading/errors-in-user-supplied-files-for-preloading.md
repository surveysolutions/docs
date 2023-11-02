+++
title = "Errors in user-supplied files for preloading"
keywords = [""]
date = 2018-03-09T22:50:55Z
lastmod = 2018-03-09T22:50:55Z
aliases = ["/customer/portal/articles/2928007-errors-in-user-supplied-files-for-preloading","/customer/en/portal/articles/2928007-errors-in-user-supplied-files-for-preloading","/customer/portal/articles/2928007","/customer/en/portal/articles/2928007","/headquarters/errors-in-user-supplied-files-for-preloading"]

+++

Survey Solutions allows preloading assignments with data, including
answers to questions inside rosters and nested rosters.  

It is the user's responsibility to supply valid input files for this
process. The user-supplied files will be validated to match the
questionnaire template that is being preloaded. Survey Solutions can
detect a number of inconsistencies and common problems and will indicate
them during preloading.   

Each detected error is having a code listed in the table below.
Additional checks may be added in the future.   

When an error is detected in the preloading file, Survey Solutions may
reject such input data fully or partially. If Survey Solutions rejects
the preloading file completely, and you can't localize the problem (in
which interview it occurs) it is a good idea to try to break down the
preloading file into smaller portions to identify, in which specific
interview the problem is present.  

Many of the messages below are accompanied by various identifying
information, such as a line number in the file, values of identifying
questions, variable names, roster indices or other supplementary
information that helps localizing the problem.  

It is a good practice to establish a reproducible process of creating
assignments (preloading data files) by writing scripts/programs that can
be adjusted and re-run to obtain the desired preloading file. Survey
Solutions users commonly use various statistical packages, such as
Stata, SPSS, R as well as queries to databases to extract the necessary
information in exactly the format expected at input by Survey Solutions.
This practice allows adjustments be done to those scripts whenever the
format of input data for Survey Solutions changes, or if the sample file
needs to be replicated for troubleshooting purposes.  
 

<table class="table table-striped table-hover">
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr class="header bg-warning">
<th>Code</th>
<th>Message</th>
<th>Description/Comment</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><div>
<span class="s" style="color: rgb(187, 136, 68);">PL0001</span>
</div></td>
<td><div>
Questionnaire is missing in HQ
</div></td>
<td><div>
Rare. Questionnaire that you are trying to preload has been deleted by the server administrator.<br />
<br />
Contact the server administrator.
</div></td>
</tr>
<tr class="even">
<td><div>
<span class="s" style="color: rgb(187, 136, 68);">PL0002</span>
</div></td>
<td><div>
N/A
</div></td>
<td><div>
If you see this error contact the support team.
</div></td>
</tr>
<tr class="odd">
<td><div>
<span class="s" style="color: rgb(187, 136, 68);">PL0003</span>
</div></td>
<td><div>
Column cannot be mapped to any question in the questionnaire.
</div></td>
<td><div>
In the file being uploaded a column name (variable) is specified, which is not present in the questionnaire.<br />
<br />
Check column names for typos, check variables are in appropriate levels (files).
</div></td>
</tr>
<tr class="even">
<td><div>
<span class="s" style="color: rgb(187, 136, 68);">PL0004</span>
</div></td>
<td><div>
File cannot be mapped to any roster in the questionnaire.
</div></td>
<td><div>
The archive being uploaded contains a file that Survey Solutions doesn't know what to do with it.<br />
<br />
Check how the files are named against the template downloadable from Survey Solutions HQ.
</div></td>
</tr>
<tr class="odd">
<td><div>
<span class="s" style="color: rgb(187, 136, 68);">PL0005</span>
</div></td>
<td><div>
N/A
</div></td>
<td><div>
If you see this error contact the support team.
</div></td>
</tr>
<tr class="even">
<td><div>
<span class="s" style="color: rgb(187, 136, 68);">PL0006</span>
</div></td>
<td><div>
Duplicate Id values found.
</div></td>
<td><div>
Check the ids for duplicates and renumber or correct the typos.
</div></td>
</tr>
<tr class="odd">
<td><div>
<span class="s" style="color: rgb(187, 136, 68);">PL0007</span>
</div></td>
<td><div>
One or more parent Id column is missing.
</div></td>
<td><div>
For every element of roster files id columns linking it to higher levels must be present and non-missing.<br />
<br />
Check the id columns in the roster files and fill them out with appropriate ids. For example, for every person in the household roster there must be a household id specified where this person resides.
</div></td>
</tr>
<tr class="even">
<td><div>
<span class="s" style="color: rgb(187, 136, 68);">PL0008</span>
</div></td>
<td><div>
Roster record does not have a parent.
</div></td>
<td><div>
A record in the roster file refers to non-existent record in the parent file (orphan record).<br />
<br />
Check for relationships between the files. For every detailed record the parent record must exist.
</div></td>
</tr>
<tr class="odd">
<td><div>
<span class="s" style="color: rgb(187, 136, 68);">PL0009</span>
</div></td>
<td><div>
Roster Id is inconsistent with roster size.
</div></td>
<td><div>
Either the number of elements in the roster or their numeration is inconsistent with the trigger question.<br />
<br />
See recommendations <a href={{< ref "numbering-in-subordinate-rosters-during-preloading" >}}>here</a>.
</div></td>
</tr>
<tr class="even">
<td><div>
<span class="s" style="color: rgb(187, 136, 68);">PL0010</span>
</div></td>
<td><div>
Linked questions cannot be preloaded.
</div></td>
<td><div>
Remove the values from the columns corresponding to linked questions.
</div></td>
</tr>
<tr class="odd">
<td><div>
<span class="s" style="color: rgb(187, 136, 68);">PL0011</span>
</div></td>
<td><div>
General error occurred.
</div></td>
<td><div>
Inspect the records you are preloading against the questionnaire designed. Survey Solutions reported that it can't preload the records with the values it received from the user, but no additional information is available.
</div></td>
</tr>
<tr class="even">
<td><div>
<span class="s" style="color: rgb(187, 136, 68);">PL0012</span>
</div></td>
<td><div>
Question found in the uploaded file(s) that does not exist in the questionnaire
</div></td>
<td><div>
Check column names against the template that can be downloaded from the Survey Solutions HQ for this questionnaire.
</div></td>
</tr>
<tr class="odd">
<td><div>
<span class="s" style="color: rgb(187, 136, 68);">PL0013</span>
</div></td>
<td><div>
Provided value is null or empty
</div></td>
<td><div>
Value that was expected to be not empty is found to be empty in the preloading file.<br />
<br />
Replace the blank values with appropriate non-missing values.
</div></td>
</tr>
<tr class="even">
<td><div>
<span class="s" style="color: rgb(187, 136, 68);">PL0014</span>
</div></td>
<td><div>
Provided question value not allowed.
</div></td>
<td><div>
Replace the erroneous value with a permitted one. For example, in categorical questions, make sure the category exists among the categories specified for this question in the questionnaire.
</div></td>
</tr>
<tr class="odd">
<td><div>
<span class="s" style="color: rgb(187, 136, 68);">PL0015</span>
</div></td>
<td><div>
Type of question is not correct.
</div></td>
<td><div>
Check that the value being uploaded corresponds to the question type. Such as string vs numeric content.
</div></td>
</tr>
<tr class="even">
<td><div>
<span class="s" style="color: rgb(187, 136, 68);">PL0016</span>
</div></td>
<td><div>
Invalid Date or Time value entered in the date question.
</div></td>
<td><div>
Check the format of the date/time values you are preloading.
</div></td>
</tr>
<tr class="odd">
<td><div>
<span class="s" style="color: rgb(187, 136, 68);">PL0017</span>
</div></td>
<td><div>
Invalid GPS value.
</div></td>
<td><div>
Check the GPS coordinates for validity. Express coordinates in degrees and decimals, such as <TT><I>51.50</I></TT>, not in degrees and minutes, seconds, not <TT><I>51&deg;30&prime;00&quot;</I></TT>.
</div></td>
</tr>
<tr class="even">
<td><div>
<span class="s" style="color: rgb(187, 136, 68);">PL0018</span>
</div></td>
<td><div>
Only integer values are allowed.
</div></td>
<td><div>
You are trying to put a non-integer value to a question or variable that only accepts integer answers.<br />
<br />
Replace with integer values.
</div></td>
</tr>
<tr class="odd">
<td><div>
<span class="s" style="color: rgb(187, 136, 68);">PL0019</span>
</div></td>
<td><div>
Only real values are allowed.
</div></td>
<td><div>
Non-numeric value found for categorical question.
</div></td>
</tr>
<tr class="even">
<td><div>
<span class="s" style="color: rgb(187, 136, 68);">PL0022</span>
</div></td>
<td><div>
Roster size question cannot have negative values.
</div></td>
<td><div>
Replace with non-negative values.
</div></td>
</tr>
<tr class="odd">
<td><div>
<span class="s" style="color: rgb(187, 136, 68);">PL0023</span>
</div></td>
<td><div>
Picture question cannot be preloaded.
</div></td>
<td><div>
Remove the values from the columns corresponding to picture questions.
</div></td>
</tr>
<tr class="even">
<td><div>
<span class="s" style="color: rgb(187, 136, 68);">PL0024</span>
</div></td>
<td><div>
Preloading data were not found
</div></td>
<td><div>
 
</div></td>
</tr>
<tr class="odd">
<td><div>
<span class="s" style="color: rgb(187, 136, 68);">PL0025</span>
</div></td>
<td><div>
Responsible field was not provided for 1 or more observations
</div></td>
<td><div>
If the _responsible column is present in the preloading data, it must be all populated without any blanks.<br />
<br />
Check _responsible column for blanks (missings) and fill out with appropriate account names.
</div></td>
</tr>
<tr class="even">
<td><div>
<span class="s" style="color: rgb(187, 136, 68);">PL0026</span>
</div></td>
<td><div>
Responsible does not exist for 1 or more observations
</div></td>
<td><div>
Name specified as responsible person (recepient of the assignment) does not exist.<br />
<br />
Check _responsible column for typos. Make sure all of the accounts mentioned are already created in the HQ and have either a supervisor or interviewer role.
</div></td>
</tr>
<tr class="odd">
<td><div>
<span class="s" style="color: rgb(187, 136, 68);">PL0027</span>
</div></td>
<td><div>
Responsible is a locked user for 1 or more observations
</div></td>
<td><div>
Assignments can't be made to the users locked out from the system.<br />
<br />
Check that the responsible users are not locked. Either unlock the user or assign to a different user.
</div></td>
</tr>
<tr class="even">
<td><div>
<span class="s" style="color: rgb(187, 136, 68);">PL0028</span>
</div></td>
<td><div>
User is not Supervisor or Interviewer for 1 or more observations
</div></td>
<td><div>
Preloading file contains a login name of a person who is neither a supervisor nor an interviewer, and hence may not receive an assignment.<br />
<br />
Check the names and roles of the account names mentioned in the _responsible column. Revise so that everyone is either a supervisor or an interviewer.
</div></td>
</tr>
<tr class="odd">
<td><div>
<span class="s" style="color: rgb(187, 136, 68);">PL0029</span>
</div></td>
<td><div>
Answer to roster size question cannot be greater than NN.
</div></td>
<td><div>
You are trying to preload a very large value not supported by Survey Solutions.<br />
<br />
Reduce the value.
</div></td>
</tr>
<tr class="even">
<td><div>
<span class="s" style="color: rgb(187, 136, 68);">PL0030</span>
</div></td>
<td><div>
GPS questions require separate columns for Latitude and Longitude
</div></td>
<td><div>
In early versions of Survey Solutions GPS question data was exported into a single string column with internal formatting. This is no longer the case in new versions, and each component occupies it's own column.<br />
<br />
Separate latitude from longitude.
</div></td>
</tr>
<tr class="odd">
<td><div>
<span class="s" style="color: rgb(187, 136, 68);">PL0030</span>
</div></td>
<td><div>
GPS question requires Latitude and Longitude to be set.
</div></td>
<td><div>
Make sure both latitude and longitude are specified for GPS questions.
</div></td>
</tr>
<tr class="even">
<td><div>
<span class="s" style="color: rgb(187, 136, 68);">PL0031</span>
</div></td>
<td><div>
Two or more columns have the same name.
</div></td>
<td><div>
There should be no two columns with identical names in any file, downloaded from or uploaded to Survey Solutions.<br />
<br />
Check column names for typos. For columns that correspond to lists, make sure
the indices are present in column titles, for example, <I>member__0</I>,
<I>member__1</I>, etc.
</div></td>
</tr>
<tr class="odd">
<td><div>
<span class="s" style="color: rgb(187, 136, 68);">PL0032</span>
</div></td>
<td><div>
Latitude must be greater than -90° and less than 90°.
</div></td>
<td><div>
Check that the values of latitude in the preloading file are all within the <TT>-90, 90</TT> range. <br />
<br />
If your coordinates come from some other projection you may need to convert (reproject) to degrees.
</div></td>
</tr>
<tr class="even">
<td><div>
<span class="s" style="color: rgb(187, 136, 68);">PL0033</span>
</div></td>
<td><div>
Longitude must be greater than -180° and less than 180°.
</div></td>
<td><div>
Check that the values of longitude in the preloading file are all within the <TT>-180, 180</TT> range. <br />
<br />
If your coordinates come from some other projection you may need to convert (reproject) to degrees.
</div></td>
</tr>
<tr class="odd">
<td><div>
<span class="s" style="color: rgb(187, 136, 68);">PL0034</span>
</div></td>
<td><div>
Invalid decimal separator. The &quot;,&quot; symbol is not allowed in numeric answers. Please use &quot;.&quot; instead.
</div></td>
<td><div>
Always use a dot in fractional numeric values, even if a comma (or another character) is used in your country or in your current OS settings as a decimal delimiter.<br />
<br />
Reformat the values in the preloading file to use a dot as a decimal delimiter.
</div></td>
</tr>
<tr class="even">
<td><div>
<span class="s" style="color: rgb(187, 136, 68);">PL0035</span>
</div></td>
<td><div>
Only integer values are allowed.
</div></td>
<td><div>
Preloading file contains a fractional (non-integer) value, where only integers were expected based on the questionnaire template.<br />
<br />
Replace fractional with integer values.
</div></td>
</tr>
<tr class="odd">
<td><div>
<span class="s" style="color: rgb(187, 136, 68);">PL0036</span>
</div></td>
<td><div>
Quantity should be greater than or equal to -1.
</div></td>
<td><div>
In assignments, the requested quantity must be an integer value, and may be 0 or a positive value, or a -1 for infinite number of interviews. Other negative values are not permitted.<br />
<br />
Revise the requested quantities of interviews in the assignments.
</div></td>
</tr>
<tr class="even">
<td><div>
<span class="s" style="color: rgb(187, 136, 68);">PL0037</span>
</div></td>
<td><div>
Column cannot be mapped to non identifying question
</div></td>
<td><div>
Check the variable names in the first row of each file against the template that can be downloaded from Survey Solutions HQ.
</div></td>
</tr>
<tr class="odd">
<td><div>
<span class="s" style="color: rgb(187, 136, 68);">PL0038</span>
</div></td>
<td><div>
Area question cannot be preloaded.
</div></td>
<td><div>
Remove the values from the columns corresponding to area questions.
</div></td>
</tr>
<tr class="even">
<td><div>
<span class="s" style="color: rgb(187, 136, 68);">PL0039</span>
</div></td>
<td><div>
Audio question cannot be preloaded.
</div></td>
<td><div>
Remove the values from the columns corresponding to audio questions.
</div></td>
</tr>
<tr class="odd">
<td><div>
<span class="s" style="color: rgb(187, 136, 68);">PL0040</span>
</div></td>
<td><div>
File with questionnaire level data is missing.
</div></td>
<td><div>
Survey Solutions can't find in the zip-archive being uploaded the file named the same as the questionnaire.<br />
<br />
Check the names of the files in the zip archive being uploaded. One file must have the same name as the questionnaire. Note that Survey Solutions refines the name of the questionnaire removing any special characters, punctuation, non-latin and accented characters from the filename (and does not expect any of them in the files being preloaded). To see what name the questionnaire should have, download the template file offered at the sample preloading step.
</div></td>
</tr>
<tr class="even">
<td><div>
<span class="s" style="color: rgb(187, 136, 68);">PL0041</span>
</div></td>
<td><div>
Answer to multiple choice question cannot contain more than NN answers.
</div></td>
<td><div>
Preloading file contains more answers than permitted by the maximum answers NN set in the questionnaire template.<br />
<br />
Reduce the number of answers in the preloading file or revise the questionnaire template in the Designer.
</div></td>
</tr>
<tr class="odd">
<td><div>
<span class="s" style="color: rgb(187, 136, 68);">PL0042</span>
</div></td>
<td><div>
Id column doesn't have any value.
</div></td>
<td><div>
Provide a valid value for all ids.
</div></td>
</tr>
<tr class="even">
<td><span class="s" style="color: rgb(187, 136, 68);">PL0047</span></td>
<td>Required column variable__name is missing</td>
<td>The file <em>protected__variables.tab</em> does not contain the required column <em>variable__name</em>.<br />
<br />
Make sure that this file is a text file and contains a single column with the name <em>variable__name</em>. Mind the double underscores in the name of this column.</td>
</tr>

<tr class="odd">
<td><span class="s" style="color: rgb(187, 136, 68);">PL0048</span></td>
<td>Protected variable is not found in provided questionnaire</td>
<td>The file <em>protected__variables.tab</em> specified a variable name that doesn't exist in the questionnaire template.<br />
<br />
Check the names of the variables versus the names in the questionnaire Designer. For text list and multi-select categorical questions only the root name must be specified, e.g. <em>hhmembers</em>, not <em>hhmembers__2</em>.</td>
</tr>

<tr class="even">
<td><span class="s" style="color: rgb(187, 136, 68);">PL0049</span></td>
<td>Variable has type that does not support protection</td>
<td>The file <em>protected__variables.tab</em> mentions a variable name corresponding to a question not supported by <a href="/headquarters/protecting-pre-loaded-answers">protection</a>. Error message mentions the first of such invalid variables.<br />
<br />
Check the file for typos in variable names.<br />
<br />
Check the types of the variable mentioned in the error message. It must be one
of the permitted for protection.</td>
</tr>


<tr class="odd">
<td><span class="s" style="color: rgb(187, 136, 68);">PL0050</span></td>
<td>Negative value is not allowed for Categorical Multi select question.</td>
<td>Check the value being preloaded into a multi-select question.</td>
</tr>

<tr class="even">
<td><span class="s" style="color: rgb(187, 136, 68);">?</span></td>
<td>Password-protected archives are not supported</td>
<td>Upload the preloading data in an archive without a password, since there
is no way for the server to unpack password-protected data.</td>
</tr>

<tr class="odd">
<td><span class="s" style="color: rgb(187, 136, 68);">PL0052</span></td>
<td>List roster should have a column for text list answers</td>
<td>When preloading values in the roster triggered by a text list type question,
include a column of text values in the roster-level file. The variable should be
having the same name as name of the trigger question itself.</td>
</tr>

<tr class="even">
<td><span class="s" style="color: rgb(187, 136, 68);">PL0053</span></td>
<td>Inconsistent roster code for numeric roster. Sequence of roster codes
should be 0, 1, ... to count of roster instances</td>
<td>Check the IDs of the items in the roster file. Correct the IDs to follow
the indicated sequence.</td>
</tr>

<tr class="odd">
<td><span class="s" style="color: rgb(187, 136, 68);">PL0054</span></td>
<td>Max quantity shouldn't be more than &#35; .</td>
<td>The value specified for <TT><I>_quantity</I></TT> is too large,
overshooting the indicated limit value.
<BR><BR>
Review the requested quantities of interviews. Break large assignments into
two or more smaller size assignments, or use the specific value
<TT><I>-1</I></TT> to indicate infinite-size assignments.
</td>
</tr>

<tr class="even">
<td><span class="s" style="color: rgb(187, 136, 68);">PL0055</span></td>
<td>Email is not valid</td>
<td>Value indicated in the <TT><I>_email</I></TT> field of the preloading file is
not a valid email for one or multiple assignments. Review and correct the email
values.</td>
</tr>

<tr class="odd">
<td><span class="s" style="color: rgb(187, 136, 68);">PL0056</span></td>
<td>Invalid Password. At least 6 numbers and upper case letters or single symbol
'?' to generate password</td>
<td>Value indicated in the <TT><I>_password</I></TT> field of the preloading
file does not comply with the password rules. Review the passwords specified in
the preloading file and specify passwords that are compliant with the indicated
rules, or specify the question mark for the cases where you want Survey
Solutions to automatically generate a valid password.</td>
</tr>

<tr class="even">
<td><span class="s" style="color: rgb(187, 136, 68);">PL0057</span></td>
<td>For assignments with provided email allowed quantity is 1</td>
<td>Assignments distributed over email necessarily need the quantity value of
<TT><I>1</I></TT>.</td>
</tr>

<tr class="odd">
<td><span class="s" style="color: rgb(187, 136, 68);">PL0058</span></td>
<td>Web Mode has to be activated for assignments having Email</td>
<td>The parameter <TT><I>_email<I></TT> should only be prefilled if the mode
for an assignment is CAWI (web).</td>
</tr>

<tr class="even">
<td><span class="s" style="color: rgb(187, 136, 68);">PL0059</span></td>
<td>Web Mode has to be activated for assignments having Password</td>
<td>The parameter <TT><I>_password<I></TT> should only be prefilled if the mode
for an assignment is CAWI (web).</td>
</tr>

<tr class="odd">
<td><span class="s" style="color: rgb(187, 136, 68);">PL0060</span></td>
<td>Assignment with size 1 for web mode should have either email or password
provided</td>
<td>Make sure you specify a valid email, or valid password (or both) for
web-assignments of size <TT><I>1</I></TT>.</td>
</tr>

<tr class="even">
<td><span class="s" style="color: rgb(187, 136, 68);">PL0061</span></td>
<td>Password is not unique. Password by assignment for web mode with
quantity 1 should be unique</td>
<td>Check that within the preloading file no two assignments have identical
passwords specified. Specify the question mark for the assignments where you
want Survey Solutions to automatically generate a valid password.</td>
</tr>

<tr class="odd">
<td><span class="s" style="color: rgb(187, 136, 68);">PL0062</span></td>
<td>All assignments for web interviews must be made to an interviewer</td>
<td>Check the values of the <TT><I>_responsible</I></TT> field. For
web-assignments the responsible person should be an account in the role
<I>Interviewer</I>.</td>
</tr>

<tr class="even">
<td><span class="s" style="color: rgb(187, 136, 68);">PL0063</span></td>
<td>Answer to question with variable name {0} can't be preloaded, since it is
of unsupported type. Refer to the following support article
https://support.mysurvey.solutions/questionnaire-designer/limits/design-limitations-by-question-type
for details of what can be preloaded in the current version.</td>
<td>You are trying to preload a question, where preloading is not possible
based on the question type. Refer to the linked resource for a discussion of
where preloading is possible.</td>
</tr>

</tbody>
</table>
