+++
title = "Version 25.04"
keywords = ["25.04"]
date = 2025-04-24T00:00:00Z
lastmod = 2025-04-24T00:00:00Z
+++


This release concentrates on improvements in the data export process. The new
features include the following:

- export files retention policy;
- filtering of interviews for export by date/time of their last modification;
- reduced paradata export;
- separation of audio audit into a separate download;

Besides the new features, this release addresses several bugs that our users
have reported to us since the previous release.





Export files retention policy
------------------------------

Prepared export files used to accumulate over the lifetime of the server and
required manual server maintenance. But not anymore. With the help of the data
retention policy the server administrator may now set up automatic clean up of
older export files to utilize server's storage space more efficiently.

This feature is described in more detail in the
[data retention policy](/headquarters/config/data-retention-policy/)
article.


Filtering of interviews for export by date/time of their last modification
-----------------------------------------------------------------------------

The [data export](/headquarters/export/data-export-tab/) page now contains an
additional filter that allows specifying the time period. If specified, the
export will include only the interviews that have their last modified date in
that period.

This kind of filtering was already available for the API requests, but is
now also available interactively. It allows to limit the export to e.g.
the interviews that were modified yesterday, or in the last 7 days. For
surveys that continue over a long period of time (months, years) this allows
focusing only on recent data, and the size of the data downloads becomes
much smaller.

If the server is queried for data downloads periodically (such as daily, weekly)
producing a large number of export data files, consider also activating the
[export files retention policy](#export-files-retention-policy) described above.


Reduced paradata export
--------------------------

Paradata is a separate kind of data containing events occurring during the
data collection and useful for analysis of performance, clarity, reliability
and other. It is often considered a by-product of the data collection, but in
fact it is exactly how Survey Solutions works - by tracing all edits to the
interviews.

The stream of these events may contain thousands of events per interview, and
the resulting download may be massive (which creates difficulties to produce,
to download, and finally, to process these data files). The change introduced
in this release allows to export paradata in a reduced format, leaving out
some events that are not the actions of the user (reactions of the system to
the changes made by the users, such as disabling a question or a section).

As a result, the paradata files contain less events and can be transferred
and processed quicker.

The full stream of events that was produced in the earlier releases is still
available and is the default choice for exporting the paradata.

Read more about [paradata format](/headquarters/export/paradata_file_format/#reduced-paradata-set).



Separation of audio audit into a separate download
-----------------------------------------------------

Audio audit data (the audio recording of the whole interview) is an extremely
useful instrument how the interviewers' accuracy and compliance with the
protocols can be verified. Yet, because the whole interview is being recorded,
this data tends to be extremely large. Earlier versions of Survey Solutions
have lumped together the binary data (such as images and answers to audio
questions) and the audio audit data, resulting in inconvenience for data
processing (if you only needed images for processing, you still needed to
download all accompanying audio audit data.)

From this release onwards, the audio audit data becomes a separate download
type, which can be specified in the
[data export](/headquarters/export/data-export-tab/) page. This means that
one can specify more precisely what type of data is needed for the export
and obtain it, without having to download any extras.

This separation does not change the audio recording file format or the internal
organization of files in the audio audit export archives, and if the user has
both the binary data and audio audit data, they can be easily combined into the
same output that was produced earlier.
