System.register(["./vendor-legacy.0f70f248.js"],(function(t){"use strict";var n,d,u;return{setters:[function(t){n=t.e,d=t.o,u=t.G}],execute:function(){const e={class:"markdown-body"},o=[u('<h1>countup组件</h1><h3>介绍</h3><p>countup 数字滚动组件，用于数字的动态效果展示</p><h3>安装</h3><pre><code class="language-javascript">import { createApp } from &#39;vue&#39;;\n// vue\nimport { CountUp } from &#39;@nutui/nutui&#39;;\n// taro\nimport { CountUp } from &#39;@nutui/nutui-taro&#39;;\n\nconst app = createApp();\napp.use(CountUp);\n</code></pre><h2>代码演示</h2><h2>基本用法</h2><pre><code class="language-html">&lt;nut-countup :init-num=&#39;0&#39; :end-num=&#39;200&#39;&gt;&lt;/nut-countup&gt;\n\n&lt;nut-countup :init-num=&#39;150.00&#39; :end-num=&#39;0.00&#39; :speed=&#39;2.62&#39; :to-fixed=&#39;2&#39;&gt;&lt;/nut-countup&gt;\n\n&lt;nut-countup :init-num=&#39;1000.00&#39; :end-num=&#39;0.00&#39; :speed=&#39;6.3&#39; :start-flag=&#39;startNum&#39; :to-fixed=&#39;2&#39;&gt;&lt;/nut-countup&gt;\n</code></pre><h2>数字滚动</h2><pre><code class="language-html">&lt;nut-countup :scrolling=&quot;true&quot; :init-num=&#39;17.618&#39; :during=&quot;600&quot;&gt;&lt;/nut-countup&gt;\n</code></pre><h2>自定义数字图片展示</h2><pre><code class="language-html">&lt;nut-countup\n    :custom-change-num=&quot;customNumber&quot;\n    :custom-bg-img=&quot;bgImage&quot;\n    :custom-spac-num=&quot;11&quot;\n    :num-width=&quot;33&quot;\n    :num-height=&quot;47&quot;\n    :during=&quot;5000&quot;\n&gt;\n&lt;/nut-countup&gt;\n</code></pre><pre><code class="language-javascript">export default {\n    data() {\n        return {\n            customNumber: 618, \n            bgImage: &#39;https://img10.360buyimg.com/imagetools/jfs/t1/133024/3/2251/2646/5ee7549aE8dc02d7e/de6901b6c72db396.png&#39;\n        };\n    },\n    methods: {\n        run() {\n            let timer = null;\n            timer = setInterval(() =&gt; {\n                this.customNumber = Math.floor(Math.random() * (700 - 100 + 1) + 100);\n            }, 5000);\n        }\n    },\n    mounted() {\n        this.run();\n    }\n};\n</code></pre><h2>抽奖</h2><pre><code class="language-html">&lt;nut-countup\n    ref=&quot;countup-machine&quot;\n    type=&quot;machine&quot;\n    :machine-num=&quot;machineNum&quot;\n    :machine-prize-num=&quot;5&quot;\n    :machine-prize-level=&quot;prizeLevel&quot;\n    :custom-bg-img=&quot;bgImage&quot;\n    :num-width=&quot;100&quot;\n    :num-height=&quot;100&quot;\n    :during=&quot;3000&quot;\n    @scroll-end=&quot;scrollAniEnd&quot;\n&gt;\n&lt;/nut-countup&gt;\n&lt;nut-button @click=&quot;startRole&quot; :disabled=&quot;startFlag&quot;&gt;抽奖&lt;/nut-button&gt;\n</code></pre><pre><code class="language-javascript">export default {\n    data() {\n        return {\n            startFlag: false,\n            machineNum: 3,\n            bgImage: &#39;https://img10.360buyimg.com/imagetools/jfs/t1/121466/20/6784/28830/5f06e7f2Edbb8998c/9bdd9e7b24dff9fe.png&#39;,\n            prizeLevel: 0\n        };\n    },\n    methods: {\n        startRole() {\n            this.prizeLevel = Math.floor(Math.random() * 5 + 1);\n            this.startFlag = true;\n            this.$refs[&#39;countup-machine&#39;].machineLuck();\n        },\n        scrollAniEnd() {\n            this.$toast.text(&#39;恭喜中奖！！！&#39;);\n            setTimeout(() =&gt; {\n                this.startFlag = false;\n            }, 300);\n        }\n    }\n};\n</code></pre><h2>Prop</h2><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>init-num</td><td>初始数字</td><td>Number</td><td>0</td></tr><tr><td>end-num</td><td>结束数字</td><td>Number</td><td>0</td></tr><tr><td>speed</td><td>间隔数字，目前仅支持基本用法</td><td>Number</td><td>1</td></tr><tr><td>to-fixed</td><td>保留小数点后几位</td><td>Number</td><td>以传入的数字为准</td></tr><tr><td>start-flag</td><td>触发数字滚动的标识</td><td>Boolean</td><td>true</td></tr><tr><td>during</td><td>滚动一次运行时间</td><td>Number</td><td>1000</td></tr><tr><td>num-width</td><td>数字宽度，常用于自定义无缝滚动</td><td>Number</td><td>20</td></tr><tr><td>num-height</td><td>数字高度，常用于自定义无缝滚动（抽奖功能必传）</td><td>Number</td><td>20</td></tr><tr><td>scrolling</td><td>用于数字滚动展示</td><td>Boolean</td><td>false</td></tr><tr><td>custom</td><td>用于自定义图片数字滚动</td><td>Boolean</td><td>false</td></tr><tr><td>custom-change-num</td><td>要变化的数字（用于自定义图片,initNum\\endNum在此无效）</td><td>Number</td><td>1</td></tr><tr><td>custom-bg-img</td><td>自定义图片（建议使用雪碧图实现，使用抽奖功能必须使用雪碧图）</td><td>-</td><td>-</td></tr><tr><td>custom-spac-num</td><td>图片中数字之间可能会存在间距</td><td>Number</td><td>0</td></tr><tr><td>type</td><td>使用抽奖功能必传“machine”</td><td>string</td><td>‘’</td></tr><tr><td>machine-prize-num</td><td>奖品个数，一共多少个奖品，必传</td><td>number</td><td>4</td></tr><tr><td>machine-num</td><td>抽奖位，即滚动几个，必传</td><td>number</td><td>3</td></tr><tr><td>machine-prize-level</td><td>中奖图标，图标在雪碧图中的位置</td><td>number</td><td>0</td></tr><tr><td>machine-trun-more</td><td>滚动圈数</td><td>number</td><td>0</td></tr></tbody></table><blockquote><p>说明：抽奖功能需要结合图标位置计算，故需传入雪碧图中单个图标的高度 num-height；中奖奖品根据雪碧图中的奖品位数来定位，从 1 到 N；</p></blockquote><h2>Event</h2><table><thead><tr><th>字段</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>scroll-end</td><td>滚动结束后回调函数</td><td>-</td></tr></tbody></table>',21)];t("default",{setup:t=>(t,u)=>(d(),n("div",e,o))})}}}));
