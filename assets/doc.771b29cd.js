import{c as t,o as e,B as o}from"./vendor.cc24f590.js";const i={class:"markdown-body"},d=o('<h1>Swiper 轮播图 组件</h1><h3>介绍</h3><p>常用于一组图片或卡片轮播，当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。</p><h3>安装</h3><pre><code class="language-javascript">import { createApp } from &#39;vue&#39;;\nimport { Swiper } from &#39;@nutui/nutui&#39;;\n\nconst app = createApp();\napp.use(Swiper);\n</code></pre><h2>代码演示</h2><h3>基础用法</h3><p><code>auto-play</code> 自动轮播的时长 <code>init-page</code> 初始索引值 <code>pagination-visible</code> 是否显示分页指示器 <code>pagination-color</code> 指示器颜色自定义</p><pre><code class="language-html">&lt;nut-swiper :init-page=&quot;state.page&quot; :pagination-visible=&quot;true&quot; pagination-color=&quot;#426543&quot; auto-play=&quot;3000&quot;&gt;\n  &lt;nut-swiper-item&gt;\n    &lt;img src=&quot;//m.360buyimg.com/mobilecms/s700x280_jfs/t1/152158/32/19170/280589/6035429fE08208901/024578cf04ce3b47.jpg!cr_1125x445_0_171&quot; alt=&quot;&quot; /&gt;\n  &lt;/nut-swiper-item&gt;\n  &lt;nut-swiper-item&gt;\n    &lt;img src=&quot;//m.360buyimg.com/mobilecms/s700x280_jfs/t1/159602/22/7999/126515/6035f371E6f95bfee/559cb1ee48c962c9.jpg&quot; alt=&quot;&quot; /&gt;\n  &lt;/nut-swiper-item&gt;\n  &lt;nut-swiper-item&gt;\n    &lt;img src=&quot;//m.360buyimg.com/mobilecms/s700x280_jfs/t1/166846/13/7534/136440/60338b5cEd491d8b3/9e5527429136ab86.jpg&quot; alt=&quot;&quot; /&gt;\n  &lt;/nut-swiper-item&gt;\n  &lt;nut-swiper-item&gt;\n    &lt;img src=&quot;//m.360buyimg.com/mobilecms/s700x280_jfs/t1/145433/27/14059/141680/5facf066Ec402354c/530d5a316aed55fc.jpg!cr_1125x445_0_171&quot; alt=&quot;&quot; /&gt;\n  &lt;/nut-swiper-item&gt;\n&lt;/nut-swiper&gt;\n</code></pre><h3>自定义大小</h3><p><code>width</code> 自定义轮播大小</p><pre><code class="language-html">&lt;nut-swiper :init-page=&quot;state.page2&quot; :loop=&quot;false&quot; width=&quot;300&quot;&gt;\n  &lt;nut-swiper-item&gt;\n    &lt;img src=&quot;//m.360buyimg.com/mobilecms/s700x280_jfs/t1/152158/32/19170/280589/6035429fE08208901/024578cf04ce3b47.jpg!cr_1125x445_0_171&quot; alt=&quot;&quot; /&gt;\n  &lt;/nut-swiper-item&gt;\n  &lt;nut-swiper-item&gt;\n    &lt;img src=&quot;//m.360buyimg.com/mobilecms/s700x280_jfs/t1/159602/22/7999/126515/6035f371E6f95bfee/559cb1ee48c962c9.jpg&quot; alt=&quot;&quot; /&gt;\n  &lt;/nut-swiper-item&gt;\n  &lt;nut-swiper-item&gt;\n    &lt;img src=&quot;//m.360buyimg.com/mobilecms/s700x280_jfs/t1/166846/13/7534/136440/60338b5cEd491d8b3/9e5527429136ab86.jpg&quot; alt=&quot;&quot; /&gt;\n  &lt;/nut-swiper-item&gt;\n  &lt;nut-swiper-item&gt;\n    &lt;img src=&quot;//m.360buyimg.com/mobilecms/s700x280_jfs/t1/145433/27/14059/141680/5facf066Ec402354c/530d5a316aed55fc.jpg!cr_1125x445_0_171&quot; alt=&quot;&quot; /&gt;\n  &lt;/nut-swiper-item&gt;\n&lt;/nut-swiper&gt;\n</code></pre><h3>自定义分页指示器</h3><p><code>v-slot:page</code> 表示自定义指示器</p><pre><code class="language-html">&lt;nut-swiper :init-page=&quot;state.page3&quot; :loop=&quot;true&quot; @change=&quot;change&quot;&gt;\n  &lt;nut-swiper-item&gt;\n    &lt;img src=&quot;//m.360buyimg.com/mobilecms/s700x280_jfs/t1/152158/32/19170/280589/6035429fE08208901/024578cf04ce3b47.jpg!cr_1125x445_0_171&quot; alt=&quot;&quot; /&gt;\n  &lt;/nut-swiper-item&gt;\n  &lt;nut-swiper-item&gt;\n    &lt;img src=&quot;//m.360buyimg.com/mobilecms/s700x280_jfs/t1/159602/22/7999/126515/6035f371E6f95bfee/559cb1ee48c962c9.jpg&quot; alt=&quot;&quot; /&gt;\n  &lt;/nut-swiper-item&gt;\n  &lt;nut-swiper-item&gt;\n    &lt;img src=&quot;//m.360buyimg.com/mobilecms/s700x280_jfs/t1/166846/13/7534/136440/60338b5cEd491d8b3/9e5527429136ab86.jpg&quot; alt=&quot;&quot; /&gt;\n  &lt;/nut-swiper-item&gt;\n  &lt;nut-swiper-item&gt;\n    &lt;img src=&quot;//m.360buyimg.com/mobilecms/s700x280_jfs/t1/145433/27/14059/141680/5facf066Ec402354c/530d5a316aed55fc.jpg!cr_1125x445_0_171&quot; alt=&quot;&quot; /&gt;\n  &lt;/nut-swiper-item&gt;\n  &lt;template v-slot:page&gt;\n    &lt;div class=&quot;page&quot;&gt;&lt;/div&gt;\n  &lt;/template&gt;\n&lt;/nut-swiper&gt;\n</code></pre><h3>垂直方向</h3><p><code>direction</code> 自定义轮播方向</p><pre><code class="language-html">&lt;nut-swiper :init-page=&quot;state.page4&quot; :loop=&quot;true&quot; auto-play=&quot;3000&quot; direction=&quot;vertical&quot; height=&quot;150&quot; :pagination-visible=&quot;true&quot; style=&quot;height: 150px&quot;&gt;\n  &lt;nut-swiper-item&gt;\n    &lt;img src=&quot;//m.360buyimg.com/mobilecms/s700x280_jfs/t1/152158/32/19170/280589/6035429fE08208901/024578cf04ce3b47.jpg!cr_1125x445_0_171&quot; alt=&quot;&quot; /&gt;\n  &lt;/nut-swiper-item&gt;\n  &lt;nut-swiper-item&gt;\n    &lt;img src=&quot;//m.360buyimg.com/mobilecms/s700x280_jfs/t1/159602/22/7999/126515/6035f371E6f95bfee/559cb1ee48c962c9.jpg&quot; alt=&quot;&quot; /&gt;\n  &lt;/nut-swiper-item&gt;\n  &lt;nut-swiper-item&gt;\n    &lt;img src=&quot;//m.360buyimg.com/mobilecms/s700x280_jfs/t1/166846/13/7534/136440/60338b5cEd491d8b3/9e5527429136ab86.jpg&quot; alt=&quot;&quot; /&gt;\n  &lt;/nut-swiper-item&gt;\n  &lt;nut-swiper-item&gt;\n    &lt;img src=&quot;//m.360buyimg.com/mobilecms/s700x280_jfs/t1/145433/27/14059/141680/5facf066Ec402354c/530d5a316aed55fc.jpg!cr_1125x445_0_171&quot; alt=&quot;&quot; /&gt;\n  &lt;/nut-swiper-item&gt;\n&lt;/nut-swiper&gt;\n</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>width</td><td>轮播卡片的宽度</td><td>Number、String</td><td>window.innerWidth</td></tr><tr><td>height</td><td>轮播卡片的高度</td><td>String、Number</td><td>0</td></tr><tr><td>direction</td><td>轮播方向,可选值<code>horizontal</code>,<code>vertical</code></td><td>String</td><td>‘horizontal’</td></tr><tr><td>pagination-visible</td><td>分页指示器是否展示</td><td>Boolean</td><td>false</td></tr><tr><td>pagination-color</td><td>分页指示器选中的颜色</td><td>String</td><td>‘#fff’</td></tr><tr><td>loop</td><td>是否循环轮播</td><td>Boolean</td><td>true</td></tr><tr><td>duration</td><td>动画时长（单位是ms）</td><td>Number、String</td><td>500</td></tr><tr><td>auto-play</td><td>自动轮播时长，0表示不会自动轮播</td><td>Number、String</td><td>0</td></tr><tr><td>init-page</td><td>初始化索引值</td><td>Number、String</td><td>0</td></tr><tr><td>touchable</td><td>是否可触摸滑动</td><td>Boolean</td><td>true</td></tr><tr><td>is-preventDefault</td><td>滑动过程中是否禁用默认事件</td><td>Boolean</td><td>true</td></tr><tr><td>is-stopPropagation</td><td>滑动过程中是否禁止冒泡</td><td>Boolean</td><td>true</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>滑动之后的回调</td><td>当前索引值index</td></tr></tbody></table><h3>API</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>prev</td><td>切换到上一页</td><td>-</td></tr><tr><td>next</td><td>切换到下一页</td><td>-</td></tr><tr><td>to</td><td>切换到指定轮播</td><td>index:number</td></tr></tbody></table>',25),u={expose:[],setup:o=>(o,u)=>(e(),t("div",i,[d]))};export default u;
