+++
title = "Webpage Templates"
keywords = ["web", "webpage", "template", "CAWI"]

+++

Survey Solutions presents several web pages to the respondents to the web
surveys (CAWI). These pages may need to be customized at the web interview
setup page: `Menu` &#x2192; `Survey Setup` &#x2192; `Questionnaires` &#x2192;
`YourQuestionnaire` &#x2192; `Web interview setup`.

Changes made to these templates take immediate effect: any new page of the
corresponding type will be shown using the most recently saved template.

<TABLE class="table table-striped table-hover" border>
<TR class="header bg-warning">
  <TH width=200>Web page</TH>
  <TH>Description</TH>
</TR>

<TR>
  <TD>Welcome page</TD>
  <TD>
    <P>
      This page is shown to the respondent opening the link to a web interview.
    </P>
    <P>
      The content of this page will usually contain description of the survey,
      its purposes and objectives, motivation for participation, and other
      descriptives/instructions.
    </P>
    <P>
      The page consists of three user-editable elements:
      <UL><LI>title,</LI><LI>description, and</LI><LI>the text on
      the button to start a new interview.</LI></UL>
    </P>
    <P>
      Survey coordinator may apply formatting to the description part of this
      web page.
    </P>
  </TD>
</TR>


<TR>
  <TD>Resume Page</TD>
  <TD><P>A resume page is shown to the respondents when they resume an
  interrupted interview (started, but not completed).</P>
  <P>
    The page consists of three user-editable elements:
    <UL><LI>title,</LI><LI>description, and</LI><LI>the text on
    the button to resume the interview.</LI></UL>
  </P>
  <P>
    Survey coordinator may apply formatting to the description part of this
    web page.
  </P>
  <P>
    The description may mention %QUESTIONNAIRE%, which will be automatically
    replaced with the name of the survey.
  </P>
  </TD>
</TR>


<TR>
  <TD>Complete</TD>
  <TD><P>Provides a possibility to customize texts utilized at the
  system-generated <B><I>Complete</I></B> page of a web-interview.</P>
  <P>
    The page consists of two user-editable elements:
    <UL><LI>Note for supervisor, and</LI><LI>Complete.</LI></UL>
  </P>
  <P>
    Survey coordinator may not apply formatting in any of the elements of this
    web page.
  </P>
  </TD>
</TR>


<TR>
  <TD>Finish page</TD>
  <TD><P>Provides a possibility to customize texts utilized at the
  page displayed after a web-interview is completed.</P>
  <P>
    The page consists of two user-editable elements:
    <UL><LI>title, and</LI><LI>description.</LI></UL>
  </P>
  <P>
    Survey coordinator may apply formatting to the description part of this
    web page.
  </P>
  </TD>
</TR>

</TABLE>

#### Text formatting

Where formatting is supported it is entered using the following toolbar:
<CENTER>
<IMG src="images/formatting_toolbar.png" width=320>
</CENTER>
where the meaning of the icons is as follows:<BR><BR>
<UL>
  <LI><B>Header selection</B> - select a font to enter heading text;</LI>
  <LI><B>Bold</B> - make some text appear in bold font;</LI>
  <LI><B>Italics</B> - make some text appear in italics font;</LI>
  <LI><B>List</B> - make a list item (unordered/bulleted);</LI>
  <LI><B>Ordered list</B> - make a list item in an ordered list;</LI>
  <LI><B>Image</B> - add image (can upload a file or specify an URL of a
    published image);</LI>
  <LI><B>Link</B> - insert a link (provide an URL and a corresponding link text).
</UL>

The formatting is implemented using
[Markdown](https://en.wikipedia.org/wiki/Markdown) and users familiar with its
notation can enter the corresponding keystrokes directly without using the
toolbar if so desired.
