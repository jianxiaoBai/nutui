System.register(["./vendor-legacy.6ff6a364.js"],(function(t){"use strict";var e,l,n;return{setters:[function(t){e=t.c,l=t.o,n=t.B}],execute:function(){const o={class:"markdown-body"},d=n('<h1>Drag 拖拽</h1><p>实现可拖拽的任意元素</p><h2>基本用法</h2><pre><code class="language-html">&lt;nut-drag&gt;\n  &lt;div class=&quot;touch-dom&quot;&gt;可点击，可拖拽&lt;/div&gt;\n&lt;/nut-drag&gt;\n</code></pre><h2>限制拖拽方向</h2><pre><code class="language-html">&lt;nut-drag direction=&quot;x&quot;&gt;\n  &lt;div class=&quot;touch-dom&quot;&gt;只能在X轴拖动&lt;/div&gt;\n&lt;/nut-drag&gt;\n</code></pre><h2>自动吸边</h2><pre><code class="language-html">&lt;nut-drag direction=&quot;x&quot; :attract=&quot;true&quot;&gt;\n  &lt;div class=&quot;touch-dom&quot;&gt;拖动我&lt;/div&gt;\n&lt;/nut-drag&gt;\n</code></pre><h2>限制拖拽边界</h2><pre><code class="language-html">&lt;nut-drag\n  :boundary=&quot;{ top: 401, left: 9, bottom: bottom(), right: right() }&quot;\n  :attract=&quot;true&quot;\n&gt;\n  &lt;div class=&quot;touch-dom&quot;&gt;拖动我&lt;/div&gt;\n&lt;/nut-drag&gt;\n&lt;script&gt;\n setup() {\n    function right() {\n      return document.documentElement.clientWidth - 300 - 9;\n    }\n    function bottom() {\n      return document.documentElement.clientHeight - 559;\n    }\n    return {\n      right,\n      bottom\n    };\n  }\n&lt;/script&gt;\n</code></pre><h2>Prop</h2><table><thead><tr><th style="text-align:left;">字段</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td style="text-align:left;">attract</td><td style="text-align:left;">是否开启自动吸边</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">direction</td><td style="text-align:left;">拖拽元素的拖拽方向限制，<strong>x</strong>/<strong>y</strong>/<strong>all</strong>三选一</td><td style="text-align:left;">String</td><td style="text-align:left;">‘all’</td></tr><tr><td style="text-align:left;">boundary</td><td style="text-align:left;">拖拽元素的拖拽边界</td><td style="text-align:left;">Object</td><td style="text-align:left;">{top: 0,left: 0,right: 0,bottom: 0}</td></tr></tbody></table>',12);t("default",{expose:[],setup:t=>(t,n)=>(l(),e("div",o,[d]))})}}}));
