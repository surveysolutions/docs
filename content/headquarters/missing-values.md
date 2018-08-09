+++
title = "Missing values"
keywords = [""]
date = 2017-06-13T15:20:18Z
lastmod = 2017-06-13T15:20:18Z
aliases = ["/customer/portal/articles/2822830-missing-values","/customer/en/portal/articles/2822830-missing-values","/customer/portal/articles/2822830","/customer/en/portal/articles/2822830"]

+++

Survey Solutions recognizes two situations of missingness:

1.  the value is missing because the logic of the questionnaire is
    disabling (skipping) this question. There is nothing that the
    interviewer can do to enter a value in such a field and in some
    cases even to see the question and its options.
2.  the value is missing despite the question is enabled (not skipped).
    This could be because of any of the following:

-   interviewer hasn't reached this point in the interview;
-   interviewer missed the question, didn't ask it and hence no answer
    was recorded;
-   none of the options was suitable to accommodate the respondent's
    answer and hence the interviewer didn't record the answer;
-   other similar situations.

In the first case the missingness will be reflected in the export data
file with a system missing, in the second case special reserved values
will be used:

-   for numeric variables, the value: **-999,999,999**;
-   for string variables, the value: **\#\#N/A\#\#**.

These special values should be replaced with proper missing values prior
to performing the analysis.
