+++
title = "Comparing floating point numbers and precision problems"
keywords = ["precision computation"]
date = 2017-02-06T08:55:28Z
lastmod = 2017-02-06T08:55:28Z
aliases = ["/customer/portal/articles/2736012-comparing-floating-point-numbers-and-precision-problems","/customer/en/portal/articles/2736012-comparing-floating-point-numbers-and-precision-problems","/customer/portal/articles/2736012","/customer/en/portal/articles/2736012"]

+++

Our support service often receives reports on suspected bugs in Survey
Solutions on the grounds of a situation similar to the one described
below. These reports stem from misunderstanding of some fundamental
concepts of how computations are done by a computer, and not due to an
actual defect of the software.

Problem description
-------------------

Suppose you have a questionnaire containing two numeric questions X and
Y, and a third question Z with an enabling condition (X\*Y) == 21.6.  
  
Some of the users report that the question Z doesn't get enabled even
for the values where it seems to hold when checked manually, e.g. for
values X=18 and Y=1.2  
  
The problem is that of comparing two floating point numbers, which is never
exact. This is not a Survey Solutions problem, this is how computers
work in general. One will have exactly the same situation in
Stata:

    display 18*1.2
    display 18*1.2==21.6
    display %21x 18*1.2
    display %21x 21.6

The problem is not only of division or multiplication operations, but
also of addition and subtraction:

    display 0.1+0.1+0.1==0.3

As the value 21.6 can't be stored in computer's memory exactly, it is
rounded, and it is rounded to a different value when it is obtained as a
result of a mathematical operation or entered directly. Same applies to
almost any programming language.

Links
-----

Bill Gould explains this (in the context of Stata) in a series of his
blog postings here:  
<http://blog.stata.com/2012/04/02/the-penultimate-guide-to-precision/>

Examples for C\# are plentiful all over internet, see e.g. here:  
<http://stackoverflow.com/questions/3420812/how-do-i-find-if-two-variables-are-approximately-equals>

For in-depth overview of the problems associated with the floating point
representation of numbers and operations on them, see the following
article:  
<https://docs.oracle.com/cd/E19957-01/800-7895/800-7895.pdf>

Recommendations for questionnaire designers
-------------------------------------------

In most cases ask yourself first, whether you need an exact comparison.
In many cases exact comparison is not required.Â Where it is required,
ask yourself whether the values should indeed be represented as floating
point numbers, or perhaps they are integers by nature. When there is no
other way, compare the floating point numbers x and y as

    Math.Abs(x-y)<$epsilon

where you define a macro $epsilon as a sufficiently small number, for
example 0.00000001.

It is also possible to instruct C\# to conduct the comparison as
integers, where you know you indeed intend to compare integers:

    (long)x==(long)y

You can find more about C\# data types and their use in Survey Solutions
by reading the article on [data types](/syntax-guide/data-types).
