import{c as t,o as n,B as u}from"./vendor.cc24f590.js";const o={class:"markdown-body"},e=u('<h1>Steps 步骤条 组件</h1><h3>介绍</h3><p>拆分展示某项流程的步骤，引导用户按流程完成任务或向用户展示当前状态。</p><h3>安装</h3><pre><code class="language-javascript">import { createApp } from &#39;vue&#39;;\nimport { Steps } from &#39;@nutui/nutui&#39;;\n\nconst app = createApp();\napp.use(Steps);\n</code></pre><h2>代码演示</h2><h3>基本用法</h3><pre><code class="language-html">&lt;nut-steps current=&quot;1&quot;&gt;\n  &lt;nut-step title=&quot;进行中&quot;&gt;1&lt;/nut-step&gt;\n  &lt;nut-step title=&quot;未开始&quot;&gt;2&lt;/nut-step&gt;\n  &lt;nut-step title=&quot;未开始&quot;&gt;3&lt;/nut-step&gt;\n  &lt;nut-step title=&quot;未开始&quot;&gt;4&lt;/nut-step&gt;\n&lt;/nut-steps&gt;\n</code></pre><h3>标题和描述信息</h3><pre><code class="language-html">&lt;nut-steps current=&quot;2&quot;&gt;\n  &lt;nut-step title=&quot;已完成&quot; content=&quot;步骤描述&quot; icon=&quot;nutui-iconfont nut-icon-wanshangshide&quot;&gt;1&lt;/nut-step&gt;\n  &lt;nut-step title=&quot;进行中&quot; content=&quot;步骤描述&quot;&gt;2&lt;/nut-step&gt;\n  &lt;nut-step title=&quot;未开始&quot; content=&quot;步骤描述&quot;&gt;3&lt;/nut-step&gt;\n&lt;/nut-steps&gt;\n</code></pre><h3>自定义图标</h3><pre><code class="language-html">&lt;nut-steps current=&quot;1&quot;&gt;\n  &lt;nut-step title=&quot;已完成&quot; icon=&quot;nutui-iconfont nut-icon-wanshangshide&quot; status=&quot;error&quot;&gt;1&lt;/nut-step&gt;\n  &lt;nut-step title=&quot;进行中&quot; icon=&quot;nutui-iconfont nut-icon-notice&quot;&gt;2&lt;/nut-step&gt; \n  &lt;nut-step class=&quot;nut-step-wait&quot; title=&quot;未开始&quot; icon=&quot;nutui-iconfont nut-icon-notice&quot;&gt;3&lt;/nut-step&gt;\n&lt;/nut-steps&gt;\n</code></pre><h3>竖向步骤条</h3><pre><code class="language-html">&lt;nut-steps direction=&quot;vertical&quot; current=&quot;2&quot;&gt;\n  &lt;nut-step title=&quot;已完成&quot; icon=&quot;nutui-iconfont nut-icon-wanshangshide&quot; content=&quot;您的订单已经打包完成，商品已发出&quot; &gt;1&lt;/nut-step&gt;\n  &lt;nut-step title=&quot;进行中&quot; content=&quot;您的订单正在配送途中&quot; &gt;2&lt;/nut-step&gt;\n  &lt;nut-step title=&quot;未开始&quot; content=&quot;收货地址为：北京市经济技术开发区科创十一街18号院京东大厦&quot;&gt;3&lt;/nut-step&gt;\n&lt;/nut-steps&gt;\n</code></pre><h3>点状步骤和垂直方向</h3><pre><code class="language-html">&lt;nut-steps direction=&quot;vertical&quot; progress-dot current=&quot;2&quot;&gt;\n  &lt;nut-step title=&quot;已完成&quot; content=&quot;您的订单已经打包完成，商品已发出&quot; &gt;1&lt;/nut-step&gt;\n  &lt;nut-step title=&quot;进行中&quot; content=&quot;您的订单正在配送途中&quot;&gt;2&lt;/nut-step&gt;\n  &lt;nut-step title=&quot;未开始&quot; content=&quot;收货地址为：北京市经济技术开发区科创十一街18号院京东大厦&quot;&gt;3&lt;/nut-step&gt;\n&lt;/nut-steps&gt;\n</code></pre><h2>API</h2><h3>Props</h3><h4>nut-steps</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>direction</td><td>显示方向，<code>horizontal</code>,<code>vertical</code></td><td>String</td><td>‘horizontal’</td></tr><tr><td>current</td><td>当前所在的步骤</td><td>Number、String</td><td>‘0’</td></tr><tr><td>progress-dot</td><td>点状步骤条</td><td>Boolean</td><td>false</td></tr></tbody></table><h4>nut-step</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>流程步骤的标题</td><td>String</td><td>步骤</td></tr><tr><td>content</td><td>流程步骤的描述性文字(支持 html 结构)</td><td>String</td><td>步骤描述</td></tr><tr><td>icon</td><td>图标</td><td>String</td><td>null</td></tr></tbody></table>',22),s={expose:[],setup:u=>(u,s)=>(n(),t("div",o,[e]))};export default s;
