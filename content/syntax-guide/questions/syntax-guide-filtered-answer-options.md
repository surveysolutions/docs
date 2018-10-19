+++
title = "Syntax Guide: Filtered Answer Options"
keywords = ["syntax","filtered answer options","@optioncode","@current"]
date = 2016-12-02T19:28:38Z
lastmod = 2016-12-02T19:28:38Z
aliases = ["/customer/portal/articles/2663547-syntax-guide-filtered-answer-options","/customer/en/portal/articles/2663547-syntax-guide-filtered-answer-options","/customer/portal/articles/2663547","/customer/en/portal/articles/2663547","/syntax-guide/syntax-guide-filtered-answer-options"]

+++

For categorical [single
select](/questionnaire-designer/categorical-single-select-question) and
[multi-select](/questionnaire-designer/categorical-multi-select-question)
questions, Survey Solutions allows you to filter the answer options so
that not all the answer options for the question will be displayed to
the interviewer. Filtering answer options can help improve data quality
so that an interviewer cannot select answer options that are either
impossible or highly unlikely. For example, for a question where the
interviewer has to select the household member's father, you can filter
the answer options so that anyone that is younger than the household
member will not be displayed.  
 

Using filtered answer options
-----------------------------

You can define a filter to describe the conditions under which answer
options will be displayed to the interviewer via the Filter field.
Linked questions can also include a filter. In food consumption modules,
questionnaire designers can limit answer options to those that make
sense for each food item (e.g., weight units for solids, volume units
for liquids). In demographic modules, you can filter a linked question
that lists potential owners of the household’s dwelling to the set of
age relevant household members.  
The Filter field contains a condition that is evaluated against each
potential answer option. When the condition is true for a particular
answer option, that answer option is displayed. When the condition is
false (or yields an exception), that option is not displayed in
Interviewer. In other words, the feature functions like an enabling
condition for answer options, enabling only those answer options that
satisfy the filter condition.  
 

Syntax
------

There are also two [system generated
variables](/syntax-guide/syntax-guide-system-generated-variables) that
are only available in the Filter field. For non-linked questions, the
keyword
[@optioncode](/syntax-guide/syntax-guide-system-generated-variables)
provides a way to refer to the answer options for the current question.
For linked questions, the keyword
[@current](/syntax-guide/syntax-guide-system-generated-variables), used
as a variable prefix, allows you to differentiate between the value of a
variable for current roster row and that for all other rows in the
current roster.  
 

Example
-------

A question asks the interviewer to select the member in the household is
the respondent's mother. For this, you would want to filter the
household members according to the following criteria:

-   Do not show the current person
-   Only show household members that are female
-   Only show household members that are at least 10 years older than
    the household member currently being interviewed

  
This question is a single select linked to the household roster. For
this example, assume that the variable for the gender of the household
member is *gender* and for age is *age*. You would write the filter for
the answer options to look like this:

    /* Filtered answer options feature */
    // Show only females
    gender==2 &&
    // Cannot select his/herself as mother
    @current.@rowcode!=@rowcode &&
    // And person's age is 10 years older than current person's age
    age >= (@current.age + 10)

To see an example of this code in the public questionnaire, see this
[question](https://solutions.worldbank.org/questionnaire/details/116bba6b43e247048a45d88f3ca3b4a8/chapter/86a1285cec7b59c70bb230ee8e3bc181/question/c6e3c5abced7db09046a7e65f9ddcd1b).
