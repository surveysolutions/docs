+++
title = "Syntax Guide: Numeric Questions"
keywords = ["syntax","numeric","inrange","inlist","math"]
date = 2016-08-18T20:18:28Z
lastmod = 2016-08-18T20:18:28Z
aliases = ["/customer/portal/articles/2542376-syntax-guide-numeric-questions","/customer/en/portal/articles/2542376-syntax-guide-numeric-questions","/customer/portal/articles/2542376","/customer/en/portal/articles/2542376","/syntax-guide/syntax-guide-numeric-questions"]

+++

Responses to [numeric
questions](/questionnaire-designer/numeric-question) are recorded in the
long [data type](/syntax-guide/data-types) for integer numbers and
record in the double [data type](/syntax-guide/data-types) for real
numbers (ie 1.5, 2.73, 15.25, 2.0).  

The following functions and operators can be used in conditions for
numeric questions:  
 

### Comparison to a value

-   ***[Relational
    Operators](/syntax-guide/syntax-guide-operators)***: less than,
    greater than, equal to, etc

 

### Comparison to a range or several values

 

-   ***[InRange](#inrange):*** Checks if the number falls within a range
-   ***[InList](#inlist):*** Checks if the number falls within a list of
    numbers

 

### Math Functions


These are the functions in the C\# Math Class that could be useful in
your instrument:

 

-   ***[Arithmetic Operators](/syntax-guide/syntax-guide-operators):***
    addition, subtraction, multiplication, division
-   ***[Abs](#abs): ***Returns the absolute value of a number
-   ***[Ceiling](#ceiling): ***Returns the smallest integer that is
    greater than or equal to the decimal number
-   ***[Floor](#floor): ***Returns the largest integer that is less than
    or equal to the decimal number
-   ***[Max](#max): ***Returns the larger of the two numbers
-   ***[Min](#min): ***Returns the smaller of the two numbers
-   ***[Pow](#power): ***Returns a specified number to a specified power
-   ***[Round](#round): ***Round the decimal number to the closest
    integer
-   ***[Sign](#sign): ***Returns whether the number is positive or
    negative
-   ***[Sqrt](#sqrt):*** Returns the square root of the number
-   ***[Truncate](#truncate): ***Returns the integer part of a decimal
    number
-   [Additional methods in the C\# Math
    Class](https://msdn.microsoft.com/en-us/library/system.math(v=vs.110).aspx)

 

 
-

<span id="inrange"></span>**InRange**
-------------------------------------

 

### Description


Checks if a value falls within a specified range.  
 

### Syntax


***var.InRange(a,b)***  

This function will return ***true ***if ***a ≤ var ≤ b***. Otherwise, it
will return ***false***. The values of a and b can either be numbers or
variables. This function provides a more simple way to write the
condition:

    var ≥ a && var ≤ b



 

### Example 1


Assume there is a question (**days\_worked**) that asks the respondent
how many days in the last 7 days did they work at their primary job. We
want to check that the response is between 0 and 7 days as a validation
condition.  

For this check, we would write the validation condition for the question
like this:

    self.InRange(0,7)


It can also be written using the variable name:

    days_worked.InRange(0,7)

 

### Example 2

A common check for numeric questions is a range check to verify that the answer
to the question is within certain bounds. To verify, for example, that year of
birth is within 1900 to 2020 range we write a validation condition for this
variable:

    self.InRange(1900,2016)


**<span id="inlist"></span>InList**
-----------------------------------

 

### Description


Checks if a value matches any of the values in a specified list.

### Syntax


***var.InList(a,b,c,d,...)***  

This function will return ***true*** if ***var*** matches any of the
arguments in the provided list. Otherwise, it will return ***false***.
The values in the list can either be numbers or variables. This function
provides a more simple way to write the condition:

    (var==a || var==b || var==c || var==d || ...)

 

### Example 1


Assume you have a question (satisfied) that asks people to rank how
satisfied they are with their life on a scale of 1 to 5 with 1
being very unsatisfied and 5 being very satisfied. For people that
answered 1 or 5, you want to ask them additional questions so you will
need to have enabling conditions for them. For the follow up questions,
you would code the enabling conditions like this:

    satisfied.InList(1,5)



 

**<span id="abs"></span>Abs**
-----------------------------

 

### Description


Returns the absolute value of a number. The absolute value of a real
number can be thought of as the distance of the number from zero.  
 

### Syntax


***Math.Abs(z)***  

The value for z can be an expression, a variable or a number. If you are
using a variable or an expression with multiple variables, you will have
to add **.Value** to the end of each variable to avoid a compile
error.  
 

### Example:

    Math.Abs(-6)     // returns 6
    Math.Abs(6)      // returns 6
    Math.Abs(7-3.5)  // returns 3.5
    Math.Abs(3.5-7)  // returns 3.5



 

**<span id="ceiling"></span>Ceiling**
-------------------------------------

 

### Description


Returns the smallest integral value that is greater than or equal to the
value provided.  
 

### Syntax


***Math.Ceiling(z)***  

The value for z can be an expression, a variable or a number. If you are
using a variable or an expression with multiple variables, you will have
to add **.Value** to the end of each variable to avoid a compile
error.  
 

### Example

    Math.Ceiling(3.21)  // returns 4
    Math.Ceiling(3.98)  // returns 4
    Math.Ceiling(6-3.5) // returns 3
    Math.Ceiling(4-2)   // returns 2



 

**<span id="floor"></span>Floor**
---------------------------------

 

### Description


Returns the largest integral value that is less than or equal to the
value provided  
 

### Syntax


***Math.Floor(z)***  

The value for z can be an expression, a variable or a number. If you are
using a variable or an expression with multiple variables, you will have
to add **.Value** to the end of each variable to avoid a compile error.

### Example

    Math.Floor(3.21)  // returns 3
    Math.Floor(3.98)  // returns 3
    Math.Floor(6-3.5) // returns 2
    Math.Floor(4-2)   // returns 2

 

**<span id="max"></span>Max**
-----------------------------

 

### Description


Returns the larger of two values  
 

### Syntax


***Math.Max(a,b)***  

The value for z can be an expression, a variable or a number. If you are
using a variable or an expression with multiple variables, you will have
to add **.Value** to the end of each variable to avoid a compile error.

### Example

 

    Math.Max(2,4)       // returns 4
    Math.Max(10,3)      // returns 10
    Math.Max(-10,0.5)   // returns 0
    Math.Max(6,1)       // returns 6



 

**<span id="min"></span>Min**
-----------------------------

 

### Description


Returns the smaller of two values  
 

### Syntax


***Math.Min(a,b)***  

The value for z can be an expression, a variable or a number. If you are
using a variable or an expression with multiple variables, you will have
to add **.Value** to the end of each variable to avoid a compile
error.  
**Example**

    Math.Min(2,4)       // returns 2
    Math.Min(10,3)      // returns 3
    Math.Min(-10,0.5)   // returns -10
    Math.Min(6,1)       // returns 1

 

**<span id="power"></span>Pow**
-------------------------------

 

### Description


Returns a specified number raised to the power of another specified
number  
 

### Syntax


***Math.Pow(a,b)***  

The number a is raised to the power of b. The value for a and b can be
an expression, a variable or a number. If you are using a variable or an
expression with multiple variables, you will have to add **.Value** to
the end of each variable to avoid a compile error.

### Example 1

    Math.Pow(2,3)   // returns 8
    Math.Pow(4,4)   // returns 256

 

### Example 2


You have two questions in your survey that ask for: 1) weight of a
person in kilogram (**weight**) and 2) height of a person in centimeters
(**height**). Both variables **height** and **weight** are real numbers
(allows for decimal values) and not integers. You want to calculate the
[Body Mass Index
(BMI)](https://www.cdc.gov/healthyweight/assessing/bmi/adult_bmi/index.html)
of the person and make sure it is in a certain range to validate that
the weight and height were entered correctly.  

For this check, the code for the validation condition would look like
this:

    (weight/Math.Pow((height.Value,2)).InRange(10,40)




 

**<span id="round"></span>Round**
---------------------------------

 

### Description


Rounds a specified value to the nearest integer value  
 

### Syntax


***Math.Round(z)***  

The value for z can be an expression, a variable or a number. If you are
using a variable or an expression with multiple variables, you will have
to add **.Value** to the end of each variable to avoid a compile error.

### Example

    Math.Round(20.1)    // returns 20
    Math.Round(20.6)    // returns 21
    Math.Round(10-1.5)  // returns 9



 

**<span id="sign"></span>Sign**
-------------------------------

 

### Description


Returns whether the value is negative, positive, or zero. If the value
if negative, then it will return the value -1. If the number is
positive, then it will return the value 1. If the number is zero, then
it will return the value 0.  
 

### Syntax


***Math.Sign(z)***  

The value for z can be an expression, a variable or a number. If you are
using a variable or an expression with multiple variables, you will have
to add **.Value** to the end of each variable to avoid a compile
error.  
 

### Example

    Math.Sign(5)        // returns 1
    Math.Sign(0)        // returns 0
    Math.Sign(-2)       // returns -1
    Math.Sign(-5 + 2)   // returns -1



 

**<span id="sqrt"></span>Sqrt**
-------------------------------

 

### Description


Returns the square root of a specified number. This will return an error
if the specified number is negative.  
 

### Syntax


***Math.Sqrt(z)***  

The value for z can be an expression, a variable or a number. If you are
using a variable or an expression with multiple variables, you will have
to add **.Value** to the end of each variable to avoid a compile
error.  
 

### Example

    Math.Sqrt(16)       // returns 4
    Math.Sqrt(144)      // returns 12
    Math.Sqrt(12 + 13)  // returns 5



 

**<span id="truncate"></span>Truncate**
---------------------------------------

 

### Description


Returns the integer part of a specified number. In other words, this
returns the value of the number before the decimal point.  
 

### Syntax


***Math.Truncate(z)***  

The value for z can be an expression, a variable or a number. If you are
using a variable or an expression with multiple variables, you will have
to add **.Value** to the end of each variable to avoid a compile
error.  

 

### Example

    Math.Truncate(53.72)    // returns 53
    Math.Truncate(12.11)    // returns 12
    Math.Truncate(-2.62)    // returns -2
