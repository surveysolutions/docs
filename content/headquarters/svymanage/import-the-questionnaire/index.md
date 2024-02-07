+++
title = "Import the Questionnaire"
keywords = [""]
date = 2017-06-28T18:14:07Z
lastmod = 2024-02-06T00:00:00Z
aliases = ["/customer/portal/articles/2831973-import-the-questionnaire","/customer/en/portal/articles/2831973-import-the-questionnaire","/customer/portal/articles/2831973","/customer/en/portal/articles/2831973","/getting-started/import-the-questionnaire"]

+++

A questionnaire document prepared in the Designer site needs to be imported
to the Survey Solutions data server before the data collection may start in
that survey. This article outlines how to import a questionnaire from the
Designer to the HQ.

<aside class="warning admonition-content">
🛈 The questionnaire import operation is available to users in HQ or
administrator roles.
</aside>

1. In the main menu select `Survey setup`, then `Questionnaires`.

2. Click the `Import questionnaire` button.

3. Enter the Designer credentials (under which you've designed your
questionnaire).

4. Select the questionnaire that you want to import from the list. The list of
questionnaires shows the questionnaires owned by you and shared with you
together. You can navigate the pages, search the questionnaires and sort them
by title, date of last modification, or owner.

5. Once the questionnaire is selected, type an import comment, which is a
memo to yourself and colleagues working in HQ regarding this survey or
version of the questionnaire. The maximum length of this comment obeys the maximum
number of characters permitted in comments to assignments.

6. If you've imported the same questionnaire to the same workspace before, you
may wish to <A href="/headquarters/preloading/upgrading-assignments/">upgrade
the assignments</A> from an earlier version. Indicate if you wish to do so at
this stage, and pick the version of an earlier questionnaire from the list. If
you need to upgrade assignments from multiple versions, you can upgrade them
one-by-one using the `Upgrade assignments` menu item in the `Survey Setup` → `Questionnaires` page.

7. Press the `IMPORT` button.

After the questionnaire is imported it will appear in the list of the
questionnaires. If this is the first time you import this questionnaire, it
will get assigned a numeric version identifier `1`. For subsequent imports of
the same questionnaire, the assigned version numbers will increment by one.



<aside class="warning admonition-content">
🛈 If you've made any changes to a questionnaire in the Designer, these changes
do not affect the questionnaires imported to the data server(s). To take
advantage of those changes the questionnaire must be imported again.
</aside>

### Error messages

During the process of importing a questionnaire you may encounter the following
situations:

<TABLE width=80% class="table table-striped table-hover">
<TR>
  <TH bgcolor="Orange"><CENTER>#</CENTER></TH>
  <TH bgcolor="Orange"><CENTER>Message</CENTER></TH>
  <TH bgcolor="Orange"><CENTER>Description</CENTER></TH>
</TR>
<TR>
  <TD>1</TD>
  <TD><I>Questionnaire '<CODE>NAME</CODE>' already exists. Please choose another name.</I></TD>
  <TD>You are importing a questionnaire with exactly the same title as another
  questionnaire already imported to this workspace. To be able to distinguish
  between them in the interface (in the reports, assignments, etc) the
  questionnaires must be titled differently. The user needs to modify the <B><I>title
  of the questionnaire</I></B> in the <A href="/questionnaire-designer/interface/settings/">questionnaire settings</A> before importing.</TD>
<TR>
  <TD>2</TD>
  <TD><I>You have already imported another questionnaire with questionnaire
  variable '<CODE>NAME</CODE>' from Designer. If you still want to import this
  particular one, please give it a different questionnaire variable in Designer.</I></TD>

  <TD>You are importing a questionnaire with exactly the same questionnaire
  variable as another questionnaire already imported to this workspace.
  The questionnaire variable must be unique. The user needs to modify the
  <B><I>questionnaire variable</I></B> of the questionnaire in the
  <A href="/questionnaire-designer/interface/settings/">questionnaire
  settings</A> before importing.</TD>
</TR>
<TR>
  <TD>3</TD>
  <TD><I>The questionnaire "<CODE>NAME</CODE>" has compilation errors. Please
  correct them in Designer.</I></TD>
  <TD>Only questionnaires without <A href="/questionnaire-designer/messages/compile_errors/">compilation errors</A> may be imported from the
  Designer to the data server. If your questionnaire contains any errors, they
  must be corrected in the Designer tool first.
  </TD>
</TR>

<TR>
  <TD>4</TD>
  <TD><I>The questionnaire "<CODE>NAME</CODE>" cannot be found. Please refresh the list of questionnaires.</I></TD>
  <TD>The questionnaire was deleted in the Designer during the import process (by you or a different user, the questionnaire owner). You may not proceed, but must restart the import process and pick a different questionnaire.
  </TD>
</TR>

<TR>
  <TD>5</TD>
  <TD><I>Requested questionnaire cannot be found. Please refresh the list of questionnaires</I></TD>
  <TD>The questionnaire was deleted in the Designer during the import process (by you or a different user, the questionnaire owner). You may not proceed, but must restart the import process and pick a different questionnaire.
  </TD>
</TR>

<TR>
  <TD>6</TD>
  <TD><I>Your questionnaire <CODE>"NAME"</CODE> contains new functionality: ... . New feature(s) is not supported by your installation. Please update.</I></TD>
  <TD>The version of the software that is installed in your data server is too old to facilitate data collection with the questionnaire you are trying to import. The message usually includes hints on what specific functionality is not supported. An update of the data server is recommended in this case, but if an update is not possible, then the Designer tool must be used to edit the questionnaire to remove the not-supported features.
  </TD>
</TR>

<TR>
  <TD>7</TD>
  <TD><I>Designer unavailable. Please make sure that Designer is not in maintenance mode</I></TD>
  </TD>
  <TD>The server you are trying to import the questionnaire to experienced a problem communicating with the Designer server.<BR><BR>

<UL>
  <LI>First, try to repeat the import procedure. If it doesn't succeed continue troubleshooting.</LI>

  <LI>If there is a planned maintenance, a note on this may appear in the <A href="https://forum.mysurvey.solutions">users' forum</A>.</LI>

  <LI>Access the Designer site directly from the server. Check that you can login from that device. If you can't access it from the browser, the Survey Solutions server will face the same issue (note, that the reverse is not necessarily true).</LI>

  <LI>Check with the tools in the <A href="/faq/is-the-designer-tool-online-now-/">Is the Designer tool online now?</A> article to see if this is a user-specific or wide-spread issue.</LI>

  <LI>Check the <A href="/headquarters/config/healthcheck/">Healthcheck</A> page of the Survey Solutions data server, refer to "<I>Designer connection check</I>" item. (requires the user to be in the role <A href="/headquarters/accounts/survey-solutions-server-administrator/">administrator</A>.)</LI>

  <LI>You may also want to inspect the server logs, see <A href="/headquarters/config/standalone-server-errors/">Data Server Errors</A> for details (this requires file access to the system that is hosting Survey Solutions server).</LI>
</TR>

</TABLE>
