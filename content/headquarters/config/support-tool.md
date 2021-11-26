+++
title = "Support tool"
keywords = ["support", "troubleshooting"]
date = 2021-11-25T11:11:11Z
lastmod = 2021-11-25T11:11:11Z
+++

Survey Solutions comes with a built-in support tool that can be used in special situations:

- where an action needs to be taken programmatically;
- where an action may not be taken through the web interface.

The support tool is being called via a command line (while being in the directory where Survey Solutions is installed), we type:
```
WB.UI.Headquarters.exe manage ...
```

followed by one of the following commands:
```
version
users
workspaces
migration
```

These commands and their subcommands and options are described below.

`version` --> Print application version information

`users` --> Manage users of Headquarters

  `create` Subcommand to create a new user account

    --role
    --password
    --username or --login
    --workspace or -w
    --email
    --supervisor
  `reset-password` Subcommand to reset password for an existing user

    --username or --login
    --password

  `disable2fa` Subcommand to disable 2-factor authentication for an existing user

    --username or --login

  `releaselock` Subcommand to release a security lock for an existing user

    --username or --login

`workspaces` --> Manage workspaces

  `add` Subcommand to add new workspace to Headquarters

    --name or -n Name of the workspace

    --title or -t Title of the workspace

  `list` Subcommand to list workspaces

`migrate` --> Migrate database to latest version

  --wait-for-db Wait for DB to be available. Default is `False`.

  --timeout Limit wait time for DB in seconds. Default is 0. Used in conjunction with `--wait-for-db` option

Users may also type: `WB.UI.Headquarters.exe -help` to obtain a quick summary of commands in the version they have installed.

### Common use

Most users will never encounter a situation where they would need to use this support tool. But when they do, most commonly the support tool needs to be used:

1. to reset the password of the server administrator if it is forgotten;
2. if the administrator's account became inaccessible due to the two-factor authentication, where the token generator became lost, stolen, damaged, or otherwise inaccessible, for example: `.\WB.UI.Headquarters.exe manage users disable2fa --login loginName`
3. in the situations where we need to release the automatic lock on login attempts when we believe that the account is no longer under a threat; for example: `.\WB.UI.Headquarters.exe manage users releaselock --login loginName`
4. to create a second administrator account;
5. to programmatically create a number of users and workspaces.
