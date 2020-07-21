+++
title = "Design limitations by question type"
keywords = ["question types preloading"]
date = 2018-03-12T21:48:31Z
lastmod = 2020-07-20T00:00:00Z
aliases = ["/customer/portal/articles/2928242-design-limitations-by-question-type","/customer/en/portal/articles/2928242-design-limitations-by-question-type","/customer/portal/articles/2928242","/customer/en/portal/articles/2928242","/questionnaire-designer/design-limitations-by-question-type"]

+++

When laying out the questionnaire in the Survey Solutions Designer, mind
the following design restrictions by question type:  
 

<table class="table table-striped table-hover">
<thead>
<tr class="header bg-warning">
<th style="text-align: center;" width=16%>Type of question</th>
<th style="text-align: center;" width=12%>Can be used<br />
as interviewer</th>
<th style="text-align: center;" width=12%>Can be used<br />
as supervisor</th>
<th style="text-align: center;" width=12%>Can be used<br />
in cover section</th>
<th style="text-align: center;" width=12%>Can be used<br />
as hidden</th>
<th style="text-align: center;" width=12%>Can be preloaded</th>
<th style="text-align: center;" width=12%>Can be used in substitutions</th>
<th style="text-align: center;" width=12%>Can be used in<br />
Web interviews</th>
</tr>
</thead>
<tbody >
<tr class="odd">
<td style="text-align: center;">Audio</td>
<td style="text-align: center;">YES</td>
<td style="text-align: center;">NO</td>
<td style="text-align: center;">NO</td>
<td style="text-align: center;">NO</td>
<td style="text-align: center;">NO</td>
<td style="text-align: center;">NO</td>
<td style="text-align: center;">YES</td>
</tr>
<tr class="even">
<td style="text-align: center;">Barcode</td>
<td style="text-align: center;">YES</td>
<td style="text-align: center;">NO</td>
<td style="text-align: center;">NO</td>
<td style="text-align: center;">NO</td>
<td style="text-align: center;">YES</td>
<td style="text-align: center;">YES</td>
<td style="text-align: center;">YES<br />
appears as text entry</td>
</tr>
<tr class="odd">
<td style="text-align: center;">Categorical multi-select</td>
<td style="text-align: center;">YES</td>
<td style="text-align: center;">YES<br />
<span style="text-align: center;">NO for linked</span></td>
<td style="text-align: center;">NO</td>
<td style="text-align: center;">YES<br />
<span style="text-align: center;">NO for linked</span></td>
<td style="text-align: center;">YES<br />
NO for linked</td>
<td style="text-align: center;">NO</td>
<td style="text-align: center;">YES</td>
</tr>
<tr class="even">
<td style="text-align: center;">Categorical single-select</td>
<td style="text-align: center;">YES</td>
<td style="text-align: center;">YES<br />
<span style="text-align: center;">NO for linked</span></td>
<td style="text-align: center;">YES</td>
<td style="text-align: center;">YES<br />
<span style="text-align: center;">NO for linked</span></td>
<td style="text-align: center;">YES,<br />
NO for linked</td>
<td style="text-align: center;">YES</td>
<td style="text-align: center;">YES</td>
</tr>
<tr class="odd">
<td style="text-align: center;">Date</td>
<td style="text-align: center;">YES</td>
<td style="text-align: center;">NO</td>
<td style="text-align: center;">YES</td>
<td style="text-align: center;">YES</td>
<td style="text-align: center;">YES</td>
<td style="text-align: center;">YES</td>
<td style="text-align: center;">YES</td>
</tr>
<tr class="even">
<td style="text-align: center;">Geography</td>
<td style="text-align: center;">YES</td>
<td style="text-align: center;">NO</td>
<td style="text-align: center;">NO</td>
<td style="text-align: center;">YES</td>
<td style="text-align: center;">NO</td>
<td style="text-align: center;">NO</td>
<td style="text-align: center;">NO</td>
</tr>
<tr class="odd">
<td style="text-align: center;">GPS</td>
<td style="text-align: center;">YES</td>
<td style="text-align: center;">NO</td>
<td style="text-align: center;">YES</td>
<td style="text-align: center;">YES</td>
<td style="text-align: center;">YES</td>
<td style="text-align: center;">NO</td>
<td style="text-align: center;">YES</td>
</tr>
<tr class="even">
<td style="text-align: center;">List</td>
<td style="text-align: center;">YES</td>
<td style="text-align: center;">NO</td>
<td style="text-align: center;">NO</td>
<td style="text-align: center;">YES</td>
<td style="text-align: center;">YES</td>
<td style="text-align: center;">NO</td>
<td style="text-align: center;">YES</td>
</tr>
<tr class="odd">
<td style="text-align: center;">Numeric</td>
<td style="text-align: center;">YES</td>
<td style="text-align: center;">YES</td>
<td style="text-align: center;">YES</td>
<td style="text-align: center;">YES</td>
<td style="text-align: center;">YES</td>
<td style="text-align: center;">YES</td>
<td style="text-align: center;">YES</td>
</tr>
<tr class="even">
<td style="text-align: center;">Picture</td>
<td style="text-align: center;">YES</td>
<td style="text-align: center;">NO</td>
<td style="text-align: center;">NO</td>
<td style="text-align: center;">NO</td>
<td style="text-align: center;">NO</td>
<td style="text-align: center;">NO</td>
<td style="text-align: center;">YES,<br />
Upload file only</td>
</tr>
<tr class="odd">
<td style="text-align: center;">Text</td>
<td style="text-align: center;">YES</td>
<td style="text-align: center;">YES</td>
<td style="text-align: center;">YES</td>
<td style="text-align: center;">YES</td>
<td style="text-align: center;">YES</td>
<td style="text-align: center;">YES</td>
<td style="text-align: center;">YES</td>
</tr>
</tbody>
</table>

Cover page may not contain sub-sections or rosters.  
For Date questions the serialization format for substitutions is
YYYY-MM-DD.  
For DateTime variables and timestamp questions the serialization format
for substitutions is YYYY-MM-DD hh:mm:ss  
For GPS location questions latitude and longitude coordinates must be
preloaded together or skipped together.  
Only one GPS location question may be placed into the cover page section.  
Calculated variables of any type do not have any scope, can't be
preloaded, can always be used in substitutions, can always be used in
Web interviews.