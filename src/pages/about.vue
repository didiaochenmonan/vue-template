<template>
    <h1 class="title">关于</h1>
</template>
<script>
import { getUserInfo } from '@/api/index';

export default {
    name: 'About',
    setup() {
        getUserInfo({ id: '123' }).then(res => {
            console.log('[ res ] >', res);
        });
    }
};
</script>
<style scoped>
.title {
    color: red;
}
</style>