+++
title = "Server storage space"
keywords = ["storage", "disk", "database", "size"]
date = 2023-04-05T11:11:11Z
lastmod = 2023-04-05T11:11:11Z
+++

<CENTER>
  <IMG src="images/storage.jpg">
</CENTER>

Survey Solutions saves a lot of data. Database sizes in the size of tens
of GBs are commonly observed even in small surveys. Population censuses may
consume TBs of data.

Survey Solutions stores the data:

- in the database and
- in files on file system of the server.

It is crucial that the system doesn't run out of storage for its continuous and
reliable operation.

The data transfer from mobile devices to the server involves complete data
deletion on the mobile device after the server confirms that it has received
the intended package. If the server has no storage needed to process and store
the data from this package, as well as any supplementary updates to reports
and other elements on the server, then the application may:

- become unstable;
- have some functionality not available, while other functionality working fine;
- show incorrect content; or
- stop responding or servicing further requests.

Notably, from the viewpoint of the interviewer the transfer succeeds when the
server confirms receiving the data, so the interviewers can't detect or react
to this issue.

Correspondingly, it is important to monitor the growth of the footprint of
the application in terms of storage space to avoid server downtime or data
loss. The exact actions will depend on where and how the Survey Solutions
is deployed, for example, whether the DB is located on the same machine or
on a separate database server.

Generally the administrator of such a system (this may be and often is a
different person then the [administrator user in Survey Solutions](/headquarters/accounts/survey-solutions-server-administrator/)) needs to
monitor:

- availability of free space on the file system of the machine used for
servicing web requests;
- availability of storage space for the database;
- speed of expansion (which may not necessarily be linear, but exhibit cycles,
for example by day of the week, or month of the year).

Survey Solutions itself may not accurately acquire these capacities (e.g. it
has no idea how far the DB can grow on the server that stores the DB data),
which are determined as a combination of the physical capacities, account
limitations, storage consumption policies and quotas, etc, thus it can't
alert the user by itself that the storage is about to become full. Yet the
[Survey Solutions administrator user](/headquarters/accounts/survey-solutions-server-administrator/) may see some statistics on the DB current
footprint in the [healthcheck](/headquarters/config/healthcheck/) page
(including some statistics by workspace).

There are numerous third-party tools available for such monitoring.

For major cloud providers consider the tools that they provide when you host your server with them:

- [Amazon AWS CloudWatch](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/monitoring-cloudwatch.html);
- [Google System Insights](https://cloud.google.com/sql/docs/postgres/use-system-insights);
- [Microsoft Azure](https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/concepts-monitoring).

Alongside with tracking the use of the storage space, these tools
give a lot of insights regarding many other aspects of the database
state and are indispensable in optimizing the database performance.

Many of these tools provide the possibility to automatically notify
the user about the event that the storage has become full or is about to become full (either by doing projections, or by registering the size is over a certain threshold limit).

Some tools allow for automatic increase of resources when the capacity
is about to be exhausted or perform another scripted action to react to such an event. For example, the DB may be automatically
resized as a reaction to the alert that a certain threshold has been
reached. Automatic database expansion should be used with caution, as the running costs for operating the servers also increase in an automatic fashion.

Addressing the storage issue before it actually happens is usually much
cheaper (in terms of staff time) then dealing with the consequences. Indeed,
the consequences may spread across the board to other systems linked to a
Survey Solutions server via API calls, which would not be able to have their
requests processed and adequately responded to. Another obvious loss is the
loss of a response, especially in the web interviews, where the respondent
can no longer proceed with an interview, and may no longer return to the
survey page because she has lost interest or motivation to participate in
such a survey.

Revising the storage limits in a cloud infrastructure can be technically
very quick, but may require additional costs, which may need to go through
the procurement clearance (for corporate and institutional users), thus
having an early warning is critical.

The exact response will depend, of course, on:

- how quickly these issues (expanding the infrastructure) can get processed
bureaucratically and technically;
- how quickly the data footprint continues to grow;
- how expensive or critical is the loss of responses, or having server
downtime, etc.

As a rule of thumb: if you feel that the data cumulates with the speed that
you have less than a week-worth of storage left, start doing the revisions
immediately.

As a rule of thumb: if you have consumed **half** of the storage space,
consider increasing it. (of course this depends on whether you've reached
this point in the beginning, middle, or the end of the data collection,
but remember that even if you are not collecting additional interviews,
your data footprint may continue to grow, and thus needs storage for
expansion).
