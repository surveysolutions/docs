+++
title = "Questionnaire hyperlinks"
keywords = ["link","hyperlink","jump"]
date = 2019-01-14T14:14:14Z
lastmod = 2019-01-14T14:14:14Z
draft = false
+++

Survey Solutions questionnaires may include hyperlinks to permit the interviewer to jump to a particular question or section in the questionnaire.

A typical use of the hyperlinks is in the error messages to allow the interviewer to jump to an earlier question in the questionnaire, the answer to which may conflict with the current question being validated.

For example, when we validate the age versus the date of birth. Hence the error message may be something like "Error! The entered age does not agree with the date of birth specified earlier for this person. Please check both answers!". In this case we would want to let the interviewer jump to this date of birth question. We do it by marking the hyperlink in the error message using the markdown style:

"Error! The entered age does not agree with the [date of birth](dob) specified earlier for this person. Please check both answers!”

Here *dob* is the variable name for the date of birth question. The words 'date of birth' will appear as a hyperlink for the interviewer and by clicking it he/she will be transferred to the part of the interview where that question was asked.

{{< imgproc "images/hyperlink_in_error.png" Fit "330x734" />}}  

One can jump to the rosters, sections and subsections by mentioning their identifiers instead of the question variable name.
