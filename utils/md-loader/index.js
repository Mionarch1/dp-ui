const { stripTemplate, stripScript, stripStyle, getRealComponentCode } = require('./util')

const md = require('./config.js')

module.exports = source => {
  let content = md.render(source)

  const commentStart = '<!--element-demo:'
  const commentStartLen = commentStart.length
  const commentEnd = ':element-demo-->'
  const commentEndLen = commentEnd.length

  const output = []
  const styles = []
  let start = 0
  let id = 0
  let componentsString = ''

  let demoStart = content.indexOf(commentStart)
  let demoEnd = content.indexOf(commentEnd, demoStart + commentStartLen)

  while (demoStart !== -1 && demoEnd !== -1) {
    output.push(content.slice(start, demoStart))

    const componentContent = content.slice(demoStart + commentStartLen, demoEnd)
    const template = stripTemplate(componentContent)
    const script = stripScript(componentContent)
    const style = stripStyle(componentContent)
    styles.push(style)

    const demoComponent = getRealComponentCode(template, script)
    const demoComponentName = `element-demo-${id}`
    output.push(`<template #source><${demoComponentName}/></template>`)
    componentsString += `${JSON.stringify(
      demoComponentName
    )}: ${demoComponent},`

    id++
    start = demoEnd + commentEndLen
    demoStart = content.indexOf(commentStart, start)
    demoEnd = content.indexOf(commentEnd, demoStart + commentStartLen)
  }
  let pageScript = ''
  if (componentsString) {
    pageScript = `<script>
      import hljs from 'highlight.js'
      import * as Vue from "vue"
      export default {
        name: 'component-doc',
        components: {
          ${componentsString}
        }
      }
    </script>`
  } else if (content.indexOf('<script>') === 0) {
    pageScript = stripScript(content)
  }
  output.push(content.slice(start))

  return `
    <template>
      <section class="content element-doc">
        ${output.join('')}
      </section>
    </template>
    ${pageScript}
    <style>
      ${styles.join('')}
    </style>
  `
}
