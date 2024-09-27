+++
title = "Questionnaire Elements"
keywords = ["sections","sub-section","roster","question types","variables","static-text","building questionnaire"]
date = 2016-06-16T17:27:48Z
lastmod = 2024-09-25T00:00:00Z
aliases = ["/customer/portal/articles/2467041-questionnaire-components-","/customer/en/portal/articles/2467041-questionnaire-components-","/customer/portal/articles/2467041","/customer/en/portal/articles/2467041","/questionnaire-designer/questionnaire-components-"]

+++
Any questionnaire created with the Survey Solutions Designer tool consists of
two types of elements: sequenced and not-sequenced.

- ***Sequenced elements*** are specified in sequence, and their precedence
ultimately determines the order of the questions asked in the survey. They are:
[Sections](#section),
[Sub-sections](#subsection), 
[Roster](#rosters),
[Question](#questions),
[Static Text](#static), and
[Calculated Variables](/questionnaire-designer/components/variables).  

- ***Not-sequenced elements*** are questionnaire elements that are included in
the questionnaire, but their placement doesn't affect the flow of the questions.
They are included as attachments, and referred by name, such as, for example,
lookup tables. They are discussed
separately, see [Panel of Advanced Instruments](https://docs.mysurvey.solutions/questionnaire-designer/toolbar/panel-of-advanced-instruments/).

Any questionnaire consists of a number of ***group*** elements:

- ***section*** - group of the top level of nesting;
- ***sub-section*** - group nested into some other group, which is not repeated;
- ***roster*** - group, nested into some other group, which repeats its content, see [rosters](/questionnaire-designer/rosters). Rosters that are included into other rosters are called ***Nested rosters***.

A ***cover page*** is a special section that is used for case identification purposes.
It is always the first in the sequence of questionnaire sections. See [Special Section: Cover Page](/questionnaire-designer/components/special-section-cover/).

The following elements are not groups and may not include other elements:

- ***question*** - question defined by its [type](/questionnaire-designer/components/question-type) and [properties](/questionnaire-designer/components/question-properties/);
- ***static text*** - informational text included into the questionnaire, see [static text](/questionnaire-designer/static-text);
- ***calculated variable*** - a named and typed calculatable expression, see [variables](/questionnaire-designer/components/variables).

Groups may contain other elements, as permitted according to the table shown
below.




<TABLE class="table table-striped table-bordered table-hover">

<TR>
  <TH rowspan=2 style="text-align:center">Group</TH>
  <TH colspan=7 style="text-align:center">Element</TH>
</TR>

<TR style="text-align:center">
  <TH>Questionnaire</TH>
  <TH>Section</TH>
  <TH>Sub-section</TH>
  <TH>Roster</TH>
  <TH>Question</TH>
  <TH>Static text</TH>
  <TH>Calculated variable</TH>
</TR>

<TR style="text-align:center">
  <TH>Questionnaire</TH>
  <TD><FONT color="red">N</FONT></TD>
  <TD>M</TD>
  <TD><FONT color="red">N</FONT></TD>
  <TD><FONT color="red">N</FONT></TD>
  <TD><FONT color="red">N</FONT></TD>
  <TD><FONT color="red">N</FONT></TD>
  <TD><FONT color="red">N</FONT></TD>
</TR>

<TR style="text-align:center">
  <TH>Cover page section</TH>
  <TD><FONT color="red">N</FONT></TD>
  <TD><FONT color="red">N</FONT></TD>
  <TD><FONT color="red">N</FONT></TD>
  <TD><FONT color="red">N</FONT></TD>
  <TD><FONT color="green">N</FONT></TD>
  <TD><FONT color="green">N</FONT></TD>
  <TD><FONT color="green">N</FONT></TD>
</TR>

<TR style="text-align:center">
  <TH>Section</TH>
  <TD><FONT color="red">N</FONT></TD>
  <TD><FONT color="red">N</FONT></TD>
  <TD><FONT color="green">N</FONT></TD>
  <TD><FONT color="green">N</FONT></TD>
  <TD><FONT color="green">N</FONT></TD>
  <TD><FONT color="green">N</FONT></TD>
  <TD><FONT color="green">N</FONT></TD>
</TR>

<TR style="text-align:center">
  <TH>Sub-section</TH>
  <TD><FONT color="red">N</FONT></TD>
  <TD><FONT color="red">N</FONT></TD>
  <TD><FONT color="green">N</FONT></TD>
  <TD><FONT color="green">N</FONT></TD>
  <TD><FONT color="green">N</FONT></TD>
  <TD><FONT color="green">N</FONT></TD>
  <TD><FONT color="green">N</FONT></TD>
</TR>

<TR style="text-align:center">
  <TH>Roster</TH>
  <TD><FONT color="red">N</FONT></TD>
  <TD><FONT color="red">N</FONT></TD>
  <TD><FONT color="green">N</FONT></TD>
  <TD><FONT color="green">N</FONT></TD>
  <TD><FONT color="green">N</FONT></TD>
  <TD><FONT color="green">N</FONT></TD>
  <TD><FONT color="green">N</FONT></TD>
</TR>

</TABLE>


**Legend:**

<TABLE>
  <TR><TD width=10%></TD><TH><FONT color="green"> Y </FONT></TH><TD> = Yes, group may include elements of this kind</TD></TR>
  <TR><TD></TD><TH><FONT color="red"> N </FONT></TH><TD> = No, group may not include elements of this kind</TD></TR>
  <TR><TD></TD><TH> M </TH><TD> = The group must include at least one element of this kind</TD></TR>
</TABLE>
<BR>

**Other restrictions:**
- level of roster nesting is [limited](/questionnaire-designer/limits/survey-solutions-limits/);
- total level of nesting or rosters and sub-sections is [limited](/questionnaire-designer/limits/survey-solutions-limits/);
- the set of question types that can be included in the cover page is [limited](/questionnaire-designer/limits/survey-solutions-limits/);
- some display modes of rosters impose additional limitations on contents, see e.g. [Tabular presentation of rosters](/questionnaire-designer/components/table-rosters);
- number of questions that can be included into a group is [limited](/questionnaire-designer/limits/survey-solutions-limits/).


#### Operations with Questionnaire Elements

**Adding Elements to a Questionnaire**

We use the context menu or the buttons shown in the questions panel of the
Designer (bottom menu) to add all sequenced elements, except sections.

The sections can be added by accessing the `Table of contents` tool in the
[Panel of Advanced Instruments](/questionnaire-designer/toolbar/panel-of-advanced-instruments/).

**Copying and Pasting Elements of the Questionnaire**
One can copy and paste the sequenced elements of the questionnaire by using the
corresponding items in the context menu:
- right-click the element and select `Copy`;
- right-click an existing element and select `Paste after`, or select `Paste`
in the bottom menu if no element exists in this section yet.

**Deleting Elements of the Questionnaire**
Select the element you want to delete and click the `DELETE` link at the
bottom-right corner. Or select the element by right-clicking on it and select
`DELETE` from the context menu that appears.

**Ordering Elements in the Questionnaire**
To change the position of a questionnaire element relative to other elements one
can drag it and drop to the new position (within a section), or if the element
needs to be moved to a different section, then the element must be selected (by
left-clicking it) and moved to a different section by clicking `MOVE TO` link
at the bottom-right corner.
