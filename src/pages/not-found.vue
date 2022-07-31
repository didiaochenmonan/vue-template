/*
 * @Author: yanghy5
 * @Email: yanghy5@guahao.com
 * @Date: 2019-09-10 13:31:19
 * @Last Modified by: guoxy
 * @Last Modified time: 2022-07-31 12:25:27
 * @Description: 404页面
 */

<template>
    <div class="gp-notfound">
        <div class="not-found">
            <h3 class="title">
                你访问的页面找不到了
            </h3>
        
            <p class="tip">
                该服务已过期或者打开的地址有误，你可以检查输入的url地址是否拼写正确或刷新再试，如无法解决请联系管理员需求帮助。
            </p>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        /**
         * 返回上一级
         */
        goBack() {
            this.$router.go(-1);
        },
        /**
         * 刷新
         */
        reload() {
            window.location.reload();
        }
    }
};
</script>>
<style lang="less" scoped>
    .gp-notfound {
        width: 600px;
        height: 170px;
        position: absolute;
        top: 50%;
        margin-top: -85px;
        left: 50%;
        margin-left: -300px;
        .not-found {
            margin-left: 190px;
        }
        &::before {
            content: '';
            position: absolute;
            top: -21px;
            display: inline-block;
            width: 170px;
            height: 170px;
            background-size: 149px 149px;
            background-repeat: no-repeat;
            background-position: 5px;
        }
        .title {
            font-size: 20px;
            line-height: 30px;
        }
        .tip {
            margin-top: 6px;
            font-size: 14px;
            line-height: 22px;
        }
        .btn {
            margin-top: 16px;
        }
    }
</style>
