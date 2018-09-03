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
				}
			}
		},
		{
			source: autocomplete.sources.hits(forumindex, { hitsPerPage: 4 }),
			displayKey: 'title',
			name: 'forum',
			templates: {
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
				}
			}
		}
	]).on('autocomplete:selected', function (event, suggestion, dataset) {
		//console.log(suggestion);
		window.location.href = suggestion.url;
	});