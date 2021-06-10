+++
title = "Glossary"
keywords = [""]
date = 2021-06-10T00:00:00Z
+++


The following is a brief overview of the specialized terms used in Survey
Solutions. The meaning of these terms may be different from what you may
have experienced in other systems. Follow the links inside for more detailed
explanations in the support site articles.

### 2FA
(aka Two-factor authentication)

Security-enhancing feature requiring authentication of [users](#user) with
two different procedures. In Survey Solutions the two factors are:
* password, selected by the [user](#user), and
* time-sensitive token (number) generated using an authenticator app
(typically installed on the user's smartphone).

#### Assignment
A request/order to conduct one or more [interviews](#interview) as part of a
certain survey to a specific [user](#user) of the Survey Solutions system.
Typically contains answers to one or more identifying fields that specify
where the data must be collected. (typically 1 document per unit of survey).

#### Calculated variable
Element of a questionnaire document, which defines a calculated result based on
questions and/or other variables using a pre-defined [syntax](#syntax).
Variables may be intermediate or final, becoming part of the exported
[survey data](#survey-data).

#### Calendar event
An attribute of an assignment and interview, which consists of a message,
date, and time components, typically used by interviewers to schedule
upcoming visits.

#### Categories filtering
An efficiency technique that reduces the number of choices in categorical
questions by removing the *a priori* invalid choices based on known information
(answers to earlier questions) and a pre-defined syntax expression, which is
evaluated for each option of a choice.

For example, a person who is 5 years old may not be related to the household
head as *father* or *grandfather*, so these categories may be removed from
the choices for this question. Yet these categories may be retained for a
person who is 60 years old.

#### Cloud server
A Survey Solutions data server that stores the user data, but is located not
in premises of the said user and is accessed not physically, but remotely
through communication means. Cf. [local server](#local-server).

#### Compilation error
An error reported by the [Designer](#designer) while compiling a
[questionnaire](#questionnaire). [Questionnaires](#questionnaire) containing
compilation errors may not be imported to a [data server](#data-server) and
the errors need to be fixed before a survey based on such a
[questionnaire](#questionnaire) may start.

#### Data server
A server that stores the data and hosts the Survey Solutions server component
for managing the survey, controlling user accounts, exporting data and other
key tasks. Can be set up on a [cloud server](#cloud-server) or a
[local server](#local-server).

#### Designer
An online tool (website) to develop electronic [questionnaires](questionnaire)
to be used by the Survey Solutions data servers.

Also, a person who is using this tool to design [questionnaires](questionnaire).

#### Email service provider
An online service providing the capability to send large number of emails.
[more info](/headquarters/cawi/email-providers/)

#### Enabling
An interview flow control technique in which questions in an
[interview](#interview) are shown to the interviewer/respondent
("*asked*") or not shown ("*skipped*") depending on the answers
to earlier questions, preloaded information, [calculated results](#calculated-variable), etc.

#### Interview
An electronic record of answers and comments to the questionnaire questions
delivered in fulfillment of an [assignment](#assignment). (typically 1 or
more documents per each assignment of survey).

#### Interviewing process
The process of filling out an [interview](#interview) by the interviewer (in
the CAPI, CATI modes) or respondent (in the CAWI mode).

#### Limit
A particular numeric value, specifying the bounds within which the developers
have implemented the functionality of the product. All limits chosen by the
developers are listed in the
[following table](/questionnaire-designer/limits/survey-solutions-limits/).

#### Limit error
A [compilation error](#compilation-error) caused by overshooting a particular
[limit](#limit).

#### Linked question
A special kind of categorical question, the categories of which are not
defined during the design of the [questionnaire](#questionnaire), but are
defined during the interview when answering certain earlier questions in
the questionnaire. Typically replacing the questions *"Who...?"*
or *"What is the line number of...?"* in the paper-based surveys.

#### Local server
(aka: Standalone server)
A Survey Solutions data server that stores the user data and is located
on premises of the same user so that it can be accessed both physically
and through communication means. Cf. [cloud server](#cloud-server).

#### Metadata
A downloadable data file containing information about the survey, such as
which questions were posed or what options were given, but not individual
responses. Cf. [paradata](#paradata), [survey data](#survey-data).

#### Multilingual questionnaire
A [questionnaire](#questionnaire) that contains embedded translations of
questions, options and other text into 2 or more languages, and can be
switched between them during the interviewing process.

#### Paradata
A downloadable data file containing information on the progress of
[interviews](#interview), which includes the actions by the interviewer
(such as answering the question) and the responses of the program (such as
indication of an error in response to an invalid answer). Cf.
[metadata](#metadata), [survey data](#survey-data).

#### Preloading
Including information known at the start of the survey into
[assignments](#assignment) to pre-populate [interviews](#interview) with
answers to questions already established in earlier waves of the same survey
or from other relevant data sources. Typically used in panel surveys, where
some attributes, such as date of birth of household members may be preloaded.

#### Questionnaire
An electronic equivalent of a blank questionnaire form containing questions,
skips and validation logic, images, lookup tables and other information
universally available in all interviews of the survey.
(typically 1 document per survey).

#### Respondent
In CAPI surveys it is the person answering the questions of the interviewer.

In CAWI surveys is the person completing the web form with answers to the
survey questions. Respondents typically know nothing about the working of
the Survey Solutions, don't have any specialized training and treat the
interface as a common web page.

#### Role
A set of permissions, responsibilities and tools that are available to a
certain [user](#user). For example, HQ users may upload a
[sample file](#sample-file), or export the [survey data](#survey-data), but
can't modify individual answers or complete [interviews](#interview).

In Survey Solutions the roles are the following:
* Administrator,
* Headquarters,
* Observer,
* Supervisor,
* Interviewer,
* Designer, and Tester.
* API user.

#### Roster
A special kind of [subsection](#subsection), which repeats its questions
multiple times. For example, a demographic section of a typical household
survey is a roster repeating questions on name, age, gender and education
for every household member. A roster typically appears as a table in
paper-based surveys. Some rosters have fixed dimensions (for example, if
questions have to be repeated for each of the 7 days of week), while others
may change their dimensions depending on the value of the roster trigger.

NB: ~~roaster~~ and ~~rooster~~ are incorrect spellings of **roster** that
sometimes occur in our [users' forum](https://forum.mysurvey.solutions) discussions.

#### Roster item
An element of a [roster](#roster), part of a collection of items, over which
the questions are repeated. A roster item typically corresponds to a row in
a table in paper-based surveys.

#### Roster trigger
A question in the [questionnaire](#questionnaire) that determines the size
(number of [roster items](#roster-item)) of the [roster](#roster).

#### Sample file
An input to the sample-based survey, which contains identifying information for
all the [units being surveyed](#survey-unit). This file is used by Survey
Solutions to automatically create individual assignments for these units.

#### Section
A group of questions, [subsections](#subsection), static texts or other
elements of a [questionnaire](#questionnaire). Typically equivalent to a
chapter or module of a paper-based survey.

#### Subsection
A group of questions smaller than a [section](#section). May include other
subsections. Typically correspond to a smaller topic or a sub-topic of a survey.

#### Survey data
A downloadable data file containing answers to survey questions in a format
accessible by other systems. Cf.
[metadata](#metadata), [paradata](#paradata).

#### Survey unit
Units corresponding to the main level of the [interview](#interview). Typically
these are:
* households,
* persons,
* enterprises,
* facilities, etc.

But could be more specialized:
* transactions,
* events,
* measurements, etc.

#### Synchronization
A process of information exchange between two devices, in which they are
actualized to make sure each device has necessary information about the
activities that occurred on the other device.

#### Syntax
Formal notation for expressions and conditions used in Survey Solutions. It is
used by the questionnaire designer to specify [enabling conditions](#enabling),
[validation conditions](#validation), [filter conditions](#categories-filtering),
and define [calculated variables](#calculated-variable).

#### Syntax error
A [compilation error](#compilation-error) caused by invalid [syntax](#syntax)
specification. A [questionnaire](#questionnaire) free of syntax errors is not
necessarily correct (may still contain limit errors or implement invalid logic).

#### Team
All interviewers having a common supervisor. In some reports may include the
supervisor himself/herself. (In different arrangements the team may or may not
be travelling together, and the supervisor may or may not be joining the
interviewers in the travel).

#### Tester App
An Android-based app implementing the functionality for testing questionnaires
during their development and utilized by questionnaire designers and testers.
The Tester App is available from the
[Google Play](https://play.google.com/store/apps/details?id=org.worldbank.solutions.Vtester).

[more info](/questionnaire-designer/testing/testing-your-questionnaires-using-the-tester-application/).

#### User
A registered and authenticated person that is using the Survey Solutions
system to perform a certain [role](#role) in the survey data collection.
Users are different from [respondents](#respondent), which usually are
not registered.

#### Validation
A process of detecting problems with the responses to questions of an
[interview](#interview). Involves using the responses (answers to questions)
as inputs in logically formulated expressions, the result of which determines
whether certain responses are acceptable or not. Validation may produce
[validation errors](#validation-errors).

#### Validation errors
Error messages issued as a result of the [validation](#validation), indicating
that a certain answer or answers are not acceptable based on the logic of the
[questionnaire](#questionnaire) developed by its author.

### Workspace
A named logical compartment on the server containing
[questionnaires](#questionnaire), [assignments](#assignment),
[interviews](#interview), and other information. [Users](#user) may be given
permissions to access information in one or multiple workspaces by the
administrator. [more info](/headquarters/accounts/workspaces/)
