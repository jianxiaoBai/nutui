<template>
  <view :class="classes" ref="collapseDom">
    <slot></slot>
  </view>
</template>
<script lang="ts">
import { computed, getCurrentInstance, onMounted, provide, ref, watch } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { create, componentName } = createComponent('collapse');
export default create({
  props: {
    active: {
      type: [String, Number, Array],
      default: () => []
    },
    accordion: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:active', 'change'],
  setup(props, { emit }) {
    const collapseDom: any = ref(null);
    const collapseChldren: any = ref([]);
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });

    watch(
      () => props.active,
      (newval: number | string | any) => {
        let doms: any = collapseChldren.value;
        Array.from(doms).forEach((item: any) => {
          if (typeof newval == 'number' || typeof newval == 'string') {
            item.changeOpen(newval == item.name ? true : false);
          } else if (Object.values(newval) instanceof Array) {
            const isOpen = newval.indexOf(Number(item.name)) > -1 || newval.indexOf(String(item.name)) > -1;
            item.changeOpen(isOpen);
          }
          item.animation();
        });
      }
    );

    onMounted(() => {
      collapseChldren.value = (getCurrentInstance() as any).provides.collapseParent.children || [];
    });

    const changeVal = (val: string | number | Array<string | number>) => {
      emit('update:active', val);
      emit('change', val);
    };

    const changeValAry = (name: string) => {
      const activeItem: any = props.active instanceof Object ? Object.values(props.active) : props.active;
      let index = -1;
      activeItem.forEach((item: string | number, idx: number) => {
        if (String(item) == String(name)) {
          index = idx;
        }
      });
      index > -1 ? activeItem.splice(index, 1) : activeItem.push(name);
      changeVal(activeItem);
    };

    const isExpanded = (name: string | number | Array<string | number>) => {
      const { accordion, active } = props;
      if (accordion) {
        return typeof active === 'number' || typeof active === 'string' ? active == name : false;
      }
    };

    provide('collapseParent', {
      children: [],
      props,
      changeValAry,
      changeVal,
      isExpanded
    });

    return { collapseDom, classes };
  }
});
</script>
