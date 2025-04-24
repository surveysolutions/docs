+++
title = "Paradata file format"
keywords = ["export, action, paradata"]
date = 2018-12-28T12:12:12Z
lastmod = 2025-04-13T12:12:12Z


+++

Every survey collected in Survey Solutions is supplemented with a paradata file.
No actions are needed from the questionnaire designers or headquarters team to
collect it, it is produced automatically by the Survey Solutions software.

The paradata files describe the process of data collection. They explain how the
data was entered, detailing all edits, who and when undertaken them. These files
may be large and most conveniently processed using specialized statistical
packages, rather than general purpose tools.

The paradata is supplied in a
<A href="https://en.wikipedia.org/wiki/ZIP_(file_format)">zip archive</A> with
a tab-delimited data file and supplementary meta-data files inside.


### Contents of paradata export archive

<CENTER>
<TABLE border=1>

<TR bgcolor="orange">
  <TH width=180><CENTER>File</CENTER></TH>
  <TH width=640><CENTER>Description</CENTER></TH>
</TR>

<TR>
  <TD><TT> paradata.tab</TT></TD>
  <TD>Paradata in tab-delimited format. Each line of this file corresponds to
  one recorded event. See below <A href="#paradatacolumns">description of the
  columns</A> of this file.</TD>
</TR>

<TR>
  <TD><TT> paradata.do</TT></TD>
  <TD>Script for Stata statistical package to import tab-delimited paradata.<BR>
  <A href="resources/paradata.do">Example</A></TD>
</TR>

<TR>
  <TD><TT> export__readme.txt</TT></TD>
  <TD>Human-readable description file (in text format).<BR>
  <A href="resources/export__readme.txt">Example</A></TD>
</TR>

<TR>
  <TD><TT> export__info.json</TT></TD>
  <TD>Machine-readable description/identification file (in
  <A href="https://en.wikipedia.org/wiki/JSON">JSON format</A>).<BR>
  <A href="resources/export__info.json">Example</A></TD>
</TR>

</TABLE>
</CENTER>

<BR>

<A name="paradatacolumns">

### Columns of `paradata.tab` file

The paradata events are recorded (along with their attributes) placed in the
following columns:

<CENTER>
<TABLE border=1>

<TR bgcolor="orange">
  <TH width=140><CENTER>Variable</CENTER></TH>
  <TH width=60><CENTER>Type</CENTER></TH>
  <TH width=300><CENTER>Meaning</CENTER></TH>
  <TH width=200><CENTER>Example</CENTER></TH>
</TR>

<TR>
  <TD><TT>interview__id</TT></TD>
  <TD><CENTER>string</CENTER></TD>
  <TD>32-hexadecimal ID  (<A href="https://en.wikipedia.org/wiki/Universally_unique_identifier">GUID</A>)
  of the interview affected by the event.</TD>
  <TD><TT>75efdc0456fb4b35be4690bd19eab870</TT></TD>
</TR>

<TR>
  <TD><TT>order</TT></TD>
  <TD><CENTER>numeric integer</CENTER></TD>
  <TD>Numeric sequential ID of the event (starts from 1 for every interview).</TD>
  <TD><TT>1</TT></TD>
</TR>

<TR>
  <TD><TT>event</TT></TD>
  <TD><CENTER>string</CENTER></TD>
  <TD>Type of the event that has been recorded (see <A href="#eventcodes">coding
  of event types</A> below).</TD>
  <TD><TT>AnswerSet</TT></TD>
</TR>

<TR>
  <TD><TT>responsible</TT></TD>
  <TD><CENTER>string</CENTER></TD>
  <TD>Login name of the person responsible for the event</TD>
  <TD><TT>Enumerator25</TT></TD>
</TR>

<TR>
  <TD><TT>role</TT></TD>
  <TD><CENTER>numeric</CENTER></TD>
  <TD>Role of the person mentioned in the <TT>responsible</TT> column
  (see <A href="#rolecodes">coding of roles</A> below)</TD>
  <TD><TT>1</TT></TD>
</TR>

<TR>
  <TD><TT>timestamp_utc</TT></TD>
  <TD><CENTER>string</CENTER></TD>
  <TD>Date and time when the event occurred combined in a single timestamp (in
    <A href="https://en.wikipedia.org/wiki/Coordinated_Universal_Time">UTC</A>),
    using the following format:<BR><TT>YYYY-MM-DDThh:mm:ss.msc</TT></TD>
  <TD><TT>2018-12-28T23:00:59.123</TT></TD>
</TR>

<TR>
  <TD><TT>tz_offset</TT></TD>
  <TD><CENTER>string</CENTER></TD>
  <TD>Time zone offset (relative to <A href="https://en.wikipedia.org/wiki/Coordinated_Universal_Time">UTC</A>).</TD>
  <TD><TT>-05:00:00</TT></TD>
