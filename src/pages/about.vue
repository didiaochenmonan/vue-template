<template>
    <h1 class="title">
        关于{{ num }}
    </h1>
    <h2>
        {{ arr }}
    </h2>
    <button @click="add">
        增加
    </button>
    <Head ref="refHead"
          :num="num"
          @change="change" />
</template>
<script setup>
import { ref, onMounted, reactive } from 'vue';
import Head from '@/components/head';

const num = ref(123);
const arr = reactive([1, 2, 3, 4]);
const refHead = ref(null);
const flag = ref(true);
const wait = val => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (val === '1') {
            resolve('等待2秒哦');
        } else {
            reject();
        }
    }, 2000);
});
const add = async () => {
    num.value += 1;
    arr.push(arr.length);
    console.log(refHead.value);
    flag.value = !flag.value;
    console.log('[ flag ] >', flag.value);
    const res = await wait('1');
    console.log('[ res ] >', res);
};

onMounted(() => {
    console.log('初始化');
    // 使用子组件方法
    // console.log(refHead.value.val);
});
const change = val => {
    console.log('子组件触发', val);
};
</script>
<style scoped>
.title {
    color: red;
}
</style>