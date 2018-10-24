+++
title = "Set up an Interviewer tablet by scanning a barcode"
keywords = ["interviewer", "setup", "barcode"]
date = 2018-09-27
aliases = "/interviewer/set-up-an-interviewer-tablet-by-scanning-a-barcode"
+++

When an interviewer launches the Interviewer App for the first time she needs 
to provide the following three parameters:

*   URL of the server (synchronization point),
*   login of the interviewer (account name on that server),
*   and the password of the interviewer.

Typing in the server address may be time consuming and prone to errors, so to
simplify the process Survey Solutions permits entering this information by
scanning a barcode. This is especially useful for the ITs setting up a large
number of tablets in the office for many interviewers at the start of the
survey.

Survey Solutions displays two kinds of barcodes.

Barcodes of the first kind contain the server address only. These barcodes are 
displayed on the Interviewer App download page:

{{< imgproc "images/demo_server_page.png" Resize "x600" />}}

In the interviewer App we can scan this barcode by clicking on the barcode
icon at the login screen:

{{< imgproc "images/barcode_url_scanned.png" Resize "x600" />}}

If the Interviewer App has not been installed yet on the tablet, we can 
quickly navigate to the server page by scanning such a barcode with any
[qrcode scanner](https://play.google.com/store/search?q=qrcode%20scanner) 
that might be already installed on the tablet.

The second kind of barcodes shown by Survey Solutions contains the address of
the server and the interviewer account name and is displayed at the interviewer
profile page:

{{< imgproc "images/interviewer_profile_page.png" Resize "x400" />}}

When this barcode is scanned both server address and the interviewer account name are read in:

{{< imgproc "images/barcode_name_scanned.png" Resize "x600" />}}

Survey Solutions never places the account password into the barcode for
security reasons. But the Interviewer App will recognize one if it is included
along with the synchronization point and user account name in the qrcode. If
you want to use this during the setup of the tablets, generate your own qrcode
containing a string in the following format:
  `{"Url":"YourServerAddress","Login":"YourAccountName","Password":"YourPassword"}`
for example:
  `{"Url":"https://demo.mysurvey.solutions","Login":"SergiyInt","Password":"TestPassword"}`
  
{{< imgproc "images/barcode_full.png" Resize "x200" />}}
