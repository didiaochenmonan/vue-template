import Fetch from '@/utils/fetch';

// 文件下载公共接口
export const apiDownload = '/web/comp/file/download/compress';

export const getUserInfo = params => (
    Fetch({
        url: '/web/auth/user/query_user_info',
        // method: 'post',
        params
    })
);