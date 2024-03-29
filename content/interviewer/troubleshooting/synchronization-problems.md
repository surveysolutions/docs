﻿+++
title = "Synchronization problems"
keywords = [""]
date = 2018-05-16T21:21:23Z
lastmod = 2018-05-16T21:21:23Z
aliases = ["/customer/portal/articles/2939577-synchronization-problems","/customer/en/portal/articles/2939577-synchronization-problems","/customer/portal/articles/2939577","/customer/en/portal/articles/2939577","/interviewer/synchronization-problems"]

+++

Synchronization of the data between the tablet and server is a highly
complex process of communication during which a number of actions are
undertaken on both ends based on the flow of incoming data. Survey
Solutions hides the complexity of it behind a simple Synchronize button
available to the interviewer at any time. Normally, when synchronization
is completed successfully, the interviewer receives a confirmation
message and some summary statistics describing the actions taken (such
as number of received assignments or transferred interviews).

In some cases synchronization stops with errors. Interviewers should
remember that

1.  it is always safe to press the synchronization button again to
    retry. When the errors are caused by interference or noise in
    communication channel the synchronization is likely to succeed when
    repeated.
2.  if your supervisor has instructed you to synchronize (and this is
    important in some scenarios) and your synchronization has resulted
    in errors, then you haven't synchronized. Only when you received a
    confirmation message that the synchronization has completed
    successfully, then the synchronization is performed.

In countries with less reliable networks the probability of a failed
synchronization is higher. It is also higher for longer synchronization
sessions, such as ones where a large number of interviews are being
synchronized or when the interviews have a large amount of data.
Synchronizing frequently helps the whole system running.

Synchronization is a process of communication between the tablet and a
server, in which the connection is initiated by the tablet, which
searches and sends a query to the server. Hence the server must be
active and visible at all times when the interviewers might be
synchronizing (during all data collection period).

The tablet is searching the server by name, known as the
_synchronization point_, which is an URL of the server in the network.
This setting is entered once when the Survey Solutions App is installed
and logged in for the first time. Normally it doesn't change throughout
the data collection, though a possibility to change it exists in the
[Interviewer app settings](/interviewer/troubleshooting/interviewer-app-settings/).

**If you are experiencing a repetitive synchronization error after several
retries, the simplest action you can do is to navigate to the
synchronization point in your browser (typically Chrome on Android devices),
for example, https://demo.mysurvey.solutions.
The page that opens will usually contain some readable information about the
conßnectivity problems. This will help you track down the exact reason
for the problem and use the troubleshooting guide below to find a remedy
for it.**

<table border=1>

<thead>
<tr bgcolor="orange">
  <th><CENTER>Message</CENTER></th>
  <th><CENTER>Possible situation</CENTER></th>
  <th><CENTER>Recommendations</CENTER></th>
</tr>
</thead>

<tbody>
<tr>
<td width=160><span style="color:#008000;">Synchronization successfully completed. All assignments were updated.</span></td>
<td >Situation normal. No error.</td>
<td>Continue working as usual.</td>
</tr>
<tr>
<td rowspan=7 valign=top><span style="color:#FFA07A;">Synchronization was interrupted, please try again. No network. Check your network settings.</span></td>
<td>Not connected to WiFi network or lost the network connection during synchronization.</td>
<td>Check the connection to network is established. Try to open any site known to be operational at the moment, e.g. <em>www.google.com</em></td>
</tr>
<tr>
<td>Out of coverage area.</td>
<td>Move to the area with 3G/4G wireless coverage.</td>
</tr>
<tr>
<td>Mobile data switched off.</td>
<td>Switch the mobile data on in the tablet settings.</td>
</tr>
<tr>
<td>SIM card or data transfer disabled by the wireless provider.</td>
<td>Check if any site can be opened in browser. If not contact the SIM card (wireless) provider.</td>
</tr>
<tr>
<td>SIM card hardware malfunction</td>
<td>Check the SIM card is working in a different device. If not, replace the SIM card.</td>
</tr>
<tr>
<td>SIM card data plan traffic is exhausted.</td>
<td>Purchase additional traffic allowance from the SIM card vendor, or use an alternative network.</td>
</tr>
<tr>
<td>Tablet hardware issue</td>
<td>Check the wireless card and antenna according to the tablet manufacturer's checklist.</td>
</tr>
<tr>
<td rowspan=6 valign=top><span style="color:#FFA07A;">Synchronization was interrupted, please try again. No connection to the Survey Solutions Supervisor. Please make sure that the website is available.</span></td>
<td>Connected to a network, which requires further authentication or acceptance of special conditions, or payment.</td>
<td>Authenticate in the network (common for networks in hotels, cafes, etc)</td>
</tr>
<tr>
<td>Connected to a network, which limits access to certain sites or resources.</td>
<td>Make sure the HQ address of the server is whitelisted in the network.</td>
</tr>
<tr>
<td>Connected to a network, which limits access to Internet during certain hours.</td>
<td>Reconnect and retry during the hours when the network permits connections outside.<br />
<br />
Or use an alternative network/connection.</td>
</tr>
<tr>
<td>Survey Solutions synchronization point is entered incorrectly (or subsequently changed).</td>
<td>Verify in the <A href="/interviewer/troubleshooting/interviewer-app-settings/">interviewer app settings</A> (<em>Supervisor URL</em>) that the entered URL or IP is accurate for the Survey Solutions server.</td>
</tr>
<tr>
<td>Survey Solutions web server is down. </td>
<td>Wait for 30 minutes (or until the end of the planned outage/maintenance period) and retry.<br />
<br />
If the issue persists, open the synchronization point address in the web browser from the tablet and from a different device.<br />
<br />
Contact the server administrator with the error message displayed in the browser (attach a screenshot).</td>
</tr>
<tr>
  <td>Survey Solutions server is misconfigured</td>
  <td>If the message is issued on initialization of the Interviewer App on the tablet, and the site responds normally, when accessed from the same tablet, then check with the server administrator if the server is blocking any queries based on the WAF rules and introduce exceptions for the Survey Solutions.</TD>

<tr>
<td rowspan=2 valign=top><span style="color:#FFA07A;">Synchronization was interrupted, please try again. Timeout when connecting to the Survey Solutions Supervisor website. Check your internet connection.</span></td>
<td>Extremely slow network with packages delivered after a significant delay or lost.</td>
<td>Check the <em>Server Response timeout</em> setting in the [Settings of the Interviewer App](/interviewer/troubleshooting/interviewer-app-settings/) app is reasonably large, increase if necessary.<br />
<br />
Use alternative network if available.<br />
<br />
Retry in different time when the network is not so busy.</td>
</tr>
<tr>
<td>Connected to a network where the firewall is setup to prevent access to outside resources with timeout rather than special denial code.</td>
<td>Contact the network administrator to check the firewall settings of the network and make sure the synchronization point is accessible.</td>
</tr>
<tr>
    <td>
        <span style="color:#FFA07A;">Failed to verify certificate for target URL. Please, check if Headquarters website address is valid and your device has correct current date and time.</span>
    </td>
    <td>
        Installed SSL certificate for Headquarters application is incorrect or cannot be validated by tablet
    </td>
    <td>
        Check certificate validity using any external ssl testing tool <br/>
        Check current date and time on tablet. They should be correct
    </td>
</tr>
</tbody>
</table>
