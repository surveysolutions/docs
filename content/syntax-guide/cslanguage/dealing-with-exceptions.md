+++
title = "Dealing with exceptions"
keywords = ["syntax","exception","condition"]
date = 2016-08-10T03:29:25Z
lastmod = 2016-08-10T03:29:25Z
aliases = ["/customer/portal/articles/2531548-dealing-with-exceptions","/customer/en/portal/articles/2531548-dealing-with-exceptions","/customer/portal/articles/2531548","/customer/en/portal/articles/2531548","syntax-guide/dealing-with-exceptions"]

+++

An exception is a situation where the computer can't proceed with a
normal flow of commands.  
A common example is a division by zero. The result of this operation is
not defined. In statistics a concept of a missing value is introduced,
and we normally don't bother about the process. We know the result of X
divided by zero ;will be a missing.  
  
In C\# division by zero will cause the program to abort with an
[exception](https://msdn.microsoft.com/en-us/library/ms173160.aspx). The
programmer can envelop the risky code into a wrapper, similar to how you
capture { } a certain code in Stata. In Survey Solutions we always do
this behind the scenes for the users, so when an exception occurs:

-   In enabling condition the question is considered disabled, and
-   In validation condition the answer is considered invalid.

  
  
To prevent an exception from happening you can use the logical
conditions.For example, instead of writing

    income/numpersons>1000

  
one can write:

    (numpersons>0) && (income/numpersons>1000)

  
if numpersons is equal to zero, then the software will not continue
evaluating the remainder of the expression as the result is
automatically false. It matters especially in case where the conditions
get more complicated:

    (income/numpersons<1000) || (ispoor==true)

  
Here, if an exception occurs during the evaluation of the first part of
the expression, the second doesn't get evaluated. But, if we rewrite:  

    ((numpersons>0) && (income/numpersons<1000)) || (ispoor==true)

  
the second part of the expression will be evaluated in case numpersons
is zero.
