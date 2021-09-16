+++
title = "Compile errors"
keywords = ["error"]
date = 2020-10-22T01:01:01Z
lastmod = 2020-11-18T01:01:01Z
+++


Survey Solutions Designer conducts analysis of your questionnaire for many
common problems and design errors. The following table summarizes the error
messages issued by the Designer when the questionnaire is compiled.

<TABLE class="table table-striped table-hover>

<THEAD>
  <TR class="header">
    <TH>#</TH>
    <TH>Message</TH>
    <TH>Comment</TH>
  </TR>
</THEAD>







<TR><TD>WB0001</TD><TD>Questionnaire must contain at least one question.</TD><TD></TD></TR>
<TR><TD>WB0002</TD><TD>Validation condition has a syntax error.</TD><TD></TD></TR>
<TR><TD>WB0003</TD><TD>Enabling condition has a syntax error.</TD><TD></TD></TR>
<TR><TD>WB0004</TD><TD>Variable cannot have empty expression.</TD><TD></TD></TR>
<TR><TD>WB0005</TD><TD>Variable expression has length more than {0} characters.</TD><TD></TD></TR>
<TR><TD>WB0006</TD><TD>Only one GPS question could be marked as identifying</TD><TD>Means that only one GPS location question may be placed to the cover page. Since different questionnaires may have different variable names for the GPS questions, Survey Solutions picks the location question not by variable name, but by position (first GPS location question in the cover page) when drawing the map dashboard. Hence this restriction. Additional GPS location questions may be placed in other sections of the questionnaire.</TD></TR>
<TR><TD>WB0007</TD><TD>Multi select yes/no question can't be linked</TD><TD></TD></TR>
<TR><TD>WB0008</TD><TD>It is not allowed to use substitutions in variable label</TD><TD></TD></TR>
<TR><TD>WB0009</TD><TD>Roster size question is missing.</TD><TD></TD></TR>
<TR><TD>WB0010</TD><TD>Macro has invalid name.</TD><TD></TD></TR>
<TR><TD>WB0011</TD><TD>Linked question references a nonexistent question.</TD><TD></TD></TR>
<TR><TD>WB0012</TD><TD>Linked question references a question type that is not supported.</TD><TD></TD></TR>
<TR><TD>WB0013</TD><TD>Linked question references a question not in a roster.</TD><TD></TD></TR>
<TR><TD>WB0014</TD><TD>Macro cannot have empty name.</TD><TD></TD></TR>
<TR><TD>WB0015</TD><TD>Question with title or instruction substitution cannot be marked as identifying.</TD><TD></TD></TR>
<TR><TD>WB0017</TD><TD>Substitution references a nonexistent question or variable.</TD><TD></TD></TR>
<TR><TD>WB0018</TD><TD>Substitution references an item that is not supported in substitutions.</TD><TD><A href="/questionnaire-designer/limits/design-limitations-by-question-type/">details</A></TD></TR>
<TR><TD>WB0019</TD><TD>Substitution cannot reference items from a deeper roster level.</TD><TD></TD></TR>
<TR><TD>WB0020</TD><TD>Another Macro with the same name already exists.</TD><TD></TD></TR>
<TR><TD>WB0021</TD><TD>Max number of answers is greater than number of answer options.</TD><TD></TD></TR>
<TR><TD>WB0022</TD><TD>Question of this type cannot be identifying.</TD><TD>The Designer tool will not let you directly select a question type that is not usable at the cover page. However, if you copy such a question (e.g. multiple select) from another section and paste it into the cover page, this will result in a questionnaire with this error.</TD></TR>
<TR><TD>WB0023</TD><TD>Roster size source question is incorrect. Only numeric, categorical with multi-select or text list questions can be used.</TD><TD></TD></TR>
<TR><TD>WB0024</TD><TD>Lookup table has invalid name.</TD><TD></TD></TR>
<TR><TD>WB0025</TD><TD>Lookup table cannot have empty name.</TD><TD></TD></TR>
<TR><TD>WB0026</TD><TD>Items with the same name found.</TD><TD></TD></TR>
<TR><TD>WB0027</TD><TD>Expression has a syntax error.</TD><TD></TD></TR>
<TR><TD>WB0028</TD><TD>The filter expression is more than {0} characters long.</TD><TD></TD></TR>
<TR><TD>WB0029</TD><TD>Question with answer option filter cannot be identifying.</TD><TD></TD></TR>
<TR><TD>WB0030</TD><TD>Identifying questions cannot be inside a roster.</TD><TD></TD></TR>
<TR><TD>WB0031</TD><TD>Lookup table has invalid column headers.</TD><TD></TD></TR>
<TR><TD>WB0032</TD><TD>Roster with a source question cannot have fixed set of items.</TD><TD></TD></TR>
<TR><TD>WB0033</TD><TD>Fixed set of items roster cannot have roster source question.</TD><TD></TD></TR>
<TR><TD>WB0034</TD><TD>Fixed set of items roster cannot have roster title question.</TD><TD></TD></TR>
<TR><TD>WB0035</TD><TD>Roster with a question roster source has invalid source question for names of rows.</TD><TD></TD></TR>
<TR><TD>WB0036</TD><TD>Roster cannot have a roster title question when the roster source question is a categorical multi-select or list question.</TD><TD></TD></TR>
<TR><TD>WB0037</TD><TD>Fixed set of items roster cannot have empty titles or less than two items.</TD><TD></TD></TR>
<TR><TD>WB0038</TD><TD>Fixed set of items roster cannot have more than {0} rows.</TD><TD></TD></TR>
<TR><TD>WB0039</TD><TD>List question cannot be identifying.</TD><TD></TD></TR>
<TR><TD>WB0040</TD><TD>List question cannot be filled by supervisor.</TD><TD></TD></TR>
<TR><TD>WB0041</TD><TD>Fixed set of items roster values must be unique.</TD><TD></TD></TR>
<TR><TD>WB0042</TD><TD>Maximum number of list elements must be in range [{1}, {0}].</TD><TD></TD></TR>
<TR><TD>WB0043</TD><TD>Lookup table has too many columns</TD><TD></TD></TR>
<TR><TD>WB0044</TD><TD>Lookup table has too many rows</TD><TD></TD></TR>
<TR><TD>WB0045</TD><TD>Question has categories with empty values.</TD><TD></TD></TR>
<TR><TD>WB0046</TD><TD>Enabling condition cannot refer to a question from a deeper roster level.</TD><TD></TD></TR>
<TR><TD>WB0047</TD><TD>Lookup table has not unique rowcode values</TD><TD></TD></TR>
<TR><TD>WB0048</TD><TD>Lookup table cannot be empty</TD><TD></TD></TR>
<TR><TD>WB0049</TD><TD>Barcode question cannot be filled by supervisor.</TD><TD></TD></TR>
<TR><TD>WB0050</TD><TD>Barcode question cannot be identifying.</TD><TD></TD></TR>
<TR><TD>WB0051</TD><TD>Sub-sections cannot have enabling condition referencing child question.</TD><TD></TD></TR>
<TR><TD>WB0052</TD><TD>Lookup table name cannot be a reserved word.</TD><TD></TD></TR>
<TR><TD>WB0053</TD><TD>Roster which is the source of the link should exist.</TD><TD></TD></TR>
<TR><TD>WB0054</TD><TD>Roster should have deeper or the same roster level as it's roster size question.</TD><TD></TD></TR>
<TR><TD>WB0055</TD><TD>Roster can have no more than {0} parent rosters.</TD><TD></TD></TR>
<TR><TD>WB0056</TD><TD>Circular references are not allowed.</TD><TD><A href="/questionnaire-designer/messages/circular-references">explanation</A></TD></TR>
<TR><TD>WB0057</TD><TD>Links are prohibited on navigation elements: sections, sub-sections, rosters</TD><TD></TD></TR>
<TR><TD>WB0058</TD><TD>Variable name or roster ID cannot be a reserved word.</TD><TD></TD></TR>
<TR><TD>WB0059</TD><TD>If item uses %rostertitle% substitution it needs to be placed inside roster.</TD><TD></TD></TR>
<TR><TD>WB0060</TD><TD>Question has less than {0} categories.</TD><TD></TD></TR>
<TR><TD>WB0061</TD><TD>Question has max allowed answers less than {0}.</TD><TD></TD></TR>
<TR><TD>WB0062</TD><TD>Option filter expression has a syntax error.</TD><TD></TD></TR>
<TR><TD>WB0063</TD><TD>Categorical linked question cannot be used in validation condition #{0}.</TD><TD></TD></TR>
<TR><TD>WB0064</TD><TD>Categorical linked question cannot be used in enabling condition.</TD><TD></TD></TR>
<TR><TD>WB0065</TD><TD>Another attachment with the same name already exists.</TD><TD></TD></TR>
<TR><TD>WB0066</TD><TD>Question of this type is not supported.</TD><TD></TD></TR>
<TR><TD>WB0067</TD><TD>Valid variable or roster ID name should not be empty.</TD><TD></TD></TR>
<TR><TD>WB0068</TD><TD>Roster cannot have more than {0} child elements</TD><TD></TD></TR>
<TR><TD>WB0070</TD><TD>Roster has roster ID equal to questionnaire title.</TD><TD></TD></TR>
<TR><TD>WB0071</TD><TD>Static text cannot be empty.</TD><TD></TD></TR>
<TR><TD>WB0072</TD><TD>Categories titles must be unique.</TD><TD></TD></TR>
<TR><TD>WB0073</TD><TD>Categories values must be unique.</TD><TD></TD></TR>
<TR><TD>WB0074</TD><TD>Categorical question cannot have categories and be linked to another question.</TD><TD></TD></TR>
<TR><TD>WB0075</TD><TD>Contains more than {0} categories.</TD><TD></TD></TR>
<TR><TD>WB0076</TD><TD>Contains more than {0} categories.</TD><TD></TD></TR>
<TR><TD>WB0077</TD><TD>Question has invalid variable name.</TD><TD></TD></TR>
<TR><TD>WB0078</TD><TD>Picture question can be interviewers only.</TD><TD></TD></TR>
<TR><TD>WB0079</TD><TD>Picture question cannot have a validation condition.</TD><TD></TD></TR>
<TR><TD>WB0080</TD><TD>Roster with more than {0} rows cannot have nested rosters</TD><TD></TD></TR>
<TR><TD>WB0081</TD><TD>Roster with more than {0} rows cannot be nested</TD><TD></TD></TR>
<TR><TD>WB0082</TD><TD>Multi-select roster source question should have a maximum number of answers set.</TD><TD></TD></TR>
<TR><TD>WB0083</TD><TD>Question with current type cannot be used as roster title.</TD><TD></TD></TR>
<TR><TD>WB0084</TD><TD>Categories in child cascading combo box question should reference only existing option in parent question.</TD><TD></TD></TR>
<TR><TD>WB0085</TD><TD>Question should have deeper or the same level as it's parent question.</TD><TD></TD></TR>
<TR><TD>WB0086</TD><TD>Cascading combo box question references missing or unsupported question type.</TD><TD></TD></TR>
<TR><TD>WB0087</TD><TD>Circular references in cascading combo box questions not allowed.</TD><TD></TD></TR>
<TR><TD>WB0088</TD><TD>Cascading combo box question should have less than {0} categories.</TD><TD></TD></TR>
<TR><TD>WB0089</TD><TD>Cascading combo box question should have unique value and parent value list of categories.</TD><TD></TD></TR>
<TR><TD>WB0090</TD><TD>Linked question can be interviewers only.</TD><TD></TD></TR>
<TR><TD>WB0091</TD><TD>Child cascading combo box question should not contain enabling condition.</TD><TD></TD></TR>
<TR><TD>WB0092</TD><TD>Child cascading combo box question should not contain validation condition.</TD><TD></TD></TR>
<TR><TD>WB0093</TD><TD>Roster source list question should have a maximum number of elements set.</TD><TD></TD></TR>
<TR><TD>WB0094</TD><TD>Enabling condition has length more than {0} characters.</TD><TD></TD></TR>
<TR><TD>WB0095</TD><TD>Static text refers absent attachment</TD><TD></TD></TR>
<TR><TD>WB0096</TD><TD>Error occurred during questionnaire compilation.</TD><TD></TD></TR>
<TR><TD>WB0097</TD><TD>Only the following characters may be used in the questionnaire title: A..Z a..z 0..9 ( ) \ / _ - and space.</TD><TD></TD></TR>
<TR><TD>WB0098</TD><TD>Size of questionnaire is approximately {0:0.##}MB and is too big to work correctly with Survey Solutions. Try to reduce amount of data until it will be at least less than {1}MB.</TD><TD></TD></TR>
<TR><TD>WB0100</TD><TD>Max number of answers for roster size question cannot be greater than {0}.</TD><TD></TD></TR>
<TR><TD>WB0101</TD><TD>Sub-section can have no more than {0} parent sub-sections.</TD><TD></TD></TR>
<TR><TD>WB0102</TD><TD>Following questionnaire items (question/group/static text/etc.) use same internal ID. Please delete one of them.</TD><TD></TD></TR>
<TR><TD>WB0103</TD><TD>Roster which is the source of the link is a roster, not a subsection.</TD><TD></TD></TR>
<TR><TD>WB0104</TD><TD>Validation condition #{0} is too long. It should be no longer than {1} characters.</TD><TD></TD></TR>
<TR><TD>WB0105</TD><TD>Validation error message #{0} is too long. It should be no longer than {1} characters.</TD><TD></TD></TR>
<TR><TD>WB0106</TD><TD>Validation condition #{0} is empty.</TD><TD></TD></TR>
<TR><TD>WB0107</TD><TD>Validation error message #{0} is empty.</TD><TD></TD></TR>
<TR><TD>WB0108</TD><TD>Linked question filter expression is longer than {0} characters.</TD><TD></TD></TR>
<TR><TD>WB0109</TD><TD>The question cannot be used in its own filter expression.</TD><TD></TD></TR>
<TR><TD>WB0110</TD><TD>Filter expression has a syntax error.</TD><TD></TD></TR>
<TR><TD>WB0111</TD><TD>Attachment cannot be empty</TD><TD></TD></TR>
<TR><TD>WB0112</TD><TD>Variable has invalid name.</TD><TD></TD></TR>
<TR><TD>WB0113</TD><TD>Variable cannot have empty name.</TD><TD></TD></TR>
<TR><TD>WB0114</TD><TD>Categorical question supports only integer values in range from {0} to {1}</TD><TD></TD></TR>
<TR><TD>WB0115</TD><TD>Fixed rosters only support integer values.</TD><TD></TD></TR>
<TR><TD>WB0116</TD><TD>Linked question references a list question from wrong level.</TD><TD></TD></TR>
<TR><TD>WB0117</TD><TD><STRIKE>Linked to list question doesn't support categories filter</STRIKE></TD><TD>Filters are now applicable to questions linked to lists as well. You should not be getting this error anymore.</TD></TR>
<TR><TD>WB0118</TD><TD>Expression referencing forbidden DateTime properties: {0}, {1}, {2}. Consider using current time question instead.</TD><TD></TD></TR>
<TR><TD>WB0119</TD><TD>Questionnaire's title can't have more than {0} symbols.</TD><TD></TD></TR>
<TR><TD>WB0120</TD><TD>The titles of sections and sub-sections cannot be empty or contain whitespace only.</TD><TD></TD></TR>
<TR><TD>WB0121</TD><TD>This element's name or ID shouldn't be longer than {0} characters.</TD><TD></TD></TR>
<TR><TD>WB0122</TD><TD>Valid variable or roster ID name should contain only letters, digits and underscore character</TD><TD></TD></TR>
<TR><TD>WB0123</TD><TD>Variable name or roster ID shouldn't start with digit or underscore</TD><TD></TD></TR>
<TR><TD>WB0124</TD><TD>Variable name or roster ID shouldn't end with underscore</TD><TD></TD></TR>
<TR><TD>WB0125</TD><TD>Variable name or roster ID shouldn't have two and more consecutive underscore characters.</TD><TD></TD></TR>
<TR><TD>WB0126</TD><TD>Variable name or roster ID should be unique in questionnaire's scope.</TD><TD></TD></TR>
<TR><TD>WB0127</TD><TD>There is at least one duplicate of "Title" and "Parent Value" pairs. The list should not contain any duplicates.</TD><TD></TD></TR>
<TR><TD>WB0128</TD><TD>Number of decimal places is not in range from {0} to {1}.</TD><TD></TD></TR>
<TR><TD>WB0129</TD><TD>Category title is empty or too long. Title's length should be in range from {0} to {1} characters.</TD><TD></TD></TR>
<TR><TD>WB0130</TD><TD>You cannot use child entities in enablement condition for sections, subsection and rosters.</TD><TD></TD></TR>
<TR><TD>WB0131</TD><TD>Special values support only integer values in range from {0} to {1}.</TD><TD></TD></TR>
<TR><TD>WB0132</TD><TD>Special value title is empty or too long. Title's length should be in range from {0} to {1} characters.</TD><TD></TD></TR>
<TR><TD>WB0133</TD><TD>Special values must be unique.</TD><TD></TD></TR>
<TR><TD>WB0134</TD><TD>Contains more than {0} special values.</TD><TD></TD></TR>
<TR><TD>WB0135</TD><TD>Question contains a special value, which is too large and can't be used in this question since it determines the size of a roster.</TD><TD></TD></TR>
<TR><TD>WB0136</TD><TD>Question has special value(s) with empty value.</TD><TD></TD></TR>
<TR><TD>WB0137</TD><TD>Special values titles must be unique.</TD><TD></TD></TR>
<TR><TD>WB0200</TD><TD>Large number of rosters is created. Exporting this structures into data files might be problematic. Consider reducing number of rosters.</TD><TD></TD></TR>
<TR><TD>WB0201</TD><TD>Section or Roster contains more than {0} questions, consider splitting into sub-sections.</TD><TD></TD></TR>
<TR><TD>WB0202</TD><TD>Section contains no questions. Consider removing the empty section.</TD><TD></TD></TR>
<TR><TD>WB0203</TD><TD>Roster group contains only one question. Consider grouping with other rosters. For fixed roster, consider presenting as a set of independent questions.</TD><TD></TD></TR>
<TR><TD>WB0204</TD><TD>Roster is empty. Remove it if it is not needed.</TD><TD></TD></TR>
<TR><TD>WB0205</TD><TD>Questionnaire has more than {0} questions. It might be difficult to administer it.</TD><TD></TD></TR>
<TR><TD>WB0206</TD><TD>Questionnaire contains more than {0} questions but only one or two sections. Group questions into sections to simplify navigation and improve performance.</TD><TD></TD></TR>
<TR><TD>WB0207</TD><TD>Fixed roster contains {0} or less items. Consider using sub-sections and a series of questions. Rosters complicate structure of exported data.</TD><TD></TD></TR>
<TR><TD>WB0208</TD><TD>More than {0}% of questions contain no validation conditions. Add validation conditions to improve data quality.</TD><TD></TD></TR>
<TR><TD>WB0209</TD><TD>Enabling condition is long. It might be possible to have shorter, more readable conditions with built-in functions (i.e., InList()).</TD><TD></TD></TR>
<TR><TD>WB0210</TD><TD>Single-choice question has too many categories, consider changing to combo box.</TD><TD></TD></TR>
<TR><TD>WB0211</TD><TD>Questionnaire contains no GPS questions. Consider adding a GPS question.</TD><TD></TD></TR>
<TR><TD>WB0212</TD><TD>Validation condition #{0} is long. It might be possible to have shorter, more readable conditions with built-in functions (i.e., InList()).</TD><TD></TD></TR>
<TR><TD>WB0213</TD><TD>Attachment size is more than {0}Mb</TD><TD></TD></TR>
<TR><TD>WB0214</TD><TD>Total size of attachments is more than {0}Mb</TD><TD></TD></TR>
<TR><TD>WB0215</TD><TD>Questionnaire contains unused attachments</TD><TD></TD></TR>
<TR><TD>WB0216</TD><TD>No identifying questions are defined. Define at least one identifying question.</TD><TD></TD></TR>
<TR><TD>WB0217</TD><TD>Variable label is too long (more than {0} chars) and will be truncated in SPSS file export.</TD><TD></TD></TR>
<TR><TD>WB0218</TD><TD>Consecutive questions contain identical enablement conditions. Consider placing in a sub-section and assign condition to the sub-section.</TD><TD></TD></TR>
<TR><TD>WB0219</TD><TD>Multiple consecutive unconditional single-select question with {0} categories. Consider one multiple choice question.</TD><TD></TD></TR>
<TR><TD>WB0220</TD><TD>Using @{0} with a multi-choice roster may be unstable. Consider using @{1} instead.</TD><TD></TD></TR>
<TR><TD>WB0221</TD><TD>No current time question was found. Consider recording the date of interview in your questionnaire.</TD><TD></TD></TR>
<TR><TD>WB0222</TD><TD>Single-select question is marked as identifying. Consider using a text question.</TD><TD></TD></TR>
<TR><TD>WB0223</TD><TD>Section contains less than five questions. Consider joining with other sections.</TD><TD></TD></TR>
<TR><TD>WB0224</TD><TD>Too many sub-sections at one level. Consider hierarchical layout.</TD><TD></TD></TR>
<TR><TD>WB0225</TD><TD>Drop-down menu (combo box) contains less than 10 elements. Consider switching to a standard single choice representation.</TD><TD></TD></TR>
<TR><TD>WB0226</TD><TD>Cascading combo box questions have the same parent question.</TD><TD></TD></TR>
<TR><TD>WB0227</TD><TD>Questionnaire hasn’t been reviewed. Consider sharing it with another user for feedback.</TD><TD></TD></TR>
<TR><TD>WB0228</TD><TD>Categorical question has nonconsecutive categories codes. Check for omitted categories.</TD><TD></TD></TR>
<TR><TD>WB0229</TD><TD>Supervisor question is used in validation. Check the condition accounts for supervisor non-response or instruct supervisors to always respond.</TD><TD></TD></TR>
<TR><TD>WB0230</TD><TD>Nonconsecutive cascade questions. Consider laying the cascading questions one after another.</TD><TD></TD></TR>
<TR><TD>WB0231</TD><TD>Multi select question contains too many (>{0}) categories. It will be difficult to navigate on tablets. Consider splitting into two multichoice questions if possible.</TD><TD></TD></TR>
<TR><TD>WB0232</TD><TD>Five or more questions have the same enabling condition. Place questions in a group and apply single enabling condition to a group to improve questionnaire efficiency.</TD><TD></TD></TR>
<TR><TD>WB0233</TD><TD>Nested roster with three or more degrees of nesting. Try avoiding such complex structures that might lead to problems in data collection.</TD><TD></TD></TR>
<TR><TD>WB0234</TD><TD>Subordinate levels in a nested roster are based on the same parent question. Try revising, such rosters might lead to problems in data collection.</TD><TD></TD></TR>
<TR><TD>WB0235</TD><TD>The same long enablement condition is used in several questions. You might want to create a Boolean variable to simplify the code management.</TD><TD></TD></TR>
<TR><TD>WB0236</TD><TD>The same long validation condition is used in several questions. You might want to create a Boolean variable to simplify the code management.</TD><TD></TD></TR>
<TR><TD>WB0237</TD><TD>& is used in expression. Make sure you understand the difference between & and && operators. In most cases, use &&.</TD><TD></TD></TR>
<TR><TD>WB0238</TD><TD>| is used in expression. Make sure you understand the difference between | and || operators. In most cases, use ||.</TD><TD></TD></TR>
<TR><TD>WB0250</TD><TD>Validation condition #{0} refers to a future question. Consider reversing the order.</TD><TD></TD></TR>
<TR><TD>WB0251</TD><TD>Enablement condition refers to a future question. Consider reversing the order.</TD><TD></TD></TR>
<TR><TD>WB0253</TD><TD>Too few variable labels are defined. Add variable labels to improve the usability of exported data and to provide input into metadata for Data Documentation Initiative (DDI) format.</TD><TD></TD></TR>
<TR><TD>WB0254</TD><TD>Use function IsValidEmail() to validate email address.</TD><TD></TD></TR>
<TR><TD>WB0255</TD><TD>Question is too short. This might be an incomplete question.</TD><TD></TD></TR>
<TR><TD>WB0256</TD><TD>Translation name is invalid</TD><TD></TD></TR>
<TR><TD>WB0257</TD><TD>Translation has empty content</TD><TD></TD></TR>
<TR><TD>WB0258</TD><TD>Translations have duplicate names</TD><TD></TD></TR>
<TR><TD>WB0259</TD><TD>Question title is too long. It should be no longer than {0} characters.</TD><TD></TD></TR>
<TR><TD>WB0260</TD><TD>Title is too long. It should be no longer than {0} characters.</TD><TD></TD></TR>
<TR><TD>WB0261</TD><TD>Questionnaire contains rosters with total number of roster instances {0} exceeding the system limits {1}</TD><TD></TD></TR>
<TR><TD>WB0262</TD><TD>Roster has reached size limit. Reduce roster size or decrease nesting.</TD><TD></TD></TR>
<TR><TD>WB0263</TD><TD>First section cannot have enabling condition.</TD><TD></TD></TR>
<TR><TD>WB0264</TD><TD>You have a GPS question. Tablets must support geolocation to be used with this questionnaire.</TD><TD></TD></TR>
<TR><TD>WB0265</TD><TD>More than {0}% of questions are text questions. Text questions are difficult to answer on tablets. Consider using single- or multi-choice questions instead.</TD><TD></TD></TR>
<TR><TD>WB0266</TD><TD>Duplicate questions. (Questions have the same title.)</TD><TD>This may or may not be an error. Sometimes questions can be understood in context, such as the "Other (specify)" requirements in categorical questions usually result in "Please specify the 'other'" in the following question. If you don't like the warning, make the questions distinct by clarifying the question "Please specify the other food type" or "Please specify the other source of fertilizer".</TD></TR>
<TR><TD>WB0267</TD><TD>You have a barcode question. Tablets must support autofocus to be used with this questionnaire.</TD><TD></TD></TR>
<TR><TD>WB0268</TD><TD>You try to use substitution for unsupported entity.</TD><TD></TD></TR>
<TR><TD>WB0269</TD><TD>Question cannot have empty title.</TD><TD></TD></TR>
<TR><TD>WB0270</TD><TD>Section should not contain more than {0} questions.</TD><TD>Move some of the questions to a different section</TD></TR>
<TR><TD>WB0271</TD><TD>Macro cannot be empty.</TD><TD></TD></TR>
<TR><TD>WB0272</TD><TD>Enabling condition is using forbidden type.</TD><TD><A href="/syntax-guide/cslanguage/forbidden-type/">explanation</A></TD></TR>
<TR><TD>WB0273</TD><TD>Validation condition is using forbidden type.</TD><TD><A href="/syntax-guide/cslanguage/forbidden-type/">explanation</A></TD></TR>
<TR><TD>WB0274</TD><TD>Variable is using forbidden type.</TD><TD><A href="/syntax-guide/cslanguage/forbidden-type/">explanation</A></TD></TR>
<TR><TD>WB0275</TD><TD>Filter expression is using forbidden type.</TD><TD><A href="/syntax-guide/cslanguage/forbidden-type/">explanation</A></TD></TR>
<TR><TD>WB0276</TD><TD>@rowname variable is not supported anymore.</TD><TD></TD></TR>
<TR><TD>WB0277</TD><TD>Questionnaire title shouldn't have two and more consecutive underscore characters.</TD><TD></TD></TR>
<TR><TD>WB0278</TD><TD>Plain mode allowed only for rosters with no more than {0} elements.</TD><TD></TD></TR>
<TR><TD>WB0279</TD><TD>Plain mode doesn't allow the use of nested rosters.</TD><TD></TD></TR>
<TR><TD>WB0280</TD><TD>Text contains a link to an unknown question, subsection, roster or pdf attachment.</TD><TD></TD></TR>
<TR><TD>WB0281</TD><TD>Total number of elements ({0}) exceeded system limit ({1}). Consider reducing the number of questions, static texts, variables, or items in fixed rosters.</TD><TD></TD></TR>
<TR><TD>WB0282</TD><TD>Identifying question cannot be placed inside section with enabling condition.</TD><TD></TD></TR>
<TR><TD>WB0282</TD><TD>Table roster mode doesn't allow to use nested groups and rosters.</TD><TD></TD></TR>
<TR><TD>WB0283</TD><TD>Table mode allowed only for rosters with no more than {0} questions.</TD><TD></TD></TR>
<TR><TD>WB0284</TD><TD>Table roster doesn't allow to use supervisor questions.</TD><TD></TD></TR>
<TR><TD>WB0285</TD><TD>Table roster allows to use only text and numeric questions.</TD><TD></TD></TR>
<TR><TD>WB0286</TD><TD>Table or Matrix roster mode works only in web survey, on tablets it will be 'sub section' mode.</TD><TD></TD></TR>
<TR><TD>WB0287</TD><TD>Questions in a table roster may not contain any substitutions in text.</TD><TD></TD></TR>
<TR><TD>WB0288</TD><TD>Label {1} for code {0} is a number different from the value being labeled.</TD><TD></TD></TR>
<TR><TD>WB0289</TD><TD>Name of categories shouldn't be longer than {0} characters.</TD><TD></TD></TR>
<TR><TD>WB0290</TD><TD>Name of categories shouldn't end with underscore</TD><TD></TD></TR>
<TR><TD>WB0291</TD><TD>Name of categories shouldn't have two and more consecutive underscore characters.</TD><TD></TD></TR>
<TR><TD>WB0292</TD><TD>Name of categories should not be empty.</TD><TD></TD></TR>
<TR><TD>WB0293</TD><TD>Name of categories cannot be a reserved word.</TD><TD></TD></TR>
<TR><TD>WB0294</TD><TD>Name of categories should contain only letters, digits and underscore character</TD><TD></TD></TR>
<TR><TD>WB0295</TD><TD>Name of categories shouldn't start with digit or underscore</TD><TD></TD></TR>
<TR><TD>WB0296</TD><TD>Questions have the same categories. Use reusable categories instead</TD><TD></TD></TR>
<TR><TD>WB0297</TD><TD>Matrix roster allows to use only simple categorical questions: combobox, cascading or yes/no modes are not allowed.</TD><TD></TD></TR>
<TR><TD>WB0298</TD><TD>Matrix mode allowed only for rosters with no more than {0} question(s).</TD><TD></TD></TR>
<TR><TD>WB0299</TD><TD>Matrix roster has to contain no supervisor or identifying questions.</TD><TD></TD></TR>
<TR><TD>WB0300</TD><TD>Question in Matrix roster must not contain %rostertitle% substitution.</TD><TD></TD></TR>
<TR><TD>WB0301</TD><TD>Matrix roster has to contain no linked questions.</TD><TD></TD></TR>
<TR><TD>WB0302</TD><TD>Substitution cannot reference items from same roster level.</TD><TD></TD></TR>
<TR><TD>WB0303</TD><TD>Matrix roster cannot have custom roster title</TD><TD></TD></TR>
<TR><TD>WB0304</TD><TD>Table roster cannot have custom roster title</TD><TD></TD></TR>
<TR><TD>WB0305</TD><TD>Reusable category cannot have row with same Id and ParentId values</TD><TD></TD></TR>
<TR><TD>WB0306</TD><TD>Reusable category cannot have row with same ParentId and Text values</TD><TD></TD></TR>
<TR><TD>WB0307</TD><TD>Question references non-existent reusable category.</TD><TD></TD></TR>
<TR><TD>WB0308</TD><TD>Identifying questions can have only allowed types (Text, Numeric, DateTime, GpsCoordinates, SingleOption)</TD><TD></TD></TR>
<TR><TD>WB0309</TD><TD>Questions in Сover section must have variable label.</TD><TD></TD></TR>
<TR><TD>WB0390</TD><TD>Only string variable type can be used as source of the attachment name</TD><TD></TD></TR>
<TR><TD>WB0391</TD><TD>Static text can not reference variable that has deeper roster scope then itself</TD><TD></TD></TR>

</TABLE>
