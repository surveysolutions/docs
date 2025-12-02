+++
title ="Data Server Errors"
keywords = ["local", "standalone", "self-hosted", "error", "troubleshooting"]
date = 2020-06-15T00:00:00Z
aliases = ["/customer/portal/articles/standalone-server-errors"]


+++

The following errors may be encountered when working with a data server:


<FONT color="red">1. "Unable to import new questionnaire: Could not connect to Designer. Please check if Designer is available and try again."</FONT>

Your Headquaters installation is trying to contact the Survey Solutions Designer server to import the questionnaire, but can't reach it. It is very unlikely that the Designer is not responding or is not working [read how to check here](/faq/server-not-working/) so the problem is most likely with your network configuration. Consult your network administrator and ask him/her to trace the signal and see where it stops. Most commonly it is prevented by your Firewall software or hardware.

Currently, Designer application is available at https://designer.mysurvey.solutions, this address is accessed every time an HQ-user is trying to import a questionnaire to the server.  
Please make sure that this URL is reachable from the server that is hosting the Headquarters app.

<FONT color="red">2. "The server is not registered with Questionnaire Designer. Please contact support for registration. IP=n1.n2.n3.n4"</FONT>

This message was only issued by older installations of the Survey Solutions software, which should be updated by now. Survey Solutions doesn't issue this message since version 20.05.

<FONT color="red">3. "New feature(s) is not supported by your installation. Please update."</FONT>

You are trying to import a questionnaire that is utilizing a feature that your installation doesn't support. (The message may also mention a specific feature). Either update your Survey Solutions installation, or re-design your questionnaire not to use the feature which is mentioned. Check the [release notes](/release-notes/) for identifying recently added features that may not be avaialble in your current installation. Keep your data server recent to prevent bugs and security problems.

On the cloud servers that our team manages this error is very unlikely as we tend to update all of these servers within days after a new version is released. If you encounter this error on a cloud server https://*.mysurvey.solutions, and you believe the server should be already up-to-date by this time, please contact the support team.

<FONT color="red">4. "Export service unavailable."</FONT>

You are likely using a very old version of Survey Solutions if you are seeing this message. Before troubleshooting the issue, consider updating first.

<FONT color="red">5. "Error during the site initialization. Check application log for details."</FONT>

This error occurring at the startup of the website may be caused by various configuration problems, of which the log files

- <TT>headquarters.*.log</TT> and
- <TT>headquarters.verbose.json.*.log</TT>

should be informative (date is contained instead of the * in real files). For example, this error may occur if the database connection string entered during the installation was specified incorrectly. See also #15 below if the message also mentions database connectivity.

<FONT color="red">6. "This application only runs on Windows Server NNNN or higher."</FONT>

This error message is issued during the installation when the installation is taking place on a machine not satisfying the minimal [requirements](/faq/server-requirements/). Make sure you install Survey Solutions on a server version of MS Windows, not on a regular desktop version. Note also, that MS Windows NNNN Professional is not a server version of MS Windows.

<FONT color="red">7. "An unexpected error occured during export."</FONT>

This error message may be seen at the data export page and is rare. It signals
about a situation, which was unanticipated and the Survey Solutions export
service didn't manage to produce the data export file. It is not possible to
say what exactly went wrong simply from this error message. Instead the server
administrator should review the <A href="#logs">server logs</A> and if not able to
identify the problem independently, contact support. Users in the role of
Headquarters should notify their server administrator regarding the occurrence
of this error.

<FONT color="red">8. "ReferenceError: google is not defined."</FONT>

The message is displayed when the user accesses the map report at the server, where
the map engine settings were not configured correctly and hence the map may not be
displayed.

