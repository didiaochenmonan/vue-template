<template>
    <h1>nginx测试-test</h1>
    <h2>用户名称{{ userName }}</h2>
    <button @click="skip">
        跳转用户页
    </button>
    <button @click="skippinia">
        跳转pinia
    </button>
    <div class="box">
        {{ num }}
    </div>
    <button key="1"
            @click="btnAdd">
        增加
    </button>
    <!-- <img src="@/images/dTender.png" alt=""> -->
    <div>
        <div v-for="(item,index) in arr"
             :key="index">
            {{ item }},下标{{ index }}
        </div>
    </div>
    <div>
        <div v-for="(item,index) in arr"
             :key="index">
            {{ item }},下标{{ index }}
        </div>
        <div>1</div>
    </div>
</template>
<script>
import { ref, reactive, computed } from 'vue';
import { useRouter } from 'vue-router';
import { globalUser } from '@/stores/user';

export default {
    name: 'Home',
    setup() {
        const router = useRouter();
        const num = ref(100);
        const skip = () => {
            router.push('/about');
        };
        const skippinia = () => {
            router.push('/pinia');
        };
        const arr = reactive([1, 2, 3, 4, 5]);
        const btnAdd = () => {
            arr.push(arr.length);
            console.log('[ arr ] >', arr);
        };

        // pinia
        const user = globalUser();
        const userName = computed(() => user.userName);
        return { num, skip, arr, btnAdd, userName, skippinia };
    }
};
</script>
<style scoped>
.title {
    color: red;
}
.box {
    display: flex;
    backface-visibility: hidden;
    width: 100px;
    height: 100px;
    /* background: url('@/images/empty-data.png') no-repeat;
    background-size: 100% 100%; */
}
</style>