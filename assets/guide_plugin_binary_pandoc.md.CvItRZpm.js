import{_ as a,c as e,o,a4 as n}from"./chunks/framework.B2EPA2lv.js";const g=JSON.parse('{"title":"Pandoc Binary Plugin","description":"","frontmatter":{},"headers":[],"relativePath":"guide/plugin_binary_pandoc.md","filePath":"guide/plugin_binary_pandoc.md","lastUpdated":1730339162000}'),t={name:"guide/plugin_binary_pandoc.md"},i=n('<h1 id="pandoc-binary-plugin" tabindex="-1">Pandoc Binary Plugin <a class="header-anchor" href="#pandoc-binary-plugin" aria-label="Permalink to &quot;Pandoc Binary Plugin&quot;">​</a></h1><ul><li>Executable filename: <code>pandoc</code></li><li>Plugin source code: <ul><li><a href="https://codeberg.org/XmacsLabs/mogan/src/branch/branch-1.2/TeXmacs/plugins/binary/progs/binary/pandoc.scm" target="_blank" rel="noreferrer">Codeberg</a></li><li><a href="https://gitee.com/XmacsLabs/mogan/blob/branch-1.2/TeXmacs/plugins/binary/progs/binary/pandoc.scm" target="_blank" rel="noreferrer">Gitee</a></li><li><a href="https://github.com/XmacsLabs/mogan/blob/branch-1.2/TeXmacs/plugins/binary/progs/binary/pandoc.scm" target="_blank" rel="noreferrer">Github</a></li></ul></li></ul><ul><li>What: Supports the <code>Document Conversion -&gt; Export to Multiple Formats</code> feature</li></ul><ul><li>Mogan: <code>&gt;= v1.2.8</code></li></ul><h2 id="pandoc-introduction" tabindex="-1">Pandoc Introduction <a class="header-anchor" href="#pandoc-introduction" aria-label="Permalink to &quot;Pandoc Introduction&quot;">​</a></h2><ul><li><strong>File Conversion</strong>: Pandoc is a powerful tool that can convert between a wide range of markup formats, including Markdown, LaTeX, HTML, and more.</li><li><strong>Markdown Extensions</strong>: Pandoc supports a variety of useful Markdown extensions, such as document metadata, footnotes, tables, definition lists, superscripts and subscripts, strikethroughs, enhanced ordered lists, and more.</li><li><strong>Mathematical Formulas</strong>: Pandoc supports LaTeX math formulas, which can be rendered in HTML through various methods such as MathJax or MathML.</li><li><strong>Automatic Citations and Bibliography</strong>: Pandoc includes a powerful system that can automatically generate citations and bibliographies, supporting multiple citation styles and bibliography formats.</li></ul><h2 id="how-to-install-pandoc" tabindex="-1">How to Install Pandoc <a class="header-anchor" href="#how-to-install-pandoc" aria-label="Permalink to &quot;How to Install Pandoc&quot;">​</a></h2><h3 id="windows" tabindex="-1">Windows <a class="header-anchor" href="#windows" aria-label="Permalink to &quot;Windows&quot;">​</a></h3><p>Install using <code>Chocolatey</code>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>choco install pandoc</span></span></code></pre></div><p>Install using <code>winget</code>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>winget install --source winget --exact --id JohnMacFarlane.Pandoc</span></span></code></pre></div><p>Use the installer:<br> Download and run the Pandoc installer, which will automatically add Pandoc to the system path.</p><p>Installation location:<br> Typically at <code>C:\\Program Files\\Pandoc\\pandoc.exe</code>.</p><h3 id="macos" tabindex="-1">macOS <a class="header-anchor" href="#macos" aria-label="Permalink to &quot;macOS&quot;">​</a></h3><p>Install using <code>brew install pandoc</code>.</p><p>Installation location:<br> Typically at <code>/usr/local/bin/pandoc</code>.</p><h3 id="linux" tabindex="-1">Linux <a class="header-anchor" href="#linux" aria-label="Permalink to &quot;Linux&quot;">​</a></h3><p>On Debian bookworm, use the following command to install:</p><h3 id="macos-1" tabindex="-1">macOS <a class="header-anchor" href="#macos-1" aria-label="Permalink to &quot;macOS&quot;">​</a></h3><p>Install using <code>brew install pandoc</code>.</p><h3 id="linux-1" tabindex="-1">Linux <a class="header-anchor" href="#linux-1" aria-label="Permalink to &quot;Linux&quot;">​</a></h3><p>On Debian bookworm, use the following command to install:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sudo apt install pandoc</span></span></code></pre></div><p>Alternatively, install using Conda:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>conda install -c conda-forge pandoc</span></span></code></pre></div><p>Installation location:<br> Typically at <code>/usr/bin/pandoc</code> or <code>/usr/local/bin/pandoc</code>.</p><h3 id="how-to-verify-if-the-installation-was-successful" tabindex="-1">How to Verify if the Installation was Successful <a class="header-anchor" href="#how-to-verify-if-the-installation-was-successful" aria-label="Permalink to &quot;How to Verify if the Installation was Successful&quot;">​</a></h3><p>To verify if Pandoc was successfully installed, follow these steps:</p><ul><li>Command Line Check: <ul><li>Open a command-line terminal (CMD or PowerShell for Windows, Terminal for macOS, or Shell for Linux).</li><li>Type <code>pandoc -v</code> or <code>pandoc --version</code> to check the Pandoc version information. If the version number is displayed, the installation was successful.</li></ul></li><li>Conversion Test: <ul><li>Create a simple Markdown file (e.g., <code>test.md</code>) with the content <code># Hello, Pandoc!</code>.</li><li>Run the following command in the terminal: <code>pandoc test.md -o test.pdf</code> to convert the Markdown file into a PDF. If the <code>test.pdf</code> file is generated, then Pandoc is working properly.</li></ul></li><li>Path Check: <ul><li>Confirm that the Pandoc installation path is added to the system&#39;s environment variables. On the command line, type <code>echo $PATH</code> (Linux and macOS) or <code>echo %PATH%</code> (Windows) to check if the Pandoc installation path is included.</li></ul></li></ul>',30),l=[i];function s(c,r,d,p,h,u){return o(),e("div",null,l)}const b=a(t,[["render",s]]);export{g as __pageData,b as default};