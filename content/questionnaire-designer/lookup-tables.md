+++
title = "Lookup Tables"
keywords = ["conditions","table","reference","rowcode"]
date = 2016-06-16T16:33:33Z
lastmod = 2016-06-16T16:33:33Z
aliases = ["/customer/portal/articles/2466966-lookup-tables"]

+++

*Lookup tables* are reference tables that may be used in validation and
enabling conditions. They are prepared as external tab-delimited files
and uploaded to the questionnaire in the Designer.  
   
We use lookup tables to find content by some code and apply it in
validations and enabling  
conditions as part of larger expressions. Often times this lookup code
is a code of an item in a price survey, occupational code in a labor
force survey, or a code of crop in an agricultural survey.  
   
Lookup tables are particularly convenient for storing time series data,
such as historical exchange  
rates for various currencies. Other uses involve storing estimated crop
yields by crop, ranges of salaries by occupation, etc. While
anthropometric z-scores can be implemented via lookup tables as well,
users should refer to specialized z-score functions instead.   
  
The lookup tables must conform to the following format:  
 

-   Contain the “rowcode” column, and up to 10 other numeric columns
    with reference data.
-   Values in “rowcode” column must be integer and unique
-   Other columns may contain repetitive content, as well as fractions.

  
Lookup tables may include up to 5,000 rows of reference data. Multiple
lookup tables may be defined within the same questionnaire.  
  
 

How to upload a look up table
-----------------------------

1.  Click on the *lookup table icon*<span
    style="line-height: 20.8px;"> on the left hand panel.  
      
    ![](/images/643037.png)</span>
2.  Click on the *Add new lookup table*link.  
      
    *![](/images/643038.png)*
3.  Type in the *table name, *and click on the *select file *link to
    upload the table delimited lookup table.
4.  Click *save.*

  
  
The short syntax for the reference in condition expressions is:  
 

    LookupTableName[code].ColumnName

  
  
It requires the name of the lookup table, the value of the code, and the
name of the column for the content of interest  
  
 

Consider the following example:
-------------------------------

  
Suppose, that you want to add a validation condition that provides an
error message for plot areas that are greater than 2 hectares.  
  
  
 ![](/images/643050.png)  
   
  
However, the single-select unit question allows for the plot area to be
reported in other units of measurement in addition to hectare.  
  
The tab delimited lookup table with unit conversion factors.  
  
  
![](/images/643046.png)  
  
After uploading the tab-delimited lookup table following the directions
explained previously,  
  
![](/images/643052.png)  
  
  
We will add the following validation expression to the single-select
unit question.   
  
![](/images/643055.png)  
  
  
Here, *plotarea* refers to numeric area question. *ConversionFactors* is
the name of the look up table we have uploaded to Designer. *Self*
refers to the single-select unit question that holds the validation
expression, and *conversion* refers to the conversion factor column in
the lookup table.  
   
If “Acre” is selected, then the reported plot area will be multiplied by
row 1 of the “conversion” column in the lookup table. And, this
calculated value must be less than 2 hectare.  The same follows for the
other possible units.   
  
  
To see a demonstration of this process check out this video.  
  
  

  
  
  
  
For more in-depth information and extended examples, please refer to the
[*Lookup Tables
Reference*](http://siteresources.worldbank.org/INTCOMPTOOLS/Resources/8213623-1380598436379/lookup.pdf)*.*
