const GovukHTMLRenderer = require('govuk-markdown')
const { marked } = require('marked')
const govspeak = require ('marked-govspeak')
const extensions = require('./marked/extensions/index.js')
const typographer = require('./marked/typographer.js')

marked.setOptions({
  renderer: new GovukHTMLRenderer(),
  smartypants: true
})

marked.use({
  extensions,
  walkTokens: typographer
})

marked.use(govspeak)

module.exports.marked = marked
