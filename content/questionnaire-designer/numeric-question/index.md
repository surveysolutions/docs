+++
title = "Numeric Question"
keywords = ["numeric","integer","real","seperator","export"]
date = 2016-06-17T23:22:09Z
lastmod = 2016-06-17T23:22:09Z
aliases = ["/customer/portal/articles/2468719-numeric-question"]

+++

Description
-----------

  
A **num**{{< imgproc "images/643179.png" Fit "800x600" />}}**eric** question expects an answer to
contain numeric characters (0-9). The answer can be an
[integer](#integer) or a [real](#decimal) number. You also have the
option of assigning the number of [decimals places](#max%20decimal) to
be accepted in the answer or formatting the answer to language specific
[thousands and decimal separator](#separator). By default a numeric
question expects a integer number answer. In addition, numeric questions
can be extended with [special
values](/questionnaire-designer/special-values-for-numeric-questions) as
categorical selections.  
  
The picture below displays a numeric integer question on a tablet.  
  
{{< imgproc "images/644167.png" Fit "800x600" />}}  
  
  
The picture below displays a numeric real number question on a
tablet.   
  
{{< imgproc "images/644168.png" Fit "800x600" />}}  
  
  
The picture below displays a numeric question with language specific
thousand and decimal separator enabled on a tablet.  
  
{{< imgproc "images/644169.png" Fit "800x600" />}}  
  
  
 

Creating a numeric question
---------------------------

  
  
In Questionnaire Designer,

1.  Click on the Question Type box.

2.  Select Numeric.

{{< imgproc "images/644236.png" Fit "800x600" />}}  
  
 

How a numeric question appears on a tablet
------------------------------------------

  
To type the answer, the enumerator has to tap on the question box for
the keyboard to display. The keyboard automatically shows
numeric characters. Note that even if the enumerator can navigate
through the keyboard showing alpha characters, they can only include
numeric characters in the answer.  
 

{{< imgproc "images/644237.png" Fit "800x600" />}}

  
  
  
 

Options
-------

  
  
  
<span id="integer"></span>

### Integer

  
  
To create a numeric integer question, click on the *Integer* checkbox.  
A question with the Integer option selected, accepts a maximum of 10
digits in the answer. If you expect an answer higher than 9999999999
(e.g. id codes) the question should not expect an integer value but a
real value.  
  
{{< imgproc "images/644238.png" Fit "800x600" />}}  
  
On a tablet the enumerator cannot enter values with decimal places.  
  
  
{{< imgproc "images/644239.png" Fit "800x600" />}}  
  
  
  
<span id="decimal"></span>

### Decimal

  
  
Since numeric questions are by default Integer, enable decimal answers
by unchecking the Integer checkbox. By default when a question is
defined as real, the *Number of decimal places* field is blank. This
means that the maximum number of decimal places assigned by the system
is 28. You may want the answer entered to have a specific number of
decimal places, such as a question asking for the temperature up to one
decimal point.  
  
<span id="max decimal"></span>To define the maximum number of decimals
accepted by the question, add the corresponding number in the *Number of
decimal places* field.  
  
{{< imgproc "images/644240.png" Fit "800x600" />}}  
  
  
On a tablet the answer can be an integer or a real number with less or
an equal number of decimals than the defined maximum.  
  
  
{{< imgproc "images/644241.png" Fit "800x600" />}}  
  
  
<span id="separator"></span>

### Thousand and Decimal Separator

Answers entered in numeric questions can be formatted to language
specific thousands and decimal separator. To enable this feature, click
on the *Use 1000 separator* check box.   
  
  
{{< imgproc "images/644242.png" Fit "800x600" />}}

  
On a tablet, the answer entered will display a thousand separator
specific to the language of the device.

{{< imgproc "images/644243.png" Fit "800x600" />}}

### [Special Values ](/questionnaire-designer/special-values-for-numeric-questions)

Either a value can be entered, or one of the provided answer options may
be selected.  Special values are stored as codes and are exported in the
same numeric variable, with labels defined in file formats that support
value labels.  
  
To enable this feature, check the special values check box and enter the
answer option(s) and codes.   
  
{{< imgproc "images/871996.png" Fit "800x600" />}}  
  
{{< imgproc "images/871997.png" Fit "800x600" />}}  
 

Export
------

  
The answer given to a numeric question is exported in a numeric
variable. The name of this variable is the question’s *variable name*
defined in the Questionnaire Designer.  
   
This question type can expect an integer or a real number. The
example below illustrates the export for a real number question.

 

### Numeric real number question

  
{{< imgproc "images/644244.png" Fit "800x600" />}}  
  
  
Unanswered question exported in tab-delimited file  
{{< imgproc "images/644245.png" Fit "800x600" />}}  
  
  
Answered question exported in tab-delimited file  
{{< imgproc "images/644246.png" Fit "800x600" />}}
