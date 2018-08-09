+++
title = "Data types"
keywords = ["data types","syntax","object model"]
date = 2016-08-09T21:16:08Z
lastmod = 2016-08-09T21:16:08Z
aliases = ["/customer/portal/articles/2531232-data-types","/customer/en/portal/articles/2531232-data-types","/customer/portal/articles/2531232","/customer/en/portal/articles/2531232"]

+++

Survey Solutions uses [C\#
language](https://en.wikipedia.org/wiki/C_Sharp_(programming_language))
for enabling and validation conditions. C\# is a contemporary general
purpose object-oriented programming language, widely documented. When
writing expressions in C\# language, and especially when using standard
C\# and custom Survey Solutions functions it is important to keep in
mind the definitions of the various Survey Solutions objects.  
  
Below the types of Survey Solutions objects are explained in terms of
standard C\# classes and types. Links are provided to the corresponding
definitions on Microsoft's site.  
  
Note that in the definitions below a question mark indicates a [nullable
type](https://msdn.microsoft.com/en-us/library/system.nullable(v=vs.110).aspx).  
  
Â 

Questions
---------

Â 

<table>
<thead>
<tr class="header">
<th><strong>Question</strong></th>
<th><strong>Type</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Categorical: Single-select</td>
<td><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/int">int</a>?</td>
</tr>
<tr class="even">
<td>Categorical: Single-select (linked)</td>
<td><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/int">int</a>[]</td>
</tr>
<tr class="odd">
<td>Categorical: Single-select (linked to text-list question)</td>
<td><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/int">int</a>?</td>
</tr>
<tr class="even">
<td>Categorical: Single-select (combo)</td>
<td><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/int">int</a>?</td>
</tr>
<tr class="odd">
<td>Categorical: Single-select (cascade)</td>
<td><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/int">int</a>?</td>
</tr>
<tr class="even">
<td>Categorical: multi-select</td>
<td><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/int">int</a>[]</td>
</tr>
<tr class="odd">
<td>Categorical: multi-select (Y/N mode)</td>
<td>class {<br />
Â Â <a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/int">int</a>[] All;<br />
Â Â <a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/int">int</a>[] Yes;<br />
Â  <a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/int">int</a>[] No;<br />
Â Â <a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/int">int</a>[] Missing;<br />
}</td>
</tr>
<tr class="even">
<td>Categorical: multi-select (linked)</td>
<td><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/int">int</a>[][]</td>
</tr>
<tr class="odd">
<td>Categorical: multi-select (linked to text-list question)</td>
<td><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/int">int</a>[]</td>
</tr>
<tr class="even">
<td>Numeric</td>
<td><a href="https://msdn.microsoft.com/en-us/library/678hzkk9.aspx">double</a>?</td>
</tr>
<tr class="odd">
<td>Numeric (integer)</td>
<td><a href="https://msdn.microsoft.com/en-us/library/ctetwysk.aspx">long</a>?</td>
</tr>
<tr class="even">
<td>Date</td>
<td><a href="https://msdn.microsoft.com/en-us/library/system.datetime(v=vs.110).aspx">DateTime</a>?</td>
</tr>
<tr class="odd">
<td>Date (current time)</td>
<td><a href="https://msdn.microsoft.com/en-us/library/system.datetime(v=vs.110).aspx">DateTime</a>?</td>
</tr>
<tr class="even">
<td>Text</td>
<td><a href="https://msdn.microsoft.com/en-us/library/362314fe.aspx">string</a></td>
</tr>
<tr class="odd">
<td>Text (with pattern)</td>
<td><a href="https://msdn.microsoft.com/en-us/library/362314fe.aspx">string</a></td>
</tr>
<tr class="even">
<td>Barcode</td>
<td><a href="https://msdn.microsoft.com/en-us/library/362314fe.aspx">string</a></td>
</tr>
<tr class="odd">
<td>Picture</td>
<td><a href="https://msdn.microsoft.com/en-us/library/362314fe.aspx">string</a></td>
</tr>
<tr class="even">
<td>List</td>
<td><a href="https://msdn.microsoft.com/en-us/library/system.array(v=vs.110).aspx">Array of class</a>{<a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/int">int</a>Â Value;Â <a href="https://msdn.microsoft.com/en-us/library/362314fe.aspx">string</a>Â Text;}</td>
</tr>
<tr class="odd">
<td>GPS</td>
<td>class {<br />
Â Â <a href="https://msdn.microsoft.com/en-us/library/678hzkk9.aspx">double</a>Latitude;<br />
Â Â <a href="https://msdn.microsoft.com/en-us/library/678hzkk9.aspx">double</a>Longitude;<br />
Â Â <a href="https://msdn.microsoft.com/en-us/library/678hzkk9.aspx">double</a>Accuracy;<br />
Â Â <a href="https://msdn.microsoft.com/en-us/library/678hzkk9.aspx">double</a>Altitude;<br />
}</td>
</tr>
<tr class="even">
<td>Geography</td>
<td>class {<br />
Â  <a href="http://msdn.microsoft.com/en-us/library/678hzkk9.aspx">double</a> Area;<br />
Â  <a href="http://msdn.microsoft.com/en-us/library/678hzkk9.aspx">double</a>Â Length;<br />
Â  <a href="http://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/int">int</a> PointsCount;<br />
}</td>
</tr>
<tr class="odd">
<td>Audio</td>
<td>class {<br />
Â  <a href="https://msdn.microsoft.com/en-us/library/362314fe.aspx">string</a> FileName;<br />
Â  <a href="https://msdn.microsoft.com/en-us/library/system.timespan(v=vs.110).aspx">TimeSpan</a> Length;<br />
}</td>
</tr>
</tbody>
</table>

  
***Notes***:

-   The value of the categorical multi-select question can be null, or
    an array of length zero.
-   The string content of the picture question is the name of the file,
    not the content of the image.
-   The value of the categorical multi-select linked question is defined
    as a [jagged
    array](https://msdn.microsoft.com/en-us/library/2s05feca.aspx)
    although in practice it is always a regular-sized array.

  
  
Â 

System variables
----------------

Â 

<table>
<thead>
<tr class="header">
<th><strong>Variable</strong></th>
<th><strong>Type</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>@rowcode</td>
<td><a href="https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/int">int</a></td>
</tr>
<tr class="even">
<td>@rowindex</td>
<td><a href="https://msdn.microsoft.com/en-us/library/5kzh1b5w.aspx">int</a></td>
</tr>
<tr class="odd">
<td>@rowname</td>
<td><a href="https://msdn.microsoft.com/en-us/library/362314fe.aspx">string</a></td>
</tr>
<tr class="even">
<td>@optioncode</td>
<td><a href="https://msdn.microsoft.com/en-us/library/5kzh1b5w.aspx">int</a></td>
</tr>
<tr class="odd">
<td><del>@roster</del><br />
â€‹<strong>[obsolete, refer to a roster by ID instead]</strong></td>
<td><a href="https://msdn.microsoft.com/en-us/library/system.collections.ienumerable(v=vs.110).aspx">IEnumerable</a>&lt;class&gt;, class[]</td>
</tr>
<tr class="even">
<td>@current</td>
<td>class</td>
</tr>
</tbody>
</table>

  
***Notes***

-   In definition of @current *object* is a dynamically compiled class
    definition with all the fields defined as for an instance of the
    roster.
-   Correspondingly any roster is an
    [IEnumerable](https://msdn.microsoft.com/en-us/library/system.collections.ienumerable(v=vs.110).aspx)enumeration
    of objects of this class, also supports addressing by index as an
    [array](https://msdn.microsoft.com/en-us/library/0a7fscd0.aspx).

  
  
Â 

User-defined variables
----------------------

Â 

<table>
<thead>
<tr class="header">
<th><strong>Variable (selected type)</strong></th>
<th><strong>Actual type (in expressions)</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Boolean</td>
<td><a href="https://msdn.microsoft.com/en-us/library/c8f5xwh7.aspx">bool</a>?</td>
</tr>
<tr class="even">
<td>Double</td>
<td><a href="http://msdn.microsoft.com/en-us/library/678hzkk9.aspx">double</a>?</td>
</tr>
<tr class="odd">
<td>Date/Time</td>
<td><a href="http://msdn.microsoft.com/en-us/library/system.datetime(v=vs.110).aspx">DateTime</a>?</td>
</tr>
<tr class="even">
<td>Long integer</td>
<td><a href="https://msdn.microsoft.com/en-us/library/ctetwysk.aspx">long</a>?</td>
</tr>
<tr class="odd">
<td>String</td>
<td><a href="http://msdn.microsoft.com/en-us/library/362314fe.aspx">string</a></td>
</tr>
</tbody>
</table>

  
  
Â 

Lookup tables
-------------

  
Lookup tables are defined as dictionaries:  
<span
style="font-family:courier new,courier,monospace;">Dictionary&lt;[int](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/int),
*class*&gt;</span>  
where *class* is a dynamically compiled definition containing rowcode
and all the fields present in a lookup table:  
<span style="font-family:courier new,courier,monospace;">class {  
Â Â [int](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/int)
rowcode;  
Â Â [double](https://msdn.microsoft.com/en-us/library/678hzkk9.aspx)?
field1;  
Â Â [double](https://msdn.microsoft.com/en-us/library/678hzkk9.aspx)?
field2;  
Â Â ....  
}</span>  
  
These definitions have last been updated for version 5.25 on Feb 07,
2018.
