const Config = require('markdown-it-chain');
const containers = require('./containers');
const hljs = require('highlight.js');
const overwriteFenceRule = require('./fence');

const config = new Config();

const highlight = (str, lang) => {
  if (!lang || !hljs.getLanguage(lang)) {
    return `<pre><code class="hljs">${str}</code></pre>`;
  }
  const html = hljs.highlight(lang, str, true).value;
  return `<pre><code class="hljs language-${lang}">${html}</code></pre>`;
};

config.options
  .html(true)
  .highlight(highlight)
  .end()
  .plugin('containers')
  .use(containers)
  .end();

const md = config.toMd();
overwriteFenceRule(md);
module.exports = md;
