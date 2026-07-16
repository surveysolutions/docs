+++
title = "Audio audit"
keywords = ["audio audit", "audit", "recording", "quality"]
lastmod = 2026-07-15T00:00:00Z
aliases = ["/headquarters/audio-audit"]
draft = false
+++

Audio auditing enables audio recording of the interviewing process for quality
control.

Survey Solutions offers two modes for audio audit:

- **full**: the whole interview is recorded.
- **selective**: some parts of an interview are recorded (as decided by the HQ staff).

It is possible to:
- specify which assignments will be recorded and which will not.
- specify which mode (full or selective) is applicable to which assignment.
- define the scope of the selective audit recording differently
for different assignments.

Mobile devices store the recording in encrypted audio files, and synchronize
these audio files along with the corresponding interview data to the server
allowing for subsequent quality control.


##### How to enable/disable full audio auditing

**Before creating an assignment**

- In the main menu of the Headquarters navigate to `Survey Setup` >
`Questionnaires`;
- Click on a questionnaire;
- In the context menu that appears, select `Details`;
- Click in the box next to `Record audio` to enable audio auditing.

After this point, all newly created assignments will have audio audit enabled.
Note that the assignments that have been created to this point will retain
their assigned audit mode.

To disable audio auditing, follow the same process to deselect the checkbox and
switch off audio auditing for all future assignments. Any assignments that have
been created until that moment will retain their audio audit recording setting.

For assignments that are being created with a batch upload, the corresponding
attribute is `_record_audio`:
* set the value to: `1` to indicate that the audio audit recording should be
performed for this particular assignment, or  
* set it to `0` or leave blank (default) to indicate that no audio audit should
be performed for that assignment.

**After creating an assignment**

- In the main menu of the Headquarters navigate to `Survey Setup` →
`Assignments`;
- Click on the value in the `AUDIO RECORDING` column
- In the dialog that appears, check (or uncheck) the checkbox `Enable audio
recording` to enable (disable) audio auditing for selected assignment.

This action affects ***only the selected assignment*** (even if multiple
assignments are selected in the assignments list).


##### How to enable/disable selective audio auditing

Selective audio audit is based on a scope defined by the user creating an
assignment. This scope identifies which parts of the interview must be recorded,
by mentioning the relevant identifiers as a comma-delimited list in the
`_aascope` property during the batch upload of assignments, for example:
`demographics, health, labor, HHMEMBERS`.

The identifier of the following components may be mentioned:
- variable names of sections;
- variable names of sub-sections;
- variable names of rosters.

Note that the
[variable names](/questionnaire-designer/components/variable-names/) of
sections and sub-sections are optional in Survey Solutions. Thus the author
of the questionnaire must assign them at the questionnaire design to permit
their subsequent audio recording (full audio audit does not have this
requirement). To see which identifier was assigned to a certain container the
headquarters user may inspect the questionnaire preview document. It is
accessible via:
`Main menu` → `Survey Setup` → `Questionnaires` →
find and click the questionnaire title → `Details` →
click the link corresponding to `Questionnaire preview`.

Selective audio audit is not applicable directly to rosters in flat display
mode. In order to record the audio audit for questions included in such
rosters the identifier of the containing section (sub-section, roster) must be
mentioned.

Selective audio audit is not applicable to individual questions. To make sure
the answer to a particular question is recorded, mention the name of the
container for that question (specific section, sub-section, roster).

Selective audio audit is not hierarchical: Survey Solutions Interviewer App will
record when the user is in the container mentioned in the scope, but will not
record the sub-sections/rosters of that container. If recording of the
child containers is desirable, their names should also be mentioned in the
scope.

It is not possible to switch off (disable) the selective audio audit or change
the scope of the containers to be recorded after an assignment was created,
except that the full audit takes precedence over the selective one: if an
assignment was created with a selective audit (non-blank scope) an HQ or admin
user can subsequently turn on full audio audit for that assignment to record
interviews fully. This change will affect only new interviews created from
that assignment (after synchronization) and will not affect the interviews
that have been already started. A reverse change (switching off the full audio
audit for an assignment) will cause it to fall back to the selective audio
audit (if the corresponding scope was defined).

