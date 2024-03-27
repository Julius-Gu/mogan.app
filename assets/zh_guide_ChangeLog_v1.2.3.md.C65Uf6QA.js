import{_ as i,c as l,o as e,a2 as a}from"./chunks/framework.B05PtJDG.js";const g=JSON.parse('{"title":"墨干理工套件V1.2.3","description":"","frontmatter":{},"headers":[],"relativePath":"zh/guide/ChangeLog_v1.2.3.md","filePath":"zh/guide/ChangeLog_v1.2.3.md","lastUpdated":1711517195000}'),o={name:"zh/guide/ChangeLog_v1.2.3.md"},d=a('<h1 id="墨干理工套件v1-2-3" tabindex="-1">墨干理工套件V1.2.3 <a class="header-anchor" href="#墨干理工套件v1-2-3" aria-label="Permalink to &quot;墨干理工套件V1.2.3&quot;">​</a></h1><p>墨干理工套件V1.2.3包含以下组件：</p><ul><li>墨干V1.2.3 (Mogan Research v1.2.3)</li></ul><h2 id="重要变更" tabindex="-1">重要变更 <a class="header-anchor" href="#重要变更" aria-label="Permalink to &quot;重要变更&quot;">​</a></h2><ul><li>提升了性能</li><li>修复了大量错误</li><li>改进了界面交互体验</li></ul><h2 id="影响用户体验的详细变更" tabindex="-1">影响用户体验的详细变更 <a class="header-anchor" href="#影响用户体验的详细变更" aria-label="Permalink to &quot;影响用户体验的详细变更&quot;">​</a></h2><ul><li>用户界面 <ul><li>在Windows和Linux平台，也可以使用<code>工具-&gt;键盘-&gt;显示键盘按键</code>了</li><li>修复macOS下外接非hidpi显示屏无法打开的问题</li><li>修复macOS平台无权限访问用户<code>$HOME/Document</code>目录问题</li></ul></li><li>编辑器 <ul><li>新增<code>std V</code>（<code>Ctrl+Shift+v</code>或者<code>Command+Shift+v</code>）用于粘贴纯文本</li><li>新增<code>编辑-&gt;无格式粘贴</code>菜单项</li><li>移除<code>编辑</code>-&gt;<code>复制/粘贴/剪切</code>的<code>Primary/Secondary/Ternary</code>菜单项</li><li>macOS：采用<code>Command+left</code>或者<code>Command+right</code>逐词移动</li><li>采用Markdown风格的快捷键插入hlink（<code>[ ] var</code>）和slink（<code>[ ] var var</code>）</li><li>修复在macOS平台无法使用<code>Command+minus</code>放大的问题</li><li>修复光标在行首时概率出现（尤其是老电脑）的输入法漏字问题</li><li>修复在拼音输入法下无法输入破折号的问题</li></ul></li><li>字体 <ul><li>改进对思源宋体（Noto CJK fonts）的支持</li><li>如果思源宋体可用，则默认的中日韩字体是思源宋体</li><li>支持CESI（中国电子技术标准化研究院）的宋体、黑体、楷体、仿宋、小标宋</li></ul></li><li>插件 <ul><li>Maxima: 修复输入卡顿的问题</li><li>Maxima: 工具栏上的帮助按钮直接访问官网文档</li><li>拼写检查: 在Windows和Linux开启<code>编辑-&gt;拼写检查</code></li><li>拼写检查: 修复没有安装hunspell或者aspell时，在Windows平台做拼写检查会崩溃的问题</li><li>LaTeX: 修复复制多行公式到LaTeX代码片段出现乱码的问题</li></ul></li></ul><h2 id="开发者相关变更" tabindex="-1">开发者相关变更 <a class="header-anchor" href="#开发者相关变更" aria-label="Permalink to &quot;开发者相关变更&quot;">​</a></h2><ul><li>使用<code>xmake-requires.lock</code>机制以改善构建的可复现性</li><li>在macOS arm平台的安装包已经由Github Action自动打包了</li></ul>',9),c=[d];function t(n,r,h,s,u,m){return e(),l("div",null,c)}const p=i(o,[["render",t]]);export{g as __pageData,p as default};
