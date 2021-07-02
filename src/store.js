import { createStore } from "vuex"


const store = createStore({
    state : {
        token : "",
    },
    mutations : {
        setToken(state, token){
            state.token = token
        },
        clearToken(state){
            state.token = ""
        }
    },
    getters: {

    },
    actions: {
        login({ commit, dispatch, state},authData){

        },
        logout({ commit, dispatch, state }){

        }
    },
})

export default store