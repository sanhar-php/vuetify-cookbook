import store from './store'
export default (to, from, next) => {
    if (store.ouath2.getters.user) {
        next()
    } else {
        next('/signin')
    }
}
