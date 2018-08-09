+++
title = "Version 5.24"
keywords = [""]
date = 2017-10-03T19:31:00Z
lastmod = 2017-10-03T19:31:00Z
aliases = ["/customer/portal/articles/2883853-version-5-24","/customer/en/portal/articles/2883853-version-5-24","/customer/portal/articles/2883853","/customer/en/portal/articles/2883853"]
+++

<span id="docs-internal-guid-023fb4fa-e3b8-6e3d-4873-9680fe53689c"><span
style="font-size: 11pt; font-family: Arial; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">Dear
Users of Survey Solutions!</span></span>

<span id="docs-internal-guid-023fb4fa-e3b8-6e3d-4873-9680fe53689c"><span
style="font-size: 11pt; font-family: Arial; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">The
September development sprint focused on refactoring and streamlining the
core components of Survey Solutions. This code optimization reduced the
synchronization time and improved stability of the many internal
processes. Â Â Â Â Â </span></span>

<span id="docs-internal-guid-023fb4fa-e3b8-6e3d-4873-9680fe53689c"><span
style="font-size: 11pt; font-family: Arial; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">Release
5.24 also contains the following features and improvements to our
software functionality:</span></span>

1.  <span
    id="docs-internal-guid-023fb4fa-e3b8-6e3d-4873-9680fe53689c"><span
    style="font-size: 11pt; background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">Export
    of calculated variables.</span></span>
2.  <span
    style="font-size: 11pt; background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">New
    appearance of the interviewsâ€™ and assignmentsâ€™ cards in the
    Interviewer app.</span>

<span id="docs-internal-guid-023fb4fa-e3bc-459e-beff-ae1a8be85ee8"><span style="font-size: 20pt; font-family: Arial; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">Export of calculated variables</span></span>
=======================================================================================================================================================================================================================================================================

<span id="docs-internal-guid-023fb4fa-e3bc-459e-beff-ae1a8be85ee8"><span
style="font-size: 11pt; font-family: Arial; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">Calculated
variables are commonly used in CAPI questionnaires to implement complex
checks or indicate to the interviewer some derived information. For
example, one may create a variable that calculates the number of
children in the household,</span></span>

<span id="docs-internal-guid-023fb4fa-e3bc-459e-beff-ae1a8be85ee8"><span
style="font-size: 11pt; font-family: Consolas; color: rgb(166, 28, 0); background-color: transparent; font-weight: 700; vertical-align: baseline; white-space: pre-wrap;">numChildren=Persons.Count(person=&gt;person.age&lt;18)</span></span>

<span id="docs-internal-guid-023fb4fa-e3bc-459e-beff-ae1a8be85ee8"><span
style="font-size: 11pt; font-family: Arial; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">and
use this variable in subsequent questions to check if the number of
children in a household Â exceeds a specific threshold.</span></span>

<span id="docs-internal-guid-023fb4fa-e3bc-459e-beff-ae1a8be85ee8"><span
style="font-size: 11pt; font-family: Arial; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">Starting
with version 5.24 of Survey Solutions these variables will be
automatically included in the export data. This is especially useful
when the variables are dependent on random sequence of values generated
by Survey Solutions, such as in the cases of random selection of
respondents in households or enterprises. </span></span>

<span id="docs-internal-guid-023fb4fa-e3bc-459e-beff-ae1a8be85ee8"><span
style="font-size: 11pt; font-family: Arial; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">No
special actions are required on the user side. After the upgrade the new
data downloads will contain the calculated variables as part of the
exported data. The variables are exported in the order they appear in
the questionnaire. </span></span>

<span id="docs-internal-guid-023fb4fa-e3bc-459e-beff-ae1a8be85ee8"><span style="font-size: 20pt; font-family: Arial; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">New appearance of the interviewsâ€™ and assignmentsâ€™ cards in the Interviewer app</span></span>
========================================================================================================================================================================================================================================================================================================================

<span id="docs-internal-guid-023fb4fa-e3bc-459e-beff-ae1a8be85ee8"><span
style="font-size: 11pt; font-family: Arial; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">The
appearance of the cards on the dashboard in the Interviewer app has been
reworked to present the information in a more consistent and usable
form. </span></span>

<span id="docs-internal-guid-023fb4fa-e3bc-459e-beff-ae1a8be85ee8"><span
style="font-size: 11pt; font-family: Arial; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;"><img src="https://lh6.googleusercontent.com/uokfV9tA-KtPsnPBqzAm_PZ-0-uyphi4ObmYUKSxtuiWc8sodiOO6XmrZ5dU6RitFl4wkTCokNoxSkGJ8knQLq7keYMaLZs5yAX5IrQOrn8Dhii-7vrBpTvUVkZOiX64U03hozNC" width="251" height="403" /></span><span
style="font-size: 11pt; font-family: Arial; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">
Â Â Â Â Â Â </span><span
style="font-size: 11pt; font-family: Arial; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;"><img src="https://lh3.googleusercontent.com/Tsnvftc09ianUUXAav4YgZFCFBBC_8HM6gLmws4uRFKQRI1jauz2Klz8nQlPpKsSfzDn8w5dQiZwM2lvecvNaJA_1E_QZMFQpTu4uz1_aP44MBaFsDgEk0S9ozaISOhEhesq-BE-" width="251" height="404" /></span></span>

Â 

<span id="docs-internal-guid-023fb4fa-e3bc-459e-beff-ae1a8be85ee8"><span
style="font-size: 11pt; font-family: Arial; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">The
information in the identifying fields is shown in a concise form, and
unfolds fully when a card is clicked. In the unfolded view the user has
access to the button to start a new interview for the assignments and
open interview for interviews. The new cards show more prominently the
reference numbers for assignments (assignment number) and interviews
(interview key), which can be mentioned in conversations between
interviewers and supervising staff.</span></span>

<span id="docs-internal-guid-023fb4fa-e3bc-459e-beff-ae1a8be85ee8"><span
style="font-size: 11pt; font-family: Arial; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">An
interview card also has its own menu, which currently provides access to
the â€œDiscardâ€ functionality to erase that interview.</span></span>
