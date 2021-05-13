+++
title = "Installer Command Line Parameters"
keywords = ["installer", "parameters"]
date = 2020-05-11T00:00:00Z
lastmod = 2020-05-11T00:00:00Z


+++

Survey Solutions installer may be launched with command line parameters.

<TABLE class="table table-striped table-hover">
<TR><TH bgcolor="Orange">Parameter</TH><TH bgcolor="Orange">Meaning</TH><TH bgcolor="Orange">Example</TH><TH bgcolor="Orange">Default</TH></TR>

<TR>
  <TD><TT>Siteport</TT></TD>
  <TD>port number on which the site shall be installed in IIS</TD>
  <TD>8080</TD>
  <TD>9700</TD>
</TR>

<TR>
  <TD><TT>Connserver</TT></TD>
  <TD>part of the DB connection string identifying the address of the database server</TD>
  <TD>data.warehouse.com</TD>
  <TD>127.0.0.1</TD>
</TR>

<TR>
  <TD><TT>Connport</TT></TD>
  <TD>part of the DB connection string identifying the port of the database server</TD>
  <TD>443</TD>
  <TD>5432</TD>
</TR>

<TR>
  <TD><TT>Connusername</TT></TD>
  <TD>user name for connection to the DB</TD>
  <TD>johnsmith</TD>
  <TD>postgres</TD>
</TR>

<TR>
  <TD><TT>Connpassword</TT></TD>
  <TD>password for connection to the DB</TD>
  <TD>MyPassword911</TD>
  <TD></TD>
</TR>

<TR>
  <TD><TT>Installfolder</TT></TD>
  <TD>full installation path where the Survey Solutions server should be installed</TD>
  <TD>C:\World Bank\Survey Solutions</TD>
  <TD>C:\Survey Solutions</TD>
</TR>

</TABLE>
Additionally, specify <TT><B>/s</B></TT> for a silent install.
<BR><BR>

#### Example:

Install to directory `D:\SuSo\` silently and bind Survey Solutions site to port `8080` in IIS:

```

SurveySolutions.exe /s Installfolder=D:\SuSo Siteport=8080

```
