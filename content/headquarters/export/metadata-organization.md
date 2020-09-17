+++
title = "Organization of meta-data storage in the exported data"
keywords = ["export, metadata"]
date = 2020-09-17T12:12:12Z
lastmod = 2020-09-17T12:12:12Z
+++

Survey Solutions export file is a zip-archive with multiple data files corresponding to various levels of data and system-generated accompanying data reflecting the comments, errors, statuses and other technical information about interviews and assignments. When the corresponding setting is activated in the export interface, the data is accompanied with the meta-data reflecting the structure of the questionnaire. The meta-data is saved to the subfolder `Questionnaire` of the export archive.

The `questionnaire` subfolder contains the following information:
- file `content.zip` - which is the content of the questionnaire as it is designed in the Designer tool;
- file `ddi.xml` - which is a representation of the questionnaire in the [DDI format](https://en.wikipedia.org/wiki/Data_Documentation_Initiative);
- subfolder `PDF` - which contains PDF-previews of the questionnaire rendered in all languages of the questionnaire. The translations are named with a human-readable title of the language followed by the questionnaire variable (both as specified in the [Designer tool](/questionnaire-designer/)).

The content of the questionnaire may be accessed by the user-written applications by inspecting the zip-archive `content.zip`. This archive has the following structure:
- file `document.json` - JSON file describing the content of the questionnaire (includes all sections, questions, logical expressions, etc).
- folder `Attachments` - contains individually saved attachments to questionnaire object. Each attachment is saved into a subfolder bearing the GUID of the attachment (as referenced to from the questionnaire document) and a file `Content-Type.txt` which mentions the attachment [content type](https://en.wikipedia.org/wiki/Media_type).
- folder `Categories` - contains sets of reusable categories saved as individual files in Excel format (xlsx) and named with the GUID of the reusable categories set (as referenced from the questionnaire document).
- folder `Lookup Tables` - contains lookup tables saved as individual files in tab-delimited text format (txt) and named with the GUID of the reusable categories set (as referenced from the questionnaire document).
- folder `Translations` - contains translations of questionnaire saved as individual files in Excel format (xlsx) and named with the GUID of translation (as referenced from the questionnaire document).

