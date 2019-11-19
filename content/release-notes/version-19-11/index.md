+++
title = "Version 19.11"
keywords = ["19.11"]
date = 2019-11-12T01:01:01Z
lastmod =2019-11-19T01:01:01Z
+++


<I>Original release notes from Nov-12, 2019 were expanded/revised on Nov-19, 2019.</I>

Survey Solutions v19.11 adds the following useful features:

- Questionnaire details page at the Headquarters;
- Data export archive now contains more information;
- Revision comments in the Designer;
- Questionnaire import comment at Headquarters;
- Revision review in the Designer;
- Device logs;
- Multiple web interviews may be started from the same assignment link.

## Questionnaire details page at the Headquarters
The questionnaire details page contains a summary of the selected questionnaire 
design and current setup parameters and allows to view the PDF version of the 
questionnaire or find the exact revision in the Designer, which was used during
import. 

The questionnaire details page is described in the [following article](/headquarters/svymanage/questionnaire-details-page/).

## Data export archive now contains more information
All (main survey) data export files will now contain a folder called PDF where 
the PDF preview of the questionnaire (in all available translations) is
placed. The <B><TT>export__readme.txt</TT></B> file now has a link back to the Designer
indicating, which questionnaire was used for data collection.

## Revision comments in the Designer
Any revision of the questionnaire may be commented in the History page to provide 
a meaningful description of the purpose of the change or a group of multiple 
changes/edits. For example, the explanatory comment could be 
*"This revision was tested and passed all 5 testing scenarios and is approved 
by the board of directors"* or *"Substituted ICD9 to ICD10 codes"*. This is 
especially useful during collaboration when you need to inform the fellow 
editors that a certain milestone has been reached.

## Questionnaire import comment at Headquarters
When any questionnaire is imported to a data server (Headquarters), whether local 
or cloud-based, the user performing the import will have an opportunity to leave 
a descriptive comment. This simplifies later finding which specific revisions of 
the questionnaire were used for data collection. This comment is shown in the 
Headquarters (see questionnaire details page) and in the questionnaire history 
page in the Designer where every questionnaire import is also registered as a 
separate event.

## Revision review in the Designer
Earlier revisions of the questionnaires may now be inspected and tested without 
reverting the changes. The ACTION menu in the questionnaire history page allows 
opening earlier revisions in view mode, or extracting a particular revision as 
a separate questionnaire. 
[Read more here](/questionnaire-designer/interface/recent-changes-to-the-questionnaire/) 

You can also generate a PDF preview of an earlier revision ('GENERATE PDF' 
button is available in the revision view).

## Device logs
Device logs are helpful technical log files, which are useful for 
troubleshooting of the Interviewer App. Any interviewer experiencing problems 
(e.g. crashes of the Interviewer App) may submit the device logs through the 
*'Diagnostics/Send device logs'* menu.

Only the server administrator may access device logs submitted by interviewers.

The 'Device logs' are different from
*'Diagnostics/Collect and send to HQ all tablet information'*, which actually
contains interview data stored on the tablet (in an encrypted form). Device
logs will contain the recording of the interviewer actions and any
errors/crashes that the program had (possibly over multiple days). Usually the
administrator will need to forward this information to the Survey Solutions
developers as there is little that he/she can do with the errors at this level.
The device logs are text files packed in a zip archive, and can be inspected
for privacy/confidentiality before being submitted to the developers.

## Multiple web interviews may be started from the same assignment link.
Earlier versions of Survey Solutions allowed one user to submit one interview
from an anonymous assignment link. On the second attempt, either the same
interview was opening for continuation (if was not completed yet) or a
notification message was issued indicating that the interview was already
completed and no further interviews will be accepted.

This caused inconvenience to some users. For example, during testing you'd
want to submit multiple interviews following different scenarios, and a 
single link would have been a convenience. Furthermore, some surveys may 
actually require multiple submissions and again, publishing a single link 
accessible to all respondents is a convenience.

The new behavior is thus: if the interview hasn't been finished by the
respondent, it will be reopened and the user will continue filling it up. 
Yet, if an interview was already completed, the user will be presented with 
a possibility to submit another (new) interview based on the same assignment.

Importantly, note that both the old and new behavior recognize the user by a 
cookie file stored on the user machine, so reopening the link from a 
different device or from the same device in a different browser, or within 
the same browser but in private mode will not result in a continuation of an 
edit session, but in the creation of a new interview.





