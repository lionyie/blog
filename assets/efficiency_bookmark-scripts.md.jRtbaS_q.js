import{_ as s,c as i,o as a,a5 as n}from"./chunks/framework.DqL87qh9.js";const g=JSON.parse('{"title":"书签脚本","description":"收录一些实用的书签脚本，没想到书签还能这么玩","frontmatter":{"description":"收录一些实用的书签脚本，没想到书签还能这么玩"},"headers":[],"relativePath":"efficiency/bookmark-scripts.md","filePath":"efficiency/bookmark-scripts.md","lastUpdated":1712920122000}'),t={name:"efficiency/bookmark-scripts.md"},e=n(`<h1 id="书签脚本" tabindex="-1">书签脚本 <a class="header-anchor" href="#书签脚本" aria-label="Permalink to &quot;书签脚本&quot;">​</a></h1><h2 id="回到顶部" tabindex="-1">回到顶部 <a class="header-anchor" href="#回到顶部" aria-label="Permalink to &quot;回到顶部&quot;">​</a></h2><p>只支持窗口滚动，不支持内联滚动</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">javascript</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  document.scrollingElement.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">scrollIntoView</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ behavior: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;smooth&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})()</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><a href="javascript:void(function(){document.scrollingElement.scrollIntoView({behavior:&#39;smooth&#39;})})()">回到顶部</a></p><h2 id="显示密码" tabindex="-1">显示密码 <a class="header-anchor" href="#显示密码" aria-label="Permalink to &quot;显示密码&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">javascript</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">querySelectorAll</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;input[type=password]&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">forEach</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">dom</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    dom.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setAttribute</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;type&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;text&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})()</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><a href="javascript:void(function(){document.querySelectorAll(&#39;input[type=password]&#39;).forEach(function(dom){dom.setAttribute(&#39;type&#39;,&#39;text&#39;)})})()">显示密码</a></p>`,8),l=[e];function p(h,r,k,d,E,o){return a(),i("div",null,l)}const u=s(t,[["render",p]]);export{g as __pageData,u as default};
