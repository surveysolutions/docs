+++
title = "Bulk email service providers"
keywords = [""]
date = 2019-03-31T10:10:10Z
lastmod = 2019-03-31T10:10:10Z

+++


Bulk email service providers solve the task of sending out a 
massive ammount of emails. Survey Solutions may utilize such a
service provider to deliver email invitations for CAWI surveys 
to the respondents. At the moment the following providers are supported:

- Amazon SES;
- SendGrid.

You don't have to use the above services to conduct a CAWI 
survey, but in that case (just as it was in versions prior 
to 19.04) it will be your responsibility to deliver the links
for the interviews to individual respondents. The use of the 
bulk email service providers streamlines this process.

<B><FONT color="Maroon">Use of the bulk email service 
providers may (and likely will) cost you money. It is important 
to familiarize yourself with the pricing, plans, charges and 
limits as applicable for the specific provider. These conditions
may be changed by the provider, possibly even without prior notice.
Pricing and billing conditions may depend on whether the user is a private user
or an organization. All of the billing for this service occurs between you and
the corresponding provider, the Survey Solutions developers
are not charging you for this service.</FONT></B>

The configuration of the Bulk Email Service provider occurs at
the corresponding page (accessible to the administrator only)
of the Survey Solutions Headquarters,
which contains service-specific access parameters, and at the
management console of the corresponding service.

The following parameters must be specified regardless of which
service you plan to use for sending out the emails:

- <I>Sender email address</I> - Email address of the sender that will appear in the FROM field of the incoming messages.
- <I>Reply address</I> - Email address where the replies from the invitees may be sent (default is the sender email address.)
- <I>Sender name</I> - Name of the sender that will appear in the FROM field of the incoming messages.
- <I>Sender postal address</I> - Current postal address of the sender.

The following articles will help you in configuring and entering
the parameters specific to service providers:

- [Amazon SES](/headquarters/cawi/email-providers-amazon-ses/);
- [SendGrid](/headquarters/cawi/email-providers-sendgrid/).

Once you configure the service, be sure to send a test email to make sure everything is setup correctly.

Be forewarned that the emails delivered through the bulk senders
may have non-trivial chances of being classified as spam by 
various email services used by the recipients (Gmail, Yahoo, Hotmail, Outlook, etc).