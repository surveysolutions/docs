+++
title = "Text substitution"
keywords = ["substitution", "piping"]
date = 2020-01-23T00:00:00Z
lastmod = 2020-01-24T00:00:00Z

+++

In Survey Solutions it is possible to design questionnaires that use text substitution, denoted with an identifier enclosed in percentage signs, like so: <TT>%varname%</TT>.

In other software this may be known under the term "*text piping*", "*answer piping*", "*text propagation*", etc.

The common situations when you may want to use this are:

- mention an answer collected earlier;
- display a calculated result;
- display reference values, etc.

For text substitution it is important **what** may be substituted in, and **where** a substitution may be used.

<BR>

##### What may be substituted?


<BR>

You can substitute:

- variable names associated with **questions**, to refer to the answer to that question;
- variable names associated with [**calculated variables**](/questionnaire-designer/components/variables/), to refer to the result of the calculation;
- identifiers associated with a particular roster, to refer to the item title in the roster;
- some **system-defined variables**, notably <TT>%rostertitle%</TT> to refer to the current item name from within a roster.

Not all question types are suitable for text substitution. Refer to the corresponding column in <A href="/questionnaire-designer/limits/design-limitations-by-question-type/">this article</A> to determine whether a particular question type is compatible with the text substitution.

For single-select categorical questions the substituted value is the option text associated with the current answer, not the numerical value, even though the latter is the value of the question in the syntax expressions (conditions).

If the answer to a question has not been given (question disabled, answer was never entered, answer was cleared, etc) or the calculated value was not calculated (variable in a disabled section, exception occurred during calculation, calculation resulted in a null value), then the substitution will insert specifically this: [...]

<BR>

##### Where a substitution may occur?

<BR>

**You may use text substitution in:**

- text of a question;
- instruction of a question;
- validation error/warning message;
- section, sub-section and roster titles;
- static text.

**You specifically may not use text substitution in:**

- option titles of categorical questions;
- variable labels;
- syntax expressions of any kind.

<BR>

##### System-defined variables

<BR>

Survey Solutions permits the use of the following in substitutions:

- <TT>%rostertitle%</TT> will substitute in the title associated with the current item in the current roster. This substitution is invalid outside of a roster.
- <TT>%self%</TT> will substitute in the value of the current question. The substitution is invalid if used outside of a question context.

<BR>

##### Examples

<BR>

- How old is %respondentname%?
- Did %rostertitle% work for even one hour in the last seven days?
- You have told me that the area of your parcel is %parcelarea% acres, which is %calcareaha% in hectares. Is this correct?

<BR>

##### Hints and notes

<BR>

- Check the spelling if you are getting an error [WB0017].

- Check the question type for compatibility as described above if you are getting an error [WB0018].

- You may not substitute in a question/variable of a roster outside of that roster! *"How old is %name%"* makes sense within the roster where name is being asked, but not outside of it, since there will be multiple people in the roster with different names. You will get error [WB0019] if you try.

- It is expected, though not required that you are substituting in values that are asked *earlier* in the flow of the interview. 

- You technically may refer to the value of the question itself in its own question text, though this has no practical sense.

- You may refer to the value of the question in its own validation message, and this has a lot of practical sense. For example, you can define a check with the following message: "*Warning! The person is %self% years old, which is possible, but unlikely! Interviewer, confirm with the respondent!*"

- If the substitution contains any [HTML formatting tags](/questionnaire-designer/techniques/formatting-text/), when they are encountered they will **not** be applied, but displayed verbatim. Still the substitution obeys the formatting applied directly where it is used. For example, the question text "*How old is &lt; FONT color="maroon"&gt;%personname%&lt;/FONT&gt;?*" may appear as "**How old is <FONT color="maroon">Christina</FONT>?**", where the color is applied due to our specification, and the bold font is used always in all questions (fixed style of Survey Solutions).

- No recursion: if a text value substituted in contains anything enclosed in %-signs, that fragment does not get substituted.

- Where you may use substitution, you may use *just* the substitution. The following question text is technically valid: <TT>%qtext%</TT>. What question the interviewers (in CAPI) or respondents (in CAWI) will actually see on the screen depends on the value of **qtext**.

- Rosters triggered by numeric questions, where source of names is not defined (possible) will have the item index 1, 2, 3, ... substituted in, instead of the the <TT>%rostertitle%</TT>.
