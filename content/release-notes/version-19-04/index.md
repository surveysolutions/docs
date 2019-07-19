+++
title = "Version 19.04"
keywords = ["19.04"]
date = 2019-04-04T09:09:09Z
draft=false
+++


## Web Interviewing.

Survey Solutions v19.04 brings a number of notable improvements and changes to the 
CAWI mode that can simplify how large CAWI and mixed mode surveys are administered.

1. Web-assignments -- the assignments are extended to hold the respondent's email
and access password;
2. Survey Solutions will interact with one of the several [bulk email service
providers](/headquarters/cawi/email-providers/) to send invitations via email directly to the respondents;
3. A system of reminders will notify the respondents that they haven't started or
haven't finished their web interviews.
4. Access to the web interviews is now password protected (optionally) providing
additional confidentiality protection to the respondent's answers.
5. The Survey Setup page indicates which surveys are currently accepting web responses.
6. As before a survey may accept responses from the internet (CAWI) and from the
tablets (CAPI) with aggregation into a single export data file.
7. As before you can create a landing page where all respondents will start
interviews and interviews may be finished in several sessions.


## Multiselect combobox.

Multiselect combobox is new compact representation of the multiselect question. It 
is most useful when the items are numerous (max 200) and lengthy and inconvenient 
to navigate. For example, the list of political parties, agricultural crops, or 
other similar items.

{{< imgScale src="images/multiselect-combobox-runtime.png"  class="sm-img">}}


The selection is done with the help of a combobox control. The interviewer first 
searches for a category, then posts it to the multiselect question. Each category 
may be added only once to the selection and will not appear in the search results 
if it is already posted as a selection. The syntax of expressions and export format 
is exactly the same as for a regular multiselect question (with checkboxes).

{{< imgScale src="images/multiselect-combobox-design.png"  class="md-img">}}


## Cascading with list of categories.
Cascading selection is a useful questionnaire element, which allows selecting an 
answer category from a large number of choices in a sequence of refinements, 
selecting from a smaller number of alternatives. It is typically used for selection 
of an occupation, industry, or another similar selection.

Prior to this release, elements of cascading selection were presented as combobox 
questions, which required the interviewer to start typing the selection before being 
able to pick it from the list. Now the selection can be made directly from the list, 
provided that the list of categories is no more than specified by the designer of the 
questionnaire (max 50).  If the number of choices happens to be more than the 
specified threshold, the control automatically falls back to the old behavior and is 
presented as a combobox.

In other words, the new representation of the cascading question shows lists of items 
at each level of cascading as a series of single choice questions.

New behavior allows more streamlined and intuitive input, especially for the cases 
where the choices at every step are few, such as moving from 1-digit to 2-digit to 
3-digit to 4-digit industry classifications, with a choice from no more than 10 
alternatives at every step of the cascade.


## Other notable changes

- In exported data files the date and time will be written exactly as the interviewer
has seen it when the timestamp question was answered. This has been frequently
requested as more intuitive format, rather than the earlier export with adjustment
into a single time zone.

- In exported data files the numbering of items in rosters triggered by numeric 
questions is starting from zero. For example, if you have a roster <I>employees</I>
triggered by a numeric question <I>NumEmployees</I>, it will contain a numeric
<I>employees__id</I> variable with the values 0,1,2,... This is consistent with how
Survey Solutions was recording this information for a long time, though recent 
versions started numbering with 1 for such cases. We have restored the original 
behavior. The linked questions will contain exactly the ID value of the selected 
item, regardless what the base for numbering is.

- The status duration report is now available to the supervisors, not just the 
HQ users. 

- Some of the Designer compilation error messages are now more verbose about the 
exact limit and the current value, for example the estimation of total number of 
roster items in the questionnaire.

- Thanks to our Uruguayan user <I>Ms. Alicia Ortiz Perez</I> we've managed to improve the
reliability of the data export procedures in cases of local server installations 
with certain regional settings. Thank you for providing the helpful inputs into 
this investigation!



<FONT color="maroon"><B>

(!) Version 19.04 is the <U>last</U> version of Survey Solutions that will be 
compatible with Android OS prior to version 5.0. <BR>

Please keep this in mind when planning new surveys and when purchasing tablets
for your upcoming surveys.

Current users should either update their devices to OS Android 5.0 or migrate
their Interviewer App installations to the new devices with Android 5.0+.

</B></FONT>