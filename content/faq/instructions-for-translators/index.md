+++
title = "Instructions for the Translators of the Survey Solutions Interface"
keywords = [""]
date = 2024-11-05T00:00:00Z
+++

* Start by downloading the following Excel file ([Download Excel file](files/SurveySolutions.Translation.00.xlsx) corresponding to v24.06.6 of Survey Solutions) and then follow the rest of these instructions. You deliver just the translated Excel file and the title of the new language.
* Do not rename the spreadsheet. Do not convert to any other file format.
* Translate text from column `E` (titled **_INVARIANT_**) to column `F` (titled with your language).
* If you can't translate the original text for any reason, the translation should be left **blank** (do not copy text from column `E` to column `F` in this case).
* Do not modify any other text/cells anywhere else in the spreadsheet, even if there is a typo in
the original text (feel free to notify about any discovered typos or problems in your email message, but not in this file).
* Do not add or remove any lines.
* Do not distort the HTML tags, such as: **&#60;br/&#62;**
* Do not touch anything inside the curly brackets `{}`, for example *"{value}"* must remain *"{value}"* , do not translate the word *"value"* inside the curly brackets.
* Some texts may contain terms in dual curly brackets `{{}}`, for example *"{{count}} interviews will be approved."*. Maintain the nesting in the translation. Do not reduce to `{}`.
* The translation **MUST HAVE** all the same entries `{0}`, `{1}`, ... as the
original! (If there were three in the original, must be the same three mentioned
in the translation). The order of mentioning may be changed, however, for example:
_"File {0} may not be sent to {1}"_ --> _"May not sent to {1} the following file {0}"_
* The meaning of placeholders `{0}`, `{1}` may only be guessed from the texts. The same placeholder may be mentioned several times in the message, for example:
_"{0} is wrong, enter any other value than {0}!"._
In which case `{0}` means the same thing and it must be mentioned AT LEAST ONCE in the
message, but for convenience MAY BE mentioned more than once.
* Messages may contain text that shouldn't be translated, for example:
_"Optionally can specify the following columns:&#60;br/&#62;
\_responsible - username of a headquarters, supervisor or an
interviewer who will be responsible for the assignment;"_
In this case the text *"_responsible"* is a specific column name and must remain the same word
in any translation. Same applies to:
  - emails: e.g. `someone@mysurvey.solutions`;
  - web addresses: `https://designer.mysurvey.solutions` (do not translate each word);
  - file extensions: `.pdf`, `.zip`, `.xlsx`, `.dta`, `.sav`, etc;
  - names of programs: *Stata*, *SPSS*, *Survey Solutions*;
  - terms that are internationally known under English abbreviation: *GPS*, *UTF-8*, *Unicode*,
etc.
* You may decide to translate units Kb, MB, GB, or keep them in English, whichever is more
prevalent/intuitive.
* Pay attention to details. There may be very similar terms with minute differences.
* The terms [*questionnaire*](/faq/glossary/#questionnaire), [*interview*](/faq/glossary/#interview), and [*assignment*](/faq/glossary/#assignment) mean different documents in
Survey Solutions and the difference must be maintained in the translation.
* The terms *interviewer* and *enumerator* mean the same thing in Survey Solutions.
Translators may opt to use a single term do denote either.
* You may want to refer to the [glossary](/faq/glossary/) online to double check the meaning of some of the terms as we apply them.
* Use of quotes: different languages have different conventions to quote the text. In some places (such as in HTML tags: *&#60;font color="red"&#62;No internet connection&#60;/font&#62;*
) specifically the unicode *quotation mark* character is expected (") (Unicode number
U+0022) and should not be replaced with any other type of quotes, such as («) („) etc.


{{< panel title="Warning:" style="warning">}}
Copy/Pasting from other software may result in insertion of invisible control
characters, which may result in an unpredictable behavior or prevent integration
of the translation file. Hence it is recommended typing-in the translation
directly into the Excel spreadsheet.
{{% /panel %}}
