+++
title = "Restricted user accounts"
keywords = [""]
date = 2024-01-30T10:10:10Z
lastmod = 2024-01-30T10:10:10Z
+++

A user account can be set as ***restricted***, which means the user holding such an account is restricted from changing its properties:

- password, except the cases when the password is:

  - initially assigned by a user creating the account, or 
  - subsequently reset by a different user or via the [support tool](/headquarters/config/support-tool/);

- [two-factor authentification](/headquarters/accounts/two-factor-authentication/) settings;
- [token authentication](/headquarters/accounts/token-based-authentication/) settings;
- associated user details: full name, contact phone number, and email address.

When an account is restricted, the corresponding message "*This account is restricted*" can be seen by the user when she selects `Manage account` menu item.

The restriction is applicable to any user role and is given a priority over the "*Enable profile editing*" setting in the workspace settings.

User account can not be made restricted from the web-interface of the Survey Solutions software. To make an account restricted it must be mentioned in a specific setting of the application configuration file: `appsettings.production.ini`. In particular, a section titled `AccountManagement` must be added (if doesn't exist already), and accounts that should be restricted must be enumerated there (starting with 0 and have no gaps in enumeration), like the following example shows:

```
[AccountManagement]
restrictedUser:0="Headquarters1"
restrictedUser:1="Supervisor1"
```

The settings file must be saved, and the changes will take effect after the next server restart.

Restricted users can still see the properties that they cannot change - full name, phone number, email address, presence of 2FA, but they cannot see the properties which are secret: the current password, account token, and the 2FA backup keys.

The support tool can be used to reset the password or 2FA of any user, regardless of whether the corresponding account was marked as restricted.