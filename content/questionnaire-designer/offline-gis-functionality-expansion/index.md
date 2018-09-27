+++
title = "Offline GIS Functionality Expansion"
keywords = ["offline", "gis", "functionality"]
date = 2018-06-05T17:19:31Z
lastmod = 2018-09-27
+++

1.  Question type earlier called area is now renamed to geography and
    supports capture of various geographic information:

-   area (polygons),
-   paths (polylines),
-   single (point) and
-   multiple (multipoint)

on offline maps. Each selection is exported as vectors of points. This
question type is now accessible from the syntax to be used in
conditional and validation expressions. The following properties can be
used in the syntax:

-   <span style="font-family:courier new,courier,monospace;">double
    geography.Area</span>
-   <span style="font-family:courier new,courier,monospace;">double
    geography.Length</span>
-   <span style="font-family:courier new,courier,monospace;">int
    geography.PointsCount</span>

In addition, the IsAnswered() function also supports this question type
now. For example, we can ask to show the secondary parcel if the primary
parcel has been already indicated:

    IsAnswered(primaryParcel)

Or we can indicate an error if the area of the parcel is too small to be
a parcel with a dwelling situated on it:

    self.Area>=30

Or for large parcels we could ask if they are also being used for
agricultural purposes:

    primaryParcel.Area>600

Similarly for the paths we can measure the length and show warnings, for
example, when they are unexpectedly large:

    self.Length<=6000

1.  Offline maps formats have been extended with the raster files,
    specifically [GeoTIFF](https://en.wikipedia.org/wiki/GeoTIFF) files
    that can be produced with a wide range of commercially available and
    free to use tools.
2.  BETA: A single [shapefile map can be added](/interviewer/shape-file-overlay)
    to the maps storage on the tablet, and if added in this way will be
    automatically overlayed on top of the baseline map in offline map.
