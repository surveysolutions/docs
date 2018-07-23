+++
title = "Selecting a person"
keywords = [""]
date = 2017-02-23T11:21:22Z
lastmod = 2017-02-23T11:21:22Z
aliases = ["/customer/portal/articles/2751355-selecting-a-person"]

+++

For random selection refer to [this
article](http://support.mysurvey.solutions/customer/portal/questions/16695907).
Here an example of determined selection is discussed.  
  
Consider you wish to select a child attaining the lowest grade, with
selecting younger children to break the ties. We define **selname** as a
string variable:

    selname=PERSONS.Where(
        p=>IsAnswered(p.name) 
        && IsAnswered(p.age)
        && IsAnswered(p.grade)
    ).Where(
        p=>p.age.InRange(5,15) 
        && p.grade.InRange(1,98)
    ).OrderBy(p=>p.grade).ThenBy(p=>p.age).First().name

Note that if there are two or more children of the same age and grade
exist in the same household, then the one entered first will be
selected.  
  
The variable may be subsequently referred to in the question texts or
static texts with %-substitution:  
  
{{< imgproc "images/748657.png" Fit "800x600" />}}  
  
​It is usually convenient to place all the continuation questions into a
sub-section and lock it until the selection has been made.
