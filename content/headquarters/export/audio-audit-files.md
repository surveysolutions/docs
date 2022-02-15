+++
title = "Audio Audit Files"
keywords = ["export"]
date = 2022-02-14T12:12:12Z
lastmod = 2022-02-14T12:12:12Z
+++

Survey Solutions has a feature of [audio audit](https://docs.mysurvey.solutions/headquarters/svymanage/audio-audit/): a capability of recording an interview and provide the recording for the audit of the interviewing process. The recording covers all the duration of the interview from the moment it starts to completion, except the time when:
- the tablet is off;
- the user switches to a different app;
- the interview is not active (Interviewer has switched to a different interview or switched to the dashboard);
- the audio recording is done as an answer to an audio question;
- when the interview is completed over the web (CAWI mode).

Audio audit files are exported as part of the binary data.
The naming convention used in forming this data archive is as following:

- the archive contains subfolders named according to the  `interview key` in the form of `NN-NN-NN-NN`.
- each subfolder corresponding to an interview may contain a subfolder `AudioAudit` if audio audit was activated for it.
- within the `AudioAudit` folder one or more audio files may be present. These files are named according to the following pattern:

`################################-audio-audit-YYYYMMDD_hhmmssfff.m4a`

where `###..#`` is a 32-digit long hexadecimal ID of the interview `interview__id` (NB: without any dashes);
* `YYYY` - four digit year;
* `MM` - two digit month;
* `DD` - two digit day;
* `hh` - two digit hour;
* `mm` - two digit minute;
* `ss` - two digit second;
* `fff` - fractions of a second (milliseconds) - 3 digits.

The timestamp included into the name of the file indicates the beginning of the recording session. Provided that there were no adjustments to the device clock, the audio recordings should be replayed in the increasing order of the timestamps.

All components of date and time are left-padded with zero if necessary to achieve the declared width.

The audio audit recording files have file extension `.m4a`.

The format of audio recording in the audio audit files is:
- AAC, mono, 44.100kHz
- data rate: 64.10 kbit/sec

The approximate duration of 1 hour of audio recording is thus:
```
64.10[kbit/sec] / 8[bit/byte] * 3600[sec/hour] = 28.845[MB/hour]
```
