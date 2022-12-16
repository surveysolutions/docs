+++
title = "Map files"
keywords = [""]
date = 2022-12-14T00:00:01Z
lastmod = 2022-12-14T00:00:01Z

+++

In Survey Solutions all maps are first uploaded to the server, then
distributed to the interviewers based on assignments of maps.

This functionality is accessible for the users in roles `headquarters` and
`administrator` only.

The `Map files` page is the page where the maps are managed at the Survey
Solutions server (Headquarters). It can be accessed by

<CENTER>
  <A href="images/map_files_menu.png ">
     <IMG src="images/map_files_menu.png " width=612>
  </A>
</CENTER>

The Maps dialog is using two icons to denote types of the uploaded maps:

 <IMG src="images/raster_map_icon.png" width="32"> for raster maps (tiff, tpk, and mmpk map files);

 <IMG src="images/vector_map_icon.png" width="32"> for vector maps (shapefiles).

Additional information on managing the shapefiles is available in this article: [Shapefile maps](/headquarters/mapsmanage/shapefile-maps/)

The following actions are available here:

- [upload maps](#upload-maps) (via the `Upload map` button);
- [delete a map](#delete-a-map) (from the context menu);
- [open a map](#open-a-map) and see which users are assigned this map (from the context menu);
- [see maps assigned to users](#see-maps-assigned-to-users) (by following the `User Maps` link);
- [update assignments of maps to users](#update-assignments-of-maps-to-users) (by following the `Update user maps linking` link).


### Upload maps

In Survey Solutions all maps are first uploaded to the server, then
distributed to the interviewers based on assignments of maps.

One or multiple maps in acceptable [map formats](/headquarters/svymanage/map-formats/)
are uploaded in archived form (as a single *.zip archive) by clicking the green
`Upload ZIP file` button at the `Map files` page: `Survey Setup` --> `Maps` --> `Upload ZIP file`

Please note that:

- Maps are stored separately by workspaces. If the same map is needed in
multiple workspaces it must be uploaded to each such workspace.
- When a map with the same name already exists on the server, it will be
overwritten with the new map.

### Delete a map

A confirmation is required before a map is deleted:

<CENTER>
  <A href="images/map_delete_confirmation.png ">
     <IMG src="images/map_delete_confirmation.png " width=612>
  </A>
</CENTER>

When a map is deleted, all assignments of that map to users are also deleted. At
next synchronization the files corresponding to this map will be erased from the
interviewers' devices.



### Open a map

For any given map, the survey manager may preview the map in the Headquarters,
and see the users to whom it is assigned.

<CENTER>
  <A href="images/map_preview.png ">
     <IMG src="images/map_preview.png " width=612>
  </A>
</CENTER>


### See maps assigned to users

For any every user, the survey manager can see, which maps are assigned to that user:

<CENTER>
  <A href="images/user_maps.png ">
     <IMG src="images/user_maps.png " width=612>
  </A>
</CENTER>

### Update assignments of maps to users

The map assignments file is a file, which is uploaded to the
Survey Solutions Headquarters to regulate which interviewer
has access to which offline maps. Online maps need not be assigned to individual
users, all users have access to online maps provided that they have Internet
connectivity when trying to use them.

The offline maps are used by the interviewers to record answers to the
geography type questions and for displaying data on the
[map dashboard](/interviewer/app/map-dashboard/). If the survey doesn't use
any geography type question nor records any locations using location sensor
(GPS or similar) then no maps need to be assigned.

The map assignment file is formatted as a tab delimited file with two columns:

- <B>map</B> must contain unique map names (must correspond to the
files uploaded to the server);

- <B>users</B> contains the list of the users that have access to the
map listed in the first column.

When the map must be available to more than one user, separate their logins
in the list with a comma.

It is normal that a user name is mentioned for more than one map. That user
will have access to all of the maps where his name was mentioned and no other.

Here is an example of such a file: [usermaps.tab](usermaps.tab).

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
