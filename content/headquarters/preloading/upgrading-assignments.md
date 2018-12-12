+++
title = "Upgrading assignments"
keywords = [""]
date = 2018-12-12T12:12:12Z
lastmod = 2018-12-12T12:12:12Z

+++

Survey Solutions [assignments](/getting-started/assignments/) play a critical role in the survey process because they regulate who is supposed to deliver the incoming data (interviews). Each assignment is referring to a particular questionnaire.

**It is best to not modify the questionnaire during the survey**. Some of the undesirable effects of this are:

- the survey becomes split between several databases, each has to be downloaded separately from Survey Slutions and appended later using external tools;
- the data may no longer be comparable (e.g. choice sets differ between questions);
- the data quality may be heterogenious (differing between collected earlier and later periods);
- interviewers may need retraining for the newer version of the questionnaire;
- the process of upgrading the questionnaire needs to be followed by upgrading of assignments, which depends on which interviews have been already conducted and which have not.

Sometimes this is unavoidable, e.g. in case a gross mistake was made during the questionnaire development and further data collection based on unfixed version doesn't make sense.

If a new questionnaire is imported, it doesn't affect the existing survey work, since the assignments have been already issued based on the earlier version of the questionnaire.

In order for the new version of the questionnaire to be used, new assignments must be created referring to it, and older assignments, which are not fulfilled yet must be cancelled (archived). This may be a tedious process of determining, which part of the survey has been already conducted and which hasn't been fulfilled yet. Survey Solutions tries to help the HQ user by providing a possibility to upgrade the assignments automatically during the import of the new version of the questionnaire template. Here is what it is doing:

- inspects assignments one after another to determine whether the assignment is still outstanding (not all interviews have been delivered);
- if the assignment has been fulfilled already fully, nothing happens to it;
- if the assignment is outstanding Survey Solutions examines whether it can be upgraded to the new version of the questionnaire template;
- if it can't be upgraded, then nothing happens to it;
- if it can be upgraded, then a new assignment for the number of outstanding interviews is created based on the new questionnaire template (and all the other fields untouched);
- original assignment is automatically archived.

If the original assignment called for an unlimited number of interviews (size=-1) then the newly created one will also require the same regardless of how many have been already delivered.

Note that during the upgrading process some of the assignments may be upgraded while others not. This is dependent on what information is contained in the preloaded fields of the assignment. The number of assignments that have been successfully upgraded is reported at the end of the upgrading process.

**How does Survey Solutions determine whether the assignment may be upgraded?** 
It looks at the preloading information (e.g. the identifying fields, and other preloaded data) specified in the assignment and checks whether it can fit all of it without any loss to the new questionnaire template. If yes, then the assignment will be considered upgradeable, otherwise not upgradeable. 

Here are some examples of change between the versions that __permit an upgrade__ of assignments:

- a new question has been added;
- the text of an existing question has been changed;
- a new option has been added to a categorical question;
- a new validation rule has been added;
etc.

Here are some examples of changes between the versions that will __prevent an upgrade__ of assignments:

- preloaded question has been deleted;
- type of a preloaded question has changed to a more restrictive, e.g. from text to numeric;
- option category has been removed, which has been mentioned in the preloaded data;
etc.


**What will happen to the interviews that have been completed on the tablets based on old assignments received before the upgrade?**
When the interviewer received the original assignment and conducted the interview, she usually knows nothing about the intent of the HQ to modify the questionnaire and works disconnected as usual. She may conduct one or more of such interviews as permitted by existing assignments, complete them and synchronize to the server. These interviews will be received by the HQ and displayed in the list of the interviews as completed. The interviews will carry the original assignment number, even if that assignment has since been upgraded and archived. In addition, since at the HQ a new assignment has been created from the original, the interviewer will receive it on the tablet, potentially leading to return to the same respondent. 

Chances of this will be smaller if the interviewer is notified about the upgrade when it happens and synchronizes immediately to swap the assignment cards. 

**What will happen to the interviews that have been started on the tablets based on the old assignments, but not completed yet?**
The started interview will remain on the tablet and available to be continued, completed and synchronized. At the same time there will be no assignment card (at the 'create new' page) corresponding to this interview. In particular this means that if the interviewer discards this interview, she will not be able to start it again.


**What to do?**
Regardless, it is best to not to update the questionnaire for ongoing surveys. Test your questionnaires extensively using the [Tester](/questionnaire-designer/testing/testing-your-questionnaires-using-the-tester-application/) and [online Tester](/questionnaire-designer/testing/testing-your-questionnaire-with-the-online-tester/) tools and correct all the design errors prior to going to the field. A series of pre-tests/pilots helps minimize the need for modifications of the questionnaire. See more recommendations [here](/getting-started/implementing-a-capi-survey/).

When the modification of the questionnaire is unavoidable, it's best to inform the interviewers about it coming (plan for a particular date), ask them to finish (and synchronize!) interviews that they have started already and not to start new ones. Then update the questionnaire and assignments, then synchronize all the interviewers immediately afterwards.



