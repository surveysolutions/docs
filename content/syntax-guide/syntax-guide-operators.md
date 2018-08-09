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

Â 

<span id="arithmetic"></span>Arithmetic Operators
-------------------------------------------------

Â 

The following table shows the arithmetic operators supported by Survey
Solutions. Arithmetic expressions are evaluated from left to right. For
the example, ***assume A = 20 and B = 10***  
  
Â 

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
<td>Addition:Â returns the sum</td>
<td><span style="font-family:courier new,courier,monospace;">A + B</span> = 35</td>
</tr>
<tr class="even">
<td>-</td>
<td>Subtraction:Â returns the difference</td>
<td><span style="font-family:courier new,courier,monospace;">A - B</span> = 10</td>
</tr>
<tr class="odd">
<td>*</td>
<td>Multiplication:Â returns the product</td>
<td><span style="font-family:courier new,courier,monospace;">A * B</span> = 200</td>
</tr>
<tr class="even">
<td>/</td>
<td>Division:Â returns the quotient</td>
<td><span style="font-family:courier new,courier,monospace;">B / A</span> = 2</td>
</tr>
<tr class="odd">
<td>%</td>
<td>Modulus:Â returns the remainder after an integer division</td>
<td><span style="font-family:courier new,courier,monospace;">B % A</span> = 0<br />
(The remainder of 20 divided by 10 is 0)</td>
</tr>
</tbody>
</table>

  
Â 

  
  
  
  
  
  
  
  
  
Â 

 <span id="relational"></span>Relational OperatorsÂ 
---------------------------------------------------

Â 

These operators compare two values and return either **TRUE** or
**FALSE.** The following comparison operators are supported by Survey
Solutions:  
Â 

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

  
Â 

  
  
  
  
  
  
  
  
Â   
  
Â 

  
  
Â 

Â 

 <span id="logical"></span>Logical Operators
--------------------------------------------

Â 

  
Logical values returns either **TRUE** or **FALSE**. The following
tables show the logical operators supported by Survey Solutions:Â   
  
Â 

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
<td><span style="font-family:courier new,courier,monospace;">(20 == 10) &amp;&amp; (10 &gt; 5) </span>returnsÂ <strong>FALSE</strong><br />
<span style="font-family:courier new,courier,monospace;">(10 == 10) &amp;&amp; (10 &gt; 5)</span> returns <strong>TRUE</strong></td>
</tr>
<tr class="even">
<td>||</td>
<td>Logical OR operator<br />
A || B returns true ifÂ <em>either</em>Â expression A or expression B is true</td>
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

  
Â 

  
  
  
  
  
  
  
  
Â   
  
  
Â 

Â 

 <span id="other"></span>Other Useful Operators
-----------------------------------------------

Â 

Â 

These are other operators that you might want to use in your Survey
Solutions instrument.  
  
Â 

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
<td>Conditional Expression/ The condition must evaluate to true orÂ false.Â If condition is true, the <em>first expression</em> is evaluated andÂ becomes the result. If condition is false, the <em>second expressionÂ </em>is evaluated and becomes the result. Only one of the twoÂ expressions is evaluated.</td>
<td><span style="font-family:courier new,courier,monospace;">(10 &lt; 2)? a:b</span> will return b<br />
<span style="font-family:courier new,courier,monospace;">(10 &gt; 2)? a:b</span> will return a</td>
</tr>
</tbody>
</table>
