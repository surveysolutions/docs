+++
title = "Set up an interviewer tablet by scanning a QR-code"
keywords = ["interviewer", "setup", "barcode"]
date = 2018-09-27
lastmod = 2022-08-26T00:00:00Z
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

Survey Solutions displays two kinds of QR-codes:

1. Server QR-codes;
2. Account QR-codes.

### 1. Server QR-codes

The URL encoded in this QR-code is actually the URL of the Interviewer App on
the server, but when setting up the application, it knows how to cut it down to
just the server address, so the same QR-code can serve two purposes:

- to download the Interviewer App;
- to enter the synchronization point to it.

These QR-codes are displayed on the Interviewer App download page. If the
Interviewer App has not been installed yet on the tablet, we can quickly
navigate to the server page by scanning such a QR-code with any
[qrcode scanner](https://play.google.com/store/search?q=qrcode%20scanner)
that might be already installed on the tablet, and then download the
Interviewer App.

{{< imgproc "images/demo_server_page.png" Resize "x600" />}}

Once the Interviewer App is installed and running, we can scan this QR-code by clicking on the QR-code icon at the login screen and scan the same code to enter the synchronization point:

{{< imgproc "images/barcode_url_scanned.png" Resize "x600" />}}


### 2. Account QR-codes

The second kind of QR-codes shown by Survey Solutions contains the address of
the server and the interviewer account name and is displayed at the interviewer
profile page:

{{< imgproc "images/interviewer_profile_page.png" Resize "x400" />}}

When this QR-code is scanned both server address and the interviewer account name are read in:

{{< imgproc "images/barcode_name_scanned.png" Resize "x600" />}}

{{< panel title="Warning:" style="warning">}}
Survey Solutions never places the account password into the QR-code for
security reasons.
{{% /panel %}}
