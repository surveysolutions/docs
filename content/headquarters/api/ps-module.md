+++
title = "API: Powershell Module"
keywords = ["API"]
date = 2021-01-22
+++

SSAW PowerShell module contains cmdlets wrapping Survey Solutions API to abstract away from some of the HTTP details.
As PowerShell command-line shell is already present and all Windows machines, users can start automating their interaction
with Survey Solutions application without any additional software development. PowerShell can be installed on Mac and Linux
computers as well, but you may prefer to use the [Python client](https://github.com/vavalomi/ssaw) insted.


{{% note %}}
The module is still work-in-progress so not all API methods are implemented or documented yet.
{{% /note %}}

## Installation

Open PowerShell shell and type:
```posh
PS> Install-Module -Name SSAW
```

### Configure Server Connection

```posh
PS> $conf = Get-SSAWConfiguration
PS> conf['BaseUrl'] = 'https://demo.mysurvey.solutions'
PS> $conf['Username'] = 'api_user'
PS> $conf['Password'] = 'password' # not an actual password!
```

### Start interacting with the server
get list of questionnaires:
```posh
PS> Get-SSAWQuestionnaires

Questionnaires : {@{QuestionnaireIdentity=a98a849d7b9d4346912a3b98267985a4$1; QuestionnaireId=a98a849d-7b9d-4346-912a-3b98267985a4; Version=1;
                 Title=Klimalez2020;Variable=Q; LastEntryDate=6/17/2020 7:02:54 AM; IsAudioRecordingEnabled=False; WebModeEnabled=False},
                 @{QuestionnaireIdentity=e9d38a7fa4be45a48ced2589970641f4$1; QuestionnaireId=e9d38a7f-a4be-45a4-8ced-2589970641f4; Version=1;
                 Title=Maps; Variable=mp; LastEntryDate=6/18/2020 11:25:47 PM; IsAudioRecordingEnabled=False; WebModeEnabled=False},
                 @{QuestionnaireIdentity=656da88508ee43bcb90f93d8866fe76d$1;QuestionnaireId=656da885-08ee-43bc-b90f-93d8866fe76d; Version=1;
                 Title=PROJET ALICE; Variable=PROJET_ALICE; LastEntryDate=6/21/2020 12:20:12 PM;IsAudioRecordingEnabled=False; WebModeEnabled=True},
                 @{QuestionnaireIdentity=a98a849d7b9d4346912a3b98267985a4$2;QuestionnaireId=a98a849d-7b9d-4346-912a-3b98267985a4; Version=2;
                 Title=Klimalez2020; Variable=Q; LastEntryDate=6/17/2020 7:02:54 AM; IsAudioRecordingEnabled=False; WebModeEnabled=False}…}
Order          : 
Limit          : 10
TotalCount     : 761
Offset         : 1
```
get list of assignments:
```posh
PS> Get-Assignments

Assignments : {@{Id=23072; ResponsibleId=4264d1ec-6597-4287-8708-ec3cc3a1bd23; ResponsibleName=Team03;
              QuestionnaireId=4ce37b21bdfc440baae03353b61c4a11$1; InterviewsCount=0; Quantity=1; Archived=False; CreatedAtUtc=1/22/2021 10:16:06 PM;
              UpdatedAtUtc=1/22/2021 10:18:24 PM; Email=; Password=; WebMode=False; ReceivedByTabletAtUtc=; IsAudioRecordingEnabled=False},
              @{Id=23073; ResponsibleId=4264d1ec-6597-4287-8708-ec3cc3a1bd23; ResponsibleName=Team03;
              QuestionnaireId=4ce37b21bdfc440baae03353b61c4a11$1; InterviewsCount=0; Quantity=1; Archived=False; CreatedAtUtc=1/22/2021 10:16:06 PM;
              UpdatedAtUtc=1/22/2021 10:18:24 PM; Email=; Password=; WebMode=False; ReceivedByTabletAtUtc=; IsAudioRecordingEnabled=False}…}
Order       : 
Limit       : 20
TotalCount  : 19766
Offset      : 1
```
get list of export jobs for specific questionnaire and version
```posh
PS> Get-SSAWExportJobs -QuestionnaireIdentity 'a98a849d7b9d4346912a3b98267985a4$1'

JobId           : 202720
ExportStatus    : Completed
StartDate       : 1/22/2021 11:19:33 PM
CompleteDate    : 1/22/2021 11:19:34 PM
Progress        : 100
ETA             : 
Error           : 
Links           : @{Cancel=; Download=https://demo.mysurvey.solutions/api/v2/export/202720/file}
HasExportFile   : True
ExportType      : STATA
QuestionnaireId : a98a849d7b9d4346912a3b98267985a4$1
InterviewStatus : All
From            : 
To              : 
AccessToken     : 
RefreshToken    : 
StorageType     : 
TranslationId   : 
IncludeMeta     : 
```
download export archive
```posh
PS> Get-SSAWExportFile -Id 202720

LastWriteTime : 1/22/2021 6:33:52 PM
Length        : 1022502
Name          : Q_1_STATA_All.zip
```
start new export job, wait for it to finish and download archive
```posh
PS> $job = Initialize-SSAWExportJob -QuestionnaireId 'a98a849d7b9d4346912a3b98267985a4$1' -ExportType "SPSS" -InterviewStatus "All"
PS> Start-SSAWExportJob $job -Wait | Get-SSAWExportFile
```
