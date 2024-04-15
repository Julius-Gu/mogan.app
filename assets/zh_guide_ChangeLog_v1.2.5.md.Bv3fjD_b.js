import{_ as l,c as i,o as e,a4 as a}from"./chunks/framework.B2EPA2lv.js";const v=JSON.parse('{"title":"墨干理工套件 V1.2.5 LTS","description":"","frontmatter":{},"headers":[],"relativePath":"zh/guide/ChangeLog_v1.2.5.md","filePath":"zh/guide/ChangeLog_v1.2.5.md","lastUpdated":1713151243000}'),o={name:"zh/guide/ChangeLog_v1.2.5.md"},t=a('<h1 id="墨干理工套件-v1-2-5-lts" tabindex="-1">墨干理工套件 V1.2.5 LTS <a class="header-anchor" href="#墨干理工套件-v1-2-5-lts" aria-label="Permalink to &quot;墨干理工套件 V1.2.5 LTS&quot;">​</a></h1><p>墨干理工套件 V1.2.5 LTS包含以下组件：</p><ul><li>墨干 V1.2.5 LTS (Mogan Research v1.2.5 LTS)</li></ul><p>本次更新主要是修复既有错误、改进用户体验。</p><blockquote><p>注意：一个重大的变更是默认开启了实验选项<code>DO NOT use UTF-8 for CJK in TM format</code>，保持和GNU TeXmacs 2.1.2的兼容性。之前在墨干V1.1.x使用了TM格式中显示中文特性的用户，可以关闭这个选项以正确加载墨干V1.1.x生成的可以在纯文本编辑器中正常显示中文的文档。v1.1.x的在tm文档中显示中文的特性可能会带来一些严重的兼容性问题，故而不建议用户使用可以在纯文本编辑器中正常显示中文的TM文档。从墨干V1.2.6开始，我们会实验性地支持TMU格式以UTF-8编码显示中文。TMU格式经过多个版本迭代，最终才会对所有用户开放。</p></blockquote><h2 id="v1-2-5-3-中影响用户体验的变更-2024-04-15" tabindex="-1">v1.2.5.3 中影响用户体验的变更（2024/04/15） <a class="header-anchor" href="#v1-2-5-3-中影响用户体验的变更-2024-04-15" aria-label="Permalink to &quot;v1.2.5.3 中影响用户体验的变更（2024/04/15）&quot;">​</a></h2><ul><li>错误修复 <ul><li>Python插件支持使用conda创建的虚拟环境</li></ul></li><li>插件 <ul><li>修复使用结构化替换的单独窗口有可能导致墨干崩溃的问题</li></ul></li></ul><h2 id="v1-2-5-2-中影响用户体验的变更-2024-04-08" tabindex="-1">v1.2.5.2 中影响用户体验的变更（2024/04/08） <a class="header-anchor" href="#v1-2-5-2-中影响用户体验的变更-2024-04-08" aria-label="Permalink to &quot;v1.2.5.2 中影响用户体验的变更（2024/04/08）&quot;">​</a></h2><ul><li>错误修复 <ul><li>修复底部替换工具栏通过鼠标点击单次替换、全部替换不生效的问题</li><li>修复<code>文件-&gt;导出-&gt;可编辑PDF</code>在PDF版本大于1.4时不生效的问题</li><li>修复Octave插件执行<code>ones (0)</code>导致排版错误的问题</li><li>修复葡萄牙语字典文件因命名不正确而失效的问题</li><li>修复在macOS平台无法引用<code>$HOME/Documents</code>中样式、图片的问题</li><li>将qt6-qpa-plugins设置为显式依赖，解决在Ubuntu上安装之后无法正常启动的问题</li></ul></li><li>幻灯片样式 <ul><li>默认页面类型调整为<code>16:9</code></li><li>幻灯片放映默认调整为适合宽度</li><li>当页面渲染为书籍时，打开文档直接调整为适合宽度</li></ul></li><li>插件 <ul><li>将对于可执行文件的调用统一到二进制插件</li><li>内置Python插件，其中对于Python解释器的定位由Python二进制插件决定</li></ul></li></ul><h2 id="v1-2-5-1-中影响用户体验的变更-2024-03-14" tabindex="-1">v1.2.5.1 中影响用户体验的变更（2024/03/14） <a class="header-anchor" href="#v1-2-5-1-中影响用户体验的变更-2024-03-14" aria-label="Permalink to &quot;v1.2.5.1 中影响用户体验的变更（2024/03/14）&quot;">​</a></h2><ul><li>快捷键 <ul><li>修复按下ESC键会输入ESC这三个字母的问题</li><li>为《零基础SICP》公开课修复反引号的输入问题</li></ul></li><li>用户界面 <ul><li>修复<code>查看-&gt;全屏</code>导致界面风格崩坏的错误</li></ul></li><li>幻灯片 <ul><li>内置<a href="https://github.com/woutersj" target="_blank" rel="noreferrer">@woutersj</a>实现的slidemove插件，用于调整幻灯片顺序</li></ul></li><li>Scheme会话 <ul><li>为《零基础SICP》修复了<code>scheme-eval</code>的字符编码问题</li></ul></li></ul><h2 id="v1-2-5-中影响用户体验的变更-2024-02-27" tabindex="-1">v1.2.5 中影响用户体验的变更（2024/02/27） <a class="header-anchor" href="#v1-2-5-中影响用户体验的变更-2024-02-27" aria-label="Permalink to &quot;v1.2.5 中影响用户体验的变更（2024/02/27）&quot;">​</a></h2><ul><li>安装包 <ul><li>提供Ubuntu 20.04的deb安装包</li><li>提供Debian 12 (bookworm)的deb安装包</li><li>提供Windows平台的便携版安装包</li></ul></li><li>幻灯片模式 <ul><li>修复在macOS平台切换幻灯片主题无法切换幻灯片背景图的问题</li></ul></li><li>快捷键 <ul><li>macOS：Command和+/-的组合无论是否按下Shift都可以放大或者缩小</li><li>修复未知快捷键被作为文本插入到文档中的问题</li></ul></li><li>用户界面 <ul><li>修复在macOS平台双击打开含有中文字符的文件失败的问题</li></ul></li><li>排版引擎 <ul><li>修复在文档中删除内容出现残影的问题</li><li>修复在幻灯片设置部分内容为双栏时出错的问题</li><li>number原语支持汉字的数字：一、二、三等</li></ul></li><li>性能优化 <ul><li>改进解析TeXmacs文档的性能</li><li>改进渲染Pine幻灯片主题的性能</li></ul></li><li>PDF导入 <ul><li>新增<code>文件-&gt;导入-&gt;可编辑PDF</code>用于导入可编辑PDF，而不是直接使用<code>文件-&gt;打开</code>来打开可编辑PDF</li></ul></li><li>版本控制 <ul><li>修复在Windows平台进入<code>版本-&gt;历史</code>之后，无法查看文档历史版本的问题</li></ul></li><li>图像插件 <ul><li>改进对Postscript图像格式的支持（需要用户手动安装Ghostscript）</li><li>改进对SVG图像格式的支持（需要用户手动安装Inkscape）</li></ul></li><li>会话插件 <ul><li>改进Scheme会话中中文变量名、中文字符串的支持</li></ul></li><li>代码插件 <ul><li>重新添加了Python的代码高亮</li></ul></li></ul>',13),u=[t];function c(d,r,n,s,h,_){return e(),i("div",null,u)}const p=l(o,[["render",c]]);export{v as __pageData,p as default};
