+++
title = "Categorical: Multi-Select Question"
keywords = ["multiselect","multi select","export","yes/no mode","ordered","answer order","maximum answer","linked","filtered option","export"]
date = 2016-06-21T16:53:47Z
lastmod = 2016-06-21T16:53:47Z
aliases = ["/customer/portal/articles/2471763-categorical-multi-select-question"]

+++

Description
-----------

  
![](/images/643203.png)A *categorical: multi-select* **** question
expects one or more answers to be selected from a list of possible
answers (categories). The list of possible answers can either be defined
before the interview or it can be created during the interview. If you
are defining the categories prior to the interview you can add the
categories in the design phase one at a time or by copying and pasting
them from a document. On the other hand, if you want to create the
categories during the interview you would need to link the question to a
previous question or roster, so that the categories of the former are
the answers given to the latter.  
  
This question type provides the option of preserving the order in which
the options are selected and/or defining the maximum number of options
that can be selected. For example, if you are conducting a survey to
improve the marketing of your product you are probably interested in
knowing which two colors are most preferred by your potential customer.
In this situation, you can ask “Select two colors you like” and have the
interviewee select only two colors from those listed.  
  
Next, consider a survey where the order to which respondents rank their
answers is important. For example, you would like to conduct a survey in
your organization in order to better understand human relationships
among your employees. You are interested to know the three most
important human values in the order of importance to which each employee
ranks them. Therefore, you would include in your survey the question “In
order of importance select the three most important values a person
should have” and define the question’s properties to be ordered with the
maximum number of selected answers to equal three.  
  
You can also link a *categorical: multi-select* **** question to a
previous roster or question (*text, numeric, or date*) in a roster.
Imagine a survey that collects information about the type of aid a
population group has received. For this study you are interested to know
which individual in the household has received some type of aid, in
order to see if there is a connection to certain information, such as
age and/or gender. As you foresee that more than one household member
may have received aid, you can create the question “Which of the
household members received any type of aid last month?” This question
will be a categorical multiple-answer question linked to a household
list roster.  
  
![](/images/645371.png)  
  
 

Creating a categorical: multi-select question
---------------------------------------------

  
In Questionnaire Designer

1.  Click on the Question Type box.
2.  Select Categorical: Multi-select from the list displayed.  
      
    ![](/images/645375.png)

  
  
  
**You can add the categories one at time or by copying and pasting them
from a document.**  
*Add categories one at a time*

1.  To add the categories one at a time, first click on the button *Add
    option* to assign the necessary number of categories for the
    possible answers.
2.  Add a code that uniquely identifies each possible answer. The codes
    must be positive integers.
3.  Add the label corresponding to the code. Each label defines a
    possible answer.  
      
    ![](/images/645390.png)

  
  
  
  
*Copy paste categories*

1.  Click on *Show Strings* link.  
      
    ![](/images/645400.png)  
