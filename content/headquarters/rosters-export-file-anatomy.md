+++
title = "Rosters-Export File Anatomy"
keywords = ["data file","export","roster"]
date = 2016-11-09T19:28:15Z
lastmod = 2016-11-09T19:28:15Z
aliases = ["/customer/portal/articles/2636469-rosters-export-file-anatomy"]

+++

Recall that each exported file corresponds with a level of observation
in the questionnaire. Rosters and their source question are exported as
follows:

-   Source question: Export file at the questionnaire level (corresponds
    with the name of the questionnaire)
-   Roster: Export file at the roster level (corresponds with the roster
    name)

 List Roster
------------

In the export file at the questionnaire level, a list roster source
question generates as many columns as the defined maximum number of list
elements. Recorded values will be shown in each column.  
  
![](/images/713157.png)  
  
In the export file at the roster level, each value recorded is on a
separate row.  
  
![](/images/713165.png)  
  
All files contain an Id and Parent Id column. The Id column corresponds
to the order in which the list item is shown in the export file at the
questionnaire level.  The Parent Id column is the survey case Id number.
The remaining columns in the file correspond to variable names of other
questions in the roster.

 Multi-Select Roster
--------------------

In the export file at the questionnaire level, a multi-select roster
source question generates an equal number of columns as there are answer
options. Recorded values will be shown in each column.  
  
The picture below displays how a multi-select roster source question in
yes/no mode is exported.  
  
![](/images/713158.png)  
  
In the export file at the roster level, each value recorded is on a
separate row.  
  
![](/images/713178.png)  
  
All files contain an Id and Parent Id column. The Id column corresponds
to answer option code that is recorded as "yes" in the roster source
question, which is also shown in the export file at the questionnaire
level as "1".  The Parent Id column is the survey case Id number. The
remaining columns in the file correspond to variable names of other
questions in the roster.

 Numeric Roster
---------------

In the questionnaire level export file, the numeric roster source
question is simply one column labeled with the question variable name.
   
  
![](/images/713160.png)  
  
In the export file at the roster level, rows are generated according to
the number recorded in the numeric roster source question.  
  
![](/images/713172.png)  
  
All files contain an Id and Parent Id column. The Id column corresponds
to row code of each item listed in the roster. The Parent Id column is
the survey case Id number. The remaining columns in the file correspond
to variable names of other questions in the roster.

Fixed Items Roster
------------------

Unlike the three other rosters described previously, the fixed titles
roster is not linked to a source question, and therefore is not included
in the questionnaire level export file.   
  
![](/images/713181.png)  
  
In the export file at the roster level, rows are generated according to
the number roster items defined in Designer. All files contain an Id and
Parent Id column. The Id column corresponds to row code of each item
listed in the roster. The Parent Id column is the survey case Id number.
The remaining columns in the file correspond to variable names of
questions in the roster.
