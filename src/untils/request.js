import axios from 'axios'
//请求在浏览器中允许跨域携带cookies
axios.defaults.withCredentials = true

//自定义一个axios实例
const service = axios.create({
    //基础请求地址
    baseURL:'https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd',
    // 超时时间 5s
    timeout:5000
})
//添加超时后的处理
axios().catch(error=>{
    const { message } = error;
    if(error.code === 'ECONNABORTED' && message.indexOf('timeout') > -1){
        // 超时处理可以弹出错误也可重新请求一次
        // 方法一弹出错误
        alert('请求超时！，请检查网络问题')
        //方法二 重新请求
        let newhttp = new Promise(function (resolve){
            resolve()
        });
        //newhttp实例执行完之后会再次执行
        //返回一个Promise实例，重新请求
        return newhttp.then(()=>{
            return axios.create({
                //基础请求地址
                baseURL:'https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd',
                // 超时时间 5s
                timeout:5000
            })
        })


    }
    // 若不超时,则返回错误信息
    return Promise.reject(error)
})

//请求拦截器
service.interceptors.request.use(config=>{
    if(localStorage.getItem('token')){
        config.headers.ACCESS_TOKEN = localStorage.getItem('token')
    }
    return config
},error=>{
    //对请求错误做的操作
    console.log(error);
    return Promise.reject()
})

//响应拦截器
service.interceptors.request.use(response=>{
   if(response.status === 200){
        return Promise.resolve(response.status)
   }
},error=>{
   if(400 <= error.response.status < 500){
        alert('用户信息过期')
        //清楚token
        localStorage.removeItem('token')
        //跳转登录
        setTimeout(()=>{
            window.location.href = "/login"
        },1000)
   }else{
       if(error.response.status >= 500){
            alert('服务器开小差了，请稍后再试！')
       }else{
            alert('服务器开小差了，请稍后再试！')
            return Promise.reject(error) 
       }
   }
})

export default service;