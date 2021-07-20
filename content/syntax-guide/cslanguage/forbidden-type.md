+++
title="Forbidden type error"
date = 2021-07-20T01:01:01Z
+++

Survey Solutions uses C# language for writing the expressions, such as enabling
or validation conditions. Yet, where we thought the language features may be
misused to create vulnerabilities, we've restricted its use by disallowing
certain C# data types, such as accessing files or network.

If you are getting a "*Forbidden type*" error (corresponding error codes are
WB0272, WB0273, WB0274, WB0275) the expression you've written is probably
following the correct syntax, but is not going to compile for the reason
of security.
