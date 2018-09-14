import store from './store'
export default (to, from, next) => {
    if (store.getters["oauth2/user"]) {
        next()
    } else {
        next('/signin')
    }
}
