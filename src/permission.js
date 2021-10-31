import router from './router'
import store from './store'
import NProgress from 'nprogress'

import {Message} from 'element-ui'
import { getToken } from '@/utils/auth'


const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
    console.log(" to :" + to +" from:" + from )
    NProgress.start()

    if(getToken()) {
        if( to.path === '/login') {
            next( {path: '/'})
            NProgress.done()
        }else {
            if (store.getters.roles.length === 0) {
                store.dispatch('GetInfo').then( res => {
                    let menus = res.data.menus;
                    console.log(menus)
                    let username = res.data.username;

                    store.dispatch('GenerateRoutes', {menus, username}).then(() => {
                        router.addRoutes(store.getters.addRouters);
                        next( {...to, replace: true})
                    })
                    }).catch((err) => {
                        store.dispatch('FedLogOut').then( () => {
                            Message.error(err || 'Verification failed, please login again')
                            next({ path: '/' })
                        
                    })
                }
                )
            }else {
                next()
            }
        }
    }else {
        if(whiteList.indexOf(to.path) !== -1) {
            next()
        }else {
            next('/login')
            NProgress.done()
        }
    }
}) 

router.afterEach( () => {
    NProgress.done()
})