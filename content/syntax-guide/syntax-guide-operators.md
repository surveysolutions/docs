+++
title = "Syntax Guide: Operators"
keywords = ["syntax","designer","operators","arithmetic","relational","logical"]
date = 2016-08-15T19:35:34Z
lastmod = 2016-08-15T19:35:34Z
aliases = ["/customer/portal/articles/2537453-syntax-guide-operators","/customer/en/portal/articles/2537453-syntax-guide-operators","/customer/portal/articles/2537453","/customer/en/portal/articles/2537453"]

+++

Designer has built-in operators that can be used in enabling conditions
or validations. This article explains the following operators that you
can use in your instrument:

-   [Arithmetic operators](#arithmetic)
-   [Relational operators](#relational)
-   [Logical operators](#logical)
-   [Other useful operators](#other)

 

<span id="arithmetic"></span>Arithmetic Operators
-------------------------------------------------

 

The following table shows the arithmetic operators supported by Survey
Solutions. Arithmetic expressions are evaluated from left to right. For
the example, ***assume A = 20 and B = 10***  
  
 

<table>
<thead>
<tr class="header">
<th><strong>Operator</strong></th>
<th><strong>Description</strong></th>
<th><strong>Example</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>+</td>
<td>Addition: returns the sum</td>
<td><span style="font-family:courier new,courier,monospace;">A + B</span> = 35</td>
</tr>
<tr class="even">
<td>-</td>
<td>Subtraction: returns the difference</td>
<td><span style="font-family:courier new,courier,monospace;">A - B</span> = 10</td>
</tr>
<tr class="odd">
<td>*</td>
<td>Multiplication: returns the product</td>
<td><span style="font-family:courier new,courier,monospace;">A * B</span> = 200</td>
</tr>
<tr class="even">
<td>/</td>
<td>Division: returns the quotient</td>
<td><span style="font-family:courier new,courier,monospace;">B / A</span> = 2</td>
</tr>
<tr class="odd">
<td>%</td>
<td>Modulus: returns the remainder after an integer division</td>
<td><span style="font-family:courier new,courier,monospace;">B % A</span> = 0<br />
(The remainder of 20 divided by 10 is 0)</td>
</tr>
</tbody>
</table>

  
 

  
  
  
  
  
  
  
  
  
 

 <span id="relational"></span>Relational Operators 
---------------------------------------------------

 

These operators compare two values and return either **TRUE** or
**FALSE.** The following comparison operators are supported by Survey
Solutions:  
 

<table>
<thead>
<tr class="header">
<th><strong>Operator</strong></th>
<th><strong>Description</strong></th>
<th><strong>Example</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>==</td>
<td>Checks if the two values are <em>equal</em>. If values are equal, then the condition is true</td>
<td><span style="font-family:courier new,courier,monospace;">20 == 10</span> returns <strong>FALSE</strong></td>
</tr>
<tr class="even">
<td>!=</td>
<td>Checks if the two values are <em>not equal</em>. If the values are not equal, then the condition is false</td>
<td><span style="font-family:courier new,courier,monospace;">20 != 10</span> returns <strong>TRUE</strong></td>
</tr>
<tr class="odd">
<td>&gt;</td>
<td>Checks if the left value is <em>greater than</em> the right value</td>
<td><span style="font-family:courier new,courier,monospace;">20 &gt; 10</span> returns <strong>TRUE</strong></td>
</tr>
<tr class="even">
<td>&lt;</td>
<td>Checks if the left value is <em>less than</em> the right value</td>
<td><span style="font-family:courier new,courier,monospace;">20 &lt; 10</span> returns <strong>FALSE</strong></td>
</tr>
<tr class="odd">
<td>&gt;=</td>
<td>Checks if the left value is <em>greater than or equal to</em> the right value</td>
<td><span style="font-family:courier new,courier,monospace;">20 &gt;= 10</span> returns <strong>TRUE</strong>.<br />
<span style="font-family:courier new,courier,monospace;">10 &gt;= 10</span> returns <strong>TRUE</strong>.</td>
</tr>
<tr class="even">
<td>&lt;=</td>
<td>Checks if the left value is <em>less than or equal to</em> the right value</td>
<td><span style="font-family:courier new,courier,monospace;">20 &lt;= 10</span> returns <strong>FALSE</strong>.<br />
<span style="font-family:courier new,courier,monospace;">10 &lt;= 10</span> returns <strong>TRUE</strong>.</td>
</tr>
</tbody>
</table>

  
 

  
  
  
  
  
  
  
  
   
  
 

  
  
 

 

 <span id="logical"></span>Logical Operators
--------------------------------------------

 

  
Logical values returns either **TRUE** or **FALSE**. The following
tables show the logical operators supported by Survey Solutions:   
  
 

<table>
<thead>
<tr class="header">
<th><strong>Operator</strong></th>
<th><strong>Description</strong></th>
<th><strong>Example</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>&amp;&amp;</td>
<td>Logical AND operator.<br />
A &amp;&amp; B returns true of <em>both</em> expression A and B are true.</td>
<td><span style="font-family:courier new,courier,monospace;">(20 == 10) &amp;&amp; (10 &gt; 5) </span>returns <strong>FALSE</strong><br />
<span style="font-family:courier new,courier,monospace;">(10 == 10) &amp;&amp; (10 &gt; 5)</span> returns <strong>TRUE</strong></td>
</tr>
<tr class="even">
<td>||</td>
<td>Logical OR operator<br />
A || B returns true if <em>either</em> expression A or expression B is true</td>
<td><span style="font-family:courier new,courier,monospace;">(20 == 10) || (10 &gt; 5)</span> returns <strong>TRUE</strong><br />
<span style="font-family:courier new,courier,monospace;">(20 == 10) || (10 &lt; 5)</span> returns <strong>FALSE</strong></td>
</tr>
<tr class="odd">
<td>!</td>
<td>Logical NOT operator<br />
!A returns true if expression A is false. It returns false if expression A is true.</td>
<td><span style="font-family:courier new,courier,monospace;">!(20 == 10)</span> returns <strong>TRUE</strong><br />
<span style="font-family:courier new,courier,monospace;">!(10 == 10)</span> returns <strong>FALSE</strong></td>
</tr>
</tbody>
</table>

  
 

  
  
  
  
  
  
  
  
   
  
  
 

 

 <span id="other"></span>Other Useful Operators
-----------------------------------------------

 

 

These are other operators that you might want to use in your Survey
Solutions instrument.  
  
 

<table>
<thead>
<tr class="header">
<th><strong>Operator</strong></th>
<th><strong>Description</strong></th>
<th><strong>Example</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>?:</td>
<td>Conditional Expression/ The condition must evaluate to true or false. If condition is true, the <em>first expression</em> is evaluated and becomes the result. If condition is false, the <em>second expression </em>is evaluated and becomes the result. Only one of the two expressions is evaluated.</td>
<td><span style="font-family:courier new,courier,monospace;">(10 &lt; 2)? a:b</span> will return b<br />
<span style="font-family:courier new,courier,monospace;">(10 &gt; 2)? a:b</span> will return a</td>
</tr>
</tbody>
</table>
