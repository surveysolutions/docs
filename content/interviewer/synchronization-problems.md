+++
title = "Synchronization problems"
keywords = [""]
date = 2018-05-16T21:21:23Z
lastmod = 2018-05-16T21:21:23Z
aliases = ["/customer/portal/articles/2939577-synchronization-problems"]

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
*synchronization point*, which is an URL of the server in the network.
This setting is entered once when the Survey Solutions App is installed
and logged in for the first time. Normally it doesn't change throughout
the data collection, though a possibility to change it exists in the
Interviewer app settings.  
 

<table>
<thead>
<tr class="header">
<th>Message</th>
<th>Possible situation</th>
<th>Recommendations</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><span style="color:#008000;">Synchronization successfully completed. All assignments were updated.</span></td>
<td>Situation normal. No error.</td>
<td>Continue working as usual.</td>
</tr>
<tr class="even">
<td><span style="color:#FFA07A;">Synchronization was interrupted, please try again. No network. Check your network settings.</span></td>
<td>Not connected to WiFi network or lost the network connection during synchronization.</td>
<td>Check the connection to network is established. Try to open any site known to be operational at the moment, e.g. <em>www.google.com</em></td>
</tr>
<tr class="odd">
<td> </td>
<td>Out of coverage area.</td>
<td>Move to the area with 3G/4G wireless coverage.</td>
</tr>
<tr class="even">
<td> </td>
<td>Mobile data switched off.</td>
<td>Switch the mobile data on in the tablet settings.</td>
</tr>
<tr class="odd">
<td> </td>
<td>SIM card or data transfer disabled by the wireless provider.</td>
<td>Check if any site can be opened in browser. If not contact the SIM card (wireless) provider.</td>
</tr>
<tr class="even">
<td> </td>
<td>SIM card hardware malfunction</td>
<td>Check the SIM card is working in a different device. If not, replace the SIM card.</td>
</tr>
<tr class="odd">
<td> </td>
<td>SIM card data plan traffic is exhausted.</td>
<td>Purchase additional traffic allowance from the SIM card vendor, or use an alternative network.</td>
</tr>
<tr class="even">
<td> </td>
<td>Tablet hardware issue</td>
<td>Check the wireless card and antenna according to the tablet manufacturer's checklist.</td>
</tr>
<tr class="odd">
<td><span style="color:#FFA07A;">Synchronization was interrupted, please try again. No connection to the Survey Solutions Supervisor. Please make sure that the website is available.</span></td>
<td>Connected to a network, which requires further authentication or acceptance of special conditions, or payment.</td>
<td>Authenticate in the network (common for networks in hotels, cafes, etc)</td>
</tr>
<tr class="even">
<td> </td>
<td>Connected to a network, which limits access to certain sites or resources.</td>
<td>Make sure the HQ address of the server is whitelisted in the network.</td>
</tr>
<tr class="odd">
<td> </td>
<td>Connected to a network, which limits access to Internet during certain hours.</td>
<td>Reconnect and retry during the hours when the network permits connections outside.<br />
<br />
Or use an alternative network/connection.</td>
</tr>
<tr class="even">
<td> </td>
<td>Survey Solutions synchronization point is entered incorrectly (or subsequently changed).</td>
<td>Verify in the interviewer app settings (<em>Supervisor URL</em>) that the entered URL or IP is accurate for the Survey Solutions server.</td>
</tr>
<tr class="odd">
<td> </td>
<td>Survey Solutions web server is down. </td>
<td>Wait for 30 minutes (or until the end of the planned outage/maintenance period) and retry.<br />
<br />
If the issue persists, open the synchronization point address in the web browser from the tablet and from a different device.<br />
<br />
Contact the server administrator with the error message displayed in the browser (attach a screenshot).</td>
</tr>
<tr class="even">
<td><span style="color:#FFA07A;">Synchronization was interrupted, please try again. Timeout when connecting to the Survey Solutions Supervisor website. Check your internet connection.</span></td>
<td>Extremely slow network with packages delivered after a significant delay or lost.</td>
<td>Check the <em>Server Response timeout</em> setting in the Settings of the Interviewer app is reasonably large, increase if necessary.<br />
<br />
Use alternative network if available.<br />
<br />
Retry in different time when the network is not so busy.</td>
</tr>
<tr class="odd">
<td> </td>
<td>Connected to a network where the firewall is setup to prevent access to outside resources with timeout rather than special denial code.</td>
<td>Contact the network administrator to check the firewall settings of the network and make sure the synchronization point is accessible.</td>
</tr>
</tbody>
</table>
