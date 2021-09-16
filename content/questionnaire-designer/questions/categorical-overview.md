+++
title = "Overview: Categorical question types"
keywords = [""]
date = 2021-09-13T01:01:01Z
lastmod = 2021-09-13T01:01:01Z
+++


<TABLE class="table table-striped table-hover">

<TR>
<TH colspan=5><CENTER>Question type/configuration</CENTER></TH>
<TH rowspan=2><CENTER>Use</CENTER></TH>

<TR>
  <TH>Selection</TH>
  <TH>Presentation</TH>
  <TH>Linked</TH>
  <TH>Ordered</TH>
  <TH>Cascading</TH>
</TR>

<TR>
  <TD colspan=6>Single</TD>
</TR>

<TR>
  <TD>Single</TD>
  <TD>radio-buttons</TD>
  <TD></TD>
  <TD bgcolor="gray"></TD>
  <TD></TD>
  <TD>To select from a small number of categories, such  as <I>Yes/No/Don’t know</I>, or <I>Urban/Rural</I>.</TD>
</TR>


<TR>
  <TD>Single</TD>
  <TD>combobox</TD>
  <TD></TD>
  <TD bgcolor="gray"></TD>
  <TD></TD>
  <TD>To select from a large number of categories, such as favorite dish, or name of the village where the person was born.</TD>
</TR>

<TR>
  <TD>Single</TD>
  <TD>radio-buttons</TD>
  <TD>linked</TD>
  <TD bgcolor="gray"></TD>
  <TD></TD>
  <TD>To select one of the values listed earlier, such as "<I>Who is the head of the household?</I>"</TD>
</TR>

<TR>
  <TD>Single</TD>
  <TD>combobox</TD>
  <TD>linked</TD>
  <TD bgcolor="gray"></TD>
  <TD></TD>
  <TD>NOT IMPLEMENTED</TD>
</TR>

<TR>
  <TD>Single</TD>
  <TD>radio-buttons</TD>
  <TD></TD>
  <TD bgcolor="gray"></TD>
  <TD>cascading</TD>
  <TD>To create cascading selections (implement a hierarchical choice), such as select a province, then select a district within that province, then a locality within that district. (when each level has a small number of choices given the earlier made selections)</TD>
</TR>

<TR>
  <TD>Single</TD>
  <TD>combobox</TD>
  <TD></TD>
  <TD bgcolor="gray"></TD>
  <TD>cascading</TD>
  <TD>To create cascading selections (implement a hierarchical choice), such as select a province, then select a district within that province, then a locality within that district. (when some levels may have a large number of choices given the earlier made selections)</TD>
</TR>

<TR>
  <TD colspan=6>Multiple</TD>
</TR>

<TR>
  <TD>Multiple</TD>
  <TD>checkboxes</TD>
  <TD></TD>
  <TD></TD>
  <TD bgcolor="gray"></TD>
  <TD>To capture spontaneous answers, such as "<I>In which days of the week do you typically work?</I>" (we expect the respondent to know the days of the week: <I>Monday, Tuesday,...,</I> and the interviewer doesn’t usually have to read the options)</TD>
</TR>

<TR>
  <TD>Multiple</TD>
  <TD>yes/no buttons</TD>
  <TD></TD>
  <TD></TD>
  <TD bgcolor="gray"></TD>
  <TD>To capture answers where the list of items must be read and status of each item established, such as "<I>Tell me please which durable assets do you own?</I>" (we do not expect that the respondent clearly knows what we consider a 'durable asset', hence it is better to read-out: <I>a refrigerator, a microwave, a dishwasher,...</I>)</TD>
</TR>

<TR>
  <TD>Multiple</TD>
  <TD>combobox</TD>
  <TD></TD>
  <TD></TD>
  <TD bgcolor="gray"></TD>
  <TD>To select multiple items from a large number of selections, such as for example: "<I>Which crops do you cultivate at your plot?</I>" (the universe of possible values is large, but the number of actual selections will be small, though there can be more than one crop).</TD>
