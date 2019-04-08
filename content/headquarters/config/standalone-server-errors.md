+++
title = "Standalone Server Errors"
keywords = ["local", "standalone", "self-hosted", "error"]
date = 2019-04-08T00:00:00Z

+++

The following errors may be encountered when working with a standalone server (local data server):


<FONT color="red">1. "Unable to import new questionnaire: Could not connect to Designer. Please check if Designer is available and try again."</FONT>

Your data server is trying to contact the Survey Solutions Designer server to import the questionnaire, but can't reach it. It is very unlikely that the Designer is not responding or is not working [read how to check here](https://support.mysurvey.solutions/faq/server-not-working/) so the problem is most likely with your network configuration. Consult your network administrator and ask him/her to trace the signal and see where it stops. Most commonly it is prevented by your Firewall software or hardware.

<FONT color="red">2. "The server is not registered with Questionnaire Designer. Please contact support for registration. IP=n1.n2.n3.n4"</FONT>

Your data server needs to be registered by a fixed IP address so that our Questionnaire Designer knows that it is ok to respond. Send a request for a new local server installation mentioning the IP address you see in the message. This step may take a couple of days, be patient.

All cloud servers that we open are automatically whitelisted in our system.

<FONT color="red">3. "New feature(s) is not supported by your installation. Please update."</FONT>

You are trying to import a questionnaire that is utilizing a feature that your installation doesn't support. (The message may also mention a specific feature). Either update your Survey Solutions installation, or re-design your questionnaire not to use the feature which is mentioned. Check the [release notes](/release-notes/) for identifying recently added features that may not be avaialble in your current installation. Keep your data server recent to prevent bugs and security problems.

On the cloud servers that our team manages this error is very unlikely as we tend to update all of these servers within days  after a new version is released. If you encounter this error on a cloud server https://*.mysurvey.solutions, and you believe   the server should be already up-to-date by this time, please contact the support team.
