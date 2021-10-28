import {login} from '@/api/menu'

const tree ={
    state: {
        navTree: []
    },
    getters: {

    },
    mutations: {
        setNavTree(state, navTree){  // 设置导航菜单树
            state.navTree = navTree;
        }
    },

        actions: {
            GetMenuTree({commit}, userId) {

                return new Promise((resolve, reject) => {
                    fetchTreeList(userId) .then( response =>{
                        const data = response.data
                        console.log(" fetchTreeList" +data)
                        commit('setNavTree', data)
                        resolve()
                    }).catch(error => {
                        reject( error)
                    })
                })

            }
        }
}

export default tree