import Vuex from "vuex"
import Vue from "vue"
import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        userInfo:{
            username:"",
            email:"",
            avatar:""
        }
    },
    mutations:{
        "CHANGE_userInfo" (state, payload){
            state.userInfo = payload
        }
    },
    actions:{

    },
    plugins:[
        createPersistedState({
            storage: {
              getItem: key => sessionStorage.getItem(key),
              // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
              setItem: (key, value) =>
              sessionStorage.setItem(key, value),
              removeItem: key => sessionStorage.removeItem(key),
            },
        }),
    ],
})
export default store 