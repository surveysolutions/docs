+++
title = "Question's Scope"
keywords = ["scope","interviewer","supervisor","identifying","hidden","question properties"]
date = 2016-06-17T18:26:26Z
lastmod = 2025-01-30T18:18:18Z
aliases = [
  "/customer/portal/articles/2468340-question-scope-",
  "/customer/en/portal/articles/2468340-question-scope-",
  "/customer/portal/articles/2468340",
  "/customer/en/portal/articles/2468340",
  "/questionnaire-designer/question-scope-"
]

+++


The **scope** of a question establishes who will be responsible for answering
that question. The scopes defined in Survey Solutions are:

  - `identifying` - this scope applies to all questions placed to the cover
  page and only to questions placed to the cover page. (Note that it is not
  selectable for questions placed in any other section). If the answer to
  an identifying question has been preloaded before the start of the interview,
  then no other user of the system (in any role) will be able to change that
  answer (interviewers will see those questions with a padlock icon 🔒).

  - `interviewer` - (this is the default scope) indicating that the question
  should be asked and the answer entered during the interview (by the
  interviewer in case of a CAPI mode, or the respondent in the CAWI mode).

  - `hidden` - defines that the question should not be visible, but rather be
  used as a container for holding values that can be used elsewhere in the
  questionnaire for conditions (enabling, validation, criticality, variables
  calculation, filtering) or [text substitution](/questionnaire-designer/techniques/text-substitution/).
  Hidden questions may only be preloaded, not answered.

  - `supervisor` - this scope defines questions that must be hidden from the
  interviewer or web-respondent, but shown to the supervisor after the interview
  is completed. Headquarters users also have access to questions in this scope
  (may see and modify the answers).

Not all question types and scopes are compatible, for example, a `geography`
type question may not be in the `identifying` scope, etc. See
[Design limitations by question type](/questionnaire-designer/limits/design-limitations-by-question-type/)
for the permitted combinations of question types and scopes.

Note that preloading is different from identification. Any question in Survey
Solutions (barring some excluded types, as described in
[Design limitations by question type](/questionnaire-designer/limits/design-limitations-by-question-type/))
may be preloaded (whether on the cover page or in a different section), but
placing a question on the cover page does not necessarily imply that the
question must be or will be preloaded. Instead, depending on the operation, the
officer creating the assignments may put available information (for example,
the address of the household to be interviewed) and leave as blank the
information that is not available before the interview starts, but will become
available during the interview (for example, the name of the head of the
household).

Identifying fields are displayed on the
[dashboard cards](/interviewer/app/dashboard-card/)
to help the interviewers locate their designated targets.

Interviewers don't see the comments left to supervisor questions and don't see
any errors associated with validation of questions in supervisor's scope.

Supervisors and headquarters users do see hidden questions when reviewing the
submitted interviews, but can't change their answers.
