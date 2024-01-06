import{_ as e,c as t,o as a,V as d}from"./chunks/framework.249fa23d.js";const u=JSON.parse('{"title":"Mogan v.s. GNU TeXmacs","description":"","frontmatter":{},"headers":[],"relativePath":"guide/Mogan_versus_TeXmacs.md","filePath":"guide/Mogan_versus_TeXmacs.md","lastUpdated":1704553852000}'),o={name:"guide/Mogan_versus_TeXmacs.md"},s=d('<h1 id="mogan-v-s-gnu-texmacs" tabindex="-1">Mogan v.s. GNU TeXmacs <a class="header-anchor" href="#mogan-v-s-gnu-texmacs" aria-label="Permalink to &quot;Mogan v.s. GNU TeXmacs&quot;">​</a></h1><h2 id="product-positioning" tabindex="-1">Product Positioning <a class="header-anchor" href="#product-positioning" aria-label="Permalink to &quot;Product Positioning&quot;">​</a></h2><p>Mogan is a libre STEM suite, consists of Mogan Research, Mogan Code and Mogan Beamer. Mogan Research is one of the distribution of GNU TeXmacs, both of them are libre scientific editing platform.</p><p>Mogan Research as a distribution of GNU TeXmacs will try to keep the user experience as the same. Mogan Research and GNU TeXmacs could be regarded as the same kind product released by different teams. Mogan Code and Mogan Beamer will be brand-new products based on the layout engine and structural editing in GNU TeXmacs.</p><p>In this article, we will discuss the differences of Mogan Research and GNU TeXmacs in details:</p><h2 id="preferences" tabindex="-1">Preferences <a class="header-anchor" href="#preferences" aria-label="Permalink to &quot;Preferences&quot;">​</a></h2><table><thead><tr><th>Option</th><th>Mogan Research</th><th>GNU TeXmacs</th></tr></thead><tbody><tr><td>General<code>-&gt;</code>Interactive Questions</td><td><code>In pop-up windows</code></td><td><code>On the footer</code></td></tr><tr><td>Other<code>-&gt;</code>Document updates run</td><td><code>Three times</code></td><td><code>Once</code></td></tr><tr><td>Convert<code>-&gt;</code>Pdf<code>-&gt;</code>Expand beamer slides</td><td><code>on</code></td><td><code>off</code></td></tr></tbody></table><h2 id="graphics" tabindex="-1">Graphics <a class="header-anchor" href="#graphics" aria-label="Permalink to &quot;Graphics&quot;">​</a></h2><table><thead><tr><th>Action</th><th>Mogan Research</th><th>GNU TeXmacs</th></tr></thead><tbody><tr><td>Insert<code>-&gt;</code>Image<code>-&gt;</code>Draw image</td><td>Show grid</td><td>Do not show grid</td></tr><tr><td>Insert<code>-&gt;</code>Image<code>-&gt;</code>Ink here</td><td>Show grid</td><td>Do not show grid</td></tr><tr><td>Insert<code>-&gt;</code>Grid<code>-&gt;</code>Unit length</td><td>2</td><td>1</td></tr></tbody></table><h2 id="texmacs-home-path" tabindex="-1">TEXMACS_HOME_PATH <a class="header-anchor" href="#texmacs-home-path" aria-label="Permalink to &quot;TEXMACS_HOME_PATH&quot;">​</a></h2><table><thead><tr><th>OS</th><th>Mogan Research</th><th>GNU TeXmacs</th></tr></thead><tbody><tr><td>Linux</td><td><code>$XDG_DATA_HOME/XmacsLabs</code></td><td><code>$HOME/.TeXmacs</code></td></tr><tr><td></td><td><code>$HOME/.local/share/XmacsLabs</code></td><td></td></tr><tr><td>macOS</td><td><code>$HOME/Library/Application Support/XmacsLabs</code></td><td><code>$HOME/.TeXmacs</code></td></tr><tr><td>Windows</td><td><code>%APPDATA%\\XmacsLabs</code></td><td><code>%APPDATA%\\TeXmacs</code></td></tr><tr><td></td><td><code>C:\\Users\\[User name]\\AppData\\Roaming\\XmacsLabs</code></td><td><code>C:\\Users\\[User name]\\AppData\\Roaming\\TeXmacs</code></td></tr></tbody></table><blockquote><p>Why: Using different TEXMACS_HOME_PATH is to make it possible to install both Mogan Research and GNU TeXmacs. The changes on Linux and macOS is to meet the standards on Linux and macOS.</p></blockquote>',12),c=[s];function r(n,i,h,m,l,g){return a(),t("div",null,c)}const b=e(o,[["render",r]]);export{u as __pageData,b as default};