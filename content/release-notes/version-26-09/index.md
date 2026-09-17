+++
title = "Version 26.09"
keywords = ["26.09"]
date = 2026-09-17T00:00:00Z
lastmod = 2026-09-17T00:00:00Z
+++

Survey Solutions v.26.09 Release Notes
This release introduces a number of enhancements across data collection,
questionnaire design, security, localization, and data export. These
improvements provide survey designers and administrators with greater
flexibility, stronger security options, and richer operational data.

- Audio Audit Playback.
- Greater Control Over Location Sources.
- GPS Provider Information in Paradata.
- Copying Questionnaires with Scenarios.
- Non-Negative Numeric Questions.
- Support for _reCAPTCHA v3_.
- Filter Questionnaire Change History.
- Target Area Map Name Length Validation.
- Additional Improvements.


**Audio Audit Playback**

Supervisors and Headquarters users can now play audio audit recordings directly
within Survey Solutions web interface during the review of the interviews data.
This simplifies quality control workflows by eliminating the need to download
recordings before listening to them.

<CENTER>
  <A href="http://localhost:1313/headquarters/interviews/audio-audit-playback/images/aaplayback.png">
    <IMG src="http://localhost:1313/headquarters/interviews/audio-audit-playback/images/aaplayback.png" width=75%>
  </A>
</CENTER>

See [audio audit playback](/headquarters/interviews/audio-audit-playback/) for more details.

**Greater Control Over Location Sources**

Administrators can now specify which location sources are permitted when
collecting GPS coordinates (at a workspace level). This provides additional
control over how location information is captured in the field and helps align
data collection with project requirements.
See [Workspace settings](/headquarters/config/admin-settings/#:~:text=Selection%20parameter-,Acceptable%20source(s)%20of%20location,-sets%20acceptable%20source).

**GPS Provider Information in Paradata**

Paradata exports now include information about the location provider and mode
used when coordinates are collected. This additional metadata can help teams
assess the quality and origin of recorded location information.
See [Paradata format](/headquarters/export/paradata_file_format#osource).

**Copying Questionnaires with Scenarios**

Questionnaire copies can now include associated scenarios. This enhancement
makes it easier to duplicate and reuse complete questionnaire configurations
when creating similar survey instruments.
See [Copy Questionnaire](/questionnaire-designer/interface/copy-questionnaire/).

**Non-Negative Numeric Questions**

The numeric question type now allows entry of non-negative values only by
default. This simplifies questionnaire design for variables that cannot
logically be negative and reduces the need for custom validation conditions.
Negative values can still be permitted if needed. Users will find that in older
questionnaires containing numerical questions so that their behavior is not
distorted by this change.
See [Numeric Question](/questionnaire-designer/questions/numeric-question/).

**Support for _reCAPTCHA v3_**

Survey Solutions now supports Google reCAPTCHA v3. Administrators can choose
this invisible CAPTCHA mechanism to help protect web questionnaires from
automated submissions while minimizing interruptions for respondents.
See [CAPTCHA Setup](/headquarters/config/captcha-setup/).

**Filter Questionnaire Change History**

Questionnaire change history at the Designer can now be filtered, making it
easier to locate specific modifications and review the evolution of a
questionnaire over time.
See [Recent Changes to the Questionnaire](/questionnaire-designer/interface/recent-changes-to-the-questionnaire/).

**Expanded Language Coverage**

All Survey Solutions subsystems have been translated into the full set of
supported languages (earlier some components were lacking translations, for
example Interviewer had been available in Vietnamese, but the Headquarters
not). In addition, Albanian is now available as a supported language
throughout the platform, improving accessibility for a wider range of users.
See [Language](/faq/language/).

**Target Area Map Name Length Validation**

To improve consistency and prevent operational issues, Survey Solutions now
enforces a limit on the length of target area map names.
See [Survey Solutions Limits](/questionnaire-designer/limits/survey-solutions-limits/#:~:text=Maximum%20length%20of%20target%20area%20file%20name%3A).

**Additional Improvements**

This release also includes performance improvements, bug fixes, and other
minor enhancements aimed at improving overall user experience and platform
reliability. We thank the users that reported the issues via the public forum,
issue tracker, and direct communication.
