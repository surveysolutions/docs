+++
title = "Questionnaire Components "
keywords = ["sections","sub-section","roster","question types","variables","static-text","building questionnaire"]
date = 2016-06-16T17:27:48Z
lastmod = 2016-06-16T17:27:48Z
aliases = ["/customer/portal/articles/2467041-questionnaire-components-"]

+++

Sections
--------

  
Any questionnaire created with this designer tool consists of sections
and must have at least one section. Every section can in turn contain
one or more: [Sub-sections](#subsection), [Question](#questions),
[Roster](#rosters), [Static Text](#static), and
[Variables](#variables).  
   
 

<span id="subsections"></span>Sub-sections
------------------------------------------

  
Subsections can contain one or more static-texts, questions, other
sub-sections and rosters. They are used to group a set of questions
related to a specific topic. For instance in household surveys a
subsection can be used to group the questions related to the household’s
characteristics. The main difference between subsections and rosters is
that the questions within a sub-section are only asked once in an
interview.  
   
 

<span id="questions"></span>Questions
-------------------------------------

  
You can add a question at the section level (not included in any
sub-section or roster), within sub-sections or rosters, or after any
question in the questionnaire. The available question types are
displayed in the table below.   
 

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr class="header">
<th style="text-align: center;"><strong>Type of question</strong></th>
<th style="text-align: center;"><strong>Icon</strong></th>
<th style="text-align: center;"><strong>Data captured</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td style="text-align: center;"><a href="/questionnaire-designer/text-question">Text</a></td>
<td style="text-align: center;"><img src="/images/643148.png" /></td>
<td style="text-align: center;">Alphanumeric characters (A-Z, a-z, 0-9), basic punctuation symbols and space.</td>
</tr>
<tr class="even">
<td style="text-align: center;"><a href="/questionnaire-designer/numeric-question">Numeric</a></td>
<td style="text-align: center;"><img src="/images/643179.png" /></td>
<td style="text-align: center;">Numeric characters (0-9). Integer or Real numbers. </td>
</tr>
<tr class="odd">
<td style="text-align: center;"><a href="/questionnaire-designer/date-question">Date</a></td>
<td style="text-align: center;"><img src="/images/643186.png" /></td>
<td style="text-align: center;"><div>
<strong> </strong>A date in the Gregorian calendar.<br />
The format of the date corresponds with the tablet’s date settings . 
</div></td>
</tr>
<tr class="even">
<td style="text-align: center;"><a href="/questionnaire-designer/categorical-single-select-question">Categorical: Single-select </a></td>
<td style="text-align: center;"><img src="/images/643199.png" /></td>
<td style="text-align: center;">One option from a list of answer options which are mutually exclusive.<br />
 </td>
</tr>
<tr class="odd">
<td style="text-align: center;"><a href="/questionnaire-designer/categorical-multi-select-question">Categorical: Multi-select</a> <br />
 </td>
<td style="text-align: center;"><img src="/images/643203.png" /></td>
<td style="text-align: center;">One or more options from a list of answer options. <br />
 </td>
</tr>
<tr class="even">
<td style="text-align: center;"><a href="/questionnaire-designer/list-question">List</a></td>
<td style="text-align: center;"><img src="/images/643209.png" /></td>
<td style="text-align: center;">An open list composed of alphanumeric characters (A-Z, a-z, 0-9), basic punctuation symbols and space.</td>
</tr>
<tr class="odd">
<td style="text-align: center;"><a href="/questionnaire-designer/gps-question">GPS</a></td>
<td style="text-align: center;"><img src="/images/643211.png" /></td>
<td style="text-align: center;">Set of geographic coordinates (latitude, longitude, accuracy, altitude), which identify the location of the tablet.</td>
</tr>
<tr class="even">
<td style="text-align: center;"><a href="/questionnaire-designer/barcode-question">Barcode</a></td>
<td style="text-align: center;"><img src="/images/643214.png" /></td>
<td style="text-align: center;">Optical machine-readable representation of data relating to an object.</td>
</tr>
<tr class="odd">
<td style="text-align: center;"><a href="/questionnaire-designer/picture-question">Picture</a> </td>
<td style="text-align: center;"><img src="/images/643216.png" /></td>
<td style="text-align: center;">Binary files.</td>
</tr>
<tr class="even">
<td style="text-align: center;"><a href="/questionnaire-designer/static-text">Static-text</a> </td>
<td style="text-align: center;"><img src="/images/643217.png" /></td>
<td style="text-align: center;">Does not capture data. </td>
</tr>
</tbody>
</table>

 

<a href="/questionnaire-designer/rosters" id="rosters">Rosters</a>
------------------------------------------------------------------

  
Sometimes it is necessary to repeat the same set of questions multiple
times. *Rosters* allow you to create an auto-propagated group of
questions. In other words, roster groups are used to display the same
set of questions several times.  
   
For example, a roster group can be implemented in national household or
agricultural surveys. In the former the enumerator collects data on
name, age, gender, etc. per household member. In the latter the
enumerator collects data on crop, quantity harvested, unit of the
quantity, etc. per plot of land.  
   
As all the questions within the group will be asked for each individual
or item, it is necessary to have an individual or item id (titles of the
rows) that identifies each set of questions. These titles can be created
automatically (during the interview) or manually (during the creation of
the questionnaire). The latter are also called fixed set of items.  
   
Survey Solutions has 4 roster sources. Three of them depend on the
question type linked to the roster : *numeric question*, *list
question* and *multi-select question*. No question is linked to the
fourth roster source: *fixed set of items*.  
  
 

<a href="/questionnaire-designer/static-text" id="static">Static-text</a>
-------------------------------------------------------------------------

  
Static-texts are used to convey information to the enumerator or the
interviewee. An example of the former can be: “When listing the
employees, begin with the director and then continue with the names of
the other employees in order of responsibility, from highest to lowest.”
An example for the latter can be: “All information collected in this
questionnaire is confidential and will be used for statistical purposes
only.  
 

  <a href="/questionnaire-designer/variables" id="variables">Variables</a>
-------------------------------------------------------------------------

  
Variables are computable expressions, which can be added to a
questionnaire for convenience when operating with large and/or complex
expressions. Variables are a powerful addition to the functionality of
Survey Solutions. Variables can be used to simplify and improve the
validation and enabling conditions. Content of variables can be used in
the question text or in static text to provide more informative, dynamic
questions or static text.
