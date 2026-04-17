+++

title = "User Roles"
keywords = ["role", "account type", "user type"]
date = 2021-03-30T00:00:00Z
lastmod = 2026-04-17T00:00:00Z

+++

Survey Solutions supports complex survey workflows by clearly separating responsibilities across distinct user roles. Each role corresponds to a specific set of permissions and tasks, ensuring secure access control, data quality assurance, and efficient survey management throughout the survey lifecycle.

This article provides an overview of the standard user roles available in Survey Solutions and explains how they interact during survey implementation.

***

## Overview of Roles and Hierarchy

Survey Solutions uses a **role-based access model** with a hierarchical structure. Roles are designed around functional responsibilities rather than organizational titles. At a high level, surveys are administered centrally, supervised in the field, and conducted by interviewers, with supporting system and observer roles where required.

The roles available at any Survey Solutions data server are:

*   Administrator
*   Headquarters (HQ)
*   Supervisor
*   Interviewer
*   Observer
*   API User

Each role is described in detail below. Note that Survey Solutions Designer uses other user accounts (Designer role), which can't be used to log in to a data server.

***

## Administrator

The **Administrator** role has the highest level of system privileges. It is primarily intended for system setup and maintenance rather than day‑to‑day survey operations.

Administrators are responsible for:

*   Creating and managing all user accounts and assigning roles
*   Configuring authentication and security settings
*   Managing server‑level aspects of Survey Solutions

The administrator account is typically created during initial server setup and is often restricted to a small number of trusted technical staff. Administrators can create users in all other roles, including Headquarters, Supervisors, Interviewers, Observers, and API users.

See more in [Administrator role](/headquarters/accounts/survey-solutions-server-administrator/).

***

## Headquarters (HQ)

The **Headquarters** role is designed for survey managers, data managers, and statisticians who oversee survey implementation at the central level.

Headquarters users can:

*   Import and manage survey questionnaires
*   Create and manage assignments
*   Monitor survey progress through reports and dashboards
*   Review completed interviews and approve or reject them
*   Export collected data
*   Create and manage interviewer and supervisor accounts

Headquarters users play a central role in quality control and coordination. They serve as the final authority in the interview approval workflow and are responsible for ensuring that survey instruments and data outputs meet project requirements.

***

## Supervisor

The **Supervisor** role supports field-level management and quality assurance. Supervisors are responsible for overseeing a team of interviewers.

Supervisors can:

*   Assign interviews to interviewers in their team
*   Monitor interviewer workload and progress
*   Review completed interviews before they are sent to Headquarters
*   Approve or reject interviews at the supervisor level
*   Reassign interviews among interviewers within the team

Supervisors act as a critical quality checkpoint, identifying issues early and providing feedback to interviewers before interviews reach Headquarters for final review.

Supervisors may utilize [Supervisor Application](/supervisor/supervisor-app/) to manage the work of their teams autonomously (without connection to the Internet).

***

## Interviewer

The **Interviewer** role is intended for field staff who conduct interviews with respondents using the Survey Solutions [Interviewer application](/interviewer/config/download-and-install-the-interviewer-application/).

Interviewers can:

*   Receive assignments from supervisors
*   Conduct interviews and enter responses
*   Work offline and synchronize data when connectivity is available
*   Submit completed interviews for supervisor review

Interviewers cannot approve interviews, view data collected by other interviewers, or access survey management features. Their permissions are deliberately limited to protect data integrity and confidentiality.

Note that in conducting a web-based survey (CAWI) an interviewer account is still technically necessary even if no interviewers interact with the respondents directly. Read more in [web interviewing](/headquarters/cawi/web-interviewing/).
***

## Observer

The **Observer** role provides read‑only access to survey progress and collected data.

Observers can:

*   View reports and dashboards
*   Browse interview data without modifying it

This role is commonly used for stakeholders, donors, auditors, or training participants who need visibility into survey operations without participating directly in data collection or management. Observers cannot create assignments, modify interviews, or manage users.

See more in [Observer role](/headquarters/accounts/survey-solutions-server-observer/)

***

## API User

The **API User** role is intended for system‑to‑system integration.

API users:

*   Authenticate external applications or scripts
*   Access Survey Solutions data programmatically via the API

This role does not allow interactive login and is used for automation, integration with external data pipelines, or synchronization with other information systems.

See more in [Survey Solutions API](/headquarters/api/survey-solutions-api/).

***

## Role Interaction During Survey Implementation

During a typical survey workflow:

1.  Administrators configure the system and user accounts.
2.  Headquarters users prepare questionnaires and create assignments.
3.  Supervisors distribute workloads and oversee field activities.
4.  Interviewers conduct interviews and submit data.
5.  Supervisors and Headquarters perform staged review and approval.

This structured division of responsibilities enables Survey Solutions to support large‑scale surveys while maintaining data quality, accountability, and security.

***

## Conclusion

The role system in Survey Solutions is a foundational design principle that supports scalable, secure, and well‑governed survey operations. By clearly separating responsibilities between technical administrators, central managers, field supervisors, and interviewers, Survey Solutions ensures both operational efficiency and high data quality across diverse survey contexts.
