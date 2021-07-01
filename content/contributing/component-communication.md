+++
title = "Communication between system components"
keywords = ["development", "contributing"]
+++

Survey Solutions has several components that communicate with each other on different stages of survey lifecycle.

## System components:
### Interviewer _(Android application)_
### Supervisor _(Android application)_
### Tester _(Android application)_
### Headquarters(HQ) _(Web application)_
### WebTester _(Web application)_
### Designer _(Web application)_

These components may communicate with other component of the system.

In the regular data collection flow these are common steps:
1. A new Questionnaire is created on Designer
2. Questionnaire is tested using Android Tester and WebTester. Both apps _communicate_ with Designer.
3. Headquarters application _connects _to Designer and downloads questionnaire
4. New assignments are created on Headquarters
5. Interviewer and Supervisor apps synchronize with Headquarters, send and receive data (multiple occurrences)
5'. Interviewer syncs with Supervisor app

## Synchronization

### I. Interviewer and Headquarters (HQ)
A. Initial step after clean installation

After installation user inputs endpoint URL, login name and password.

1. Interviewer application sends request to Headquarters with login and password provided by user.
   In case if user was not found in the system, password didn't match the user or user was locked the HQ returns Unauthorized response.
   If user's credentials were successfully validated system generates Token and returns it to the Interviewer.
   This Token is used for further Authorization with HQ.
2. Interviewer requests the list of Workspaces from HQ and selects the first one in the received list. 
3. Interviewer requests HQ to check if current user has registered device. 
   If device is not linked(registered) to user Interviewer app registered the current one.
4. Interviewer checks compatibility with HQ, providing device ID and communication protocol version of the application. 
   Interviewer app also supplies application version in header as agent identifier.
   HQ validates all parameters and replies to the Interviewer whether synchronization is permitted.
   Reasons that doesn't allow to continue: user has a different device, linked to profile; application should be updated to the latest version,
   Interviewer application has later version and cannot be synchronized 
   If compatibility check is successful Interviewer saves the list of workspaces.
   Interviewer requests details about interviewer and HQ tenant Id and saves details.

B. Routine synchronization
After login to the Interviewer application dashboard is displayed with selected workspace. On "Sync" button press 

0. Interviewer App checks login information sending request to the server
   User details are requested and updated
   Application sends request to the server to verify that sync is permitted 
   Current supervisor is requested from server and updated
   Application sends statistics to HQ
1. Interviewer requests public encryption key if doesn't not exist in the storage
2. Interviewer requests tablet settings from the server and updates values for partial synchronization and web interview URL template 
3. If partial synchronization is enabled, Interviewer updates interviews with changes from HQ
4. Interviewer uploads calendar events created or updated locally
5. Interviewer App starts to uploads interviews to the Headquarters: completed, CAWI mode, partially sync ready ones (if enabled). 
   For each interview the following items are sent in order:
     Images files
     Audio files
     Audio audit files
     Interview data
6. Interviewer app synchronizes assignments.
   List of assignments is requested from HQ. For all assignments to be downloaded application checks the local copy of questionnaire and downloads it.
   Application loads assignments, updates and created new assignments if needed.
7. Downloading Interviews. Application gets the list of interviews from HQ. Checks local list of interviews, removes and creates interview one by one.
   For every interview the questionnaire is downloaded if it doesn't exist and then interview data.
8. Questionnaires sync. A list of questionnaires is retrieved from the server. Local questionnaires are updated according to the HQ list.
   Local data is deleted and updated accordingly.   
9. Calendar events are downloaded.
10. Company logo is updated if it was changed.
11. Audit log is sent to the HQ
12. Application sends statistics to HQ

### II. Interviewer and Supervisor
  Routine synchronization

### III. Interviewer and Supervisor

### IV. Headquarters and Designer

### V. WebTester and Designer

### VI. Tester and Designer
