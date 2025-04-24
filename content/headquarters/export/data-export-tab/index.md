+++
title = "Data Export"
keywords = ["export","headquarters"]
date = 2016-07-11T19:45:00Z
lastmod = 2025-04-13T11:11:11Z
aliases = [
  "/customer/portal/articles/2494108-data-export-tab",
  "/customer/en/portal/articles/2494108-data-export-tab",
  "/customer/portal/articles/2494108",
  "/customer/en/portal/articles/2494108",
  "/headquarters/data-export-tab",
  "/customer/portal/articles/2932041-export-to-cloud-storage",
  "/customer/en/portal/articles/2932041-export-to-cloud-storage",
  "/customer/portal/articles/2932041",
  "/customer/en/portal/articles/2932041",
  "/headquarters/export-to-cloud-storage"
]

+++

Export of data may be requested at any time when the Survey Solutions server is
running (during or after the survey) and it doesn't cause any interruption of
the synchronization (of mobile devices) or online work (CAWI surveys). In case
the server is busy processing other export requests, the new export jobs are
put into a queue and processed sequentially. This article describes how to
request a data export from Survey Solutions.


<CENTER>
  <A href="images/export_request_annotated.png">
    <IMG src="images/export_request_annotated.png" width=800>
  </A>
</CENTER>


<aside class="warning admonition-content">

🛈 Data export functionality is available to users in the following roles:

 - Headquarters,
 - Administrator,

 API users don't make use of the visual interface presented here, but can also
 initiate data export and download the resulting files by submitting a
 corresponding query.

</aside>

1. In the main menu select `Data Export`.
2. Select the questionnaire corresponding to the survey that needs to be exported.
3. Select the questionnaire version (from available at the server).
4. Select the questionnaire language (if questionnaire contains translations).
5. Select the status of interviews that need to be exported or leave blank for
export of all interviews (in any status).
6. Select the period (only interviews last modified in this period are included in the export).
7. Select data type, *main survey data*, *binary data*, *audio audit*, or *paradata*.
8. Select whether to include metadata (does not apply to paradata export).
9. Select the format of the data file (does not apply to paradata export):
    * **Tab-separated data (*.tab)** - unicode text format with tab-character
    used as a delimiter.
    * **Stata format (*.dta)** - Stata statistical package format, Stata version 14 or newer can open these files.
    * **SPSS format (*.sav)** - SPSS statistical package format.

10. Select the export file destination (Binary data files, such as pictures and audio recordings are often large and can be time-consuming to download. One can opt for pushing the data to own cloud storage, rather than downloading directly):
    * **Download** - exported data will be prepared for downloading to the user's machine.
    * **Upload to OneDrive** - when the data is ready it will be pushed to OneDrive cloud storage.
    * **Upload to DropBox** - when the data is ready it will be pushed to DropBox cloud storage.
    * **Upload to Google Drive** - when the data is ready it will be pushed to Google Drive cloud storage.
11. Press the `Add to Queue` button to create a new export job and add it to the queue of export jobs.

If the queue is empty, a new job is immediately picked for processing.
Once an export job is processed, the result is either uploaded to the cloud
destination, or a `Download` button is presented to the user in a card
corresponding to the export job.