</TR>

<TR>
  <TD><TT>parameters</TT></TD>
  <TD><CENTER>string</CENTER></TD>
  <TD>One or more parameters of the event, the interpretation of which depends
  on the type of event.</TD>
  <TD><TT>GPSLOC||16.73526463,75.93207878[13]27||2.0</TT></TD>
</TR>

</TABLE>
</CENTER>
<BR>

<A name="eventcodes">

### Paradata events and associated codes

The following table outlines the types of the events tracked by Survey
Solutions. You may encounter some of them (though not all) in the paradata. The
table also provides the interpretation of the parameters column corresponding
to each type of event. Presence of some of these events is dependent on the
version of Survey Solutions and the mode of data collection (CAPI vs CAWI,
with or without partial synchronization, etc).<BR>

<CENTER>
<TABLE border=1>

<TR bgcolor="orange">
  <TH width=140><CENTER>Event name<BR>(alphabetical)</CENTER></TH>
  <TH width=20 align=center><CENTER>Numeric code</CENTER></TH>
  <TH width=315><CENTER>Meaning</CENTER></TH>
  <TH width=200><CENTER>Parameters</CENTER></TH>
</TR>

<TR>
  <TD><I>AnswerRemoved</I></TD>
  <TD align=center>3</TD>
  <TD>Question's answer was removed (cleared).</TD>
  <TD><A href="#varname">varname</A>||<A href="#rosteraddress">OptionalRosterAddress</A></TD>
</TR>

<TR>
  <TD><I>AnswerSet</I></TD>
  <TD align=center>2</TD>
  <TD>Question was answered in the interview.</TD>
  <TD><A href="#varname">varname</A>||value||<A href="#rosteraddress">OptionalRosterAddress</A><BR><BR>
  Values are mostly same as they are present in the tab-delimited export files, with a few exceptions where the value in the tab-delimited file is split among multiple columns. <BR><BR>
  Values of multiselect questions are recorded as codes of selected items separated by commas: <I>323.0, 315.0, 147.0</I><BR><BR>
  Values of text list questions are recorded as specified items separated by the <TT>|</TT>-character: <I>Sergiy|Maryna|Natalia</I><BR><BR>
  Values of GPS questions are represented in the form latitude,longitude[accuracy]altitude, such as <I>16.73526463,75.93207878[13]27</I>
  </TD>
</TR>

<TR>
  <TD><I>ApproveByHeadquarter</I></TD>
  <TD align=center>8</TD>
  <TD>Indicates when the interview was approved by an HQ user.</TD>
  <TD>Comment entered by the HQ user during approval.</TD>
</TR>

<TR>
  <TD><I>ApproveBySupervisor</I></TD>
  <TD align=center>7</TD>
  <TD>Indicates when the supervisor approved the interview.</TD>
  <TD>Comment entered by the supervisor during approval.</TD>
</TR>

<TR>
  <TD><I>ClosedBySupervisor</I></TD>
  <TD align=center>30</TD>
  <TD>Indicates when the supervisor closed the interview opened for a review.</TD>
  <TD>NO PARAMETERS</TD>
</TR>

<TR>
  <TD><I>CommentSet</I></TD>
  <TD align=center>4</TD>
  <TD>Occurs when a comment was written to a question in the interview.</TD>
  <TD><A href="#varname">varname</A>||comment  - if the question is not in any roster<BR>
  <A href="#varname">varname</A>||comment||<A href="#rosteraddress">OptionalRosterAddress</A> - if the question is part of a roster.
  </TD>
</TR>

<TR>
  <TD><I>Completed</I></TD>
  <TD align=center>5</TD>
  <TD>Indicates when the interview was marked as completed by the interviewer.</TD>
  <TD>Comment entered by the interviewer at completion.</TD>
</TR>

<TR>
  <TD><I>Deleted</I></TD>
  <TD align=center>11</TD>
  <TD>Reserved</TD>
  <TD>NO PARAMETERS.</TD>
</TR>

<TR>
  <TD><I>GroupDisabled</I></TD>
  <TD align=center>16</TD>
  <TD>⚠ This event is not included in the exported paradata file.<BR><BR>
  Event that corresponds to the group (section, subsection) being declared as
  enabled (to be skipped, not skipped).
  </TD>
  <TD>NO PARAMETERS.</TD>
</TR>

<TR>
  <TD><I>GroupEnabled</I></TD>
  <TD align=center>15</TD>
  <TD>⚠ This event is not included in the exported paradata file.<BR><BR>
  Event that corresponds to the group (section, subsection) being declared as
  disabled (to be answered, not skipped).
  </TD>
  <TD>NO PARAMETERS.</TD>
</TR>

