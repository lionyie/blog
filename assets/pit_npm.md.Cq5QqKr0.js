import{_ as s,c as i,o as a,a5 as n}from"./chunks/framework.Dx7kDfBs.js";const g=JSON.parse('{"title":"npm 踩坑记录","description":"","frontmatter":{"outline":2},"headers":[],"relativePath":"pit/npm.md","filePath":"pit/npm.md","lastUpdated":1712837691000}'),e={name:"pit/npm.md"},p=n(`<h1 id="npm-踩坑记录" tabindex="-1">npm 踩坑记录 <a class="header-anchor" href="#npm-踩坑记录" aria-label="Permalink to &quot;npm 踩坑记录&quot;">​</a></h1><blockquote><p>记录 <code>npm</code> <code>yarn</code> <code>pnpm</code> 相关踩坑</p></blockquote><h2 id="npm-安装-node-sass-经常失败" tabindex="-1">npm 安装 <code>node-sass</code> 经常失败 <a class="header-anchor" href="#npm-安装-node-sass-经常失败" aria-label="Permalink to &quot;npm 安装 \`node-sass\` 经常失败&quot;">​</a></h2><blockquote><p>虽说 <code>node-sass</code> 已经被淘汰，现在都用 <a href="https://github.com/sass/dart-sass" target="_blank" rel="noreferrer">dart-sass</a>，但你总会遇到一些老古董项目的</p></blockquote><p>在使用 <code>npm</code> 安装依赖时，遇到含有二进制文件的依赖包会经常失败，比如：<code>node-sass</code>、<code>puppeteer</code> 等</p><details class="details custom-block"><summary>为什么配置了国内镜像源安装也会失败？</summary><p>配置的国内镜像源只对 <code>npm</code> 包生效，而其中包含的二进制文件使用的是专门的下载地址，需要单独配置</p><p>比如 <code>node-sass</code> 需要配置 <code>sass_binary_site</code>，其<a href="https://github.com/sass/node-sass/blob/ee13eb9c62449d1e535189a063cbdd15583ebf32/lib/extensions.js#L246" target="_blank" rel="noreferrer">源码</a>如下</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getBinaryUrl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> site </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    getArgument</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;--sass-binary-site&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    process.env.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">SASS_BINARY_SITE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ||</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    process.env.npm_config_sass_binary_site </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    (pkg.nodeSassConfig </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pkg.nodeSassConfig.binarySite) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;https://github.com/sass/node-sass/releases/download&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [site, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;v&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pkg.version, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getBinaryName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">join</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>其默认地址是 <code>github</code>，而因为一些原因导致咱们安装失败所以也正常</p></details><h4 id="解决方法" tabindex="-1">解决方法 <a class="header-anchor" href="#解决方法" aria-label="Permalink to &quot;解决方法&quot;">​</a></h4><div class="tip custom-block"><p class="custom-block-title">前置知识：<code>.npmrc</code></p><p><code>.npmrc</code> 文件是 <code>npm</code> 的配置文件</p><p>当在使用 <code>npm</code> 时它会从命令行、环境变量和 <code>.npmrc</code> 文件中获取其配置</p><p>其加载优先级：命令行 &gt; 项目 <code>.npmrc</code> &gt; 全局 <code>.npmrc</code> &gt; 默认</p><blockquote><p><code>yarn</code> 的配置文件为 <code>.yarnrc</code></p><p><code>pnpm</code> 的配置文件为 <code>.npmrc</code></p></blockquote></div><h4 id="解决方法-1" tabindex="-1">解决方法 <a class="header-anchor" href="#解决方法-1" aria-label="Permalink to &quot;解决方法&quot;">​</a></h4><blockquote><p>临时解决（以 <code>node-sass</code> 为例）</p></blockquote><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> node-sass</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --sass_binary_site=https://npmmirror.com/mirrors/node-sass</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># OR</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> node-sass</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --sass_binary_site=https://npmmirror.com/mirrors/node-sass</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote><p>长期解决</p></blockquote><p>在项目根目录新建 <code>.npmrc</code> 文件，然后配置对应的二进制下载地址</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># npm 镜像地址</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">registry</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://registry.npmmirror.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 二进制文件下载地址</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sass_binary_site</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://npmmirror.com/mirrors/node-sass</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">phantomjs_cdnurl</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://npmmirror.com/mirrors/phantomjs</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">electron_mirror</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://npmmirror.com/mirrors/electron</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">profiler_binary_host_mirror</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://npmmirror.com/mirrors/node-inspector</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">chromedriver_cdnurl</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://npmmirror.com/mirrors/chromedriver</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,14),l=[p];function t(r,h,k,d,o,c){return a(),i("div",null,l)}const b=s(e,[["render",t]]);export{g as __pageData,b as default};
