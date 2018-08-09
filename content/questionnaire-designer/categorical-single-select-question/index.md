+++
title = "Categorical: Single-Select Question"
keywords = ["single select","export","cascading","options","combo box","cascade","linked question","filtered options"]
date = 2016-06-20T18:06:44Z
lastmod = 2016-06-20T18:06:44Z
aliases = ["/customer/portal/articles/2470037-categorical-single-select-question","/customer/en/portal/articles/2470037-categorical-single-select-question","/customer/portal/articles/2470037","/customer/en/portal/articles/2470037"]

+++

Description
-----------

  
{{< imgproc "images/643199.png" Fit "800x600" />}}A **categorical: single-select** question expects
one answer to be selected from a list of possible answers (categories).
This list can either be defined before the interview or it can be
created during the interview. To define the categories beforehand, you
can add them [one at a time](#one), [copy and paste them from a
document](#copy), or [upload them from a tab-delimited
file](#combo%20box) in Questionnaire Designer.  
  
To create the categories during the interview, the categorical:
single-select question must be[linked](#linked) to a previous question
(**text**, **numeric**, **date**) in a roster or to a roster. For
example, some surveys ask about the respondent and expect the enumerator
to type the respondent’s name. However, instead of typing the
respondent’s name the enumerator can select it from a list containing
the names of the household members. To do this, the question “Which of
the household members is the respondent?” needs to be linked to a
previous question, such as “Name each household member”.  
  
  
If the categorical: single-select question is not linked, you have the
option of defining it as a [cascade question](#cascade). This means that
during the interview the list of categories can be filtered by the
answer given to a previous categorical: single-select (parent
question). It is common in surveys to find questions with a very long
list of possible answers that can be shortened by setting a certain
criteria to filter the categories. For example, in a national survey
knowing the province of the household can shorten the list of regions.
Therefore, the question “Region in which the household is located” can
be defined as a cascade question having the categorical: single-select
question “Province in which the household is located” as its parent
question.

  
**Default single-select question**  
  
{{< imgproc "images/644731.png" Fit "800x600" />}}  
  
**ingle-select question with a combo box**  
  
{{< imgproc "images/644734.png" Fit "800x600" />}}  
 

Creating a single-select question
---------------------------------

  
  
In Questionnaire Designer,

1.  Click on the Question Type box.
2.  Select Categorical: Single-select.  
    {{< imgproc "images/644818.png" Fit "800x600" />}}

  
  
You can add answer options one at a time or by copying and pasting them
from a document.  
  
 

### <span id="one"></span>To add categories one at a time:

 

1.  Click on the *Add Option* button to assign the number of categories
    necessary.  
    {{< imgproc "images/644821.png" Fit "800x600" />}}
2.  Add a code (positive integer value) which uniquely identifies each
    category
3.  Add the label corresponding to each code. The labels will be
    displayed to the enumerators  
    {{< imgproc "images/644824.png" Fit "800x600" />}}

  
  
  
 

### <span id="copy"></span>To copy and paste the categories from a document

1.  Click on *Show Strings* link.
2.  Paste the category titles and their corresponding codes (positive
    integer value) in the box. Note that the format accepted is the
    category title followed by one or more dots (“.”).  
    {{< imgproc "images/644827.png" Fit "800x600" />}}

  
  
  
 

How a single-select question appears on a tablet
------------------------------------------------

  
The enumerator selects one answer option from the list displayed.

  
{{< imgproc "images/644828.png" Fit "800x600" />}}  
  
  
  
 

Options
-------

 

### <span id="combo box"></span>Combo box

  
When there are a large number of categories, it can be tedious to enter
them. For example, this may occur when a question asks for the primary
occupation of a household member. To avoid entering each category one at
a time or copying them in a specific format, you can import the codes
(positive integer values) and labels of the categories from a
tab-delimited file.  
  
  
To import categories from a tab delimited file,

1.  Create the tab delimited file without headings and with the
    categories’ codes in the first column and their corresponding
    description in the second one.  
      
    {{< imgproc "images/644835.png" Fit "800x600" />}}
2.  Click on the *Combo box*. Once this box is checked, click on the
    *Upload new options* link.  
      
    {{< imgproc "images/644836.png" Fit "800x600" />}}
3.  In the pop-up window displayed, click on *Choose file* and select
    the tab-delimited file you had prepared.  
      
    {{< imgproc "images/644837.png" Fit "800x600" />}}
4.  Select *Upload* and confirm your selection with the *Apply*
    button.  
      
    {{< imgproc "images/644838.png" Fit "800x600" />}}
5.  Update the options click on the *reload* link.   
      
    {{< imgproc "images/644839.png" Fit "800x600" />}}

  
  
  
After importing the categories you can edit them by clicking on the
*Upload new options* link.  
  
  
{{< imgproc "images/644840.png" Fit "800x600" />}}  
  
  
On a tablet the enumerator has to:

1.  Tap on the question box.
2.  Start typing letters, so that a subset of categories that have been
    filtered by the typed letters is shown.
3.  Select the appropriate answer.  
      
    {{< imgproc "images/644841.png" Fit "800x600" />}}

  
  
 

### <span id="cascade"></span>Cascade combo box

  
  
  
The cascade option is useful when the list of categories is large and it
can be filtered by the answer given to a previous categorical one-answer
question. For example, a national survey asks for the province, the
region and the district. Therefore, the province can filter the
categories for region, and region can filter the categories for
district. To accomplish this task you need to define the question
responsible for filtering (parent question) and upload the categories
from a tab-delimited file.  
  
 

1.  Create a tab-delimited file without headings and with the
    categories’ codes and description in the first and second column
    respectively. The third column should contain the categories’ codes
    of the parent question.  
      
    {{< imgproc "images/644917.png" Fit "800x600" />}}
2.  Click on the *cascading combo box* and then define the question that
    will filter the categories (parent question).  
      
    {{< imgproc "images/644918.png" Fit "800x600" />}}
3.  To define the parent question, click on the *Select parent question*
    dropdown box and select the question from those listed.  
      
    {{< imgproc "images/644920.png" Fit "800x600" />}}
4.  Add the categories by clicking on the *Add options* link.  
      
    {{< imgproc "images/644923.png" Fit "800x600" />}}
5.  In the pop-up window displayed click on *Choose file* and select the
    tab-delimited file you have prepared.  
      
    {{< imgproc "images/644925.png" Fit "800x600" />}}
6.  Click on the *Upload* button and confirm your selection by clicking
    on the *Apply* button.  
      
    {{< imgproc "images/644926.png" Fit "800x600" />}}
7.  Update the categories click on the *reload* link.  
      
    {{< imgproc "images/644928.png" Fit "800x600" />}}

  
  
  
After importing the categories, you can edit them by clicking on
the*Upload new options*&lt; link.  
  
  
{{< imgproc "images/644930.png" Fit "800x600" />}}  
  
  
On a tablet the enumerator has to:

1.  Tap on the question text box.
2.  Starts typing letters, so that a subset of options first filtered by
    the parent question and then by the entered letters, is shown.
3.  Select the appropriate option.  
    {{< imgproc "images/644934.png" Fit "800x600" />}}

  
  
 

### <span id="linked"></span>Linked question

  
Categories can be created during the interview when the categorical:
single-select question is linked to another question or roster. The
categories created are the answers given to a previous question, or a
roster source question. The single-select question can be linked to a
question in a roster (text, numeric, or date), or to a roster. For
example, you can create categories when a question located in a roster
records the name of all the household members, or when a roster source
question asks for the list of all household members. The following
question can then ask the respondent to choose his/her name from the
list.  
  
  
To link a question to a previous question,

1.  Click on the *Is linked* box.
2.  Click on the *Bind to question from roster group* dropdown menu, and
    select the appropriate question or roster.  
      
    {{< imgproc "images/644994.png" Fit "800x600" />}}

  
  
  
On a tablet the linked question displays the list of categories an
enumerator can choose from.  
  
{{< imgproc "images/644998.png" Fit "800x600" />}}  
  
  
{{< imgproc "images/644999.png" Fit "800x600" />}}  
  
  
 

### Filtered answer options

  
You can define a filter to describe the conditions under which answer
options will be displayed to the interviewer via the Filter field for
single select categorical questions. Linked questions can also include a
filter.  
  
In food consumption modules, questionnaire designers can limit answer
options to those that make sense for each food item (e.g., weight units
for solids, volume units for liquids). In demographic modules, you can
filter a linked question that lists potential owners of the household’s
dwelling to the set of age relevant household members.  
  
The *Filter* field contains a condition that is evaluated against each
potential answer option. When the condition is true for a particular
answer option, that answer option is displayed. When the condition is
false (or yields an exception), that option is not displayed in
Interviewer. In other words, the feature functions like an enabling
condition for answer options, enabling only those answer options that
satisfy the filter condition.  
  
There are also two new keywords that are only available in the Filter
field. For non-linked questions, the keyword <span
style="font-family:courier new,courier,monospace;">@optioncode</span>
provides a way to refer to the answer options for the current
question.  
For linked questions, the keyword <span
style="font-family:courier new,courier,monospace;">@current</span>, used
as a variable prefix, allows you to differentiate between the value of a
variable for current roster row and that for all other rows in the
current roster. For example, one may filter down the list of potential
fathers to those members that are older than the current person (the
child) by writing: <span
style="font-family:courier new,courier,monospace;">age
@current.age</span>.  
  
  
{{< imgproc "images/659127.png" Fit "800x600" />}}  
  
To add a condition on the answer options of a categorical question,
define the filter in the *Filter* box.  
  
  
 

Export
------

  
  
Categorical questions are composed of codes (hidden from enumerators)
and labels (visible to enumerators). When data from a categorical
question is exported the code of the selected answer is saved as a
numeric variable in a tab-delimited file. The name of this variable is
the question’s *variable name* defined in the Questionnaire Designer.  
  
Category codes created prior to conducting the interview are those that
have been defined in the Questionnaire Designer. Categories that are
created during the interview are automatically given codes in a
sequential order, where 0 corresponds to the first category.  
   
As shown below, the first example refers to the question: “Area of
residence” where code 1 represents Urban and code 2 Rural.  
  
**Categorical: single-select**  
  
{{< imgproc "images/644969.png" Fit "800x600" />}}  
  
Categories defined in Questionnaire Designer  
  
{{< imgproc "images/644970.png" Fit "800x600" />}}  
  
Unanswered question exported in tab-delimited file  
  
{{< imgproc "images/644973.png" Fit "800x600" />}}  
  
Answered question exported in tab-delimited file  
  
{{< imgproc "images/644975.png" Fit "800x600" />}}  
  
The second example illustrates the data export of a linked categorical
one-answer question. The question: “Which of the household members is
the respondent?” is linked to the question: “Name each household
member”. Let’s imagine that the answer to the latter was: Ann, Paul,
Mary and Michael. The system automatically creates the following codes
in order: 0, 1, 2 and 3 for each name. When Ann is selected from the
list of names as the respondent, the system automatically assigns the
value 0 when exporting the data.  
  
Linked categorical: single-select question  
  
{{< imgproc "images/644995.png" Fit "800x600" />}}  
  
  
Answered roster source question  
  
{{< imgproc "images/644998.png" Fit "800x600" />}}  
  
The system assigns the codes: 0 to Ann, 1 to Paul, 2 to Mary and 3 to
Michael  
  
{{< imgproc "images/645002.png" Fit "800x600" />}}  
  
  
Unanswered linked question exported in a tab-delimited file  
  
{{< imgproc "images/645004.png" Fit "800x600" />}}  
  
  
Answered linked question exported in a tab-delimited file  
  
{{< imgproc "images/645003.png" Fit "800x600" />}}
