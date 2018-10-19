+++
title = "Circular references"
keywords = [""]
date = 2018-04-02T21:28:45Z
lastmod = 2018-04-02T21:28:45Z
aliases = ["/customer/portal/articles/2932022-circular-references","/customer/en/portal/articles/2932022-circular-references","/customer/portal/articles/2932022","/customer/en/portal/articles/2932022","/questionnaire-designer/circular-references"]

+++

Circular references is a computational problem, which cannot be resolved
by a computer because it has no logical beginning and end, for
example: **Enable question Q1 if question Q2 is enabled, and enable
question Q2 if question Q1 is enabled.**  
  
In this example each of the questions Q1 and Q2 depends on each other,
and there is no way to establish whether both should be asked or none at
all.  
  
Survey Solutions is capable of determining this kind of design defects
and many other, less obvious ones, collectively known as "*circular
references*". For example, question Q1 may depend on question Q2, which
depends on question Q3 and so on, with say, Q100 depending on Q1. The
chain of references can be arbitrarily long, but as long as there is a
circular reference it will be detected and reported.  
  
Another situation is where the question depends on itself, such as with
the filtering condition: while the filtering expression may refer to
other questions in the questionnaire, it may not refer to the question
itself.  
  
Circular references are reported as critical errors during the
questionnaire compilation stage. As all other compilation errors they
must be addressed before other testing tools can be used to test the
questionnaire.  
  
<span class="underline">Note</span> that you may, (and in fact
expected!) to refer to the value of the question in it's validation
expressions. You can do this by referring to the question by it's name
or with a convenient ***self*** alias.
