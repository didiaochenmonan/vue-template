<template>
    <button @click="skip">跳转</button>
    <div class="box">{{num}}</div>
    <!-- <img src="@/images/dTender.png" alt=""> -->
</template>
<script>
import {ref} from 'vue'
import { useRouter } from "vue-router";
export default {
    name:'home',
    setup(){
        const router = useRouter()
        const num = ref(100)
        const skip = ()=>{
            router.push('/about')
        }
        return {num,skip}
    }
}
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