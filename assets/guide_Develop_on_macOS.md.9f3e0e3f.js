import{_ as a,c as e,o as s,V as n}from"./chunks/framework.249fa23d.js";const C=JSON.parse('{"title":"Developing on macOS","description":"","frontmatter":{},"headers":[],"relativePath":"guide/Develop_on_macOS.md","filePath":"guide/Develop_on_macOS.md","lastUpdated":1689768366000}'),l={name:"guide/Develop_on_macOS.md"},o=n(`<h1 id="developing-on-macos" tabindex="-1">Developing on macOS <a class="header-anchor" href="#developing-on-macos" aria-label="Permalink to &quot;Developing on macOS&quot;">​</a></h1><h2 id="using-xmake" tabindex="-1">Using xmake <a class="header-anchor" href="#using-xmake" aria-label="Permalink to &quot;Using xmake&quot;">​</a></h2><h3 id="step-1-install-xmake-and-xrepo" tabindex="-1">Step 1: Install xmake and xrepo <a class="header-anchor" href="#step-1-install-xmake-and-xrepo" aria-label="Permalink to &quot;Step 1: Install xmake and xrepo&quot;">​</a></h3><p>For Homebrew:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">brew install xmake qt@5 ccache</span></span>
<span class="line"><span style="color:#A6ACCD;">brew link qt@5</span></span>
<span class="line"><span style="color:#A6ACCD;">brew install pkg-config</span></span></code></pre></div><p>Sometimes, we need the latest xrepo:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">xrepo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">update-repo</span></span></code></pre></div><h3 id="step-2-compile" tabindex="-1">Step 2: Compile <a class="header-anchor" href="#step-2-compile" aria-label="Permalink to &quot;Step 2: Compile&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">xmake</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--yes</span></span>
<span class="line"><span style="color:#FFCB6B;">xmake</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mogan</span></span></code></pre></div><h3 id="step-3-run-tests" tabindex="-1">Step 3: Run tests <a class="header-anchor" href="#step-3-run-tests" aria-label="Permalink to &quot;Step 3: Run tests&quot;">​</a></h3><p>See <a href="./Test.html">How to test</a>。</p><h3 id="step-4-install-to-build-macosx-arch-release-mogan-app" tabindex="-1">Step 4: Install to <code>build/macosx/{arch}/release/Mogan.app/</code> <a class="header-anchor" href="#step-4-install-to-build-macosx-arch-release-mogan-app" aria-label="Permalink to &quot;Step 4: Install to \`build/macosx/{arch}/release/Mogan.app/\`&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">xmake</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mogan</span></span></code></pre></div><h3 id="step-5-launch-mogan-editor" tabindex="-1">Step 5: Launch Mogan Editor <a class="header-anchor" href="#step-5-launch-mogan-editor" aria-label="Permalink to &quot;Step 5: Launch Mogan Editor&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">xmake</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mogan</span></span></code></pre></div>`,15),t=[o];function p(c,r,i,d,h,m){return s(),e("div",null,t)}const g=a(l,[["render",p]]);export{C as __pageData,g as default};
