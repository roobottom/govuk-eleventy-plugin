/**
 * Footnotes
 *
 * @param {Function} md - markdown-it instance
 * @returns {Function} - markdown-it rendering rules
 */
module.exports = function footnotes (md) {
  const { rules } = md.renderer

  rules.footnote_ref = (tokens, idx, options, env, self) => {
    let id = self.rules.footnote_anchor_name(tokens, idx, options, env, self)

    if (tokens[idx].meta.subId > 0) {
      id += `:${tokens[idx].meta.subId}`
    }

    return `<sup id="fnref:${id}"><a href="#fn:${id}" aria-describedby="footnotes-label">${id.toString()}</a></sup>`
  }

  rules.footnote_anchor = (tokens, idx, options, env, self) => {
    let id = self.rules.footnote_anchor_name(tokens, idx, options, env, self)

    if (tokens[idx].meta.subId > 0) {
      id += `:${tokens[idx].meta.subId}`
    }

    // ↩ using unicode escape code to prevent display as emoji on iOS
    return ` <a href="#fnref:${id}" aria-label="Back to content">\u21a9\uFE0E</a>`
  }

  rules.footnote_block_open = () =>
    `<footer>
      <hr class="govuk-section-break govuk-section-break--l govuk-section-break--visible">\n
      <h2 id="footnotes-label" class="govuk-visually-hidden">Footnotes</h2>\n
      <ol class="app-footnotes-list">\n`

  rules.footnote_block_close = () =>
    '</ol>\n</footer>\n'

  rules.footnote_open = (tokens, idx, options, env, self) => {
    let id = self.rules.footnote_anchor_name(tokens, idx, options, env, self)

    if (tokens[idx].meta.subId > 0) {
      id += `:${tokens[idx].meta.subId}`
    }

    return `<li id="fn:${id}">`
  }
}
