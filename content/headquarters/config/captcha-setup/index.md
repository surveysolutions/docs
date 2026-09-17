+++
title = "CAPTCHA Setup"
keywords = ["configuration", "fraud protection", "fraud defense", "bot protection", "captcha", "capcha"]
date = 2026-09-11
aliases = []
+++

A [captcha](/headquarters/accounts/captcha/) is used to safeguard the
application from brute-force attacks on user accounts and for protection of
web mode from automatic creation of interviews.

Setting up a CAPTCHA is one of the steps of
[post installation configuration](/headquarters/config/server-installation/#post-installation-configuration)
of a Survey Solutions server.

Survey Solutions may utilize a built-in (hosted) implementation of captcha
(default) or an external reCAPTCHA provided by Google (to be configured as
per instructions below).

To take advantage of the more secure reCAPTCHA implementation by Google, you
need to set it up in the Google reCAPTCHA admin and record the 2 issued keys
into your configuration file.

- Navigate to [creation page](https://www.google.com/recaptcha/admin/create)
to register a new captcha and log in with your Google account. Note that
clicking on the ℹ️-icons will give you helpful hints on how to fill out that form.
- Specify a name for your CAPTCHA to distinguish it from other ones you may
have. This name is not used by Survey Solutions and is not visible to your
site's visitors.
- Select whether you want to register v2 (challenge) or v3 (score-based) type
of reCAPTCHA.
- Specify your public DNS name that is configured in Survey Solutions `BaseUrl`
property for the site name. Do not include the protocol ("*https://*") or port
(such as "*:443*", or "*:9700*") in this field. Note that a reCAPTCHA registered
for a domain will also be registered for its subdomains.
- Additional settings and analytics on the use of the created reCAPTCHA is
available via the Google Cloud platform.


After you click the `Submit` button you will see a page where you can copy
the necessary *site key* and *secret key*. Then add the following content
into your `appsettings.Production.ini` file:


##### For reCAPTCHA v2:

``` INI
[Captcha]
CaptchaType=Recaptcha
SecretKey=%Your secret key%
SiteKey=%Your site key%
Version=v2
```

##### For reCAPTCHA v3:

``` INI
[Captcha]
CaptchaType=Recaptcha
SecretKey=%Your secret key%
SiteKey=%Your site key%
Version=v3
"RecaptchaV3MinimumScore": 0.5
```

Note that the parameter `CaptchaType` can be either of the following:
`None`, `Recaptcha` (this is reCAPTCHA v2), `RecaptchaV3`, `Hosted`.

For reCAPTCHA v3 adjust the parameter `RecaptchaV3MinimumScore` to a value
between `0.00` and `1.00`. Values closer to `1` indicate confidence of user
being a human, while score values closer to `0` indicate confidence of user
being a bot. False detections are possible. You may need to monitor site
traffic data and revise this parameter to optimize.


##### More information

See:

- [CAPTCHA](/headquarters/accounts/captcha/) - description of what a CAPTCHA
may look like for a user

- [Autolock](/headquarters/accounts/autolock/) - description of accounts
autolocking.

- [reCAPTCHA v3](https://developers.google.com/recaptcha/docs/v3) - developer's
documentation at Google's site.

- [reCAPTCHA v2](https://developers.google.com/recaptcha/docs/display) -
developer's documentation at Google's site.
