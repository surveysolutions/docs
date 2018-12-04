+++
title = "Version 18.12"
keywords = ["18.12"]
date = 2018-12-04T11:38:43-04:00
+++


## Support for additional multimedia types in attachments: audio, video, and PDF documents

In addition to the images that can be inserted into the questionnaire, the questionnaire authors can now include audio, video and PDF documents as attachments. This opens up a possibility to include various samples of information for the respondent or provide video instructions on how certain actions need to be taken, for example operating complex measurement equipment. One obvious application for the PDF attachment is inclusion of the interviewer’s manual into the questionnaire so it is always a click away when it is needed to double check the definitions.

{{< imgproc "images/attachments.png" Fit "800x600" />}}

The media attachments are an integral part of the questionnaire and will be synchronized with it all together. If you need to change an attachment you do it in the Designer, which results in a new version of the questionnaire.

Be mindful of the size of the multimedia attachments. Each image is adding to the total size of the questionnaire, and videos may cause the questionnaire to become extremely large, meaning downloading them on the tablet will be slower and with unreliable communications more difficult. We recommend individual video attachments to be under 5MB in size, which is a reasonable size for about a 30 seconds video in 1280x720 size and MP4 format.

Users of older versions of Android operating system (prior to Android version 5.0) should either update their OS to 5.0 or download an external PDF viewer to be able to view the attached PDF files.

## Default value for the date question

Normally when a date is asked in the date question, the calendar opens at the current date. When this is not desirable, a different default date may be specified. For example, if we know that many people in the survey have applied for benefits in a certain program right at the time when it was started a year ago, we can specify that date as the default. This will reduce the amount of scrolling in the calendar to reach the particular date.

{{< imgproc "images/default_value.png" Fit "800x600" />}}

Note that this value is a constant and is the same for all the respondents in the survey.

Note also that the *"default"* here should be interpreted as the *"opening"* date for the calendar input that appears. If the question is left unanswered, the value exported is still going to be a missing, and not the value you specify in the Designer.

## Hiding all disabled questions

Each question in Survey Solutions has a flag which determines whether the question should be present on the screen in disabled state or removed completely when it is not applicable (disabled by the logic). While preferences may differ, if you are a fan of the latter, you may find it a tedious task to go through the questionnaire and make sure all the flags “hide if disabled” are set to achieve this behavior.

Now there is a global flag, an attribute of the questionnaire set in its settings, which controls what happens to the disabled questions. When this flag is set, it overrules individual questions’ settings and hides all disabled questions throughout the questionnaire. When the flag is not set, the individual flags are obeyed.

## Heatmap overlay for map reports

A heatmap is a new way of presenting the concentration of observations in the map report at the Headquarters. The earlier presentation (remains available) is relying on clustering of points.

{{< imgproc "images/map.png" Fit "800x600" />}}

In the heatmap, the areas with higher concentration of observations are shown with more red color while the areas of lesser concentration are shown with more green color.

{{< imgproc "images/heatmap.png" Fit "800x600" />}}

Note, that the heatmap fully preserves anonymity of the respondents. These maps could be used to show the progress of surveys without revealing the exact locations of the interviews.

## Traffic usage

New charts are added to the interviewer profile reflecting the use of traffic to measure sent, received and total traffic. This is useful for the clients utilizing the mobile networks for synchronization and want to monitor the usage of traffic by their interviewers.

{{< imgproc "images/traffic.png" Fit "800x600" />}}

The traffic volume is estimated as total size of data transmitted regardless of the connection mode (WiFi, 3G, etc). The rounding, compression, and other factors on the side of the ISP may cause a difference between this estimate and actual data usage.

## Client data encryption

Survey Solutions development team remains committed to providing our users with a secure and reliable solution for their survey data collection activities. Version 18.12 adds a new layer of defence against unauthorized data access: Now all the data stored in the tablet database will be additionally encrypted with a strong industry-standard algorithm for data encryption, which inhibits data access in case the tablet gets lost or stolen. The newly added defence is completely transparent for authenticated interviewers.

Besides the answers to all questions, the multimedia information (audio recordings, photographs) is also encrypted. In addition, the data stored by Survey Solutions on the tablet is saved to the private storage, which is protected by the Android OS from access of other applications.

The protection of the data during transmission is achieved by utilizing SSL secure layer for the servers where SSL-certificate is installed (all Survey Solutions cloud servers requested from https://mysurvey.solutions portal are secured using this mechanism). This protection remains effective and is unaffected by the recent changes.

Existing users that update their servers (either themselves on the local servers, or by our technicians for cloud-based servers) will benefit from the encryption automatically. During the update the existing data on the tablets will be encrypted with an automatically generated password (this may take a couple of minutes, be patient). No other actions are required on the side of the interviewers and their work is not affected by the encryption happening automatically.

We remind the users of Survey Solutions to never install the system on a rooted device. Rooted devices present security risk to the data stored on the tablet and possibly for the whole system. We further remind the users to upgrade the Android OS regularly to benefit from the patches and security updates released by the manufacturers. Continuous use of outdated operating system presents the risk for the data stored both on the tablet and on the server. At the time of this writing all Android versions prior to v7.0 are classified as 'unsupported'.

The data stored in the server side database is not encrypted. Hence, the users hosting the local Survey Solutions data servers (synchronization points) should maintain the security in access to those servers.

Security specialists contracted for clearing the use of the software by the NSO should direct their inquiries directly to the support email: support@mysurvey.solutions. The particulars of the encryption implementation will not be publicly discussed or presented and may be reinforced in the future by switching to more secure algorithms.

## Bugfixes and smaller changes

- Optimization of the points clustering in the HQ map reports for large surveys with tens of thousands data points.
- Enabling conditions are now shown for sections and sub-sections in the PDF preview.
- Unification of the calculation of speed report between the HQ and the supervisor.
- Harmonization of the exported data - variable and value labels added where they were missing, order of variables in the exported data changed, etc.
- We plan to phase out support for Internet Explorer browser in the future releases of the Survey Solutions software. If you are currently relying on the Internet Explorer, prepare to move to Chrome, FireFox, or another modern browser.