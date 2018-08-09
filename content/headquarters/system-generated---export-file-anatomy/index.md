+++
title = "System Generated - Export File Anatomy"
keywords = ["interview comments"," interview actions","InterviewId","comment"]
date = 2016-09-23T15:48:41Z
lastmod = 2016-09-23T15:48:41Z
aliases = ["/customer/portal/articles/2579821-system-generated---export-file-anatomy","/customer/en/portal/articles/2579821-system-generated---export-file-anatomy","/customer/portal/articles/2579821","/customer/en/portal/articles/2579821"]

+++

Interview Comments   
---------------------

Comments added to interviews or individual questions by users during the
interview process are exported in a file named interview\_comments.  
   
The file contains the following information:  
  
1. <span style="color:#FF0000;">Order.</span> The order of comments made
per each survey case.  
2. <span style="color:#DAA520;">Originator.</span> The username of the
individual that has made the comment.  
3. <span style="color:#800080;">Role.</span> The assigned role of the
individual, which can be Interviewer, Supervisor, Administrator or
Headquarters.  
4. <span style="color:#008000;">Date/Time.</span> Time stamp for when
the comment was made. Records the date and time of the action—if action
occurs on the tablet (e.g. Set interview as “Complete”) then the
timestamp recorded will be based on the tablet date/time settings. On
other hand, if action occurs on the server (e.g. Set Interview as
“Approved by Supervisor”), then the timestamp recorded will be based on
the server date/time settings. If the World Bank hosts the server, the
date/time will be in UTC (Coordinated Universal Time).  
5. <span style="color:#0000FF;">Variable.</span> The variable name of
the question that the comment corresponds to.  
6. <span style="color:#DAA520;">Roster. </span>If the question is in a
roster, the roster id will be shown here.  
7. <span style="color:#FF0000;">Interview Id. </span>The survey case
identification number.  
8. <span style="color:#008000;">Id 1, 2, 3.</span> Id 1 is the row code
for the item listed in the parent roster (roster id is shown in the
Roster column). Id 2 is the row code of the item listed in the child
roster, and Id 3 corresponds to the row code of the item listed in
grandchild roster. This means that if these fields are blank, the
question is at the questionnaire level.  
9. <span style="color:#0000FF;">Comment. </span>The text of the comment.

  
  
{{< imgproc "images/676787.png" Fit "800x600" />}}

Interview Actions 
------------------

<span style="line-height: 20.8px;">Simple paradata for each survey case
is exported in a file named interview\_actions. The file is structured
as follows:</span>

1.  <span style="color: rgb(0, 0, 255);">*InterviewId.*</span> Unique
    identification number of the survey case, which is assigned by the
    system automatically.  
2.  <span style="color: rgb(218, 165, 32);">*Action.* </span>The action
    taken.
3.  <span style="color: rgb(255, 0, 0);">*Originator.* </span>The
    username of the individual that has taken the <span
    class="underline">action</span>.  
4.  <span style="color: rgb(128, 0, 128);">*Role.*</span> The assigned
    role of the individual, which can be Interviewer, Supervisor,
    Administrator or Headquarters.
5.  <span style="color: rgb(0, 128, 0);">*Date/Time.*</span> Timestamp
    of the action, Records the date and time of the action—if action
    occurs on the tablet (e.g. Set interview as “Complete”) then the
    timestamp recorded will be based on the tablet date/time settings.
    On other hand, if action occurs on the server (e.g. Set Interview as
    “Approved by Supervisor”), then the timestamp recorded will be based
    on the server date/time settings. If the World Bank hosts the
    server, the date/time will be in UTC (Coordinated Universal
    Time).{{< imgproc "images/676791.png" Fit "800x600" />}}

 Description
------------

This file provides a listing of variables contained in each of the
exported data files. This may be useful in complex questionnaires with
multiple rosters, where it may not be obvious where a particular
variable will be placed in export, so this file can be used for
reference.  
  
{{< imgproc "images/773032.png" Fit "800x600" />}}
