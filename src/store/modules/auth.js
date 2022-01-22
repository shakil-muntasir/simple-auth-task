import axios from 'axios'
export default {
    state() {
        return {
            status: ''
        }
    },
    getters: {
        getStatus: state => state.status
    },
    mutations: {
        setStatus: (state, payload) => (state.status = payload)
    },
    actions: {
        loginUser: ({ commit }, payload) => {
            return new Promise(async (resolve, reject) => {
                try {
                    const response = await axios.post('http://localhost:3001/login', payload)
                    commit('setStatus', 'OK')
                    resolve(response)
                } catch (error) {
                    reject(error)
                    console.log(error)
                }
            })
        }
    }
}
