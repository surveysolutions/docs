+++
title = "Testing Scenarios"
keywords = ["testing","scenarios"]
date = 2019-09-30T00:00:00Z
lastmod = 2024-01-17T00:00:00Z
+++

Survey Solutions scenarios represent a storage of responses provided during a
testing session. The objective is **not** to collect the data (use [Interviewer
App](/interviewer/) for that), but to simplify testing of complex
questionnaires, which require a certain time-consuming input.

Two actions are available for a scenario in the Designer:

- **view:** review the answers entered in the scenario;
- **run:** start testing and apply the scenario to the questionnaire.

<CENTER>
  <A href="images/scenarios.png">
    <IMG src="images/scenarios.png" width=640>
  </A>
</CENTER>

Here is what you need to know about scenarios:

- The scenarios are saved from the [**WebTester**](/questionnaire-designer/testing/testing-your-questionnaire-with-the-online-tester/).
- There can be multiple scenarios for the same questionnaire.
- A scenario doesn't have to cover all questions in the questionnaire, but may
be incomplete, for example, a scenario may cover just the first section or two.
- A scenario may become **no longer applicable**. This can be when the changes
in the questionnaire were significant (for example question type has changed)
and the recorded scenario no longer applies to the new version. In this case an
attempt to start a scenario will result in a message "*Interview data can't be
applied to new version of questionnaire. We apply some data only.*". This means
that only some values saved in the scenario were loaded, up to the point where
a saved value no longer 'fits' the modified questionnaire. In rare cases this
may result in no data loaded from the scenario (a blank questionnaire will
open).
- Scenarios are **not copied** when you copy a section or the whole
questionnaire into another questionnaire.
- To edit a scenario, you need to run it first, then make any changes
interactively in the WebTester, then save under the same or a different scenario
name. One **may not** edit the scenario steps directly, but only view them.
- Saving a scenario requires **edit permission** for accessing the
questionnaire (you have them if you own the questionnaire or it was shared with
your account in `edit` sharing mode). If you don't have edit permissions for the
questionnaire, an attempt to save a scenario will result in a
*"You have no access to the questionnaire"* error message.
- Creation and changes to scenarios are **not** reflected in the questionnaire
history.
- Language switches are ***not*** saved in the scenario: You can record the
scenario in any language, then replay in any other language (by changing the
default language of the questionnaire).
- A scenario may involve input that results in validation errors. This is
actually one of the objectives of scenarios, to make sure the validations work!
- A scenario saves all the steps, how the answers were applied to the
questionnaire, not just the resulting final state! This is obvious in the
following illustration, representing a recording of the scenario steps (notice
how the household size question *(hhsize)* was first answered with value `5`,
then changed to `3`):

<CENTER>
  <A href="images/scenarios3.png">
    <IMG src="images/scenarios3.png" width=640>
  </A>
</CENTER>
