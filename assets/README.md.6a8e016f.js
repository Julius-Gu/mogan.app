import{_ as s,c as a,o as e,V as l}from"./chunks/framework.249fa23d.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"README.md","filePath":"README.md","lastUpdated":1704553852000}'),n={name:"README.md"},t=l(`<h2 id="mogan-app-website-generator-by-vitepress" tabindex="-1">mogan.app website generator by vitepress <a class="header-anchor" href="#mogan-app-website-generator-by-vitepress" aria-label="Permalink to &quot;mogan.app website generator by vitepress&quot;">​</a></h2><h3 id="how-to-build" tabindex="-1">How to build <a class="header-anchor" href="#how-to-build" aria-label="Permalink to &quot;How to build&quot;">​</a></h3><p>assume cwd is MOGAN_ROOT</p><ul><li>before build</li></ul><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span></span></code></pre></div><ul><li>build webiste</li></ul><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">bin/build_website</span></span></code></pre></div><ul><li>preview website</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">bin/preview_website</span></span></code></pre></div><ul><li>after build</li></ul><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">CNAME</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">website</span></span>
<span class="line"><span style="color:#FFCB6B;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">website/README.html</span></span></code></pre></div><p>add wasm version (optional)</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">website</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://github.com/Yufeng-shen/Yufeng-Shen.github.io.git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">wasm</span></span>
<span class="line"><span style="color:#FFCB6B;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-rf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">wasm/.git</span></span></code></pre></div>`,13),o=[t];function p(i,c,r,d,C,h){return e(),a("div",null,o)}const b=s(n,[["render",p]]);export{y as __pageData,b as default};