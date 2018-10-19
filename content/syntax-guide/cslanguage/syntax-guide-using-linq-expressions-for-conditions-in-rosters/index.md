+++
title = "Syntax Guide: Using LINQ Expressions for Conditions in Rosters"
keywords = ["designer","syntax","rosters","linq"]
date = 2016-11-21T15:33:45Z
lastmod = 2016-11-21T15:33:45Z
aliases = ["/customer/portal/articles/2649799-syntax-guide-using-linq-expressions-for-conditions-in-rosters","/customer/en/portal/articles/2649799-syntax-guide-using-linq-expressions-for-conditions-in-rosters","/customer/portal/articles/2649799","/customer/en/portal/articles/2649799","/syntax-guide/syntax-guide-using-linq-expressions-for-conditions-in-rosters"]

+++

Rosters are common survey instruments (ie household roster, assets
roster, food consumption roster). Using Language Integrated Query (LINQ)
and lambda expressions in the C\# language, we are able to code enabling
and validation conditions for rosters that can both:

-   Horizontally: Refer to the values of other variables for the current
    occurrence
-   Vertically: Refer to the values of the same variable for other items
    in the roster

{{< imgproc "images/717594.png" Fit "800x600" />}}  
  
In this article, we will cover the [general syntax](#syntax), [common
operators](#operators), provide a few [examples](#examples) on how to
write enabling and validation conditions for rosters. Additionally, this
article also provide links to [more resources](#moreref) on LINQ
expressions.  
 

<span id="syntax"></span>**General Syntax**
-------------------------------------------

The general syntax for rosters is:

    RosterName.Operator(x=>x.varQuery1==1...)

 

<table>
<thead>
<tr class="header">
<th><strong>Item</strong></th>
<th><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><em>RosterName</em></td>
<td>Name of the roster of interest to query. This is where to find the variables you are interested in.</td>
</tr>
<tr class="even">
<td><em>Operator</em></td>
<td>Query Operator: The action that you want to be performed</td>
</tr>
<tr class="odd">
<td><em>x</em></td>
<td>Anonymous variable that captures the queried value. This is just a place holder and can be anything (eg a, b, person)</td>
</tr>
<tr class="even">
<td><em>x.varQuery</em></td>
<td>Variable(s) of interest for the query</td>
</tr>
</tbody>
</table>

  
  
  
  
  
  
  
  
  
  
  
The part of the syntax in the parentheses after the operator is called
the "lambda expression." The lambda expression specifies the query
criteria for the LINQ expression.  
The value that is returned by the statement depends on the operator
used. LINQ expressions can also be used to write more complex queries to
a [look up table](/questionnaire-designer/lookup-tables).  
  
 

<span id="operators"></span>**Commonly Used Operators**
-------------------------------------------------------

There are many LINQ query operators that offer a range of query
capabilities like filtering, sorting, projection, aggregation, etc. The
most useful LINQ operators for Survey Solutions are:

-   **All**: Checks that all elements of the expression meet the query
    criteria. This operator returns true/false.
-   **Any**: Checks that at least one element of the expression meets
    the query criteria. This operator returns true/false.
-   **Count**: Counts the number of elements that meet the query
    criteria. This returns the count.
-   **FirstOrDefault**: Finds the first element that meets the query
    criteria. this returns the first element matching the query
    criteria. In most cases, this will be the first row that matches the
    search criteria If no element matches the query criteria, then it
    returns null.

  
  
 

<span id="examples"></span>**Example 1**
----------------------------------------

Assume we want to enable a section only if there are any woman 15-49
years old in the household. For this enabling condition, we will be
using the following variable names:

-   *Age* is the name of the variable recording the age of the household
    member
-   *Gender* is the name of the variable recording the gender of the
    household member. *Gender* will have a value of 2 if the person is a
    woman (*Gender==2*)
-   *hhroster* is the name of the roster containing the age and gender
    questions

Using this information, we would code the enabling condition to be like
this:

    /* Enable only if there are any women 15-49 yo in the household */
    hhroster.Any(x=>x.Gender==2 && x.Age>=15 && x.Age<=49)

In words, the expression above says: in the hhroster roster, look to see
if there is any household member who is a woman and is between the age
of 15 and 49 years old. Since we used the operator *Any*, this
expression will return true if there are any woman 15-49 years old in
the household. It will return false if there are none. If instead we
wanted to count the number of women 15-49 years old in the household,
then we would use the *Count* operator.  
  
 

**Example 2**
-------------

We want to check that the household contains one and only one household
head. This is a common validation in many household surveys. For this
approach, we would like to flag an error in the following cases:

1.  There is more than one household head
2.  There is no household head

We will be using the following variable names:

-   *relat* is the name of the variable name of the question recording
    the relationship to the household head. *relat* will have a value of
    1 if the person is the household head (*relat==1*)
-   *hhroster* is the name of the roster containing the questions about
    the household member

Since Designer allows for more than one validation conditions for each
question, we will write a separate validation condition for each case so
that we can provide more detailed error messages to the interviewers.  
 

### Case 1. There is more than one household head

  
For this case, we want to check that another person has not been listed
as the household head if a household member has been identified as the
household head. We will use the [conditional expression
operator](/syntax-guide/syntax-guide-operators#other)
to code this validation. It would be coded like:

     // Is this person the household head?
    relat==1 ?
        
        // If household head, check that there is only one household head listed
        (hhroster.Count(x=>x.relat==1)==1) 
        
        // If not a household head, then do not do anything
        : true

*hhroster.Count(x=&gt;x.relat==1)* will return the number of household
heads currently listed in the roster. Because we used a conditional
expression, *relat==1?* makes it so that it will only check that there
is only one head if the current person was recorded to be a household
head. If the person is not listed as a household head, then no error
will be flagged.  
  
 

### Case 2. There is no household head

  
For this case, we only want to run this check after question about the
relationship to head has been answered for everyone because this
validation will trigger for every person until the household head is
listed. Similarly, we will use the [conditional expression
operator](/syntax-guide/syntax-guide-operators#other)
to code this validation. It would be coded like this:

    // Has relationship to head been answered for all household members?
    hhroster.All(x=>x.relat!=null) ?
        
        //  If all information has been filled out, check for a head was listed
        !(hhroster.Count(x=>x.relat==1)==0)
        
        // If all information has not been filled, do not do anything
        : true

*hhroster.All(x=&gt;x.relat!=null)* checks that relationship to head of
household has been filled out for every member. If that is true, then
*!(hhroster.Count(x=&gt;x.relat==1)==0)* will count the number of
members that are listed as a household head and check that the number of
household heads listed is not equal to 0. If not all the relationship to
household head has not been filled out for every member, then no error
will be flagged.  
  
If you would like to learn more about and test out these two validation
conditions, you can refer to this
[question](https://solutions.worldbank.org/questionnaire/details/116bba6b43e247048a45d88f3ca3b4a8/chapter/20a1b67d72390695b07f91848bd6e90c/question/b87aeba00d9b48ac91f3b7e15cae9bed)
in the Household Roster public questionnaire.Case 1 is validation
condition 1 in the question. Case 2 is validation condition 5 in the
question. You can use the
[Tester](/questionnaire-designer/testing-your-questionnaires-using-the-tester-application)
application to test the questionnaire.  
 

<span id="moreref"></span>**More resources on LINQ**
----------------------------------------------------

For more information to write more complex LINQ queries in C\#:

-   [Stack Overflow: Learning about
    LINQ](http://stackoverflow.com/questions/16322/learning-about-linq)
-   [MSDN](https://msdn.microsoft.com/en-us/library/mt693024.aspx)
-   [101 LINQ
    samples](https://code.msdn.microsoft.com/101-LINQ-Samples-3fb9811b)
-   [LINQ Query
    Operators](https://www.tutorialspoint.com/linq/linq_query_operators.htm)
