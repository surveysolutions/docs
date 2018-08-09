+++
title = "Syntax Guide: System Generated Variables"
keywords = ["syntax","beginner","self","@rowcode","@optioncode","@current"]
date = 2016-08-16T20:36:55Z
lastmod = 2016-08-16T20:36:55Z
aliases = ["/customer/portal/articles/2539305-syntax-guide-system-generated-variables"]

+++

These are variables that are created by Designer to allow the user
to refer to certain variables or lines in a roster in [enabling
conditions](/questionnaire-designer/general-component-properties) or
[validation
conditions](/questionnaire-designer/general-component-properties). More
detail is provided below about useful system variables:
self, [@rowcode](#rowcode), [@optioncode](#optioncode), and
[@current](#current).  
 

self
----

  
For validation conditions, a very useful system generate
variable is<span
style="font-family:courier new,courier,monospace;"> self</span>. This
variable denotes the value of the question being validated. Using <span
style="font-family:courier new,courier,monospace;">self</span> instead
of the question's variable name in a question's validation conditions is
advised because you will not have to change the variable name in the
validation condition if the variable name for the question is changed.  
  
It is important to note that using <span
style="font-family:courier new,courier,monospace;">self</span> in the
enabling condition will cause an compile error.  
  
***Example:***  
You have a question "How many rooms does this house have?" with the
variable name <span
style="font-family:courier new,courier,monospace;">num\_rooms</span>. If
the value 0 is not an acceptable answer for this question, then you can
write either <span
style="font-family:courier new,courier,monospace;">num\_rooms&gt;0</span> ***or***
<span
style="font-family:courier new,courier,monospace;">self&gt;0</span> as a
validation condition for this question. The two expressions are
equivalent.  
 

<span id="rowcode"></span>@rowcode
----------------------------------

  
This system generated variable allows you to reference specific rows
within a roster. This variable can be used in enabling conditions and
validations. Additionally, @rowcode can also be used to refer to certain
rows in a [look up table](/questionnaire-designer/lookup-tables).  
  
***Example 1:***  
Assume you have roster of items and you have a question that should only
be asked of two of the items (item \#110 and item \#114). In this case,
you would use <span
style="font-family:courier new,courier,monospace;">@rowcode</span> to
refer to the item number. Then you would use <span
style="font-family:courier new,courier,monospace;">@rowcode</span> and
write the enabling condition to be like below:  
  
{{< imgproc "images/676595.png" Fit "800x600" />}}  
  
***Example 2:***  
Assume you have a roster of items that the household could have bought
in the last 7 days. You want to check that the amount of money spent is
not too high. Two of the items on the list are matches (item\# 10) and
cigarettes (item \#11). Cigarettes are more expensive than matches
so the largest amount that could be spent would be different for each
item. Assume that you want an upper bound of 20 USD for matches and 100
USD for cigarettes. You<span style="line-height: 20.8px;"> would
use </span><span
style="line-height: 20.8px; font-family: 'courier new', courier, monospace;">@rowcode</span><span
style="line-height: 20.8px;"> to code the upper bound specific to that
item. </span>To code this check, you would write the validation
condition to be like below:  
{{< imgproc "images/676607.png" Fit "800x600" />}}  
  
 

 

<span id="optioncode"></span>@optioncode
----------------------------------------

  
This system generated variable, @optioncode, is used to filter answer
options for [single
select](/questionnaire-designer/categorical-single-select-question)
questions and
[multi-select](/questionnaire-designer/categorical-multi-select-question)
questions. @optioncode refers to the numeric code for each answer
option.  
  
***Example:***  
Assume you have a question that asks when in the past calendar year a
business has been in operation. You want to filter the answer options so
that only the months in the past appears. For example, if the
interviewer occurs in October, you do not want the month November and
December to appear because those are months in the future. Assume you
have a question that captures the the date of the interview (<span
style="font-family:courier new,courier,monospace;">InterviewDate</span>).
You will use date time functions to code this filter. You should write
the filter to look like below:  
  
{{< imgproc "images/705590.png" Fit "800x600" />}}  
  
 

  
The code<span style="font-family:courier new,courier,monospace;">
InterviewDate.Value.Month</span> takes the numeric month value from the
InterviewDate variable. The filter will be evaluated for every option
code and it will only display the options that it evaluate to true. In
this case, months in the future will evaluate to false and will not
appear as an answer option.  
  
 

<span id="current"></span>@current
----------------------------------

  
This system generated variable, @current, is very useful in code to
filter answer options. @current refers to the current line or occurence
in the roster. For example, @current refers to the current household
member that you are on in the household roster.  
  
***Example:***  
Assume you have a question that asks the interviewer to select the ID of
the spouse of the current household member. You want to filter the
answer options based on the following criteria:

-   Do not show the current person
-   Only show household members of the opposite gender
-   Only show household members 10 years old or greater

This question is a single select linked to the household roster. For
this example, assume that the variable for the gender of the household
member is <span
style="font-family:courier new,courier,monospace;">gender</span>. You
would write the filter for the answer options to look like this:  
{{< imgproc "images/705614.png" Fit "800x600" />}}  
  
To see an example of this code in the public questionnaire, see this
[question](https://solutions.worldbank.org/questionnaire/details/116bba6b43e247048a45d88f3ca3b4a8/chapter/86a1285cec7b59c70bb230ee8e3bc181/question/3a3102b57b22af7172e239bb5fd4ca0d).
