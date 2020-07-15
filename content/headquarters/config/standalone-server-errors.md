+++
title ="Data Server Errors"
keywords = ["local", "standalone", "self-hosted", "error"]
date = 2020-06-15T00:00:00Z

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

Check the troubleshooting instructions for the export service contained in [this article](/headquarters/config/export-service/).

<FONT color="red">5. "Error during the site initialization. Check application log for details."</FONT>

This error occurring at the startup of the website may be caused by various configuration problems, of which the log files

- <TT>headquarters.*.log</TT> and 
- <TT>headquarters.verbose.json.*.log</TT>

should be informative (date is contained instead of the * in real files). For example, this error may occur if the database connection string entered during the installation was specified incorrectly. 

<FONT color="red">6. "This application only runs on Windows Server NNNN or higher."</FONT>

This error message is issued during the installation when the installation is taking place on a machine not satisfying the minimal [requirements](/faq/server-requirements/). Make sure you install Survey Solutions on a server version of MS Windows, not on a regular desktop version. Note also, that MS Windows NNNN Professional is not a server version of MS Windows.

<FONT color="red">7. "An unexpected error occured during export."</FONT>

This error message may be seen at the data export page and is rare. It signals 
about a situation, which was unanticipated and the Survey Solutions export 
service didn't manage to produce the data export file. It is not possible to 
say what exactly went wrong simply from this error message. Instead the application
log files must be inspected as they would contain evidence of what step of the
export has failed and what was the unexpected situation. This technical information 
is accessible to the IT-personnel (person administrating the server) and is not 
published on the data export page.

Users in the role of Headquarters should notify their server administrator regarding
the occurrence of this error.

The administrator will find the necessary logs in the <TT>Logs</TT> subfolder of the
folder where the Survey Solutions is installed. The log files are organized by date
to simplify locating the necessary files. They are text files, so the administrators 
can read them to try to identify the error themselves, or to inspect the information 
being sent if there are any privacy concerns.
