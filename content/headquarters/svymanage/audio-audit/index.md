+++
title = "Audio audit"
keywords = ["audio audit", "audit", "recording", "quality"]
lastmod = 2022-02-14T12:00:00Z
aliases = ["/headquarters/audio-audit"]
draft = false
+++

Description
----------------------------------------

Audio auditing enables Headquarters to listen in on interviews secretly. Audio auditing automatically records the full interview for selected assignments, stores the recording in encrypted audio files, and synchronizes these audio files along with the linked interview files. It is not possible to record only parts of an interview, but it is possible to select which assignments will be recorded.

How to enable/disable audio auditing
----------------------------------------

### Before creating an assignment

{{< imgproc "images/record-audio.png" Fit "640x480" />}}

- Navigate to Survey Setup > Questionnaires
- Click on a questionnaire
- Click in the box next to Record audio to enable (disable) audio auditing

After this point, all created assignments will have audio audit enabled (disabled).

To disable (enable) audio auditing, follow the same process to deselect (select) audio auditing for all future assignments.

### After creating an assignment

- Navigate to `Survey Setup` > `Assignments`
- Click in the `AUDIO RECORDING` column to enable (disable) audio auditing for selected assignment

This action only affects the selected assignment.

How audio auditing is enforced on the tablet
----------------------------------------

Just like with GPS or picture questions, Android prompts interviewers to allow Interviewer to use the microphone.

Naturally, survey managers could be concerned that intelligent interviewers would either deny Android the needed permissions, or accept the permissions but then subsequently disable them, thereby avoiding audio auditing of their interviews.

To prevent this behavior, interviewers will not be able to start interviews that require audio audit without enabling required Android permissions.

Similarly, survey managers may be concerned that this request for permissions, made for the first interview that requires audio audit, could tell interviewers that their interview will be recorded, thereby decreasing the utility of secret audio audits.

To prevent this, survey managers could explain that these permissions are simply needed by Interviewer application which, after all, has audio questions that do require the type of permissions Android would be requesting.

Important considerations
----------------------------------------

Audio recordings will increase the amount of data that needs to be synchronized with the server.

For technical reasons, interviews and their audio files must be sent together. The audio files are synced first, and then the interview file. That means the interview file will only be sent once the, potentially quite large, audio files have been sent.

Audio audit data format
----------------------------

See [audio audit files](/headquarters/export/audio-audit-files) article for details.
