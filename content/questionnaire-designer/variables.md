+++
title = "Variables"
keywords = ["variables","boolean","double","string","date/time","long integer"]
date = 2016-06-16T20:58:17Z
lastmod = 2016-06-16T20:58:17Z
+++

*Variables* are computable expressions that can be used to simplify
validation and enabling conditions that use complex expressions. The
content of a variable can be substituted into question text or static
text to provide text that is more informative and dynamic. Also,
calculated variables are included in the export data files.  
 

### To add a variable:

  
  
***First Method***

1.  Click on the down arrow next to the *ADD QUESTION* button.
2.  Select *ADD VARIABLE*.

  
      ![](/images/643283.png)  
  
  
***Second Method***

1.  Right click on the question tree to pull up the context menu.
2.  Click on *Add variable after*.

**      ![](/images/643300.png)  
  
  
Variables will appear in the question tree with the fx-icon.  
     ![](/images/643317.png)**  
  
  
  
Every variable will have a name, a type and an expression. Note that the
variables do not have enabling or validation conditions, but a variable
may still be disabled if it is part of the disabled section or
sub-section. In that case the value of the variable is C\#’s *null*.  
  
 

###  Specify variable name:

  
  
A variable name is a unique identifier for the variable. Use to the
variable name to refer to the variable in enabling conditions,
validation conditions, question text, static text, or in the expression
of other variables.  
  
 

### Specify variable type:

  
Choose the data type that you expect the variable's expression to
evaluate to (ie numeric, true/false, text). The variable type drop down
menu has five possible types to choose from:  
  
**    ![](/images/643303.png)**  
 

-   ****Boolean:**** This type can only evaluate to true or false
-   **Double:** A numeric type. This type allows for numbers with
    decimal values (e.g. 2.5, 3.42)
-   **Date/Time:** Type for values that are date and/or time
-   **Long Integer:** Type for integer values. Unlike the double type,
    this type will only allow for whole numbers (e.g. 2, 42, 7329)
-   **String: **Type for text values

 

### Specify the expression:

  
Add the expression that you want to be evaluated to compute the value of
the variable.  
  
 

### Example 1:

  
We want to define a variable fullName that is a combination of a
person's first name (question firstName) and a person's last name
(question lastName). Here the variable would be a *String* type because
the variable will be text.  
  
**![](/images/643349.png)**  
  
 

### Example 2:

  
We want to define a variable countMissingAssets to count the number of
household assets where yes or no has not yet been filled in for
categorical multi-select question (question hhAssets) that is in yes/no
mode.Here the variable type would be *Long Integer* because we expect
the number of items missing a response to be a whole number.  
  
**![](/images/643362.png)**  
  
  
We can later to use it in a static text to the interviewer that will
tell them how many assets they still have not filled out yes or not
to.  
  
 

### Example 3:

  
We want to define a variable hhsize that will compute the household
size. We intend to use this later in validation conditions in the
household food consumption module to calculate the amount of food item
that was consumed per capita.  
  
Here the variable type would be *Long Integer *because we expect the
household size to be whole number. hhroster is the name of the roster
that the household members are listed in and name is the variable that
contains the household member's names. To get the household size, we are
counting the number of non-empty names that are listed on the roster  
  
**![](/images/643351.png)  
  
  
 **
