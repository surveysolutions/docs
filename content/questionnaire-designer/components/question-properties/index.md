+++
title = "Question Properties"
date = 2024-09-25T00:00:00Z
lastmod = 2024-09-25T00:00:00Z
aliases=["/questionnaire-designer/questions/question-scope-"]

+++

Question's properties define the question, how it is presented to the interviewer or respondent, what values it may accept, etc.
There properties that are common for all question types and some properties only exist for specific question types.


#### Common question properties


- **Type** - determines how the response is collected by the application (default is a text type). See [question type](/questionnaire-designer/components/question-type/).

- **Text** - question text that the interviewer will read to the respondent. It may include [text substitution](/questionnaire-designer/techniques/text-substitution/).

- **Variable name** - a unique identifier to be used in expressions to refer to the content (value of the answer to this question) and for export purposes. This identifier must follow the requirements for [variable names](/questionnaire-designer/components/variable-names/)

- **Variable label** - (optional) description of the data captured by the question and it will be associated to the variable name when exporting the data to a statistical software package. If the variable label is not entered, the system automatically exports the question text as its label. The variable label is not visible on the tablet except the variable labels for the identifying questions (questions at the cover page). Variable labels are mandatory for all questions at the cover page.

- **Instruction** -  (optional) clarification (to interviewer or respondent) how the question must be asked, etc.

- **Scope** - defines who will be responsible for answering the question. The scopes defined in Survey Solutions are: 

  - interviewer - (this is the default scope) indicating that the question should be asked and the answer entered during the interview (by the interviewer in case of a CAPI mode, or the respondent in the CAWI mode).
  - identifying - this scope applies to all questions placed to the cover page and only to questions placed to the cover page. It is not selectable for any other questions. If the answer to an identifying question has been preloaded before the start of the interview, then no other user of the system (in any role) will not be able to change that answer (interviewers will see those questions widht a padlock icon). 
  - hidden - defines that the question should not be visible, but rather be used as a container for holding values that can be used elsewhere in the questionnaire for conditions (enabling, validation, criticality, variables calculation, filtering) or [text substitution](/questionnaire-designer/techniques/text-substitution/). Hidden questions may only be preloaded, not answered. Not all question types may be declared `hidden`. See [Design limitations by question type](questionnaire-designer/limits/design-limitations-by-question-type/).
  - supervisor - this scope defines questions that must be hidden from the interviewer or web-respondent, but shown to the supervisor after the interview is completed.

- **Condition expression** (**enabling condition**) - (optional) a logical expression that defines when this question must be asked depending on the answers to other questions of this questionnaire. If no expression is specified, the question will be asked.

- **Validation rule** - (optional) a combination of a validation expression and a corresponding message for quality control of the input data by showing errors or warnings during the interview. (Note that audio- and picture-type questions can't be validated).

- **Critical** - is an attribute which defines whether the question is declared being a critical question, meaning the answer to the question is critical for interview submission. Whether it may or may not be submitted without such a critical answer depends on the questionnaire treatment mode decided by the user importing the questionnaire. See more details in [Critical rules and questions](/questionnaire-designer/techniques/critical-rules-and-questions).


#### Type-specific question properties

Description of properties specific to questions of particular types is provided in the description of the corresponding type. See [question type](/questionnaire-designer/components/question-type/).


<BR><BR>


{{< panel title="Attention!" style="warning" >}}  

Note that not all the combinations of properties are possible. For example, a question type may have consequences as to whether the question may be placed on the cover page, used as a supervisor question, be preloaded, etc. Consult the table in [Design limitations by question type](/questionnaire-designer/limits/design-limitations-by-question-type/) for specific details.
{{< /panel >}}


