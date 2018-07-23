+++
title = "Questionnaire Data - Export File Anatomy"
keywords = ["data file","export","ssSys_IRnd","Id","ParentId1"]
date = 2016-09-23T15:27:34Z
lastmod = 2016-09-23T15:27:34Z
aliases = ["/customer/portal/articles/2579806-questionnaire-data---export-file-anatomy"]

+++

Every questionnaire will contain at least one data file corresponding to
the main level of data, and potentially one or more subordinate files
corresponding to additional levels defined by the rosters.

Questionnaire level file: file name corresponds to the title of the questionnaire  
-----------------------------------------------------------------------------------

The questionnaire level export file consists of the following columns:
Id, question variable names including roster trigger questions, and the
system generated case Id.

<span style="color:#0000CD !important;">1. Id.</span> Survey Solutions
generated identifier for each survey case.  
<span style="color:#FF0000;">2. Variables for main (questionnaire)
level. </span>These variables contain the answers for the questions in
the main questionnaire level. All sections of the questionnaire at the
same level are automatically combined.  
<span style="color:#008000;">3. Rosters trigger questions.
</span>Answers to any questions that trigger rosters are also exported
at their respective level. In this illustration the Household Roster
(variable hh\_list) and Garden Roster (variable garden\_list) text list
questions at the questionnaire level.  
<span style="color:#DAA520;">4. ssSys\_IRnd.</span> A system generated
specific random number between 0 and 1 for each survey case.  

{{< imgproc "images/677291.png" Fit "800x600" />}}Subordinate file(s): file name corresponds to roster ID  
--------------------------------------------------------------------------------

The roster data is exported in subordinate files, which include the
following columns: Id, trigger question (only if the roster is triggered
by text list question), answers to roster questions, and system
generated identifier ParentId1.   
 

<span style="color:#0000FF;">1. Id.</span> Identifiers corresponding to
roster row code (@rowcode) of each item.  
<span style="color:#DAA520;">2. Roster source question. </span>Values
recorded in the list question that has triggered the roster (only for
rosters triggered by text list questions).  
<span style="color:#800080;">3. Variables for questions inside the
household roster.</span>  
<span style="color:#008000;">4. ParentId1.</span> Refers to the Id
attribute of the corresponding parent (record at higher level). For
example, in this case the value of ParentId1 contains an identifier of
the household, and this value matches the value in the Id column of the
questionnaire level file.

{{< imgproc "images/691174.png" Fit "800x600" />}}
