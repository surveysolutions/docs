+++
title = "Paradata file format"
keywords = ["export, action, paradata"]
date = 2018-12-28T12:12:12Z
lastmod = 2021-08-26T12:12:12Z


+++

Every survey collected in Survey Solutions is supplemented with a paradata file. No actions are needed from the questionnaire designers or headquarters team to collect it, it is produced automatically by the Survey Solutions software.

The paradata files describe the process of data collection. They explain how the data was entered, detailing all edits, who and when undertaken them. These files may be large and most conveniently processed using specialized statistical packages, rather than general purpose tools.

The paradata is supplied in a zip archive with a tab-delimited data file inside. Each line of this file corresponds to one recorded event with attributes placed in the following columns:

<CENTER>
<TABLE border=1>

<TR bgcolor="PowderBlue"><TD colspan=4><H2><a id="paradata.tab">Columns of paradata.tab</H2></TD></TR>

<TR>
  <TH width=140><CENTER>Variable</CENTER></TH>
  <TH width=60><CENTER>Type</CENTER></TH>
  <TH width=300><CENTER>Meaning</CENTER></TH>
  <TH width=200><CENTER>Example</CENTER></TH>
</TR>

<TR>
  <TD>interview__id</TD>
  <TD><CENTER>string</CENTER></TD>
  <TD>32-hexadecimal ID  (<A href="https://en.wikipedia.org/wiki/Universally_unique_identifier">GUID</A>) of the interview affected by the event.</TD>
  <TD>75efdc0456fb4b35be4690bd19eab870</TD>
</TR>

<TR>
  <TD>order</TD>
  <TD><CENTER>numeric integer</CENTER></TD>
  <TD>Numeric sequential ID of the event (starts from 1 for every interview).</TD>
  <TD>1</TD>
</TR>

<TR>
  <TD>event</TD>
  <TD><CENTER>string</CENTER></TD>
  <TD>Type of the event that has been recorded. See below for possible values.</TD>
  <TD>AnswerSet</TD>
</TR>

<TR>
  <TD>responsible</TD>
  <TD><CENTER>string</CENTER></TD>
  <TD>Login name of the person responsible for the event</TD>
  <TD>Enumerator25</TD>
</TR>

<TR>
  <TD>role</TD>
  <TD><CENTER>string</CENTER></TD>
  <TD>Role of the person mentioned in the 'responsible' column, one of the following: Interviewer, Supervisor, Headquarter</TD>
  <TD>Interviewer</TD>
</TR>

<TR>
  <TD>timestamp</TD>
  <TD><CENTER>string</CENTER></TD>
  <TD>Date and time when the event occurred combined in a single timestamp.</TD>
  <TD>2018-12-28T23:00:59</TD>
</TR>

<TR>
  <TD>offset</TD>
  <TD><CENTER>string</CENTER></TD>
  <TD>Time offset relative to UTC.</TD>
  <TD>-05:00:00</TD>
</TR>

<TR>
  <TD>parameters</TD>
  <TD><CENTER>string</CENTER></TD>
  <TD>One or more parameters of the event, the interpretation of which depends on the type of event.</TD>
  <TD>GPSLOC||16.73526463,75.93207878[13]27||2.0</TD>
</TR>

</TABLE>
</CENTER>
<BR>

The following table outlines the types of the events tracked by Survey Solutions. You may encounter some of them (though not all) in the paradata. The table also provides the interpretation of the parameters column corresponding to each type of event. Presence of some of the types of events is dependent on the version of Survey Solutions.

<CENTER>
<TABLE border=1>

<TR bgcolor="PowderBlue"><TD colspan=4><H2><a id="events">Events coding</H2></TD></TR>

<TR>
  <TH width=140><CENTER>Event name (alphabetical)</CENTER></TH>
  <TH width=20><CENTER>Code</CENTER></TH>
  <TH width=315><CENTER>Meaning</CENTER></TH>
  <TH width=200><CENTER>Parameters</CENTER></TH>
</TR>

<TR>
  <TD>AnswerRemoved</TD>
  <TD>3</TD>
  <TD>Question's answer was removed (cleared).</TD>
  <TD><A href="#varname">varname</A>||<A href="#rosteraddress">OptionalRosterAddress</A></TD>
</TR>

<TR>
  <TD>AnswerSet</TD>
  <TD>2</TD>
  <TD>Question was answered in the interview.</TD>
  <TD><A href="#varname">varname</A>||value||<A href="#rosteraddress">OptionalRosterAddress</A><BR><BR>
  Values are mostly same as they are present in the tab-delimited export files, with a few exceptions where the value in the tab-delimited file is split among multiple columns. <BR><BR>
  Values of multiselect questions are recorded as codes of selected items separated by commas: <I>323.0, 315.0, 147.0</I><BR><BR>
  Values of text list questions are recorded as specified items separated by the |-character: <I>Sergiy|Maryna|Natalia</I><BR><BR>
  Values of GPS questions are represented in the form latitude,longitude[accuracy]altitude, such as <I>16.73526463,75.93207878[13]27</I>
  </TD>
