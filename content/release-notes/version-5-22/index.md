+++
title = "Version 5.22"
keywords = [""]
date = 2017-08-03T20:02:47Z
lastmod = 2017-08-03T20:02:47Z
aliases = ["/customer/portal/articles/2853037-version-5-22"]

+++

<span id="docs-internal-guid-ae028570-a9b1-a788-c4e0-c4ff22425b67"><span
style="font-size: 11pt; font-family: Arial; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">In
Survey Solutions v5.22 we have added access to server by interviewers, a
new question type (audio) and various other improvements.</span></span>

<span id="docs-internal-guid-ae028570-a9b1-a788-c4e0-c4ff22425b67"><span style="font-size: 16pt; font-family: Arial; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">Audio question</span></span>
=======================================================================================================================================================================================================================================================

<span id="docs-internal-guid-ae028570-a9b1-a788-c4e0-c4ff22425b67"><span
style="font-size: 11pt; font-family: Arial; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">The
new audio question type has been added following the overwhelming number
of requests from our users, especially dealing with surveys in literacy,
education, and public opinion research. In these surveys the recording
of the respondent’s voice may serve quality control purposes or be
directly of interest to the researchers.</span></span>

<span id="docs-internal-guid-ae028570-a9b1-a788-c4e0-c4ff22425b67"><span
style="font-size: 11pt; font-family: Arial; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">Audio
question allows recording sound (voice) of the respondent as part of the
interview using the tablet’s microphone. The recorded data is then
transferred to the server and exported as part of the binary data
export.</span></span>

<span id="docs-internal-guid-ae028570-a9b1-a788-c4e0-c4ff22425b67"><span
style="font-size: 11pt; font-family: Arial; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">An
audio question doesn’t have any custom properties and can be added in
Designer by specifying an appropriate question type, text, variable name
and other common properties:</span></span>

<img src="images/803589.png" />

<span id="docs-internal-guid-ae028570-a9b2-aabe-2134-0f3ec0a91e3c"><span
style="font-size: 11pt; font-family: Arial; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">An
optional instruction may indicate how the interaction between an
interviewer and the respondent should proceed. As any other question,
audio question may be asked or skipped based on the internal logic of
the questionnaire, which is fully under control of the questionnaire
designer.</span></span>

<span id="docs-internal-guid-ae028570-a9b2-aabe-2134-0f3ec0a91e3c"><span
style="font-size: 11pt; font-family: Arial; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">Audio
questions may only have one scope: </span><span
style="font-size: 11pt; font-family: Arial; color: rgb(0, 0, 0); background-color: transparent; font-style: italic; vertical-align: baseline; white-space: pre-wrap;">interviewer</span><span
style="font-size: 11pt; font-family: Arial; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">.</span></span>

<span id="docs-internal-guid-ae028570-a9b2-aabe-2134-0f3ec0a91e3c"><span
style="font-size: 11pt; font-family: Arial; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">On
a tablet the audio question is represented similarly to an image type
question, with the button which needs to be tapped to start
recording:</span></span>

<img src="images/803590.png" width="300" /><img src="images/803591.png" />

<span id="docs-internal-guid-ae028570-a9b3-0613-b6f4-65174780fd0c"><span
style="font-size: 11pt; font-family: Arial; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">During
the recording, a timer and recording status are displayed. If necessary,
the recording can be deleted, and a new recording be made
instead.</span></span>

<span id="docs-internal-guid-ae028570-a9b3-0613-b6f4-65174780fd0c"><span
style="font-size: 11pt; font-family: Arial; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">Note
that the audio recording is activated by the interviewer, it is a
conscious action (commonly the consent of the respondent is also to be
obtained).</span></span>

<span id="docs-internal-guid-ae028570-a9b3-0613-b6f4-65174780fd0c"><span
style="font-size: 11pt; font-family: Arial; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">An
audio question can also be used in web interviews. Note that an audio
question has a 180 seconds limit on recording duration, and if the
recording is not cancelled at that time it will be saved automatically
replacing the previous answer for this question. For web interviews the
compression is performed on the server. All audio data is saved in the
AAC (advanced audio encoding) format into \*.</span>[<span
style="font-size: 11pt; font-family: Arial; color: rgb(17, 85, 204); background-color: transparent; text-decoration-line: underline; vertical-align: baseline; white-space: pre-wrap;">m4a
files</span>](https://www.google.com/search?q=m4a)<span
style="font-size: 11pt; font-family: Arial; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">.
</span></span>

<img src="images/803592.png" width="400" />

<span id="docs-internal-guid-124e28b3-a9b3-7880-1c60-5034c5dbc9c5"><span style="font-size: 16pt; font-family: Arial; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">Interviewer sign in to Survey Solutions</span></span>
================================================================================================================================================================================================================================================================================

<span id="docs-internal-guid-124e28b3-a9b3-7880-1c60-5034c5dbc9c5"><span
style="font-size: 11pt; font-family: Arial; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">In
this version we have expanded the Survey Solutions server functionality,
which now allows interviewers to sign in using the same credentials as
on the tablet. Once signed in, the interviewers have access to
their:</span></span>

-   <span
    id="docs-internal-guid-124e28b3-a9b3-7880-1c60-5034c5dbc9c5"><span
    style="font-size: 11pt; background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">Assignments;</span></span>

-   <span
    id="docs-internal-guid-124e28b3-a9b3-7880-1c60-5034c5dbc9c5"><span
    style="font-size: 11pt; background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">interviews
    (started, completed and rejected);</span></span>

-   <span
    id="docs-internal-guid-124e28b3-a9b3-7880-1c60-5034c5dbc9c5"><span
    style="font-size: 11pt; background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">Profile
    (counts of interviews and device description and
    status).</span></span>

<img src="images/803594.png" width="1000" />

<span id="docs-internal-guid-124e28b3-a9b3-dad9-25b3-059861345f13"><span
style="font-size: 11pt; font-family: Arial; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">When
an assignment has been made to the interviewer, he can pull it out to
the tablet (just clicking the synchronization button), or start it as a
web-interview and complete it online. Interviews started online, may be
completed online or on the tablet after synchronization, but interviews
received on the tablet must be completed on the tablet.</span></span>

<span id="docs-internal-guid-124e28b3-a9b3-dad9-25b3-059861345f13"><span style="font-size: 16pt; font-family: Arial; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">Other changes and improvements</span></span>
=======================================================================================================================================================================================================================================================================

-   <span
    id="docs-internal-guid-124e28b3-a9b3-dad9-25b3-059861345f13"><span
    style="font-size: 11pt; background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">Single-select
    cascading questions may now also use validation
    conditions;</span></span>
-   <span
    id="docs-internal-guid-124e28b3-a9b3-dad9-25b3-059861345f13"><span
    style="font-size: 11pt; background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">Comments
    are now supported in web interviews and can be accessed from the
    question’s menu;</span></span>

-   <span
    id="docs-internal-guid-124e28b3-a9b3-dad9-25b3-059861345f13"><span
    style="font-size: 11pt; background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">Interview
    key is now displayed throughout the whole system, including the
    tablet after the interview has been opened;</span></span>

-   <span
    id="docs-internal-guid-124e28b3-a9b3-dad9-25b3-059861345f13"><span
    style="font-size: 11pt; background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">Images
    taken with the tablet’s camera are automatically proportionately
    resized to have longer side no longer than 1024
    pixels;</span></span>

-   <span
    id="docs-internal-guid-124e28b3-a9b3-dad9-25b3-059861345f13"><span
    style="font-size: 11pt; background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">Language-switch
    icon was added to web interviews to signal the nature of the
    selection to international users.</span></span>
