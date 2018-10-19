+++
title = "Geography Question"
keywords = [""]
date = 2017-10-12T18:32:01Z
lastmod = 2017-10-12T18:32:01Z
aliases = ["/customer/portal/articles/2888303-geography-question","/customer/en/portal/articles/2888303-geography-question","/customer/portal/articles/2888303","/customer/en/portal/articles/2888303","/questionnaire-designer/geography-question"]

+++

Description 
------------

{{< imgproc "images/825285.png" Fit "800x600" />}} A Geography question can capture various
geographic information as listed below:  
  
 

-   area (polygons),
-   paths (polylines),
-   single (point) and
-   multiple (multipoint)

For example, it can be used to define the exact location and the area of
a land, such as a plot or parcel. This question type requires specific
tablet configuration, as explained below. 

 Creating a Geography question
------------------------------

In Questionnaire Designer, 

1.  Click on the Question Type text box.
2.  Select Geography from the pop-up menu.  
    {{< imgproc "images/885524.png" Fit "800x600" />}}
3.  Choose the Geometry type from the menu, and save the changes.   
    {{< imgproc "images/885526.png" Fit "800x600" />}}

Distribute maps
---------------

### Assign maps to interviewers

Map assignments, like all other assignments made on Headquarters, are
part of survey setup.  
  
{{< imgproc "images/839994.png" Fit "800x600" />}}

To make assignments, follow these simple steps:

-   **First, log into Headquarters.**
-   **Then, upload maps to the server.** Click on UPLOAD .ZIP FILE.
    Select a zip archive containing one or more maps (<span
    style="font-family:arial,helvetica,sans-serif;">.tpk or<span
    style="color: rgb(42, 42, 42); font-size: 14px;"> raster files,
    specifically [GeoTIFF](https://en.wikipedia.org/wiki/GeoTIFF) files
    that can be produced with a wide range of commercially available and
    free to use tools)</span></span>
-   **Next, assign maps to users.** Click on the Update user-to-map
    linking. Upload a tab-delimited file that assigns one or more maps
    to users. {{< imgproc "images/839995.png" Fit "800x600" />}}

For any given map, the survey manager may preview the map on
Headquarters, and see the users to whom it is assigned

###  

Setting up the tablet
---------------------

The Geography question requires 1) the Interviewer application with ESRI
map support, and 2) synchronize under the maps menu to receive the
assigned maps. 

1) When downloading the Interviewer application on the tablet, uncheck
the *Exclude ESRI Map support* check box. Then, follow all the steps
outlined in this article.   
{{< imgproc "images/825292.png" Fit "800x600" />}}  
  
2) Synchronize to receive maps on tablets

Map assignments, like all other interviewer assignments, must be
downloaded via synchronization. Because map assignments are special (and
may contain very large files), their synchronization has a special
screen and special process that is separate from typical
synchronization.  
{{< imgproc "images/839997.png" Fit "800x600" />}}

To download assigned maps, follow these steps:

-   **Open the Interviewer application**
-   **Navigate to the map synchronization screen.** From the Interviewer
    dashboard, tap on the overflow menu. Then, select maps. From the
    maps screen, tap on the sync button.
-   **Wait for maps to download.** Because map files may be quite large,
    it is strongly advised that map synchronization be done in the head
    office before deployment to the field.

How Geography question works on a tablet 
-----------------------------------------

To answer a polygon-geography question, the enumerator taps on the *Tap
to record*  button.   
  
**Select a Map**  
If more than one map has been uploaded to the tablet, the enumerator
should select a map first. Tap on the button in the upper right corner,
as shown below. Then, select a map from the list and close the
window.   
  
{{< imgproc "images/827810.png" Fit "800x600" />}}  
  
**Select an Area**  
  
The enumerator must select an area by pressing on the map for each dot
that represents the coordinates of the area to appear. You can edit the
shape by adding more coordinates or moving the existing dots/area. Once
complete tap on *Save*.  
  
{{< imgproc "images/825301.png" Fit "800x600" />}}  
  
The area and length will appear.    
  
{{< imgproc "images/825293.png" Fit "800x600" />}}  
  
**Edit shape**  
Tap *To edit area *button to revise the selected map.You can edit the
shape by adding more coordinates or moving the existing dots/area. Once
complete tap on *Save*.

Export 
-------

The geography question is exported in a single column. Individual
vertices of the geography question are separated with a semicolon, while
coordinates (longitude and latitude in this order) are separated with a
coma. A dot is used as a decimal separator. The name of the exported
variable is the question’s variable name that was defined in the
Questionnaire Designer.   
  
Example: answered geography question (named *area*) with 3 points:  
{{< imgproc "images/825296.png" Fit "800x600" />}}
