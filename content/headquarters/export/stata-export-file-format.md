+++
title = "Stata export file format"
keywords = [""]
date = 2017-04-11T00:15:07Z
lastmod = 2017-04-11T00:15:07Z
aliases = ["/customer/portal/articles/2784975-stata-export-file-format","/customer/en/portal/articles/2784975-stata-export-file-format","/customer/portal/articles/2784975","/customer/en/portal/articles/2784975","/headquarters/stata-export-file-format"]

+++

When Survey Solutions v5.18 is writing an exported data file in Stata
format it is producing it according to Stata 14 data file specification,
available from StataCorp LLC.   
  
Stata versions prior to version 14.0 (e.g. 12.0, 13.1, etc) cannot open
these files because these older versions of the software are not aware
of the newer file format. The message that the user will see on the
screen varies, and may look, for example like the following:

    dta too modern
        File D:\1.dta is from a more recent version of Stata.  Type update query
        to determine whether a free update of Stata is available, and browse 
        http://www.stata.com/ to determine if a new version is available.
    r(610);

Or it may simply suggest that the data file is unknown format or
corrupt.  
  
Users having access to Stata 14 software should open the files exported
from Survey Solutions with the Stata 14 software. If they need to pass
the data to users of older versions of Stata, they should resave the
data in the older format by using the saveold command in their Stata
(for each datafile produced by Survey Solutions).  
  
Users not having access to Stata 14 software may download tab-delimited
data and run the accompanying do-files to import the data into their
Stata software, then save the imported data as a Stata file
corresponding to their version of Stata.  
  
Alternatively, users may download data exported from Survey Solutions in
SPSS file format and import them with the help of a user-written command
usespss.
