var client = algoliasearch("5IDMO489J3", "8d191f12f7e8da9f671648ae51e29570");
var index = client.initIndex("support.mysurvey.solutions");
var forumindex = client.initIndex("discourse-posts");

autocomplete('#aa-search-input',
	{
		hint: false,
		debug: true,
		templates: {
			dropdownMenu: '#my-custom-menu-template',
			footer: '<div class="branding float-right">Search by <img src="https://www.algolia.com/static_assets/images/press/downloads/algolia-logo-light.svg" /></div>'
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
					title.innerText = `Articles (${algoliaResponse.nbHits})`;
				},
				suggestion: function (suggestion) {
					$subtopic = suggestion._highlightResult.section.value;
					return '<div class="px-3 py-2 text-secondary search-result-block">'
						+ '<div class="d-flex align-items-stretch pb-1">'
						+ '<span class="h6 flex-grow-1">'
						+ suggestion._highlightResult.title.value
						+ '</span>'
						+ '<span class="section-name ' + $subtopic
						+ ' w-30 text-uppercase w-30 p-1 align-self-start rounded text-light">'
						+ $subtopic
						+ '</span>'
						+ '</div>'
						+ '<p class="short-summary p-0 m-0">'
						+ suggestion._highlightResult.summary.value
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
					title.innerText = `Forum topics (${algoliaResponse.nbHits})`;
				},
				suggestion: function (suggestion) {
					$subtopic = "forum";
					return '<div class="px-3 py-2 text-secondary search-result-block">'
						+ '<div class="d-flex align-items-stretch pb-1">'
						+ '<span class="h6 flex-grow-1">'
						+ suggestion._highlightResult.topic.title.value
						+ '</span>'
						+ '<span class="section-name ' + $subtopic
						+ ' w-30 text-uppercase w-30 p-1 align-self-start rounded text-light">'
						+ suggestion.category.name
						+ '</span>'
						+ '</div>'
						+ '<p class="short-summary p-0 m-0">'
						+ suggestion._highlightResult.content.value
						+ '</p>'
						+ '</div>';
				},
				empty: function (data, algoliaResponse) {
					var title = document.getElementById("forum-tab");
					title.innerText = "Forum topics (0)";
				},
			}
		}
	]).on('autocomplete:selected', function (event, suggestion, dataset) {
		var siteurl = '';
		if (dataset == 'forum') {
			siteurl = 'http://forum.mysurvey.solutions';
		}
		window.location.href = siteurl + suggestion.url;
	});