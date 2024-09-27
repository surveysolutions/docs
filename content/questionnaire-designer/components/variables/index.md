+++
title = "Variables"
keywords = ["variables","boolean","double","string","date/time","long integer"]
date = 2016-06-16T20:58:17Z
lastmod = 2016-06-16T20:58:17Z
aliases = ["/customer/portal/articles/2467364-variables","/customer/en/portal/articles/2467364-variables","/customer/portal/articles/2467364","/customer/en/portal/articles/2467364","/questionnaire-designer/variables","/headquarters/export/export_of_calculated_variables"]
+++

Calculated variables are a powerful addition to the functionality of
Survey Solutions: they are named computable expressions, which can be added to a
questionnaire for convenience when operating with large and/or complex
expressions. Variables can be used to simplify and improve the
validation and enabling conditions. The values of variables can be
[substituted](/questionnaire-designer/techniques/text-substitution/)
into the question text or into a static text to provide more informative,
dynamic content.

Every variable has a **name**, a **type** and an **expression**.

The variable name should obey the requirements for [variable names](/questionnaire-designer/components/variable-names/).

**Calculated variables may be of the following types:**

- [`Boolean`](https://learn.microsoft.com/en-us/dotnet/api/system.boolean) for expressions that evaluate to true or false.
- [`Double`](https://learn.microsoft.com/en-us/dotnet/api/system.double) for expressions of numeric type allowing for decimal values (e.g. 2.5, 3.42).
- [`Date/Time`](https://learn.microsoft.com/en-us/dotnet/api/system.datetime) for expressions that are date and/or time.
- [`Long Integer`](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/integral-numeric-types) for expressions that evaluate to integer values. Unlike the double type, this type will only allow for whole numbers (e.g. 2, 42, 7329)
- [`String`](https://learn.microsoft.com/en-us/dotnet/api/system.string) for expressions that evaluate to strings (text).

These types are standard C# types which are described in the corresponding C#
documentation.

The expression that you specify should evaluate to the type of the variable that
has been declared.

{{< panel title="Attention!" style="warning" >}}  

Note that the variables do not have enabling or validation conditions,
but a variable may still be disabled if it is part of the disabled
section or sub-section. In that case the value of the variable is C#'s `null`.
{{< /panel >}}

Calculated variables are included to data export by default. If this is not
desirable, the questionnaire author can prevent this by declaring the variable
not exportable (by setting the `Do not export` checkbox).

### Examples

{{% folded summary="Example 1: Define full name from first and last names." %}}

<BR>

We want to define a variable *fullName* that is a combination of a
person's first name (question *firstName*) and a person's last name
(question *lastName*). Here the variable would be a `String` type because
the variable will contain text.  

{{< imgproc "images/643349.png" Fit "800x600" />}}  

We can write this shortly as:
```
string fullName = firstName + " " + lastName
```
elsewhere in the documentation, with the understanding that the variable type
(`string`) is selected in the dropdown type selector, the variable name
(*fullName*) is written into the corresponding field as shown above, and the
expression (`firstName + " " + lastName`) is written (without the equality sign)
in the expression field.

{{% /folded %}}
{{% folded summary="Example 2: Count missing assets." %}}

<BR>


We want to define a variable *countMissingAssets* to count the number of
household assets where **yes** or **no** has not yet been filled in for
categorical multi-select question (question *hhAssets*) that is in yes/no
mode. Here the variable type would be `long` because we expect
the number of items missing a response to be a whole number.  

```
long countMissingAssets = hhAssets.Missing.Length
```


We can later use it in a static text to the interviewer that will
tell them how many assets they have not filled out yet.  
{{% /folded %}}
{{% folded summary="Example 3: Calculate number of children in the household." %}}

<BR>

We want to define variable *numChildren* to equal the number of records in
the *Persons* roster corresponding to persons who's age is less than 18 years.
Here the type of the variable should be `long` because we expect the
number of children to be whole number.

```
long numChildren = Persons.Count(person => person.age < 18)
```

{{% /folded %}}
