const ul = document.getElementById('forum-topics');
const forumurl = 'http://forum.mysurvey.solutions/latest.json';

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

    $(document).ready(function(){
        getForumJson();
      });
      

      function getForumJson(ajaxurl){
        $.ajax({
          method: 'GET',
          url: forumurl,
          crossDomain: true,
          dataType: 'json',
          success: onSuccess,
          error: onError
        })
      }
      
      function onSuccess(jsonReturn){
      
        //clear main html
        $(ul).empty();
      
        var fadeInAmt = 1000;
      
        for(var i=0; i<jsonReturn.data.children.length; i++) {
      
          var data = jsonReturn.data.children[i].data;
          var datalink = forumurl+data.permalink;
          var title = data.title;

          let li = createNode('li'), span = createNode('span');
          span.innerHTML = `$title`;
          append(li, img);
          append(li, span);
          append(ul, li);
        }
      
      }

      //if JSON fails
      function onError(){
        $(ul).html('i failed.');
      }
