+++
title = "Configuring export to external cloud storage."
keywords = ["installation", "configuration"]
date = 2021-01-25T01:01:01Z
+++

Survey Solutions may be configured to export data to major international
cloud storage providers:

- DropBox
- Google Drive
- Microsoft OneDrive

To enable export to the external storages the following configuration
changes need to be done to the configuration file `appsettings.Production.ini`:

1. Add section:
```
[ExternalStorages:OAuth2]
RedirectUri="https://YOURSERVERNAME/data-export-storages.html"
ResponseType="code"
```
Note that you need to substitute-in your server name in the `RedirectUri`
parameter.

2. Decide which external storages you want to make available to the users of
your server (this is shared across all workspaces) from the above mentioned
list of cloud providers.

3. For each desired destination add a new section to the
`appsettings.Production.ini` file based on the following templates:

3A. DropBox:

```
[ExternalStorages:OAuth2:Dropbox]
AuthorizationUri="https://www.dropbox.com/1/oauth2/authorize"
TokenUri="https://api.dropbox.com/1/oauth2"
ClientId="......."
ClientSecret="......."
```
Note that you need to provide your own `ClientId` and `ClientSecret`
parameters that you obtain from Dropbox. Refer to the following page
for the Dropbox-specific instructions:
https://www.dropbox.com/lp/developers/reference/oauth-guide

3B. Google Drive:

```
[ExternalStorages:OAuth2:GoogleDrive]
AuthorizationUri="https://accounts.google.com/o/oauth2/v2/auth"
TokenUri="https://oauth2.googleapis.com"
ClientId="......"
ClientSecret="......"
Scope="https://www.googleapis.com/auth/drive.file"
```
Note that you need to provide your own `ClientId` and `ClientSecret`
parameters that you obtain from Google.

3C. Microsoft OneDrive:

```
AuthorizationUri="https://login.microsoftonline.com/common/oauth2/v2.0/authorize"
TokenUri="https://login.microsoftonline.com/common/oauth2/v2.0"
ClientId="......"
ClientSecret="......"
Scope="files.readwrite.all offline_access"
```

Note that you need to provide your own `ClientId` and `ClientSecret` parameters
that you obtain from Microsoft.

4. Restart the server if you've made these changes when it was started.
The next time an HQ-user or admin visits the data export page, he will
see the options to export to the cloud storages that were set up.
