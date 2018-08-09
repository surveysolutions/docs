+++
title = "Downloadable Report on Interviewers"
keywords = [""]
date = 2017-12-06T15:28:43Z
lastmod = 2017-12-06T15:28:43Z
aliases = ["/customer/portal/articles/2908671-downloadable-report-on-interviewers"]

+++

This report is accessible in CSV, TSV, or Excel formats from the list of
the interviewers screen and contains important information about the
equipment being used by the interviewer and various statistics about the
interviewer accounts, equipment status, etc.  
  
Thematically the indicators reported here are placed in the following
groups:

<table>
<thead>
<tr class="header">
<th style="text-align: center;">Indicator naming</th>
<th>Group</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td style="text-align: center;">i_*</td>
<td>indicators related to the interviewer account<br />
these indicators represent static or accumulated information about the interviewer account</td>
</tr>
<tr class="even">
<td style="text-align: center;">t_*</td>
<td>indicators related to the tablet device;<br />
these characteristics, like RAM size or manufacturer are not expected to change throughout the lifetime of the device.</td>
</tr>
<tr class="odd">
<td style="text-align: center;">s_*</td>
<td>indicators related to the current status;<br />
these characteristics, like battery charge, or screen orientation may change throughout the lifetime of the device.</td>
</tr>
<tr class="even">
<td style="text-align: center;">z_*</td>
<td>indicators related to the last synchronization session;<br />
these indicators characterize the last synchronization session.</td>
</tr>
<tr class="odd">
<td style="text-align: center;">d_*</td>
<td>indicators related to dashboard of the interviewer<br />
these indicators characterize the state of the interviewer's dashboard.</td>
</tr>
</tbody>
</table>

  
Below is the full list of the indicators exported in this report and
their interpretation

