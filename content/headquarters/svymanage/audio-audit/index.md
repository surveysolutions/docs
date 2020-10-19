+++
title = "Audio audit"
keywords = ["audio audit", "audit", "recording", "quality"]
lastmod = 2019-02-04T18:04:38Z
aliases = ["/headquarters/audio-audit"]
draft = false
+++

Description
----------------------------------------

Audio auditing enables Headquarters to listen in on interviews secretly. Audio auditing automatically records the full interview for selected assignments, stores the recording in encrypted audio files, and synchronizes these audio files along with the linked interview files.

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

- Navigate to Survey Setup > Assignments
- Click in the AUDIO RECORDING column to enable (disable) audio auditing for selected assignment

This action only affects the selected assignment.

How to get and understand audio files
----------------------------------------

To get audio files:

- Download the binary data for a template
- Navigate to the AudioAudit folder

To understand files, it is important to note that:

- Each audio file contains the recording of one interview session. These are the same sessions documented in the interview__actions file. A session starts when: either an interview is opened or the tablet wakes up while an interview is open. A session ends when: either the interview is closed or when the tablet goes to sleep.
- File names indicate content. The file name consists of : the interview__id + audio-audit + the date and time of the interview session. 

If an interview session is longer than 20 minutes, the audio will be split into files that contain at most 20-minute chunks. For example, if an interview consists of 34 minutes of continuous interviewing, there will be two audio files: one that covers the first 20 minutes; another that covers the next 14 minutes.

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