<TR>
  <TD><I>InterviewCreated</I></TD>
  <TD align=center>32</TD>
  <TD>Occurs when the interview is created.</TD>
  <TD>NO PARAMETERS.</TD>
</TR>

<TR>
  <TD><I>InterviewerAssigned</I></TD>
  <TD align=center>1</TD>
  <TD>Event that occurs when the interviewer becomes responsible for the
  interview (for example, when the interview is created from an assignment).</TD>
  <TD>Name of the interviewer that became responsible for this interview.</TD>
</TR>

<TR>
  <TD><I>InterviewModeChanged</I></TD>
  <TD align=center>31</TD>
  <TD>Event that occurs when the interview mode is set or changed
  (for example, when the interviewer switches from CAPI to CAWI).</TD>
  <TD>New mode: <I>CAPI</I> or <I>CAWI</I>.</TD>
</TR>

<TR>
  <TD><I>KeyAssigned</I></TD>
  <TD align=center>27</TD>
  <TD>Newly created interview is assigned an interview key. Also occurs when a
  key of the interview is modified tue to a collision with an existing
  interview's key. Latest event will reflect the current interview key. Event
  may once OR twice per interview only.</TD>
  <TD>Interview key in the form: <TT>NN-NN-NN-NN</TT></TD>
</TR>

<TR>
  <TD><I>OpenedBySupervisor</I></TD>
  <TD align=center>29</TD>
  <TD>Indicates when the supervisor opened the interview for a review.</TD>
  <TD>NO PARAMETERS</TD>
</TR>

<TR>
  <TD><I>Paused</I></TD>
  <TD align=center>25</TD>
  <TD>Indicates a prolonged pause during the interviewing process, such as when the tablet goes into the sleep mode to conserve power.</TD>
  <TD>NO PARAMETERS</TD>
</TR>

<TR>
  <TD><I>QuestionDeclaredInvalid</I></TD>
  <TD align=center>18</TD>
  <TD>Event corresponding to the situation when the value of the question deemed to be invalid (not passing the specified validation).</TD>
  <TD><A href="#varname">varname</A>||<A href="#rosteraddress">OptionalRosterAddress</A></TD>
</TR>

<TR>
  <TD><I>QuestionDeclaredValid</I></TD>
  <TD align=center>17</TD>
  <TD>Event corresponding to the value of the question deemed to be valid (passing the specified validation).</TD>
  <TD><A href="#varname">varname</A>||<A href="#rosteraddress">OptionalRosterAddress</A></TD>
</TR>

<TR>
  <TD><I>QuestionDisabled</I></TD>
  <TD align=center>14</TD>
  <TD>⚠ This event is not included in the exported paradata file.<BR><BR>Event corresponding to the question being set to disabled state (question is to be skipped, not answered).</TD>
  <TD><A href="#varname">varname</A>||<A href="#rosteraddress">OptionalRosterAddress</A></TD>
</TR>

<TR>
  <TD><I>QuestionEnabled</I></TD>
  <TD align=center>13</TD>
  <TD>⚠ This event is not included in the exported paradata file.<BR><BR>Event corresponding to the question being set to enabled state (question is to be answered, not skipped).</TD>
  <TD><A href="#varname">varname</A>||<A href="#rosteraddress">OptionalRosterAddress</A></TD>
</TR>

<TR>
  <TD><I>ReceivedByInterviewer</I></TD>
  <TD align=center>20</TD>
  <TD>Indicates reception of the rejected interview by the interviewer on the tablet.</TD>
  <TD>NO PARAMETERS</TD>
</TR>

<TR>
  <TD><I>ReceivedBySupervisor</I></TD>
  <TD align=center>21</TD>
  <TD>Indicates when the completed interview was received by the supervisor.</TD>
  <TD>NO PARAMETERS</TD>
</TR>

<TR>
  <TD><I>RejectedByHeadquarter</I></TD>
  <TD align=center>10</TD>
  <TD>Occurs when an interview is rejected by a headquarters user.</TD>
  <TD>Comment written by the HQ user when the interview was rejected.</TD>
</TR>

<TR>
  <TD><I>RejectedBySupervisor</I></TD>
  <TD align=center>9</TD>
  <TD>Occurs when an interview is rejected by the supervisor.</TD>
  <TD>Comment written by the supervisor when the interview was rejected.</TD>
</TR>

<TR>
  <TD><I>Restarted</I></TD>
  <TD align=center>6</TD>
  <TD>Occurs when an interview is restarted on a tablet (from a completed status).</TD>
  <TD>NO PARAMETERS</TD>
</TR>

<TR>
  <TD><I>Restored</I></TD>
  <TD align=center>12</TD>
  <TD>Reserved.<BR>Not to be confused with 'restarted' above.</TD>
  <TD>NO PARAMETERS</TD>
</TR>

