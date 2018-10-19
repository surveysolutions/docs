+++
title = "Audio Question"
keywords = [""]
date = 2017-10-12T22:50:26Z
lastmod = 2017-10-12T22:50:26Z
aliases = ["/customer/portal/articles/2888456-audio-question","/customer/en/portal/articles/2888456-audio-question","/customer/portal/articles/2888456","/customer/en/portal/articles/2888456","/questionnaire-designer/audio-question"]

+++

Description 
------------

Audio question records sound using the tablet’s microphone. This can be
used in surveys where the {{< imgproc "images/825495.png" Fit "800x600" />}}recording of the
respondent’s voice may serve quality control purposes or be directly of
interest to the researchers.

  Creating a audio question 
---------------------------

In Questionnaire Designer,

1.  Click on the Question Type text box.
2.  Select Audio from the list displayed.

{{< imgproc "images/825500.png" Fit "800x600" />}} 

How an audio question works on a tablet 
----------------------------------------

To answer the question the enumerator has to:  
  
1. Tap on *Tap to record audio* button.  
​{{< imgproc "images/803590.png" Fit "800x600" />}}

2. A timer and recording status are displayed. To stop the recording,
tap on *Done*. An audio question has a 180 seconds limit.  After 180
seconds (3 min) the recording will stop as if *Done* was pressed and the
180 seconds will be saved automatically. Press on the play button to
listen to the recording.   
  
The recording can be replaced by selecting the record new button. Note
that the previous answer for this question will be lost.  
  
{{< imgproc "images/803591.png" Fit "800x600" />}}

 Export 
--------

The audio questions are exported as .m4a files in the binary data
folder, along with any .jpeg files from picture questions. Each binary
data folder represents an interview where the folder names are
automatically created interview ids.   
  
{{< imgproc "images/825516.png" Fit "800x600" />}}  
  
The .m4a file name is the question’s variable name as defined in the
Questionnaire Designer.  
  
{{< imgproc "images/825514.png" Fit "800x600" />}}  
  
In the micro data files, an answered audio question will show the name
of the .m4a under the question’s variable name.  
{{< imgproc "images/825515.png" Fit "800x600" />}}
