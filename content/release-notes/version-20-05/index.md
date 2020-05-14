+++
title = "Version 20.05"
keywords = ["20.05"]
date = 2020-05-13T01:01:01Z
lastmod = 2020-05-13T01:01:01Z
+++


Survey Solutions v20.05 adds the following useful features:

- Partial synchronization of interviews.
- Two-factor authentication (2FA).
- Filtering of interviews by identifying fields.
- Split of the HQ list of interviews into processed and in-progress
- Other changes.

### Partial synchronization of interviews.

Earlier versions of Survey Solutions were sending only completed 
interviews from the tablet to the server. A number of our users 
have described partial synchronization of the interviews as 
extremely important for their surveys. Partial synchronization 
allows sending the information from the tablet to the server, 
while keeping the interview data on the tablet.  This has numerous 
advantages, among which:

- *Increased reliability*: if the tablet is lost or damaged, the 
server will contain the last state of the interview when it was 
synchronized, and the interviewer will be able to resume from that 
state on a different device;
- *Better interaction with the supervisor*, who can now start 
reviewing (and commenting) the beginning of the interview even 
before it is fully realized.

But partial synchronization comes at a cost of higher traffic, 
which may or may not be desirable. Hence the partial synchronization 
is an opt-in. Whether to enable partial synchronization is up to
the administrator of the server, who can enable it in the server's
settings.

### Two-factor authentication (2FA)

Two-factor authentication enhances security of the system by 
requiring an additional method of confirming the identity of 
the user. Compared to simple password-based systems, this 
method relies on confirmation on two channels: 

1. Something the user knows (password);
2. Something the user has (security token).

The security token is typically implemented as a software 
running on the user’s phone with a wide range of 
implementations for various platforms (Android, iOS, Windows, 
Windows Mobile, etc).

Any user of Survey Solutions server can now enable the 
two-factor authentication for his (her) account in the account 
profile.

Read more about how to set up and use the two factor 
authentication in 
[this article](/headquarters/accounts/two-factor-authentication/).

### Filtering interviews by identifying questions

The list of interviews can contain many thousands of interviews 
in the large surveys. Locating specific interviews may be 
overwhelming. That’s why we have introduced the filter for 
interviews based on the identifying questions (defined by the 
Designer).

To use the filters, first select the questionnaire and version 
(since the questions may differ in different questionnaires), 
then click **Questions selector** button and select the questions 
you want to be part of the filter and confirm your selection 
with **OK** button. Then specify the values you want to be used 
to filter the interviews, for example, only interviews from a 
particular enumeration area, state, or phone number.

### Split of the HQ list of interviews into processed and in-progress

Large surveys may run for years and involve conducting millions 
of interviews. Usually, once they are approved by the Headquarters 
users, that’s the terminal state and no further actions are needed. 
The new feature allows to de-clutter the HQ-users' workspace.  By 
default now the HQ-user sees the list of the interviews that are 
not approved by the HQ yet (in all other statuses). This will 
allow them to focus on the tasks that are still in the progress. 
If necessary, all interviews may be seen at the same time by 
switching the corresponding filter setting.


### Other changes:

- The list of the interviews is now reformatted to use the space 
within the columns more efficiently, variable labels of identifying 
questions are used instead of question texts where provided, and 
the column width is automatically adjusted to accommodate more 
content when multiple identifying questions are defined in the 
questionnaire.

- Interviews that are approved by the Headquarters users are no 
longer displayed in the list of the interviews with default 
settings as they need no further processing.

- Tablets running earlier versions of the interviewer app may send 
an interview to the updated server (to 20.5) without an update, but 
will require an update when receiving rejected interviews. This is 
normal.

- Sections in disabled state were previously always hidden. Now 
they will obey their individual **hide-if-disabled** flag. Check 
your earlier designed questionnaires to verify their behavior.

- Assignments are sorted on the tablets in the natural order of 
their identifying fields: first by the first identifying fields, 
then (if there are ties) by the second identifying field, and so on. 
This should simplify locating assignments in the dashboard that are 
targeting respondents in the same or near-by areas.

- When assignments being preloaded contain a GPS question that has 
values for latitude and longitude specified will also preload the 
GPS acquisition date with a default value.

- Rejection notifications to the respondents were previously not 
delivered through the mass mail service for web interviews 
(https://forum.mysurvey.solutions/t/download-web-link/2399).


