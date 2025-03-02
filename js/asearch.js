var client = algoliasearch("5IDMO489J3", "8d191f12f7e8da9f671648ae51e29570");
var index = client.initIndex("support.mysurvey.solutions");
var forumindex = client.initIndex("discourse-posts");
var enterPressed = false;

autocomplete('#aa-search-input',
	{
		hint: false,
		debug: false,
		templates: {
			dropdownMenu: '#my-custom-menu-template',
			footer: '<div class="branding float-right"><img src="/img/search-by-algolia-light-background.svg" /></div>'
		}
	},
	[
		{
			source: autocomplete.sources.hits(index, { hitsPerPage: 4 }),
			displayKey: 'title',
			name: 'docs',
			templates: {
				header: function (data, algoliaResponse) {
					var title = document.getElementById("docs-tab");
					title.innerText = "Articles " + algoliaResponse.nbHits;
				},
				suggestion: function (suggestion) {
					return '<div class="px-3 py-2 text-secondary search-result-block">'
						+ '<div class="d-flex align-items-stretch pb-1">'
						+ '<span class="h6 flex-grow-1">'
						+ suggestion._highlightResult.title.value
						+ '</span>'
						+ '<span class="section-name ' + suggestion.type
						+ ' w-30 text-uppercase w-30 p-1 align-self-start rounded text-light">'
						+ suggestion._highlightResult.section.value
						+ '</span>'
						+ '</div>'
						+ '<p class="short-summary p-0 m-0">'
						+ suggestion._highlightResult.content.value
						+ '</p>'
						+ '</div>';
				},
				empty: function () {
					var title = document.getElementById("docs-tab");
					title.innerText = "Articles (0)";
				},
			}
		},
		{
			source: autocomplete.sources.hits(forumindex, { hitsPerPage: 4 }),
			displayKey: 'title',
			name: 'forum',
			templates: {
				header: function (data, algoliaResponse) {
					var title = document.getElementById("forum-tab");
					title.innerText = "Forum topics " + algoliaResponse.nbHits;
				},
				suggestion: function (suggestion) {
					return '<div class="px-3 py-2 text-secondary search-result-block">'
						+ '<div class="d-flex align-items-stretch pb-1">'
						+ '<span class="h6 flex-grow-1">'
						+ suggestion._highlightResult.topic.title.value
						+ '</span>'
						+ '<span class="section-name forum'
						+ ' w-30 text-uppercase w-30 p-1 align-self-start rounded text-light">'
						+ suggestion.category.name
						+ '</span>'
						+ '</div>'
						+ '<p class="short-summary p-0 m-0">'
						+ suggestion._highlightResult.content.value
						+ '</p>'
						+ '</div>';
				},
			}
		}
	]).on('autocomplete:selected', function (event, suggestion, dataset) {
		var siteurl = '';
		if (dataset == 'forum') {
			siteurl = 'https://forum.mysurvey.solutions';
		}
		window.location.href = siteurl + suggestion.url;
		enterPressed = true;
	}).on('autocomplete:empty', function () {
		document.getElementById("forum-tab").innerText = "Forum topics (0)";
		document.getElementById("docs-tab").innerText = "Articles (0)";
	}).on('keyup', function (event) {
		if (event.keyCode == 13 && !enterPressed) { // listen for when enter is pressed
			window.location.href = '/search?key=' + document.getElementById("aa-search-input").value;
		}
	});