<template>
    <h2>子组件</h2>
    <div>{{ props.num }}</div>
    <button @click="btn">
        传值
    </button>
</template>
<script setup>
import { ref } from 'vue';
// 获取父组件传参
const props = defineProps({
    num: {
        type: Number,
        default: 0
    }
});

console.log('[ props ] >', props);

// 子组件触发父组件方法
const myemit = defineEmits(['change']);
const btn = () => {
    myemit('change', props.num);
};
// 子组件暴漏属性给父组件
const val = ref(123);
defineExpose({
    val,
    btn
});
</script>