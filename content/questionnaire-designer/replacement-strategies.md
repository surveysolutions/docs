+++
title = "Replacement strategies"
keywords = [""]
date = 2017-04-10T23:47:09Z
lastmod = 2017-04-10T23:47:09Z
aliases = ["/customer/portal/articles/2784950-replacement-strategies","/customer/en/portal/articles/2784950-replacement-strategies","/customer/portal/articles/2784950","/customer/en/portal/articles/2784950"]

+++

Every sample-based survey is subject to non-response either for the
reason of refusal or problems of locating the household: household has
moved, person died, address recorded incorrectly, etc. Whichever is the
reason, it must be properly reflected in the interview result code - a
categorical variable set by the interviewer to indicate the outcome of
the visit to the household.  
  
Survey Solutions doesn't do sampling. A sampling specialist should
perform sampling for your survey. The focus of the below discussion is
not on how to properly select a replacement Y for a non-responding
household X, but on:

-   what mechanisms should be added to the questionnaire to accommodate
    one or the other strategy?
-   what should be the instructions given to the field staff?
-   what information should be prepared at the beginning of the survey?
    which information will be required later?
-   how the replacements may be tracked and audited?

Below we discuss different protocols that the HQ may impose for the
cases when a household must be replaced. In all of the versions below,
it is assumed that the field staff has made all possible efforts to
convince the household to participate, but didn't get an interview.

Strategies
==========

1. Oversampling
---------------

Suppose we could estimate (from previous survey, from pilot data, etc)
that there will be an R=80% response to our survey. If we target
T=10,000 completed interviews, the HQ should create then
T/R=10,000/0.8=12,500 assignments.  
Â 

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td style="text-align: center;"><strong>Pros</strong></td>
<td style="text-align: center;"><strong>Cons</strong></td>
</tr>
<tr class="even">
<td style="text-align: center;"><ul>
<li>interviewers may proceed autonomously (communication not required), once all the assignments have been distributed among them;</li>
<li>supervisors and HQ users don't come into play until the interviews are completed.</li>
</ul></td>
<td style="text-align: center;"><ul>
<li>very wasteful of resources if the response rateÂ is not estimated precisely.</li>
</ul></td>
</tr>
</tbody>
</table>

2. Manual replacement
---------------------

For T targets exactly T assignments are created by the HQ. If a
household is refusing to participate, it's assignment is closed with the
corresponding interview result code. A new assignment is than manually
created by the HQ in replacement of the original.

Â 

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td style="text-align: center;"><strong>Pros</strong></td>
<td style="text-align: center;"><strong>Cons</strong></td>
</tr>
<tr class="even">
<td style="text-align: center;"><ul>
<li>HQ may decide on the suitability of replacement, assign replacement based on the characteristics of the household being replaced;</li>
<li>HQ may record the original household number being replaced in the new assignment, thus creating a link between the two assignments.</li>
</ul></td>
<td style="text-align: center;"><ul>
<li>requires communication from the interviewers to the server;</li>
<li>requires active and responsive HQ-users.</li>
</ul></td>
</tr>
</tbody>
</table>

3. Semi-automatic replacement
-----------------------------

Daily snapshots of data are downloaded from the Survey Solutions server
automatically, utilizing the API. Automatic scripts verify the interview
result codes, and for all households that have refused and not replaced
so far generate a new preloading file, which is then manually uploaded
by an HQ user to create replacement assignments in batch mode.  
Â 

Â 

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td style="text-align: center;"><strong>Pros</strong></td>
<td style="text-align: center;"><strong>Cons</strong></td>
</tr>
<tr class="even">
<td style="text-align: center;"><ul>
<li>HQ may decide on the suitability of replacement (by affecting the selection algorithm at the HQ side);</li>
<li>less manual work;Â </li>
<li>original household number being replaced may be recorded in the preloading file, thus creating a link between the two assignments</li>
</ul></td>
<td style="text-align: center;"><ul>
<li>requires communication from the interviewers to the server;</li>
<li>requires custom code to analyze interview results and generate new assignments.</li>
</ul></td>
</tr>
</tbody>
</table>

4. Shadow replacements
----------------------

For every assignment (A) that is generated as part of the sample, a
second assignment is generated as a backup (B) for the case of
non-response. Interviewers are instructed to proceed to A-households,
and in case of non-response, to the corresponding B-household. Unused
B-assignments are closed with the interview result code "unused spare
assignment".

Â 

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td style="text-align: center;"><strong>Pros</strong></td>
<td style="text-align: center;"><strong>Cons</strong></td>
</tr>
<tr class="even">
<td style="text-align: center;"><ul>
<li>HQ decides on the backup for each household, potentially matching on specific known household characteristics;</li>
<li>the household number of each original and replacement households may be recorded in the opposite assignment, creating a bi-directional link;</li>
<li>communication between the tablets and the server is not required.</li>
</ul></td>
<td style="text-align: center;"><ul>
<li>twice the number of assignments circulates in the system;</li>
<li>interviewers see what the replacement is, and may exert lower effort in the original assignment hoping to switch to the backup.</li>
</ul></td>
</tr>
</tbody>
</table>

5. Interviewer spares
---------------------

For all the assignments (A) in the given enumeration area the
interviewer also receives a number of replacement assignments (B),
usually smaller in number (for example for 10 As receives 3 Bs). When a
non-response is encountered among A, the interviewer must proceed to the
next available B. Unused backup assignments are closed with the
interview result code "unused spare assignment".

