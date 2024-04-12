import{_ as s,c as a,o as i,a5 as n}from"./chunks/framework.DqL87qh9.js";const u=JSON.parse('{"title":"C++的变量","description":"","frontmatter":{},"headers":[],"relativePath":"dev/cxx/02-Cpp/05-变量.md","filePath":"dev/cxx/02-Cpp/05-变量.md","lastUpdated":1712920122000}'),l={name:"dev/cxx/02-Cpp/05-变量.md"},p=n(`<h1 id="c-的变量" tabindex="-1">C++的变量 <a class="header-anchor" href="#c-的变量" aria-label="Permalink to &quot;C++的变量&quot;">​</a></h1><h2 id="变量" tabindex="-1">变量 <a class="header-anchor" href="#变量" aria-label="Permalink to &quot;变量&quot;">​</a></h2><p>① 变量的作用就是就是给一段指定的内存空间起名，方便操作这段内存。</p><p>② 语法：数据类型 变量名 = 初始值；</p><p>③ 变量存在的意义：方便我们管理内存空间。</p><p>④ 每一段内存都有一个地址编号。</p><p>⑤ C++规定在创建一个常量或变量时，必须要指出相应的数据类型，否则无法给变量分配内存。</p><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#include &lt;iostream&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">using namespace std</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> main()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    //</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">变量创建的语法：数据类型 变量名 = 变量初始值</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    cout </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;a = &quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> endl;   </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">//</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 输出语句 cout </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;提示语&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 变量 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> endl; </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    system(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pause&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>运行结果：</p><ul><li>a = 10</li><li>请按任意键继续. . .</li></ul>`,10),e=[p];function t(h,k,r,d,c,E){return i(),a("div",null,e)}const g=s(l,[["render",t]]);export{u as __pageData,g as default};
