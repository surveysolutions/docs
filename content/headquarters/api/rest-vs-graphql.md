+++
title = "API: Comparing REST and GraphQL Operations"
keywords = ["API"]
date = 2021-05-27
draft = true
+++

## REST API
When REST API is used to interact with Survey Solutions server, a request is sent to the server URL as HTTP GET, POST, PATCH, or DELETE
(there are other HTTP request types, like PUT, HEAD, OPTIONS, etc, which are not used in Survey Solutions API). After a successful request
a response will come from the server in JSON format. Some requests return binary results (for example interview pdf, or export data archive),
others may not have any response body, only the status code.

Depending on the endpoint, parameters may be provided as part of the url, as a query string, or a request payload.

- To get the details about export job #3, one would send the following request putting 3 as the part of the url:
```bash
curl -X GET "https://examplesurvey.com/primary/api/v2/export/3"
```
- Here's example with the query string, when filtering the list of assignments by the responsible name:
```bash
curl -X GET "https://examplesurvey.com/primary/api/v1/assignments?Responsible=username"
```
- And request payload is mostly needed for POST/PATCH calls. When creating a user for example, we need submit details as a JSON object:
```json
{
  "Role": "Supervisor",
  "UserName": "string",
  "FullName": "string",
  "PhoneNumber": "string",
  "Email": "user@example.com",
  "Password": "string",
  "Supervisor": "string"
}
```
Depending the programming language used, forming and sending a web request may look more elegant, but in our examples of using command-line curl tool,
we will need to form a single payload string, with escaped quotes:
```bash
curl -X POST "https://examplesurvey.com/primary/api/v1/users" -H "Content-Type: application/json" \
     -d "{\"Role\":\"Supervisor\",\"UserName\":\"string\",\"FullName\":\"string\",\"PhoneNumber\":\"string\",\"Email\":\"user@example.com\",\"Password\":\"string\",\"Supervisor\":\"string\"}"
```

## GraphQL API
GraphQL is a language for the client (application) to define a type and shape of the data it requires and send the query for the server for execution. There is only single endpoind on the server
for any kind of requests.

In order to use Survey Solutions GraphQL API, a POST request is sent to the /graphql endpoint with a (JSON) payload that contains the query. For example, in order get a list of questionnaires,
retriving only id and title fields, the GraphQL query would look like:
```json
{
  questionnaires {
    nodes {
      id,
      title
    }   
  }
}
```
Then, the following request would be sent to the server:
```bash
curl -X POST "https://examplesurvey.com/graphql" -H "Content-Type: application/json" -d "{ questionnaires { nodes { id, title }}}"
```

## Why two APIs and the future plans

When we first introduced public API to Survey Solutions back in 2014, GraphQL was still internal project in Facebook (they started developing it in 2012, and publicly released in 2015). REST technology
on the other hand has been a de-facto industry standard for developing web APIs. Throughout the years, we have been adding new endpoints to the REST API to cover (the most) functionality of Survey 
Solutions that users might want to automate. At the same time, our product has been actively expanding, as we kept introducing new and exciting features release after the release. The required stability
of a public API (esuring backwards compatibility, minimizing breaking changes) created sort of rigidity in our development process and increased the maintenance burden. This lead us to explore 
GraphQL as a potential alternative, as it promised a move away from the declared endpoints to declared data structure (In addition, being geeks, we did want to play with a new, cool technology).

We decided to try using GraphQL for any newly added added functionality. Maps-related API was therefore written in GraphQL only and released as part of the [21.06](/release-notes/version-20-06/).
At the same time, as part exapnding or improving performance for existing features (for example, adding filters to interview lists) we slowly developed GraphQL alternatives for existing REST API endpoints.
Thus we arrived to the version 21.*, where there are REST API endpoints, which are marked as *depricated* and scheduled for removal since the corresponding GraphQL query can produce the same, or more
(for exampe /api/v1/questionnaires). There are other endoints that are still maintained in the both sides because (for some technical reasons) cannot yet be replaced by only GraphQL (for example, there is
a possibility to get list of assignments in both APIs but the returned properties list differs). Of course, depending when are you reading this article and what version of Survey Solutions are you using,
these issues may be resolved or not applicable.

We plan to continue adding new functionality to the GraphQL side keeping REST API as is. Only exception would be if we face any technical implementation hurdle, in which case we will put aside our
ideological principles and implement the feature in a way that helps our users the most.


Let us now see how one would write GraphQL queries to retrieve information that corresponding REST API endpoints would return.



## Asignments

## Export
Only the REST endpoints are currently available, no GraphQL equivalents or alternatives.

## Interviews
/api/v1/interviews

The endpoint returns interviews under the specific questionnaire so the both questionnaire id and version parameters are required.

```bash
curl -X GET "https://examplesurvey.com/primary/api/v1/interviews?questionnaireId=9d3ad069-99aa-4d6a-8eda-ad12c722a60f&questionnaireVersion=2&pageSize=10&page=1"
```

The equivalent

```bash
curl -X POST "https://examplesurvey.com/graphql" -H  "Content-Type: application/json"
  -d "{ questionnaires(id: \"9d3ad069-99aa-4d6a-8eda-ad12c722a60f\", version: 2, keep: 10) { totalCount, nodes { variable }}}"
```

## Questionnaires

## Settings

## Statistics

## Users

## Workspaces