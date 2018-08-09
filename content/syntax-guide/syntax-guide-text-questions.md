+++
title = "Syntax Guide: Text questions"
keywords = ["syntax","text","string"]
date = 2016-11-28T18:24:24Z
lastmod = 2016-11-28T18:24:24Z
aliases = ["/customer/portal/articles/2658467-syntax-guide-text-questions","/customer/en/portal/articles/2658467-syntax-guide-text-questions","/customer/portal/articles/2658467","/customer/en/portal/articles/2658467"]

+++

Responses to text questions are recorded as a string [data
type](/syntax-guide/data-types). The content for these types of
questions consists of characters (e.g. the letter â€œAâ€), group of
characters (e.g. â€œMatâ€), or class of characters (e.g. white or empty
space).  
Â   
The following functions can be used in conditions for text questions:

-   [Length](#Length)<span style="font-size: 13px;">: *Checks the number
    of characters*</span>
-   [â€œA textâ€](#text)<span style="font-size: 13px;">: *Checks that the
    response is exactly equal to a specified text (â€œA textâ€)*</span>
-   [Contains](#Contains)<span style="font-size: 13px;">: *Checks that
    the response includes a specified text*</span>
-   [ConsistsOf](#ConsistsOf)<span style="font-size: 13px;">: *Checks
    that the response includes one or more of the specified
    characters*</span>
-   [IsAlphaLatin](#IsAlphaLatin)<span style="font-size: 13px;">:
    *Checks that the response consists of latinÂ characters*</span>
-   [IsAlphaLatinOrDelimiter](#IsAlphaLatinOrDelim)<span
    style="font-size: 13px;">: *Checks that the response consists of
    latinÂ characters and delimiters*</span>
-   [IsNullOrWhiteSpace](#IsNullOrWhiteSpace)<span
    style="font-size: 13px;">: *Checks that the response is null or
    consists of blank spaces*</span>

Â 

<span id="Length"></span>LengthÂ 
--------------------------------

### Description

Checks the number of characters.  
Â 

### Syntax

    varText.Length

This function checks the number of characters recorded.  
Â 

### Example 1

Suppose, you are recording the head of householdâ€™s name in a text
question, and you know that in this particular context the full name
should be more than 10 characters long. Therefore, the validation
condition for this check would be:  
Â 

    hhead_name.Length>10

Â 

<span id="text"></span>â€œA textâ€
-------------------------------

### Description

Checks that the response is exactly equal to a specified text (â€œA
textâ€)  
Â 

### Syntax

    varText== â€œA textâ€

This function checks that the response recorded matches the defined text
(**â€œ**A textâ€).  
Â 

### Example 1

To check that the response recorded in question "brandName" is Nike, the
validation condition would be:Â 

    brandName=="Nike"

<span id="Contains"></span>Contains
-----------------------------------

Â 

### Description

Checks that the response includes a specified text.  
Â 

### Syntax

    varText.Contains(â€œaTextâ€)

This function checks that the response includes a specified sub-text
(â€œaTextâ€).  
Â 

### Example 1

To check that the present participle verb recorded in the text question
"actionWord" Â includes "ing" , the validation condition would be:Â 

    actionWord.Contains("ing")

Â   
Â 

<span id="ConsistsOf"></span>ConsistsOf
---------------------------------------

### Description

Checks that the response includes one or more of the specified
characters.  
Â 

### SyntaxÂ 

    varText.ConsistsOf(â€œaTextâ€)

  
This function checks that the response includes one or more of the
specified characters (â€œaTextâ€).  
Â 

### Example 1

Assume you are recording the home address of the interviewee (address),
and you want to make sure that it only includes letters, numbers,
delimiters, and spaces.  
Â   
The validation condition for this check would be:  
Â 

    address.ConsistsOf("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890., ")

Â 

<span id="IsAlphaLatin"></span>IsAlphaLatin
-------------------------------------------

### Description

Checks that the response consists of alpha latin characters

### Syntax

    varText.IsAlphaLatin()

This function checks that the text in VarText consists of latin
characters.  
Â 

### Example 1

Suppose, you are recording the first name ofÂ  the respondent for Module
A (firstname). The response for this question must only consists of
latin characters.  
  
Therefore, the validation condition for this check would be:

    self.IsAlphaLatin()

  
Or alternatively use the questionâ€™s variable name:

    firstname.IsAlphaLatin()

Â 

<span id="IsAlphaLatinOrDelim"></span>IsAlphaLatinOrDelimiter
-------------------------------------------------------------

### Description

Checks that the response consists of alpha latin characters and
delimiters.  
Â 

### Syntax

    varText.IsAlphaLatinOrDelimiter()

  
This function checks that the text in varText consists of latin
characters and delimiters.  
Â 

### Example 1

Suppose, you have a questions asking for the head of householdâ€™s full
name(hheadFullName), starting with the surname followed by a comma, and
then the first name. For this check the validation condition would be:  
Â 

    self.IsAlphaLatinOrDelimiter()

  
Or alternatively use the questionâ€™s variable name:  
Â 

    hheadFullName.IsAlphaLatinOrDelimiter()

Â 

<span id="IsNullOrWhiteSpace"></span>IsNullOrWhiteSpace
-------------------------------------------------------

### Description

Checks that the response is null or consists of blank spaces  
Â 

### Syntax

    String.IsNullOrWhiteSpace(varText)

This function checks that the string(text) in the question varText
consists of blank spaces or is null.  
Â 

### Example 1

Assume you are recording the first name of the respondent for Module A
(firstname). The response for this question must not include spaces or
be null.  
Â   
For this check the validation condition would be:

    !( String.IsNullOrWhiteSpace(self) )

  
Â   
or alternatively use the variable name:

    !(String.IsNullOrWhiteSpace(firstname))
