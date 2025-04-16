+++
title = "Data Export Files "
keywords = ["export files","tab","stata","spss","DDI","zip file","missing"]
date = 2016-08-18T13:22:05Z
lastmod = 2016-08-18T13:22:05Z
aliases = ["/customer/portal/articles/2541274-data-export-files-","/customer/en/portal/articles/2541274-data-export-files-","/customer/portal/articles/2541274","/customer/en/portal/articles/2541274","/headquarters/data-export-files-"]

+++

Overview
------------

  
The exported data will be in a .zip file containing one or more files.
The number of such files is a function of the structure of the
questionnaire, meaning that exporting produces one file per level of
observation in the questionnaire, or in other words in addition to one
file at the questionnaire level, each roster in the questionnaire will
generate another export file.  For example, one file for household-level
variables, one file for household member-level variables, and one file
for asset-level or consumption item-level variables. Additionally, the
.zip file will contain interview comments and interview actions files.
   
 

Note that the exported data differentiates between missing values caused
by the logic of the questionnaire (skipped questions) and missing values
due to absence of an answer. Only the values of the logically skipped
questions will be have missing values (blanks in tab-delimited files),
whereas -999999999 or  \#\#N/A\#\# (for string variables) will be
exported whenever an answer to a question was expected, but not recorded
for string variables).

Data formats
-----------------

   
The actual files exported will differ slightly based on the file format
you have chosen to use.  
   
**Tab**

-   Exports tab-delimited data in .tab files
-   Each file is accompanied by a Stata .do file that reads the .tab
    file into memory, and applies variable and value labels

   
**Stata**
 

-   Exports DTA files directly. If .do file for applying variable and
    value labels desired, they can be found accompanying the
    tab-delimited data. 
-   Version 14, which supports Unicode standard for string data. 

   
**SPSS**
 

-   Exports SAV file directly. 

  
<span style="line-height: 20.8px;">**DDI**</span>

-   <span style="line-height: 20.8px;">If you are thinking about
    committing your collected data into a public repository you are
    likely to be requested for a DDI description of your data. </span>
-   <span class="underline">Data Documentation Initiative</span>is an
    international project to create a standard for meta data in social
    sciences. You can export an xml file with meta information about
    your data for processing in DDI compatible software, for
    example [Nesstar
    Publisher ](https://www.ihsn.org/software/ddi-metadata-editor)
-   <span style="line-height: 20.8px;"><span
    style="line-height: 20.8px;"><span style="line-height: 20.8px;">The
    following information is exported: the list of data files,
    variables, their types, labels, question texts, interviewer
    instructions, etc.</span></span></span>


How the questionnaire structure affects the number of export files
------------------------------------------------------------------------
  
We will now explain how the data files are exported through an extended
example. In Questionnaire Designer, the example survey (below) consists
of questions about the interview at the household level and a household
roster that include questions about each household member.   
  
{{< imgproc "images/677299.png" Fit "800x600" />}}

 

Data collected using this questionnaire is exported in the following
number of files: One file at the questionnaire/household level of
observation, another file at the household members/parent level, and two
system generated service files on interview actions and comments.   
  
  
Click the relevant links to see more detailed information regarding the
anatomy of each
file: [Questionnaire](/headquarters/questionnaire-data---export-file-anatomy) (both
questionnaire and parent level files), [System
Generated](/headquarters/export/system-generated---export-file-anatomy/)   
{{< imgproc "images/773031.png" Fit "800x600" />}}
