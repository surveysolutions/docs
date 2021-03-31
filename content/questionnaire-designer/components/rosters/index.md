+++
title = "Rosters"
keywords = ["roster","numeric"," list","fixed","multi select","yes/no multi select"]
date = 2016-06-21T22:39:42Z
lastmod = 2016-06-21T22:39:42Z
aliases = ["/customer/portal/articles/2472543-rosters","/customer/en/portal/articles/2472543-rosters","/customer/portal/articles/2472543","/customer/en/portal/articles/2472543","/questionnaire-designer/rosters"]

+++

Roster concept
---------------

A roster is a group of questions and subsections that are repeated for a
collection of similar items. The collection can be contained within that
roster (*Fixed roster*) or it can be derived from a different question in
the same questionnaire (numeric, list, or multi-select question), which is
called a *trigger-question*. The type of the trigger question defines the
type of the roster. When we say 'numeric roster' we mean in fact 'roster
triggered by a numeric question'.

Rosters have numerous applications in questionnaires and allow the designers to
focus on the content to be collected, rather than worry about how to program
the loops and store the acquired values. In household surveys, we commonly use
them for collecting the information about the household members, in agricultural
surveys - about various crops or livestock, etc.




Roster properties and limits
-----------------

When you are adding a roster, you can see its details in the right hand
panel. Rosters are defined by a set of properties. While some features
are common to all roster types, others are defined for a specific roster
source. For any roster we must define its type, and a trigger question if
the specified type implies that. We need to give the roster an identifier,
and possibly specify an enabling condition. Rosters do not have validations.

All rosters are subjected to limits in terms of rows (number of roster items)
and columns (number of questions). There are no *infinite* rosters. This is
because the database structure to hold the survey data must be inferred from
the roster at design time, still before the survey data starts to flow in.

Rosters (and especially nested rosters) may create large and complex data
structures. To prevent explosive growth of the database, the rosters are
constrained with various limits.

For most users it is important to understand the rectangular limits. We
think of a roster as a table that can contain up to 60 items and up to 500
questions. But when the roster contains only a handful of questions (up to 30),
and is not nested, and doesn't contain anything nested in it, then it may be
of a larger size (up to 200 rows). We call them '*simple*' rosters.
They are particularly useful for market price and food consumption
studies, which typically have more than a hundred rows on paper. Put simple, a
roster may be long and narrow (many items and few questions), or it can be
short and wide (few items and many questions). Survey Solutions will
automatically determine if it can accommodate your designed structure under any
of the types, and issue an error message if it overshoots these limits.

There are other limits on the number of items that can be contained in a nested
roster structure and in the questionnaire all together. Some limits are checked
dynamically during the runtime. See more on
[roster limits](/questionnaire-designer/limits/roster-limits/).
The exact numeric limits mentioned in this article may change in the future.
Double-check with the full list published here:
[Survey Solutions Limits](/questionnaire-designer/limits/survey-solutions-limits/).


Rosters are a convenient tool for questionnaire designers. But remember that it
is not practical to ask 10,000 questions in an interview, (even if you can
design a data structure for it). For large roster always investigate the
usability and response to such questionnaires.

When creating a roster make sure that you have defined the maximum
number of answers allowed in the trigger question. For multi-select specify
the max number of selections, for list specify max number of list items. There
is no option to specify the limit for a numeric question, but if the value
entered into the trigger question in runtime is too large, then Survey Solutions
will refuse to accept it. 

Roster types
------------

<details>
  <span id="numeric"></span>
  <summary>Numeric roster</summary>

  The roster source is a numeric question. For example, consider the
  following questions:  

  * *How many people live in the household?*
  * *How many partners does the enterprise have?*
  * *How many plots do you cultivate?*
  * *How many crops did you harvest on your plot?*

  The total number of household members, partners, plots or crops
  determines how many times the questions within the roster will be
  repeated.  
  The pictures below show an example of a numeric roster.  
  In Questionnaire Designer:

  {{< imgproc "images/646131.png" Fit "800x600" />}}  

  On a tablet:

  {{< imgproc "images/646132.png" Fit "800x600" />}}
</details>

<details>
  <span id="list"></span>
  <summary>List roster</summary>
  The roster source is a list question. For example, consider the following
  questions:

  * *List the people living in the household.*
  * *List the employees working in the enterprise.*
  * *List the plots you cultivate.*
  * *List the crops you harvested on your plot.*

  The total number of listed household members, employees, plots or crops
  determines how many times the questions within the roster will be
  repeated.
  The pictures below show an example of a list roster.
  In Questionnaire Designer:

  {{< imgproc "images/646139.png" Fit "800x600" />}}

  On a tablet:

  {{< imgproc "images/646169.png" Fit "800x600" />}}
</details>


<details>
  <span id="multi_select"></span>
  <summary>Multi-select roster</summary>

  The roster source question is a multi-select question. A multi-select question
  in yes/no mode may also be used as a roster source question. Below are a few
  examples of multi-select questions:   

  * *Was any of the food items below purchased in the last week? (in yes/no
  mode)*
  * *From the listed crops select those cultivated on your plot.*
  * *Which of the following durable goods are owned by your household?*

  The total number of selected food items, crops, or durables
  determines how many times the questions within the roster will be
  repeated. In the case of a multi-select question in yes/no mode the
  number of items marked as "yes" in the multi-select question will
  determine how many times the questions within the roster will be
  repeated.  

  The pictures below show an example of multi-select roster.  

  In Questionnaire Designer:  
  {{< imgproc "images/646176.png" Fit "800x600" />}}  
  On a tablet:  
  {{< imgproc "images/646177.png" Fit "800x600" />}}  
  The pictures below show an example of multi-select roster in yes/no
  mode.  
  In Questionnaire Designer:

  {{< imgproc "images/646190.png" Fit "800x600" />}}

  On a tablet:

  {{< imgproc "images/646192.png" Fit "800x600" />}}
</details>

<details>
  <span id="fixed set of items"></span>
  <summary>Fixed set of items roster</summary>

  In the case of a *fixed roster*, the subject ids are the fixed items
  defined in the Designer. To define them, click on the *Add Item* link
  to add each subject code and label. This is similar to defining
  categories for a categorical question.

  {{< imgproc "images/646179.png" Fit "800x600" />}}
</details>
 
