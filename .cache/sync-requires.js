const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-tag-jsx": hot(preferDefault(require("/home/pedro/Documentos/dev/blogPessoal/src/templates/tag.jsx"))),
  "component---src-templates-post-jsx": hot(preferDefault(require("/home/pedro/Documentos/dev/blogPessoal/src/templates/post.jsx"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/pedro/Documentos/dev/blogPessoal/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/pedro/Documentos/dev/blogPessoal/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/pedro/Documentos/dev/blogPessoal/src/pages/index.js")))
}

