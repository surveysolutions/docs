+++
title = "Mandatory (required) questions"
keywords = [""]
date = 2017-04-18T21:10:45Z
lastmod = 2024-06-05T00:00:00Z
aliases = [
  "/customer/portal/articles/2789716-mandatory-required-questions",
  "/customer/en/portal/articles/2789716-mandatory-required-questions",
  "/customer/portal/articles/2789716","/customer/en/portal/articles/2789716",
  "/questionnaire-designer/mandatory-required-questions"
]

+++

A respondent may refuse to answer a particular question, may not know the
answer, or, perhaps, a family member may be unavailable for answering - these
are common situations during the interviewing process.

Every once in a while our support team is receiving questions on how to
designate a question "*required*", so that the interview may not proceed
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

The designer of the questionnaire should decide, what should be the consequence
for the interviewing process if the question is not answered. In most cases
some further information may still be acquired, but occasionally this would
mean the end of the interview. In that case the designer should apply the
condition `IsAnswered(someImportantQuestion)` as **enabling** (not validation)
condition for all the **subsequent** questions. Note that this is much easier
if these questions are contained in different sections, in which case one can
apply one condition for the whole section.

If, on the other hand, the designer of the questionnaire decides that the
interview should not be submitted at all when it has certain critical questions
not answered, then the correct way of implementing this is by defining the
[critical rules and questions](/questionnaire-designer/techniques/critical-rules-and-questions/).

{{< panel title="Note:" style="warning">}}
Note that simply declaring a question as critical, does not prevent the
interviewer/respondent from going forward in the interview. It prevents
the interview from submission though! So one may need to combine enabling
conditions and critical rules to prevent the interviewers from going
forward in the interview or submitting an incomplete interview.
{{% /panel %}}
