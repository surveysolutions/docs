+++
title = "Preparing tablets for the field"
keywords = [""]
date = 2016-12-13T18:51:09Z
lastmod = 2016-12-13T18:51:09Z
aliases = ["/customer/portal/articles/2674651-preparing-tablets-for-the-field"]
draft = true
+++

Introduction
------------

-   [Caveats](#Caveats)
-   [Initial set-up of the tablet](#InitSetUp)
-   [Install updates](#InstallUpdates)
-   [Disable automatic updates](#DisableUpdates)
-   [Download and install Interviewer](#InstallInterviewer)
-   [Install new applications (optional)](#InstallApps)
-   [Set up a restricted user account](#RestrictedUser)
-   [Set-up the Interviewer app](#InterviewerSetUp)

Step by step guide
------------------

### <span id="Caveats"></span>Caveats

While this article aims to outline a thorough, step-by-step guide of the
tablet preparation process, some adaptation may be required for each
model of tablet. Depending on the manufacturer and version of the
Android operating system, certain settings may be located in different
places than those indicated below. Consider, for example, system
updates. On Android, it is located in *Settings*, under the *System*
heading, on the *About tablet* menu screen. On Samsung devices, it is
located in *Settings*, under the *General heading*, and on the *About
device* menu screen. On Android, the setting is called *System upgrade*;
on Samsung, *Software updates*.

### <span id="InitSetUp"></span>Initial set-up of the tablet

When a tablet is first started, Android walks through the device set-up
process. Many steps are required. Other steps are optional.

For purposes of Survey Solutions, there are only two to three steps that
matter:

1.  **Select a WiFi network.** Internet will be needed for several of
    the steps in the tablet preparation process, from downloading system
    updates to setting up Interviewer.
2.  **Set up system date and time.** Without a correct date and time,
    the user will encounter two problems. First, synchronization may
    fail when the tablet time and the server time differ ty too much.
    This is a common problem with computers as well. Second, the
    Interviewer application will record the wrong time both for paradata
    and for current time type questions.
3.  **Sign in with a Google account (optional).** While not required,
    adding a Google account to the device is needed for installing apps
    from the Google Play store. The same account could be used for all
    survey devices. Doing so will device preparation simpler.

### <span id="InstallUpdates"></span>Install updates

Before deployment to the field, devices should be thoroughly updated.
That way, each device has the latest bug fixes, latest software, and
latest Android operating system. Doing so reduce the risk of software
problems, and make troubleshooting easier.,

To do this, one needs to:

1.  Connect to internet
2.  Open *Settings*
3.  Tap on *About device*
4.  Apply system updates

Each of these sub-steps is explained in further detail below.

#### Connect to the internet

To connect, first enable Wi-Fi, by opening *Settings*, opening *Wi-Fi*,
and making sure that the switch is *On*

Then, select a WiFi signal from the list of available signals, entering
a password if necessary to connect.

Upon connecting the signal, the tablet will indicate whether the WiFi
signal has internet or not. See below an example of a Wi-Fi signal
without internet access.

#### Open *Settings*

From the device's home screen, tap on the application drawer icon.

Scroll or search to find *Settings*

Tap the *Settings* icon to open.

#### Tap on *About device*

On standard Android, *About device* it is located in *Settings*, under
the *System* heading, on the *About tablet* menu screen. On Samsung
devices, it is located in *Settings*, under the *General* tab, and on
the *About device* menu screen. On Android, the setting is called
*System upgrade*; on Samsung, *Software updates*.

#### Apply system updates

After tapping on *About the device*, tap on the *System update*
(standard Android) or *Software updates* (Samsung). Doing so will
download and install any system updates. This sub-step may take time and
require a good quality internet connection.

### <span id="DisableUpdates"></span>Disable automatic updates

Automatic updates come from up to three different sources:

-   Google Play Store
-   Manufactuer-specific app store
-   System updates

This sub-section will describe how to disable automatic updates from
each source.

#### Google Play Store

From the device desktop, navigate to the application drawer.

Then, find and tap on the Play Store icon

With the Play Store open, tap on the three horizontal lines in the
search bar to open the application menu. From the menu, tap to select
Settings

Next, disable automatic updates by tapping the first entry under
*General* and selecting *Do not auto-update apps* from options in the
pop-up window. By default, Android updates applications whenever a Wi-Fi
signal is present. Disabling this default behavior prevents unwelcome
application updates in the field that may slow the internet connections
during Interviewer sync and make heavy use of limited credits for
internet use.

Then, disable notifications by unticking the boxes next to the following
settings in the Notifications section: *App updates available* and *Apps
were auto-updated*. These notifications might otherwise be seen by
interviewers, leading to confusion or demands for updates ‒ both bad
outcomes.

#### Manufacturer-specific app stores

Many manufacturers install their own app stores ‒ for example, Samsung's
Galaxy Apps ‒ as a vehicle updating pre-installed applications.

While disabling automatic updates from these app store typically follows
the same process as for the Play Store, outlined above, the process for
Samsung's Galaxy Apps is provided below as an exetended, illustrative
example.

After opening the application drawer, tap on the "Galaxy Apps" icon to
open the application

Once the app is open, Tap on *Galaxy Apps* in the upper left-hand corner
of the screen to open the the menu. Tap on Settings.

Under the *Updates* heading, tap the first item. From the pop-up menu,
select *Turn off*. Were the default option *Via Wi-Fi only* left in
place, tablets in the field might update when connecting to the team's
mobile Wi-Fi hotspot, slowing down sync and consuming scarce credits for
internet connection.

While changing update settings, disable the following notifications:
*Show updates on notifcation panel* and *Push notifications*.

#### System updates

For devices with standard Android, this will not be an issue. For
devices with manufacturer modified versions of Android installed, such
as Asus and Samsung, automatic system updates will need to be disable.

The exact steps may differ by manufacturer, but those for Samsung are
provided below:

First, return to the section of settings where system updates were
installed, as described [here](InstallUpdates). Then, untick the box
next to the *Auto update* setting.

### <span id="InstallInterviewer"></span>Download and install Interviewer

The Interviewer application is not available on the Play Store. Instead,
a version of the application is linked to each Survey Solutions server.

To download your version, open a web browser and navigate to your
server.

On the server login page, tap on the *Get Interviewer App* in the bottom
left-hand corner of the page.

If prompted with a warning, press OK to continue downloading the
application (i.e., interviewer.apk). The warning is a security measure.
In general, Android expects all applications to be downloaded from the
Play Store. In Survey Solutions' case, the Interviewer application is
distributed by each client's server rather than an app store.

After download is complete, tap to install the Interviewer application.
When prompted, override the install block by tapping on *SETTINGS*. This
is another security measure that confirms that users want to install
applications from "unknown sources"--that is, from sources other than
the Play Store or other app stores

After tapping on *SETTINGS*, tick the box nex to *Unknown sources*.
Then, press *OK* in the pop-up window to confirm the choice, and to
indicate whether this should be allowed only for this installation.

Once the installation is allowed, use the installation wizard to
continue installation. But exit the application when it asks for the
synchronization endpoint and user login credentials. These parameters
will be provided later, when the application is set up on the restricted
user account.

### <span id="InstallApps"></span>Install new applications (optional)

Tablets typically come with several applications pre-installed. But a
data collection effort may sometimes benefit from additional
applications.

Here are a few types of that have often proven helpful, and why:

-   **PDF viewer.** If written resources are stored on the tablet, then
    a document viewer is needed for viewing. Documents might include
    interviewer manuals, troubleshooting guides, or visual aids for
    interviews.
-   **File manager.** Often, tablets do not have a file manager. If this
    is the case, strongly consider installing a third-party application,
    for a few reasons. First, doing so will make getting files, such as
    backups, onto and off of the tablet much easier. Second, folders on
    the desktop, functionality that some file managers provide, may be
    convenient for storing written resources for interviewers

To add such applications, open the Play Store. Then, search for and
install relevant applications. Note: a Google account is necessary for
accessing the Play Store. Rather than create a separate account for each
device, consider creating a single account for each survey. That way,
tablet set-up and troubleshooting can be done with a single log-in.

### <span id="RestrictedUser"></span>Set up a restricted user account

This involves several steps:

-   [Navigate to settings](#FindUsers)
-   [Create a restricted users](#CreateRestricted)
-   [Define the user profile parameters](#RestrictParams)

Each step will be detailed in the sections below.

#### <span id="FindUsers"></span>Navigate to settings

First open *Settings*

Next, find the appropriate section within *Settings*. On standard
Android, this is the *Device* heading. On Samsung, this is within the
*General* tab. The exact name may differ by manufacturer and version of
the Android operating system.

Once there, tap on *Users*

#### <span id="CreateRestricted"></span>Create a restricted users

This sub-step involves creating a new account, specifying it as
restricted, and setting up a screen lock.

To create a new account, tap on *+ Add user or profile*

To make that account restricted, select *Restricted profile* from the
pop-up menu.

To lock the user out of the tablet admin account, set up a screen lock.
This is not the password that the restricted user will need to enter,
but is instead the one that the tablet administrator must enter in order
to make the type of changes being made during tablet preparation.

#### <span id="RestrictParams"></span>Define the user profile parameters

There are three sets of parameters to specify for the restricted
account:

1.  **Name of the account.** This is what will appear in the list of
    accounts on the tablet. Consider using a clear name like
    "Interviewer" that indicates who should use the account.
2.  **Settings** This determines whether GPS coordinates is available to
    the restricted account. Tick the box to enable *Location access*.
    Otherwise, the Interviewer application will not be able to record
    coordinates for GPS questions.
3.  **Allowed applications** This defines which applications installed
    on the admin account are also available on the restricted user
    account. Enable Survey Solutions Interviewer, as well as any others
    that may prove useful, such as a calculator, a file manager, and a
    document viewer. To disable an application, turn the associated
    switch control off (typically grey). To enable, turn the associated
    switch on (typically green).

### <span id="InterviewerSetUp"></span>Set-up the Interviewer app

 

As the final step in tablet preparation for the field, the Interviewer
application needs to be set up for each interviewer. At this point, the
Interviewer application has been installed, following [these
instructions](#InstallInterviewer). Also, it has been enabled on the
restricted account, as explained [here](#RestrictParams).

To finish set-up, first, log into the tablet through the restricted
account. Then, open the Interviewer application.

When opened, the application will prompt for three parameters.

-   **Synchronization endpoint.** This is the full address of your
    server. Be carefull to include *https://* at the beginning.
-   **Your login.** This is the interviewer's user name as it appears on
    the server.
-   **Password.** This is the password for the interviewer's account. Be
    careful to use the correct case for letters.

After filling these three fields, connect the tablet to the internet and
then press *Sign in*. This links this tablet to a particular server and
to a particular interviewer account.

The next time the Interviewer application is opened, the application
will be locked to a particular interviewer, and will only prompt for
his/her password.
