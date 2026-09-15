+++
title = "Special values for numeric questions"
keywords = [""]
date = 2018-04-02T20:03:03Z
lastmod = 2026-09-14T01:01:01Z
aliases = ["/customer/portal/articles/2931999-special-values-for-numeric-questions","/customer/en/portal/articles/2931999-special-values-for-numeric-questions","/customer/portal/articles/2931999","/customer/en/portal/articles/2931999","/questionnaire-designer/special-values-for-numeric-questions"]

+++

[Numeric
questions](/customer/en/portal/articles/2468719)
may be enhanced with special values. For example, a numeric wage
question may contain in addition to a numeric input, a selection of
"*minimum wage*" and "*last month's wage*" categories. They can be set
up in the Designer by entering integer numeric codes and corresponding
value labels:  


<CENTER><A href="images/age_special_setup.png"><IMG src="images/age_special_setup.png" width=60%></A></CENTER>

On a tablet, either a value should be entered, or one of the provided
options may be selected (but not both):  

<CENTER>
  <A href="images/age_7.png"><IMG src="images/age_7.png" width=40%></A>
  <A href="images/age_special.png"><IMG src="images/age_special.png" width=40%></A>
</CENTER>

If the user enters a numeric value that happens to be a special value
code, the corresponding special value option will be selected
automatically on entry.  

Special values are stored as codes and are exported in the same numeric
variable, with labels defined in file formats that support value
labels.  

<U>Note</U>: the special values feature may be
used to accommodate the common situations with capturing "*Refusal*",
"*Don't know*", and similar. However, when such a special value is
selected the question will be counted as answered, and the answer to the
question will be treated as non-missing during the expressions
evaluation.

<U>Note</U>: special values may not be negative if the numeric question is
marked as non-negative. A [compile error](/questionnaire-designer/messages/compile_errors/) `WB0324` will occur otherwise.
