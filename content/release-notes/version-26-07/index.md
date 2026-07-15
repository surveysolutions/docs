+++
title = "Version 26.07"
keywords = ["26.07"]
date = 2026-07-15T00:00:00Z
lastmod = 2026-07-15T00:00:00Z
+++

This release introduces two new features related to recording of audio:
- selective audio audit;
- control over format of audio recording.

**Selective audio audit**. This feature expands the audio audit capability
of Survey Solutions. Previously the interviews were recorded in full. Now,
the user creating assignments may decide to record only some selected
sections where the value of the audit is the largest such as:
- where there are reasons to believe interviewer fraud may be the largest,
such as around gateway questions opening/closing large (time demanding)
sections;
- where the respondent's exact wording matters (sensitive questions);
- where the operationally important information is collected, for example, consent for
interviewing or data processing, etc.

Selective audio audit greatly reduces length of the recording resulting in:
- smaller size of the audio data transmitted with the interviews,
- faster transmission of this information to the server,
- faster export/downloading of this information for processing,
- faster inspection of the data by the personnel that listens in to the interviews,
- lower costs for data transmission, ML- or AI-assisted transcribing/translation.

Ultimately, all of these advantages enable the use of this technique more
commonly and thoroughly, resulting in better quality data and higher confidence
in decisions made based on survey data.

Read more about audio audit capabilities of Survey Solutions in
[audio audit](/headquarters/svymanage/audio-audit/).

**Control over format of audio recording**

A new workspace-level setting allows controlling the format of audio recordings
(used both for audio questions and for audio audit). By specifying a desired
recording format the users can achieve smaller sizes for data transfer or
better quality of recording, which may be desirable for some studies relying on
machine analysis of speech.

Read more about the audio recording format in
[format of audio files](/headquarters/config/audio-files-format/).


**Bug fixes and enhancements:**

- **Change of paradata**. For the `InterviewCreated` event the corresponding
assignment number is recorded in the parameters column.

- **Interviewer interface was frozen during downloading of large
files/updates**, and (in some cases) attempts to minimize the app or exit
the activity with the Back button could cause the application to crash.
This has been fixed.

- **GDAL dependency removal**: An earlier change made GDAL dependency
optional for importing GeoTIFF files, but users at the HQ couldn't see
the extent of the imported maps when GDAL was not present. This is now
fixed. GDAL dependency is no longer part of the Docker distribution.

- **Reserved names change**: several reserved words were not documented
as excepted or were not producing an expected error messages when used
in the Designer: `rostertitle`, `Identity`, `RosterVector`,
`QuestionnaireLevel`. This has been fixed and if used, the Designer
will report error `WB0058`.

- **Occurrence indication in Find/Replace dialog**: The Find/Replace
dialog in the Designer now indicates the occurrence number of the
matched text when navigating between them with the `PREVIOUS`/`NEXT`
buttons.

- **Trimming of comments**: Leading and trailing spaces in comments
are now removed.
