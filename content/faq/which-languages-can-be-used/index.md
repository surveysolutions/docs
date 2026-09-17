+++
title = "Which languages can be used in Survey Solutions questionnaires?"
keywords = [""]
date = 2018-11-12T12:00:00Z
lastmod = 2026-09-15T01:01:01Z

+++

This article discusses the appearance (fonts / scripts) of a Survey Solutions
**questionnaire**. You may also be interested in:

 - changing the [interface language of Survey Solutions](/faq/language/).
 - composing [multilingual questionnaires](/questionnaire-designer/toolbar/multilingual-questionnaires/).

The questionnaire instrument (questions, options, section names, error and warning messages, etc)
can be designed in any language supported in
[Unicode](https://en.wikipedia.org/wiki/Unicode). Survey Solutions allows text entry in Unicode
and the entered values will be preserved in the exported data ([UTF-8](https://en.wikipedia.org/wiki/UTF-8)).

The variable names utilized in the questionnaire must be written strictly using English
alphabet (AB..Zab..z), digits and the underscore character. For complete set of rules for variable names see the
[variable names article](/questionnaire-designer/components/variable-names/).


The following <A href="https://designer.mysurvey.solutions/questionnaire/details/953faa24e13144ac984e1ad62593aab5">public questionnaire</A> demonstrates various text messages written in different languages:

{{< imgproc "images/test_lang_ltr.png" Fit "400x9000" />}}

Figure 1 : text rendered in various left-to-right languages.

{{< imgproc "images/test_lang_rtl.png" Fit "400x9000" />}}

Figure 2 : text rendered in various right-to-left languages.

{{< imgproc "images/test_lang_entry.png" Fit "400x9000" />}}

Figure 3 : free text entry.
