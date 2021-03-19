const path = require('path')
require('dotenv').config()
const { defaultBuildConfig } = require('@component-controls/core')

module.exports = {
  stories: ['../src/docs/**/*.mdx', '../src/stories/**/*.(js|tsx)'],
  siteUrl: `https://theme-ui.com`,
  pages: {
    story: {
      tabs: {
        ...defaultBuildConfig.pages.story.tabs,
        test: '@component-controls/pages/TestingPage',
        // themes: require.resolve('./ThemesPage.tsx'),
      },
    },
  },
  search: {
    indexingModule: require.resolve(
      '@component-controls/search-algolia/indexing'
    ),
    searchingModule: require.resolve('@component-controls/search-algolia'),
    fields: ['title', 'description', 'source', 'tags', 'components'],
    emptySearchDocuments: ['catalog'],
    options: {
      saveIndex: true, // turn to false when no more needed to re-index algolia search
      indexName: process.env.ALGOLIA_SEARCH_INDEX_NAME,
      appID: process.env.ALGOLIA_SEARCH_APP_ID,
      searchAPIKey: process.env.ALGOLIA_SEARCH_SEARCH_KEY,
      adminAPIKey: process.env.ALGOLIA_SEARCH_ADMIN_KEY,
    },
  },
  tokens: {
    githubAccessToken: process.env.GITHUB_AUTH_TOKEN,
  },
  instrument: {
    components: {
      resolvePropsFile: (componentName, filePath) => {
        const resolved = path.resolve(path.dirname(filePath), `../index.d.ts`)
        return resolved
      },
    },
  },
}
