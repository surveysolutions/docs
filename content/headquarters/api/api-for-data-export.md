+++
title = "API for Data Export"
keywords = ["API"]
date = 2016-09-19T21:45:15Z
lastmod = 2016-09-19T21:45:15Z
aliases = ["/customer/portal/articles/2574862-api-for-data-export","/customer/en/portal/articles/2574862-api-for-data-export","/customer/portal/articles/2574862","/customer/en/portal/articles/2574862","/headquarters/api-for-data-export"]

+++

Survey Solutions Headquarter provides a possibility for other
\[authorized\] applications to perform data export. This is especially
useful for creation of external dashboards, nightly automatic
validations and other similar tasks.  
  
The API usage is performed with GET and POST HTTP requests addressed to
the HQ server. All requests should be authorized via authorization of
type: Basic. Note that an API user must be created on the server you
address.  
  
The minimum set of tasks that the API users must be aware of to download
the data includes:

-   inspecting the status of a particular export file (GET request);
-   requesting the re-creation of a particular export file (POST
    request);
-   downloading a particular export file (GET request).

  
The format of the query is generally as follows:  
**<span style="color:#0000FF;"><span
style="font-family:courier new,courier,monospace;">\[headquarters
address\]/api/v1/export/\[export type\]/\[questionnaire
identity\]/\[action\]</span></span>**  
Here:  
  
**Headquarters address** is the full name of the HQ server (include the
protocol), such as: https://demo.mysurvey.solutions  
  
**Export file types** is one of the following supported types:

-   tabular
-   spss
-   stata
-   binary
-   paradata

  
**Questionnaire identity** is a composite identifier of the
questionnaire consisting of the GUID of the questionnaire followed by
the dollar sign, followed by version index number, for example:  
<span
style="font-family:courier new,courier,monospace;">74e2d30854914e24af6beae9be64130c$1</span>  
**Action** is nothing or one of the following:

-   start
-   details
-   cancel

  
Specify action **start** to request the export file in the corresponding
format to be rebuilt on the server. Specify **cancel** to cancel the
file rebuilding activity on the server. Specify **details** to obtain
the status of the export data file. Specify nothing (no action at all)
to download the particular data file.  
  
Sufficient time must pass between the request to rebuild the file and a
subsequent download request to allow the exported file to be created on
the server. While waiting your code may periodically poll server for the
updated status by submitting the **details** requests. The server will
respond with the following JSON object:  
<span style="font-family:courier new,courier,monospace;">{  
  HasExportedFile: true,  
  LastUpdateDate: "2016-09-19T11:46:33.700345-04:00",  
  ExportStatus: "Queued",  
  RunningProcess: {  
    StartDate: "2016-09-19T16:20:55.532375Z",  
    ProgressInPercents: 0  
  }  
}</span>  
In this case the response tells that the export file exists, but a
request for it to be rebuilt has been already submitted to the server,
though it hasn't started processing it yet (based on the status Queued
and progress 0 percent).  
  
The following export statuses may be encountered in Survey Solutions
server responses:

-   *NotStarted *– signals that the server hasn't been requested yet to
    produce an export file based on the specified questionnaire and
    format;
-   *Queued *– the server has been already requested to produce an
    export file base on the specified questionnaire and format, but the
    request is waiting in queue and is not running yet;
-   *Running *– when the server generates a new export file;
-   *Finished *– when the sever has successfully finished producing
    an export file;
-   *FinishedWithErrors *– signals that during generation of
    the exported file unexpected exceptions were encountered.

  
The attachment <span class="underline">GetExport.zip</span> contains a
minimal C\# solution that illustrates the use of the three API functions
to download the export data from Survey Solutions. Note, that this is
not a practical application: it does not examine the response and
doesn't react to any errors (errors on the server, network errors,
errors of data transmission,etc).  
  
Use this application as a minimal example only for the API syntax
demonstration.  
  
The zip-archive of the solution contains three files for a minimal C\#
project:

-   GetExport.sln
-   GetExport.csproj
-   Program.cs

  
The solution can be compiled e.g. in MS Visual Studio 2010 or later or
in SharpDevelop 5.1 or later.
