import{_ as n,c as s,o as a,a as t}from"./app.d064cf70.js";const m='{"title":"\u63A5\u53E3\u8BF7\u6C42\u4F7F\u7528","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u63A5\u53E3\u8BF7\u6C42\u4F7F\u7528","slug":"\u63A5\u53E3\u8BF7\u6C42\u4F7F\u7528"},{"level":2,"title":"\u8BF7\u6C42Demo","slug":"\u8BF7\u6C42demo"},{"level":2,"title":"\u65B9\u6CD5\u53C2\u6570","slug":"\u65B9\u6CD5\u53C2\u6570"},{"level":2,"title":"\u6CE8\u610F\u4E8B\u9879","slug":"\u6CE8\u610F\u4E8B\u9879"}],"relativePath":"documents/\u63A5\u53E3\u4F7F\u7528.md","lastUpdated":1642089146704}',p={},e=t(`<h2 id="\u63A5\u53E3\u8BF7\u6C42\u4F7F\u7528" tabindex="-1">\u63A5\u53E3\u8BF7\u6C42\u4F7F\u7528 <a class="header-anchor" href="#\u63A5\u53E3\u8BF7\u6C42\u4F7F\u7528" aria-hidden="true">#</a></h2><blockquote><p>\u4F7F\u7528\u5C01\u88C5\u597D\u7684\u8BF7\u6C42\u65B9\u6CD5 <code>myRequest</code> \u3002</p></blockquote><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// \u8BED\u6CD5\u683C\u5F0F\uFF1A</span>
uni<span class="token punctuation">.</span>$http<span class="token punctuation">.</span><span class="token function">myRequest</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;\u63A5\u53E3\u5730\u5740&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;\u8BF7\u6C42\u65B9\u5F0F&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u8BF7\u6C42\u53C2\u6570</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> value
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="\u8BF7\u6C42demo" tabindex="-1">\u8BF7\u6C42Demo <a class="header-anchor" href="#\u8BF7\u6C42demo" aria-hidden="true">#</a></h2><blockquote><p>\u6A21\u62DF\u8BF7\u6C42\uFF0C\u8FD9\u91CC\u4F7F\u7528arr\u6570\u7EC4\u63A5\u6536\u6570\u636E\uFF0C\u5F00\u53D1\u4E2D\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u4F7F\u7528\u3002</p></blockquote><div class="language-vue line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u8FD9\u91CC\u7528 arr \u63A5\u6536\u8BF7\u6C42\u7684\u6570\u636E</span>
			<span class="token literal-property property">arr</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u8FD9\u91CC\u4F7F\u7528\u751F\u547D\u5468\u671F\u76F4\u63A5\u8BF7\u6C42</span>
        <span class="token keyword">async</span> <span class="token function">onload</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u63A5\u6536\u8BF7\u6C42\u7684\u6570\u636E</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>arr <span class="token operator">=</span> <span class="token keyword">await</span> uni<span class="token punctuation">.</span>$http<span class="token punctuation">.</span><span class="token function">myRequest</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/func/funcModule&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;POST&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="\u65B9\u6CD5\u53C2\u6570" tabindex="-1">\u65B9\u6CD5\u53C2\u6570 <a class="header-anchor" href="#\u65B9\u6CD5\u53C2\u6570" aria-hidden="true">#</a></h2><table><thead><tr><th>\u53C2\u6570\u540D</th><th>\u662F\u5426\u5FC5\u586B</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>url</td><td>True</td><td>String</td><td>\u8BF7\u6C42\u7684\u63A5\u53E3\u5730\u5740</td></tr><tr><td>method</td><td>False</td><td>String</td><td>\u8BF7\u6C42\u65B9\u6CD5\uFF08POST / GET\uFF09\uFF0C\u9ED8\u8BA4\u503C\uFF1APOST</td></tr><tr><td>data</td><td>False</td><td>Function</td><td>\u8BF7\u6C42\u53C2\u6570</td></tr></tbody></table><h2 id="\u6CE8\u610F\u4E8B\u9879" tabindex="-1">\u6CE8\u610F\u4E8B\u9879 <a class="header-anchor" href="#\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a></h2><ul><li>method \u53C2\u6570\uFF1A\u9ED8\u8BA4\u662F <code>POST</code> \u8BF7\u6C42\uFF0C\u5982\u679C\u9700\u8981 <code>GET</code> \u8BF7\u6C42\uFF0C\u8BBE\u7F6E method\u4E3A <code>GET</code> \u5373\u53EF\u3002</li><li>data\u53C2\u6570\uFF1A\u5982\u679C\u4E0D\u9700\u8981\u4F20\u53C2\u53EF\u4E0D\u5199\u3002</li></ul>`,10),o=[e];function l(c,r,u,i,d,k){return a(),s("div",null,o)}var h=n(p,[["render",l]]);export{m as __pageData,h as default};
