+++
title = "Assignment Status"
keywords = ["assignment"]
date = 2026-06-01T00:00:00Z
lastmod =2026-06-01T00:00:00Z

+++

Each assignment in Survey Solutions has a status, which can be one of the
following: `OPEN`, `COMPLETED`, `CLOSED`.

The status of an assignment determines how this assignment appears in various
dialogs and what actions are available to the users handling it.


<table class="table table-striped ">
<thead>
<tr class="header"><th>Status</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><TT>OPEN</TT></td><td>An assignment is open for data collection. New interviews may be started from this assignment.</td></tr>
<tr><td><TT>COMPLETED</TT></td><td>An interviewer has indicated that no more units are available in fulfillment of this assignment.</td></tr>
<tr><td><TT>CLOSED</TT></td><td>A supervisory staff has agreed that the assignment can be closed.</td></tr>
</table>

Every assignment demands a certain number of interviews to be delivered, which
can be 1, some finite number or an infinite number of interviews. An assignment
that is in the status `OPEN` is an assignment that demands the outstanding
interviews to be delivered. Every started interview reduces the demand by 1,
and the assignment disappears automatically when the interviewer starts the
requested number of interviews.

An interviewer, however, may find herself in an environment when there are no
suitable units (households, persons, enterprises, etc) to fulfill the demand
of the assignment. This is most logical for assignments demanding infinite
amount of interviews, but may occur for the finite assignments as well.

When this happens it is important to signal to the supervisory staff that the
assignment is completed with insufficient number of units surveyed. An
interviewer does that by manually declaring an assignment as `COMPLETED`. The
cards corresponding to the assignments in the status `COMPLETED` disappear from
their dashboards automatically after a successful synchronization. Until the
synchronization succeeds, the interviewer may change her mind and reopen an
assignment (for example, if she discovers other units available for enumeration
already after completing the assignment).

Assignments in the status `COMPLETED` need to be reviewed by the supervisory
staff, who can agree and change the status to `CLOSED` or disagree and restore
the `OPEN` status.

`CLOSED` status is terminal. No user is expected to do anything with the
assignments in this status. Though the HQ-staff have the capacity to re-open
such assignments.

Assignments are sent to the interviewers only if they have both:
- outstanding interviews to be collected, and
- status `OPEN`.

Thus assignments will not be sent to the interviewers (and will be taken away
  from their dashboards) if the number of interviews remaining to be collected
  is zero or the status is anything else than `OPEN`.

Headquarters users don't have to wait for the supervisors to act, and can
change the assignment status from `COMPLETED` to `CLOSED` if they feel they
have sufficient information to do so. In particular, this information can be
present in the optional comment left by the interviewer when completing the
assignment.

If the supervisor can't make the decision immediately and wants to prevent the
interviewer from reopening the assignment (and to collect more interviews) it
is possible by reassigning the completed assignment to herself.

Note that the status of an assignment is completely independent from its
archival status (whether it is active or archived). If an assignment in any
status is archived, and subsequently un-archived, it appears active in the same
status as before the archival.

The `Assignments` page at the HQ has a filter for filtering assignments by
status. The user (commonly HQ or a supervisor) may opt to see assignments in
any status or assignments in a particular status. This helps to focus on the
assignments that still need to be fulfilled, or acted upon.

Supervisors and HQ users have a capacity to `REOPEN` a closed assignment as
well, if they discover other eligible units already after that assignment
has been closed.

An earlier available action to `Close` an assignment by revising its size to the
number of collected interviews (introduced in version 19.10 of Survey
  Solutions) remains available, but is renamed to `Downsize` in version 26.06.

Survey Solutions APIs provide specific functionality to obtain the current
status of an assignment or to change this status if needed for integration with
other systems.

A user in the role administrator may decide to restrict the ability of other
users (supervisors, interviewers) to modify assignments' statuses. For this she
can uncheck the checkboxes in the workspace settings (at the *Devices* tab):

- "*Allow supervisors to change assignment statuses*"
- "*Allow interviewers to change assignment statuses*".

Note that both actions are available (checked) by default. Users updating from
earlier versions need to review this functionality and decide whether it is
desirable to have it or disable it in the workspace settings to maintain
work flows that were set up earlier.