##### On a server

For every assignment in the assignments list there is an indication in the
`AUDIO RECORDING` column regarding the audio audit that will be applied to
the interviews originating from this assignment:

- *Yes* - full audio audit will be applied;
- *Selective* - selective audio audit will be applied;
- *No* - no audio audit will be applied.

If this mode has been changed, the mobile devices will need to be synchronized
to become aware of this change.

##### On a mobile device

The Android OS prompts the user to give the Interviewer App the [permission](/faq/android-permissions/) to
access the microphone. Interviewers will not be able to start interviews that
require audio audit without enabling required Android permissions.

If the permission is given and subsequently withdrawn, the interviewer will not
be able to continue the interview (until the permission to access the microphone
is reissued to the Interviewer App).
{{< panel title="Warning:" style="warning">}}
Modern versions of Android OS indicate to the users when the recording is in
progress, thus the interviewers are aware of it.
{{< /panel >}}

There is no setting or configuration available to interviewers to affect
whether the device will or will not record the audio for the purpose of audit
or the quality of such an audio recording.

##### Important considerations

Audio recordings will increase the amount of data that needs to be synchronized
with the server. The amount of audio audit data depends on the quality setting
and can be estimated using the table contained in
[Format of Audio Files](/headquarters/config/audio-files-format/).

Audio audit occurs only on a **mobile device** (does not apply to web interviews)
and only when the device is on and the interview is in progress (but not while
the interviewer is reviewing the dashboard, working with the settings, etc).

For technical reasons, the audio recording for audit purposes is not performed
during the following situations:

1. answering of a geography question;
2. selecting a file from the gallery;
3. taking a photograph with the camera;
4. scanning a barcode/qrcode with the camera;
5. adjusting the App's settings, running diagnostics, etc.
6. answering audio question (nb: recording is taken as the answer to the audio question and not added to audio audit recording).
7. viewing map data in an external application (following the link shown in GPS questions);
8. switching to any other App, or
9. switching to home screen.

For technical reasons, interviews and their audio files must be sent together.
The audio files are synced first, and then the interview file. That means the
interview file will only be sent once the, potentially quite large, audio files
have been sent.

The recording is done using the currently set up microphone, which is typically
the device's built-in microphone, but external microphones can also be used.

{{< panel title="Warning:" style="warning">}}
  Due to modern OS security restrictions (to protect the privacy of phone
  conversations), audio audit is not applicable for the cases when the
  interviewing is done via a phone call from the same device (i.e. when the
  Interviewer App is running on the same smartphone used for the call). In
  such a case the audio audit may not record the remote party (only the
  interviewer's voice will be recorded since the device's microphone isn't
  exposed to the respondent) or may be disrupted altogether (depending on
  the device manufacturer and OS version).
{{< /panel >}}


##### Exporting audio audit recordings

Audio audit data is a separate type of data export (separate from e.g. main
survey data, or binary data). Audio audit recordings are exported for
interviews passing the export selection (by status, date and time), and are
placed in subfolders corresponding to individual interviews.

There can be (and often are) multiple audio audit records for a single
interview due to interruptions of the recording caused by the events listed in
the [Important Consideratins](#important-considerations) section above, or
because of the occurrence of non-recordable sections in the selective audit. The
program or person conducting the analysis of the audio audit data should be
aware of this and be able to process multiple files in accordance with their
timestamps.

See [audio audit files](/headquarters/export/audio-audit-files) for specific
details on the naming of the audio audit files (the same pattern is used
whether the audio audit is full or partial).


##### More information

- For details on the quality settings for audio files see
[format of audio files](/headquarters/config/audio-files-format/).

- The naming of the audio audit files is explained in
[audio audit files](/headquarters/export/audio-audit-files).

- App permissions are described in
[Android App Permissions](/faq/android-permissions/).
