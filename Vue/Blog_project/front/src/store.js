import { createStore } from "vuex";

const store = createStore({
    state() {
        return{
            userId: JSON.parse(localStorage.getItem('user'))
        }
    },
    mutations: {
        changeId (state, newId){
            state.userId = newId
        }
    },
    getters: {
        getUserId (state){
            return state.userId
        }
    }
})

export default store