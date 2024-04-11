import{_ as s,c as a,o as i,a5 as n}from"./chunks/framework.Dx7kDfBs.js";const E=JSON.parse('{"title":"寄存器编程","description":"","frontmatter":{},"headers":[],"relativePath":"dev/cxx/01-C/21-寄存器编程.md","filePath":"dev/cxx/01-C/21-寄存器编程.md","lastUpdated":1712837691000}'),l={name:"dev/cxx/01-C/21-寄存器编程.md"},e=n(`<h1 id="寄存器编程" tabindex="-1">寄存器编程 <a class="header-anchor" href="#寄存器编程" aria-label="Permalink to &quot;寄存器编程&quot;">​</a></h1><h2 id="寄存器基本概念" tabindex="-1">寄存器基本概念 <a class="header-anchor" href="#寄存器基本概念" aria-label="Permalink to &quot;寄存器基本概念&quot;">​</a></h2><p>寄存器的功能是存储二进制代码，它是由具有存储功能的触发器组合起来构成的。一个触发器可以存储 1 位二进制代码，故存放 n 位二进制代码的寄存器，需用 n 个触发器来构成。</p><p>按照功能的不同，可将寄存器分为基本寄存器和移位寄存器两大类。基本寄存器只能并行送入数据，也只能并行输出。移位寄存器中的数据可以在移位脉冲作用下依次逐位右移或左移，数据既可以并行输入、并行输出，也可以串行输入、串行输出，还可以并行输入、串行输出，或串行输入、并行输出，十分灵活，用途也很广。</p><p>寄存器最起码具备以下 4 种功能。 1)清除数码: 将寄存器里的原有数码清除。</p><p>2)接收数码: 在接收脉冲作用下，将外输入数码存入寄存器中。</p><p>3)存储数码: 在没有新的写入脉冲来之前，寄存器能保存原有数码不变。</p><p>4)输出数码: 在输出脉冲作用下，才通过电路输出数码。</p><p>仅具有以上功能的寄存器称为数码寄存器;有的寄存器还具有移位功能，称为移位寄存器。</p><p>寄存器有串行和并行两种数码存取方式。将 n 位二进制数一次存入寄存器或从寄存器中读出的方式称为并行方式。将 n 位二进制数以每次 1 位，分成 n 次存入寄存器并从寄存器读出，这种方式称为串行方式。并行方式只需一个时钟脉冲就可以完成数据操作，工作速度快，但需要 n 根输入和输出数据线。串行方式要使用几个时钟脉冲完成输入或输出操作，工作速度慢，但只需要一根输入或输出数据线，传输线少，适用于远距离传输。</p><h2 id="掩码" tabindex="-1">掩码 <a class="header-anchor" href="#掩码" aria-label="Permalink to &quot;掩码&quot;">​</a></h2><p>掩码(MASK)作用 ==&gt; 修改某一位</p><p>掩码(MASK)生成 = 1 &lt;&lt; (修改第几位-1)</p><h2 id="修改寄存器的位操作" tabindex="-1">修改寄存器的位操作 <a class="header-anchor" href="#修改寄存器的位操作" aria-label="Permalink to &quot;修改寄存器的位操作&quot;">​</a></h2><p>寄存器某位置 1</p><div class="language-c vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 例如寄存器flag = 1000 0001b</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 需要实现该寄存器第三位 置1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">MASK </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // MASK = 0000 0100b</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flag </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> flag </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> MASK</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // flag = 1000 0101b</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>寄存器某位清 0</p><div class="language-c vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 例如寄存器flag = 1000 0001b</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 需要实现该寄存器第八位 清0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">MASK </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 7</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // MASK = 1000 0000b</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flag </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> flag </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">MASK);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // flag = 0000 0001b;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>寄存器某位取反</p><div class="language-c vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 例如寄存器flag = 1000 0001b</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 需要实现该寄存器第七位 取反</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">MASK </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // MASK = 0100 0000b;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flag </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> flag </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">^</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> MASK;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // flag = 1100 0001b;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>具体可看一下链接：<a href="https://blog.csdn.net/weixin_43853307/article/details/108412943" target="_blank" rel="noreferrer">https://blog.csdn.net/weixin_43853307/article/details/108412943</a></p>`,21),p=[e];function t(h,k,r,d,c,g){return i(),a("div",null,p)}const b=s(l,[["render",t]]);export{E as __pageData,b as default};
