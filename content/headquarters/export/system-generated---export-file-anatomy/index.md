+++
title = "System generated files"
keywords = ["export, action, status, errors"]
date = 2018-12-12T12:12:12Z
lastmod = 2018-12-12T12:12:12Z


+++

Every archive of data exported from the Survey Solutions Headquarters 
contains among the user data the following system-generated data files:

- interview__actions;
- interview__comments;
- interview__diagnostics;
- interview__errors.

The data files are also accompanied by an automatically generated file
named <TT>export\_\_readme.txt</TT>. This file documents which version of
the Survey Solutions software was used to export the data, when the 
export was done, and placement of variables into the data files. Here is
an <A href="resources/export__readme.txt">example</A> of such a file that
may be accompanying, e.g. an agricultural survey.

The contents of the system-generated data files is described in the table below:

<TABLE border=1>

<TR bgcolor="PowderBlue"><TD colspan=4><H2><a id="interview__actions">interview__actions</H2></TD></TR>

<TR>
  <TH width=140>Variable</TH>
  <TH width=60>Type</TH>
  <TH width=300>Meaning</TH>
  <TH width=200>Example</TH>
</TR>

<TR>
  <TD><TT>interview__key</TT></TD>
  <TD>string</TD>
  <TD>Interview key (identifier in XX-XX-XX-XX format)</TD>
  <TD>12-34-56-78</TD>
</TR>

<TR>
  <TD><TT>interview__id</TT></TD>
  <TD>string</TD>
  <TD>Unique 32-character long identifier of the interview</TD>
  <TD>5b3c8288289646699580e16f5d1b6d1e</TD>
</TR>

<TR>
  <TD><TT>date</TT></TD>
  <TD>string</TD>
  <TD>Date when the action was taken</TD>
  <TD>2018-12-12</TD>
</TR>

<TR>
  <TD><TT>time</TT></TD>
  <TD>string</TD>
  <TD>Time when the action was taken</TD>
  <TD>10:11:12</TD>
</TR>

<TR>
  <TD><TT>action</TT></TD>
  <TD>numeric</TD>
  <TD>Type of action taken. See <A href="#coding_action">action codes</A>.</TD>
  <TD>12</TD>
</TR>

<TR>
  <TD><TT>originator</TT></TD>
  <TD>string</TD>
  <TD>Login name of the person performing the action</TD>
  <TD>JohnSup</TD>
</TR>

<TR>
  <TD><TT>role</TT></TD>
  <TD><FONT color="magenta">string</FONT></TD>
  <TD>System role of the person performing the action</TD>
  <TD>Supervisor</TD>
</TR>

<TR>
  <TD><TT>responsible_name</TT></TD>
  <TD>string</TD>
  <TD>Login name of the person now responsible for the interview</TD>
  <TD>JackInt</TD>
</TR>

<TR>
  <TD><TT>responsible_role</TT></TD>
  <TD><FONT color="magenta">string</FONT></TD>
  <TD>System role of the person now responsible for the interview</TD>
  <TD>Interviewer</TD>
</TR>

<TR bgcolor="PowderBlue">
  <TD colspan=4><H2><a id="interview__comments">interview__comments</H2></TD>
</TR>

<TR>
  <TH>Variable</TH>
  <TH>Type</TH>
  <TH>Meaning</TH>
  <TH>Example</TH>
</TR>

<TR>
  <TD><TT>interview__key</TT></TD>
  <TD>string</TD>
  <TD>Interview key (identifier in XX-XX-XX-XX format)</TD>
  <TD>12-34-56-78</TD>
</TR>

<TR>
  <TD><TT>interview__id</TT></TD>
  <TD>string</TD>
  <TD>Unique 32-character long identifier of the interview</TD>
  <TD>5b3c8288289646699580e16f5d1b6d1e</TD>
</TR>

<TR>
  <TD><TT>roster</TT></TD>
  <TD>\*string</TD>
  <TD>Name of the roster containing the variable</TD>
  <TD>members</TD>
</TR>

<TR>
  <TD><TT>id1</TT></TD>
  <TD><FONT color="red">\*string</FONT></TD>
  <TD>Roster ID of the 1st level of nesting</TD>
  <TD>7</TD>
</TR>

<TR>
  <TD><TT>id2</TT></TD>
  <TD><FONT color="red">\*string</FONT></TD>
  <TD>Roster ID of the 2nd level of nesting</TD>
  <TD>7</TD>
</TR>

<TR>
  <TD><TT>id3</TT></TD>
  <TD><FONT color="red">\*string</FONT></TD>
  <TD>Roster ID of the 3rd level of nesting</TD>
  <TD>7</TD>
</TR>

<TR>
  <TD><TT>id4</TT></TD>
  <TD><FONT color="red">\*string</FONT></TD>
  <TD>Roster ID of the 4th level of nesting</TD>
  <TD>7</TD>
