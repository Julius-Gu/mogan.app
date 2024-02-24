import{_ as s,c as a,o as e,V as t}from"./chunks/framework.kgZeNgQl.js";const _=JSON.parse('{"title":"插件","description":"","frontmatter":{},"headers":[],"relativePath":"zh/guide/plugins.md","filePath":"zh/guide/plugins.md","lastUpdated":1708759877000}'),i={name:"zh/guide/plugins.md"},n=t('<h1 id="插件" tabindex="-1">插件 <a class="header-anchor" href="#插件" aria-label="Permalink to &quot;插件&quot;">​</a></h1><p>墨干的插件按照是否内置，可分为内置插件和社区插件两种。按照功能分为：</p><ul><li><strong>二进制插件</strong>: 提供定位和使用可执行文件的Scheme函数</li><li><strong>图像插件</strong>：为不同格式的图像提供格式转换，比如PDF图像插件</li><li><strong>语言插件</strong>：为不同的自然语言提供字典和样式定制，比如中文插件</li><li><strong>数据格式插件</strong>：处理数据格式转换的插件，比如HTML数据插件、LaTeX数据插件</li><li><strong>代码插件</strong>：提供编程语言的代码高亮定义和相应的样式、编辑器定制，比如Python代码插件</li><li><strong>会话插件</strong>：提供外部系统的集成，且带有上下文，比如Maxima插件</li></ul><h2 id="二进制插件" tabindex="-1">二进制插件 <a class="header-anchor" href="#二进制插件" aria-label="Permalink to &quot;二进制插件&quot;">​</a></h2><p>二进制插件的源代码在<code>$TEXMACS_PATH/plugins/binary</code>里面，一个可执行文件对应一个源代码文件：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$TEXMACS_PATH/plugins/binary/progs/binary/&lt;name&gt;.scm</span></span></code></pre></div><p>比如Ghostscript的gs命令对应的源代码在</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$TEXMACS_PATH/plugins/binary/progs/binary/gs.scm</span></span></code></pre></div><p>如果用户需要修改寻找gs命令行或者调用gs命令行的Scheme函数，直接将上述<code>gs.scm</code>拷贝到：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$TEXMACS_HOME_PATH/plugins/binary/progs/binary/gs.scm</span></span></code></pre></div><p>然后做相关修改即可。<code>$TEXMACS_HOME_PATH</code>下面的<code>gs.scm</code>（如果存在的话）会优先于<code>$TEXMACS_PATH</code>下面<code>gs.scm</code>被加载。</p>',11),o=[n];function p(c,l,r,d,g,h){return e(),a("div",null,o)}const m=s(i,[["render",p]]);export{_ as __pageData,m as default};