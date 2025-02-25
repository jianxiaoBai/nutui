<template>
  <view :class="classes">
    <div ref="dmContainer">
      <div :class="['nut-barrage__slotBody' + classTime]">
        <view
          v-for="(item, index) of danmuList"
          :key="'danmu' + index"
          :class="['nut-barrage__item', 'nut-barrage__item' + index, 'move']"
          :style="styleList[index]"
        >
          {{ item.length > 8 ? item.substr(0, 8) + '...' : item }}
        </view>
      </div>
    </div>
  </view>
</template>
<script lang="ts">
import { computed, onMounted, ref, reactive, watch, onUnmounted, onDeactivated, useSlots } from 'vue';
import { createComponent } from '@/packages/utils/create';
import Taro from '@tarojs/taro';
const { componentName, create } = createComponent('barrage');

export default create({
  props: {
    danmu: {
      type: Array,
      default: () => []
    },
    frequency: {
      type: Number,
      default: 200
    },
    speeds: {
      type: Number,
      default: 800
    },
    rows: {
      type: Number,
      default: 3
    },
    top: {
      type: Number,
      default: 10
    },
    loop: {
      type: Boolean,
      default: true
    }
  },
  emits: ['click'],

  setup(props, { slots }) {
    const classTime = new Date().getTime();

    const slotDefault = !!useSlots().default;

    const timeId = ref(new Date().getTime());
    const danmuList = ref<any>(props.danmu);
    const danmuListSlots = ref<any>([]);
    const rows = ref<number>(props.rows);
    const top = ref<number>(props.top);
    const speeds = props.speeds;

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        ['nut-barrage--dmBody' + timeId.value]: true
      };
    });

    onMounted(() => {
      if (slotDefault) {
        const list = document
          .getElementsByClassName('nut-barrage__slotBody' + classTime)[0]
          .getElementsByClassName('nut-barrage__item');
        console.log(list);

        let childrens = list?.[0]?.children || [];
        danmuList.value = childrens;
      }
      runStep();
    });

    onUnmounted(() => {
      danmuList.value = [];
    });

    onDeactivated(() => {
      danmuList.value = [];
    });

    watch(
      () => props.danmu,
      (newValue) => {
        danmuList.value = [...newValue];
      }
    );

    const add = (word: string) => {
      danmuList.value = [...danmuList.value, word];
      runStep();
    };
    const getNode = (index: number) => {
      const query = Taro.createSelectorQuery();
      setTimeout(() => {
        let width = 100;
        query.select('.nut-barrage--dmBody' + timeId.value).boundingClientRect((rec) => {
          width = rec.width || 300;
        });
        query
          .select('.nut-barrage__item' + index)
          .boundingClientRect((recs) => {
            let height = recs.height;
            let nodeTop = (index % rows.value) * (height + top.value) + 20 + 'px';
            styleInfo(index, nodeTop, width);
          })
          .exec();
      }, 500);
    };

    const runStep = () => {
      danmuList.value.forEach((item: any, index: number) => {
        if (typeof danmuList.value[index] == 'object') {
          getNode(index);
        } else {
          getNode(index);
        }
      });
    };
    const distance = ref('0');
    let styleList: any[] = reactive([]);
    const styleInfo = (index: number, nodeTop: string, width: number) => {
      let timeIndex = index - rows.value > 0 ? index - rows.value : 0;
      let list = styleList;
      let time = list[timeIndex] ? Number(list[timeIndex]['--time']) : 0;
      distance.value = '-' + (speeds / 1000) * 200 + '%';

      let obj = {
        top: nodeTop,
        '--time': `${props.frequency * index + time}`,
        animationDuration: `${speeds}ms`,
        animationIterationCount: `${props.loop ? 'infinite' : 1}`,
        animationDelay: `${props.frequency * index + time}ms`,
        '--move-distance': `-${width}px`
      };
      if (slotDefault && danmuList.value[index]?.el) {
        let orginalSty = danmuList.value[index].el.style;
        danmuList.value[index].el.style = Object.assign(orginalSty, obj);
      } else {
        styleList.push(obj);
      }
    };

    return { classTime, classes, danmuList, add, styleList, distance, danmuListSlots };
  }
});
</script>

<style lang="scss">
@keyframes moving {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(v-bind('distance'));
  }
}
@-webkit-keyframes moving {
  from {
    -webkit-transform: translateX(100%);
  }
  to {
    transform: translateX(v-bind('distance'));
  }
}
</style>
