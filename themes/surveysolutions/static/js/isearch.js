const options = {
    appId: "5IDMO489J3",
    apiKey: "8d191f12f7e8da9f671648ae51e29570",
    indexName: "support.mysurvey.solutions",
    routing: true,
    searchParameters: {
        hitsPerPage: 10
    }
}
const search = instantsearch(options);

// initialize SearchBox
search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#aa-search-input',
    reset: false,
    magnifier: false,
    wrapInput: false,
    cssClasses: {
        root: ['input-group', 'search', 'd-flex', 'justify-content-between'],
        input: ['"form-control',  'flex-fill']
    }
  })
);

search.addWidget(
    instantsearch.widgets.pagination({
      container: '#pagination',
      showFirstLast: false,
      labels: {
          previous: 'previous',
          next: 'next'
      },
      cssClasses: {
          root: ['pagination', 'justify-content-center'],
          item: 'page-item',
          link: 'page-link',
          active: 'active',
          disabled: 'disabled'
      }
    })
  );

search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
        empty: 'No results',
        item: '<div class="article-short-view pl-5 position-relative">'
        + '<h3><a href="{{relpermalink}}">{{{_highlightResult.title.value}}}</a></h3>'
        + '<p class="mb-2">{{{_highlightResult.summary.value}}}</p>'
        + '<span class="data d-block">{{lastmod}}</span>'
        + '</div>'
    }
  })
);

search.start();