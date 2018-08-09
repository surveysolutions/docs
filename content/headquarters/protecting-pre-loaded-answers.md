+++
title = "Protecting pre-loaded answers"
keywords = [""]
date = 2018-06-06T15:28:58Z
lastmod = 2018-06-06T15:28:58Z
aliases = ["/customer/portal/articles/2942758-protecting-pre-loaded-answers","/customer/en/portal/articles/2942758-protecting-pre-loaded-answers","/customer/portal/articles/2942758","/customer/en/portal/articles/2942758"]

+++

Starting with v18.06 Survey Solutions allows protecting values of
trigger questions that have been preloaded from being subsequently
modified by the interviewer. The protection applies to reduction, but
permits extension. This is commonly needed in the panel surveys, where,
for example, the names in the list of household members that are
preloaded should not be eliminated by the interviewer, but new household
members may be added if needed.  
  
The protection applies to questions that may perform the role of
triggers:Â 

-   numeric,Â 
-   text list, andÂ 
-   multiple-select categorical (in regular or Y/N-mode).Â 

Note also, that the answers to the questions may be protected even if
they are not triggering any rosters, as long as the type of the question
is one of these three.  
  
If the answer to the question is protected, then:

-   for numeric question the interviewer may specify an answer greater
    or equal to the one specified duringÂ preloading;
-   for text list question the interviewer may append new items to the
    end of the text list, but not remove the onesÂ that were preloaded;
-   for multiple-select categorical question the interviewer may select
    any categories in addition to the ones already selected during
    preloading, but can't unselect the pre-selected categories.
-   for multiple-select categorical question in Y/N-mode the interviewer
    may change the selection of options that were preloaded as missing,
    but can't change their selection if they were preloaded as either
    positively or negatively selected.

The protection of answers may only be done in advanced preloading mode
when the identifying information andÂ preloading data are uploaded as a
single zip archive. To protect the answers an additional text file with
the nameÂ ***protected\_\_variables.tab***Â (mind the double underscores
in the file name) must be created and placed into the zip-archive
alongside the main data file there. ThisÂ file has the following
structure: the 1st line should contain exactly this word:
*variable\_\_name*, while the 2nd, 3rd andÂ subsequent lines should
contain variable names of the questions that need to be protected (each
variable on it's ownÂ line). For example:

    variable__name
    hhmembers
    n_parcels
    n_crops

The protection applies to the variable specified, regardless of the
level where it is positioned in the questionnaire, whether in the main
level of the interview, in a roster, or in a nested roster. In the above
example, the *n\_crops* variable may be the trigger for the crops roster
nested into the parcels roster, and the answers to *n\_crops* specified
in any parcel will be protected.  
  
If the Survey Solutions identifies a problem with this file, it reports
an error and aborts the preloading process. For details, see the
following [troubleshooting
reference](/headquarters/errors-in-user-supplied-files-for-preloading).  
  
This protection of answers is effective in the whole set of data being
preloaded. Note that the empty answers are notÂ protected (e.g. if
numeric question was not preloaded, the interviewer will be able to
specify any value).