</TR>

<TR>
  <TD><TT>variable</TT></TD>
  <TD>string</TD>
  <TD>Variable name for the commented question</TD>
  <TD>age</TD>
</TR>

<TR>
  <TD><TT>order</TT></TD>
  <TD>numeric</TD>
  <TD>Sequential order of the comment</TD>
  <TD>1</TD>
</TR>

<TR>
  <TD><TT>date</TT></TD>
  <TD>string</TD>
  <TD>Date when the comment was left</TD>
  <TD><FONT color="red">12/31/2018</FONT></TD>
</TR>

<TR>
  <TD><TT>time</TT></TD>
  <TD>string</TD>
  <TD>Time when the comment was left</TD>
  <TD>12:34:56</TD>
</TR>

<TR>
  <TD><TT>originator</TT></TD>
  <TD>string</TD>
  <TD>Login name of the person leaving the comment</TD>
  <TD>JohnSup</TD>
</TR>

<TR>
  <TD><TT>role</TT></TD>
  <TD><FONT color="magenta">string</FONT></TD>
  <TD>System role of the person leaving the comment</TD>
  <TD>Supervisor</TD>
</TR>

<TR>
  <TD><TT>comment</TT></TD>
  <TD>string</TD>
  <TD>Text of the comment</TD>
  <TD>Age is confirmed by document</TD>
</TR>

<TR bgcolor="PowderBlue">
  <TD colspan=4><H2><a id="interview__diagnostics">interview__diagnostics</H2></TD>
</TR>

<TR>
  <TH>Variable</TH>
  <TH>Type</TH>
  <TH>Meaning</TH>
  <TH>Example</TH>
</TR>

<TR>
  <TD><TT>interview\_\_key</TT></TD>
  <TD>string</TD>
  <TD>Interview key (identifier in XX-XX-XX-XX format)</TD>
  <TD>12-34-56-78</TD>
</TR>

<TR>
  <TD><TT>interview\_\_id</TT></TD>
  <TD>string</TD>
  <TD>Unique 32-character long identifier of the interview</TD>
  <TD>5b3c8288289646699580e16f5d1b6d1e</TD>
</TR>

<TR>
  <TD><TT>interview\_\_status</TT></TD>
  <TD>numeric</TD>
  <TD>Last status of interview. See <A href="#coding_status">status codes</A>.</TD>
  <TD>100</TD>
</TR>

<TR>
  <TD><TT>responsible</TT></TD>
  <TD>string</TD>
  <TD>Last responsible person</TD>
  <TD>JohnSup</TD>
</TR>

<TR>
  <TD><TT>interviewers</TT></TD>
  <TD><FONT color="red">string</FONT></TD>
  <TD>Number of interviewers who worked on this interview</TD>
  <TD>1</TD>
</TR>
<TR>
  <TD><TT>rejections\_\_sup</TT></TD>
  <TD><FONT color="red">string</FONT></TD>
  <TD>How many times this interview was rejected by supervisors</TD>
  <TD>0</TD>
</TR>
<TR>
  <TD><TT>rejections\_\_hq</TT></TD>
  <TD><FONT color="red">string</FONT></TD>
  <TD>How many times this interview was rejected by HQ</TD>
  <TD>1</TD>
</TR>
<TR>
  <TD><TT>entities\_\_errors</TT></TD>
  <TD><FONT color="red">string</FONT></TD>
  <TD>Number of questions and static texts with errors</TD>
  <TD>10</TD>
</TR>
<TR>
  <TD><TT>interview\_\_duration</TT></TD>
  <TD>string</TD>
  <TD>Active time it took to complete the interview, DD.HH:MM:SS</TD>
  <TD>00.05:28:39</TD>
</TR>

<TR bgcolor="PowderBlue">
  <TD colspan=4><H2><a id="interview__errors">interview__errors</H2></TD>
</TR>

<TR>
  <TH>Variable</TH>
  <TH>Type</TH>
  <TH>Meaning</TH>
  <TH>Example</TH>
</TR>

<TR>
  <TD><TT>interview\_\_key</TT></TD>
  <TD>string</TD>
  <TD>Interview key (identifier in XX-XX-XX-XX format)</TD>
  <TD>12-34-56-78</TD>
</TR>

<TR>
  <TD><TT>interview\_\_id</TT></TD>
  <TD>string</TD>
  <TD>Unique 32-character long identifier of the interview</TD>
  <TD>5b3c8288289646699580e16f5d1b6d1e</TD>
</TR>

<TR>
  <TD><TT>roster</TT></TD>
  <TD>\*string</TD>
  <TD>Name of the roster containing the variable</TD>
  <TD>members</TD>
</TR>

<TR>
  <TD><TT>id1</TT></TD>
  <TD><FONT color="red">\*string</FONT></TD>
  <TD>Roster ID of the 1st level of nesting</TD>
  <TD>7</TD>
