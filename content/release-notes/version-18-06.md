+++
title = "Version 18.06"
keywords = ["18.06"]
date = 2018-06-05T17:19:31Z
lastmod = 2018-06-05T17:19:31Z
+++

Today, on June 05, 2018 we are happy to release version 18.06 with lots
of new and useful features.  
  
<span class="underline">Announcement:</span> Survey Solutions VI Virtual
User Group Meeting:

<table>
<tbody>
<tr class="odd">
<td>Thursday, June 14, 2018<br />
9:00 am  | Eastern Daylight Time (New York, GMT-04:00)  | 1 hr<br />
Meeting number (access code): 737 365 639<br />
Meeting password: 9SabPdMH<br />
<br />
<a href="https://worldbankgroup.webex.com/worldbankgroup/j.php?MTID=mc85eed21343ad282de56576763ac0cc0">Join the meeting</a></td>
</tr>
</tbody>
</table>

  
<span style="color:#B22222;"><span class="underline">Important
notification for self-hosted users:</span> the changes in the Designer
are compatibility-breaking so all users of Survey Solutions on the local
servers MUST upgrade to the latest version of the Survey Solutions
Headquarters application in order to import new questionnaires. For the
users of the Survey Solutions servers hosted in the World Bank Cloud the
update will be performed by our support staff.</span>

Offline GIS Functionality Expansion
-----------------------------------

1.  Question type earlier called area is now renamed to geography and
    supports capture of various geographic information:

-   area (polygons),
-   paths (polylines),
-   single (point) and
-   multiple (multipoint)

on offline maps. Each selection is exported as vectors of points. This
question type is now accessible from the syntax to be used in
conditional and validation expressions. The following properties can be
used in the syntax:

-   <span style="font-family:courier new,courier,monospace;">double
    geography.Area</span>
-   <span style="font-family:courier new,courier,monospace;">double
    geography.Length</span>
-   <span style="font-family:courier new,courier,monospace;">int
    geography.PointsCount</span>

In addition, the IsAnswered() function also supports this question type
now. For example, we can ask to show the secondary parcel if the primary
parcel has been already indicated:

    IsAnswered(primaryParcel)

Or we can indicate an error if the area of the parcel is too small to be
a parcel with a dwelling situated on it:

    self.Area>=30

Or for large parcels we could ask if they are also being used for
agricultural purposes:

    primaryParcel.Area>600

Similarly for the paths we can measure the length and show warnings, for
example, when they are unexpectedly large:

    self.Length<=6000

1.  Offline maps formats have been extended with the raster files,
    specifically [GeoTIFF](https://en.wikipedia.org/wiki/GeoTIFF) files
    that can be produced with a wide range of commercially available and
    free to use tools.
2.  BETA: A single [shapefile map can be
    added](http://support.mysurvey.solutions/customer/en/portal/articles/2942852)
    to the maps storage on the tablet, and if added in this way will be
    automatically overlayed on top of the baseline map in offline map.

New Headquarters Features
-------------------------

1.  Online tabulation report based on the survey data allows creation of
    tabulation reports (frequency tabulation of categorical variables)
    with conditioning on values of other variables. For example, one can
    now tabulate the interview result code by team members to check
    whether a particular interviewer has abnormally large number of
    households not found.

<img src="/images/881381.png" width="640" />

1.  Upgrade of assignments: Survey Solutions will now assist the
    Headquarters users in migrating assignments in case of a
    questionnaire update. When a new version of an existing
    questionnaire is imported to the server, any unfulfilled assignments
    in the old version may be migrated to the new version. If the HQ
    user decides to migrate the assignments, the system will examine
    them one by one and decide whether the migration is possible and if
    so, archive the original assignment and recreate a new assignment in
    the new version of the questionnaire (for the remaining number of
    interviews still not delivered). We recommend testing the
    questionnaires extensively to minimize any revisions to the
    questionnaires during fieldwork.
2.  We have simplified the process of preloading to reduce the need for
    data processing. Specifically,

-   for rosters triggered by text lists, the roster file may include
    items with any codes (not necessarily in continuous or incremental
    sequence);
-   for numeric rosters, the numeration of subordinate items in rosters
    should start with 1 and proceed sequentially until N, N will be
    saved into the value of the trigger question;

In both cases the items will appear in rosters in the order of
increasing IDs specified in preloading. These changes help Survey
Solutions preload the very same files that it exports and reduces the
burden of preparation of data for preloading in panel surveys.

1.  [Protection of answers to preloaded
    questions](http://support.mysurvey.solutions/customer/en/portal/articles/2942758)
    is available in advanced preloading only for questions of type
    multi-select, numeric and text list. This feature may be most useful
    for panel surveys where data obtained in the initial visit must be
    protected, while at the same time it must be extended by new values.
    A typical scenario is that the list of household members may need to
    be extended with new household members, while original household
    members need to be protected from deletion from the list.
2.  The Interview report in Headquarters/Supervisor is now more specific
    about errors in the questionnaire. Previously a flag was raised if
    the questionnaire contained any errors. This has been indicated to
    the supervisors in the list of interviews. Now this column reflects
    the number of questions with errors (n.b. this may be different from
    the total number of errors) (as per request of Lena Nguyen, World
    Bank).
3.  New API request can be sent to the Survey Solutions data server that
    returns the interview data for a particular interview in JSON
    format. Images and other binary resources and comments are not
    included in this response.
4.  [Log of actions undertaken on the
    tablet](/headquarters/detailed-action-log) accessible from the
    Headquarters. In it the headquarters users can monitor all the
    actions by the interviewer on a tablet, including actions on
    interviews that are still not completed. For example:

<img src="/images/881382.png" width="640" />  
This log is useful in resolving the debates where the interviewer claims
that the data was collected, but subsequently “disappeared”.

1.  New online map report for interviewer movement shows historical
    positions (trajectory) of the interviewer on the map. This report is
    interviewer-specific and is available on the interviewer profile
    page. It shows the location of all of the interviewer’s interviews
    in chronological order, along with colors highlighting the current
    status of each interview: started (blue), completed (green) or
    rejected (red).

 <img src="/images/881380.png" width="640" />

1.  Interviewer profile also contains a new warning (red message:
    “Relinked”) if the interviewer has relinked his/her device.

New Interviewer Features
------------------------

1.  Multiple selection questions will disable remaining choices when the
    maximum number of choices has been selected to indicate to
    interviewers that no more selections can be made in this question
    (as requested by Sergiy Radyakin, World Bank).
2.  Behavior of the linked question has changed. Earlier, any changes to
    the source question caused all dependent linked questions throughout
    the questionnaire to be “unanswered”. Now, only those items removed
    from the source are removed from the linked questions, with other
    items selection not affected. For example, if Peter was the only
    household member, and selected as the household head in a linked
    question, then adding Mary to the list of the household members does
    not change the indicated status ‘head of the household’ for Peter,
    even though Mary will be available for selection there.
3.  On the tablet the interviewers can now replay the recording of the
    audio question by pressing the play button and can zoom to see the
    photo taken in the image question. Both allow to perform quality
    control immediately on the tablet and decide whether the audio
    recordings (photos) are of suitable quality or need to be taken
    again (requested by Eugene Ehlers, AHRI; Phil Bright, SPC).
4.  We have added several new functions to extend our syntax and
    expanded existing to support more types of data where earlier
    typecasts were required.
5.  We have extended the translations in Chinese and Arabic, and added
    Romanian language interface for the Interviewer App.
