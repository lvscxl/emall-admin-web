import axios from 'axios'
import {Message, MessageBox } from 'element-ui'

import store from '../store'
import {getToken } from '@/utils/auth'

const service = axios.create({
    baseURL: process.env.BASE_API,
    timeout: 15000

})

service.interceptors.request.use( config => {
    if(store.getters.token) {
        config.headers['Authorization'] = getToken()
    }
    return config
}, error => {
    console.log(error)
    Promise.reject(error)
}
)

service.interceptors.response.use(
    response => {
        const res = response.data
        if(res.code != 200) {
            Message({
                message: res.message,
                type: 'error',
                duration: 3 * 1000
            })

            if(res.code === 401) {
                MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
                    cancelButtonText: '重新登录',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    store.dispatch('FedLogOut').then(() => {
                        location.reload()
                    })
                })
            }
            return Promise.reject('error')
        }else {
            return response.data
        }
    },
    error =>{
        console.log('err' + error)// for debug
        Message( {
            message: error.message,
            type: 'error',
            duration: 3 * 1000
        })

        return Promise.reject(error)
    }
)

export default service