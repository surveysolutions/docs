+++
title = "Email Templates"
keywords = ["email", "template"]

+++

Survey Solutions can send email notifications to the respondents to the web surveys (CAWI). These notifications can be configured at the web interview setup page: `Menu`-->`Survey Setup`-->`Questionnaires`-->`YourQuestionnaire`-->`Web interview setup`.

Survey Solutions server automatically determines, which notifications need to be
sent out to the respondents. Every hour the notifications of the type marked
with ^ in the table below are sent out, if a
[bulk email service provider](/headquarters/cawi/email-providers/) has been set
up.

Notification emails may mention some of the text substitutions, which will be
replaced with appropriate texts by Survey Solutions. They are mentioned in the
descriptions below.


<TABLE class="table table-striped table-hover" border>
<TR class="header bg-warning">
  <TH width=200>Notification message</TH>
  <TH>Description</TH>
</TR>

<TR>
  <TD>Invitation</TD>
  <TD><P>An invitation message is sent to invite a respondent to participate in the
  survey. It contains a link that the respondent will follow to start an
  interview.</P>

  <P>The invitation message may mention %SURVEYNAME%, which will be automatically
  replaced with the name of the survey.</P>

  <P>The invitation message is sent out when the HQ chooses to <B><I>Send invitations</I></B>.
  (Click on the survey, select <B><I>Send invitations</I></B> from the context menu).</P>

  <P>If the bulk email service provider is not set, the links to web interviews
  can be downloaded in a form of a file from the Survey Solutions server, and
  custom invitations generated and send in an external system.</P>
  </TD>
</TR>


<TR>
  <TD>Resume</TD>
  <TD><P>A resume message is sent to the respondents to deliver a message
  containing a link that the respondent will follow to resume an
  interview if his/her session is disrupted for any reason.</P>

  <P>The message may mention %SURVEYNAME%, which will be automatically
  replaced with the name of the survey.</P>

  <P>The resume message is sent out when the respondent specifies his/her email and
  a bulk email sender is configured, and the admin of the Survey Solutions
  server opts to allow such messages by setting the <B><I>Web Interview Email
  Notifications</I></B> flag in the server settings.</P></TD>
</TR>


<TR>
  <TD>No response^</TD>
  <TD><P>A no response message is sent to the respondents if they haven't started
  a survey interview. This reminder message is sent after a certain period of
  time after the invitation was sent out if the respondent hasn't started the
  interview yet. The exact duration of time for the reminder is regulated by the
  <B><I>Send reminder to people with no response</I></B> parameter at the web
  interview setup page.</P>

  <P>The message may mention %SURVEYNAME%, which will be automatically
  replaced with the name of the survey.</P>

  <P>The message is sent automatically if the bulk email sender has been
  configured.</P>
  </TD>
</TR>


<TR>
  <TD>Partial response^</TD>
  <TD><P>This notification message is sent to the respondents that have started
  but haven't completed a survey interview yet after a certain period of
  time. The exact duration of time for the reminder is regulated by the
  <B><I>Send reminder to people with a partial response</I></B> parameter at the web
  interview setup page.</P>

  <P>The message may mention %SURVEYNAME%, which will be automatically
  replaced with the name of the survey.</P>

  <P>The message is sent automatically if the bulk email sender has been
  configured.</P>
  </TD>
</TR>

<TR>
  <TD>Reject^</TD>
  <TD><P>This notification message is sent to the respondents whos interviews have
  been rejected by survey supervisors. The respondent is invited to make
  corrections based on the supervisor's comments/feedback.</P>

  <P>The message may mention %SURVEYNAME%, which will be automatically
  replaced with the name of the survey.</P>

  <P>The message is sent automatically if the bulk email sender has been
  configured.</P>
  </TD>
</TR>


<TR>
  <TD>Complete</TD>
  <TD><P>This notification message is sent to the respondents who has completed
  an interview immediately when they complete it.</P>

  <P>The message may mention %SURVEYNAME%, which will be automatically
  replaced with the name of the survey. It may also mention in %-% signs any
  variable name from the main interview level (not inside of any roster) of a type
  <A href="/questionnaire-designer/limits/design-limitations-by-question-type/">
  supported in text substitutions</A>, such as for example, <I>%address%</I> the value of which will
  be automatically substituted with a value entered by the respondent in the
  interview. For the categorical single select questions the default survey
  language is used for the text label corresponding to the selected answer
  regardless which language was used by the respondent at the time of the
  interview. The date and timestamp answers are written using an invariant date
  format.</P>

  <P>In the rare occasion when a question with variable name specifically
  SURVEYNAME is defined in an interview, the text substitution %SURVEYNAME% is
  resolved to the name of the survey, not the value of this variable.</P>

  <P>Optionally, the variable name may be suffixed with <B>:barcode</B> or
  <B>:qrcode</B>, such as for example: %product:barcode% or %checksum:qrcode%.
  Then the value of the corresponding variable will be rendered as a barcode or
  a qrcode respectively. For linear barcodes the
  <A href="https://en.wikipedia.org/wiki/Code_128">code 128</A> standard is used.
  For 2-dimensional qrcodes the <A href="https://en.wikipedia.org/wiki/QR_code">
  QR-code</A> standard is used.</P>

  <P>The message is sent automatically on completion of an interview if the bulk
  email sender has been configured and the flag <B><I>Send email after web
  interview completion</I></B> has been set. Otherwise it is not sent.</P>

  <P> Optionally, a transcript of answers to interview questions can
  be attached to this message if the flag <B><I>Attach Pdf transcript</I></B> is set.
  </P>
  </TD>
</TR>
</TABLE>


<BR>

The templates for each survey can be specified in only one language. If
invitations/notifications for a survey need to be sent out in different
languages, such survey must be split into two (or more) Survey Solutions surveys
and email templates for them configured separately.

Each notification message consists of multiple blocks:

<TABLE class="table table-striped table-hover" border>
<TR class="header bg-warning">
  <TH width=200>Block</TH>
  <TH>Description</TH>
</TR>

<TR>
  <TD>- <I>Subject</I></TD>
  <TD>This is the email subject line that the respondent will see in his/her inbox
when the notification message arrives.</TD>
</TR>

<TR>
  <TD>- <I>Main text</I></TD>
  <TD>This is the notification's message main text that the respondent will see
  when he/she opens the notification message.</TD>
</TR>

<TR>
  <TD>- <I>Description for password</I></TD>
  <TD>Block describing to the participant that a password must be used to access
  the interview. This block is only utilized if the access to interview is
  protected with a password.</TD>
</TR>

<TR>
  <TD>- <I>Start interview button</I></TD>
  <TD>Specific text appearing on the button to start the interview.</TD>
</TR>
</TABLE>
