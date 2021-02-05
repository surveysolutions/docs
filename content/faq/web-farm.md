+++
title = "Scalability of Survey Solutions"
keywords = [""]
date = 2019-08-06T00:00:00Z
+++

## Overview

The Survey Solutions supports horizontal scaling and may be
deployed as a web-farm for servicing a large number of
client connections.

This is especially important for operations like population
censuses and large national surveys.

A web-farm installation is implemented on multiple systems
(called nodes) working in concert to service the received
requests. Increasing the number of nodes in the farm allows
to improve the overall performance: the responsiveness of
the system and number of users working simultaneously.

The number of nodes in the farm may be dynamically changed
(new nodes introduced or existing nodes shut down) without
the interruption of work of the other nodes.

The overall performance of the web-farm is determined by
the performance of individual nodes (higher processing
power, memory, and drive speed will positively affect the
overall performance).

The exact moment when a web-farm must be introduced depends
on multiple factors, including the desired responsiveness,
number of simultaneous users, performance of the nodes, size
and complexity of the questionnaire.

Even a very powerful web-farm may still be limited by the
bandwidth of the internet connection, which must be taken
into account when the Survey Solutions deployment is being
planned.

## Deployment scheme

<center><IMG src="../images/hq_farm.png" width="600px" /></center>

For Web Farm mode Survey Solutions Headquarters should run behing load balancer or reverse proxy with load balancing capabilities. Load Balancer should support Web Sockets and sticky sessions. Modern reverse proxy servers are already support this.

Survey Solutions require that both WebSockets and StickySessions are enabled for all survey modes.

### Survey Solutions Configuration

For Survey Solutions Headquarters configuration following settings should be enabled for ALL instances of HQ in `[Scheduler]` settings

```ini
[Scheduler]
InstanceId=AUTO
IsClustered=true
```

### IIS

It's possible to run IIS in Web Farm mode - <https://docs.microsoft.com/en-us/iis/web-hosting/scenario-build-a-web-farm-with-iis-servers/configure-a-web-farm-with-iis-servers>
