import request from '@/untils/request'

//post类型案例
// export const Login = (query)=>{
//     return request({
//         url:'use/api/login',
//         method:'post',
//         data:query
//     })
// }
// get类型案例
export const getImgCode = (query)=>{
    return request({
        url:'/image/getImgCode',
        method:'get',
        //图片验证吗 response类型设置成 blob ，图片才能显示出来
        responseType:'blob'
    })
}