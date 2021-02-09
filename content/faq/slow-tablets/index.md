+++
title = "Slow Tablets"
keywords = ["troubleshooting", "tablets"]
date = 2021-02-08T12:00:00Z
lastmod = 2021-02-08T12:00:00Z
+++

<CENTER>
    <img src="images/tablet_slow.jpg" width=800>
</CENTER>

Use the instructions below to diagnose tablets' **performance issues**, which can manifest themselves as:

- slowness (occasional or permanent) while working with the Interviewer App;
- freezes for a considerable period of time;
- crashes and restarts of the application;

or a combination of the above.

NB: For troubleshooting the synchronization errors, refer to the [synchronization problems](/interviewer/troubleshooting/synchronization-problems/) article.

1. Check that the tablet is not in the low-power mode. If in the [low-power mode](https://support.google.com/android/answer/7664692?hl=en), change to normal mode and retry (some tablets may need to restart, or sleep and wake up for the mode switch to become effective).

1. Check that the tablets are using an up-to-date version of Survey Solutions and update if necessary. (versions are important for troubleshooting and we need to know that the newest version is still affected, or else this is the solution.). Confirm the latest version is used.

1. Check whether there is a similar case reported in the [users’ forum](https://forum.mysurvey.solutions). If yes, indicate which thread/threads are mentioning the same symptoms.

1. Check whether the issue occurs on a new tablet that is not part of the interviewers' stock. Interviewers are people and can do many bad things to the tablets intentionally or unintentionally, so we need to exclude this factor. Use a [factory reset](https://support.google.com/android/answer/6088915?hl=en) if there is no other tablet to try. (any unsynchronized data will be lost as a result of the factory reset or uninstall). Clearly report the tablet brand, model, model number if the issue persists.

1. Check whether the problem occurs on **all**, **some** or **one** tablet only. Describe in detail:
    - what is common between the tablets in '**working**' group, and similarly
    - what is common for the tablets in the '**non-working group**', and
    - what is different between the 'working' and 'non-working' groups.
For example: "*the issue occurs with Survey Solutions v24.09 on all Samsung SMT-9399 tablets running Android 12.7 and doesn't occur on Samsung SMT-9897 tablets running Android 12.7 nor in Dell PowerTab-3000 running Android 18.0. The characteristics of these devices are as follows (indicate memory, storage, available storage, CPU type)*..."
    - refer to the [diagnostics dialog](/interviewer/troubleshooting/interviewer-app-diagnostics/#bullet6) to obtain the descriptive information of the tablet and Interviewer App.

1. Check whether there were any OS-updates (or third party software updates) installed recently on the tablets in the 'non-working' group. Clearly state what version and update of the Android OS is set up on the affected device(s).

1. Try a different questionnaire: create a simple questionnaire of a handful of questions and see if the issue occurs there too. Exercise your judgement as to how big this should be and what questions to include. When in doubt use 10 questions of different types or model the section of your actual questionnaire where the slowness appears. For a quick check use a public questionnaire '*ServiceB2*' from the '*Service and maintenance*' folder. If the benchmark questionnaire is responsive the problem is likely related to your particular questionnaire. If not responsive, then this benchmark questionnaire can be used in all subsequent steps/tests.

1. If the benchmark/example questionnaire does not exhibit the issue, start reducing your questionnaire by cutting off some of the pieces of it (work on a copy, of course). Delete sections, individual questions or their conditions. And periodically retest the questionnaire. Once it becomes responsive again, review the recent deletions to identify which one has caused the performance to improve.
    - Note that the size of a syntax condition (in characters or lines) is not necessarily a good predictor for the time that will be needed to execute it.
    - Even a one-liner can freeze a powerful computer with a slow loop-like code structure.
    - Slowness may occur due to entirely not obvious things, such as usage of text substitutions in questions, not related to syntax at all.

1. The issue may be data related: the checks in a 20-person household are going to be slower than in a 10-person household, and much slower than in a 1-person household. See whether the issue is sensitive to the amount of data being preloaded by varying the input data volume. Include your findings in your report.

1. Use the Tester App to measure the actual response time in milliseconds. If the issue occurs only in some sections/rosters/etc which is not immediately obvious, include instructions on what input must be entered (which values and in which sequence).
If the slowness is observed in an up-to-date version of Survey Solutions Interviewer/Tester with a benchmark questionnaire this could very well be its actual performance. Explain why the observed values are considered by you as 'abnormal/slow'.

Google provides the following [recommendations for speeding up a slow Android device](https://support.google.com/android/answer/7667018?hl=en).
