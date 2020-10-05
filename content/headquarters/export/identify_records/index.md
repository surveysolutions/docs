+++
title = "How does Survey Solutions identify records and establish connections between data?"
keywords = ["export", "interview", "identifier", "identification"]
date = 2020-10-05
+++

Survey Solutions works with various surveys done in different conditions, so trying to come up with one naming scheme that would be equally suitable for all applications is a challenging task. A particular survey may come up with a numbering like 2 digits of the province code, followed by 3 digits of the district code, followed by the household id of 4 digits. Yet it is not a good identifier in the case where several surveys are conducted on the same server, or there may be repetitive visits, and other twists.

Survey Solutions protects the integrity of the data by not trusting the user to make the decisions where the integrity of data may be put at risk due to careless design. For that the program relies on a concept known as GUID (see more details [in Wikipedia](https://en.wikipedia.org/wiki/Universally_unique_identifier)).

A GUID is assigned to any interview conducted with Survey Solutions. And:

- such assignment is automatic - there is nothing that the designer or the administrator of the survey needs to do specially to make it happen.
- such assignment is automatic - there is nothing that the designer or the administrator of the survey may do to prevent it from happening.
- the assigned GUIDs are invisible to the interviewers and respondents: they never need to enter them or even know of their existence.

**Example**: In a survey of cars crossing the bridge you record (in a separate interview) for each car the following information: car type (passenger, lorry, bus, etc) and color (red/green/blue/etc).

The data may come out from Survey Solutions as:

<TABLE class="table table-striped table-hover">
  <TR><TH>interview__id<TH>car_type<TH>car_color<TH>********
  <TR><TD>4f53769053864f638d4d4a962fcbabd3<TD>bus<TD>yellow<TD>*
  <TR><TD>31ba4bb9b5414458a6886efd695d12d1<TD>passenger<TD>red<TD>*
  <TR><TD>12a369339a5748b994801df21ea20ba2<TD>truck<TD>blue<TD>*
  <TR><TD>e4710251a7974b3ca28e12a7424c1519<TD>bus<TD>white<TD>*
  <TR><TD>61fcce6fa8fd4d2c8aa57eeaf0b8ec55<TD>passenger<TD>white<TD>*
</TABLE>

The last column covered with asterisks indicates that there are also other automatically generated attributes of records, which are not relevant for this discussion.

The ***interview__id*** is a unique identifier. It is assigned to the whole interview when it is created in an unpredictable (chaotic, random) pattern and stays invariable through the existence of that interview.

If for any reason, such as publishing this dataset I needed a simpler looking ***car__id***, once the data collection is completed I could generate it with the following Stata code:

```generate long car__id = _n```

Note that the exported records are not guaranteed to be in any order. Do not assume that they are e.g. chronological.

**Example 2**: In a household survey you collect (in a separate interview) for every household the household size, and for every household member their age and sex.

The data will come out of Survey Solutions in 2 files (in fact more, but other files are system-generated diagnostics and other information not relevant for this description).

The household level (interview level, or main) file will have the following layout:

<TABLE class="table table-striped table-hover">
  <TR><TH>interview__id<TH>hhsize<TH>********
  <TR><TD>4f53769053864f638d4d4a962fcbabd3<TD>2<TD>*
  <TR><TD>31ba4bb9b5414458a6886efd695d12d1<TD>1<TD>*
  <TR><TD>12a369339a5748b994801df21ea20ba2<TD>3<TD>*
  <TR><TD>e4710251a7974b3ca28e12a7424c1519<TD>2<TD>*
  <TR><TD>61fcce6fa8fd4d2c8aa57eeaf0b8ec55<TD>1<TD>*
</TABLE>


The individual level data will come out as:
<TABLE class="table table-striped table-hover">
  <TR><TH>interview__id<TH>person__id<TH>age<TH>sex<TH>********
  <TR><TD>e0c9d430a89241fb9078f81d738f112e<TD>1<TD>43<TD>male<TD>*
  <TR><TD>e0c9d430a89241fb9078f81d738f112e<TD>2<TD>39<TD>female<TD>*
  <TR><TD>1cda4e243e76402e9bff0300fa93eaee<TD>1<TD>44<TD>male<TD>*
  <TR><TD>de18f59a31344c52a8bc3edd44098f02<TD>1<TD>52<TD>male<TD>*
  <TR><TD>de18f59a31344c52a8bc3edd44098f02<TD>2<TD>50<TD>female<TD>*
  <TR><TD>de18f59a31344c52a8bc3edd44098f02<TD>3<TD>12<TD>male<TD>*
  <TR><TD>41e3db71db7e4041a097850d517278e9<TD>1<TD>19<TD>female<TD>*
  <TR><TD>41e3db71db7e4041a097850d517278e9<TD>2<TD>1<TD>female<TD>*
  <TR><TD>93dda6f6add94a789fa24f5416a0865d<TD>1<TD>69<TD>male<TD>*
</TABLE>


Note that there are duplicate values in each of the columns: ***interview__id*** and ***person__id***. But there are never any duplicates in both columns at the same time. Thus ***interview__id*** and ***person__id*** is a joint identifier (aka [compound key](https://en.wikipedia.org/wiki/Compound_key)).

One can always create a single key from a compound key by writing together all the components, taking into account the width in digits. Such as in the above example the ID of the first person could be "*e0c9d430a89241fb9078f81d738f112e1*". In practice we would first renumber the households, such as "*e0c9d430a89241fb9078f81d738f112e*" to "*1*", "*1cda4e243e76402e9bff0300fa93eaee*" to "*2*", and only then perform concatenation.

Note that the ***interview__id*** is not an increasing value. Newer IDs may be assigned from in between the already assigned, hence one can’t be using sorting of the GUIDs to renumber them in two different export files and obtain consistent renumbering.

The described mechanism of identification automatically extends to deeper levels of data in case of nested rosters. Up to 4 IDs corresponding to roster levels may be assigned, such as in cases of:

- Building → household → person;
- Household → plot → crop → crop disposition;
- Company → department → employee;
- Shop → isle → item, etc

Since the GUID is automatically generated and always utilized for establishing the links between different data levels, effectively the survey questionnaire doesn’t have to define any identifying questions (such as province, district, etc) for this purpose. Survey Solutions will automatically utilize the interview ID for this purpose instead. (Yet those fields are useful for locating the targeted household, hence a dedicated "**Cover page**" section is automatically added to every questionnaire).

Note also that the exact numbering of the persons in this example (and correspondingly other units in other surveys) may depend on what triggers the size of the roster. Gaps are possible in these IDs if the trigger question is e.g. a multiselect question (for the ID in that case is the code of only selected options), or a fixed roster (if the original numeration was not consecutive), or a text-list question (if deletions occurred from the beginning or the middle of the list). For any roster, the gaps in numbering are possible, if enabling conditions were specified to enable the roster records only for some of the units.

**Example 3**: In this example we consider a more complex survey, which happens in several steps: first administrative records for enterprises are consulted to determine the address of the enterprise and indicative number of employees. Then one or more interviewers are sent to the enterprise to conduct interviews with the owner (based on Questionnaire A) about the enterprise and employees (based on Questionnaire B) about their working histories. For small enterprises (<5 employees) only one employee is interviewed, for medium (6-20 employees) two are interviewed, for large (21-100) 5 are interviewed, for 100+ twenty must be interviewed. Correspondingly, after the assignments are made for Questionnaires A and B a link must be established between interviews collected in the two questionnaires. Since these are two different questionnaires, Survey Solutions doesn’t know about the connection between them, unless it is told so.

If we knew the ***interview__id*** of the enterprise interview, we could have preloaded that as a connecting information for the employees survey. But since the interview hasn’t happened yet, we can’t utilize this non-existing ID yet.

Luckily, there is a different source of identification available to us, which is ***assignment__id***. This identifier is given to every assignment and correspondingly retained as an automatic attribute in any interview resulting from that assignment. Assignment numbers start with 2 (two).

Correspondingly, our sequence of actions would be:

1. Use the administrative information to determine the address of the enterprise.
2. Create an assignment in Survey Solutions based on questionnaire *A* with address as obtained in #1 above.
3. Preserve the resulting assignment number as *G*.
4. Use the administrative information to determine the enterprise size category, and corresponding number of personal interviews, denote it as *N*.
5. Create N assignments in Survey Solutions based on questionnaire *B*. Mark each with the same addressing information as for the enterprise, a sequential number *1..N* and a hidden attribute ***h_assignment_number*** equal to *G*.

In practice the above should be implemented as a program/script and not performed manually, to avoid human errors.

After the data is collected on the enterprise and the employees, we export data from *A* and *B*, and unfold the link in the following manner: for every person in dataset *B* take her ***h_assignment_number*** value. Locate the record in *A* (main level) where **assignment__number == h_assignment_number**. There will be exactly one such record. Join the records based on this expression. Note that the same record from *A* will be utilized for multiple records in *B* (for there are multiple employees of the same enterprise).

If there are multiple surveys going on the same server, the assignment numbers in any particular survey may have gaps in numbering, such as 34, 35, 49, 50, ... Assignment numbers are assigned on the Survey Solutions server chronologically, and thus assignments with larger numbers are more recent.

This may be inconvenient for subsequent processing or publication of data. The assignments may be renumbered to eliminate gaps. And in contrast to ***interview__ids*** the ***assignment__ids*** are strictly increasing.

We use the same approach for inter-temporal linking, such as linking 2-nd quarter data with the 1-st quarter data.

FAQ
==========

**1. Why does not Survey Solutions number the interviews as simply 1,2,.... ?**

Because Survey Solutions is a distributed system with semi-autonomous nodes. This means that tablet of interviewer 1 needs to assign numbers to interviews and tablet of interviewer 2 needs to do the same without a possibility of communicating to each other (and with all other tablets) before assigning a new number to an interview.

**2. Why does not Survey Solutions number the interviews as username1, username2, username3, etc?**

This would be incompatible with multi-mode surveys, where the same interviewer may be utilizing a tablet for some interviews and directly accessing the server for others.

**3. In a panel survey I forgot to include the quarter (1,2,3,4) among the identifying variables, hence for each household I have 4 assignments with identical identification information. Is this a problem?**

A proper setup should either include a quarter identifier among the variables as the cover page, or importing the questionnaire 4 times to isolate interviews of each quarter by questionnaire name plus version. Survey Solutions will not confuse the records corresponding to different interviews even if their identification information is exactly the same, because it peeks to the ***interview__id*** variable storing a unique GUID to match the records of different levels (such as persons to households). Yet your supervisors will have no obvious guidance on what is different between the 4 interviews, and finding an interview for e.g. the second quarter will be a problem. Should this happen in practice, utilize the paradata, or the system-generated ***interview__actions*** file to determine when the interview occurred and hence to which quarter it belongs.
