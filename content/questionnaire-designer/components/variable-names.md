+++
title = "Variable names"
keywords = [""]
date = 2019-02-19T10:00:00Z
lastmod = 2019-02-19T10:00:00Z
+++

A variable name (an identifier) must be assigned to every question, calculated variable, and roster in Survey Solutions. Additionally it must also be assigned to the whole questionnaire, and may be assigned to sections and subsections.

Variable names are used for:

- referring to questions in the C# syntax expressions;
- naming the data columns in the export data files;
- referring to the origin of event in paradata events, errors and comments files. 

A variable name is a word that consists only of the following:

- English letters A..Z and a..z;
- Digits 0..9;
- an underscore character "_".

No other characters are permitted in the variable name. Specifically, spaces are not permitted in the variable names, as variable name must be a single word. Variable name may not start with a digit or underscore, and may not end with an underscore. Double underscores are not permitted in variable name.

Variable names may not be longer than 32 characters and are required to be shorter for some question types: multiselect, GPS location and some other question types.

Variable names are shown in green color in the questionnaire Designer.

The following are examples of valid variable names: _age_, _gender_, _x25_, _age\_of\_hh\_head_.

The following are examples of invalid variable names: 

- _age\__ (ends with an underscore);
- _0st_ (starts with a digit);
- _food+nonfood_ (contains character "+" which is not permitted)

In addition to the above restrictions, a variable name may not be a reserved keyword in [C#](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/), [Stata](https://books.google.com/books?id=4rrsRqUSls8C&pg=PA77&lpg=PA77#v=onepage&q&f=false), [SPSS](https://www.ibm.com/support/knowledgecenter/SSLVMB_subs/statistics_reference_project_ddita/spss/base/syn_variables_variable_names.html) software, or in the Survey Solutions itself, or in OS Microsoft Windows. Hence the following are the reserved words that may not be used as Survey Solutions variable names:

            "abstract", "as", "base", "bool", "break", "byte", "case",
            "catch", "char", "checked", "class", "const", "continue", "decimal",
            "default", "delegate", "do", "double", "else", "enum", "event",
            "explicit", "extern", "false", "finally", "fixed", "float", "for",
            "foreach", "goto", "if", "implicit", "in", "int", "interface",
            "internal", "is", "lock", "long", "namespace", "new", "null",
            "object", "operator", "out", "override", "params", "private", "protected",
            "public", "readonly", "ref", "return", "sbyte", "sealed", "short",
            "sizeof", "stackalloc", "static", "string", "struct", "switch", "this",
            "throw", "true", "try", "typeof", "uint", "ulong", "unchecked",
            "unsafe", "ushort", "using", "virtual", "void", "volatile", "while"

            "_all", "_b", "byte", "_coef", "_cons", "double", "float", "if", "in", "int", 
            "long", "_n", "_pi", "_pred", "_rc", "_skip", "strl", "using", "with"

            "all", "and", "by", "eq", "ge", "gt", "le", "lt", "ne", "not", "or", 
            "to", "with"

            "rowcode","rowname","rowindex","roster","id", "parentid1", "parentid2", 
            "parentid3", "parentid4", "self", "state", "quest", "optioncode", 
            "complete", "cover", "overview"

            "con", "prn", "aux", "nul", 
            "com1", "com2", "com3", "com4", "com5", "com6", "com7", "com8","com9",
            "lpt1", "lpt2","lpt3", "lpt4", "lpt5", "lpt6", "lpt7", "lpt8", "lpt9"


In addition all variable names of the pattern str#### ("str" followed by a number) are also disallowed (reserved in Stata).

Variable names are case-sensitive, once you've declared a variable _Income_ or _SpouseAge_ keep on writing it the same way in all the syntax expressions. To facilitate export to case-insensitive systems like SPSS, Survey Solutions will not permit you to declare another variable name that differs only by case from one already used, for example it will not permit _spouseage_ once _SpouseAge_ is already declared. This means that all variations of case in the above keywords are also reserved keywords.

__Naming conventions__

The following are some common schemes for naming variables in questionnaires:

- _v1_, _v2_, _v3_ (by question number);
- _s1q1_, _s1q2_, .., _s2q1_,.... (by section and question number);
- _a1_, _a2_, ..._b1_, _b2_ (by section letter and question number);
- _age_, _gender_, _education_ (by the matter of the question);
- _ageOfHead_, _numberOfChildren_ (so called Camel notation);
- _AgeOfHead_, _NumberOfChildren_ (capitalization of every variable name);
- _age\_of\_head_, _number\_of\_children_ (underscores used to separate words).

You can pick what is more convenient for your work keeping in mind the following:

- how easy it is to read expressions involving such variable names;
- how easy it is to make a mistake when typing a variable name;
- how easy it will be to introduce a new question in the middle of the questionnaire;
- compatibility with your file system and data processing package;
- etc.

Once you've picked a convention for the variable names, it's best to maintain it for the whole questionnaire and inform your collaborators about your preferred pattern of variable names.

Note that among Stata users it is conventional to use all lowercase letters for variable names, though this is not a requirement, while in SPSS variable names are not case-sensitive.