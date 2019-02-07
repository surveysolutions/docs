+++
title = "Local Installation: Interviwer app cannot connect to the server over HTTPS"
keywords = [""]
date = 2018-01-09T14:48:25Z
lastmod = 2018-01-09T14:48:25Z
aliases = ["/customer/portal/articles/2914430-local-installation-interviwer-app-cannot-connect-to-the-server-over-https","/customer/en/portal/articles/2914430-local-installation-interviwer-app-cannot-connect-to-the-server-over-https","/customer/portal/articles/2914430","/customer/en/portal/articles/2914430"]

+++
{{% note %}}
**This issue has been resolved in version 18.12 (23416).**
{{% /note %}}

**Symptoms:**  
When Interviewer app is trying to connect to the Headquarters
application on a local server over the secure http (https) protocol
synchronization process fails with an error “NO CONNECTION TO THE SURVEY
SOLUTIONS SUPERVISOR. PLEASE MAKE SURE THAT THE WEBSITE IS AVAILABLE”.  
  
The Headquarters application is setup correctly, with a valid security
certificate, and in the mobile browser on the Android device users **can
successfully access** it without any errors or warnings.  
  
The Headquarters application is hosted on a server running Windows 2016.  
  
**Explanation:**  
Communication fails due to a bug in one of the external libraries used
in Interviewer app. That library breaks when trying to setup a secure
connection over http/2 - version 2 of the http protocol.  
  
The error doesn't happen on 1.1 version, neither when using unsecured
http/2.  
  
Starting from Windows 10 desktop and Windows 2016, IIS started
supporting (and using by default) http/2 and that is the reason why the
users who use this combination secured connection with the application
on Windows 2016 encounter the failed communication error.  
  
**Solution:**  
We are working on introducing changes in our code that would remedy this
error and once those changes are out, we will update this article and
consider the problem resolved.  
  
Meanwhile, workarounds to this problem include:

- Use Windows 2012.
- Use http protocol (**not recommended** for real data-collection but
    may be a quick solution during initial testing).
- Disable http/2 in Windows 2016 and use http/1.1 instead.

  
You can disable using http/2 for https connections by adding  DWORD
value with name EnableHttp2Tls to
HKEY\_LOCAL\_MACHINE\\System\\CurrentControlSet\\Services\\HTTP\\Parameters
and setting it to 0.  
  
The changes will take effect after server is restarted.  
  
**WARNING**: Serious problems might occur if you modify the registry
incorrectly so only attempt to do above if you are comfortable with
manually editing registry have a backup of the registry and/or whole
system.
