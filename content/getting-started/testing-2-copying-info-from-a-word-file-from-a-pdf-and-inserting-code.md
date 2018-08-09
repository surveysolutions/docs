+++
title = "TESTING 2: Copying info from a Word file, from a PDF, and inserting code"
keywords = [""]
date = 2016-05-07T19:18:52Z
lastmod = 2016-05-07T19:18:52Z
aliases = ["/customer/portal/articles/2422116-testing-2-copying-info-from-a-word-file-from-a-pdf-and-inserting-code","/customer/en/portal/articles/2422116-testing-2-copying-info-from-a-word-file-from-a-pdf-and-inserting-code","/customer/portal/articles/2422116","/customer/en/portal/articles/2422116"]
draft = true
+++

Import the questionnaire
========================

This is copied from WordÂ 
-------------------------

The step by step instructions detailed below are necessary in order to
upload your finished questionnaire to your tablets.  
Â   
Step 1: Log in to your server using the *headquarters* username and
password.  
Â   
Â   
**Note that each institution using Survey Solutions will utilize their
own server. Consequently, your username can differ from the one depicted
above.**  
Â   
Step 2: Import the templateÂ from the â€œSurvey Setupâ€ tabpage  
To import a template, you need first to access the â€œSurvey Setupâ€
tabpage by clicking on the main menu bar. Then, click the button "Import
template".

This is copied from PDF / LaTeX
-------------------------------

1.1 Lookup tables structure Lookup tables in Survey Solutions are
rectangular tables of numeric values, which may be utilized in the
enabling and validation conditions. Each questionnaire may define
multiple lookup tables of various dimensions and each such table must be
assigned a unique name. The values from the tables may be extracted from
such tables by specifying three elements: table name, row code, and
column name. Lookup tables may be assigned names as necessary, following
the same requirements as applied for a questionâ€™s variable name. Every
lookup table must contain a column named rowcode, which must contain
integer values identifying individual rows. There may be no duplicates
and no missing values in this column. These values donâ€™t have to be
consequtive or start from 1. The content of a lookup table may contain
fractions (non-integer values) and may contain missing values, as long
as at least one value that is not missing.

This is code
------------

This is NOT code.Â   
  
But the section below IS:Â   
  
Â 
`(new Func<bool>(() => {  Â Â  Â // calculate area in acreÂ  Â Â  Â var area_acre = ag_c04b==1 ? (ag_c04a * 1) :Â  Â Â  Â  Â  Â  Â  Â  Â  Â  Â  Â ag_c04b==2 ? (ag_c04a * 2.47105) :Â  Â Â  Â  Â  Â  Â  Â  Â  Â  Â  Â ag_c04b==3 ? (ag_c04a * 0.000247105) : Â Â  Â  Â  Â  Â  Â  Â  Â  Â  Â ag_c04a; Â Â  Â if (ag_c04b==4) return true;  Â Â  Â // compute amount applied in per acre terms Â Â  Â var amtPerAcre = (ag_d39b / area_acre);  Â  Â  // find the lower and upper bounds by type and unit Â  Â  var bounds = range_ag_d39b.Values.SingleOrDefault(x =>Â  Â  Â  Â Â  Â x.type == ag_d39a &&Â Â  Â // typeÂ Â  Â  Â Â  Â Â Â  Â x.unit == ag_d39cÂ Â  Â Â Â  Â // unit Â Â  Â ); Â  Â  if (bounds == null) return true; Â  Â Â  Â  Â  // determine whether amount is within the 5th and 95th percentile Â  Â  if (bounds.P5==null || bounds.P95==null) return true; Â  Â  return ((double?) amtPerAcre).InRange(bounds.P5,bounds.P95);  })).Invoke() `
