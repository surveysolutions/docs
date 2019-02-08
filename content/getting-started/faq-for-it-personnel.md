+++
title = "FAQ for IT personnel"
keywords = [""]
date = 2017-07-25T21:26:54Z
lastmod = 2019-02-08T11:11:11Z
aliases = ["/customer/portal/articles/2847917-faq-for-it-personnel","/customer/en/portal/articles/2847917-faq-for-it-personnel","/customer/portal/articles/2847917","/customer/en/portal/articles/2847917"]

+++

  
*The recommended minimal hardware specifications required for Survey
Solutions to function properly for a questionnaire of about 500
questions and for the survey of about 10,000 respondents. The minimal
requirements represent the specifications for the oldest tables that can
run Survey Solutions. We advise to procure newest devices with the
latest version of Android for the projects that expect to run for two or
three years. Please refer to [google.com](http://google.com/) for the
information on the latest version of Android OS and for the list of
devices supporting this latest version.*

# 1. Server


**<span style="color:#800080;">Contact support for a consultation prior
to setup if your survey is 100,000 interviews or more, or if you are
collecting any multimedia data.</span>**  
  
**1. What are the requirements for the server?**

-   Requirements for the server depend on the use and type of the
    survey.
-   Hardware: 4 physical cores CPU, 8GB RAM and 50GB free space on SSD
    as minimum requirements.

Better hardware allows better performance. 

-   Operating system: Windows Server 2012R2

(Survey Solutions server should not be installed on MS Windows Server
2008 generation).

-   Software prerequisites that should be installed and configured prior
    to installation of Survey Solutions:
    -   Microsoft IIS, [(included in
        OS)](https://support.microsoft.com/en-us/kb/224609) and
    -   Microsoft .Net Framework 4.7.1, and
    -   PostgreSQL (version 9.4 minimal, 9.5.1 recommended for new
        installations)
-   Server environment: the server must be properly cooled, physically
    secured, and reliably powered 24/7.

**2. Is it possible to use our existing server for Survey Solutions?**

-   It depends: If the hardware requirements are met, and the software
    prerequisites are available, there might be a possibility to reuse
    the existing server.
-   Note that in that case existing services will compete with Survey
    Solutions for resources. So this solution is possible only with a
    very powerful server, or non-demanding other services.
-   The maintenance of the other software should not affect
    availability, integrity and security of Survey Solutions service.

**3. How do we configure our security software to collaborate with
Survey Solutions?**

-   Firewalls, anti-virus, and integrated security packages need to be
    configured to permit Survey Solutions server component to
    communicate with other devices exchanging data with it. Consult your
    security software manual and network administrator for specific
    instructions.
-   [Instructions for Windows Server 2012
    Firewall](https://technet.microsoft.com/en-us/library/cc753558.aspx)
-   Examples for configuring other common security software:
    -   [Avast Internet
        Security](https://www.avast.com/en-us/faq.php?article=AVKB25)
    -   [Comodo Internet
        Security](https://help.comodo.com/topic-72-1-451-4772-.html)
    -   [Kaspersky Internet
        Security](http://support.kaspersky.com/us/12101)
    -   [McAfee Internet
        Security](https://service.mcafee.com/webcenter/portal/cp/home/articleview?locale=en-US&articleId=TS100887)
    -   [Norton Internet
        Security](https://support.norton.com/sp/en/us/home/current/solutions/kb20100320035324EN_EndUserProfile_en_us)
    -   [ZoneAlarm Pro
        Firewall](http://download.zonealarm.com/bin/inclient/ZA_HelpCenter/91619.htm)
-   Other internet security packages may have similar configuration
    settings to allow a program access to network resources.

**4. We have necessary server equipment, but no specialists to install
the Survey Solutions software. Is it possible to get help?**

-   Our developers can help set up the software on your server remotely.
-   Remote access (RDP) and admin rights are required for this.

**5. We don’t have a proper server. Is a server necessary for Survey
Solutions, or can we use the software with the tablets only?**

-   A server provides essential functionality and is absolutely required
    for data collection with Survey Solutions.
-   Server’s functionality is described in the guide for headquarters’
    users, available in the documentation section of our homepage:
    [http://worldbank.org/capi](http://www.worldbank.org/capi)

**6. We don’t have a proper server. Are there any alternatives?**

-   Survey Solutions developers can set up a cloud-based server using
    major international cloud solutions providers.
-   If there are local cloud server providers matching the requirements
    for the server, they can be used as well.

**7. How many servers will we need?**

-   One server can handle hundreds of interviewers and supervisors, and
    is sufficient for a typical household survey with tens of thousands
    households.
-   In some situations multiple servers may present additional
    convenience, or even be required.

# 2. Connectivity

**8. Does the World Bank Group provide connectivity devices and cover
connection charges for Survey Solutions?**

-   No. It is up to the client to arrange proper network infrastructure,
    purchase any necessary devices, obtain SIM-cards (if necessary), and
    cover the traffic usage fees.

**9. Is it possible to ”synchronize” the server periodically or do I
need a constant connection?**

-   The interviewers and supervisors will attempt to connect to the
    server at their convenience, so the server must be reachable at all
    times when the interviewers may decide to synchronize.
-   The server connection to Internet must hence be fast and reliable.

**10. Should my server be connected to Internet?**

-   The tablets will need to send data to the server, so it must be
    visible and reachable.
-   In most cases this means the tablets and the server are
    communicating over the Internet.
-   For physical installations it is possible to send the data through a
    LAN without sending the data over the Internet, but the tablets must
    also be connected to the <span class="underline">same</span> LAN.
    Usually this means the tablets must be within the WiFi range from
    the server (up to about 20-30 meters away). Since the tablets are
    expected to synchronize frequently, this is an inconvenient and rare
    scenario.

**11. Do the tablets need a network connection during an interview?**

-   No. The interviews are conducted while the tablets are not
    connected.
-   Internet connection is not required and 3G/4G or WiFi traffic is not
    consumed during interviews.
-   Survey Solution accumulates collected data on the tablet and sends
    it to the server during synchronization.

**12. 3G/4G coverage is rather spotty in our country. Is it still
possible to use Survey Solutions?**

-   Connection can be utilized when available, but spotty coverage would
    imply more travelling to the areas where signal is available for
    synchronizations.

**13. How often should the tablets synchronize?**

-   This depends on the protocol of a particular survey.
-   For example: every day; or twice a day.
-   More frequent synchronizations allow faster turnaround.

**14. We don’t want to send our data over the air. Is it possible to
avoid using WiFi?**

-   Modern Android-based tablets usually do not have an Ethernet socket
    for wired connection and provide exclusively WiFi, and (for some
    models) 3G/4G connectivity.
-   This is the limitation of the devices, not the Survey Solutions
    software.

**15. Is the communication over the Internet secure?**

-   Survey Solutions uses password protection and authorization
    procedures to authenticate all users and communications.
-   Installing an SSL certificate for the server allows additional
    encryption of all data.
-   Our experts are available to discuss particular risks and other
    specific security concerns.

# 3. Tablets

**16. Which brand and model of tablets should I buy?**

-   The World Bank is not in the position to point to a particular brand
    and model as ”the tablet” for Survey Solutions.
-   The choice depends on multiple different characteristics and the
    decision on the model depends on the client, subject to the
    technical requirements and market availability.
-   The characteristics to evaluate are usually: performance, memory,
    storage, connectivity, screen, battery, price, convenience and
    ergonomics. Other characteristics may affect the decision if used in
    the data collection: GPS sensor, optical camera, etc.

**17. What requirements does Survey Solutions have for the tablets?**

-   See [Technical Requirements for
    Tablets](http://support.mysurvey.solutions/customer/en/portal/articles/2505822)

**18. What screen size is best for Survey Solutions?**

-   7-8-inch screens are often picked as suitable in typical operations.
    Bigger screens consume more power and reduce autonomous work.
-   The choice of the screen should depend on the convenience of use
    with the software and is usually determined experimentally.

**19. Will we need additional batteries?**

-   Modern tablets have battery life typically ranging from 6 to 12
    hours, which is usually sufficient for a day of work of an
    interviewer.
-   If the interviewers remain in a remote area without access to power
    grid for a prolonged period, they may need additional sources of
    power.
-   External batteries of various capacities can provide a quick
    solution. Other things being equal it is useful to have a charge
    indicator on a battery.
-   Charging from car batteries or portable generators may also be
    possible depending on the survey situation.

**20. Can autonomous life of a tablet be extended without any additional
equipment?**

-   It is possible to use the device settings to minimize power
    consumption:
-   adjust screen brightness;
-   switch off bluetooth;
-   switch off GPS if not used;
-   switch off WiFi when not in use, etc;

**21. Should we buy new tablets specifically for Survey Solutions or is
it possible to use our existing stock of tablets?**

-   If the tablets you have satisfy the hardware and software
    requirements, they usually can be used with the Survey Solutions.
-   Note that the capacity of the batteries found in most tablets
    reduces sharply after about 1.5-2 years. Older tablets might thus
    still be used but may require more maintenance and power backup
    options.
-   If the tablets are still in use for other purposes, other software
    installed on them will be competing for the resources (memory and
    CPU). Make sure there is sufficient storage space available to
    install and operate Survey Solutions.

**22. Should all the tablets used in the survey be identical brand and
model?**

-   No. Different tablet models may be used as long as they satisfy the
    minimal requirements. Typical situations are:
    -   Note that 3G/4G connectivity adds to the cost of the device. If
        the interviewers in a particular region are expected to be
        always covered by WiFi connectivity, for example if they are
        coming to the office daily, they might use a tablet without
        3G/4G connectivity.
    -   Another situation is when the operations are scaled up from a
        smaller survey or pilot to a full size survey, or a larger
        survey, and the original model is no longer available on the
        market. In that case a new model can be used alongside the older
        ones, as long as they are still functioning.
-   Using the same model usually simplifies the support. If there is a
    problem or an advisory, the survey administrator knows that it
    affects all the eqipment in a similar fashion.

**23. How many tablets will we need to purchase?**

-   One per interviewer. Have some spares in case a tablet gets lost,
    stolen, or damaged.
-   Number of spares depends on the particular situation. Reserving 1
    spare tablet for every 20 active interviewers is indicative.

**24. We plan to start fieldwork on May 1 and the supplier promised to
deliver the tablets by April 30. That’s ok, right?**

-   Entirely up to you, but someone will need to check and register all
    the devices, charge them, install the software, create user
    accounts, verify everything is in order and fix what’s not.
-   The training for use of the tablets as instruments of data
    collection is essential, and it is only successful if it includes
    practice with the actual devices. Thus the devices should arrive
    before the interviewers’ training.

**25. How many tablets will we need to purchase for the supervisors?**

-   None. Supervisors work with computers, not tablets.
-   If the supervisors travel with the interviewers, they should be
    equipped with a laptop to work in the field.
-   If the supervisors stay in the office, they may use a laptop or a
    desktop computer.

**26. What are the requirements for a supervisor’s computer?**

-   Windows-based computer, OS Windows 7, Windows 8, or Windows 10;
-   4GB RAM, 120GB hard drive space (SSD drive is preferable);
-   If the supervisor is working in the field, then connectivity from
    the field via 3G or 4G, (built-in, USB, or external wireless modem,
    or a similar device).

# 4. Database

**27. What database does Survey Solutions use to store data? How can we
access it from our system?**

-   Survey Solutions uses a proprietary database system to store and
    retrieve the data.
-   Data in the Survey Solutions database is not directly accessible
    from any other software the client might use for other operations.
-   The data is exported by the Survey Solutions server on demand in the
    form of a downloadable file.

**28. What is the format of the exported file? Is it suitable for our
software X?**

-   The software exports the data as an archive containing multiple
    files in tab-delimited unicode text format. Binary files (images)
    are downloaded separately. Survey Solutions documentation explains
    the particulars on how questions of different types (numeric, text,
    choice, etc) are saved in the data file.
-   Tab-delimited text format is a popular data interchange format
    suitable for import for many modern databases, spreadsheets, and
    statistical packages.
-   Consult your software operating manual on the support of
    tab-delimited (also known as tab-separated) data.

# 5. Maintenance, etc

**29. Our system is set up and running. Should we change anything?**

-   Installing updates is one of the most common tasks to be performed.
-   Install the updates and especially security updates for the server
    as recommended by the OS provider.
-   For tablets there is usually no additional benefit to install
    further OS updates if the Survey Solutions is already working
    smoothly.
-   There is a need to periodically update Survey Solutions as well. The
    most convenient time for this is in between the surveys.

**30. If we host Survey Solutions on our own server, how do we make sure
that we get the updates?**

-   Every person having an account on the Survey Solutions Designer gets
    automatic notifications regarding new releases.
-   Release notes can be viewed here: [Release
    notes](/release-notes/release-notes)
-   The updates procedure depends both on the most recent and the
    installed version of Survey Solutions.
-   The update of the server component of Survey Solutions is not
    automatic and should be undertaken by the server administrator after
    careful consideration of the new features and current data
    collection situation.

**31. Can we restrict the tablets so that no other software can be used
on the tablets?**

-   Survey Solutions generally doesn’t mind presence of other software
    as long as it is not demanding too much of the tablet’s resources.
    But in some cases the survey administrators restrict the use of
    other software, for example, to reduce wireless bills due to
    unwanted communications.
-   Depending on your choice of the tablet and desired functionality,
    this possibility may be provided by the operating system (restricted
    account), third party software, or a combination of both.

**32. If a tablet is lost or damaged before synchronizing, is there any
way to retrieve the data that has not yet been synchronized?**

-   If a tablet is lost, the unsynchronized data is lost with it.
-   If a tablet is damaged, sometimes data can be recovered from it
    (depends on the damage). For example, if only the tablet’s battery
    fails, the data could be recovered by connecting the tablet to an
    external power source, replacing the battery, or using other similar
    techniques. The World Bank does not provide technicians for this
    kind of recovery operations.
-   In some cases, if a tablet is damaged, the data cannot be recovered
    (memory damage, etc).
-   Data recovery from a damaged device is usually a costly operation.
    In practice it may be more cost-efficient to collect a number of
    replacement observations instead of trying to recover a handful of
    observations from a damaged device.
-   To minimize the risks of data loss, synchronize tablets often and
    protect the tablet (cover case, rugged jacket, carrying bag, etc).

**33. If an interviewer is assigned a new tablet during the field work
can she use the same log in information on the new tablet to retrieve
the surveys she needs to complete?**

-   Starting from version 4.1 of Survey Solutions each interviewer can
    work only on one device tracked by the system.
-   In case of tablet’s loss or damage the interviewer can switch to
    using a replacement tablet.
-   Depending on the circumstances of loss or damage the change of
    credentials may be recommended as well.
-   After logging in from the new device the interviewer has to confirm
    the switch of the device.
-   Old device is automatically excluded and no data from it will ever
    be accepted.
-   The interviewer can continue her work on the new replacement device
    from the point consistent with the last synchronization.

**34. We want to host Survey Solutions on our own server. Can we back up
it’s proprietary database?**

-   Yes. Our developers will instruct which files need to be backed up
    in your particular installation.

<!-- -->

-   You can schedule the backups of those files with your desired
    frequency.

**35. If I have to make changes to the questionnaire during the field
work, for example I want to add response options to a question, how do I
get these changes to the interviewers?**

-   Any changes to questionnaires are not automatically delivered to
    interviewers.
-   Each Survey Solutions server contains a copy of the questionnaire
    used for data collection, which is imported by the headquarter user.
-   Importing a new version of the questionnaire to the Survey Solutions
    server does not affect existing assignments for that survey, but
    defines the questionnaire that will be used for future assignments.
-   To update the questionnaire for existing assignments, they must be
    deleted and recreated usign the newly imported version of the
    questionnaire. This is only possible for blank assignments and not
    for started / completed / rejected / etc.
-   Updating questionnaire after the fieldwork has started is not
    recommended.

**36. Is the data on the Designer site shared between the users?**

-   The Designer site
    [http://solutions.worldbank.org](http://solutions.worldbank.org/) is
    intended for designing the survey questionnaires. It does not store
    or share the data collected during surveys using those
    questionnaires, but stores blank forms only.
-   Multiple users can collaborate and work on developing questionnaire
    forms together.

**37. Can we use tablets or Apple computers to design a survey using the
online designer tool?**

-   The implementation of browser functionality differs between
    different browsers and different platforms.
-   Survey Solutions Designer does not explicitly rule out the use of
    any particular browser or platform. However, the use of anything
    else beyond the current Windows versions of Google Chrome, Mozilla
    Firefox, and Microsoft Internet Explorer is not tested, not
    supported, and not guaranteed.
-   To download a compatible browser visit links below:
-   [Google
    Chrome](https://www.google.com/chrome/browser/desktop/index.html)
-   [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/)
-   [Microsoft Internet
    Explorer](http://windows.microsoft.com/en-us/internet-explorer/download-ie)

**38. What is a demo Headquarter server?**

-   Demo Headquarter server
    [http://demo.mysurvey.solutions](http://demo.wbcapi.org/) is set up
    for demonstration purposes so that anyone can try how the Survey
    Solutions program works and evaluate its functionality and
    suitability for their survey.

-   For that reason, the access to the headquarter server is not
    restricted and anyone can login there.

-   The demo server is not intended for any real data collection.

-   Read more about the use of the demo server (including login and password to access it) in [this article](/headquarters/config/demo-server).    

**39. We like your system and we want to change it (improve it, modify
it, customize it). How should we start?**

-   We do not distribute the source code of Survey Solutions.
-   We listen to the suggestions of our users. If there is a useful
    feature that is missing from our functionality, please let us know.
