<template>
    <div>
        <button @click="skip">
            跳转首页1
        </button>
    </div>
    <button @click="clickEdit">
        pinia
    </button>
    <h3>{{ userId }}</h3>
</template>
<script>
import { computed } from 'vue';
import { globalUser } from '@/stores/user';
import { useRouter } from 'vue-router';

export default {
    name: 'Pinia',
    setup() {
        const router = useRouter();
        const skip = () => {
            router.push('/');
        };
        // pinia
        const user = globalUser();
        console.log(user);
        const userId = computed(() => user.userId);
        const clickEdit = () => {
            user.setUser({
                userId: '123456',
                userName: '小明'
            });
        };
        return { skip, userId, clickEdit };
    }
};
</script>
<style scoped>
.title {
    color: red;
}
.box{
    display: flex;
    backface-visibility: hidden;
    width: 100px;
    height: 100px;
    /* background: url('@/images/empty-data.png') no-repeat;
    background-size: 100% 100%; */
}
</style>