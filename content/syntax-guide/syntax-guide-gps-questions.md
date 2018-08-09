+++
title = "Syntax Guide: GPS questions"
keywords = ["syntax","gps"]
date = 2016-11-22T20:31:12Z
lastmod = 2016-11-22T20:31:12Z
aliases = ["/customer/portal/articles/2651879-syntax-guide-gps-questions"]

+++

Responses for the [GPS questions](/questionnaire-designer/gps-question)
are recorded as:   
  
class {  
  double Latitude;  
  double Longitude;  
  double Accuracy;  
  double Altitude;  
}  
  
The following functions can be used in conditions for GPS questions:

-   [Longitude, Latitude, Accuracy, and Altitude.](#retrieve) *Retrieves
    the latitude/longitude/accuracy/altitude of a GPS coordinate.*
-   [InRectangle](#InRectangle). *Check if the coordinates are inside a
    rectangle.* 
-   [GpsDistance.](#GPSDistance) *Calculate the distance between two
    coordinates in meters.*
-   [GpsDistanceKm](#GPSDistanceKm). *Calculate the distance between two
    coordinates in kilometers. *

 <span id="retrieve"></span>Longitude, Latitude, Accuracy, and Altitude
-----------------------------------------------------------------------

### Description

Retrieves the latitude/longitude/accuracy/altitude of a GPS coordinate.

### Syntax

    var_GPS.Longitude

    var_GPS.Latitude

    var_GPS.Accuracy

    var_GPS.Altitude

  
This function retrieves the longitude, latitude, accuracy or altitude
from a GPS question. var\_GPS is the variable name for the GPS question,
followed by “.” and the name of the element that you want to retrieve.

### Example 1

Suppose you are collecting data in Uganda and the household samples are
along the equator. In a GPS question you are recording the coordinates
of each household. You want to make sure that the GPS recorded is in
fact along the equator.  
  
For this check, we would write the validation condition for the question
like this:

    house_GPS.Longitude==0

### Example 2

For a GPS question recording the coordinates of a household you want to
make sure that the accuracy is equal to or less than 15.  
  
The validation condition for this question would be:

    house_GPS.Accuracy<=15

 <span id="InRectangle"></span>InRectangle
------------------------------------------

### Description

Confirm that a GPS coordinate falls within a rectangle defined by north,
west, south, and east boundaries.

### Syntax

    var_GPS.InRectangle(north,west,south,east)

This function verifies that a coordinate (longitude and latitude) fall
within the rectangle defined by the north, west, south, east corner
coordinates.  
 

### Example 1

Assume that you are conducting a study in Ethiopia and you want to make
sure that the GPS coordinates recorded are within the country.  
   
For this check, we would write the validation condition for the question
like this:

    house_GPS.InRectangle(14.390422862509851,33.0984365234375,3.7756813387012143, 47.993157226562516)

Note that writing values so precisely makes no practical sense. As this
[discussion
thread](http://gis.stackexchange.com/questions/8650/measuring-accuracy-of-latitude-and-longitude/8674#8674)
indicates, "The fifth decimal place is worth up to 1.1 m: it distinguish
trees from each other. Accuracy to this level with commercial GPS units
can only be achieved with differential correction."

  <span id="GPSDistance"></span>GpsDistance
------------------------------------------

### Description

Calculates the distance between two coordinates in meters.

### Syntax

    gpsA.GpsDistance(gpsB)

This function calculates the distance in meters (m) between the
coordinates gpsA and gpsB.

###  Example 1

Assume you have two GPS questions in your survey, one (gpsHome) for the
coordinates of the household’s house, and another for the coordinates of
their field (gpsField). You want to check that the distance between the
two is at least 50 meters.  
   
For this check, the validation condition would be:

    gpsHome.GpsDistance(gpsField)>50

 <span id="GPSDistanceKm"></span>GpsDistanceKm
----------------------------------------------

### Description

Calculates the distance between two coordinates in kilometers.

### Syntax

    gpsA.GpsDistanceKm(gpsB)

This function calculates the distance in kilometers (km) between the
coordinates gpsA and gpsB**.**

### Example 1

Suppose you have two GPS questions in your survey, one for each visit to
the household (visit1\_gps and visit2\_gps**)**. You want to check that
the distance between the two is less than .5 kilometers.  
   
For this check, the validation condition would be:

    visit1_gps.GpsDistanceKm(visit2_gps)>.5
