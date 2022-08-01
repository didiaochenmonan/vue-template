import Axios from 'axios';

const fetch = async config => {
    // 获取vue实例
    const { App } = window;
    const { url, method, params, timeout, ...other } = config;

    const token = localStorage.getItem('token'); // 获取token
    const headers = {
        token
    };
    const timestamp = new Date().getTime();
    // let { baseUrl } = Configs;
    // 创建axios实例
    const axiosIns = Axios.create();
    let options = {
        headers,
        baseURL: '',
        // baseURL: baseUrl,
        url,
        ...other,
        timeout: timeout || 1 * 60 * 1000
    };
    // params中可以增加请求参数
    const paramObj = params;

    if (method === 'post') {
        options = { ...options, method: 'post', params: paramObj };
    } else if (method === 'put') {
        options = { ...options, method: 'put', data: paramObj };
    } else if (method === 'delete') {
        options = { ...options, method: 'delete', data: paramObj };
    } else {
        options = {
            ...options,
            method: 'get',
            params: {
                ...paramObj,
                timestamp
            }
        };
    }
    const response = await axiosIns(options).then(res => {
        const { code, msg } = res.data;
        if (code !== 0) { // code不为0视为错误
            App.$message({
                type: 'error',
                message: msg,
                showClose: true
            });
            return false;
        }
        return res.data;
    }).catch(err => {
        if (err.response && err.response.status === 401) {
            // console.log('请重新登录');
            localStorage.setItem('token', '');
            App.$router.push({
                path: '/login',
                query: {
                    path: App.$route.fullPath
                }
            });
            return false;
        }
        return false;
    });
    return response;
};

export default fetch;
