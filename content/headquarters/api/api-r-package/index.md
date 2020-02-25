﻿+++
title= "API: R-package"
author= "Michael Wild"
date= "2020-02-25"
+++

Introduction to the Survey Solutions API R-package
====================================================


## Why this package

The World Bank's Computer Assisted Survey System (CASS) **Survey Solutions** 
is a powerful tool for high quality data collection and used in many statistical 
offices around the world. Besides the standard GUI, it also comes with a 
powerful [REST API](https://support.mysurvey.solutions/).

To further facilitate its integration in a fully automated workflow we have 
developed this [R package](https://github.com/michael-cw/SurveySolutionsAPI), 
which covers almost all of the available API calls.

This article gives you an overview of the functions implemented in this package.
<!--
With this vignette you get a first overview on the different functions,
further vignettes are available on survey management, paradata analysis and
shiny integration.
-->

The package can be considered as being a API "bare bone", as it implements the 
[Survey Solutions API](/headquarters/api/api-interactive-description/) calls 
without substantial modification. However, this is not true for the data export 
function as well as for the paradata. Modification was necessary to facilitate 
workflow integration. See the details in the corresponding documentation.

Please be aware, that this package makes heavy use of data.table, and this is 
also continued in this vignette. In case you are not familiar with it yet, 
refer to this [introduction](https://cran.r-project.org/web/packages/data.table/vignettes/datatable-intro.html).

## API credentials

To use the API you first need to set-up the API user on your Survey Solutions server. 
See [here](/headquarters/api/) for details. After this done, you can use the 
*suso_set_key()* function, to provide your credentials.


```r
library(SurveySolutionsAPI)
suso_clear_keys()
suso_set_key("https://xxx.mysurvey.solutions", "xxxxxx", "xxxxxxx")
suso_keys()
#> $suso
#> $suso$susoServer
#> [1] "https://xxx.mysurvey.solutions"
#> 
#> $suso$susoUser
#> [1] "xxxxxx"
#> 
#> $suso$susoPass
#> [1] "xxxxxxx"
#> 
#> 
#> attr(,"class")
#> [1] "suso_api"
```

After this is done, there is no need to provide the credentials for every API 
call again. They are stored until the end of your current session. There is 
also a function to check if your credentials work.


```r
suso_PwCheck()
#> Response [https://mcw2.mysurvey.solutions/api/v1/supervisors?limit=200]
#>   Date: 2020-02-25 02:00
#>   Status: 200
#>   Content-Type: application/json; charset=utf-8
#>   Size: 471 B
```

It calls the supervisor API, and returns the response. If the return value is 
200, then your connection and credentials are OK.

## User Management

These functions are particularly useful for survey management, and more details can 
be found in the corresponding vignette on survey management. Lets start with getting 
a list of all supervisors on the server.


```r
sv <- suso_getSV()
print(sv)
#>    IsLocked        CreationDate                               UserId      UserName
#> 1:    FALSE 2019-12-12 06:17:59 4a5be68d-e689-4cd6-83b5-32936a02a8f0  Alex_Sup_Rom
#> 2:    FALSE 2019-12-12 09:37:51 4f3f6d63-90aa-4861-a59a-fb2907135618 Alex_Sup_Rom2
#> 3:    FALSE 2019-07-26 03:15:42 8f01a8a6-4f7c-49f1-a276-2af4ea7636bb     Team_2101
```

Your will receive a list of supervisors currently active (not archived) on the server. 
If you take one of the supervisor's *id* and use the *suso_getINT* function, you will 
receive all the interviewers in the team.


```r
int <- suso_getINT(sv_id = sv[3, UserId])
print(int)
#>    IsLocked        CreationDate         DeviceId                               UserId  UserName
#> 1:    FALSE 2019-07-26 03:16:47 5ca9d1e76d855a78 0d169565-df66-48b4-8c93-3375e21de136 Int1_2101
#> 2:    FALSE 2019-07-26 03:20:42 58ded0cc5de671a2 5ac32a2d-20c5-42b6-a30c-89367d9f65d2 Int2_2101
#> 3:    FALSE 2019-08-09 16:42:47 aab82d9709439494 d1e57346-b13e-47e8-adc1-aaf647711f47 int4_2101
```

To receive more information about a particular user, use the *suso_getINT_info* function:


```r
intinfo <- suso_getINT_info(int_id = int[1, UserId])
print(intinfo)
#>    SupervisorName                         SupervisorId IsLockedBySupervisor IsLockedByHeadquarters
#> 1:      Team_2101 8f01a8a6-4f7c-49f1-a276-2af4ea7636bb                FALSE                  FALSE
#>    IsArchived                               UserId  UserName       Roles IsLocked        CreationDate
#> 1:      FALSE 0d169565-df66-48b4-8c93-3375e21de136 Int1_2101 Interviewer    FALSE 2019-07-26 03:16:47
```

To get information about any particular user, you can also use the more general function *suso_getUSR*.


```r
usrinfo_int <- suso_getUSR(uid = sv[3, UserId])
print(usrinfo_int)
#>    IsArchived                               UserId  UserName      Roles IsLocked        CreationDate
#> 1:      FALSE 8f01a8a6-4f7c-49f1-a276-2af4ea7636bb Team_2101 Supervisor    FALSE 2019-07-26 03:15:42

usrinfo_int <- suso_getUSR(uid = int[1, UserId])
print(usrinfo_int)
#>    IsArchived                               UserId  UserName       Roles IsLocked        CreationDate
#> 1:      FALSE 0d169565-df66-48b4-8c93-3375e21de136 Int1_2101 Interviewer    FALSE 2019-07-26 03:16:47
```


## Questionnaire

The basic questionnaire API calls are handled through the *suso_getQuestDetails* function.

If no input is provided, the function returns a list of all questionnaires on the server:


```r
questlist <- suso_getQuestDetails()
# print(questlist)
```

Specifying *operation.type = status*, you receive a list of statuses. 


```r
statlist <- suso_getQuestDetails(operation.type = "statuses")
print(statlist)
#>  [1] "Restored"               "Created"                "SupervisorAssigned"     "InterviewerAssigned"   
#>  [5] "RejectedBySupervisor"   "ReadyForInterview"      "SentToCapi"             "Restarted"             
#>  [9] "Completed"              "ApprovedBySupervisor"   "RejectedByHeadquarters" "ApprovedByHeadquarters"
#> [13] "Deleted"
```

By taking a particular *QuestionnaireId* and specifying the *operation.type *you can execute further requests. For example,


```r
questionnaire <- suso_getQuestDetails(operation.type = "structure", quid = questlist[2, QuestionnaireId], version = questlist[2, 
    Version])
questionnaire <- questionnaire[, .(VariableName, type, QuestionText, Featured, PublicKey)]
questionnaire <- questionnaire[!is.na(QuestionText)]
head(questionnaire, 19L)
#>           VariableName                  type
#>  1:   Isl_SupEnum_Dist          TextQuestion
#>  2:          gps_start GpsCoordinateQuestion
#>  3:         date_start      DateTimeQuestion
#>  4:            mainMap          AreaQuestion
#>  5:             id_str      TextListQuestion
#>  6:           date_end      DateTimeQuestion
#>  7:            gps_end GpsCoordinateQuestion
#>  8:          gps_struc GpsCoordinateQuestion
#>  9:            address          TextQuestion
#> 10:             id_dwe      TextListQuestion
#> 11:      Desc_Dwelling          TextQuestion
#> 12:          Bldg_Name          TextQuestion
#> 13: HL1a_PrivDwel_Inst        SingleQuestion
#> 14:   HL1b_InstOn_Prop        SingleQuestion
#> 15:     HL1c_Dwel_Name          TextQuestion
#> 16:       H1_Typ_Dwell        SingleQuestion
#> 17:    HL1a1_Inst_Name          TextQuestion
#> 18:  HL1a2_Type_Instit        SingleQuestion
#> 19:        V1_Vac_Dwel        SingleQuestion
#>                                                                                                                                                                          QuestionText
#>  1:                                                                                                                                  Island-Supervisory District-Enumeration District
#>  2:                                                                                                           I01. <big>GPS</big> of the <big>START</big> of the Enumeration District
#>  3:                                                                                                  I02. <big>DATE and TIME</big> at the <big>START</big> of Census data collection.
#>  4:                                                                                                                       Please mark all the buildings in your Enumeration District!
#>  5:                                                                                                                                                   Please give the BUILDING number
#>  6:                                                                                                            Q14. <big>DATE AND TIME</big> OF THE <big>END</big> OF THE ENUMERATION
#>  7:                                                                                                                      Q13. <big>GPS</big> AT THE <big>END</big> OF THE ENUMERATION
#>  8:                                                                                                                      B1. GPS of <font color="blue">BUILDING NR. %str_list%</font>
#>  9:                                                                                                                  B2. Address of <font color="blue">BUILDING NR. %str_list%</font>
#> 10:                                                                                            Serial Number of the DWELLING inside <font color="blue">BUILDING NR. %str_list%</font>
#> 11: Please provide brief description of <font color="green">DWELLING NR. %dwe_list%</font>. (Apt.No., colour, other physical attributes fencing/gates, two-story,duplex.tri-plex etc)
#> 12:                      Please state building name and floor number for <font color="green">DWELLING NR. %dwe_list%</font>: (For highrise buildings only e.g Bayroc, Lucayan Towers)
#> 13:                                                             HL1a. Is <font color="green">DWELLING NR. %dwe_list%</font> a private dwelling, an institution, or a vacant dwelling?
#> 14:                                                               HL1b. Is this private <font color="green">DWELLING NR. %dwe_list%</font> located on the property of an institution?
#> 15:                                                                         HL1c. Give the name of this institution <font color="green">DWELLING NR. %dwe_list%</font> is located on.
#> 16:                                                                                                              H1. What type is <font color="green">DWELLING NR. %dwe_list%</font>?
#> 17:                                                                                                                                         HL1a1. Give the name of this institution.
#> 18:                                                                                                                                         HL1a2. Which type of institution is this?
#> 19:                                                                                        V1. Indicate the status of this vacant <font color="green">DWELLING NR. %dwe_list%</font>.
#>     Featured                            PublicKey
#>  1:     TRUE 9c1df13b-ebd9-c948-c1f6-3d494baed6c7
#>  2:    FALSE a28e8db7-6c8d-41ac-b21f-5fd14263c202
#>  3:    FALSE 72546856-f6eb-4808-99c9-e5c3b8be7f52
#>  4:    FALSE 2a2e758d-6ffb-269a-d713-0727cef6a26c
#>  5:    FALSE 16141bf7-7953-4094-83f0-4a23b0c4af23
#>  6:    FALSE d755aa6a-dae2-4cae-a236-6c916fa6beb6
#>  7:    FALSE 2901b3f6-4eb8-4de9-82dc-fe2e4ceaea10
#>  8:    FALSE 27164c96-3beb-45a1-aa72-82e7f738bf9e
#>  9:    FALSE 3db0373c-324f-a413-de79-55d9fc7d5d5e
#> 10:    FALSE 7753608c-d771-42af-822e-7132e6a5bd61
#> 11:    FALSE a0e8659f-3059-66e6-3f54-f7b1736b4632
#> 12:    FALSE 8c84a470-f87d-bf7d-756b-9d37e5f49f77
#> 13:    FALSE 038e98bc-1b23-076b-23de-52b8114cb69f
#> 14:    FALSE d96bd046-c7be-a174-f52d-ca5dd0b2c74e
#> 15:    FALSE 2458d797-f5a6-d4c7-52dd-020bbc88bf88
#> 16:    FALSE 42ac223f-d5f9-6ff6-a2c2-af4ab55aa446
#> 17:    FALSE eb84fde3-e67f-5511-3d90-7de54766af8c
#> 18:    FALSE 4116e001-ba0d-6ed7-1878-ccc689079874
#> 19:    FALSE f8922061-4b57-a236-cf67-60e4adafdf73
```

Gives you a data.table which contains all the questions, question texts, etc. 
which you can use for further processing i.e to render a user manual with rmarkdown. 
Find details in the manual on questionnaire creation.

You can also get a list of all interviews done for the specific questionnaire.

```r
interviews <- suso_getQuestDetails(operation.type = "interviews", quid = questlist[2, QuestionnaireId], version = questlist[2, 
    Version])
interviews <- interviews[, .(InterviewId, AssignmentId, ResponsibleId, ErrorsCount, Status)]
head(interviews, 20L)
#>                              InterviewId AssignmentId                        ResponsibleId ErrorsCount
#>  1: 0870df14-5b3a-431c-a2d9-d59a102d230f          404 d1e57346-b13e-47e8-adc1-aaf647711f47           0
#>  2: e1066cbd-2c04-414d-922c-cc93c9fe333f          404 d1e57346-b13e-47e8-adc1-aaf647711f47           0
#>  3: c84ba723-e19d-48a4-9447-176b22571a5c          267 b1aaf473-14fe-4613-9c66-3185b69b1d11           0
#>  4: 800892cd-bcfd-4667-98dc-8aedee09215b          266 5ac32a2d-20c5-42b6-a30c-89367d9f65d2           0
#>  5: 59547fd9-51ed-4f20-aec7-0b94bcbf3495          267 b1aaf473-14fe-4613-9c66-3185b69b1d11           0
#>  6: 4e33a10a-8e60-4695-8fdf-0ea7dd69505c          404 d1e57346-b13e-47e8-adc1-aaf647711f47           0
#>  7: 7064a70e-2d86-4236-a84b-ad8656d76491          404 d1e57346-b13e-47e8-adc1-aaf647711f47           0
#>  8: 32f6e155-2493-46ea-81ab-c089fb51ff09          266 5ac32a2d-20c5-42b6-a30c-89367d9f65d2           0
#>  9: a8130651-8e45-40d3-9097-246cb20ec867          266 5ac32a2d-20c5-42b6-a30c-89367d9f65d2           0
#> 10: 1fd1fa02-dcf5-464e-ac47-9fcfa56be6be          371 0d169565-df66-48b4-8c93-3375e21de136           0
#> 11: 61e7c5f4-17fa-4b18-92a7-4c3fb8a92867          371 0d169565-df66-48b4-8c93-3375e21de136           0
#> 12: cb422fe2-cafd-4dc2-8f6f-2f9f416e0bb7          371 0d169565-df66-48b4-8c93-3375e21de136           0
#> 13: c4ffdc75-f5a7-4db0-b405-38c42625cb0e          371 0d169565-df66-48b4-8c93-3375e21de136           0
#> 14: 424b668c-ddb3-4d9a-beb3-6609cf46415b          371 0d169565-df66-48b4-8c93-3375e21de136           0
#> 15: b846cc1b-64bc-4c71-9c27-872b1dee8456          266 5ac32a2d-20c5-42b6-a30c-89367d9f65d2           0
#> 16: 16ad3f3b-0a93-42be-b921-d4e68968d715          266 5ac32a2d-20c5-42b6-a30c-89367d9f65d2           0
#> 17: d7f355a6-d213-4373-bc46-debe4044d71c          266 5ac32a2d-20c5-42b6-a30c-89367d9f65d2           0
#> 18: 18a6a7eb-30c9-41e2-a68e-7cdba9a6df17          371 0d169565-df66-48b4-8c93-3375e21de136           0
#> 19: 35d66617-bd38-48e5-9ce8-ea185aa89b4e          371 0d169565-df66-48b4-8c93-3375e21de136           0
#> 20: b2b83f26-e20e-44c8-9fc7-2ddba0fe52e9          353 0d169565-df66-48b4-8c93-3375e21de136           0
#>                  Status
#>  1:           Completed
#>  2: InterviewerAssigned
#>  3:           Completed
#>  4:           Completed
#>  5:           Completed
#>  6:           Completed
#>  7:           Completed
#>  8:           Completed
#>  9:           Completed
#> 10:           Completed
#> 11:           Completed
#> 12:           Completed
#> 13:           Completed
#> 14:           Completed
#> 15:           Completed
#> 16:           Completed
#> 17:           Completed
#> 18:           Completed
#> 19:           Completed
#> 20:           Completed
```

## Quick statistics

To monitor variables of interest, you can use the *suso_get_stats* function.


```r
statquest <- suso_get_stats(questID = questlist[2, QuestionnaireId], version = questlist[2, Version], qQuest = questionnaire[13, 
    PublicKey])
print(statquest)
#>        TEAMS      TEAM MEMBER Private dwelling Institution Vacant dwelling Abandoned/Dilapidated Total
#> 1: All teams All interviewers               90          10               6                    31   137
#> 2: Team_2101        Int1_2101               51           2               2                    29    84
#> 3: Team_2101        Int2_2101               17           3               2                     0    22
#> 4: Team_2101        Int3_2101               12           3               2                     1    18
#> 5: Team_2101        int4_2101               10           2               0                     1    13
```


## Full data export

To export the data collected in Survey Solutions, you use *suso_export*. 


```
#> The last file has been created 5.534 hours ago.[1] "assignment__actions"
#> [1] 0
#> [1] "****"
#> [1] "dwe_list"
#> [1] 2
#> [1] "****"
#> [1] "interview__actions"
#> [1] 0
#> [1] "****"
#> [1] "interview__diagnostics"
#> [1] 0
#> [1] "****"
#> [1] "interview__errors"
#> [1] 0
#> [1] "****"
#> [1] "str_list"
#> [1] 1
#> [1] "****"
```

Its return value is a list with the following elememts: main, R1, R2, R3, with
- **main** containing the files: BAH_MiniPilot, interview__comments
- **R1** containing all rosters at the first level
- **R2** containing all rosters at the second level
- **R3** containing all rosters at the third level

through the harmonized ID, main and rosterfiles can easily be put together. More on this in the specific vignette.


## Paradata

To retrieve the paradata for a particular interview you use *suso_export_paradata*

```r
system.time(para1 <- suso_export_paradata(questID = questlist[2, QuestionnaireId], version = questlist[2, Version], 
    reloadTimeDiff = 24, onlyActiveEvents = F, allResponses = T))
#> 
#> The last file has been created 5 hours ago.
#> 
#> Starting download & file extraction. 
#> 
#> 
#> Calculating Response Timings.
#> 
#> Extracting GPS variable.
#> Processing: 
#> 	AnswerSet
#> 
#> 	AnswerRemoved
#> 
#> 	ApproveByHeadquarter
#> 
#> 	Restarted
#> 
#> 	Reject
#> 
#> 	QuestionDeclaredInvalid
#> 
#> 	QuestionDeclaredValid
#> 
#> Export & Transformation finished.
#>    user  system elapsed 
#>   1.244   0.028   0.510
```

This will return a list of data table, separated by events. Please bear in mind, that paradata files can be fairly big, and processing it may require a large working memory. To decrease the load there are also 3 parameters you can change, these are:

- **onlyActiveEvents**, if TRUE it processes only the active events initiated by users.
- **allResponses**, if FALSE, does not process all response values, nevertheless they are still included in a single column. Otherwise, they are separated by column.

Running the same call again without passive events and without all responses processed, reduces processing time significantly.


```r
system.time(para2 <- suso_export_paradata(questID = questlist[2, QuestionnaireId], version = questlist[2, Version], 
    reloadTimeDiff = 24, onlyActiveEvents = T, allResponses = F))
#> 
#> The last file has been created 5 hours ago.
#> 
#> Starting download & file extraction. 
#> 
#> 
#> Calculating Response Timings.
#> 
#> Extracting GPS variable.
#> Processing: 
#> 	AnswerSet
#> 
#> 	AnswerRemoved
#> 
#> 	ApproveByHeadquarter
#> 
#> 	Restarted
#> 
#> 	Reject
#> 
#> Export & Transformation finished.
#>    user  system elapsed 
#>   0.908   0.004   0.357
```

As you see from the system timings, changing these parameters reduces 
processing time significantly. More details on how to work with paradata 
can be found in the corresponding vignette. The paradata export is 
returned as a list, with the following elements:

- **full data**: KeyAssigned, CommentSet, Completed, AnswerSet, AnswerRemoved, 
Restarted, Reject, QuestionDeclaredInvalid, QuestionDeclaredValid, actionDistr, 
userDistr, roleDistr
- **reduced data**: KeyAssigned, CommentSet, Completed, AnswerSet, AnswerRemoved, 
Restarted, Reject, actionDistr, userDistr, roleDistr

There are also tables already included in the file, like:

```r
para2[["userDistr"]]
#>      responsible count
#> 1:                3460
#> 2:     Int1_2101  1025
#> 3:     Int2_2101   305
#> 4:     Int3_2101   250
#> 5:     int4_2101   146
#> 6: bahamaAPI0202    18
#> 7:         admin     5
```

which gives the distribution of events by user, or: 

```r
para2[["actionDistr"]]
#>                      action count
#>  1:   QuestionDeclaredValid  2574
#>  2:               AnswerSet  1482
#>  3:             VariableSet   525
#>  4:                 Resumed   150
#>  5:                  Paused   120
#>  6:               Completed    69
#>  7:    ReceivedBySupervisor    65
#>  8:     InterviewerAssigned    47
#>  9:             KeyAssigned    45
#> 10:      SupervisorAssigned    45
#> 11:   ReceivedByInterviewer    24
#> 12:    RejectedBySupervisor    21
#> 13:           AnswerRemoved    19
#> 14: QuestionDeclaredInvalid    15
#> 15:               Restarted     4
#> 16:              CommentSet     4
```
which gives the distribution by event type.

We hope that gave you a short overview on the available functions. For more 
details on how to use the output, please read the specific vignettes.
