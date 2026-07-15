+++
title = "Format of Audio Files"
keywords = ["configuration", "audio", "recording", "file format", "standard"]
date = 2026-07-14
aliases = []
+++

The audio files produced in Survey Solutions (audio audit files and answers to
audio questions) are recorded using AAC (*Advanced Audio Coding*) and have a
file extension `.m4a`.

The quality of the audio recording is determined by the
`Audio recording quality` setting of the
[workspace settings](/headquarters/config/admin-settings/). The possible values
are:

- 32kbps, mono, 16kHz;
- 64kbps, mono, 22.05kHz;
- 64kbps, mono, 44.1kHz;
- 128kbps, stereo, 44.1kHz;
- 128kbps, stereo, 48kHz.

Once this setting is changed, it becomes effective immediately (no need for the
administrator to `save` or `apply` it), but interviewer's devices need to
receive the new setting for it to be used for subsequent recordings. This will
be transmitted during the next device synchronization session.

To calculate approximate size of the audio recording (in MB) use the following
formula: `(B*D)/(8*1024*1024)`, where ***B*** is the bitrate (from the above
list), and ***D*** is the duration of the audio recording in seconds.

The following table shows approximate size (in MB) of audio recording by
duration and applicable bitrates:

<TABLE class="table table-striped table-hover">
  <TR align=center style="background-color: orange;">
      <TH>Duration, min</TH>
      <TH colspan=3><CENTER>Bitrate, kbps</CENTER></TH>
  </TR>
	<TR align=center style="background-color: orange;">
      <TH></TH><TH>32</TH> <TH> 64</TH> <TH> 128 </TH>
  </TR>
	<TR align=center><TD>  3</TD><TD>  0.7</TD><TD> 1.4</TD><TD>  2.7</TD></TR>
	<TR align=center><TD> 15</TD><TD>  3.4</TD><TD> 6.9</TD><TD> 13.7</TD></TR>
	<TR align=center><TD> 20</TD><TD>  4.6</TD><TD> 9.2</TD><TD> 18.3</TD></TR>
	<TR align=center><TD> 30</TD><TD>  6.9</TD><TD>13.7</TD><TD> 27.5</TD></TR>
	<TR align=center><TD> 40</TD><TD>  9.2</TD><TD>18.3</TD><TD> 36.6</TD></TR>
	<TR align=center><TD> 60</TD><TD> 13.7</TD><TD>27.5</TD><TD> 54.9</TD></TR>
	<TR align=center><TD> 90</TD><TD> 20.6</TD><TD>41.2</TD><TD> 82.4</TD></TR>
	<TR align=center><TD>120</TD><TD> 27.5</TD><TD>54.9</TD><TD>109.9</TD></TR>
</TABLE>

{{< panel title="Note:" style="info">}}
  Audio recording settings are used at the recording time. If the setting is
  changed after the recording has been submitted to the server it will still
  appear in the exported data with the audio quality effective at the time
  when the recording was made.
{{< /panel >}}

Survey Solutions prior to version 26.07 utilized the *64kbps, mono, 44.1kHz*
format for audio recording and this format is set by default for new workspaces.

##### More information

See:

- [audio question](/questionnaire-designer/questions/audio-question/) for a
description of audio questions.
- [audio audit](/headquarters/svymanage/audio-audit) for a description of the
audio audit.
- [audio audit files](/headquarters/export/audio-audit-files) for explanation
in the naming of the audio audit files.
