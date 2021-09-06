+++
title = "Migrating questionnaires from ODK and compatible systems"
keywords = ["ODK","KoboToolbox","SurveyCTO","Survey123"]
date = 2021-08-29T01:01:01Z
lastmod = 2021-08-29T01:01:01Z
+++


To simplify migration from *Open Data Kit (ODK)* or compatible systems (*Survey123*, *SurveyCTO*, *KoBoToolBox*, etc) we present the possible/recommended alternatives in Survey Solutions for:

- [question types](#question-types),
- [operators](#operators), and
- [functions](#functions).

Individual system implementation of these features may vary. [Online documentation for ODK](https://docs.getodk.org/) was used as a reference when compiling the list of alternatives (accessed August 2021). For specifics of function implementation in different systems, refer to their respective documentation pages, e.g. for [Survey123](https://doc.arcgis.com/en/survey123/desktop/create-surveys/xlsformformulas.htm), for [SurveyCTO](https://docs.surveycto.com/02-designing-forms/01-core-concepts/09.expressions.html), etc.

Where we leave a note *"#no alternative"*, this is to be interpreted that there is no 1:1 mapping of an ODK feature to a corresponding Survey Solutions feature, and no obvious workaround. Yet this is usually not a dead end, and a workaround may be formulated for a particular situation.

Please note the basic correspondence between the questionnaire elements:

<TABLE class="table table-striped table-hover">
<THEAD>
  <TR class="header">
    <TH width=50%>ODK, SurveyCTO, Survey123, KoBoToolBox</TH>
    <TH width=50%>Survey Solutions</TH>
  </TR>
</THEAD>

<TR>
  <TD>Group
  <TD>Section or sub-section
</TR>

<TR>
  <TD>Repeated group
  <TD>Roster
</TR>

<TR>
  <TD>Question
  <TD>Question
</TR>

<TR>
  <TD>Calculate
  <TD>Variable
</TR>

<TR>
  <TD>Note
  <TD>Static text
</TR>

<TR>
  <TD>Relevance
  <TD>Enabling condition
</TR>

<TR>
  <TD>Constraint
  <TD>Validation
</TR>

</TABLE>

### Question types

The following table follows the [list of question types](https://docs.getodk.org/form-question-types/) present in ODK and compatible systems (SurveyCTO, Survey123, KoBoToolBox, etc) and shows a possible equivalent or alternative in Survey Solutions.

<TABLE class="table table-striped table-hover">
<THEAD>
  <TR class="header">
    <TH>ODK, SurveyCTO, Survey123, KoBoToolBox</TH>
    <TH>Survey Solutions</TH>
  </TR>
</THEAD>

<TR>
  <TD>Text widget
  <TD>Text question
</TR>

<TR>
  <TD>Number widget
  <TD>Numeric question
</TR>

<TR>
  <TD>Date and time widget
  <TD>Date question. <BR>
  For time use a formatted string question, with a pattern such as "##:##"
</TR>

<TR>
  <TD>Select widget
  <TD>Single-select question, multi-select question<BR>
  Select questions have several presentation alternatives in XForms and likewise in Survey Solutions. Selection from an external file is not supported in Survey Solutions - all possible alternatives must be part of the questionnaire.
</TR>

<TR>
  <TD>Rank widget
  <TD>Multi-select question
</TR>

<TR>
  <TD>Location widget
  <TD>GPS location question
</TR>
<TR>
  <TD>Image widget
  <TD>Image question
</TR>
<TR>
  <TD>Audio widget
  <TD>Audio question
</TR>
<TR>
  <TD>File upload widget
  <TD>#no alternative.<BR>
  Existing images may be uploaded as files using an image question.
</TR>
<TR>
  <TD>Barcode widget
  <TD>Barcode question
</TR>

<TR>
  <TD>Range widget
  <TD>Single-select or numeric questions
</TR>

<TR>
  <TD>Note widget
  <TD>Static text
</TR>


<TR>
  <TD>URL widget
  <TD>Static text<BR>
  Read more about <A href="https://docs.mysurvey.solutions/questionnaire-designer/components/questionnaire-hyperlinks/">hyperlinks</A>
</TR>

<TR>
  <TD>Printer widget
  <TD>#no equivalent
</TR>

<TR>
  <TD>Trigger/acknowledge widget
  <TD>Categorical single-select question with condition on the remaining part of the questionnaire.
</TR>

<TR>
  <TD>signature widget
  <TD>Image question with signature flag.
</TR>

<TR>
  <TD>Grouping multiple widgets on the same screen
  <TD>Questions can be placed in the same section/sub-section, to appear on the same screen, or placed in different sections/sub-sections to appear on the different screens.
</TR>

<TR>
  <TD>Grid of selects on the same screen
  <TD>See <A href="https://docs.mysurvey.solutions/release-notes/version-20-01/">matrix presentation of categorical questions</A> (CAWI only).
</TR>

<TR>
  <TD>Hidden questions
  <TD>Questions of most types can be marked as hidden. See, <A href="https://docs.mysurvey.solutions/questionnaire-designer/limits/design-limitations-by-question-type/">Designer limitations by question type</A>
</TR>
</TABLE>

### Operators

The following table follows the [list of operators](https://docs.getodk.org/form-operators-functions/#operators) present in ODK and compatible systems (SurveyCTO, Survey123, KoBoToolBox, etc) and shows a possible equivalent or alternative in Survey Solutions.

<TABLE class="table table-striped table-hover">
<THEAD>
  <TR class="header">
    <TH>ODK, SurveyCTO, Survey123, KoBoToolBox</TH>
    <TH>Survey Solutions</TH>
  </TR>
</THEAD>

<TR>
<TD colspan=2 bgcolor="Orange">▶ <I><B>Math operators</B></I><BR><BR>
<TR>
  <TD><TT>+</TT> (addition)
  <TD><TT>+</TT> (addition)
</TR>

<TR>
  <TD><TT>-</TT> (subtraction)
  <TD><TT>-</TT> (subtraction)
</TR>

<TR>
  <TD><TT>*</TT> (mutliplication)
  <TD><TT>*</TT> (multiplication)
</TR>

<TR>
  <TD><TT>div</TT> (division)
  <TD><TT>/</TT> (division)
</TR>

<TR>
  <TD><TT>mod</TT> (modulo (division remainder))
  <TD><TT>%</TT> (modulo (division remainder))
</TR>


<TR>
<TD colspan=2 bgcolor="Orange">▶ <I><B>Comparison operators</B></I><BR><BR>Note that relational operators in C# used in Survey Solutions can also be used to compare strings.

<TR>
  <TD><TT>=</TT> (equal to)
  <TD><TT>==</TT> (equal to)
</TR>

<TR>
  <TD><TT>!=</TT> (not equal to)
  <TD><TT>!=</TT> (not equal to)
</TR>

<TR>
  <TD><TT>&gt;</TT> (greater than)
  <TD><TT>&gt;</TT> (greater than)
</TR>

<TR>
  <TD><TT>&gt;=</TT> (greater than or equal)
  <TD><TT>&gt;=</TT> (greater than or equal)
</TR>

<TR>
  <TD><TT>&lt;</TT> (less than)
  <TD><TT>&lt;</TT> (less than)
</TR>

<TR>
  <TD><TT>&lt;=</TT> (less than or equal)
  <TD><TT>&lt;=</TT> (less than or equal)
</TR>

<TR>
  <TD colspan=2 bgcolor="Orange">▶ <I><B>Boolean operators</B></I></TD>
</TR>

<TR>
  <TD><TT>and</TT>
  <TD><TT>&amp;&amp;</TT>
</TR>
<TR>
  <TD><TT>or</TT>
  <TD><TT>||</TT>
</TR>
<TR></TR>
<TR>
<TD colspan=2 bgcolor="Orange">▶ <I><B>Path operators</B></I></TD>

<TR>
  <TD><TT>.</TT>
  <TD><TT>self</TT>
</TR>
<TR>
  <TD><TT>..</TT>
  <TD>#no direct equivalent. Use @rowcode or @rowindex depending on the context. For example: <TT>MEMBERS[2].@rowcode</TT> is identical to <TT>2</TT> (if such a member was included in the roster <B><I>MEMBERS</I></B>)
</TR>
</TABLE>

### Functions

The following table follows the [list of functions](https://docs.getodk.org/form-operators-functions/#functions) present in ODK and compatible systems (SurveyCTO, Survey123, KoBoToolBox, etc) and shows a possible equivalent or alternative in Survey Solutions.

Some functions have several possible alternatives, and the exact choice may depend on the context.

<TABLE class="table table-striped table-hover">

<THEAD>
  <TR class="header">
    <TH>ODK, SurveyCTO, Survey123, KoBoToolBox</TH>
    <TH>Survey Solutions</TH>
  </TR>
</THEAD>
<TR>
<TD colspan=2 bgcolor="Orange">▶ <I><B>Control Flow</B></I>
<TR>

<TR>
  <TD><TT>if(expression, then, else)</TT>
  <TD><TT>expression ? then : else</TT>
</TR>
<TR>
  <TD><TT>position(xpath)</TT>
  <TD><TT>@rowindex</TT> - returns the position of the current roster item in its parent roster. It can also be used with non-current objects: <TT>MEMBERS[fatherid].@rowindex </TT>  returns the index of the row of the person with the code equal to <B><I>fatherid</I></B> in the roster <B><I>ROSTER</I></B>.

</TR>
<TR>
  <TD><TT>once(expression)</TT>
  <TD>#no equivalent.<BR>An expression in Survey Solutions may not be calculated only once, instead the system must be able to recalculate any expression on demand.
</TR>
<TR>
  <TD><TT></TT>
  <TD><TT></TT>
</TR>


<TR>
<TD colspan=2 bgcolor="Orange">▶ <I><B>Accessing response values</B></I>
<TR>
<TD colspan=2>▸▸ <I>Select questions</I>
<TR>
<TD><TT>selected(space_delimited_array, string)</TT>
<TD><TT>space_delimited_array.split().Contains(string)</TT> - literally;<BR>
    <TT>Q.Contains(c)</TT> - for checking whether a code <B><I>c</I></B> is selected in multiple-select question <B><I>Q</I></B> (since the answerto multiple-select questions in Survey Solutions is an array of selected codes).
</TR>
<TR>
<TD><TT>selected-at(space_delimited_array, n)</TT>
<TD><TT>space_delimited_array.split()[n]</TT> - literally;<BR>
<TT>Q[n]==c</TT> - for checking whether a code <B><I>c</I></B> is selected as choice <B><i>n</i></B> in multiple-select question <B><I>Q</I></B> (since the answerto multiple-select questions in Survey Solutions is an array of selected codes).
</TR>
<TR>
<TD>count-selected(multi_select_question)<TT></TT>
<TD><TT>multi_select_question.Length</TT>
</TR>
<TR>
<TD><TT>jr:choice-name(choice_name, 'select_question')</TT>
<TD><TT>#no equivalent.<BR>Access to localized strings in syntax has been intentionally disabled.</TT>
</TR>


<TR>
<TD colspan=2>▸▸ <I>Repeat groups</I>
<TR>
<TD><TT></TT>
<TD><TT></TT>
</TR>

<TR>
<TD><TT>indexed-repeat(name, group, i[, sub_grp, sub_i[, sub_sub_grp, sub_sub_i]])</TT>
<TD><TT>group[i].name</TT>
</TR>
<TR>
<TD><TT>count(nodeset)</TT>
<TD><TT>nodeset.Count()</TT>
</TR>
<TR>
<TD><TT>count-non-empty(nodeset)</TT>
<TD><TT>ROSTER.Count(x=>IsAnswered(x.q))</TT> - the Survey Solutions equivalent counts the number of answered questions <B><I>q</I></B> in the roster <B><I>ROSTER</I></B>.
</TR>
<TR>
<TD><TT>sum(nodeset)</TT>
<TD><TT>ROSTER.Sum(x=>x.q)</TT> - the Survey Solutions equivalent sums the values of answers to questions <B><I>q</I></B> in the roster <B><I>ROSTER</I></B>. Empty values (unanswered questions) do not affect the calculation of the sum (are ignored).
</TR>
<TR>
<TD><TT>max(nodeset)</TT>
<TD><TT>ROSTER.Max(x=>x.q)</TT>- the Survey Solutions equivalent returns the maximum of values of answers to questions <B><I>q</I></B> in the roster <B><I>ROSTER</I></B>. Empty values (unanswered questions) are ignored.
</TR>
<TR>
<TD><TT>min(nodeset)</TT>
<TD><TT>ROSTER.Min(x=>x.q)</TT>- the Survey Solutions equivalent returns the minimum of values of answers to questions <B><I>q</I></B> in the roster <B><I>ROSTER</I></B>. Empty values (unanswered questions) are ignored.
</TR>

<TR>
  <TD colspan=2 bgcolor="Orange">▶ <I><B>Strings</B></I></TD>
</TR>
<TR>
  <TD colspan=2>▸▸ <I>Searching and matching strings</I></TD>
</TR>

<TR>
<TD><TT>regex(string, expression)</TT>
<TD><TT>new System.Text.RegularExpressions.Regex(expression).Match(string)</TT> - note that the regular expression in Survey Solutions will not be the same as in ODK-based systems and needs to be transformed. Example: find the first 4-digit number in the string <B><I>s</I></B>:
<TT>new System.Text.RegularExpressions.Regex(@"\b\d{4}\b").Match(s).ToString()</TT>
For the value of s="19 April 1980 - 16 November 2021" returns "1980".
</TR>
<TR>
<TD><TT>contains(string, substring)</TT>
<TD><TT>string.Contains(substring)</TT>
</TR><TR>
<TD><TT>starts-with(string, substring)</TT>
<TD><TT>string.StartsWith(substring)</TT>
</TR><TR>
<TD><TT>ends-with(string, substring)</TT>
<TD><TT>string.EndsWith(substring)</TT>
</TR><TR>
<TD><TT>substr(string, start[, end])</TT>
<TD><TT>string.Substring(start, length)</TT> Note: (length=end-start+1)
</TR><TR>
<TD><TT>substring-before(string, target)</TT>
<TD><TT>string.Contains(target) ? string.Substring(0, IndexOf(target)) : String.Empty</TT>
</TR><TR>
<TD><TT>substring-after(string, target)</TT>
<TD><TT>string.Contains(target) ? string.Substring(IndexOf(target)+target.Length) : String.Empty</TT>
</TR><TR>
<TD><TT>translate(string, fromchars, tochars)</TT>
<TD><TT>string.Replace(fromchars,tochars)</TT>
</TR><TR>
<TD><TT>string-length(string)</TT>
<TD><TT>string.Length</TT>
</TR><TR>
<TD><TT>normalize-space(string)</TT>
<TD><TT>string.StrTrim()</TT>


<TR>
  <TD colspan=2>▸▸ <I>Combining strings</I></TD>
</TR>

</TR><TR>
<TD><TT>concat(arg [, arg1 [, arg2 [, argk [...]]]])</TT>
<TD><TT>String.Concat(arg1,arg2,...,argk)</TT>
</TR>

</TR><TR>
<TD><TT>join(separator, nodeset)</TT>
<TD><TT>String.Join(separator,ROSTER.Select(x=>x.q))</TT> - concatenates answers to question <B><I>q</I></B> of roster <B><I>ROSTER</I></B>.
</TR>

<TR>
  <TD colspan=2>▸▸ <I>Converting to and from strings</I></TD>
</TR>

</TR><TR>
<TD><TT>boolean-from-string(string)</TT>
<TD><TT>string.InList("true","1")</TT>
</TR>

</TR><TR>
<TD><TT>string(arg)</TT>
<TD><TT>arg.ToString()</TT> - objects of some types may require specification of a format or may use a default format that depends on the system.
</TR>

<TR bgcolor="Orange">
<TD colspan=2>▶ <I><B>Mathematics</B></I>
<TR>
<TD colspan=2>▸▸ <I>Number handling</I>
<TR>
<TD><TT>round(number, places)</TT>
<TD><TT>Math.Round(number, places)</TT>
<TR>
<TD><TT>int(number)</TT>
<TD><TT>(int)(Math.Truncate(number)</TT>
<TR>
<TD><TT>number(arg)</TT>
<TD><TT>Double.Parse(arg)</TT> for decimals,<BR> <TT>(arg==true)?1:0</TT> for Boolean values
<TR>
<TD><TT>digest()</TT>
<TD>#no equivalent<BR>Formally digest algorithms are implemented in <TT>System.Security.Cryptography</TT>, such as <TT>System.Security.Cryptography.MD5()</TT>, but access to these classes has been disabled for security reasons.
<TR>
  <TD colspan=2>▸▸ <I>Calculation</I>
<TR>
  <TD><TT>pow(number, power)
  <TD><TT>Math.Pow(number, power)
<TR>
  <TD><TT>log(number)
  <TD><TT>Math.Log(number)
<TR>
  <TD><TT>log10(number)
  <TD><TT>Math.Log10(number)
<TR>
  <TD><TT>abs(number)
  <TD><TT>Math.Abs(number)
<TR>
  <TD><TT>sin(number)
  <TD><TT>Math.Sin(number)
<TR>
  <TD><TT>cos(number)
  <TD><TT>Math.Cos(number)
<TR>
  <TD><TT>tan(number)
  <TD><TT>Math.Tan(number)
<TR>
  <TD><TT>asin(number)
  <TD><TT>Math.Asin(number)
<TR>
  <TD><TT>acos(number)
  <TD><TT>Math.Acos(number)
<TR>
  <TD><TT>atan(number)
  <TD><TT>Math.Atan(number)
<TR>
  <TD><TT>atan2(number)
  <TD><TT>Math.Atan2(number)
<TR>
  <TD><TT>sqrt(number)
  <TD><TT>Math.Sqrt(number)
<TR>
  <TD><TT>exp(x)
  <TD><TT>Math.Exp(x)
<TR>
  <TD><TT>exp10(x)
  <TD><TT>Math.Pow(10,x)
<TR>
  <TD><TT>pi()
  <TD><TT>Math.PI

<TR bgcolor="Orange">
  <TD colspan=2>▶ <I>Date and time</I>

<TR>
  <TD><TT>today()</TT>
  <TD>#no equivalent.<BR>Access to <TT>DateTime.Now()</TT> has been disabled to avoid logical mistakes.
<TR>
  <TD><TT>now()</TT>
  <TD>#no equivalent.<BR>Access to <TT>DateTime.Now()</TT> has been disabled to avoid logical mistakes. Use a current timestamp question at the beginning of the interview. Refer to that date/time when you need the reference time.


<TR>
  <TD colspan=2>▸▸ <I>Converting dates and times</I>

<TR>
  <TD><TT>decimal-date-time(dt)</TT>
  <TD><TT>dt.Subtract(DateTime.Parse("01-Jan-1970")).Days</TT>
<TR>
  <TD><TT>date(days)</TT>
  <TD><TT>new DateTime(1970, 1, 1, 0, 0, 0, 0).AddDays(days).Date</TT>
<TR>
  <TD><TT>decimal-time(t)</TT>
  <TD>Survey Solutions doesn't have a separate time class. If you separately have HOUR, MIN, SEC of the value oft, then <TT>decimal-time(time)</TT> is <TT>new TimeSpan(HOUR,MIN,SEC) / (24*60*60)</TT> .

<TR>
  <TD colspan=2>▸▸ <I>Formatting dates and times for display</I>

<TR>
  <TD><BR><TT>format-date(date, format)</TT>, <TT>format-date-time(dateTime, format)</TT>
  <TD>refer to
<A href="https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-date-and-time-format-strings">Standard date and time format strings</A>
  and <A href=https://docs.microsoft.com/en-us/dotnet/standard/base-types/custom-date-and-time-format-strings>Custom date and time format strings</A>.

  Example: <TT>new DateTime(1970, 4, 19, 13, 45, 06, 200).ToString("dd MMM HH:mm:ss")</TT> produces <TT>19 Apr 13:45:06</TT>

<TR>
  <TD colspan=2  bgcolor="Orange">▶ <I>Geography</I>

<TR>
  <TD><TT>area(nodeset | geoshape)</TT>
  <TD>#no equivalent.

<TR>
  <TD><TT>distance(nodeset | geoshape | geotrace)</TT>
  <TD>#no equivalent.<BR>For distance between two specific locations A and B use Survey Solutions function <TT>A.GpsDistance(B)</TT> or <TT>A.GpsDistanceKm(B)</TT>.


<TR>
  <TD colspan=2 bgcolor="Orange">▶ <I>Utility</I>

<TR>
  <TD><TT>random()</TT>
  <TD><TT>Quest.IRnd()</TT> - returns a single random number, <BR><TT>new Random()</TT> - create a new <A href="https://docs.microsoft.com/en-us/dotnet/api/system.random?view=net-5.0">random number generator</A> object.
<TR>
  <TD><TT>randomize()</TT>
  <TD>#no equivalent.<BR>For randomization refer to <A href="https://designer.mysurvey.solutions/questionnaire/public/7401fee9e99e4ff18a6928c4926f3986">examples in the public questionnaires</A>.
<TR>
  <TD><TT>uuid([length])</TT>
  <TD><TT>Guid.NewGuid().ToString("D")</TT><BR>
      #no alternative to generating a UUID of a specified length. <A href="https://forum.getodk.org/t/generate-identifier-of-specific-length-to-link-forms/20700">useful link</A>.
<TR>
  <TD><TT>boolean(arg)</TT>
  <TD><TT>(arg!=0)</TT> for numbers; <BR>
      <TT>(arg!="")</TT> for strings (see also function <B><I>IsNullOrEmpty()</I></B>);
      etc for other types.
<TR>
  <TD><TT>not(arg)</TT>
  <TD><TT>!arg</TT>

<TR>
  <TD><TT>coalesce(arg1, arg2)</TT>
  <TD><TT>arg1??arg2</TT>
<TR>
  <TD><TT>checklist(min, max, response1[, response2[, responsek[, ...]]])</TT>
  <TD><TT>new []{response1,response2,...,responsek}.Count(x=>x>min && x<=max)</TT>
<TR>
  <TD><TT>weighted-checklist(min, max, reponse, weight[, response, weight[, response, weight[, response, weight[, ... ]]])</TT><BR> (<A href="https://docs.getodk.org/form-operators-functions/#weighted-checklist">description</A>)
  <TD><TT>ROSTER.Where(x=>x.response=="yes").Sum(x=>x.weight).InRange(min,max)</TT>
</TR>
</TABLE>

If you notice any incorrect mapping in this table, feel free to raise the issue in the users' forum.