<table>
<thead>
<tr class="header">
<th>Indicator</th>
<th>Interpretation</th>
<th>What to expect, example</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>i_name</td>
<td>Login name of the interviewer</td>
<td>johnsmith</td>
</tr>
<tr class="even">
<td>i_id</td>
<td>Unique ID of the interviewer's account</td>
<td>d7a7324a-c4f9-472d-8f16-be3a5c38f3a1</td>
</tr>
<tr class="odd">
<td>i_supervisorName</td>
<td>Login name of the supervisor, which supervises this interviewer</td>
<td>maryjackson</td>
</tr>
<tr class="even">
<td>s_appVersion</td>
<td>Version of the Survey Solutions Interviewer App installed on the tablet of this interviewer</td>
<td>5.25.10 (build 12345) with Maps</td>
</tr>
<tr class="odd">
<td>s_updateAvailable</td>
<td>Flag whether an update is available for the Interviewer App</td>
<td>True, False</td>
</tr>
<tr class="even">
<td>s_linkedDate</td>
<td>Date when the tablet was linked or last re-linked</td>
<td>11/16/2017 4:11:04 PM</td>
</tr>
<tr class="odd">
<td>i_nSyncSucc</td>
<td>Total number of successful synchronization sessions</td>
<td>10</td>
</tr>
<tr class="even">
<td>i_nSyncFail</td>
<td>Total number of failed synchronization sessions</td>
<td>2</td>
</tr>
<tr class="odd">
<td>n_avgSyncSpeed</td>
<td>Average synchronization speed, in bytes per second</td>
<td>4000</td>
</tr>
<tr class="even">
<td>t_lastCommDate</td>
<td>Last communication date</td>
<td>11/15/2017 12:00:00 AM</td>
</tr>
<tr class="odd">
<td>t_id</td>
<td>Tablet device ID</td>
<td>b48cc07217168f0c</td>
</tr>
<tr class="even">
<td>t_serialNumber</td>
<td>Tablet device serial number</td>
<td>1374c8ba06c120a8</td>
</tr>
<tr class="odd">
<td>t_deviceType</td>
<td>Type of the device (tablet or phone)</td>
<td>Tablet, Phone</td>
</tr>
<tr class="even">
<td>t_manufacturer</td>
<td>Device manufacturer</td>
<td> HP, samsung, asus, ...</td>
</tr>
<tr class="odd">
<td>t_model</td>
<td>Device model</td>
<td>SM-T350, P01M, ...</td>
</tr>
<tr class="even">
<td>t_buildNumber</td>
<td>Device build number</td>
<td>MMB99M.T350XXU1BSS1</td>
</tr>
<tr class="odd">
<td>s_language</td>
<td>Current interface language of the device (written in that language)</td>
<td>English, Русский</td>
</tr>
<tr class="even">
<td>s_androidVersion</td>
<td>Version of the Android OS currently installed on the linked device.</td>
<td>5.0 Lollipop(21)</td>
</tr>
<tr class="odd">
<td>s_updatedDate</td>
<td>Date of the last update of the installed Survey Solutions App</td>
<td>11/15/2017 12:00:00 AM</td>
</tr>
<tr class="even">
<td>s_lastKnownLocationLat</td>
<td>Latitude of the last known location of the tablet*</td>
<td>43</td>
</tr>
<tr class="odd">
<td>s_lastKnownLocationLon</td>
<td>Longitude of the last known location of the tablet*</td>
<td>-29</td>
</tr>
<tr class="even">
<td>s_orientation</td>
<td>Screen orientation of the device</td>
<td>Portrait, Landscape</td>
</tr>
<tr class="odd">
<td>s_batteryStatus</td>
<td>Battery charge, percent</td>
<td>66</td>
</tr>
<tr class="even">
<td>s_powerSource</td>
<td>Power source</td>
<td>Ac, Battery, Usb, Charge,</td>
</tr>
<tr class="odd">
<td>s_powerSaveMode</td>
<td>Flag whether the device is in the power save mode</td>
<td>True, False</td>
</tr>
<tr class="even">
<td>s_storageFree</td>
<td>Free storage space on device, in bytes</td>
<td>7863558144</td>
</tr>
<tr class="odd">
<td>t_storageTotal</td>
<td>Total storage space on device, in bytes</td>
<td>11907813376</td>
</tr>
<tr class="even">
<td>s_RAMFree</td>
<td>Free RAM space on device, in bytes</td>
<td>499838976</td>
</tr>
<tr class="odd">
<td>t_RAMTotal</td>
<td>Total RAM space on device, in bytes</td>
<td>1498583040</td>
</tr>
<tr class="even">
<td>s_databaseSize</td>
<td>Size of the Survey Solutions database locally stored on the tablet, in bytes</td>
<td>862725</td>
</tr>
<tr class="odd">
<td>z_serverClockAtBeginLastSync</td>
<td>Server clock at the beginning of the last synchronization session</td>
<td>9/30/2017 9:51:15 AM</td>
</tr>
<tr class="even">
<td>z_tabletClockAtBeginLastSync</td>
<td>Tablet clock at the beginning of the last synchronization session</td>
<td>9/30/2017 9:56:56 AM</td>
</tr>
<tr class="odd">
<td>z_connectionType</td>
<td>Type of connection used during the last synchronization session</td>
<td>3G, GPRS, WIFI, LAN**</td>
</tr>
<tr class="even">
<td>z_connectionSubType</td>
<td>Sub type of the connection used during the last synchronization session</td>
<td>1</td>
</tr>
<tr class="odd">
<td>z_questReceivedOnTablet</td>
<td>Number of questionnaires received by the tablet during the last synchronization session.</td>
<td>1</td>
</tr>
<tr class="even">
<td>z_intervReceivedOnTablet</td>
<td>Number of interviews received by the tablet during the last synchronization session</td>
<td>2</td>
</tr>
<tr class="odd">
<td>z_intervReceivedOnServer</td>
<td>Number of interviews received by the server during the last synchronization session</td>
<td>5</td>
</tr>
<tr class="even">
<td>d_numberAssignments</td>
<td>Total number of assignments on the interviewer's dashboard as present during the last synchronization.</td>
<td>12</td>
</tr>
<tr class="odd">
<td>d_numberNewInterviews</td>
<td>Total number of new interviews on device as present during the last synchronization.</td>
<td>3</td>
</tr>
<tr class="even">
<td>d_numberRejectedInterviews</td>
<td>Total number of the rejected interviews on device as present during the last synchronization.</td>
<td>0</td>
</tr>
</tbody>
</table>

\* Coordinates represent only the last known location of the tablet,
which may differ from the current location of the tablet;  
\*\* exact spelling of categories may vary by models, for example: WiFi
or WIFI
