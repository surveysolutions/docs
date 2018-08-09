+++
title = "Mandatory (required) questions"
keywords = [""]
date = 2017-04-18T21:10:45Z
lastmod = 2017-04-18T21:10:45Z
aliases = ["/customer/portal/articles/2789716-mandatory-required-questions"]

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
  
A typical user would attempt to "make" the question mandatory by writing
a validation condition, such as  
<span
style="font-family:courier new,courier,monospace;">IsAnswered(self)</span>
and a validation message *"Error! Please provide an answer to this
question!"*. This doesn't achieve the objective, since Survey Solutions
validates the answers to the questions, and if there is no answer, there
is nothing to validate, while if there is an answer, then the result of
this expression is always true.  
  
The requirement for the question to be answered is not the property of
that question, but rather the property of the questionnaire containing
that question. The designer of the questionnaire should decide, what
should be the consequence for the interviewing process if the question
is not answered. In most cases some further information may still be
acquired, but occasionally this would mean the end of the interview. In
that case the designer should apply the condition <span
style="font-family:courier new,courier,monospace;">IsAnswered(self)</span>
as <span class="underline">enabling</span> (not validation) condition
for all the <span class="underline">subsequent</span> questions. Note
that this is much easier if these questions are contained in different
sections, in which case one can apply one condition for the whole
section.
