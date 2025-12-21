// Stata code to generate 15,000 random integer numbers [0;999999]

  clear all
  version 17.0
  set seed 12345678
  set obs 15000
  generate int rowcode=_n
  generate long rnum=floor(runiform()*1e6)
  summarize rnum
  export delimited "C:\temp\rnd_table_15000.txt", replace delim(tab)
  
// end of file
