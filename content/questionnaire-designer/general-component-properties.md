+++
title = "General Component Properties"
keywords = ["variable names","variable labels","question texts","question types","interviewer instructions","conditions"]
date = 2016-06-17T00:26:32Z
lastmod = 2016-06-17T00:26:32Z
aliases = ["/customer/portal/articles/2467518-general-component-properties"]

+++

When you select a questionnaire component, you can see its details on
the right hand panel. Each component is defined by a set of properties.
Some features are common to all questionnaire components, and others are
defined for specific components.   
  
In this article you will learn how to define [variable
names](#variable%20name), [variable labels](#variable%20label),
[question texts](#question%20text), [question types](#question%20types),
[interviewer instructions](#instructions), and
[conditions](#conditions).   
   
 

<span id="variable name"></span>Variable name
---------------------------------------------

  
  
The *variable name* is the unique identifier of a component, which is
useful when exporting the data for analysis. It has to start with a
letter, but can also contain numbers and the underscore symbol. As it is
not needed during the interview, the variable name is not visible on the
tablet.  
  
![](/images/643705.png)  
  
  
 

<span id="variable label"></span>Variable label
-----------------------------------------------

  
  
The *variable label* is the description of the data captured by the
question and it will be associated to the variable name when exporting
the data to a statistical software package. If the variable label is not
entered, the system automatically exports the question text as its
label. As it is not needed during the interview, the variable label is
not visible on the tablet.  
  
![](/images/643707.png)  
  
  
 

<span id="question text"></span>Question text
---------------------------------------------

  
  
The *Question text* box contains the text that the enumerator will read
to the interviewee. Therefore, it is suggested to use regular language
when defining the text. For instance, *“How many people live in your
household?”* instead of *“People living in the HH“.*  
  
The text of the question can be interactive; this means that it can
change according to answers given in previous questions. There are two
ways to apply this feature.  
  
***First method***  
  
Use an answer given in any previous question in another question’s text.
To do this, include in the question’s text the variable name of a
previous question within percentage symbols.  
  
![](/images/643710.png)  
  
![](/images/643711.png)  
  
***Second method***  
  
Use an answer given to a previous question that triggers a roster in the
*question text*. To do this, include “rostertitle” or the roster
variable name within percentage symbols in the question text.  
  
  
![](/images/643713.png)  
  
  
 

<table>
<tbody>
<tr class="odd">
<td><img src="/images/643716.png" /></td>
<td style="text-align: center;"><img src="/images/643717.png" /></td>
</tr>
</tbody>
</table>

  
  
  
 

<span id="question types"></span>Question Types
-----------------------------------------------

  
  
The expected answer type determines the *question type*  to use. The
available question types are as follows:   
 

<table>
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
<td style="text-align: center;">A date in the Gregorian calendar.<br />
The format of the date corresponds with the tablet’s date settings.</td>
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

  
  
**To define the question type:**

1.  Click on the *question type *dropdown box.  
      
    ![](/images/643731.png)
2.  From the pop-up menu select the question type by clicking on it.  
      
    ![](/images/643734.png)

   
  
 

<span id="instructions"></span>Interviewer Instructions
-------------------------------------------------------

  
  
For each question, you can add instructions to be read by the enumerator
while performing the interview.   
  
To add interviewer instructions,

1.  Click on the *Add Interviewer instructions* link.  
      
      
    ![](/images/643756.png)

 

1.  Add the text in the field.   
      
    ![](/images/643759.png)​

  
On the tablet the instructions will be shown in blue below the question
text.   
  
  
![](/images/643765.png)  
  
  
  
  
  
  
The instructions specified can also be hidden until the interviewer
clicks on Instruction link to reveal the text.  To do this, check the
*Hide instruction* check box.   
  
  
![](/images/659128.png)  
  
  
 

<span id="conditions"></span>Conditions
---------------------------------------

  
In this section you will learn about enabling and validation conditions.
[Enabling conditions](#Enabling) allow you to enable or disable certain
questions based on answers an interviewee has given in previous
questions, while [validation conditions](#validation) evaluate whether
an answer given by an interviewee is acceptable.  
  
  
**<span id="Enabling"></span>Enabling Conditions**  
  
  
*Enabling conditions* are the Survey Solutions equivalents of skip
patterns in paper-based questionnaires. By using conditions you can
enable or disable certain questions based on the answers an interviewee
has given in previous questions. For this reason, at least two questions
are involved, let’s call them: the unleash question and the recipient
question.  
   
For example, if the template has the questions “Do you speak any foreign
language?” and “Which foreign language do you speak?”   
  
  
![](/images/643852.png)  
  
  
it does not make sense to ask the second question if the interviewee
does not speak a foreign language. Therefore, in this example the first
question is the unleash one and the second is the recipient one. If the
answer to the unleash question is “Yes”, the recipient question is
enabled. On the contrary if the answer is “No“, the recipient question
remains disabled.  
   
Conditions are written in C\# programming language, which is very easy
to learn. You simply have to connect a variable name with values or
another variable name using logical operators.  
   
For this example, the unleash question is a *categorical: Single-select*
question with variable name *foreign* and possible answers: 1-“*Yes*”
and 2-“*No*“

  
![](/images/643856.png)  
  
Write the logical expression in the *Enabling condition* text field of
the recipient question. The text box also autosuggests roster names and
variable names as you type syntax conditions and helps avoid confusion
with numerous standard C\# keywords.  
   
In the example the condition expression to enable the recipient question
is: foreign== 1  
  
For more information on how to write logical expressions, please see our
complete syntax guide.  
  
 

![](/images/643860.png)  
  
  
The question will appear greyed out if it is disabled. To hide the
recipient question if it is disabled, select the*Hide if disabled* check
box.  
  
  
![](/images/643870.png)  
  
  
The pictures below show how this example is displayed on the tablet.   
  
 

<table>
<tbody>
<tr class="odd">
<td style="text-align: center;"><img src="/images/643892.png" /></td>
<td style="text-align: center;"><img src="/images/643893.png" /></td>
</tr>
</tbody>
</table>

  
  
  
To indicate that a question includes an enablement condition an orange
dot will display next to the variable name on the section navigation
pane.   
  
![](/images/643900.png)  
  
  
  
  
**<span id="validation"></span>Validation Conditions**  
  
  
*Validation conditions* are created similarly to enabling conditions.
Instead of evaluating whether the question has to be displayed, it
determines whether the answer given by the interviewee is acceptable.
These can also be programmed as [validation
warnings](/questionnaire-designer/validation-warnings). The warnings are
rendered differently from errors (appear in orange color rather than
red) and not counted in the interview errors counter. They are also not
recorded in  paradata.  
  
You can have up to 10 validation conditions for each question.  
   
For instance, consider the question “How many employees does
%enterprise% have?” with *variable* name  “*num\_employee*“. If the
value 0 is not an acceptable answer, the validation condition to prevent
this answer would be:  
   
num\_employee &gt; 0  
   
or equivalently (using special variable *self,* which denotes the value
of the answer being validated):  
   
self &gt; 0  
   
For more information on how to write logical expressions, please see our
complete syntax guide.  
  
To add a validation condition,

1.  Click on the *Add New Validation Rule* link.   
      
    ![](/images/643911.png)
2.  Write the logical expression in the *Validation condition*
    field. Check the *Is warning* check box if the validation should be
    a warning. 
3.  Add an *Error/ warning message.* To add an error/warning message,
    write the text of the message in the *error /warning message* field.
    Here, you may also use text substitution to reference questions and
    user-defined or system-defined variables.  To do this, enclose the
    question or variable name with the percentage sign (%). The text
    defined here will be displayed on the tablet when the answer to the
    question is not validated by that validation condition.  
      
     

![](/images/871994.png)  
  
  
To indicate that a question includes a validation condition, a blue dot
will display next to the variable name on the section navigation pane.  
  
![](/images/643914.png)
