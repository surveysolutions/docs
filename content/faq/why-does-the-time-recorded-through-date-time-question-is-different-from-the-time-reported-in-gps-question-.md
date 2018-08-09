+++
title = "Why does the time recorded through date/time question is different from the time reported in GPS question? "
keywords = [""]
date = 2016-09-09T16:25:07Z
lastmod = 2016-09-09T16:25:07Z
aliases = ["/customer/portal/articles/2565166-why-does-the-time-recorded-through-date-time-question-is-different-from-the-time-reported-in-gps-question-"]

+++

An Android tablet has its internal clock. That clock is set based on
specifications of the tablet manufacturer and on the user settings. For
example, the tablet clock can be synchronized to the network time, or
can be set by tablet users manually.

The time reported in GPS question comes from the GPS signal provider. We
recommend acquiring the GPS signal through satellites disabling the wifi
coordinate services. However, geographic coordinates might be acquired
through wifi. Survey Solutions records satellite time for the GPS
coordinates received through satellites. When coordinates come from wifi
or 3G, the time of the wifi router will be recorded as a time when GPS
coordinate was acquired.

In general, we cannot guarantee that the time recorded through data/time
question will coincide with the time recorded while getting a GPS
signal.
