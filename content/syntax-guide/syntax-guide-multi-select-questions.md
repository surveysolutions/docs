+++
title = "Syntax Guide: Multi-select questions"
keywords = ["syntax","multiselect","multi-select"]
date = 2016-11-30T22:51:59Z
lastmod = 2016-11-30T22:51:59Z
+++

Two types of multi-select questions
===================================

![](/images/721592.png)

There are two types of multi-select questions. They differ not only in
the way they appear, but in the way their answers can be referenced with
Survey Solutions' conditions language.

Click below on the type of multi-select question that interests you:

-   [Series of tick boxes](#TickBox)
-   [Series of yes/no questions](#YesNo)

<span id="TickBox"></span>Series of tick boxes
==============================================

Technical introduction
----------------------

When the interviewer answers a multi-select question, the answers are
stored in an array.

To make this abstract statement more concrete, take an example.

![](/images/721593.png)

In the figure, the selected items are: maize (1) and ground bean (27).

Thus, the array of answers can be represented in this way:

        ag_d20 = {1,27}

Where the array contains the values of the items selected--that is 1 and
27

Common tasks
------------

### Find a particular value

-   [Contains](#Contains). Checks whether the answers to question
    contain a specified value.
-   [ContainsOnly](#ContainsOnly). Contains only the specified value

### Look for several values

-   [ContainsAll](#ContainsAll). Check whether the answers contain all
    of the specified values.
-   [ContainsOnly](#ContainsOnly). Contains only the specified values
-   [ContainsAny](#ContainsAny). Contains at least one of the specified
    values
-   [!ContainsAny](#ContainsAny). Contains none of the specified values.
    See the second example of ContainsAny

### Count the number of values

-   [Length](#Length). Computes the number of answers to a multi-select
    question.

Syntax explained
----------------

### <span id="Contains"></span>Contains

#### Syntax

        tickBox.Contains(a)

#### Description

Checks whether the value *a* is among the answers to a *tickBox*--that
is, is contained in the set of answers. Returns *true* if *a* is
contained in *tickBox*'s answers. Returns *false* otherwise.

#### Example

Often, the questionnaire designer wants to trigger certain behavior if a
particular answer option is among those selected. In the example below,
the interviewer needs to write a text description for the use of a
loan/credit if "other (specify)" is one of the three answers recorded.

![](/images/721187.png)

 

To put this in terms closer to the programming language solution, the
questionnaire developer enables a text question if the code for "other
(specify)" (10) is contained in the array of answers to the multi-select
question. In code:

        // enable text field to specify if "other" selected (among potentially other options)
        hh_p10.Contains(10)

### <span id="ContainsOnly"></span>ContainsOnly

#### Syntax

Single-value version:

        tickBox.ContainsOnly(a)

Multiple-value version:

        tickBox.ContainsOnly(a,b,c,...)

#### Description

Checks whether the value *a* (*a,b,c,...*) is (are) the only answer(s)
to *tickBox*. Returns *true* if *a* (*a,b,c,...*) is (are) the only
answer(s). Returns *false* otherwise.

#### Example

With multi-select questions, multiple answers are allowed. However, in
some cases, two (or more) answers cannot be (logically) selected at the
same time. That is, some answers may be mutually exclusive.

Consider the example below where the answer set includes several sources
for start-up capital as well as "No start-up cost".

![](/images/721188.png)

Clearly, if "No start-up cost" is selected, some other option cannot
also be selected. The contrapositive is also true: if a non-"No start-up
cost" option is ticked, "No start-up cost" cannot also be ticked.

Translating intention to code, we can describe the valid set of answers
to this multi-select question:

        // either "No start-up cost" not selected...
        !hh_n08.Contains(13)

        ||

        // ...or "No start-up cost" is the only answer provided
        hh_n08.ContainsOnly(13)

Note: *ContainsOnly* also allows either a single value or multiple
values to be specified. We leave to the reader the task of finding an
appropriate example for using the multi-value version of *ContainsOnly*

### <span id="ContainsAll"></span>ContainsAll

#### Syntax

        tickBox.ContainsAll(a,b,c,...)

#### Description

Checks whether the values *a,b,c,...* are all contained in the set of
answers to *tickBox*. Returns *true* if *a,b,c,...* are all selected
answers to *tickBox*. Returns *false* otherwise.

#### Example

Using *Contains* allows one to determine whether a certain answer is
contained in a multi-select question's array of answers.

To check for more than one answer, one would need to write something
like the following

        // the multi-select contains answers 4 and 5
        multiSelect.Contains(4) && multiSelect.Contains(5)

To do the same in more compact form, one could also write the following:

        // the multi-select contains all of the listed answers: 4 and 5
        multiSelect.ContainsAll(4,5)

### <span id="ContainsAny"></span>ContainsAny

#### Syntax

        tickBox.ContainsAny(a,b,c,...)

#### Description

Checks whether any of the values *a,b,c,...* are contained in the set of
answers selected for *tickBox*. Returns *true* if any of *a,b,c,...* are
contained in *tickBox*'s answers. Returns *false* otherwise.

#### Example

Sometimes, the questionnaire designer wants to implement the same
behavior when one of several answers is selected--that is, if any
element in a list of answers is contained in a multi-select question's
array of answers.

To make this abstract situation concrete, consider the excerpt from an
agricultural questionnaire below.

![](/images/721189.png)

Looking at the list of answer options, it is clear that the interviewer
must specify a crop whenever an "other" option is selected. Several
crops have other options: tobacco (10), groundnuts (16), rice (26), and
other crops (48).

To do this, the there are two options. The first option:

        // enable a text question if any "other" option is selected
        crops.Contains(10) ||
        crops.Contains(16) ||   
        crops.Contains(26) ||
        crops.Contains(48)

The expression is valid. It does what we want. But it is inelegant and
error-prone to write

The second option:

        // enable a text question if any "other" option is selected
        crops.ContainsAny(10,16,26,48)

This solution is more compact, more readable, and less prone to error.

### <span id="Length"></span>Length

#### Syntax

        tickBox.Length

#### Description

Determines the length of the array of answers--that is, the count of
answers selected for *tickBox*.

#### Example

The length of a tick-all-that-apply, multi-select question yields the
number of ticked answers.

While this information may not seem immediately practical, it often can
be surprisingly useful. For some questions, the number of answers may
useful in writing enablement or validation conditions.

Consider the questionnaire excerpt below:

![](/images/721188.png)

Logically, the questionnaire developer wants either "no start-up cost"
to be selected, or some other answer option--but never the two things at
the same time. Earlier, we saw how to write this expression. Below, we
revisit this example using the *Length* property of a multi-select
question.

Using *Contains* and *ContainsOnly*, we wrote:

        // either "No start-up cost" not selected...
        !hh_n08.Contains(13)

        ||

        // ...or "No start-up cost" is the only answer provided
        hh_n08.ContainsOnly(13)

Using *Length* we can write something similar:

        // if a single answer is selected, it can be any option
        hh_n08.Length==1

        ||

        // if more than 1 answer is selected, the set of answers cannot contain "no start-up cost"
        (hh_n08.Length>1 && !hh_n08.Contains(13))

<span id="YesNo"></span>Series of yes/no questions
==================================================

<span id="TechnicalYN"></span>Technical introduction
----------------------------------------------------

This type of question consists of items, and for each item of a "yes",
"no", or missing answer.

When the interviewer answers an item, the data are stored in the
following way. For each state of an item's answer, there is an array. In
each array, one finds value of the item(s) with that state. In other
words, there are the following arrays, with the following contents:

-   **Yes.** Contains the values of items with a "yes" answer.
-   **No.** Contains items with a "no" answer.
-   **Missing.** Containts the items without an answer--that is, without
    a "yes" or "no" answer. Before any item is answered, all items are
    in the Missing array. As items obtain "yes" or "no" answers, they
    move to the Yes or No array.

In addition to these three arrays, there is also an array *All* that
containts the values of all items, whatever each item's status.

To make things more clear, consider the following example.

![](/images/721595.png)

In the image above, all items are answered with a "yes" or "no". The
"yes" answers are: Mortar/pestle (501), Bed (502), Chair (504), and
Radio (507). The "no" answers are: Table (503), Fan (505), Air
conditioner (506), Tape or CD/DVD player;HiFi (508), Radio with flash
drive/micro CD (5081).

Hence, the arrays are:

        hh_l01.Yes = {501,502,504,50
        hh_l01.No = {503,505,506,508,5081}
        hh_l01.Missing = {}
        hh_l01.All = {501,502,503,504,505,506,507,508,5081} 

The items with a "yes" answer appear in the *Yes* array, those with a
"no" in *No*, and the *Missing* array is empty, since all items were
answered in this example

Common tasks
------------

### Find a particular value

-   [Contains](#ContainsYN). Checks whether the answers to question
    contain a specified value.
-   [ContainsOnly](#ContainsOnlyYN). Contains only the specified value

### Look for several values

-   [ContainsAll](#ContainsAllYN). Check whether the answers contain all
    of the specified values.
-   [ContainsOnly](#ContainsOnlyYN). Contains only the specified values
-   [ContainsAny](#ContainsAnyYN). Contains at least one of the
    specified values
-   [!ContainsAny](#ContainsAnyYN). Contains none of the specified
    values. See the second example of ContainsAny

### Count the number of values

-   [Length](#LengthYN). Computes the number of answers to a
    multi-select question.

Syntax explained
----------------

### <span id="ContainsYN"></span>Contains

#### Syntax

        yesNo.ArrayName.Contains(a)

Where *yesNo* is the variable name of a Yes/No mode mutli-select
question, and *ArrayName* is the name of the Yes/No mode arrays (see the
[technical introduction](#TechnicalYN) for more).

#### Description

Checks whether the value *a* is among the values in the array
*ArrayName* for the question *yesNo*. Returns *true* if *a* is contained
in *yesNo*'s *ArrayName*. Returns *false* otherwise.

#### Example

In excerpt below, the designer wants to capture a text description if a
"Yes" answer is recorded for the "Other, specify" item.

![](/images/721528.png)

 

Let's think how this could be accomplished. First, one would need to
know the code of the "Other, specify" item. Let's assume this is 4.
Then, one would need to know the where "Yes" answers are stored for
Yes/No mode multi-select questions. According to the [technical
introduction](#TechnicalYN), this is an array named Yes that is
associated with any Yes/No mode, multi-select question.

Putting together these pieces,

        // if the Yes array for question 19 contains "Other, specify", then enable this question
        hh_n21.Yes.Contains(4) 

### <span id="ContainsOnlyYN"></span>ContainsOnly

#### Syntax

Single-value version:

        yesNo.ArrayName.ContainsOnly(a)

Multiple-value version:

        yesNo.ArrayName.ContainsOnly(a,b,c,...)

Where *yesNo* is the variable name of a Yes/No mode mutli-select
question, and *ArrayName* is the name of the Yes/No mode arrays (see the
[technical introduction](#TechnicalYN) for more).

#### Description

Checks whether the value *a* (*a,b,c,...*) is (are) the only answer(s)
in the array *ArrayName* assocatiated with the multi-select question
*yesNo*. Returns *true* if *a* (*a,b,c,...*) is (are) the only
answer(s). Returns *false* otherwise.

#### Example

If the questionnaire designer wants only certain items to have "yes" or
"no" answers, they may use *ContainsOnly*.

        // ensure that only item 105 has a "no" answer
        yesNo.No.ContainsOnly(105)

### <span id="ContainsAllYN"></span>ContainsAll

#### Syntax

        yesNo.ArrayName.ContainsAll(a,b,c,...)

Where *yesNo* is the variable name of a Yes/No mode mutli-select
question, and *ArrayName* is the name of the Yes/No mode arrays (see the
[technical introduction](#TechnicalYN) for more).

#### Description

Checks whether the values *a,b,c,...* are all contained in the array
*ArrayName* associated with the multi-select question *yesNo*. Returns
*true* if *a,b,c,...* are all selected answers to *yesNo*. Returns
*false* otherwise.

#### Example

![](/images/721544.png)

Suppose that the questionnaire designer wants to implement a validation
rule about how tables and chairs are owned. The rule is as follows. If
the household owns a chair, they may or may not own a chair. If the
household owns a table, then they must also own a chair. A household
never owns a table with a chair.

To move one step closer to implementation, let's translate this intent
into pseudo-code. If the code for "chair" appears in the *Yes* array,
then "table" may also. If the code "table" apepars in the *Yes* array,
then "chair must also appear. And it is possible that neither item
appear in the *Yes* array.

Moving from pseudo-code to code,

        // either table and chair are owned together...
        hh_l01.ContainsAll(503,504)

        ||

        // ...or a chair is owned without a table...
        hh_l01.Contains(504) && !hh_l01.Contains(503)

        ||

        // ...or neither a table nor chair is owned
        !hh_l01.ContainsAny(503,504)

### <span id="ContainsAnyYN"></span>ContainsAny

#### Syntax

        yesNo.ArrayName.ContainsAny(a,b,c,...)

Where *yesNo* is the variable name of a Yes/No mode mutli-select
question, and *ArrayName* is the name of the Yes/No mode arrays (see the
[technical introduction](#TechnicalYN) for more).

#### Description

Checks whether any of the values *a,b,c,...* are contained in the
*ArrayName* associated with the Yes/No mode question named *yesNo*.
Returns *true* if any of *a,b,c,...* are contained in *yesNo*'s answers.
Returns *false* otherwise.

#### Example

Consider the following questionnaire excerpt:

![](/images/721544.png)

Suppose that one wants to check that recorded asset ownership makes
sense. In particular, the following rule: if a household owns basic
assets, then they may or may not own luxury assets; if the household
owns luxury assets, they must also own basic ones; and luxury assets
cannot be owned without also owning basic assets.

For this example, basic assets can be considered as the following:
mortar (501), bed (502), table (503), chair (504). Luxury goods can be
considered to be: fan (505), air contioner (506), and radio (507). That
is, basic assets can be any of a certain set, and luxury assets any of
another set.

Using *ContainsAny*, one can write:

        // if has basic assets, may have luxury assets...
        ( hh_l01.Yes.ContainsAny(501,502,503,504) && hh_l01.Yes.ContainsAny(505,506,507) )

        ||

        // ... or may not have basic assets
        ( hh_l01.Yes.ContainsAny(501,502,503,504) && !hh_l01.Yes.ContainsAny(505,506,507) )

### <span id="LengthYN"></span>Length

#### Syntax

        yesNo.ArrayName.Length

Where *yesNo* is the variable name of a Yes/No mode mutli-select
question, and *ArrayName* is the name of the Yes/No mode arrays (see the
[technical introduction](#TechnicalYN) for more).

#### Description

Determines the length of the the array *ArrayName* associated with the
question named *yesNo*--that is, the count of items in *ArrayName*.

#### Example

Suppose that a questionnaire designer wants to ensure that food
consumption information is properly recorded by interviewers. In
particular, the designer believes that surveyed hosueholds, however
poor, they will consume at least one cereal or cereal product in the
last 7 days.

![](/images/721624.png)

To do this, one needs to count the number of "yes" answers, and make
sure that the count is greater than or equal to 1. In code:

        // however poor the household, at least one food has a "yes" answer
        hh_j01.Yes.Length>=1
