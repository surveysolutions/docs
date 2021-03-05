+++
title= "API: .NET package"
author= "Andrii Kozhyn"
date= "2021-03-05"
+++

Introduction to the Survey Solutions .NET API Client package
====================================================

There is a client library aviable to be used in .NET runtime to execute API methods of Survey Solutions software. In order to get started install [dotnet SDK](https://dotnet.microsoft.com/download).
After done that you will be able to use included in SDK CLI to create a new project, execute the following command:

``` bash
dotnet new console
```

This will create a sample console application. To add Survey solutions client library execute following command:

``` bash
dotnet add package SurveySolutionsClient
```

Now open Program.cs file and replace contents with the following:

``` csharp
using System;
using System.Net.Http;
using System.Threading.Tasks;
using SurveySolutionsClient;
using SurveySolutionsClient.Apis;
using SurveySolutionsClient.Models;

namespace sample
{
    class Program
    {
        static async Task Main(string[] args)
        {
            // API user login and password. If you need to execute action
            // from the name of interviewer, supervisor or headquarters its possible to provide those also
            Credentials creds = new Credentials("csapidemo", "");

            // Url of the Survey Solutions 
            string surveySolutionsUrl = "https://demo.mysurvey.solutions";

            var surveySolutionsApiConfiguration = new SurveySolutionsApiConfiguration(creds, surveySolutionsUrl,
                workSpace: null // If API user is created within workspace provide its name here
            );
            var client = new SurveySolutionsApi(new HttpClient(), surveySolutionsApiConfiguration);

            // Get list of created assignments
            var assignmentsList = await client.Assignments.ListAsync(new AssignmentsListFilter());

            foreach(var a in assignmentsList.Assignments)
            {
                Console.WriteLine("Loaded assignment with id =" + a.Id);
            }
        }
    }
}
```

In order to execute console application the following command can be used:

``` bash
dotnet run
```

It print ids of assignments that are created on a targeted server. To get more examples on usage of api methods you can find in [related repository](https://github.com/SlyNet/SurveySolutionsClient)
