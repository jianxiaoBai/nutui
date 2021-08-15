System.register(["./vendor-legacy.0f70f248.js"],(function(t){"use strict";var o,n,e;return{setters:[function(t){o=t.e,n=t.o,e=t.G}],execute:function(){const c={class:"markdown-body"},d=[e('<h1>Icon 图标</h1><h3>介绍</h3><p>基于 IconFont 字体的图标集，可以通过 Icon 组件使用。</p><h3>安装</h3><pre><code class="language-javascript">import { createApp } from &#39;vue&#39;;\n// vue\nimport { Icon } from &#39;@nutui/nutui&#39;;\n// taro\nimport { Icon } from &#39;@nutui/nutui-taro&#39;;\n\nconst app = createApp();\napp.use(Icon);\n\n</code></pre><h2>代码演示</h2><h3>基础用法</h3><p><code>Icon</code> 的 <code>name</code> 属性支持传入图标名称或图片链接。</p><pre><code class="language-html">&lt;nut-icon name=&quot;dongdong&quot;&gt;&lt;/nut-icon&gt;\n&lt;nut-icon name=&quot;JD&quot;&gt;&lt;/nut-icon&gt;\n&lt;nut-icon size=&quot;40&quot;  name=&quot;https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png&quot;&gt;&lt;/nut-icon&gt;\n</code></pre><h3>图标颜色</h3><p><code>Icon</code> 的 <code>color</code> 属性用来设置图标的颜色。</p><pre><code class="language-html">&lt;nut-icon name=&quot;dongdong&quot; color=&quot;#fa2c19&quot;&gt;&lt;/nut-icon&gt;\n&lt;nut-icon name=&quot;dongdong&quot; color=&quot;#64b578&quot;&gt;&lt;/nut-icon&gt;\n&lt;nut-icon name=&quot;JD&quot; color=&quot;#fa2c19&quot;&gt;&lt;/nut-icon&gt;\n</code></pre><h3>图标大小</h3><p><code>Icon</code> 的 <code>size</code> 属性用来设置图标的尺寸大小，默认单位为 <code>px</code>。</p><pre><code class="language-html">&lt;nut-icon name=&quot;dongdong&quot;&gt;&lt;/nut-icon&gt;\n&lt;nut-icon name=&quot;dongdong&quot; size=&quot;24&quot;&gt;&lt;/nut-icon&gt;\n&lt;nut-icon name=&quot;dongdong&quot; size=&quot;16&quot;&gt;&lt;/nut-icon&gt;\n</code></pre><h3>自定义图标</h3><p>如果需要在现有 Icon 的基础上使用更多图标，可以引入第三方 iconfont 对应的字体文件和 CSS 文件，之后就可以在 Icon 组件中直接使用。</p><blockquote><p>方案一 引入 <a href="https://www.iconfont.cn/">iconfont</a> 推荐此方案</p></blockquote><p>第一步：首先在 <a href="https://www.iconfont.cn/">iconfont</a> 生成你自定义的Icon文件下载存放至本地项目 <a href="https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.d8d11a391&amp;helptype=code">详细使用说明</a></p><pre><code class="language-bash">/assets/font/demo.css\n/assets/font/demo_index.html\n/assets/font/iconfont.css\n/assets/font/iconfont.js\n/assets/font/iconfont.json\n/assets/font/iconfont.ttf\n/assets/font/iconfont.woff\n/assets/font/iconfont.woff2\n</code></pre><p>第二步：项目入口文件 main.js 引用 <code>iconfont.css</code></p><pre><code class="language-javascript">import &#39;./assets/font/iconfont.css&#39;;\n</code></pre><p>第三步：</p><pre><code class="language-html">&lt;!-- \n  font-class-name 指定类名为默认 iconfont\n  class-prefix 指定默认 icon\n  name 值根据 iconfont.css 中值对应填写 \n--&gt;\n&lt;nut-icon font-class-name=&quot;iconfont&quot; class-prefix=&quot;icon&quot; name=&quot;close&quot; /&gt;\n</code></pre><blockquote><p>方案二 第三方自定义字体库</p></blockquote><pre><code class="language-css">/* 引入第三方或自定义的字体图标样式 */\n@font-face {\n  font-family: &#39;my-icon&#39;;\n  src: url(&#39;./my-icon.ttf&#39;) format(&#39;truetype&#39;);\n}\n\n.my-icon {\n  font-family: &#39;my-icon&#39;;\n}\n\n.my-icon-extra::before {\n  content: &#39;\\e626&#39;;\n}\n</code></pre><pre><code class="language-html">&lt;!-- \n  font-class-name 指定类名为默认 my-icon\n  class-prefix 指定默认 my-icon\n--&gt;\n&lt;nut-icon font-class-name=&quot;my-icon&quot; class-prefix=&quot;my-icon&quot; name=&quot;extra&quot; /&gt;\n\n</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>name</td><td>图标名称或图片链接</td><td>String</td><td>-</td></tr><tr><td>color</td><td>图标颜色</td><td>String</td><td>-</td></tr><tr><td>size</td><td>图标大小，如 <code>20px</code> <code>2em</code> <code>2rem</code></td><td>String or Number</td><td>-</td></tr><tr><td>font-class-name</td><td>字体基础类名</td><td>String</td><td><code>nutui-iconfont</code></td></tr><tr><td>class-prefix</td><td>类名前缀，用于使用自定义图标</td><td>String</td><td><code>nut-icon</code></td></tr><tr><td>tag</td><td>HTML 标签</td><td>String</td><td><code>i</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击图标时触发</td><td>event: Event</td></tr></tbody></table>',32)];t("default",{setup:t=>(t,e)=>(n(),o("div",c,d))})}}}));
