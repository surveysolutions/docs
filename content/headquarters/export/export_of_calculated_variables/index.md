+++
title = "Export of calculated variables"
keywords = ["export", "calculated", "variable"]
date = 2017-10-03T19:31:00Z
lastmod = 2018-09-28
aliases=["/headquarters/export_of_calculated_variables"]
+++

**Calculated variables** are commonly used in CAPI questionnaires to implement complex
checks or indicate to the interviewer some derived information. For
example, one may create a variable that calculates the number of
children in the household,

    numChildren = Persons.Count(person => person.age < 18)

and use this variable in subsequent questions to check if the number of
children in a household  exceeds a specific threshold.


Starting with version 5.24 of Survey Solutions these variables will be
automatically included in the export data. This is especially useful
when the variables are dependent on random sequence of values generated
by Survey Solutions, such as in the cases of random selection of
respondents in households or enterprises.
No special actions are required on the user side. After the upgrade the new
data downloads will contain the calculated variables as part of the
exported data. The variables are exported in the order they appear in
the questionnaire. 