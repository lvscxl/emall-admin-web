import {login, logout,getInfo} from '@/api/login'
import {getToken,setToken,removeToken} from '@/utils/auth'
import {setSupport,getSupport,setCookie,getCookie} from '@/utils/support';


import {fetchTreeList} from '@/api/menu'

const user = {
    state:{
        token: getToken(),
        name: '',
        avatar: '',
        roles: []
    },
    mutations: {
        SET_TOKEN: (state, token) =>{
            state.token = token
        },
        SET_NAME:(state, name) =>{
            state.name = name
        },
        SET_AVATAR:(state,avatar) =>{
            state.avatar = avatar
        },
        SET_ROLES: (state,roles) => {
            state.roles = roles
        }

    },
    actions: {
        Login({commit}, userInfo) {
            const username = userInfo.username.trim()
            const password = userInfo.password.trim()
            return new Promise((resolve, reject) => {

                login(username, userInfo.password).then(response => {
                    const data = response.data
                    const tokenStr = data.tokenHead+data.token
                    setToken(tokenStr)
                    commit('SET_TOKEN', tokenStr)
                    setCookie("username", username, 15);
                    setCookie("password", password, 15);
                    setCookie("token", data, 15);
                    // resolve()
                    resolve()
                    console.log('asdc')
                  }

                //   fetchTreeList(userId).then( response =>{
                //     const menuTree = response.data
                //     commit('SET_MENU', menuTree)
                    
                // }
               
                ).catch(error => {
                    reject( error)
                })
            })
        },

        GetInfo({commit, state}) {
            return new Promise((resolve, reject) => {
                getInfo().then( response => {
                    const data = response.data
                    if(data.roles && data.roles.length > 0) {
                        commit('SET_ROLES',data.roles)
                    }else {
                        reject('getInfo: roles must be a non-null array !')
                    }
                    commit('SET_NAME', data.username)
                    commit('SET_AVATAR', data.icon)
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        LogOut({commit,state}) {
            return new Promise((resolve,reject) =>{
                logout(stste.token).then(() => {
                    commit('SET_TOKEN', '')
                    commit('SET_ROLES', [])
                    removeToken()
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },

        FedLogOut({commit}) {
            return new Promise(resolve => {
                commit('SET_TOKEN', '')
                removeToken()
                resolve()
            })
        }
    }
}

export default user