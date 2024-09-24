+++
title = "External Service Providers"
keywords = [""]
date = 2024-09-22T00:00:00Z
+++


Survey Solutions, while being an open-source product, is capable of consuming various services from external providers to deliver specific functionality to the end users.

Among these services some are free, some are charging per unit consumed, some require a payment plan, some allow for a limited use. 

{{< panel title="Warning:" style="warning">}}
The conditions of use for these services are set, and may be revised by the respective service providers. <BR> This page may present information that is not up-to-date. <BR> Always consult the corresponding service provider for any conditions of service to avoid <FONT color="maroon"><B>unexpected charges</B></font>!
{{% /panel %}}

<TABLE width=1000 class="table table-hover table-striped">

<TR align=center>
  <TH width=10%><BR>Provider<BR><BR></TH>
  <TH width=15%><BR>Service<BR><BR></TH>
  <TH><BR>Usage<BR><BR></TH>
  <TH width=25%><BR>Costing<BR><BR></TH>
  <TH width=15%><BR>Price info<BR><BR></TH>
  <TH><BR>Configurable<BR></TH>
</TR>

<TR>
  <TD>Google</TD>
  <TD>reCAPTCHA</TD>
  <TD>Optional.<BR><BR>A CAPTCHA is used to keep malicious software from engaging in abusive activities.<BR><BR>Administrator may opt for not using Google CAPTCHA and use built-in CAPTCHA instead.<BR><BR><A href="/headquarters/accounts/captcha/">documentation</A></TD>
  <TD>Free per use, unlimited use<BR><BR>Administrator must obtain the key and supply it to Survey Solutions.</TD>
  <TD><A href="https://developers.google.com/recaptcha">info</A></TD>
  <TD>Per server<BR><BR><A href="/headquarters/config/server-installation/#captcha">setup</A></TD>
<TR>

<TR>
  <TD>Google</TD>
  <TD>Mapping API</TD>
  <TD>Optional.<BR><BR>Online map report and online map dashboard will not show the map layer if not set up.</TD>
  <TD>Free per use, unlimited use. <BR><BR>Administrator must obtain the key and supply it to Survey Solutions.</TD>
  <TD><A href="https://mapsplatform.google.com/pricing/">pricing</A></TD>
  <TD>Per server<BR><BR><A href="/headquarters/config/server-installation/#googlemaps">setup</A></TD>
<TR>

<TR>
  <TD>Esri</TD>
  <TD>Online maps in web applications</TD>
  <TD>Preset.<BR><BR>Base layer is used to show a superimposed map extent or map preview.<BR><BR><A href="/headquarters/mapsmanage/map-files/#open-a-map">documentation</A> </TD>
  <TD>Unmetered use (no authentication).</TD>
  <TD></TD>
  <TD>Not configurable</TD>
<TR>

<TR>
  <TD>Esri</TD>
  <TD><A href="https://www.esri.com/en-us/arcgis/products/arcgis-location-platform/services/basemaps">Esri Basemap Services</A></TD>
  <TD>Optional.<BR><BR>Online maps are used to show map dashboard and answer geography-type questions in mobile applications for interviewers and supervisors.
Users can select their own offline maps, or pick among the 3 online maps sourced by ESRI.<BR><BR>If key is not supplied, online maps will not be selectable in the mobile applications.</TD>
  <TD>Paid use.<BR><BR>Metered use. 2,000,000 free tiles per month.<BR><BR>Administrator must obtain the key and supply it to Survey Solutions.</TD>
  <TD><A href="https://location.arcgis.com/pricing/">pricing</A><BR>(see "<I>basemap tiles</I>")<BR><BR>Esri can be contacted at <a href="mailto:Official_Statistics@esri.com">Official_Statistics@esri.com</A> to discuss licensing and obtain an access key to use within the Survey Solutions application.</TD>
  <TD>Per workspace<BR><BR><A href="/headquarters/mapsmanage/online-maps-key/">setup</A></TD>
<TR>

<TR>
  <TD>Amazon</TD>
  <TD><A href="https://aws.amazon.com/ses/">AWS SES</A> - Sending emails to respondents</TD>
  <TD>Optional.<BR><BR>Used in CAWI surveys for sending invitations or reminders to respondents.<BR><BR>If the key is not specified, this method of sending emails to respondents will not be available. Other alternatives are listed <A href="/headquarters/cawi/email-providers/">here</A>.</TD>
  <TD>Paid use.<BR><BR>Metered use. 3000 free emails within 12 months of starting using the service.<BR><BR>Administrator must obtain the key and supply it to Survey Solutions.</TD>
  <TD><A href="https://aws.amazon.com/ses/pricing/">pricing</A></TD>
  <TD>Per workspace<BR><BR><A href="/headquarters/cawi/email-providers-amazon-ses/">setup</A></TD>
<TR>

<TR>
  <TD>Twilio</TD>
  <TD><A href="https://sendgrid.com/">SendGrid</A> - Sending emails to respondents</TD>
  <TD>Optional.<BR><BR>Used in CAWI surveys for sending invitations or reminders to respondents.<BR><BR>If the key is not specified, this method of sending emails to respondents will not be available. Other alternatives are listed <A href="/headquarters/cawi/email-providers/">here</A>.</TD>
  <TD>Paid use.<BR><BR>Administrator must obtain the key and supply it to Survey Solutions.</TD>
  <TD><A href="https://sendgrid.com/">pricing plans</A></TD>
  <TD>Per workspace<BR><BR><A href="/headquarters/cawi/email-providers-sendgrid/">setup</A></TD>
<TR>

<TR>
  <TD>Amazon</TD>
  <TD><A href="https://aws.amazon.com/s3/">AWS S3</A> - Storage of binary data</TD>
  <TD>Optional.<BR><BR>Used for storage of binary data collected during surveys (images, audio).<BR><BR>If the service is not used, binary data will be stored on the file system.</TD>
  <TD>Paid use. <BR><BR>Administrator must obtain the key and supply it to Survey Solutions.</TD>
<TD><A href="https://aws.amazon.com/s3/pricing/">pricing</A></TD>
  <TD>Per server<BR><BR><A href="/headquarters/config/aws-setup/#s3-configuration">setup</A></TD>
<TR>

</TABLE>

