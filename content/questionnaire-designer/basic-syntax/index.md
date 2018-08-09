+++
title = "Basic Syntax"
keywords = ["syntax","designer"]
date = 2016-08-15T15:33:33Z
lastmod = 2016-08-15T15:33:33Z
aliases = ["/customer/portal/articles/2537143-basic-syntax","/customer/en/portal/articles/2537143-basic-syntax","/customer/portal/articles/2537143","/customer/en/portal/articles/2537143"]
draft = true
+++

<span style="font-size: 13px; line-height: 1.6;">The syntax used to add
enabling conditions, validation conditions, and filters in Survey
Solutions is very similar to the syntax of </span>[C\#
language](https://msdn.microsoft.com/en-us/library/kx37x362.aspx)<span
style="font-size: 13px; line-height: 1.6;">.  
This article will explain the basic principles of the syntax used in
Designer: </span>

-   [<span style="font-size: 13px; line-height: 1.6;">Multi-line
    code</span>](#multi)
-   [<span style="font-size: 13px; line-height: 1.6;">Case
    Sensitivity</span>](#case)
-   [Adding comments to your code](#comments)

 <span id="multi"></span>Multi-line code
----------------------------------------

  
Designer allows you to space out your code onto multiple lines to make
it easier to read. We recommend using this feature when your code is
longer and requires you to scroll left and right to read the full
code.  
  
***Example:***  
This code will be treated as if it was only *one line* of code:

    (@rowcode==1 && self.InList(1,4,5,6,7,25,23))        ||
    (@rowcode==2 && self.InList(1,2,4,25,5,6,7,23))     ||
    (@rowcode==3 && self.InList(1,25,4,6,7,18,23))

  <span id="case"></span>Case Sensitivity
----------------------------------------

  
<span style="line-height: 20.8px;">Variable names, look up table names,
and functions are case sensitive in Designer. Be careful to use the
correct case for variable names and functions to avoid errors! </span>  
  
***Example 1:***  
The variables **person\_age** and **person\_Age** are treated as
different variables. If your questionnaire contains a variable named
**person\_age**,  
  
then this will cause a compile error:

    person_Age > 5 

  
While this code will not:

    person_age> 5

  
  
***Example 2:***  
This will cause a compile error:

    question.inlist(a,b,c)

  
  
This will not cause a compile error:

    question.InList(a,b,c)

  
  
 

<span id="comments"></span>Comments
-----------------------------------

  
Designer allows you to add comment to your code. Comments will appear in
gray to help you differentiate it from the other parts of your
code. Adding comments to your code is good practice to document your
code to you and others understand it better. You can also use comments
to disable code that you do not want to be executed.

  
**One line comments:** **//** character marks the text after it as a
single-line comment.  
  
***Example:***

<span style="font-family:courier new,courier,monospace;"><span
style="font-size:12px;">{{< imgproc "images/673914.png" Fit "800x600" />}}</span></span>  
 

**Multiple line comments:**  
  
Comments that are longer than one line can be marked by **/\*** at the
beginning and **\*/** at the end. The text between those two markers is
the comment. This type of commenting is good for providing a more
detailed explanation of your code.  
  
***Example:***  
{{< imgproc "images/673945.png" Fit "800x600" />}}