Â 

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td style="text-align: center;"><strong>Pros</strong></td>
<td style="text-align: center;"><strong>Cons</strong></td>
</tr>
<tr class="even">
<td style="text-align: center;"><ul>
<li>communication is not required;</li>
<li>fewer assignments than in no. 4Â above;</li>
</ul></td>
<td style="text-align: center;"><ul>
<li>interviewers see what the replacement is, and may exert lower effort in the original assignment hoping to switch to the backup;</li>
<li>not possible to match replacement households to the original ones based on characteristics;</li>
<li>usually no link between the original and replacement households;</li>
<li>difficult to monitor that the interviewers are pulling out replacements in the correct order while working disconnected.</li>
</ul></td>
</tr>
</tbody>
</table>

6. Supervisor spares
--------------------

For all the assignments (A) in the given enumeration area the supervisor
receives a number of replacement assignments (B), usually smaller in
number (for example for 10 As receives 3 Bs). Only As are distributed to
the interviewers, while Bs remain assigned to the supervisor. When a
non-response is encountered among As (the supervisor receives a
completed assignment of type A with a non-response result code), the
supervisor assigns the next available B to the same interviewer that has
reported the non-response. Unused backup assignments are left in the
status "assigned to supervisor", or closed with the interview result
code "unused spare" by the fictitious interviewer.

Â 

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td style="text-align: center;"><strong>Pros</strong></td>
<td style="text-align: center;"><strong>Cons</strong></td>
</tr>
<tr class="even">
<td style="text-align: center;"><ul>
<li>interviewers don't know what the replacements are;</li>
<li>generally fewer replacement assignments in the system than in no. 5Â above, since the replacements are pooled across all of the interviewers of the team.</li>
</ul></td>
<td style="text-align: center;"><ul>
<li>communication is required;</li>
<li>not possible to match replacement households to the original ones based on characteristics;</li>
<li>usually no link between the original and replacement households.</li>
</ul></td>
</tr>
</tbody>
</table>

7. Sample mode + census mode
----------------------------

The same survey is administered in sample mode and in the census mode.
If an interviewer encounters a non-response, she can create a
replacement assignment and enter identifying information herself. To
avoid interviewer's biases, a firm rule must be specified on how to
select the replacement, e.g. "next household in order of enumeration".

Â 

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td style="text-align: center;"><strong>Pros</strong></td>
<td style="text-align: center;"><strong>Cons</strong></td>
</tr>
<tr class="even">
<td style="text-align: center;"><ul>
<li>no communication is required;</li>
<li>works when the replacement households may also refuse, and so on, so as when the number of replacements required may be unknown or large.</li>
</ul></td>
<td style="text-align: center;"><ul>
<li>behavioral:Â interviewers know the rule, and may decide to exert lower efforts to secure an interview knowing which household is next based on the replacement rule;</li>
<li>in the case of non-systematic sample, the interviewer must know, whether the next household is already part of the sample or not, which information she may only get from the supervisor and all other interviewers.</li>
</ul></td>
</tr>
</tbody>
</table>

8. In place replacement
-----------------------

In this strategy the questionnaire itself is modified to accommodate the
replacement address. This can be done by triggering the "*Replacement
address*" section to open when the interview result code is
"non-response in target household, interview obtained from a replacement
household".

Â 

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="odd">
<td style="text-align: center;"><strong>Pros</strong></td>
<td style="text-align: center;"><strong>Cons</strong></td>
</tr>
<tr class="even">
<td style="text-align: center;"><ul>
<li>number of assignments in the system is exactly the same as the number of targets;</li>
<li>reliable link between the households being replaced and their corresponding replacements;</li>
</ul></td>
<td style="text-align: center;"><ul>
<li>post-processing may be required to generate a consistent variable for the actual location of the household being interviewed;</li>
<li>behavioral:Â interviewers know the rule, and may decide to exert lower efforts to secure an interview knowing which household is next based on the replacement rule;</li>
<li>must rely on interviewers following the rules for selecting the replacement households</li>
</ul></td>
</tr>
</tbody>
</table>

Discussion
==========

In every strategy outlined above where the interviewer is allowed to
enter the address of the replacing household, there is a vulnerability
that the interviewer will enter the replacement address incorrectly. A
two-man rule may be introduced, where the interviewers are issued a
checksum computed by the supervisor for a given replacement address, or
a conditional section is locked until replacement is approved by the
supervisor.  
  
In those strategies where the interviewers are issued the replacement
assignments right away, it is possible to password-protect the
assignment with an individual password (generated at HQ and visible to
the supervisors, but not to the interviewers). In that case interviewers
may only proceed to the replacement interviews when such password is
communicated to them by their respective supervisor or an HQ-user.  
  
If you don't know which strategy to prefer, discuss whether connectivity
is expected in the enumeration areas, whether the full list of the
households is available before the interviewers proceed to the
enumeration areas, and other factors which will help you to shorten the
list of available options.  
  
**If unsure, select strategy \#6 as it provides the best protection
against the interviewers' biases, albeit at a cost of requiring
communication.**  
  
There are potentially other strategies, which extend the ones outlined
above or achieve the same results using additional external
media/lists/cards/maps etc. Depending on the nature of the survey,
number of visits and other factors one or the other strategy may be more
suitable, however the final quality of data will depend on how the
replacement strategy has defended against the interviewers biases.
