+++
title = "Syntax overview"
keywords = ["syntax", "expressions", "logic", "control"]
date = 2026-04-02T06:00:00Z
lastmod = 2026-04-20T00:00:00Z
+++

The behavior of a questionnaire in Survey Solutions is controlled by the author by specifying conditions that determine the flow of questions, available options, acceptable answers, and other elements.

The synchronization of data between devices, aggregation of data on the server, export and many other standard survey actions do not require the use of the syntax or programming by the user at all as they are available out-of-the-box.


<TABLE class="table table-hover">
<TR bgcolor="Orange">
  <TH>Condition type</TH>
  <TH> Purpose</TH>
  <TH> Effect</TH>
</TR>

<TR>
  <TH>Enabling condition</TH>
  <TD>To designate which questions are to be asked and which ones to be skipped.</TD>
  <TD> Applicable to questions, rosters, sections, sub-sections, and static text. <BR><BR>If this logical expression evaluates to <TT><B>true</B></TT> (or no expression is specified) the corresponding item is enabled. If the expression evaluates to <TT><B>false</B></TT> the corresponding item is disabled. If an exception* occurs during the evaluation of the expression the behavior is same as if the result was <TT><B>false</B></TT>.<BR><BR>Note that enabling/disabling is hierarchical: a question may be disabled even if its enabling condition evaluates to <TT><B>true</B></TT> if it is part of a section or sub-section which is disabled due to its own enabling condition.</TD>
</TR>

<TR>
  <TH>Validation condition</TH>
  <TD>To indicate an error or a warning</TD>
  <TD>Part of validation rules that are applicable to questions and static text.<BR><BR>If the logical expression evaluates to <TT><B>true</B></TT> or is not specified at all, the answer is considered acceptable and no message is shown. If the result of the expression evaluation is <TT><B>false</B></TT> or an exception* occurs during this expression evaluation, the corresponding error message is shown to the user (which can be an error or a <A href="/questionnaire-designer/questions/validation-warnings/">warning</A>).</TD>
</TR>

<TR>
  <TH>Filtering condition</TH>
  <TD>To shortlist the options offered in categorical selection questions</TD>
  <TD>Applicable to categorical selection questions (single and multiple selection).<BR><BR>The logical expression is evaluated for every option of the categorical question and only the options where it results in the value <TT><B>true</B></TT> are available for selection in this question. Options where it evaluates to <TT><B>false</B></TT> or an exception* occurs during evaluation are not available for selection and are not shown to the user in the interface.<BR><BR>When formulating a filtering condition refer to the code of the option currently under consideration as <TT><B>@optioncode</B></TT>. When the filtering condition is being written for a linked categorical question referring to a selection of a roster instance, the attributes from that roster are immediately available. </TD>
</TR>

<TR>
  <TH>Critical condition</TH>
  <TD>To determine whether the interview can be submitted or not</TD>
  <TD>Part of <A href="/questionnaire-designer/techniques/critical-rules-and-questions/#critical-rules">critical rules</A> that are prescribed to the questionnaire as a whole.<BR><BR>If the logical expression evaluates to <TT><B>true</B></TT> the rule will be considered satisfied, if it evaluates to <TT><B>false</B></TT> or an exception* occurs during the evaluation of this expression, the rule is not satisfied. Subsequent treatment of the interview with unsatisfied rules is determined by the decision of the headquarters user (often: <B>block</B>). <BR><BR>The user importing the questionnaire may opt to disregard these conditions for a particular survey.</TD>
</TR>

<TR>
  <TH>Calculation</TH>
  <TD>To calculate a result that can be displayed to the user or utilized in other conditions</TD>
  <TD>Used in calculated <A href="/questionnaire-designer/components/variables/">variables</A>.<BR><BR>If the result can be calculated, it is stored in the variable, otherwise the variable stores the value <TT><B>null</B></TT> and is equivalent to a non-answered question.<BR><BR>Calculated results are not shown to the interviewer, unless <A href="/questionnaire-designer/techniques/text-substitution/">text substitution</A> is employed to reveal them as part of a static text, question text, error message or another element.<BR><BR>The interviewer or respondent cannot override the result of a calculated variable; its value always follows the formula defined in the Designer.</TD>
</TR>

</TABLE>

\*) An **exception** is a critical error that prevents the processor to calculate the result of the expression, for example, when division by zero is encountered as a step in the overall calculation. In Survey Solutions the exceptions are treated as false in logical expressions and as null in calculations.

All of these expressions are written in [C# programming language](https://en.wikipedia.org/wiki/C_Sharp_(programming_language)) and are logical (also known as [Boolean](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool), they must evaluate to `true` or `false`) except the expressions for [calculated variables](/questionnaire-designer/components/variables/), which could be of different types.

#### When are the expressions evaluated?

The expressions are evaluated automatically whenever their dependencies change. For example, if question `B` depends on the answer to question `A`, then the enabling condition for `B` is re-evaluated when the answer to `A` is given, removed, or changed.

Validation expressions are evaluated when the answer to the question is given or changed. Validation conditions are not evaluated when the question doesn't have an answer. Validation expressions for static texts are always reevaluated when the dependencies change.

Filtering expressions are evaluated before displaying the options of a categorical question, and re‑evaluated whenever their dependencies change. Note that if the filter eliminates the currently selected option, the question may become unanswered.

The expressions specified in critical conditions are evaluated when the interview submission screen is reached.

Calculation expressions are evaluated whenever any of their inputs change (questions or other calculated variables that are mentioned in the expression). The software automatically tracks dependency tree to determine what calculated variables need to be recalculated. Importantly, the placement order of the variables in the questionnaire does not affect this process (if `B` depends on `A`, the expression for `B` will be recalculated every time `A` changes, regardless of whether `A` precedes `B` or `B` precedes `A` in the questionnaire). Calculation expression may not lead to [circular references](/questionnaire-designer/messages/circular-references/), which is considered to be a design error and for which [compile error](/questionnaire-designer/messages/compile_errors/) `WB0056` is issued.

#### Examples

Below are some examples of expressions of different types.

- **Enabling condition example**

Enabling condition to ask the current question only if the respondent is older than `18` (given that the age of the respondent is captured in a numerical question with variable name `age`):
```
    age > 18
```
- **Validation condition example**

Validation condition to ensure the answer to question with variable name `portion` is between `0` and `100`:
```
    (0<=portion) && (portion<=100)
```
It is common to use `self` as an alias for the current question's variable name (to improve readability and portability of validation expressions):
```
    (0<=self) && (self<=100)
```

- **Filtering condition example**

Filtering conditions to show the past months of the current year (year of the interview) including the current month, i.e. if the interview is happening in *April*, will make only *January*, *February*, *March*, *April* available for selection (assuming that the interview date is captured in an earlier question `intdate`):
```
    @optioncode<=intdate.Value.Month
```

Allow selection of only women in the age 15-49 in a categorical question, assuming the question is linked to a household members roster where the questions on `sex` (coded `1` for males and `2` for females) and `age` (measured in full years) are present:

```
(sex==2) && (15<=age) && (age<=49)
```

- **Critical condition example**

Critical condition requiring either of the two questions (with variable names `age` and `dob`) to be answered:
```
    IsAnswered(age) || IsAnswered(dob)
```

- **Calculation example**

Calculation expression for number of household members specified in a text list question (with variable name `hhmembers`):
```
    hhmembers.Count()
```

#### See also

- [Data types](/syntax-guide/cslanguage/data-types/)
- [Operators](/syntax-guide/cslanguage/syntax-guide-operators/)
- [Available C# Namespaces](/syntax-guide/cslanguage/namespaces/)