2.   
3.  Paste the category titles and their corresponding codes in the box.
    The category title and code must be separated by one or more dots
    (“.").   
      
    ![](/images/645402.png)  
     

 

How a categorical: multi-select question appears on a tablet
------------------------------------------------------------

  
The enumerator selects one or more answer options by selecting each
checkbox.  
  
![](/images/645371.png)  
  
 

Options
-------

 

### Yes/no mode

  
***Categorical: multi-select*** questions can be displayed with yes/no
radio buttons for each item.  
Consider the following question as an example: “Does the enterprise sell
\[ITEM\]?”  
  
To display the yes/no radio buttons for each item, click on the *YES/NO
mode* checkbox.   
  
![](/images/645413.png)  
  
  
On a tablet, an enumerator selects one of two radio buttons denoting
“Yes” and “No” for each category listed.  
  
![](/images/645414.png)  
  
 

### Record answer order

  
***Categorical: multi-select*** questions have the option to order
answers according to a criterion, such as an order of importance or
preference.  
  
To have the answers sorted by a criterion, click on the *Record answer
order* box. Consider the following question as an example: “Select, in
order of importance, the three most important values a person should
have”.  
  
![](/images/645415.png)  
  
  
When the enumerator begins selecting options, sequential numbers
(starting from one) will be displayed to the right of each selected
category. In this example, the enumerator selected *Honesty* first,
followed by *Other*, and then *Gratitude* lastly.  
  
![](/images/645416.png)  
  
  
 

### Maximum number of answers

  
A ***categorical: multi-select*** question provides the option of
assigning a maximum number of valid answers.  
  
In order to limit the number of selected categories in an answer you can
add the maximum valid number in the *Max number of answers* field.  
  
![](/images/645417.png)  
  
  
The enumerator may select the same or less than the number of categories
as the defined maximum number of answers (in this example the maximum
number is 3). Once the maximum number of categories have been selected
the remaining will be disabled.   
  
![](/images/645418.png)  
  
 

### Linked

  
When the question is linked to a question *(text, numeric, or date)* or
roster the categories are created during the interview. The categories
created are the answers the interviewee has given in the previous
question or roster source question. For example, if a question asks for
the household members who visited a doctor during the past month, you
need to link this question to a previous one within the roster, which
asks the names of all the household members.  
 

1.  To link a question to another question, click on the *Is linked*box.
2.  Click on the *Bind to question from roster group* dropdown menu for
    a list of questions and rosters that can be linked.
3.  Select the appropriate question or roster.

  
  
![](/images/645436.png)  
  
 

### Filtered answer options

  
You can define a filter to describe the conditions under which answer
options will be displayed to the interviewer via the Filter field for
multi-select categorical questions. Linked questions can also include a
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
style="line-height: 20.8px; font-family: &quot;courier new&quot;, courier, monospace;">@optioncode</span>
provides a way to refer to the answer options for the current
question.  
For linked questions, the keyword <span
style="line-height: 20.8px; font-family: &quot;courier new&quot;, courier, monospace;">@current</span>
used as a variable prefix, allows you to differentiate between the value
of a variable for current roster row and that for all other rows in the
current roster. For example, one may filter down the list of potential
fathers to those members that are older than the current person (the
child) by writing:

    age > @current.age

  
![](/images/659127.png)  
  
To add a condition on the answer options of a categorical question,
define the filter in the *Filter* box.  
  
  
 

Export
------

  
Categorical questions are comprised of codes (hidden from enumerators)
and labels (visible to enumerators). Categorical multi-select questions
are exported into multiple columns in the output file. Each column name
is comprised of the original variable name specified in the Designer and
a suffix corresponding to a particular option code, for example, a
multi-select question on the presence of various assets in the household
may be exported as variables:  
<span
style="font-family:courier new,courier,monospace;">assets\_\_101, assets\_\_102, assets\_\_103,</span>  
where '*assets*' is the name of the question specified in Designer, and
'*101*', '*102*', '*103*' are the codes of items in this question.  
   
When a question has no limit on the number of answers that can be
selected (the enumerator can select all the categories), the system
creates the same number of variables as the categories. However, if the
question has defined a maximum number of valid answers (lower than the
total number of categories), the system creates the same number of
variables as the number defined in the *Max number of answers* field.  
  
**Linked**  
To understand how data from a linked *categorical: multi-select*
question is exported, we have to also consider the type of roster where
(triggered by a question or with fixed titles) the “link to” question is
housed. The reason for this is that the system creates the same number
of variables as the potential maximum number of records that the roster
can display. This means that the number defined in the *Max number of
answers* field is taken into account when recording the question’s
answer, but not when exporting the data.  
  
The examples below illustrate the variations of the categorical
multiple-answer question.  
  
The first example refers to the question: “Select all the assets the
household has” where codes from 1 to 6 represent: television, fridge,
washing machine, dishwasher, dryer and freezer respectively. The
enumerator can select from one to all of the categories listed without
preserving the order in which the categories were selected. This example
illustrates an example where the enumerator does not select all the
options.  
  
  
**Categorical multi-select question that is not linked**  
  
*![](/images/645390.png)*  
  
  
![](/images/645458.png)  
  
  
Unanswered question exported in tab-delimited file  
  
![](/images/645462.png)  
  
Answered question exported in tab-delimited file  
  
![](/images/645463.png)  
  
  
**Multi-select question in yes/no mode**  
  
The second example refers to the question: “Does the enterprise sell
\[ITEM\]?” where codes from 1 to 5 represent: cereals, roots and tubers,
vegetables, fruits, and meat and fish respectively. The enumerator
selects “yes” or “no” for each of the categories listed.   
  
![](/images/645475.png)  
  
  
![](/images/645478.png)  
  
  
Unanswered question exported in tab-delimited file  
  
![](/images/645480.png)  
  
  
Answered question exported in tab-delimited file  
  
![](/images/645483.png)  
  
  
The next example illustrates a categorical: multi-select question that
expects a maximum of three categories to be selected and ordered by a
criterion. In this example, the question is: “Select, in order of
importance, the three most important values a person should have” where
codes from 1 to 6 represents: honesty, sincerity, loyalty, gratitude,
respect and other respectively.  
  
  
![](/images/645496.png)  
  
  
  
![](/images/645497.png)  
  
  
  
Unanswered question exported in tab-delimited file  
  
![](/images/661517.png)  
  
  
  
Answered question exported in tab-delimited file  
  
![](/images/661518.png)  
  
Because of this question’s defined properties (the enumerator can select
a maximum of three categories. In this example, the maximum number of
permitted categories were selected.  
The enumerator selected Honesty first, then Other and finally Gratitude.
As the question is ordered in this example, the system saved their
respective codes in the variables following the order in which they were
selected.  
  
The next example illustrates the data export of a linked categorical:
multi-select question for which all the categories can be selected and
the order in which the categories are selected is not preserved. In this
example, the question: “Which of the household members received any type
of aid last month?” is linked to the question: “Name of the household
member”. So, let’s imagine that the answer to the latter was: Ann, Paul,
Mary and Michael. The system automatically creates the codes: 0,1,2 and
3 for each name respectively. If Ann, Mary and Michael have received
aid, the system exports the values 0, 2 and 3.  
  
![](/images/645517.png)  
  
  
**Previous question located within a roster**  
  
![](/images/645521.png)  
  
![](/images/645522.png)  
  
  
Unanswered question exported in tab-delimited file  
  
![](/images/661549.png)  
  
  
Answered question exported in tab-delimited file  
  
![](/images/661552.png)  
  
The last example shows the data exported from a linked categorical:
multi-select question that expected a maximum of two selected
categories and the order in which the categories were selected to have
been preserved. In this example, the question: “From the harvest of last
year, select the two crops that had the highest yield starting with the
lowest.” is linked to the question: “Name crops that you harvested last
year". Let’s imagine that the answer to the latter was: Maize, Wheat,
Cassava and Rice. The system automatically creates the codes: 0,1,2 and
3 for each crop respectively. If the crop with the highest yield was
Rice and the second one was Wheat, the system exports the values 3 and
1.  
  
![](/images/645534.png)  
  
  
**Previous question located within a roster**  
  
![](/images/661539.png)  
  
  
![](/images/645536.png)  
  
  
The system assigns the codes: 1 to Maize, 2 to Wheat, 3 to Cassava and 4
to Rice. The enumerator does not see this coding. However, they see the
numbers indicating the order in which each category was selected.  
  
  
Unanswered question exported in tab-delimited file  
  
![](/images/661537.png)  
  
  
Answered question exported in tab-delimited file  
  
![](/images/661538.png)  
  
  
  
Because it is a linked question the system creates the same number of
variables as the maximum records a roster can have. For this question,
the maximum number of options that the enumerator can select is two. In
this case the enumerator selected Rice first and Wheat second.
Accordingly, the system saved their codes (3 and 1 respectively) in the
first two variables, following the order in which the categories were
selected. The remaining 38 variables are empty.