The cards are placed in the queue regardless whether the export was requested
directly from the web interface, or by submitting the corresponding request via
the [Survey Solutions' API](/headquarters/api/survey-solutions-api/).

If you've chosen export to the cloud storage, authenticate yourself with the
corresponding cloud storage provider. Note that despite the cloud-to-cloud data
transfer is usually faster than direct download, it may still take significant
time to complete, especially for large surveys.

## Interview filters

The data to be exported can be filtered by the following interview attributes:

- interview status;
- interview last updated date.

### Filtering by interview statuses
In step 5 the user may select all interviews (by not specifying any particular
status), or rather select one of the following:

- `interviewer assigned`
- `completed`
- `approved by supervisor`
- `approved by headquarters`

Note that selection is based on the _current_ status of interview when the export
of data is requested, and not on any of the past statuses that the interview
had. For example, if the interview is currently in the status
`Approved by Headquarters` it will not get exported when the status `Completed`
is specified, despite having one or more `Completed` events in the past.

### Filtering by date
In step 6 the user may optionally specify a date interval (in this user's time
zone) from the following options:

- `last 24 hours`;
- `last 7 days`;
- `last 30 days`;
- `today`;
- `yesterday`;
- `custom`.

Additionally, if `custom` is specified, the user can specify the `from` and
`to` date/time fields.

Specifying the date filter includes into the export only those interviews that
were last updated in the selected period. If no period is specified, the
interviews are included in the export regardless of their last modified
date/time values.

If the `from` parameter is not specified, the interviews are taken from the
earliest date available. Similarly, if the `to` parameter is not specified,
the interviews are taken to the present moment (the moment when the export file
is requested). If the `to` parameter is in the future, it is substituted with
the date/time of the export request. If, however, the `to` moment precedes the
`from`, then an error message is issued to the user, and the export file is not
generated.

#### Metadata

If metadata is requested to be included with main survey data, it includes:

- a DDI description file (in XML format);
- HTML document(s) containing textual representation of the questionnaire
(1 document per each translation of the questionnaire);
- a questionnaire document (in JSON format);
- questionnaire attachments (images, and other files that may be embedded into
the questionnaire).

See more on this in [Organization of meta-data storage in the exported
data](/headquarters/export/metadata-organization/).


<aside class="warning admonition-content">

🛈 Regardless of the choices you make for type of data to export and
        selection of the interviews, the export is compressed into a zip-archive
        and needs to be unpacked before use.

The zip-archive can be protected with password set by the server
        administrator for a particular workspace, see
        [admin settings](/headquarters/config/admin-settings/).

</aside>


#### Export card

Export cards corresponding to past export jobs can also be seen here.

<CENTER>
  <A href="images/export_card_annotated.png">
    <IMG src="images/export_card_annotated.png" width=800>
  </A>
</CENTER>

Each such card compactly displays a great amount of information about the export
job:


<TABLE class="table table-striped table-hover">
<TR>
<TH>#</TH>
<TH>Explanation</TH>
<TH>In this example</TH>
</TR>

<TR>
<TD>1.</TD>
<TD>Export job number</TD>
<TD><TT>1571</TT></TD>
</TR>

<TR>
<TD>2.</TD>
<TD>Job status</TD>
<TD><TT>COMPLETED</TT></TD>
</TR>

<TR>
<TD>3.</TD>
<TD>Timestamp when the export job was created</TD>
<TD><TT>APR 14, 2025 11:21</TT></TD>
</TR>

<TR>
<TD>4.</TD>
<TD>Title of the questionnaire and version</TD>
<TD><I>"2023_24 Kenya Integrated Survey of Agriculture Pilot"</I>
    version <TT>2</TT></TD>
</TR>

<TR>
<TD>5.</TD>
<TD>Format of export data</TD>
<TD><TT>STATA</TT></TD>
</TR>

<TR>
<TD>6.</TD>
<TD>Selection of interviews for export</TD>
<TD>Interviews in status <I>Completed</I></TD>
</TR>

<TR>
<TD>7.</TD>
<TD>Selection of language/translation</TD>
<TD>Translation: Original</TD>
</TR>

<TR>
<TD>8.</TD>
<TD>Selection of the period of last modification of the interviews.</TD>
<TD>From <TT>Apr 13, 2025 00:00</TT> to <TT>Apr 13, 2025 23:59</TT></TD>
</TR>

<TR>
<TD>9.</TD>
<TD>Destination</TD>
<TD>the job prepared a file for downloading by the user</TD>
</TR>

<TR>
<TD>10.</TD>
<TD>Time spent in queue</TD>
<TD>a few seconds</TD>
</TR>

<TR>
<TD>11.</TD>
<TD>Time spent on production of the export data</TD>
<TD>about a minute</TD>
</TR>

<TR>
<TD>12.</TD>
<TD>Timestamp when this job's output was last updated</TD>
<TD><TT>April 14, 2025 11:21</TT></TD>
</TR>

<TR>
<TD>13.</TD>
<TD>Approximate size of the file for download</TD>
<TD>about 3.5 MB</TD>
</TR>

<TR>
<TD>14.</TD>
<TD><TT>DOWNLOAD</TT> button<BR>(during production of the export data, while the
  <TT>DOWNLOAD</TT> button is not available, this space is utilized to display
  the current export step, such as <TT>RUNNING</TT> or <TT>COMPRESSING</TT>).</TD>
<TD>
</TR>

</TABLE>

NB: Note that the dates and times in the export card are shown in the time zone
of the user accessing the system through the web interface. A different user
(located in a different time zone) may see different dates/times for the same
data export jobs.


#### See also

* Description of the [data export](/headquarters/export/data-export-tab/)
* Description of the [paradata file format](/headquarters/export/paradata_file_format/);
* Description of the [system-generated data files](/headquarters/export/system-generated---export-file-anatomy/).
