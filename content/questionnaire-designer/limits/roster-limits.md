+++
title = "Roster limits"
keywords = ["roster","size","limit"]
date = 2019-01-14T14:14:14Z
lastmod = 2019-01-14T14:14:14Z
draft=true
+++

Survey Solutions provides capabilities for building complex multilevel data structures and at the same time prevents these data structures from exploding uncontrollably. Earlier this has been done at design-time - when the questionnaire was checked during compilation, error 
```[WB0262]:Roster has reached size limit. Reduce roster size or decrease nesting.```
was sometimes issued, when the structure may have resulted in a large (multiple thousands of) number of items. 

At design time the actual number of elements was not known, so the Survey Solutions applied the pessimistic strategy of taking maximum values for each trigger. This worked, but resulted in some seemingly valid designs to be banned, notably listing questionnaires where in an enumeration area there could be a large number of small dwellings or a small number of large houses, but never a large number of large houses. The pessimistic strategy deemed that possible. 

Since version 19.02 this check on the size of the roster is now applied at run-time (during the data entry), and when an attempt is made to overshoot this limit, the corresponding error message is issued to the enumerator and the change in the trigger question is declined. 

```Interview contains total number of roster instances and questions exceeding the system limits.```

The limits on the total number of items remains the same as shown in the limits page, but rather the check is moved from inspecting the blank form to the real data being entered by the interviewer. Notably, every questionnaire that compiled in the earlier versions (before this change) will also compile in the new version (after the change), but now you will see more questionnaires compiling and the interviewers should be properly informed/trained as to how to react to this error message.