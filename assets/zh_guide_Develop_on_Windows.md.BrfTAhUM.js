import{_ as s,c as a,o as i,a2 as e}from"./chunks/framework.B05PtJDG.js";const u=JSON.parse('{"title":"开发者文档","description":"","frontmatter":{},"headers":[],"relativePath":"zh/guide/Develop_on_Windows.md","filePath":"zh/guide/Develop_on_Windows.md","lastUpdated":1711517195000}'),n={name:"zh/guide/Develop_on_Windows.md"},t=e(`<h1 id="开发者文档" tabindex="-1">开发者文档 <a class="header-anchor" href="#开发者文档" aria-label="Permalink to &quot;开发者文档&quot;">​</a></h1><p>墨干的代码使用变长数组，因此不能用msvc来编译开发。推荐使用MinGW编译器来开发。</p><h3 id="第一步-安装xmake、mingw、msys以及qt" tabindex="-1">第一步：安装xmake、MinGW、msys以及Qt <a class="header-anchor" href="#第一步-安装xmake、mingw、msys以及qt" aria-label="Permalink to &quot;第一步：安装xmake、MinGW、msys以及Qt&quot;">​</a></h3><p>开发者需要安装下列工具：</p><ul><li><a href="https://www.qt.io/download" target="_blank" rel="noreferrer">Qt</a><ul><li>只需要安装适配MinGW 8.1.0的Qt库。Qt 5 和Qt 6 都可以安装（Qt 5.15.2是一个很好的选择,可以适配MinGW 8.1.0）。不需要安装Qt script等其他框架。</li></ul></li><li><a href="https://github.com/msys2/msys2-installer/releases" target="_blank" rel="noreferrer">msys environment</a></li><li>MinGW 8.1.0编译器（见下文）。 <ul><li>推荐安装Qt提供的MinGW 8.1.0编译器，这个编译器在Tools子目录下。</li></ul></li><li>xmake（见下文）。</li></ul><p>既可以用msys2的pacman安装xmake，也可以用xmake的安装包来安装。</p><p>建议使用pacman, 同时还需要安装其他的包：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pacman -Sy xmake</span></span>
<span class="line"><span>pacman -Sy make</span></span>
<span class="line"><span>pacman -Sy git</span></span>
<span class="line"><span>pacman -Sy mingw-w64-x86_64-7zip</span></span></code></pre></div><p><strong>注意</strong>: msys提供的MinGW版本很高，与墨干的代码不兼容。请通过Qt安装程序或者chocolate安装8.1.0版本的MinGW。</p><p>有时，开发者要更新xmake的包数据：</p><div class="language-pwsh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">pwsh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>xrepo update-repo</span></span></code></pre></div><h3 id="第二步-编译" tabindex="-1">第二步：编译 <a class="header-anchor" href="#第二步-编译" aria-label="Permalink to &quot;第二步：编译&quot;">​</a></h3><p>在msys命令行下运行这两条命令。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>xmake config --yes --verbose --diagnosis --plat=mingw --mingw=&lt;newly installed qt address&gt;/Tools/mingw810_64 --qt=&lt;newly installed qt address&gt;/5.x.x/mingw81_64</span></span></code></pre></div><p>上面的命令行会选择Qt安装程序安装的MinGW 8.1.0。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">xmake</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> research</span></span></code></pre></div><h3 id="第三步-运行单元测试" tabindex="-1">第三步：运行单元测试 <a class="header-anchor" href="#第三步-运行单元测试" aria-label="Permalink to &quot;第三步：运行单元测试&quot;">​</a></h3><p>运行命令<code>windeployqt</code>前需要将<code>&lt;newly installed qt address&gt;/5.15.2/mingw81_64/bin</code>添加到<code>PATH</code>环境变量。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">windeployqt</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --compiler-runtime</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./build/mingw/x86_64/release/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -printsupport</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">xmake</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --yes</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --verbose</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --diagnosis</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --group=tests</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">xmake</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --yes</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --verbose</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --diagnosis</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --group=keneral_tests</span></span></code></pre></div><h3 id="第四步-安装到build-packages目录" tabindex="-1">第四步：安装到<code>build/packages</code>目录 <a class="header-anchor" href="#第四步-安装到build-packages目录" aria-label="Permalink to &quot;第四步：安装到\`build/packages\`目录&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">xmake</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> research</span></span></code></pre></div><h3 id="第五步-启动墨干" tabindex="-1">第五步：启动墨干 <a class="header-anchor" href="#第五步-启动墨干" aria-label="Permalink to &quot;第五步：启动墨干&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">xmake</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> research</span></span></code></pre></div><h3 id="在vscode下开发-可选" tabindex="-1">在VSCode下开发（可选） <a class="header-anchor" href="#在vscode下开发-可选" aria-label="Permalink to &quot;在VSCode下开发（可选）&quot;">​</a></h3><p>如果用VSCode来开发，xmake可以生成<code>compile_command.json</code>文件。如果提供这份文件，VSCode的C++插件会根据这个文件来识别项目结构，提供正确的语义高亮等语义提示。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">xmake</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> project</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --kind=compile_commands</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./.vscode</span></span></code></pre></div><p>修改<code>.vscode/c_cpp_properties.json</code>文件才能使刚刚生成的<code>compile_command.json</code>文件生效。</p><div class="language-jsonc vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsonc</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;configurations&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            // other configs</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;compilerPath&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;your configuration&gt;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;cppStandard&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;gnu++17&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;intelliSenseMode&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;windows-gcc-x64&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;compileCommands&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.vscode/compile_commands.json&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,28),l=[t];function p(h,o,k,d,c,r){return i(),a("div",null,l)}const m=s(n,[["render",p]]);export{u as __pageData,m as default};
