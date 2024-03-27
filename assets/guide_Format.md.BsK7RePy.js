import{_ as a,c as e,o as t,a2 as o}from"./chunks/framework.B05PtJDG.js";const g=JSON.parse('{"title":"How to format the code","description":"","frontmatter":{},"headers":[],"relativePath":"guide/Format.md","filePath":"guide/Format.md","lastUpdated":1711517195000}'),s={name:"guide/Format.md"},n=o('<h1 id="how-to-format-the-code" tabindex="-1">How to format the code <a class="header-anchor" href="#how-to-format-the-code" aria-label="Permalink to &quot;How to format the code&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>elvish bin/format</span></span></code></pre></div><h2 id="clang-format" tabindex="-1">clang-format <a class="header-anchor" href="#clang-format" aria-label="Permalink to &quot;clang-format&quot;">​</a></h2><p>Pin clang-format to <code>16.0.x</code>.</p><h3 id="macos" tabindex="-1">macOS <a class="header-anchor" href="#macos" aria-label="Permalink to &quot;macOS&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>brew install clang-format</span></span></code></pre></div><h3 id="windows" tabindex="-1">Windows <a class="header-anchor" href="#windows" aria-label="Permalink to &quot;Windows&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>scoop install llvm@16.0.6</span></span></code></pre></div><h3 id="linux" tabindex="-1">Linux <a class="header-anchor" href="#linux" aria-label="Permalink to &quot;Linux&quot;">​</a></h3><p>We need to install llvm manually on Linux.</p><p>For example:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>xrepo install &quot;llvm==16.0.5&quot;</span></span></code></pre></div>',12),i=[n];function l(c,d,r,p,h,m){return t(),e("div",null,i)}const b=a(s,[["render",l]]);export{g as __pageData,b as default};
