import{_ as a,c as e,o as s,a2 as r}from"./chunks/framework.B05PtJDG.js";const b=JSON.parse('{"title":"SVG图像插件","description":"","frontmatter":{},"headers":[],"relativePath":"zh/guide/plugin_image_svg.md","filePath":"zh/guide/plugin_image_svg.md","lastUpdated":1711517195000}'),i={name:"zh/guide/plugin_image_svg.md"},t=r('<h1 id="svg图像插件" tabindex="-1">SVG图像插件 <a class="header-anchor" href="#svg图像插件" aria-label="Permalink to &quot;SVG图像插件&quot;">​</a></h1><p>SVG图像插件定义了从SVG格式到PNG、Postscript、PDF格式的转换器。</p><ul><li>SVG2PNG: 用于编辑器中图像的实时渲染</li><li>SVG2EPS: 用于将TeXmacs文档导出为Postscript文档</li><li>SVG2PDF: 用户将TeXmacs文档导出为PDF文档</li></ul><p>SVG2PNG目前是通过Qt的SVG支持实现的，无需依赖外部软件，对于墨干V1.2.5而言，无法配置转换方式。</p><p>从SVG到EPS和PDF的格式转换如果需要保留矢量图无限制缩放的特性，那么需要用户手动配置<a href="./plugin_binary_rsvg_convert.html">rsvg-convert二进制插件</a>或者<a href="./plugin_binary_inkscape.html">Inkscape二进制插件</a>。具体规则如下：</p><ul><li>优先使用rsvg-convert或Inkscape；在rsvg-convert和Inkscape都可用的情况下，会优先使用Inkscape做转换。</li><li>如果两者都不可用，则使用ImagicMagick的convert命令做相关转换。</li><li>如果所有命令行都不可用，那么导出的PDF或者Postscript文档中的图像变为位图或者会弹出错误提示。</li></ul><p>SVG图像插件是单文件插件，源代码如下所示：</p><ul><li><a href="https://codeberg.org/XmacsLabs/mogan/src/branch/branch-1.2/TeXmacs/plugins/image/progs/image/svg.scm" target="_blank" rel="noreferrer">https://codeberg.org/XmacsLabs/mogan/src/branch/branch-1.2/TeXmacs/plugins/image/progs/image/svg.scm</a></li><li><a href="https://gitee.com/XmacsLabs/mogan/blob/branch-1.2/TeXmacs/plugins/image/progs/image/svg.scm" target="_blank" rel="noreferrer">https://gitee.com/XmacsLabs/mogan/blob/branch-1.2/TeXmacs/plugins/image/progs/image/svg.scm</a></li><li><a href="https://github.com/XmacsLabs/mogan/blob/branch-1.2/TeXmacs/plugins/image/progs/image/svg.scm" target="_blank" rel="noreferrer">https://github.com/XmacsLabs/mogan/blob/branch-1.2/TeXmacs/plugins/image/progs/image/svg.scm</a></li></ul>',8),g=[t];function c(n,l,o,m,p,_){return s(),e("div",null,g)}const u=a(i,[["render",c]]);export{b as __pageData,u as default};