</TR>

<TR>
  <TD>ApproveByHeadquarter</TD>
  <TD>8</TD>
  <TD>Indicates when the interview was approved by an HQ user.</TD>
  <TD>Comment entered by the HQ user during approval.</TD>
</TR>

<TR>
  <TD>ApproveBySupervisor</TD>
  <TD>7</TD>
  <TD>Indicates when the supervisor approved the interview.</TD>
  <TD>Comment entered by the supervisor during approval.</TD>
</TR>

<TR>
  <TD>ClosedBySupervisor</TD>
  <TD>30</TD>
  <TD>Indicates when the supervisor closed the interview opened for a review.</TD>
  <TD>NO PARAMETERS</TD>
</TR>

<TR>
  <TD>CommentSet</TD>
  <TD>4</TD>
  <TD>Occurs when a comment was written to a question in the interview.</TD>
  <TD><A href="#varname">varname</A>||comment  - if the question is not in any roster<BR>
  <A href="#varname">varname</A>||comment||<A href="#rosteraddress">OptionalRosterAddress</A> - if the question is part of a roster.
  </TD>
</TR>

<TR>
  <TD>Completed</TD>
  <TD>5</TD>
  <TD>Indicates when the interview was marked as completed by the interviewer.</TD>
  <TD>Comment entered by the interviewer at completion.</TD>
</TR>

<TR>
  <TD>Deleted</TD>
  <TD>11</TD>
  <TD>Reserved</TD>
  <TD>NO PARAMETERS.</TD>
</TR>

<TR>
  <TD>GroupDisabled</TD>
  <TD>16</TD>
  <TD>This event is not included in the exported paradata file.<BR><BR>Event that corresponds to the group (section, subsection) being declared as enabled (to be skipped, not skipped).
  </TD>
  <TD>NO PARAMETERS.</TD>
</TR>

<TR>
  <TD>GroupEnabled</TD>
  <TD>15</TD>
  <TD>This event is not included in the exported paradata file.<BR><BR>Event that corresponds to the group (section, subsection) being declared as disabled (to be answered, not skipped).
  </TD>
  <TD>NO PARAMETERS.</TD>
</TR>

<TR>
  <TD>InterviewCreated</TD>
  <TD>32</TD>
  <TD>Occurs when the interview is created.</TD>
  <TD>NO PARAMETERS.</TD>
</TR>

<TR>
  <TD>InterviewerAssigned</TD>
  <TD>1</TD>
  <TD>Event that occurs when the interviewer becomes responsible for the interview
  (for example, when the interview is created from an assignment).</TD>
  <TD>Name of the interviewer that became responsible for this interview.</TD>
</TR>

<TR>
  <TD>InterviewModeChanged</TD>
  <TD>31</TD>
  <TD>Event that occurs when the interview mode is set or changed
  (for example, when the interviewer switches from CAPI to CAWI).</TD>
  <TD>New mode: CAPI or CAWI.</TD>
</TR>

<TR>
  <TD>KeyAssigned</TD>
  <TD>27</TD>
  <TD>Newly created interview is assigned an interview key. Also occurs when a key
  of the interview is modified tue to a collision with an existing interview's key.
  Latest event will reflect the current interview key. Event may once OR twice per
  interview only.</TD>
  <TD>Interview key in the form NN-NN-NN-NN</TD>
</TR>

<TR>
  <TD>OpenedBySupervisor</TD>
  <TD>29</TD>
  <TD>Indicates when the supervisor opened the interview for a review.</TD>
  <TD>NO PARAMETERS</TD>
</TR>

<TR>
  <TD>Paused</TD>
  <TD>25</TD>
  <TD>Indicates a prolonged pause during the interviewing process, such as when the tablet goes into the sleep mode to conserve power.</TD>
  <TD>NO PARAMETERS</TD>
</TR>

<TR>
  <TD>QuestionDeclaredInvalid</TD>
  <TD>18</TD>
  <TD>Event corresponding to the situation when the value of the question deemed to be invalid (not passing the specified validation).</TD>
  <TD><A href="#varname">varname</A>||<A href="#rosteraddress">OptionalRosterAddress</A></TD>
</TR>

<TR>
  <TD>QuestionDeclaredValid</TD>
  <TD>17</TD>
  <TD>Event corresponding to the value of the question deemed to be valid (passing the specified validation).</TD>
  <TD><A href="#varname">varname</A>||<A href="#rosteraddress">OptionalRosterAddress</A></TD>
