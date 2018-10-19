+++
title = "Version 5.19"
keywords = ["5.19"]
date = 2017-04-05T21:17:45Z
lastmod = 2017-04-05T21:17:45Z
aliases = ["/customer/portal/articles/2781948-version-5-19","/customer/en/portal/articles/2781948-version-5-19","/customer/portal/articles/2781948","/customer/en/portal/articles/2781948"]

+++

Dear friends of Survey Solutions,

Below is an overview of the new features added in version 5.19. This
update to Survey Solutions has touched all of the software components
from Designer and Tester, to the data server and Interviewer’s app. We
believe that these improvements (suggested in part by our users and
partners) will improve the security of the application, expand its
functionality, and present it in an even more user-friendly form. It is
important to be aware of the new features to utilize Survey Solutions to
its full potential:

1.  The logo image that is loaded to a Survey Solutions server gets
    downloaded to the tablets during initial setup and is visible at the
    login page replacing the default Survey Solutions image.
2.  Interviewers can click an “*eye*” button to see the password they
    are typing during the login procedure to make sure that it is typed
    correctly.
3.  Survey Solutions headquarter and supervisor users see a notification
    at the bottom of the screen if they are working with an older
    version of Survey Solutions (if a newer version has been released).
    Note that headquarter and supervisor users may not initiate an
    update themselves, but may notify the server administrator about the
    new release.
4.  Survey Solutions Tester app has got a new “*Reload questionnaire*”
    menu item. Testers can use this button to reload the questionnaire
    when any modifications to it have been made by a questionnaire
    Designer. This eliminates the need to search for the same
    questionnaire in the list of your questionnaires.
5.  Survey Solutions Designer now highlights the substitutions used for
    text piping inside the question text:

{{< imgproc "images/764487.png" Fit "800x600" />}}

1.  The Survey Solutions syntax no longer allows to use references to
    current date and time since this creates behavior different for
    interviewers and supervisors. Questionnaires that have been already
    imported to a data server will continue to work, but new
    questionnaires referring to the current date and time will need to
    be revised to remove such a reference.
2.  An additional service file is now exported alongside the data files
    listing variables contained in each of the exported data files. In
    the complex questionnaires with multiple rosters it is sometimes not
    obvious where a particular variable will be placed in export, so
    this file can be used for reference to search by variable name.
3.  A Survey Solutions data server will generate and display a
    human-readable ID (interview key) for every interview that has
    been: 
    -   created on the server in sample mode, or
    -   created on a tablet and synchronized to the server, or
    -   created on the server in web mode.

The interview key has a form of NN-NN-NN-NN and allows to identify the
interviews on supervisors’ and hq users’ dashboards even if the designer
of the questionnaire didn’t designate any prefilled fields:

{{< imgproc "images/764490.png" Fit "800x600" />}}

1.  Survey Solutions now collects a wealth of technical information
    about the interviewer’s devices and the status of the Survey
    Solutions software installed there. This allows the HQ users to
    monitor the status of the system, and do health checks on the
    tablets without having to contact the interviewers to inquire about
    the version of the OS or remaining storage space. The administrators
    and headquarters users should inspect the interviewer profile for
    typical problems (running an outdated version, low storage space,
    etc) before contacting Survey Solutions support team, since many
    problems are obvious from this information.

{{< imgproc "images/764488.png" Fit "800x600" />}}

1.  Survey Solutions became more secure. We have listened to the
    feedback of our users and the industry’s best practices and
    introduced additional security measures, among which the following
    will be noted by our users:
    -   When changing own password, old password must be entered first;
    -   During login, after 5 attempts the user will need to enter a
        CAPCHA to prevent brute force attacks;
    -   The passwords hashing is now using a more recent and secure
        algorithm, and other changes.
