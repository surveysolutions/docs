+++
title = "Excessive interviews"
keywords = ["duplicate assignments interviews"]
date = 2018-01-26T21:12:02Z
lastmod = 2018-01-26T21:12:02Z
aliases = ["/customer/portal/articles/2918252-excessive-interviews","/customer/en/portal/articles/2918252-excessive-interviews","/customer/portal/articles/2918252","/customer/en/portal/articles/2918252"]

+++

Situation
=========

Every interview in Survey Solutions is created based on an assignment,
which dictates how many interviews (often just one) must be
collected.  
  
In some cases users receive more interviews at the server then the
assignment required.  
  
This corresponds to values in the column "Count" are bigger than in the
column "Size" in the table showing assignments.

Explanation
===========

The reason for this is the following scenario:

1. Supervisor gives assignment A to interviewer X;
2. Interviewer X picks assignment A (synchronizes) and proceeds to the
    enumeration area;
3. The supervisor changes her mind and re-assigns assignment A to
    interviewer Y;
4. Interviewer Y picks assignment A (synchronizes) and proceeds to the
    enumeration area;

At this moment both interviewers X and Y have assignment A on their
tablet and have the possibility to start an interview from it; note that
neither X nor Y know anything about the parallel copy of the assignment,
at should normally proceed to fulfill it because it appears on their
dashboards.

1. Interviewers X and Y complete their copy of the interview (in any
    order);
2. Interviewers X and Y send completed interviews to the server
    (synchronize in any order);

At this moment excessive interviews are visible in the server.

Recommendations
===============

1. Minimize re-assignments. It is better to give smaller portions of
    work to interviewers and give more as they complete, rather then
    give everything and re-assign later. Assignments that interviewers
    have never received can be safely assigned to any other interviewer.
2. If re-assignment is unavoidable, then before making a re-assignment
    check if the assignment has been received. If it has been already
    received by the interviewer X then re-assignment can potentially
    result in excessive interviews.
3. Make the interviewer X synchronize after step \#3 in the above
    sequence. This will withdraw the assignment A from his dashboard,
    and when Interviewer Y picks it at step \#4 no other copy of the
    assignment will exist in the system.
4. If synchronization of the Survey Solutions system is not possible
    (for no network connection in the area reasons), the supervisor must
    notify the interviewer X using other means not to start the
    assignment A that he has received and specify the assignment number.
    This not started assignment A will disappear from his dashboard at
    the next successful synchronization.
5. Instruct the interviewers to listen to what the respondents are
    telling them. If they insist that they have already responded to
    this survey, it may very well be true.
