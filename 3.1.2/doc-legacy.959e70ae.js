System.register(["./vendor-legacy.0f70f248.js"],(function(t){"use strict";var e,o,n;return{setters:[function(t){e=t.e,o=t.o,n=t.G}],execute:function(){const d={class:"markdown-body"},s=[n('<h1>video 视频播放器</h1><h3>介绍</h3><p>原生video实现的视频播放器</p><h3>安装</h3><pre><code class="language-javascript">import { createApp } from &#39;vue&#39;;\nimport { Video } from &#39;@nutui/nutui&#39;;\n\nconst app = createApp();\napp.use(Video);\n</code></pre><h2>代码演示</h2><h3>基础用法</h3><pre><code class="language-html">&lt;nut-video\n  :source=&quot;source&quot;\n  @play=&quot;play&quot;\n  @pause=&quot;pause&quot;\n  @playend=&quot;playend&quot;&gt;\n&lt;/nut-video&gt;\n</code></pre><pre><code class="language-javascript">setup() {\n    const state = reactive({\n      source: {\n        src: &#39;https://storage.jd.com/about/big-final.mp4&#39;,\n        type: &#39;video/mp4&#39;\n      }\n    });\n    const play = (elm: any) =&gt; console.log(&#39;play&#39;, elm);\n    const pause = (elm: any) =&gt; console.log(&#39;pause&#39;, elm);\n    const playend = (elm: any) =&gt; console.log(&#39;playend&#39;, elm);\n\n    return { play, pause, playend, ...toRefs(state) };\n}\n</code></pre><h3>自动播放</h3><p>autoplay 属性设置视频自动播放</p><pre><code class="language-html">&lt;nut-video :source=&quot;source&quot; :options=&quot;options&quot;&gt;&lt;/nut-video&gt;\n</code></pre><pre><code class="language-javascript">setup() {\n    const state = reactive({\n      source: {\n        src: &#39;https://storage.jd.com/about/big-final.mp4&#39;,\n        type: &#39;video/mp4&#39;\n      },\n      options: {\n        autoplay: true,\n        muted: true,\n        controls: true\n      },\n    });\n\n    return { ...toRefs(state) };\n}\n</code></pre><h3>初始化静音</h3><p>muted属性设置视频初始化静音</p><pre><code class="language-html">&lt;nut-video :source=&quot;source&quot; :options=&quot;options&quot;&gt;&lt;/nut-video&gt;\n</code></pre><pre><code class="language-javascript">setup() {\n    const state = reactive({\n      source: {\n        src: &#39;https://storage.jd.com/about/big-final.mp4&#39;,\n        type: &#39;video/mp4&#39;\n      },\n      options: {\n        muted: true,\n        controls: true\n      },\n    });\n\n    return { ...toRefs(state) };\n}\n</code></pre><h3>视频封面海报设置</h3><p>poster 属性设置视频海报</p><pre><code class="language-html">&lt;nut-video :source=&quot;source&quot; :options=&quot;options&quot;&gt;&lt;/nut-video&gt;\n</code></pre><pre><code class="language-javascript">setup() {\n    const state = reactive({\n      source: {\n        src: &#39;https://storage.jd.com/about/big-final.mp4&#39;,\n        type: &#39;video/mp4&#39;\n      },\n      options: {\n        controls: true,\n        poster: &#39;https://img12.360buyimg.com/ling/s345x208_jfs/t1/168105/33/8417/54825/603df06dEfcddc4cb/21f9f5d0a1b3dad4.jpg.webp&#39;\n      },\n    });\n\n    return { ...toRefs(state) };\n}\n</code></pre><h3>行内播放</h3><p>playsinline 属性设置移动端视频行内播放，阻止新打开页面播放（兼容 ios，兼容部分安卓机）</p><pre><code class="language-html">&lt;nut-video :source=&quot;source&quot; :options=&quot;options&quot;&gt;&lt;/nut-video&gt;\n</code></pre><pre><code class="language-javascript">setup() {\n    const state = reactive({\n      source: {\n        src: &#39;https://storage.jd.com/about/big-final.mp4&#39;,\n        type: &#39;video/mp4&#39;\n      },\n      options: {\n        playsinline: true,\n        controls: true,\n      },\n    });\n\n    return { ...toRefs(state) };\n}\n</code></pre><h3>视频背景图</h3><p>当设置视频为背景图时需要将 muted 静音、 disabled 禁止操作、loop 循环播放、autoplay 自动播放设置为 true，移动端需要设置 playsinline 行内展示</p><pre><code class="language-html">&lt;nut-video :source=&quot;source&quot; :options=&quot;options&quot;&gt;&lt;/nut-video&gt;\n</code></pre><pre><code class="language-javascript">setup() {\n    const state = reactive({\n      source: {\n        src: &#39;https://storage.jd.com/about/big-final.mp4&#39;,\n        type: &#39;video/mp4&#39;\n      },\n      options: {\n        controls: false,\n        autoplay: true,\n        muted: true,\n        disabled: true,\n        playsinline: true,\n        loop: true\n      },\n    });\n\n    return { ...toRefs(state) };\n}\n</code></pre><h3>视频切换</h3><p>当视频地址发生变化时，重置视频</p><pre><code class="language-html">&lt;nut-video :source=&quot;source&quot;&gt;&lt;/nut-video&gt;\n&lt;nut-button type=&quot;primary&quot; @click=&quot;changeVideo&quot;&gt;切换视频&lt;/nut-button&gt;\n</code></pre><pre><code class="language-javascript">setup() {\n    const state = reactive({\n      source: {\n        src: &#39;https://storage.jd.com/about/big-final.mp4&#39;,\n        type: &#39;video/mp4&#39;\n      },\n    });\n    const changeVideo = () =&gt; {\n      state.source1 = {\n        src: &#39;https://vjs.zencdn.net/v/oceans.mp4&#39;,\n        type: &#39;video/mp4&#39;\n      };\n    };\n\n    return { ...toRefs(state), changeVideo };\n}\n</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>source</td><td>视频地址和类型设置</td><td>Object</td><td>-</td></tr><tr><td>options</td><td>控制视频播放属性</td><td>Object</td><td>required</td></tr><tr><td>options.autoplay</td><td>是否自动播放</td><td>Boolean</td><td>false</td></tr><tr><td>options.poster</td><td>海报设置</td><td>String</td><td>-</td></tr><tr><td>options.loop</td><td>是否循环播放</td><td>Boolean</td><td>false</td></tr><tr><td>options.controls</td><td>是否展示操作栏</td><td>Boolean</td><td>true</td></tr><tr><td>options.muted</td><td>是否静音</td><td>Boolean</td><td>false</td></tr><tr><td>options.volume</td><td>音量控制</td><td>Number</td><td>0.5</td></tr><tr><td>options.disabled</td><td>禁用操作（如循环播放的背景图，禁止操作）</td><td>Boolean</td><td>false</td></tr><tr><td>options.playsinline</td><td>是否设置为行内播放元素（解决安卓兼容问题）</td><td>Boolean</td><td>false</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>play</td><td>播放</td><td>–</td></tr><tr><td>pause</td><td>暂停</td><td>–</td></tr><tr><td>playend</td><td>播放完成回调</td><td>–</td></tr></tbody></table>',38)];t("default",{setup:t=>(t,n)=>(o(),e("div",d,s))})}}}));