</TR>

<TR>
  <TD>Multiple</TD>
  <TD>checkboxes</TD>
  <TD>linked</TD>
  <TD></TD>
  <TD bgcolor="gray"></TD>
  <TD>To capture multiple selections of the items from an earlier compiled list, such as "<I>Tell me please which members of the household attend any school currently?</I>" (we choose from the list of the household members entered earlier)</TD>
</TR>

<TR>
  <TD>Multiple</TD>
  <TD>yes/no buttons</TD>
  <TD>linked</TD>
  <TD></TD>
  <TD bgcolor="gray"></TD>
  <TD>NOT IMPLEMENTED</TD>
</TR>

<TR>
  <TD>Multiple</TD>
  <TD>combobox</TD>
  <TD>linked</TD>
  <TD></TD>
  <TD bgcolor="gray"></TD>
  <TD>NOT IMPLEMENTED</TD>
</TR>

<TR>
  <TD>Multiple</TD>
  <TD>checkboxes</TD>
  <TD></TD>
  <TD>ordered</TD>
  <TD bgcolor="gray"></TD>
  <TD>To capture spontaneous answers, such as in questions like "<I>In which months do you make most of your profits? Name the months in order of profitability starting from the most profitable first.</I>" (we expect the respondent to know the months of the year: <I>January, February,...</I>)</TD>
</TR>

<TR>
  <TD>Multiple</TD>
  <TD>yes/no buttons</TD>
  <TD></TD>
  <TD>ordered</TD>
  <TD bgcolor="gray"></TD>
  <TD>

<P>(Rare)</P>  

<P>NB: Only the positive selections are numbered as choices. Negative selections are not numbered and it is not evident from the answer in which sequence the negative answers were given in relation to the positive ones.</P>

<P>To capture answers where the list of items must be read and both status and importance of each item established, such as "<I>Tell me please which sources of water do you use? Indicate the most important sources of water first!</I>" (can be used in CAWI surveys where the respondent will see all choices.)</P>
</TD>
</TR>


<TR>
  <TD>Multiple</TD>
  <TD>combobox</TD>
  <TD></TD>
  <TD>ordered</TD>
  <TD bgcolor="gray"></TD>
  <TD>NOT IMPLEMENTED  
<BR><BR>
  (NB: multiple-select combobox records answers in order of selection regardless of whether the 'ordered' option has been specified or not)</TD>
</TR>

<TR>
  <TD>Multiple</TD>
  <TD>checkboxes</TD>
  <TD>linked</TD>
  <TD>ordered</TD>
  <TD bgcolor="gray"></TD>
  <TD>To capture multiple selections of the items from an earlier compiled list in order of some of their attribute, such as "<I>Tell me please which of the products you produce are profitable? (please, start from the most profitable first)</I>"
</TD>
</TR>

<TR>
  <TD>Multiple</TD>
  <TD>yes/no buttons</TD>
  <TD>linked</TD>
  <TD>ordered</TD>
  <TD bgcolor="gray"></TD>
  <TD>NOT IMPLEMENTED</TD>
</TR>

<TR>
  <TD>Multiple</TD>
  <TD>combobox</TD>
  <TD>linked</TD>
  <TD>ordered</TD>
  <TD bgcolor="gray"></TD>
  <TD>NOT IMPLEMENTED</TD>
</TR>

</TABLE>

### Please note:

- All categories in categorical questions must have distinct numeric integer codes (may be negative or positive or include 0).

- Any of the above-mentioned question variants may involve a filter imposed on the categories.

- Any of the non-linked variants of the questions may utilize either the categories specified directly in the question, or reusable categories defined at the questionnaire level.

- All multiselect questions may have a constant limit on the number of selections.

- Ordered multiple select question types put an extra burden on the respondent to mentally grasp all possible choices and sort them in order of some attribute (such as cost, frequency of use, date of purchase, etc).
