+++
title = "Numbering in subordinate rosters during preloading"
keywords = [""]
date = 2017-02-23T09:42:36Z
lastmod = 2017-02-23T09:42:36Z
aliases = ["/customer/portal/articles/2751253-numbering-in-subordinate-rosters-during-preloading","/customer/en/portal/articles/2751253-numbering-in-subordinate-rosters-during-preloading","/customer/portal/articles/2751253","/customer/en/portal/articles/2751253","/headquarters/numbering-in-subordinate-rosters-during-preloading"]

+++

It is important to make sure that during preloading of multiple files
the subordinate records are correctly identified.  
  
The numbering depends on the kind of trigger used for determining the
size of the roster:

1.  **fixed:** the Id variable in the subordinate file should contain
    the code of the item specified in the Designer.
2.  **multiple choice:** the subordinate file should contain the codes
    of items as specified during setting up the multiple choice question
    in the Designer.
3.  **numeric**: the subordinate file should contain the items with
    sequential ids starting from zero (0);
4.  **text list**: the subordinate file should contain the items with
    sequential ids starting from one (1). Note that the text list
    question itself requires indexing of members starting with zero (0).
