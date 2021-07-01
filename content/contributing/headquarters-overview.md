+++
title = "Headquarters application overview"
keywords = ["headquarters", "development", "contributing"]
+++

# Headquarters application for developers
Headquarters web application uses CQRS with event sourcing based architecture. 

At a high level a change to the state of the system is done in the following sequence: 
1. Client creates a command that describes what kind of change is needed
2. Infrastructure restores aggregate root from its event stream
3. Aggregate root checks if command execution is allowed and executes it
4. Events produced by aggregate root are published to denormalizers to build reports, lists and any other representations for end user

Sections below describe major aspects of Headquarters application that developers need to know about. 
## Web request lifecycle
Each request in system passes a set of steps that developer should know about:
### Determine target workspace 
`WorkspaceMiddleware` check web request URL and list of created workspaces. If rules match it wraps web request into an inner Autofac scope where `IWorkspaceContextAccessor` can be resolved and client code knows workspace details that its working inside. 
When workspace middleware sets asp.net `HttpContext.Request.Path` and `HttpContext.Request.PathBase`. This allows for all other infrastructure like routing and link builders not to think about prefix for workspace name in the URL. 
In order to make all database queries to be executed in proper workspace set of NHibernate `ISessionFactory` objects is stored in `HqSessionFactoryFactory` class. Each has its connection string `SearchPath` property configured to match workspace. 
To have access to workspace information in all views global action filter (`WorkspaceInfoFilter`) sets it into `ViewData` dictionary.

### Request transaction
`UnitOfWorkActionFilter` class begins transaction and commits it if no exception occurred during request execution. This transaction wraps calls that are made to data that is stored in `IPlainStorage` and `IPlainKeyValueStorage`. 
### Command execution
Command that is sent into `CommandService` to be handled by aggregate root. Each command is handled inside its own scope so that events and denormalized data is stored in one transaction and either committed fully or rolled back. 

Command is executed by `CommandExecutor` class and can be of two types - regular and stateless. Difference between the two is that stateless command does not restore aggregate root state from events. Example of stateless command is interview deletion that occurs when questionnaire is deleted. In such case reading each interview events and restore state would be a waste of resources. 

`AggregateRoot` state is restored from events by calling `Apply` methods one by one in sequence recorded in `eventsequence` column. Method mapped as a command handler (see usages of `CommandRegistry` class to see the mapping) is called on `AggregateRoot`. 

Events produced by aggregate are published to denormalizers (good example of such is `InterviewSummaryDenormalizer`). If non of raised an exception during event handling command transaction is committed (`UnitOfWorkInScopeExecutor` is responsible for wrapping command in transaction). 

## Public API
Public api is the one that is intended to be used by any other software that should be integrated with survey solutions. This means that developer should not introduce breaking changes without necessity. Code that relates to public api located in `WB.UI.Headquarters/Api/PublicApi` folder. It consists of 2 parts, regular api controllers that are documented with swagger and graphql. 