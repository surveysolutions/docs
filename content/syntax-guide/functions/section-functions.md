+++
title = "Section functions"
keywords = ["section"]
date = 2019-02-01T06:00:00Z
lastmod = 2019-02-06T15:00:00Z
draft=false
+++

Section functions (introduced in v19.02) are functions that may be used in Survey Solutions' syntax to get some useful indicators about the completeness of the sections, such as to establish whether a certain section has been fully answered.

The following functions are defined for sections:

<TABLE>
  <TR><TD><STRONG>IsSectionAnswered()</STRONG></TD><TD>returns a boolean true if all the [enabled] questions in the section have been answered, and false otherwise.</TD></TR>
  <TR><TD><STRONG>EnabledQuestionsCount()</STRONG></TD><TD>returns the total number of questions currently enabled in the section.</TD></TR>
  <TR><TD><STRONG>NumberUnansweredQuestions()</STRONG></TD><TD>returns the total number of questions that have not been answered in the section.</TD></TR>
  <TR><TD><STRONG>EnabledAnsweredQuestionsCount()</STRONG></TD><TD>returns the total number of questions that have been answered in the section.</TD></TR>
</TABLE>

All of these functions must receive a certain section identifier as an argument, for example:
```IsSectionAnswered(DemogSect)```

For example, if we want to enable section <i>s2</i> only if at least half of the questions are answered in section <i>s1</i>, we can write the following expression for section <i>s2</i>:

```EnabledAnsweredQuestionsCount(s1)>=NumberUnansweredQuestions(s1)```

