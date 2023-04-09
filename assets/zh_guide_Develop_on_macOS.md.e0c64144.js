import{_ as a,c as s,o as e,N as n}from"./chunks/framework.72fe3cca.js";const m=JSON.parse('{"title":"在macOS上开发","description":"","frontmatter":{},"headers":[],"relativePath":"zh/guide/Develop_on_macOS.md","lastUpdated":1674504446000}'),l={name:"zh/guide/Develop_on_macOS.md"},o=n(`<h1 id="在macos上开发" tabindex="-1">在macOS上开发 <a class="header-anchor" href="#在macos上开发" aria-label="Permalink to &quot;在macOS上开发&quot;">​</a></h1><h2 id="使用xmake" tabindex="-1">使用xmake <a class="header-anchor" href="#使用xmake" aria-label="Permalink to &quot;使用xmake&quot;">​</a></h2><h3 id="第一步-安装xmake和xrepo" tabindex="-1">第一步：安装xmake和xrepo <a class="header-anchor" href="#第一步-安装xmake和xrepo" aria-label="Permalink to &quot;第一步：安装xmake和xrepo&quot;">​</a></h3><p>对于Homebrew:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">brew install xmake qt@5 ccache</span></span>
<span class="line"><span style="color:#A6ACCD;">brew link qt@5</span></span></code></pre></div><p>有时候需要保持xrepo是最新的，以保证使用最新的依赖的构建定义</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">xrepo update-repo</span></span></code></pre></div><h3 id="第二步-编译" tabindex="-1">第二步：编译 <a class="header-anchor" href="#第二步-编译" aria-label="Permalink to &quot;第二步：编译&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">xmake</span></span></code></pre></div><h3 id="第三步-运行单元测试" tabindex="-1">第三步：运行单元测试 <a class="header-anchor" href="#第三步-运行单元测试" aria-label="Permalink to &quot;第三步：运行单元测试&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">TEXMACS_PATH</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">$PWD</span><span style="color:#C3E88D;">/TeXmacs</span><span style="color:#A6ACCD;"> xmake run --yes --verbose --diagnosis --group</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">tests</span></span></code></pre></div><h3 id="第四步-安装到build-macosx-arch-release-mogan-app" tabindex="-1">第四步: 安装到<code>build/macosx/{arch}/release/Mogan.app/</code> <a class="header-anchor" href="#第四步-安装到build-macosx-arch-release-mogan-app" aria-label="Permalink to &quot;第四步: 安装到\`build/macosx/{arch}/release/Mogan.app/\`&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># x86_64</span></span>
<span class="line"><span style="color:#FFCB6B;">xmake</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-o</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build/macosx/x86_64/release/Mogan.app/Contents/Resources/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mogan_install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># arm64</span></span>
<span class="line"><span style="color:#FFCB6B;">xmake</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-o</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build/macosx/arm64/release/Mogan.app/Contents/Resources/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mogan_install</span></span></code></pre></div><h3 id="第五步-启动墨干编辑器" tabindex="-1">第五步：启动墨干编辑器 <a class="header-anchor" href="#第五步-启动墨干编辑器" aria-label="Permalink to &quot;第五步：启动墨干编辑器&quot;">​</a></h3><p>对于需要Codesign的macOS版本（比如macOS M1），需要先签名：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">codesign</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--force</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--deep</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--sign</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./build/macosx/arm64/release/Mogan.app</span></span></code></pre></div><p>然后再启动：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># x86_64</span></span>
<span class="line"><span style="color:#82AAFF;">.</span><span style="color:#FFCB6B;">/build/macosx/x86_64/release/Mogan.app/Contents/MacOS/Mogan</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># arm64</span></span>
<span class="line"><span style="color:#82AAFF;">.</span><span style="color:#FFCB6B;">/build/macosx/arm64/release/Mogan.app/Contents/MacOS/Mogan</span></span></code></pre></div><h2 id="使用cmake" tabindex="-1">使用cmake <a class="header-anchor" href="#使用cmake" aria-label="Permalink to &quot;使用cmake&quot;">​</a></h2><p>假定你已经在mogan的源代码目录：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">mkdir</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span></span>
<span class="line"><span style="color:#FFCB6B;">cmake</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">..</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-DCMAKE_INSTALL_PREFIX=</span><span style="color:#A6ACCD;">$HOME</span><span style="color:#C3E88D;">/software</span></span>
<span class="line"><span style="color:#FFCB6B;">make</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-j12</span></span></code></pre></div><p>编译安装完成之后，可以这样启动墨干：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">$HOME/software/bin/mogan.sh</span></span></code></pre></div><p>使用<code>make install</code>，然后在单独的目录里面做开发，能够排除一些干扰。如果你对源代码比较了解，可以通过更改TEXMACS_PATH的方式，直接在源代码中更改Scheme这部分代码，不需要重新编译就可以测试你的更改。</p>`,24),p=[o];function t(c,r,i,C,d,h){return e(),s("div",null,p)}const A=a(l,[["render",t]]);export{m as __pageData,A as default};
