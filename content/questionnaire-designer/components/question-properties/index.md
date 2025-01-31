+++
title = "Question Properties"
date = 2024-09-25T00:00:00Z
lastmod = 2025-01-30T00:00:00Z
aliases=["/questionnaire-designer/questions/question-scope-"]

+++

Question's properties define the question, how it is presented to the
interviewer or respondent, what values it may accept, etc. There are properties
that are common for all question types while other properties only exist for
specific question types.

#### Common question properties


- **Type** - determines how the response is collected by the application
(default is a text type). See
[question type](/questionnaire-designer/components/question-type/).

- **Text** - question text that the interviewer will read to the respondent. It
may include
[text substitution](/questionnaire-designer/techniques/text-substitution/).

- **Variable name** - a unique identifier to be used in expressions to refer to
the content (value of the answer to this question) and for export purposes. This
identifier must follow the requirements for
[variable names](/questionnaire-designer/components/variable-names/).

- **Variable label** - (optional) description of the data captured by the
question and it will be associated to the variable name when exporting the data
to a statistical software package. If the variable label is not entered, the
system automatically exports the question text as its label. The variable label
is not visible on the tablet except the variable labels for the identifying
questions (questions at the cover page). Variable labels are mandatory for all
questions at the cover page.

- **Instruction** -  (optional) clarification (to interviewer or respondent)
how the question must be asked, etc.

- **Scope** - defines who will be responsible for answering the question. The
scopes are described in
[Question's Scope](/questionnaire-designer/questions/question-scope-/).

- **Condition expression** (**enabling condition**) - (optional) a logical
expression that defines when this question must be asked depending on the
answers to other questions of this questionnaire. If no expression is specified,
the question will be asked.

- **Validation rule** - (optional) a combination of a validation expression and
a corresponding message for quality control of the input data by showing errors
or warnings during the interview. (Note that audio- and picture-type questions
  can't be validated).

- **Critical** - is an attribute which defines whether the question is declared
being a critical question, meaning the answer to the question is critical for
interview submission. Whether it may or may not be submitted without such a
critical answer depends on the questionnaire treatment mode decided by the user
importing the questionnaire. See more details in
[Critical rules and questions](/questionnaire-designer/techniques/critical-rules-and-questions).


#### Type-specific question properties

Description of properties specific to questions of particular types is provided
in the description of the corresponding type. See
[question type](/questionnaire-designer/components/question-type/).

<BR><BR>

{{< panel title="Attention!" style="warning" >}}  

Note that not all the combinations of properties are possible. For example,
specifying a particular question type may have an impact as to whether the
question may be placed in the cover page section, used as a supervisor question,
be preloaded, etc. Consult the table in
[Design limitations by question type](/questionnaire-designer/limits/design-limitations-by-question-type/)
for specific details.

{{< /panel >}}
