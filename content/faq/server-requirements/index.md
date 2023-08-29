+++
title = "Server Requirements"
keywords = [""]
date = 2019-03-15T12:00:00Z
lastmod = 2023-08-28T12:00:00Z

+++

Server requirements are periodically revised. The characteristics below are outlined for a server facilitating a survey of no more than 100,000 interviews. You may need a more powerful server if:

- your survey is larger, or
- you plan to host several surveys, or
- if you plan to collect any multimedia data (photos, audio recordings, etc), or
- there are other non-standard circumstances.

Requirements for the server depend on the use and the type of the survey. Below is a minimal configuration. Better hardware allows better performance.

**Hardware:**

- CPU: 4 physical cores, 64-bit
- RAM: 16GB
- DISK: 500GB SSD

If you are planning to purchase new hardware and wish for the server to be operational over the next few years, it is recommended to double the minimal specifications above.

**Software:**

- OS Microsoft Windows Server 2016 (or newer) / [Linux server that supports running Docker images](https://docs.docker.com/engine/install/).
- When installing on Windows, the edition must be specifically *Windows Server* (not a desktop edition like *Windows Home*, *Windows Professional*, or *Windows Enterprise*). Survey Solutions will not install on non-server editions of Windows because they are specifically restricted from such use by the manufacturer. For example, see [*Can I use Windows Pro or Enterprise like a "server" to host applications?* ](https://download.microsoft.com/download/A/5/9/A599711B-6807-4757-B38D-1EE269F2F19B/FAQs-Product-Licensing.pdf) in the product licensing FAQ.
- Install [Docker](https://www.docker.com/) if using Linux as a host OS.
- Latest version of PostgreSQL (see instructions for installing PostgreSQL in [server installation](/headquarters/config/server-installation/)).

During the installation, the Survey Solutions installer will examine the presence of necessary libraries and if any of them is missing, will attempt to download and install them from their distribution sites.

On Microsoft Windows Survey Solutions is working under Microsoft IIS which is [built-in into the OS](https://support.microsoft.com/en-us/help/224609/how-to-obtain-versions-of-internet-information-server-iis).

**Server environment:**

The server must be:

- properly cooled;
- physically secured;
- reliably powered 24/7;
- reliably connected to the network/internet with appropriate bandwidth;
- protected from the elements (flooding, fire, etc).

**See also:**

You may find other useful information and advice in:
- [Survey Solutions server](/headquarters/config/server-setup/) overview article.
- [Server installation](/headquarters/config/server-installation/) article.
- [FAQ for the IT personnel](/getting-started/faq-for-it-personnel/).
