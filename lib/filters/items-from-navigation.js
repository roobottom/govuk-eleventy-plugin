const url = require('@11ty/eleventy/src/Filters/Url.js')

/**
 * Transform Eleventy navigation data to `items` array that can be
 * consumed by GOV.UK Frontend `govukBreadcrumb` component
 *
 * @param {Array} eleventyNavigation - Eleventy navigation data
 * @param {string} [pageUrl=false] - URL of current page
 * @param {object} [config={}] - Plugin options
 * @returns {Array} - `items` array
 */
module.exports = (eleventyNavigation, pageUrl = false, config = {}) => {
  const pathPrefix = config?.pathPrefix || '/'
  const currentUrl = pageUrl ? url(pageUrl, pathPrefix) : false
  const items = []

  eleventyNavigation.map(item => items.push({
    current: pageUrl ? url(item.url, pathPrefix) === currentUrl : false,
    parent: pageUrl ? pageUrl.startsWith(item.url, pathPrefix) : false,
    href: url(item.url, pathPrefix),
    text: item.title,
    children: item.children
      ? item.children.map(child => ({
          current: pageUrl ? url(child.url, pathPrefix) === pageUrl : false,
          href: url(child.url, pathPrefix),
          text: child.title
        }))
      : false
  }))

  if (config?.parentSite) {
    items.unshift({
      href: config.parentSite.url,
      text: config.parentSite.name
    })
  }

  return items
}
