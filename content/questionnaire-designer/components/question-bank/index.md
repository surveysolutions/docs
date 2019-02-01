+++
title = "Question bank"
keywords = ["question bank","questionnaire library","bank","library","question"]
draft = true
+++


Description
----------------------------------------

The question bank allows users to search for questions in the question bank and, with a click, add them to their questionnaire.

{{< imgproc "images/question-bank.png" Fit "640x480" />}}

To do this, 

- Click on SEARCH FOR QUESTION to open the question bank window
- Search the question bank via filters and/or full-text search
- Click on ADD to copy the selected question--as well as any associated enablement, validation, or filter conditions--from the question bank

The question bank consists of all questions found in any public questionnaire.

How to search the question bank
----------------------------------------

### Open search

Click on SEARCH FOR QUESTION button to open the question bank search window. The button is located alongside the ADD QUESTION, ADD SUB-SECTION, etc. buttons.

### Review search results

The question bank window contains search results. Each search result is represented by a card that contains the following information:

- Type of questionnaire object, indicated by the usual Designer icons
- Text of the question
- Name of the source questionnaire

In the image above, the first search result is a text question, with question text "ADDRESS" , from the questionnaire named "Preloading Tutorial".

Scroll up and down in the menu to view search results.

### Filter by folder

Click on the drop-down menu, optionally, to restrict search to the selected question bank folder.

### Search by text

Enter text in the Search for a question field in order to search for questions that contain that text.

Search is full-text and intelligent. Questions that contain either the entereed text or variants of it will be returned. For example, entering "member" will return, among other results, questions containing "member", "members", or "member's". In addition, entering "member age" will return questions that contain these two strings, such as "member's age", "age of member", etc.

### See questions in their original context

Click on the question text in order to open up the question in the source questionnaire. In this way, the user can see question in its original context, see the question's full attributes, etc. 

Furthermore, the user may manually more content--say, a sub-section or roster from the source question--through copy paste. To do this, select the questions from the source questionnaire to copy. Then, paste those questions into the destination questionnaire. This operation is not done via the question bank window, but instead via copy-paste from one questionnaire to another.

How to add from the question bank
----------------------------------------

- Hover your cursor over the desired question. 
- Click on ADD.

Current limitations
----------------------------------------

The question bank currently draws only from public questionnaires. There is currently no mechanism to have the question bank include other sources (e.g., set of non-public questionnaires.)

The action of copying a question from the question bank is recorded in questionnaire history, but currently does not the origin of the copied question.
