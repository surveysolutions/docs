+++
title = "Assignments"
keywords = [""]
date = 2017-07-24T22:43:14Z
lastmod = 2017-07-24T22:43:14Z
aliases = ["/customer/portal/articles/2847199-assignments","/customer/en/portal/articles/2847199-assignments","/customer/portal/articles/2847199","/customer/en/portal/articles/2847199"]

+++

Survey Solutions system is based on the hierarchy of users which perform
their responsibilities based on the commands of superior users.  
  
Every survey starts by a headquarters user deciding on the questionnaire
(importing the questionnaire from the Designer to the data server) and
making assignments to supervisors, which can in turn assign to
individual interviewers.  
  
Assignment are orders to subordinate users to take part in the survey.
Not only they are directed at a particular user, but most importantly
the assignments determine the area of responsibility of that user. So
that in the system it is clear that not only interviewers A and B are
collecting, say census data, but also that interviewer A is responsible
for enumeration areas 1,2,3 and interviewer B for 4,5,6. Of course the
responsibilities can be divided not by enumeration areas, but by some
other attributes or address components: streets or villages for
household surveys, facilities for patient surveys, markets for price
surveys, etc.  
  
An assignment is thus comprised of several obligatory components:  
1) survey questionnaire - which survey must be conducted, which
questionnaire to be used?  
2) responsible person - who must perform this task?  
3) identifying information - where the interviewers should collect the
response?  
4) number of interviews - how many interviews must be collected?  
  
The first attribute, survey name never changes: from the time the
assignment is created for a particular survey, it stays unchanged
throughout the circulation of it in the system.  
  
The person responsible for an assignment may change. The original
responsible may be changed to a different person, for example the
supervisor may pass an assignment to one of her interviewers, or
re-assign an assignment to a different interviewer.  
  
With regards to the third attribute, the identifying information, we can
think of assignments as precise or imprecise. Precise assignments have
all their identifying questions answered, while imprecise assignments
have only some, but not all identifying questions answered. It is
typical for an imprecise assignment to result in multiple interviews. In
fact this is very natural for survey planners to think in these
categories: how many individual households to interview in a particular
enumeration area, or how many patients in a particular health facility,
etc. This number (capacity, quota) may be known, such as 12 households
from enumeration area, or unknown, such as all households located
between N.Lincoln Ave, N.Halstedt St, and W.Webster Ave in Chicago,
IL.  
  
Of course, the addressing system is different in different countries and
for different contexts. But once the questionnaire is designed, it does
have one or more identifying questions. When an assignment is made, the
headquarters user decides, which questions he can answer, and which ones
he leaves unanswered. It becomes the responsibility of the interviewer
to fill out all the identifying questions that were not assigned values
by the headquarters user that has created the assignment.  
  
For example, if the assignment is to interview 16 households in the city
block located between N.Lincoln Ave, N.Halstedt St, and W.Webster Ave in
Chicago, IL, then the interviewer may be expected to fill out the fields
of the street number, floor, and apartment number as well as the name of
the household head. Once this information is entered by an interviewer,
it can no longer be changed.  
  
For scenarios where the number of interviews is unknown, an infinite
limit may be imposed by setting the number of interviews to -1 (negative
one). In this case the interviewer will be able to create as many new
interviews as necessary. Both the number of conducted interviews and the
number of remaining interviews in an assignment are displayed at
interviewer's dashboard. The limit can be revised (increased or
decreased) by the headquarters users. During batch upload of interviews,
this limit is placed into the variable \_quantity. If this variable is
not specified, 1 is assumed. The person responsible for the assignment
may be specified in the variable \_responsible (accepts login names of
supervisors or interviewers).  
  
**Other attributes of an assignment**  
I addition to the above attributes, Survey Solutions assigns a unique
identifier to each assignment, tracks the date of the creation and last
modification of an assignment. The progress of completion is reflected
with:

-   number of submitted interviews and total interviews for the
    supervisors/headquarters users, and 
-   number of created interviews and number of remaining interviews for
    the interviewers.

**Difference between an assignment and interview.**  
It is important to recognize the difference between an assignment and an
interview. An assignment is a different entity, and is being tracked in
Survey Solutions separately from interviews data. An assignment is thus
a permission to instantiate interviews, all of them will be marked by
the identifying information contained in the original assignment.   
  
Recall from the basic description of the work of a supervisor is that
his two main tasks are managing of the work load of his interviewers and
performing quality control of collected interviews. The supervisor is
doing them by distributing the assignments (obtained from Headquarters)
and by doing quality control (verifying answers, exchanging comments) of
the interviews.  
  
Note that assignments are not reflected in the reports on interviews,
and they may not be opened for inspection. An assignment may be deleted
by the headquarters users, in which case the corresponding card will be
removed from the interviewer's dashboard after synchronization. For any
incompleted assignments,any interviews that have been already sent to
the server by an interviewer are not deleted when an incompleted
assignment is deleted, but after synchronization the interviewer will no
longer have a possibility to collect data based on such assignment.  
  
**Transition notes**  
Earlier versions of Survey Solutions had two distinct modes of data
collection: Sample mode and Census mode.   
  
For users that conducted their surveys in the sample mode, there is
little to no distinction with the earlier operation. The same sample
preloading files may be used with newer versions, but there is no need
(or in fact a possibility) to specify any mode during the questionnaire
import.  
  
For users that conducted their surveys in the census mode, there is a
change. The change is that the interviewers cannot start working without
prior having an assignment, and hence a headquarters user must upload an
assignments file with two columns \_responsible and \_quantity , where
\_responsible contains names of all interviewers and \_quantity is set
to -1 (negative one) for each of them. This completely replicates the
earlier mode, but the survey planner may decide to involve only part of
the interviewers in a particular survey, give them some quotas or
partial identifying information for their targets, or otherwise make use
of the new powerful assignments management features of Survey Solutions.