</TR>

<TR>
  <TD><TT>id2</TT></TD>
  <TD><FONT color="red">\*string</FONT></TD>
  <TD>Roster ID of the 2nd level of nesting</TD>
  <TD>7</TD>
</TR>

<TR>
  <TD><TT>id3</TT></TD>
  <TD><FONT color="red">\*string</FONT></TD>
  <TD>Roster ID of the 3rd level of nesting</TD>
  <TD>7</TD>
</TR>

<TR>
  <TD><TT>id4</TT></TD>
  <TD><FONT color="red">\*string</FONT></TD>
  <TD>Roster ID of the 4th level of nesting</TD>
  <TD>7</TD>
</TR>

<TR>
  <TD><TT>variable</TT></TD>
  <TD>string</TD>
  <TD>Variable name for the question, where validation error occurred</TD>
  <TD>age</TD>
</TR>

<TR>
  <TD><TT>type</TT></TD>
  <TD><FONT color="magenta">string</FONT></TD>
  <TD>Type of the variable where the validation error occurred</TD>
  <TD><FONT color="red">Question</FONT></TD>
</TR>

<TR>
  <TD><TT>message__number</TT></TD>
  <TD>numeric</TD>
  <TD>Numeric index of the validation rule that has fired</TD>
  <TD>1</TD>
</TR>

<TR>
  <TD><TT>message</TT></TD>
  <TD>string</TD>
  <TD>Text of the error message</TD>
  <TD>Age may not be negative</TD>
</TR>


</TABLE>

Fields indicated with a star (\*) are optional and present only if the questionnaire template contains rosters.

Where a value is shown in <FONT color="red">red</FONT> or <FONT color="magenta">magenta</FONT> color, this may be (and likely will be) changed in the upcoming releases.



<TABLE border=1>

<TR bgcolor="PowderBlue"><TD colspan=2><A id="coding_action">Coding of actions
<TR bgcolor="Orange">
  <TH width=80>Code</TH>
  <TH width=200>Meaning</TH>
</TR>
<TR><TD>0</TD><TD>SupervisorAssigned</TD></TR>
<TR><TD>1</TD><TD>InterviewerAssigned</TD></TR>
<TR><TD>2</TD><TD>FirstAnswerSet</TD></TR>
<TR><TD>3</TD><TD>Completed</TD></TR>
<TR><TD>4</TD><TD>Restarted</TD></TR>
<TR><TD>5</TD><TD>ApprovedBySupervisor</TD></TR>
<TR><TD>6</TD><TD>ApprovedByHeadquarter</TD></TR>
<TR><TD>7</TD><TD>RejectedBySupervisor</TD></TR>
<TR><TD>8</TD><TD>RejectedByHeadquarter</TD></TR>
<TR><TD>9</TD><TD>Deleted</TD></TR>
<TR><TD>10</TD><TD>Restored</TD></TR>
<TR><TD>11</TD><TD>UnapprovedByHeadquarter</TD></TR>
<TR><TD>12</TD><TD>Created</TD></TR>
<TR><TD>13</TD><TD>InterviewReceivedByTablet</TD></TR>
<TR><TD>14</TD><TD>Resumed</TD></TR>
<TR><TD>15</TD><TD>Paused</TD></TR>
<TR><TD>16</TD><TD>TranslationSwitched</TD></TR>
<TR><TD>17</TD><TD>OpenedBySupervisor</TD></TR>
<TR><TD>18</TD><TD>ClosedBySupervisor</TD></TR>
<TR bgcolor="PowderBlue"><TD colspan=2><A id="coding_status">Coding of the interview status
<TR bgcolor="Orange">
  <TH width=80>Code</TH>
  <TH width=200>Meaning</TH>
</TR>
<TR><TD>-1</TD><TD>Deleted</TD></TR>
<TR><TD>0</TD><TD>Restored</TD></TR>
<TR><TD>20</TD><TD>Created</TD></TR>
<TR><TD>40</TD><TD>SupervisorAssigned</TD></TR>
<TR><TD>60</TD><TD>InterviewerAssigned</TD></TR>
<TR><TD>65</TD><TD>RejectedBySupervisor</TD></TR>
<TR><TD>80</TD><TD>ReadyForInterview</TD></TR>
<TR><TD>85</TD><TD>SentToCapi</TD></TR>
<TR><TD>95</TD><TD>Restarted</TD></TR>
<TR><TD>100</TD><TD>Completed</TD></TR>
<TR><TD>120</TD><TD>ApprovedBySupervisor</TD></TR>
<TR><TD>125</TD><TD>RejectedByHeadquarters</TD></TR>
<TR><TD>130</TD><TD>ApprovedByHeadquarters</TD></TR>
</TABLE>


