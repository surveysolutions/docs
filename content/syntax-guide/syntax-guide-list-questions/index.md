+++
title = "Syntax Guide: List questions"
keywords = ["syntax","list"]
date = 2016-11-28T19:30:19Z
lastmod = 2016-11-28T19:30:19Z
aliases = ["/customer/portal/articles/2658533-syntax-guide-list-questions","/customer/en/portal/articles/2658533-syntax-guide-list-questions","/customer/portal/articles/2658533","/customer/en/portal/articles/2658533"]

+++

List questions are recorded as Tuple&lt;decimal, string&gt; [data
type](/syntax-guide/data-types).  
  
Each item in a list question response consists of two elements. One is
the item number, and the other is the accompanying text. For example, in
the list question displayed. “Paul Smith” is the text element (Item2)
and “2” is the number(Item1).  
  
<span style="text-align: center;">List of household members =</span>  
<span style="text-align: center;">\[</span>  
<span style="text-align: center;">{1, “Mary Smith”}</span>  
<span style="text-align: center;">{2, “Paul Smith”}</span>  
<span style="text-align: center;">{3, “Richard Smith”}</span>  
<span style="text-align: center;">\]</span>  
<span style="text-align: center;"> </span>  
{{< imgproc "images/644260.png" Fit "800x600" />}}  
  
  
 The following functions can be used in conditions for list questions:

-   [Length](#length).*Checks the number of items listed​*
-   [Item2 ](#item2). *Refers to the text element of an item listed in a
    list question*

 

<span id="length"></span>Length
-------------------------------

### Description

 Checks the number of items listed.   
 

### Syntax 

    varList.Length

  
This function checks the number of items recorded in a list question
(varList).  
 

### Example 1

Assume that there is a question asking for the number of household
members (hholdNum). Elsewhere, in the questionnaire there is a question
asking for a list of all household members(hholdList). You want to check
to make sure the answers given in the list question are consistent with
the previous question.  
 

    self==hholdNum

  
   
Or alternatively use the variable name:  
 

    hholdList.Length == hholdNum

  
   
 

<span id="item2"></span>Item2
-----------------------------

### Description

Refers to the text element of an item listed in a list question.  
 

### Syntax

This feature must be used in a more complex expression. Refer to example
1 below for more information.   
 

### Example 1

Suppose you want to make sure that in a list question (hhold\_list)
recording the list of household members the text element meaning the
name being recorded is at least 5 characters long.  
   
For this check, the validation condition would be:  
 

    hhold_list.All(x=>x.Item2.Length>=5)
