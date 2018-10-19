+++
title = "Syntax Guide: Text questions"
keywords = ["syntax","text","string"]
date = 2016-11-28T18:24:24Z
lastmod = 2016-11-28T18:24:24Z
aliases = ["/customer/portal/articles/2658467-syntax-guide-text-questions","/customer/en/portal/articles/2658467-syntax-guide-text-questions","/customer/portal/articles/2658467","/customer/en/portal/articles/2658467","/syntax-guide/syntax-guide-text-questions"]

+++

Responses to text questions are recorded as a string [data
type](/syntax-guide/data-types). The content for these types of
questions consists of characters (e.g. the letter “A”), group of
characters (e.g. “Mat”), or class of characters (e.g. white or empty
space).  
   
The following functions can be used in conditions for text questions:

-   [Length](#Length)<span style="font-size: 13px;">: *Checks the number
    of characters*</span>
-   [“A text”](#text)<span style="font-size: 13px;">: *Checks that the
    response is exactly equal to a specified text (“A text”)*</span>
-   [Contains](#Contains)<span style="font-size: 13px;">: *Checks that
    the response includes a specified text*</span>
-   [ConsistsOf](#ConsistsOf)<span style="font-size: 13px;">: *Checks
    that the response includes one or more of the specified
    characters*</span>
-   [IsAlphaLatin](#IsAlphaLatin)<span style="font-size: 13px;">:
    *Checks that the response consists of latin characters*</span>
-   [IsAlphaLatinOrDelimiter](#IsAlphaLatinOrDelim)<span
    style="font-size: 13px;">: *Checks that the response consists of
    latin characters and delimiters*</span>
-   [IsNullOrWhiteSpace](#IsNullOrWhiteSpace)<span
    style="font-size: 13px;">: *Checks that the response is null or
    consists of blank spaces*</span>

 

<span id="Length"></span>Length 
--------------------------------

### Description

Checks the number of characters.  
 

### Syntax

    varText.Length

This function checks the number of characters recorded.  
 

### Example 1

Suppose, you are recording the head of household’s name in a text
question, and you know that in this particular context the full name
should be more than 10 characters long. Therefore, the validation
condition for this check would be:  
 

    hhead_name.Length>10

 

<span id="text"></span>“A text”
-------------------------------

### Description

Checks that the response is exactly equal to a specified text (“A
text”)  
 

### Syntax

    varText== “A text”

This function checks that the response recorded matches the defined text
(**“**A text”).  
 

### Example 1

To check that the response recorded in question "brandName" is Nike, the
validation condition would be: 

    brandName=="Nike"

<span id="Contains"></span>Contains
-----------------------------------

 

### Description

Checks that the response includes a specified text.  
 

### Syntax

    varText.Contains(“aText”)

This function checks that the response includes a specified sub-text
(“aText”).  
 

### Example 1

To check that the present participle verb recorded in the text question
"actionWord"  includes "ing" , the validation condition would be: 

    actionWord.Contains("ing")

   
 

<span id="ConsistsOf"></span>ConsistsOf
---------------------------------------

### Description

Checks that the response includes one or more of the specified
characters.  
 

### Syntax 

    varText.ConsistsOf(“aText”)

  
This function checks that the response includes one or more of the
specified characters (“aText”).  
 

### Example 1

Assume you are recording the home address of the interviewee (address),
and you want to make sure that it only includes letters, numbers,
delimiters, and spaces.  
   
The validation condition for this check would be:  
 

    address.ConsistsOf("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890., ")

 

<span id="IsAlphaLatin"></span>IsAlphaLatin
-------------------------------------------

### Description

Checks that the response consists of alpha latin characters

### Syntax

    varText.IsAlphaLatin()

This function checks that the text in VarText consists of latin
characters.  
 

### Example 1

Suppose, you are recording the first name of  the respondent for Module
A (firstname). The response for this question must only consists of
latin characters.  
  
Therefore, the validation condition for this check would be:

    self.IsAlphaLatin()

  
Or alternatively use the question’s variable name:

    firstname.IsAlphaLatin()

 

<span id="IsAlphaLatinOrDelim"></span>IsAlphaLatinOrDelimiter
-------------------------------------------------------------

### Description

Checks that the response consists of alpha latin characters and
delimiters.  
 

### Syntax

    varText.IsAlphaLatinOrDelimiter()

  
This function checks that the text in varText consists of latin
characters and delimiters.  
 

### Example 1

Suppose, you have a questions asking for the head of household’s full
name(hheadFullName), starting with the surname followed by a comma, and
then the first name. For this check the validation condition would be:  
 

    self.IsAlphaLatinOrDelimiter()

  
Or alternatively use the question’s variable name:  
 

    hheadFullName.IsAlphaLatinOrDelimiter()

 

<span id="IsNullOrWhiteSpace"></span>IsNullOrWhiteSpace
-------------------------------------------------------

### Description

Checks that the response is null or consists of blank spaces  
 

### Syntax

    String.IsNullOrWhiteSpace(varText)

This function checks that the string(text) in the question varText
consists of blank spaces or is null.  
 

### Example 1

Assume you are recording the first name of the respondent for Module A
(firstname). The response for this question must not include spaces or
be null.  
   
For this check the validation condition would be:

    !( String.IsNullOrWhiteSpace(self) )

  
   
or alternatively use the variable name:

    !(String.IsNullOrWhiteSpace(firstname))
