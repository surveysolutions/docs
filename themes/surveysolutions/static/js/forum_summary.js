const ul = document.getElementById('forum-topics');
const forumurl = 'https://forum.mysurvey.solutions';

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

$(document).ready(function () {
  getForumJson();
});


function getForumJson(ajaxurl) {
  $.ajax({
    method: 'GET',
    url: forumurl + '/latest.json',
    crossDomain: true,
    dataType: 'json',
    success: onSuccess,
    error: onError
  });
  $.ajax({
    method: 'GET',
    url: forumurl + '/about.json',
    crossDomain: true,
    dataType: 'json',
    success: (response) => { 
      document.getElementById('forum-topics-count').innerHTML = response.about.stats.topic_count;
    },
    error: onError
  });
}

function onSuccess(jsonReturn) {

  $(ul).empty();

  var fadeInAmt = 1000;

  const count = Math.min(jsonReturn.topic_list.topics.length, 4);
  for (var i = 0; i < count; i++) {
    var data = jsonReturn.topic_list.topics[i];
    var datalink = forumurl + "/t/" + data.slug;
    var title = data.title;

    let li = createNode('li');
    alink = createNode('a');
    alink.innerHTML = title;
    alink.title = title;
    alink.href = datalink;
    alink.className = "text-dark";
    append(li, alink);
    append(ul, li);
  }

}

function onError() {
  $(ul).html('i failed.');
}
