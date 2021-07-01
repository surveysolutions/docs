+++
title = "Project overview"
keywords = ["development", "contributing"]
+++

Survey solutions currently has 2 solution files - one for build UI projects (`src/WB.sln`) and one for services (`src/Services/WB.Services.sln`).
 
## Project dependency diagram for WB.sln:
{{< imgproc "images/diagram.png" Fit "800x600" />}} 

From top to bottom:
### WB.Core.SharedKernels.DataCollection.Portable
Project contains code that is common to the entire survey solutions. This is an assembly that is referenced from compiled assembly that contains enabling conditions and validation expressions. So for example if you need to add a reusable function to extend existing set this an assembly to extend. 

### WB.Core.SharedKernels.Questionnaire
Since questionnaire structure is reused throughout all of the applications in the system this is also a core component that is referenced from all other applications. Bare questionnaire is stored in it. `QuestionnaireDocument` class is the one that specifies JSON structure of questionnaire. 

### WB.Core.Infrastructure
Survey solutions uses CQRS based architecture. This project has helper classes to support this in all other applications. 

### WB.Core.SharedKernels.DataCollection
Module contains common code that relates to actual data collection process that is the same for web and tablet. `Interview` and `StatefulInterview` entities are located in this project that implement the interview logic. Historically `Interview` was restored from event stream for each answer, but once stream sizes got bigger `StatefulInterview` took its place. Its kept in memory between requests and can quickly return current interview state. 

### WB.Infrastructure.Native
Infrastructure code that is dedicated to handling asp.net web site related tasks. For example generic classes for monitoring implementation that is common for Designer and Headquarters applications is located here.

### WB.Core.BoundedContexts.Designer
All not related to UI logic of designer application is here. Templates that are implementing classes for validation conditions and enabling conditions, questionnaire validation logic (`QuestionnaireVerifier`) located in this assembly. 

### WB.Core.BoundedContexts.Headquarters
Assembly to store all survey management related logic. Workspace management, user access, questionnaire import from designer etc.

### WB.Core.SharedKernels.Enumerator
Shared code for Interviewer and Supervisor android applications. Mostly contains view models for interview handling. Also contains DTOs for synchronization between applications using Google Nearby Communications

### WB.UI.Interviewer, WB.UI.Supervisor, WB.UI.Tester
Xamarin.Android applications that are built using [MvvmCross](https://www.mvvmcross.com/) library.