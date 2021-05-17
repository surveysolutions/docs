+++
title = "Shape file overlay"
keywords = [""]
date = 2018-06-06T21:39:31Z
lastmod = 2021-05-15T00:00:00Z
aliases = ["/customer/portal/articles/2942852-shape-file-overlay","/customer/en/portal/articles/2942852-shape-file-overlay","/customer/portal/articles/2942852","/customer/en/portal/articles/2942852","/interviewer/shape-file-overlay"]

+++


**<span style="color:#800000;">This feature is added in v18.06 for beta
testing. We recommend our users to utilize it with a caution and keep us
posted about the experiences with it.</span>**  

A single shapefile can be overlayed over the baseline map in a geography
type question. This shapefile must be placed into a specific folder
 and must contain all three
mandatory [shapefile
components](https://en.wikipedia.org/wiki/Shapefile) (\*.shp, \*.shx,
and \*.dbf) accompanied with the \*.prj. Consult the ESRI tools and
documentation for the structure of the shapefile and the role of these
components.  

For version 21.01.8 and earlier place the shapefile into the folder
`TheWorldBank/Shared/ShapefileCache/`.

For version 21.05 and later place the shapefile into the folder
`TheWorldBank/Shared/ShapefileCache/WORKSPACENAME`, where WORKSPACENAME is
the name of the workspace where you want to have the shapefile to be available.

The number of points in the shapefile may vary: it can be as simple as
four corners of a rectangular enumeration area, or be a complex outline
of the coastal area.   

{{< imgproc "images/881646.png" Fit "800x600" />}}  

Once the shapefile is present on the tablet, it will be automatically
overlaid over the baseline map, and the interviewer will have a visual
indication whether the choices he/she is making in the geography
question are within or outside of the area of interest.  

If the shapefile contains an attribute ***label***, the values of this
attribute are used as annotations for the polygons, otherwise no
annotations are shown.

As of v21.05 the shapefiles are not centrally managed at the Survey
Solutions Headquarters and must be copied manually to the interviewers'
tablets.
