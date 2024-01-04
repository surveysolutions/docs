+++
title = "Dashboard Card"
keywords = ["dashboard","card"]
date = 2023-06-07T00:00:00Z
lastmod = 2024-01-03T00:00:00Z
+++

In the Interviewer and Supervisor Apps each interview/assignment is presented in
a form of a card in the dashboard (or
[map dashboard](/interviewer/app/map-dashboard/)).

<CENTER><IMG src="images/interview_card_annotated.png" width=775></CENTER>

1. The card tab color corresponds to the interview status. Specifically, the
interviewer will see the cards with colored tabs:

    - <FONT color="2A81CB">**blue**</FONT>: for interviews in status `Started`;
    - <FONT color="E4512B">**red**</FONT>: for interviews in status `Rejected`;
    - <FONT color="1F9500">**green**</FONT>: for interviews in status `Completed`;
    - <FONT color="A371F7">**purple**</FONT>: for assignments.

2. Interview number (not present for cards corresponding to assignments).
3. Assignment number.
4. Questionnaire title and version.
5. Action menu.
6. Status change message (status, date/time, message).
7. Calendar event (date/time comment).
8. Identifying fields (up to 3), may be absent.
9. Action button (may also be `OPEN`, `REOPEN`, `CREATE NEW INTERVIEW`).
10. Button to show location in an external application. (only if there is an
answered identifying geolocation-type question for this interview or assignment,
which is always the case for all the cards shown in the map dashboard carousel).

The action menu (5) contains actions that are available, but deemed to be not
main. For example, for a started interview the action menu may contain actions
to discard the interview, or add a calendar event, but the main action button
at the bottom of the card is `OPEN` since this is the most logical next action
for the interviewer.

Tapping on the card unfolds it (if it was folded). Unfolding the card reveals
some elements that may be hidden in the folded presentation: calendar event
message, identifying fields (if more than 3 were defined), etc. Tapping on an
unfolded card folds it again.
