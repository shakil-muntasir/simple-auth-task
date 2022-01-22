import { createStore } from 'vuex'
import auth from './modules/auth'

const modules = {
    auth
}

const store = createStore({
    modules
})

export default store
