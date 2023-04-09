import{_ as e,c as t,o as a,N as s}from"./chunks/framework.72fe3cca.js";const m=JSON.parse('{"title":"Git Workflow","description":"","frontmatter":{},"headers":[],"relativePath":"guide/Git.md","lastUpdated":1677326064000}'),o={name:"guide/Git.md"},n=s(`<h1 id="git-workflow" tabindex="-1">Git Workflow <a class="header-anchor" href="#git-workflow" aria-label="Permalink to &quot;Git Workflow&quot;">​</a></h1><p>Git is a <strong>distributed</strong> version control system.</p><h2 id="hosting-services" tabindex="-1">Hosting Services <a class="header-anchor" href="#hosting-services" aria-label="Permalink to &quot;Hosting Services&quot;">​</a></h2><p>Mogan is available on:</p><table><thead><tr><th>Platform</th><th>Link</th><th>Organization or Company</th><th>Location</th></tr></thead><tbody><tr><td>Gitlab</td><td><a href="https://git.lug.ustc.edu.cn/XmacsLabs/mogan" target="_blank" rel="noreferrer">https://git.lug.ustc.edu.cn/XmacsLabs/mogan</a></td><td>USTC LUG</td><td>China</td></tr><tr><td>Codeberg</td><td><a href="https://codeberg.org/XmacsLabs/mogan" target="_blank" rel="noreferrer">https://codeberg.org/XmacsLabs/mogan</a></td><td>Codeberg e.V.</td><td>Germany</td></tr><tr><td>Gitee</td><td><a href="https://gitee.com/XmacsLabs/mogan" target="_blank" rel="noreferrer">https://gitee.com/XmacsLabs/mogan</a></td><td>深圳市奥思网络科技有限公司</td><td>China</td></tr><tr><td>Github</td><td><a href="https://github.com/XmacsLabs/mogan" target="_blank" rel="noreferrer">https://github.com/XmacsLabs/mogan</a></td><td>Github, Inc.</td><td>US</td></tr></tbody></table><p>We receives issues and pull requests from the git hosting services listed above.</p><p>If you hope to add your favorite Git hosting service, please contact us:</p><ul><li>For hosting services owned by commercial company, we hope to choose the most popular one for each country</li><li>For hosting services owned by organization like university, the more the better. We hope the employees or students of those oganizations can comtribute to Mogan without leaking their own privacy to commercial companies.</li></ul><p>The Git workflow for different hosting services is different. There are described below.</p><h3 id="workflow-on-gitee" tabindex="-1">Workflow on Gitee <a class="header-anchor" href="#workflow-on-gitee" aria-label="Permalink to &quot;Workflow on Gitee&quot;">​</a></h3><p>Clone and add the Gitee remote:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git clone git@gitee.com:XmacsLabs/mogan.git</span></span>
<span class="line"><span style="color:#A6ACCD;">cd mogan</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git remote add gitee git@gitee.com:XmacsLabs/mogan.git</span></span></code></pre></div><p>Create a pull request, see <a href="https://gitee.com/help/articles/4346" target="_blank" rel="noreferrer">Gitee Official Doc</a>:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git checkout -b [branch-name]</span></span>
<span class="line"><span style="color:#A6ACCD;"># coding and \`git commit\`</span></span>
<span class="line"><span style="color:#A6ACCD;">git push gitee [branch-name]:main</span></span></code></pre></div><p>Just push to the main branch, and the pull request will be created automatically.</p><h3 id="workflow-on-github-gitlab-gitea" tabindex="-1">Workflow on Github/GitLab/Gitea <a class="header-anchor" href="#workflow-on-github-gitlab-gitea" aria-label="Permalink to &quot;Workflow on Github/GitLab/Gitea&quot;">​</a></h3><p>Add the Github remote:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git remote add github git@github.com:XmacsLabs/mogan.git</span></span></code></pre></div><p>Create a pull request, see <a href="https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/creating-an-issue-or-pull-request#creating-a-pull-request" target="_blank" rel="noreferrer">Github Official Doc</a> for a detailed instruction:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git checkout -b [branch-name]</span></span>
<span class="line"><span style="color:#A6ACCD;"># coding and \`git commit\`</span></span>
<span class="line"><span style="color:#A6ACCD;">git push github [branch-name]</span></span>
<span class="line"><span style="color:#A6ACCD;"># manually create the github pull request</span></span></code></pre></div><h3 id="why-are-you-using-multiple-git-hosting-services" tabindex="-1">Why are you using multiple Git hosting services? <a class="header-anchor" href="#why-are-you-using-multiple-git-hosting-services" aria-label="Permalink to &quot;Why are you using multiple Git hosting services?&quot;">​</a></h3><p>Because <strong>we do not want to</strong> stick to one Git hosting service. And we hope to receive more feedbacks and contributions from users and developers.</p><p>And Mogan is a <strong>libre software</strong>. We are willing to pay extra efforts to deliver the source code of Mogan to <strong>everyone on Earth</strong> (also on Mars in 50 years?).</p><h3 id="how-to-sync-between-multiple-git-hosting-services" tabindex="-1">How to sync between multiple Git hosting services? <a class="header-anchor" href="#how-to-sync-between-multiple-git-hosting-services" aria-label="Permalink to &quot;How to sync between multiple Git hosting services?&quot;">​</a></h3><p>Currently, the admins of the Mogan project will sync manually.</p>`,25),i=[n];function r(l,c,p,h,g,d){return a(),t("div",null,i)}const b=e(o,[["render",r]]);export{m as __pageData,b as default};
