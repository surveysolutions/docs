+++
title = "Rosters"
keywords = ["roster","numeric"," list","fixed","multi select","yes/no multi select"]
date = 2016-06-21T22:39:42Z
lastmod = 2016-06-21T22:39:42Z
aliases = ["/customer/portal/articles/2472543-rosters"]

+++

Roster properties
-----------------

When you select a roster, you can see its details in the right hand
panel. Rosters are defined by a set of properties. While some features
are common to all roster types, others are defined for a specific roster
source.  
  
Survey Solutions has 4 roster sources. Three of them depend on the
question type linked to the roster: [*numeric question*](#numeric),
[*list question*](#list) and [*multi-select question*](#multi_select).
No question is linked to the fourth roster source: [*fixed set of
items*](#fixed%20set%20of%20items).  
  
Non-nested rosters can have up to 200 rows.  If there are over 60 rows
in the roster, the roster can contain up to 500 questions, on the other
hand if there are more than 60 rows in the roster then the roster cannot
contain more than 30 questions. This is particularly useful for market
price and food consumption rosters, which typically have more than 100
rows on paper, they can now be designed as a single, large roster in
Survey Solutions.

 

Creating a roster
-----------------

  
**To define the roster type:**

1.  Click on the *Roster source* dropdown box.
2.  From the pop-up menu select the roster type by clicking on it.

  
The answer to the source question or the number of fixed set of items,
defines the number of times the questions within the roster are
repeated. This means that there will be a set of questions for each
subject (individual, enterprise, crop, land, food item, non-food item,
etc.). For this reason, a subject id (name, code id, etc.) is needed to
differentiate the set of questions among the different subjects. The
subject’s id can either be created automatically during the interview or
be fixed.  
  
When creating a roster make sure that you have defined the maximum
number of answers allowed in the roster source (trigger) question, or in
other words the maximum number of roster rows that can be created.   
  
  
 

Roster types
------------

 

### <span id="numeric"></span>Numeric roster

  
The roster source is a numeric question. For example, consider the
following questions:  
  
*How many people live in the household?  
How many partners does the enterprise have?  
How many lands do you cultivate?  
How many crops did you harvest in the land?*  
  
  
The total number of household members, partners, lands or crops
determines how many times the questions within the roster will be
repeated.  
  
  
The pictures below show an example of a numeric roster.  
  
In Questionnaire Designer:  
  
![](/images/646131.png)  
  
  
On a tablet:  
  
![](/images/646132.png)  
  
 

### <span id="list"></span>List roster

  
The roster source is a list question. <span
style="line-height: 20.8px;">For example, consider the following
questions:</span>  
  
*List the people living in the household.  
List the employees working in the enterprise.   
List the lands you cultivate.  
List the crops you harvested in the land. *  
  
The total number of listed household members, employees, lands or crops
determines how many times the questions within the roster will be
repeated.  
  
  
The pictures below <span style="line-height: 20.8px;">show an example of
a list roster. </span>  
  
  
In Questionnaire Designer:  
  
![](/images/646139.png)  
  
  
<span style="line-height: 20.8px;">On a tablet:  
  
![](/images/646169.png)</span>  
  
 

### <span style="line-height: 20.8px;"><span id="multi_select"></span>Multi-select roster</span>

  
<span style="line-height: 20.8px;">The roster source question is a
multi-select question. A multi-select question in yes/no mode may also
be used as a roster source question. Below are a few examples of
multi-select questions:   
  
  
*Was \[the food items below\] purchased in the last week? (in yes/no
mode)  
From the listed crops select those cultivated in your land  
From the listed types of payment, select those accepted by the
enterprise*  
  
The total number of selected food items, crops, or types of payment
determines how many times the questions within the roster will be
repeated. In the case of a multi-select question in yes/no mode the
number of items marked as "yes" in the multi-select question will
determine how many times the questions within the roster will be
repeated.  
  
The pictures below show an example of multi-select roster.  
  
In Questionnaire Designer:  
  
![](/images/646176.png)  
  
On a tablet:  
  
![](/images/646177.png)  
  
The pictures below show an example of multi-select roster in yes/no
mode.  
  
  
In Questionnaire Designer:  
  
![](/images/646190.png)  
  
  
On a tablet:  
  
![](/images/646192.png)</span>  
  
 

### <span style="line-height: 20.8px;"><span id="fixed set of items"></span>Fixed set of items roster</span>

  
<span style="line-height: 20.8px;">In the case of a *fixed set of items*
roster*,* the subject ids are the fixed items defined in Questionnaire
Designer.  
  
To define them, click on the *Add Item* link to manually add each
subject id and code.  
  
![](/images/646179.png)</span>
