<template>
  <!-- <div ref="parentRef" style="width: 100%">
    <div :style="{ width: `${width}px` }">
      <slot></slot>
    </div>  
  </div> -->

  <BorderBox1 ref="parentRef" style="width: 100%">
    <div :style="{ width: `${width}px` }">
      <slot> </slot>
    </div>
  </BorderBox1>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from "vue";

export default defineComponent({
  name: "AutoWidthComponent",
  setup() {
    const parentRef = ref<HTMLElement | null>(null); // 引用父容器
    const width = ref<number>(0); // 用于存储宽度

    // 更新宽度的函数
    const updateWidth = () => {
      if (parentRef.value) {
        width.value = parentRef.value.offsetWidth; // 获取父容器的宽度
      }
    };

    // 在组件挂载时获取宽度，并监听窗口的resize事件
    onMounted(() => {
      updateWidth();
      window.addEventListener("resize", updateWidth);
    });

    // 清除事件监听器
    onBeforeUnmount(() => {
      window.removeEventListener("resize", updateWidth);
    });

    return {
      parentRef,
      width,
    };
  },
});
</script>

<style scoped>
/* 样式可以根据需要自定义 */
</style>
