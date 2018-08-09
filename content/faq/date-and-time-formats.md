+++
title = "Date and Time formats"
keywords = ["Date Time Format"]
date = 2018-06-27T16:18:16Z
lastmod = 2018-06-27T16:18:16Z
aliases = ["/customer/portal/articles/2946079-date-and-time-formats"]

+++

This document uses the following notation to describe the date and time
formats:

- Y - year
- M - month
- D - day
- h - hour
- m - minute
- s - second
- T - exactly letter T
- {AM|PM} - one of the two time specifications AM or PM.
- Mon - month abbreviated to 3 letters
- Month - full month name.
- DOW - day of week (such as Monday, Tuesday, etc).
- TZ - timezone

Exported data
-------------

Survey Solutions writes date and time as strings in exported data files.
Here is how:  
  
In the main data file:

- Date questions: YYYY-MM-DD
- Timestamp (date question with the current time option):
    YYYY-MM-DDThh:mm:ss in the device timezone.
- Timestamp in GPS location question: YYYY-MM-DDThh:mm:ss in UTC
    timezone.
- Calculated variable of type DateTime: YYYY-MM-DDThh:mm:ss without
    timezone adjustment.

In the *interview\_actions* file:

- Date: YYYY-MM-DD
- Time: hh:mm:ss in UTC time zone

In the *interview\_comments* file:

- Date: MM/DD/YYYY
- Time: hh:mm:ss in UTC time zone

In the survey paradata file:

- Event timestamp: YYYY-MM-DDThh:mm:ss based on the server or tablet
    clock (as applicable\*), adjusted for UTC time zone
- Answer to the date question: YYYY-MM-DD
- Answer to the date question with the current time option: YYYY-MM-DD
    hh:mm:ss based on the server or tablet clock (as applicable\*) no
    adjustment for time zone.
- Variable of DateTime type recalculated: M/D/YYYY h:m:s{AM|PM}, no
    adjustment for time zone.

In *export\_\_readme.txt* file

- DOW, Month DD, YYYY

In *interviews.tab* file (web links for assignments):

- Date questions: YYYY-MM-DDT00:00:00
- Timestamp (date question with the current time option):
    YYYY-MM-DDThh:mm:ss

Tablet clock is used for events registered on the tablet, such as
answering an interviewer's question in CAPI mode interviews. Server
clock is used for events registered on the server, such as rejection of
interview by a supervisor.

Interface
---------

Survey Solutions displays date and time information in various places in
the interface. Here is how:

- In the Questionnaires list (imported on, modified on, and created on
    fields) and Assignments list (updated on and created on fields): Mon
    DD, YYYY hh:mm in the current user timezone.
- In the Interview status history dialog accessed from interview
    details: Mon DD, YYYY hh:mm in the UTC timezone.
- In the Interview status history dialog accessed from interview
    context menu: Mon DD, YYYY hh:mm in the current user timezone.
- Timestamp in identifying questions: YYYY-MM-DD hh:mm:ss recorded in
    the current user timezone; displayed without further timezone
    adjustment for users in other timezones.
- Timestamp in interviewer's questions: YYYY-MM-DD hh:mm:ss recorded
    and displayed in the current user's timezone. Other users will see
    it adjusted for their timezones.
- On completion of web interviews: M/D/YYYY h:m:s{AM|PM}
- In audit log: YYYY-MM-DD hh:mm:ss -TZ timestamp of the server event
    using server clock in server time zone with explicit specification
    of time difference vs UTC time.