<TR>
  <TD><I>Resumed</I></TD>
  <TD align=center>26</TD>
  <TD>Indicates resuming work on the interview, such as when the tablet wakes up after going to a sleep mode.</TD>
  <TD>NO PARAMETERS</TD>
</TR>

<TR>
  <TD><I>SupervisorAssigned</I></TD>
  <TD align=center>0</TD>
  <TD>Newly created interview is assigned as responsibility to the team of the interviewer, which started the interview.</TD>
  <TD><FONT color="red">NO PARAMETERS</FONT></TD>
</TR>

<TR>
  <TD><I>TranslationSwitched</I></TD>
  <TD align=center>28</TD>
  <TD>Occurs when the language (translation) of the interview is switched.</TD>
  <TD>Name of the selected language.</TD>
</TR>

<TR>
  <TD><I>UnapproveByHeadquarters</I></TD>
  <TD align=center>19</TD>
  <TD>Occurs when the interview was unapproved by the HQ (or an admin) user.</TD>
  <TD>Comment (if provided) when the interview was unapproved. Typically the automatic message "<I>[Approved by Headquarters was revoked]</I>".</TD>
</TR>

<TR>
  <TD><I>VariableDisabled</I></TD>
  <TD align=center>24</TD>
  <TD>Occurs when a variable is disabled (when it is part of a section which gets disabled).</TD>
  <TD><A href="#varname">varname</A>||value||<A href="#rosteraddress">OptionalRosterAddress</A></TD>
</TR>

<TR>
  <TD><I>VariableEnabled</I></TD>
  <TD align=center>23</TD>
  <TD>Occurs when a variable is enabled (when it is part of a section which gets enabled).</TD>
  <TD><A href="#varname">varname</A>||value||<A href="#rosteraddress">OptionalRosterAddress</A></TD>
</TR>

<TR>
  <TD><I>VariableSet</I></TD>
  <TD align=center>22</TD>
  <TD>Occurs when a variable is recalculated.</TD>
  <TD><A href="#varname">varname</A>||value||<A href="#rosteraddress">OptionalRosterAddress</A></TD>
</TR>

</TABLE>
</CENTER>
<BR>

<P>
<A id="rosteraddress"><B><I>OptionalRosterAddress</I></B> denotes one or more numeric <TT>rowcodes</TT>
for each level of nesting when the event affects an item (question,
variable, etc) in a roster. In case of multiple <TT>rowcode</TT>s they are
separated by commas. For example, <TT>2.0,5.0,0.0</TT> may correspond to the job
coded 0, of the person with <TT>rowcode</TT> 5 of the household with <TT>rowcode</TT> 2. If
the item is not part of any roster, it's <TT>OptionalRosterAddress</TT> is blank.</P>
<P>
<A id="varname"><B><I>Varname</I></B> is the name of the data variable
corresponding to a question or a calculated variable (as specified in
the <A href="/questionnaire-designer/">Questionnaire Designer</A>).
</P>

<A name="rolecodes">

### Coding of roles

Numeric codes used to encode the role in the paradata records have the following meaning:

<CENTER>
<TABLE border=1>
<TR bgcolor="orange" align=center>
  <TH width=180>Numeric code</TH>
  <TH width=200>Meaning</TH>
</TR>
<TR><TD align=center><TT>0</TT></TD><TD align=center>&#60;UNKNOWN ROLE&#62;</TD></TR>
<TR><TD align=center><TT>1</TT></TD><TD align=center>Interviewer</TD></TR>
<TR><TD align=center><TT>2</TT></TD><TD align=center>Supervisor</TD></TR>
<TR><TD align=center><TT>3</TT></TD><TD align=center>Headquarter</TD></TR>
<TR><TD align=center><TT>4</TT></TD><TD align=center>Administrator</TD></TR>
<TR><TD align=center><TT>5</TT></TD><TD align=center>API User</TD></TR>
</TABLE>
</CENTER>

### Reduced paradata set

When paradata is exported in a reduced set events with the following codes are
intentionally omitted, even if contained in the recorded stream of events:

- *QuestionEnabled* (13),
- *QuestionDisabled* (14),
- *GroupEnabled* (15),
- *GroupDisabled* (16),
- *QuestionDeclaredValid* (17),
- *QuestionDeclaredInvalid* (18),
- *VariableEnabled* (23), and
- *VariableDisabled* (24).

Omission of these events typically reduces the size of the paradata files, making
their production and download faster. And yet, if these types of events are
needed, they can be obtained in the full export of paradata events, and which
is the default option during the paradata
[export](/headquarters/export/data-export-tab/).

Note, that the events in the paradata file are numbered sequentially from `1`
onwards (for each interview), and because some events are omitted from the
reduced paradata file their numbering will generally be different from the
numbering of the same events in the full paradata file.