</TR>

<TR>
  <TD>QuestionDisabled</TD>
  <TD>14</TD>
  <TD>Event corresponding to the question being set to disabled state (question is to be skipped, not answered).</TD>
  <TD><A href="#varname">varname</A>||<A href="#rosteraddress">OptionalRosterAddress</A></TD>
</TR>

<TR>
  <TD>QuestionEnabled</TD>
  <TD>13</TD>
  <TD>Event corresponding to the question being set to enabled state (question is to be answered, not skipped).</TD>
  <TD><A href="#varname">varname</A>||<A href="#rosteraddress">OptionalRosterAddress</A></TD>
</TR>

<TR>
  <TD>ReceivedByInterviewer</TD>
  <TD>20</TD>
  <TD>Indicates reception of the rejected interview by the interviewer on the tablet.</TD>
  <TD>NO PARAMETERS</TD>
</TR>

<TR>
  <TD>ReceivedBySupervisor</TD>
  <TD>21</TD>
  <TD>Indicates when the completed interview was received by the supervisor.</TD>
  <TD>NO PARAMETERS</TD>
</TR>

<TR>
  <TD>RejectedByHeadquarter</TD>
  <TD>10</TD>
  <TD>Occurs when an interview is rejected by a headquarters user.</TD>
  <TD>Comment written by the HQ user when the interview was rejected.</TD>
</TR>

<TR>
  <TD>RejectedBySupervisor</TD>
  <TD>9</TD>
  <TD>Occurs when an interview is rejected by the supervisor.</TD>
  <TD>Comment written by the supervisor when the interview was rejected.</TD>
</TR>

<TR>
  <TD>Restarted</TD>
  <TD>6</TD>
  <TD>Occurs when an interview is restarted on a tablet (from a completed status).</TD>
  <TD>NO PARAMETERS</TD>
</TR>

<TR>
  <TD>Restored</TD>
  <TD>12</TD>
  <TD>Reserved.<BR>Not to be confused with 'restarted' above.</TD>
  <TD>NO PARAMETERS</TD>
</TR>

<TR>
  <TD>Resumed</TD>
  <TD>26</TD>
  <TD>Indicates resuming work on the interview, such as when the tablet wakes up after going to a sleep mode.</TD>
  <TD>NO PARAMETERS</TD>
</TR>

<TR>
  <TD>SupervisorAssigned</TD>
  <TD>0</TD>
  <TD>Newly created interview is assigned as responsibility to the team of the interviewer, which started the interview.</TD>
  <TD><FONT color="red">NO PARAMETERS</FONT></TD>
</TR>

<TR>
  <TD>TranslationSwitched</TD>
  <TD>28</TD>
  <TD>Occurs when the language (translation) of the interview is switched.</TD>
  <TD>Name of the selected language.</TD>
</TR>

<TR>
  <TD>UnapproveByHeadquarters</TD>
  <TD>19</TD>
  <TD>Occurs when the interview was unapproved by the HQ (or an admin) user.</TD>
  <TD>Comment (if provided) when the interview was unapproved. Typically the automatic message "<I>[Approved by Headquarters was revoked]</I>".</TD>
</TR>

<TR>
  <TD>VariableDisabled</TD>
  <TD>24</TD>
  <TD>Occurs when a variable is disabled (when it is part of a section which gets disabled).</TD>
  <TD><A href="#varname">varname</A>||value||<A href="#rosteraddress">OptionalRosterAddress</A></TD>
</TR>

<TR>
  <TD>VariableEnabled</TD>
  <TD>23</TD>
  <TD>Occurs when a variable is enabled (when it is part of a section which gets enabled).</TD>
  <TD><A href="#varname">varname</A>||value||<A href="#rosteraddress">OptionalRosterAddress</A></TD>
</TR>

<TR>
  <TD>VariableSet</TD>
  <TD>22</TD>
  <TD>Occurs when a variable is recalculated.</TD>
  <TD><A href="#varname">varname</A>||value||<A href="#rosteraddress">OptionalRosterAddress</A></TD>
</TR>

</TABLE>
</CENTER>
<BR>
<P>
<A id="rosteraddress"><B><I>OptionalRosterAddress</I></B> denotes one or more numeric rowcodes
for each level of nesting when the event affects an item (question,
variable, etc) in a roster. In case of multiple rowcodes they are
separated by commas. For example, 2.0,5.0,0.0 may correspond to the job
coded 0, of the person with rowcode 5 of the household with rowcode 2. If
the item is not part of any roster, it's OptionalRosterAddress is blank.</P>
<P>
<A id="varname"><B><I>Varname</I></B> is the name of the data variable
corresponding to a question or a calculated variable (as specified in
the Questionnaire Designer).
</P>