See the [Google maps](/headquarters/config/server-installation/#google-maps)
section of the server installation instructions.


<FONT color="red">9. "Application cannot connect to database using provided connection string"</FONT>

The Survey Solutions server couldn't connect to the database that stores its
data. This could be due to a number of reasons, most commonly because either the
address of the DB server is specified incorrectly or because the server is not
reachable.

<FONT color="red">10. "Error 28P01: password authentication failed for user
UUUUUU."</FONT>

The error occurs at application startup and indicates that Survey Solutions
could not access the database using the user name/password combination specified
in the connection string. Typically the name of the user 'postgres' is mentioned
in the error message unless a different user has been specified in the db
connection string.

<FONT color="red">11. PostgreSQL error XX001<PRE>
...
Exception data:
    Severity: ERROR
    SqlState: XX001
    MessageText: could not read block ###### in file "~~~~~~~~": read only ### of ### bytes
...
</PRE></FONT>

This error message is not displayed to the user, but may be encountered in the
server log files visible to the system administrator (typically a different
person from the Survey Solutions administrator). Visual clues to the users
may vary, but generally may present themselves as "strange behavior", which
could be, for example, the Survey Solutions indicating that the export of
data has been started, but never completes, or saying that a user has been
created, while in fact it is not, and other similar unexplained deviations.

If it is present, it indicates that there was a problem reading the data stored
in the database and transaction was aborted. **This is a serious error**, commonly
caused by defective hardware.

Most of the users are never concerned about the database used by
Survey Solutions internally, since all the data structures needed for functioning
of the software are created, updated, and deleted automatically. Technically,
though, Survey Solutions uses PostgreSQL database for storing the data (this
may change in the future, refer to the installation instructions for the
current version, section on prerequisites/dependencies).
(<A href="https://www.postgresql.org/docs/12/errcodes-appendix.html">PostgreSQL error</A>)

If the above error message is encountered in the log files, the system
administrator should plan for a recovery process. Some possible reasons for
this problem and advice for recovery are available at the following page:
[PostgreSQL-wiki:Corruption](https://wiki.postgresql.org/wiki/Corruption).

Continuing the use of a system with a corrupt database may aggravate the
problem, making the recovery more difficult or impossible. Still, the system
administrator must proceed with caution and make a snapshot of the data
before making any corrections, because introducing any changes may limit
the subsequent options for recovery.

The exact steps to do vary case by case, but will likely require professional
expertise and results may vary. This is not an error caused by Survey
Solutions code, so Survey Solutions developers will not be able to
provide assistance in case of such failures.


<FONT color="red">12. PostgreSQL error XX002<PRE>
...
Exception data:
    Severity: ERROR
    SqlState: XX002
    MessageText: index "~~~~~~~~" contains unexpected zero page at block ###
    Hint: Please REINDEX it.
...
</PRE></FONT>

The above error message is evidence of violation of integrity of the database
where Survey Solutions stores its data in the server
(<A href="https://www.postgresql.org/docs/12/errcodes-appendix.html">PostgreSQL error</A>).
If the problem is caused by failing hardware, then the severity is high and
the user should follow the same advice as in the case #11 above.

If the thorough analysis of the hardware (including search for bad sectors,
file read fails, etc) indicates that the hardware is healthy and reliable, the
user should reindex the database as advised in the message.

Reindexing is a standard non-destructive maintenance operation, see for example this
[external site video](https://youtu.be/VYuYNRvxTvw?t=490)
or [section 6.5 in the pgAdmin documentation](https://pgadmin-archive.postgresql.org/pgadmin4/v5.2/docs/pgadmin4-5.2.pdf)

The database index may be rebuilt if the data is not affected. But if the
hardware has failed for the index, next time it may fail for the data,
which will not be recoverable. Hence disregarding the hardware check
is risky and not recommended. See also:
[PostgreSQL-wiki:Corruption](https://wiki.postgresql.org/wiki/Corruption).


<FONT color="red">13. WAF blocking</FONT><BR>

<P>
An interviewer may report inability to log in to the tablet Interviewer App
(see <A href="/interviewer/troubleshooting/synchronization-problems/">synchronization problems</A>).
This could be due to the server's
<A href="https://en.wikipedia.org/wiki/Web_application_firewall">WAF</A> configuration.
The issue occurs typically
 and manifests itself with:</P>
<UL>
  <LI>an error message indicating that the site is not available:
      <I>"No connection to the Survey Solutions Supervisor. Please make sure that the website is available."</I></LI>
  <LI>during the first login to the tablet Interviewer App</LI>
  <LI>the site is responding when accessed from a browser of the same tablet</LI>
  <LI>the tablet is able to send diagnostics information to the server, but the diagnostics shows no errors or no relevant errors.</LI>
</UL>
</P>

<P>The issue can be diagnozed by making a probe synchronization and then
reviewing the WAF log by the timestamp when the communication with the
server was attempted. The log will contain the blocked query, for example
<TT>/api/interviewer/...</TT> and the user-agent will indicate
<TT>org.worldbank.solutions.interviewer/21.01</TT> (or a similar version id).</P>

<P>The exact unblocking actions depend on the software facilitating WAF
and the rules engaged and requires cooperation of the person or organization
managing the WAF. See example for <A href="https://support.f5.com/csp/article/K7931">BIG-IP ASM</A>
on a third-party site.</P>


<FONT color="red">14. WebSockets not enabled</FONT><BR>

The issue has the following symptomatics:
- the server appears working normally;
- an administrator or an HQ user cannot create new assignments one-by-one from a web interface, or
- a supervisor can't review a submitted interviw, or
- an interviewer working on the server can't start an interview, or
- a respondent to web-interiew can't open it.

<P>Survey Solutions uses <A href="https://en.wikipedia.org/wiki/SignalR">SignalR</A> library,
which communicates over <A href="https://en.wikipedia.org/wiki/WebSocket">WebSockets</A>.
If the WebSockets connectivity is not available, the above-mentioned functionality will not
be available either. Survey Solutions may not control WebSockets on its own. WebSockets must
be enabled by the person installing the Survey Solutions server. See more details at this
<A href="https://docs.microsoft.com/en-us/iis/configuration/system.webserver/websocket">Microsoft's page</A>.</P>

<P>To help diagnoze this problem, refer to the <B><I>WebSocket connectivity check</I></B>
as described in the <A href="/headquarters/config/healthcheck/">Healthcheck</A> article.</P>

<FONT color="red">15. Application cannot connect to database using provided
connection string. Check application log file for details</FONT><BR>

This message may be encountered when accessing the server login page in
a browser, and indicates that the server failed to start. The application
log files are described below. For this specific error, please refer to the
page [DB connection errors](/headquarters/config/db-connection-errors).


<A name="logs">

### Application log files

In some cases the application log files must be inspected for evidence of what step of the  has failed and/or what was the unexpected situation. This technical information is accessible to the IT-personnel (person administrating the server) and is not published on any of the web pages served by the server.

The administrator will find the necessary logs in the `Logs` subfolder of the
folder where the Survey Solutions is installed. The log files are organized by date
to simplify locating the necessary files. They are text files, so the administrators
can read them to try to identify the error themselves, or to inspect the information
being sent if there are any privacy concerns.

If Survey Solutions was installed using the default destination
`C:\Survey Solutions` then the log files are placed to the folder `C:\Survey Solutions\Site\Logs` and the files are named `headquarters.[date].log`.

If you are sending the log files to support, please keep in mind that our messaging system does not support attachments of multiple megabytes in size. If you need to send large files (more than ~1MB) please use a file sharing service and send us the link instead. If you encrypt your log files with a password, don't forget to include it into the same message.
