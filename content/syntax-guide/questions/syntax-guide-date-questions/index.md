+++
title = "Syntax Guide: Date questions"
keywords = ["syntax ","calendar date","current time"]
date = 2016-11-19T19:31:46Z
lastmod = 2016-11-19T19:31:46Z
aliases = ["/customer/portal/articles/2648780-syntax-guide-date-questions","/customer/en/portal/articles/2648780-syntax-guide-date-questions","/customer/portal/articles/2648780","/customer/en/portal/articles/2648780","/syntax-guide/syntax-guide-date-questions"]

+++

There are two types of date questions: Calendar and Current time. Both
of these questions are recorded as DateTime? [data
type](/syntax-guide/data-types).   
   
Responses for the calendar data questions are recorded as  {Year, Month,
Day}. Meanwhile, responses to the current time questions are recorded as
{Year, Month, Day, Hour, Minute, Second}.  
 

Calendar
========

Comparisons
-----------

-   [Relational Operators](#operator)[.](#Operator) *Less than, greater
    than, equal to, etc*
-   [InRange.](#InRange) *Checks if the date falls within an interval.*

*​*Perform Calculations
-----------------------

-   [FullYearsBetween.](#FullYearsBetween) *Computes full years between
    an earlier and later date.*
-   [FullYearsSince.](#FullYearsSince) *Computes full years between a
    later date with an earlier date.*
-   [CenturyMonthCode.](#CMC)*Computes elapsed time in months with
    Century Month Code(CMC).*
-   TotalDays. *Computes elapsed time in days.*
-   [Value.AddYears/Months/Days.](#Value.AddYMD) *Add or subtract years,
    months, or days. *

Extract Information
-------------------

-   [Value.Year/Month/Day](#YMD.Value). *Retrieve the year, month, or
    day.*
-   [New DateTime.](#NewDateTime) *Constructs a new date.*
-   [IsDate.](#IsDate) *Confirms that a date matches a calendar date.*

 Current Time
=============

Extract Information
-------------------

-   [Date.](#Date) *Retrieve the date.*
-   [Hour.](#Hour) *Retrieve the hour.*

Perform Calculations
--------------------

-   [AddHours.](#AddHours)*Compute a date by adding a number of hours.*
-   [AddMinutes.](#AddMin) *Compute a date by adding a number of
    minutes.*

 
-

  <span id="Operator"></span>Operators
-------------------------------------

### Description

Compare a calendar date with another using the relational operators.

### Example 1

Assume there is a question (dateDeath) in your survey that asks for the
date that a household member died. We want to check that the date
selected is equal or after the household members date of birth.

For this check, we would write the validation condition for the question
like this:

    Self>=dateBirth

  
It can also be written using the variable name:

    dateDeath>=dateBirth

 

 

<span id="InRange"></span>InRange
---------------------------------

### Description

  
Checks if a value falls within a specified range.

### Syntax

 

    var.InRange(a,b)

  
This function will return true if a ≤ var ≤ b. Otherwise, it will
return false. The values of a and b can either be numbers or variables.
This function provides a more simple way to write the condition:

    var ≥ a && var ≤ b

     

 

 

### Example 1

Assume there is a question (dateMarriage) that asks for an individuals
date of marriage. We want to check that the date selected is after the
individual’s date of birth, but before the date of death.  
  
For this check, we would write the validation condition for the question
like this:  
 

    dateMarriage.InRange(dateBirth,dateDeath)

 

 

<span id="FullYearsBetween"></span>FullYearsBetween
---------------------------------------------------

 

### Description.

   
Computes full years between an earlier and later date.  
 

### Syntax.

 

    FullYearsBetween(dateA, dateB)

  
   
This function will compute the full years between dateA and dateB. The
values dateA and dateB can be either date variable or a defined new
date.  
   
 

 

### Example 1

   
Assume there is a question (dateGraduation) that asks for the
respondents date of high school graduation. We want to check that
respondent was greater than or equal to 18 at their high school
graduation.   
   
For this check, we would write the validation condition for the question
like this:  
 

    FullYearsBetween(dateBorn, dateGradudation)>=18

  
   
   
 

 

<span id="FullYearsSince"></span>FullYearsSince
-----------------------------------------------

 

### Description.

   
Computes full years between a later date with an earlier date.

### Syntax.

 

    dateB. FullYearsSince(dateA)

  
   
This function will compute the full years since dateA to dateB. The
values dateA and dateB can be either date variable or a defined new
date.  
   
 

 

### Example 1

   
Assume there is a question (dateMarriage) that asks for the respondent’s
date of marriage. We want to check that respondent was greater than 15
when he/she married.  
   
For this check, we would write the validation condition for the question
like this:  
 

    dateMarriage.FullYearsSince (dateMarriage)>15

  
   
 

 

<span id="CMC"></span>CenturyMonthCode
--------------------------------------

 
-

### Description.

   
Computes elapsed time in months with Century Month Code(CMC).  
   
 

### Syntax.

 

    CenturyMonthCode(dateMonth,dateYear)

  
   
This function will compute the months from dateYear to dateMonth.  
 

 

### Example 1

   
Assume there is a question ageMonths that asks for an additional
detail—months past the full years recorded (ageFullyears), for the age
of household members, which are 5 years old and younger.  
   
We want to make sure that the additional months reported in ageMonths is
consistent with the number of months calculated from the dateMonth and
dateYear questions that capture the household members date of birth.  
   
For this check, we will need to implement the following:  
   
ageMonths = age in months – (12\*age in years)  
   
Therefore, the correct syntax is:  
 

    self==(CenturyMonthCode(dateMonth,dateYear) - (12*ageFullyears))

  
   
You can also use the variable name:  
 

    ageMonths ==(CenturyMonthCode(dateMonth,dateYear) - (12*ageFullyears))

 <span id="Value.AddYMD"></span>Value.AddYears/Months/Days
----------------------------------------------------------

### Description

Add years, months, or days to a calendar date variable for use in a
condition.

### Syntax

 

    varDate.Value.AddYears(numeric value)

    varDate.Value.AddMonths(numeric value)

    varDate.Value.AddDays(numeric value)

  
  
This function enables you to add any number (numeric value) of years,
months, or days to a calendar date variable. 

 

### Example 1

Assume that you are collecting information on food consumption in the
past 7 days and you want to display the recall period date in the
question. The recall period can be calculated from the interview date
variable (interviewDate). To do this, you would create a string variable
(recall) and use the following syntax to retrieve and calculate the date
for the recall period:  
 

    interviewDate.Value.Date.AddDays(-7).ToString("dddd, MMMM dd")

{{< imgproc "images/721286.png" Fit "800x600" />}}  
  
The format to which the date is displayed can vary, pleaser refer to
[this
article](https://msdn.microsoft.com/en-us/library/aa326721(v=vs.71).aspx)
for other possible formats.  
  
Then, in the consumption question use piping in the question text with
the variable name (%recall%) to display the date calculated through the
variable.

### Example 2

Suppose you have a follow up questions asking for the date a business
enterprise began operating (operationDate) if it has been recorded in a
previous question that a new business began operation in the last 12
months (lastyrstart). You want to check that the operation date recorded
falls within the last 12 months using the interview date question
(interviewDate).  
  
For this check, the validation condition would be:

    operationDate.InRange(interviewDate.Value.Date.AddMonths(-12), interviewDate)

 

 <span id="YMD.Value"></span>Year, Month, Day
---------------------------------------------

 

### Description

   
Retrieve the year, month, or day from a date question.  
 

### Syntax

 

    qDate.Value.Year

    qDate.Value.Month

    qDate.Value.Day

  
   
This function will allow you to extract the year, month, or day from a
date question (qDate) for use in conditions.  
 

### Example 1

   
Assume there is a question asking the household head for the year that
they took out a loan (yearLoan). You want to make sure that the reported
year falls within a specific interval—from 2014 up until the year the
interview is conducted. The interview date is also recorded as calendar
date question at the start of the interview(interviewDate).  
   
The validation condition for this question would be:  
 

    yearLoan.InRange(2014,interviewDate.Value.Year)

 
-

### Example 2

Assume that you have a question asking for the date that the household’s
harvest began (dateHarvest). You want to check that the date selected
falls within November.  
  
For this check, we would write the validation condition for the question
like this:  
 

    dateHarvest.Value.Month==11

 

  <span id="NewDateTime"></span>New DateTime
-------------------------------------------

 

### Description

   
Define a new date to use with conditions involving calendar date
questions.  
 

### Syntax

 

    new DateTime (year, month, day)

  
   
This function enables you to define a date (Year, Month, Day) or
construct a date from variables.  
   
 

 

### Example 1

   
Assume there is a question asking when the household began the
harvest(dateHarvest), and it is known that harvest could not have
started before March 1, 2017.  
   
For this check, we would write the validation condition for the question
like this:  
 

    dateHarvest> (new DateTime (2017, 3, 1))

  
   
 

 

### Example 2

   
Assume a date question is asking for the date the interview was
conducted (InterviewDate), and there are three questions that asks for
the year of birth (yearBirth), month of birth (monthBirth), and day of
birth (dayBirth). We want to check that the birth date is prior to the
date to which the interview is conducted.  
   
The validation condition for this question would be:  
 

    IntervewDate > (new DateTime( (int) yearBirth, (int) monthBirth, (int) dayBirth ))

  
   
Here we are using the prefix to “int” to change the data type to
integer, which is the date question data type.   
 

<span id="IsDate"></span>IsDate
-------------------------------

### Description

   
Confirms that a date recorded is in fact a calendar date.  
 

### Syntax

 

    IsDate(YearDate, MonthDate, DayDate )

  
   
This function checks that a date recorded in three variables is a valid
calendar date.  Returns true if a combination of the three date
components makes a valid date, and false otherwise.  
   
 

 

### Example 1  

Assume you have a series of 3 numeric questions asking for a household
members date of birth, and you want check that the date recorded is a
valid date.  
   
The syntax for the validation condition would be:  
 

    IsDate((decimal)YearDate, (decimal)MonthDate, (decimal)DayDate )

 
-

<span id="Date"></span>Date.
----------------------------

### Description

Retrieve the date from a current time question.

### Syntax

    var_currentTime.Value.Date

This function retrieves the date from a current time variable to compare
to calendar date variable or a new DateTime.

### Example 1

Suppose you have a current time question at the start of the interview
(interview\_start), then you have a date of birth question for all
household members (dob). You want to make sure that the date of birth
recorded is after the interview date.  
  
For this check, we would write the validation condition for the question
like this:

    interview_start.Value.Date>dob

 

<span id="Hour"></span>Hour.
----------------------------

### Description

Retrieve the hour from a current time question.

### Syntax

    var_currentTime.Value.Hour

This function retrieve the hour from a current time variable.

### Example 1

Suppose you have a current time question at the start of the interview
(interview\_start), and you want to make sure the interview is being
conducted at a reasonable hour-- at or before 9pm.    
  
For this check, we would write the validation condition for the question
like this:

    interview_start.Value.Hour<=21

 

<span id="AddHours"></span>AddHours.
------------------------------------

### Description

Compute a date by adding a number of hours.

### Syntax

var\_currentTime.AddHours(numeric value)  
   
Compute a date by adding a number of hours (numeric value) to the date
(var\_currentTime).

### Example 1

Suppose you have two current time questions, one at the start of the
section(ModA\_start) and another at the end of a section(ModA\_end). You
want to check that the module has not taken more than 1 hour to
complete.  
  
We would write the validation condition for the question like this:

    ModA_start.Value.AddHours(1)>ModA_end

 <span id="AddMin"></span>AddMinutes.
-------------------------------------

### Description

Compute a date by adding a number of Minutes.

### Syntax

    var_currentTime.AddMinutes(numeric value)

  
Compute a date by adding a number of minutes(numeric value) to the date
(var\_currentTime).

### Example 1

Suppose you have two current time questions, one at the start of the
section(ModA\_start) and another at the end of a section(ModA\_end). You
want to check that the module has taken at least 10 minutes to complete.

We would write the validation condition for the question like this:

    ModA_start.Value.AddMinutes(10)>ModA_end
