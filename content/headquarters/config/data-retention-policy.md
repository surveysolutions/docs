+++
title = "Data retention policy"
keywords = ["administration", "storage", "footprint"]
date = 2025-04-14T11:11:11Z
lastmod = 2025-04-14T11:11:11Z
+++

The server administrator can set up a data retention policy, which helps control the amount of export files and through that the corresponding storage utilization.

The data retention policy is very effective in the cases, where the export is triggered periodically via the API to produce snapshots of the data available to date. This may result in a large number of data files produced, but only the most recent ones needed for the subsequent processing. Limiting the age of the export files will help retain only the most recently produced export files.

Note that this policy is formulated separately for each workspace in the corresponding [workspace settings](/headquarters/config/workspace-settings). 

By default no deletion occurs. However the administrator may specify to delete
the prepared export files when they are older than a certain number of days (numeric parameter ***Days to keep***), or
if their number exceeds a certain threshold (numeric parameter ***Number of files to keep***). Either of these two thresholds may
be left unspecified, in which case the policy is not sensitive to that
dimension:

  - if days are not specified, the files will not be deleted based on their age,
but may be deleted based on their number, (if the other parameter is specified);

  - if number of files to keep is not specified, the files will not be deleted
based on their number, but may be deleted based on their age (if the other
parameter is specified).

  - if neither threshold is specified, no deletion will occur and it is equivalent
of the policy of retaining all prepared export files.

If the administrator decides to specify a different threshold for number of
days or files in the export file retention policy, the corresponding `SAVE`
button must be pressed to preserve the new value of the threshold.

The changes to these parameters are logged in the
[audit log](/headquarters/svymanage/audit-log/) for the corresponding workspace and are available for inspection.

Note the following details of the implementation of the data retention policy:

1. The policy is implemented by periodically running a clean up job, that evaluates the current stock of outputs and eliminates the oldest ones to fit the 
limits set by the administrator.

2. The policy is not directly scheduled by the user (there is nowhere to specify whether the clean up should occur in the middle of the day or in the middle of the night, etc). Overall, however, the system will do two cleanup attempts in a 24-hour period at own discretion. If desirable, the user may force the policy to be applied on-demand, by clicking the corresponding button.

3. The policy tolerates temporary file locks - if the file that is supposed to be deleted is locked (because it is being downloaded, scanned by an AntiVirus, or for any other reason) this file will be skipped, and the program will re-attempt the deletion in the next pass.

4. The policy is not hard - because of the scheduling delay, and because the files may be locked the policy is not a guarantee that the number of export files will never overshoot the specified threshold. It is possible in the short run, but as the clean up is conducted the program will try to rectify the situation to remain compliant with the policy set up by the administrator.
