﻿+++
title = "Mandatory (required) questions"
keywords = [""]
date = 2017-04-18T21:10:45Z
lastmod = 2020-09-15T00:00:00Z
aliases = ["/customer/portal/articles/2789716-mandatory-required-questions","/customer/en/portal/articles/2789716-mandatory-required-questions","/customer/portal/articles/2789716","/customer/en/portal/articles/2789716","/questionnaire-designer/mandatory-required-questions"]

+++

In Survey Solutions any question may be left unanswered for reasons
beyond the control of the questionnaire designer. The respondent may
refuse to answer a particular question, don't know the answer, or a
family member may be unavailable for answering.  

Every once in a while our support team is receiving questions on how to
designate a question "required", so that the interview may not proceed
unless this particular question is answered. The justification could be
that the answer is critically important to determine subsequent
trajectory through the questionnaire: eligible/non-eligible for
interview, treated/controls, etc.  

{{< panel title="Note:" style="info">}}
A typical user would attempt to "make" the question mandatory by writing
a validation condition, such as  `IsAnswered(self)`
and a validation message *"Error! Please provide an answer to this
question!"*.

This doesn't achieve the objective, because Survey Solutions
validates the answers to the questions. Hence, if there is no answer,
there is nothing to validate and the expression is not even evaluated.
But if there is an answer, then the result of this expression is always
true.  
{{% /panel %}}

The requirement for the question to be answered is not the property of
that question, but rather the property of the questionnaire containing
that question. The designer of the questionnaire should decide, what
should be the consequence for the interviewing process if the question
is not answered. In most cases some further information may still be
acquired, but occasionally this would mean the end of the interview. In
that case the designer should apply the condition
`IsAnswered(someImportantQuestion)`
as **enabling** (not validation) condition for all the **subsequent**
questions. Note that this is much easier if these questions are contained
in different sections, in which case one can apply one condition for
the whole section.
