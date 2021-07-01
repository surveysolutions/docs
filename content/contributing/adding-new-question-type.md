+++
title = "Adding new question type"
keywords = ["development", "contributing"]
+++

# Adding new question type
Adding a new question type requires changes in all existing applications in survey solutions. 

When implementing it think about an answers to the following questions:
- What CLR type can be used to represent an answer to your question type. Consider existing [types](/syntax-guide/cslanguage/data-types/)
- How do you see this question to be represented in export
-- Is answer should be presented differently during preloading of assignments
- How will it be represented on UI for interviewer, headquarters (answered read-only state)

## Designer 
Entry point is `enum QuestionType`. To add new entry here or not depends on how much your new question type is different from any of the existing types. 
In order to be able to use answer to a question in questionnaire expressions implement a type conversion in `QuestionTypeToCSharpTypeMapper`. You should always choose a type that can have a `null` value in it.

Extend `QuestionnaireInfoFactory`. This class is responsible to generate classes provided to a javascript view from `QuestionnaireDocument` object.

Implement needed UI to edit question details on designer. To do it introduce changes in `src\UI\WB.UI.Designer\questionnaire` folder. Start at `views/question.html`, `controllers/question.js` this is code that is generic to all question types. There you'll be able to find how customizations per type can be implemented. Client javascript application sends commands to `CommandController` so check if you need to introduce changes there.

If you need to store custom properties for your question type create new command that is going to be used in update operations. Find implementation of `UpdateTextQuestion` class as an example

Implement needed new verifications to be used during questionnaire compilation. `QuestionnaireVerifier` class is an entry point for all checks that are executed, check `QuestionVerifications` class for examples. Verifications are separated into 3 levels (`VerificationMessageLevel` enum) - `Critical`, `Error` and `Warning`.
* `Critical` errors are first to be checked by verifier. If any critical error found in questionnaire its likely to break the entire questionnaire structure and will lead to more and more errors. So if any critical error is found further lower level checks are not executed.
* `Error` is regular error 
* `Warning` is shows in separate list and not prevents user from importing questionnaire to headquarters application

Once question can be saved on designer and verified implement its representation for PDF Export. `PdfFactory` class is responsible for preparing data to render document, views to render UI can be found in `src\UI\WB.UI.Designer\Areas\Pdf` folder. PDF file is generated from html with wkhtmltopdf tool.

In order to prevent older Headquarters applications from importing questionnaires that are using new question type extend `DesignerEngineVersionService` class with check for existence of a new type. Assign current `ApiVersion.MaxQuestionnaireVersion` to existing last check, increment later constant by 1 and use it to assign content version in your new check. 

Do not forget to write unit test for all introduced changes.

## Headquarters
Headquarters application should be able to display added question type during interview review and give an ability to give answers when web mode is used. 

At this point you'll need to implement an ability for interview to receive answers for that new question type.
Interview represents itself as a tree inside (`InterviewTree`). Each question has own type that stores answer and state if its disabled, valid, etc. You need to create a representation of your question type, create a new class, take a `InterviewTreeGpsQuestion` as an example. While adding question type for a tree you'll also create a type to store answer to your question type.
Now you should be able to add a new command, example can found at `AnswerGeographyQuestionCommand.cs`. After new class for command is created add a new method that will accept answer in `Interview.cs` file, take `AnswerAreaQuestion(AnswerGeographyQuestionCommand command)` as an example. 
When that done you should be able to implement answering command. You'll need to extend `ApplyUpdateAnswerEvents` method in the `Interview` class to raise new event type for your question. 

When interview is accepting answer and is raising proper event, implement UI for web mode. Extend class that converts interview entities into UI dtos - `WebInterviewInterviewEntityFactory`. Specifically `GetEntityDetails` method. Create needed dto classes for it.
Open `src/UI/WB.UI.Frontend` in visual studio code, create a new `vue` component in `src\webinterview\components\questions` folder. Existing convention maps component to a type declared in `WB.Enumerator.Native.WebInterview.Models.InterviewEntityType` enumeration. So extend it with new type and add appropriate `.vue` component (`Integer.vue` can be an example).

### Preloading
Implement preloading for new question type. Its done in 2 phases:
1. parsing and validating raw csv file for validity
2. verifying interview specific rules, question types and questions existence

Code is located in `AssignmentsImportService.VerifySimpleAndSaveIfNoErrors` method. It checks file and stores it in rows to database for background process to pickup and create assignments. 
When file is uploaded and stored `AssignmentsVerificationJob` validates it for interview specific rules, if needed extend it. 
After validation assignment is created in `AssignmentsImportJob`. To parse string value into a proper answer value extend `AssignmentsImportService.ToInterviewAnswer` method.


## Web tester
If implemented properly should be working already since its using same code as web interview does.

## Interviewer/Supervisor
Start implementation from extending of `InterviewViewModelFactory`. Method `GetEntityModelType` converts questionnaire question type to question type that is mapped to a specific viewmodel (`GetEntityModelType`). Extend `InterviewEntityType` enum, `EntityTypeToViewModelMap` method and create new viewmodel type for new question. 
Each question has generic functionalities like title, instructions, validations, warnings, comments etc. They are added by composition in parent viewmodel. Look for `TextQuestionViewModel` as an example of implementation. 
Viewmodel should implement multiple interfaces to be fully supported by interviewer application: 

- `IInterviewEntityViewModel` - makes it possible for section viewmodel to track individual entities
- `IViewModelEventHandler<TextQuestionAnswered>` - viewmodel should update own ui when `Interview` accepted answer and pushed event about it back to interview
- `IViewModelEventHandler<AnswersRemoved>` - same as answered
- `ICompositeQuestion` - in order to achieve smooth scrolling each question is spitted into small rows. This interface allows for parent viewmodel to get a plain list of entities that question is composed of
- `IDisposable` - called when user leaves section to clear all managed resources, unsubscribe from evets.

## Export
Export development is done in separate solution - `src/Services/WB.Services.sln`. Extend `QuestionType` enum and add a type that will represent new question type in questionnaire document (same was as it was implemented in designer). 
Extend `QuestionnaireSchemaGenerator.GetSqlTypeForQuestion` method that maps question type to PostgreSQL column type. If your question spans across multiple export columns (as multi option does for example) extend implementation of `QuestionnaireExportStructureFactory.FillHeaderWithQuestionsInsideGroup` method. 


