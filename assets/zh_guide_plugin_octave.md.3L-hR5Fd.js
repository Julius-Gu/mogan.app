import{_ as a,c as e,o as t,a4 as i}from"./chunks/framework.B2EPA2lv.js";const _=JSON.parse('{"title":"Octave插件","description":"","frontmatter":{},"headers":[],"relativePath":"zh/guide/plugin_octave.md","filePath":"zh/guide/plugin_octave.md","lastUpdated":null}'),o={name:"zh/guide/plugin_octave.md"},s=i('<h1 id="octave插件" tabindex="-1">Octave插件 <a class="header-anchor" href="#octave插件" aria-label="Permalink to &quot;Octave插件&quot;">​</a></h1><p>相关教学视频：<a href="https://www.bilibili.com/video/BV1gK421a7CK/" target="_blank" rel="noreferrer">零基础墨干08：用Octave插件学线性代数</a></p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>Octave插件依赖于<a href="./plugin_binary_gs.html">Ghostscript二进制插件</a>，请先按照文档安装Ghostscript，然后查看<code>帮助-&gt;插件-&gt;Octave</code>以确保文档中的绘图可以正确渲染。</p><h3 id="windows" tabindex="-1">Windows <a class="header-anchor" href="#windows" aria-label="Permalink to &quot;Windows&quot;">​</a></h3><p>前往<a href="https://octave.org" target="_blank" rel="noreferrer">Octave官网</a>，下载并安装Octave 5.2.0。</p><p>比如下载由中国科学技术大学开源软件镜像站提供的Octave 5.2.0安装包：</p><ul><li><a href="http://mirrors.ustc.edu.cn/gnu/octave/windows/octave-5.2.0_1-w64-installer.exe" target="_blank" rel="noreferrer">http://mirrors.ustc.edu.cn/gnu/octave/windows/octave-5.2.0_1-w64-installer.exe</a></li><li><a href="http://mirrors.ustc.edu.cn/gnu/octave/windows/octave-5.2.0_1-w64-installer.exe.sig" target="_blank" rel="noreferrer">http://mirrors.ustc.edu.cn/gnu/octave/windows/octave-5.2.0_1-w64-installer.exe.sig</a></li></ul><h3 id="macos" tabindex="-1">macOS <a class="header-anchor" href="#macos" aria-label="Permalink to &quot;macOS&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>brew install octave</span></span></code></pre></div><h3 id="linux" tabindex="-1">Linux <a class="header-anchor" href="#linux" aria-label="Permalink to &quot;Linux&quot;">​</a></h3><p>在Debian及其衍生中，使用如下命令安装：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sudo apt install octave</span></span></code></pre></div><h2 id="小贴士" tabindex="-1">小贴士 <a class="header-anchor" href="#小贴士" aria-label="Permalink to &quot;小贴士&quot;">​</a></h2><ol><li>Windows：Octave 6.x及以上版本的绘图功能在墨干中无法正常使用 <ul><li>未来会让墨干支持Octave的新版的绘图，也欢迎大家贡献代码</li></ul></li><li>Ubuntu: 使用snap安装的Octave无法在墨干中正常使用 <ul><li>这是由snap的机制决定的，故而不建议使用snap安装Octave</li></ul></li></ol><h2 id="内置文档见帮助-插件-octave" tabindex="-1">内置文档见<code>帮助-&gt;插件-&gt;Octave</code> <a class="header-anchor" href="#内置文档见帮助-插件-octave" aria-label="Permalink to &quot;内置文档见`帮助-&gt;插件-&gt;Octave`&quot;">​</a></h2>',16),l=[s];function r(n,c,d,h,p,u){return t(),e("div",null,l)}const g=a(o,[["render",r]]);export{_ as __pageData,g as default};
