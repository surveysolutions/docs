insheet using "paradata.tab", tab case names
label variable interview__id `"Unique 32-character long identifier of the interview"'
label variable order `"Sequential event number within each interview"'
label variable event `"Type of event happened"'
label variable responsible `"Login name of the person who initiated the event"'
label define role 0 `"<UNKNOWN ROLE>"' 1 `"Interviewer"' 2 `"Supervisor"' 3 `"Headquarter"' 4 `"Administrator"' 5 `"API User"' 
label values role role
label variable role `"System role of the person who initiated the event"'
label variable timestamp_utc `"Date and time when the event happened"'
label variable tz_offset `"Timezone offset relative to UTC"'
label variable parameters `"Event-specific parameters"'

