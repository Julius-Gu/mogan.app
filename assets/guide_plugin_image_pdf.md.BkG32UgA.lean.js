import{_ as t,c as i,o as s,m as e,a}from"./chunks/framework.B2EPA2lv.js";const P=JSON.parse('{"title":"PDF Image Plugin","description":"","frontmatter":{},"headers":[],"relativePath":"guide/plugin_image_pdf.md","filePath":"guide/plugin_image_pdf.md","lastUpdated":1732952826000}'),r={name:"guide/plugin_image_pdf.md"},n=e("h1",{id:"pdf-image-plugin",tabindex:"-1"},[a("PDF Image Plugin "),e("a",{class:"header-anchor",href:"#pdf-image-plugin","aria-label":'Permalink to "PDF Image Plugin"'},"​")],-1),o=e("p",null,"The renderer of Mogan doesn't support PDF images. Such PDF images are usually PDF vector graphics, made by third-party software (such as exporting to PDF vector graphics in Octave or Maxima).",-1),l=e("p",null,[a("When Mogan renders PDF images, it relies on Ghostscript to convert PDF images to PNG images. Therefore, this plugin requires users to manually install Ghostscript (see "),e("a",{href:"./plugin_binary_gs.html"},"Ghostscript Binary Plugin"),a(").")],-1),p=[n,o,l];function g(d,c,u,m,_,h){return s(),i("div",null,p)}const D=t(r,[["render",g]]);export{P as __pageData,D as default};