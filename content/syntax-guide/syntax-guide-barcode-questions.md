+++
title = "Syntax Guide: Barcode questions"
keywords = ["syntax","barcode "]
date = 2016-11-28T15:13:05Z
lastmod = 2016-11-28T15:13:05Z
aliases = ["/customer/portal/articles/2658190-syntax-guide-barcode-questions","/customer/en/portal/articles/2658190-syntax-guide-barcode-questions","/customer/portal/articles/2658190","/customer/en/portal/articles/2658190"]

+++

Responses for barcode questions are recorded as a string [data
type](/syntax-guide/data-types).  
Â   
The following functions can be used in conditions for barcode questions:

-   [Length](#length): *Checks the number of characters*
-   [StartsWith:](#StartsWith) *Checks that the barcode starts with
    specific characters*
-   [EndsWith:](#EndsWith) *Checks that the barcode ends with specific
    characters*
-   [IsNumber](#IsNumber): *Checks that the barcode is a number*
-   [ConsistsOf](#ConsistsOf): *Checks that the barcode consists of a
    specific set characters*

Â Â 

<span id="length"></span>Length
-------------------------------

### Description

Checks the number of characters.  
Â 

### Syntax

    varBarcode.Length

  
Â This function checks the number of characters recorded.  
Â 

### Example 1

Assume that a survey is collecting the barcode of fertilizers farmers
use (fertilizer\_product). In this particular context you know that the
barcode for these items must be 9 characters long. Therefore, the
validation condition for this check would be:

    fertilizer_product.Length==9

  
Â   
Â 

<span id="StartsWith"></span>StartsWith
---------------------------------------

### DescriptionÂ 

Checks that the barcode starts with specific characters.  
Â 

### Syntax

    varBarcode.StartsWith(â€œvalueâ€)

  
This function checks the barcode recorded starts with the values
specified as value.  
Â 

### Example 1

Suppose that an agricultural survey is also collecting soil samples from
household gardens during the interview. The sample is marked with a
barcode that must be scanned into questionnaire. All barcodes provided
must start with the numbers â€œ842â€.  
Â   
Therefore, the validation condition for this check would be:

    soilLabel.StartsWith(â€œ842â€)

Â 

<span id="EndsWith"></span>EndsWith
-----------------------------------

### Description

Checks that the barcode ends with specific characters.  
Â 

### Syntax

    varBarcode.EndsWith(â€œvalueâ€)

  
Â   
This function checks the barcode recorded ends with the characters
specified as value.  
Â 

### Example 1

Suppose that an agricultural survey is also collecting soil samples from
household gardens during the interview. The sample is marked with a
barcode that must be scanned into questionnaire. All barcodes provided
must end with the numbers â€œ989â€.  
Â   
Therefore, the validation condition for this check would be:

    soilLabel.EndsWith(â€œ989â€)

Â 

<span id="IsNumber"></span>IsNumberÂ 
------------------------------------

### Description

Checks that the barcode is a number .  
Â 

### Syntax

    varBarcode.IsNumber()

  
This function checks that the barcode recorded is a number.  
Â 

### Example 1

Assume that a survey is collecting the barcode of fertilizers farmers
use (fertilizer\_product). In this particular context you know that the
barcode for these must be a number. Therefore, the validation condition
for this check would be:

    fertilizer_product.IsNumber()

 <span id="ConsistsOf"></span>ConsistsOf
----------------------------------------

### Description

Checks that the barcode is consists of a specific set of characters.  
Â 

### Syntax

    varBarcode.ConsistsOf(â€œvalueâ€)

Â   
This function checks that the barcode recorded consists of a specific
set of characters defined as value.  
Â 

### Example 1

Â   
Assume that a survey is collecting the barcode of fertilizers farmers
use (fertilizer\_product). In this particular context you know that the
barcode for these must be a number. Therefore, the validation condition
for this check would be:

    fertilizer_product.ConsistsOf("1234567890")
