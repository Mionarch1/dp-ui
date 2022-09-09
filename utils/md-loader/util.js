const compiler = require('@vue/compiler-dom')

const stripTemplate = content => {
  content = content.trim()
  if (!content) {
    return content
  }
  content = content.replace(/<(script|style)>[\s\S]+<\/1>/g, '').trim()
  const res = content.match(/<(template)\s*>([\s\S]+)<\/\1>/)
  return res ? res[2]?.trim() : content
}

const stripScript = content => {
  const res = content.match(/<(script)\s*>([\s\S]+)<\/\1>/)
  return res && res[2] ? res[2].trim() : ''
}

const getRealComponentCode = (template, script) => {
  const compiled = compiler.compile(template, { prefixIdentifiers: true })
  let code = compiled.code.replace(/return\s+/, '')

  script = script.trim()
  if (script) {
    script = script
      .replace(/export\s+default/, 'const demoComponentExport =')
      .replace(/import ([,{}\w\s]+) from (['"\w]+)/g, (match, p1, p2) => {
        if (p2 === "'vue'") {
          return `const ${p1} = Vue`
        }
      })
  } else {
    script = 'const demoComponentExport = {}'
  }

  code = `(function() {
    ${code}
    ${script}
    return {
      mounted(){
        this.$nextTick(()=>{
          const blocks = document.querySelectorAll('pre code:not(.hljs)')
          Array.prototype.forEach.call(blocks, hljs.highlightBlock)
        })
      },
      render,
      ...demoComponentExport
    }
  })()`
  return code
}

/**
 * clickOutside
 * 点击某元素外部事件指令
 */
const clickOutside = {
  // 初始化事件
  beforeMount(el, binding, vnode) {
    function handleClick(e) {
      // 如果为元素本身，则返回
      if (el.contains(e.target) || e.target.className.includes(binding.arg)) {
        return false;
      }
      // 如果绑定了函数，则返回执行
      binding.value(e);
    }
    el.__vueClickOutside__ = handleClick;
    document.addEventListener('click', handleClick);
  },
  // 解除事件监听
  unmounted(el, binding) {
    document.removeEventListener('click', el.__vueClickOutside__);
    delete el.__vueClickOutside__;
  }
};

module.exports = {
  stripScript,
  stripTemplate,
  getRealComponentCode,
  clickOutside
}