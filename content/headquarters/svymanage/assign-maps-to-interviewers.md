+++
title = "Assign Maps to Interviewers"
keywords = ["maps"]
date = 2019-04-04T00:00:00Z
lastmod = 2019-04-04T00:00:00Z
+++

This article describes the format of the file for map assignments to interviewers.


The map assignments file is a file, which is uploaded to the 
Survey Solutions Headquarters to regulate which interviewer 
has access to which offline maps.

The offline maps are used by the interviewers to record answers to the 
geography type questions. If your survey doesn't use any geography type
question you can skip this article.

The map assignment file is formatted as a tab delimited file with two columns:

- <B>map</B> must contain unique map names (must correspond to the 
files uploaded to the server);

- <B>users</B> contains the list of the users that have access to the
map listed in the first column.

When the map must be available to more than one user, separate their logins
in the list with a comma.

It is normal that a user name is mentioned for more than one map. That user
will have access to all of the maps where his name was mentioned and no other.

Here is an example of such a file: [usermaps.tab](/file-examples/usermaps.tab).

Uploading the map assignments <B><I>replaces</I></B> the previous map assignments.
If the map was assigned to an interviewer and subsequently a map assignments
file was uploaded that doesn't contain this map-user pair, then the previosly
pushed map will be removed from the interviewer's tablet at the next maps
synchronization.

After the map was assigned to an interviewer, that interviewer needs to
synchronize his maps (not data!) to receive the map files. These files may
be quite large.

The headquarters users must plan carefully when preparing the map files and
assignments to assign only the necessary maps covering the relevant areas. 
Assigning all maps to all users may result in a huge traffic to the server, 
waiste of airtime, and clogging of tablets.
