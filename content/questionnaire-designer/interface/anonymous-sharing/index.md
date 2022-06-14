+++
title = "Anonymous questionnaire access"
keywords = ["share","name","questionnaire","anonymous","public"]
date = 2022-06-14T00:00:00Z
+++

A Survey Solutions questionnaire is an electronic document that outlines the structure and the content of the survey and logical relationships between its elements, such as conditional question skips, validation rules, repetitions, etc. The work on development of a good quality questionnaire often spans several weeks if not months and involves multiple persons. Some of them will be working as objective setters, some will be implementers, some will do testing and quality control, and it can be taken as granted that there will be multiple revisions, improvements and changes over the course of its development.

When the team consists of a fixed number of known individuals such collaboration is easy to establish by sharing the questionnaire between the accounts of these individuals. But often times we find ourselves in the situations where we need to collaborate with a person whom we don’t know, or who doesn’t have an account in the system, or doesn’t want to be identified. Some typical scenarios of this kind involve:

- I am experiencing a problem with a particular question or logical condition, I want to ask a question about this in a public forum. I want to make sure the forum reader that wishes to help me can look into my questionnaire, but I don’t know yet who that person might be.
- I am collaborating with an institution or agency. I need feedback from their staff, but they are numerous and busy, and it is not clear who will be providing feedback.
- I want to share the questionnaire to an expert in the subject matter, but the expert is busy and not willing to spend time on registering in yet another online system.
- I am doing a training for a large audience, and I want them to be able to open or test the example we are discussing, but there is no possibility of sharing the questionnaire with all the participants.
- I have developed a questionnaire and want to donate it to the public.

These situations are not unique to Survey Solutions and in some part or another apply to most systems that store documents online. We realize that besides the core group that develops the document there is a larger group of people who may need to be accessing that electronic document, but who are less identifiable. A popular solution adopted by many cloud-based storage systems is link-sharing, where the document is not shared with a specific user, but rather a unique link is generated, and any person having this link may access the document via that link.

With the [release v22.06](/release-notes/version-22-06/) of the Survey Solutions this feature is also be available to the authors of the questionnaires in Survey Solutions Designer. Here is what it allows:

- Anonymous share can be activated/deactivated by the questionnaire owner only (in the collaborators dialog now called `Access` dialog).
- Generate a web-link to open questionnaire in Designer in read-only mode.
- Authenticated users with an anonymous share link can create own copy of the questionnaire; creating a copy requires the user to login to be designated an owner of that copy.
- When anonymous link sharing is activated, the owner receives a sharing notification email from the Designer, that can be edited/forwarded to other recipients to access the questionnaire.

Users accessing a questionnaire anonymously are able to do the following:

- see the structure and content of the questionnaire document;
- test the questionnaire;
- open scenarios;
- generate a PDF preview of the questionnaire, (but without the names/emails of other collaborators);

Users accessing a questionnaire anonymously are **not able** to do the following:

- modify the structure and content of the questionnaire document;
- read or add any comments;
- see the personal information (login names and emails) of other questionnaire collaborators;
- record any new scenarios;
- import the questionnaire to the data server to start a new survey.

New functionality has also been introduced into the Tester App for Android tablets to facilitate testing and feedback of the questionnaires without requiring the owner to share it with a particular account:
- Tester App may be utilized without logging in if the user wants to test the questionnaire with an anonymous link. This link can be entered manually, copied from clipboard or scanned as a QR-code.
- The Tester App remembers the recently entered questionnaire links and allows reloading them without having to reenter them.
- As a matter of fact the tester will allow you to enter the QR-code of any questionnaire (even not shared anonymously) if you have it. So if you are having hundreds of questionnaires that you work on it might be easier to scan the QR-code with the Tester App to open the questionnaire in the Tester, than to search for that title in the long list.

Here is an example QR-code that can be scanned with a Tester App to open a demo questionnaire and doesn't require the user to have an account with Survey Solutions.

<IMG src="images/e86165ec21e8461cae25a19bae6750c0.png">

### Security

Users having an anonymous share can’t make changes to your questionnaire. But make sure you understand that these links can be passed from one person to another (knowingly or unknowingly). Please share responsibly. If you know you plan to work with person `X`, ask `X` to create an account in Survey Solutions and work under this account. This allows more control and opens more possibilities than anonymous sharing of the questionnaires by links.

The sharing with anonymous share link may be activated and deactivated many times. This doesn’t change the link! So, if, for example, you shared your questionnaire on Monday with `X` and `Y`, then stopped sharing on Tuesday, and then reactivated the share on Wednesday, `X` will still be able to access your questionnaire. Switching it off completely may be undesirable, as you may still wish `Y` to continue working on it. (Both `X` and `Y` could be groups of people of course).

If you want to make sure that X no longer has access to your questionnaire, either share with `X` and `Y` personally, using named shares, and control the access individually, or (if you anticipate `X` is unwilling to create a personal account, or `X` and `Y` are groups of persons) regenerate the anonymous share link (there is a special button for this in the access dialog: `Regenerate link`). After this, share the new link with `Y` only. You will see when the link was generated in the same dialog.
