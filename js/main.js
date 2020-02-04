//Create a couple of component we can rewuest amd render
let SplashComponent = {
    template: `<h1>Welcome to my Super Awesome App!</h1>`
}

let AppComponent = {
    template: `<h1>This is the app page</h1>`
}

let ErrorComponent = {
    template: `<h1>That page doesn't exist</h1>`
}
//There are the same as Express routers -> Router.get('/', ....do sth with the request)
const routes = [
    { path: '/', name: 'splash', component: SplashComponent },
    { path: '/app', name: 'app', component: AppComponent },
    { path: '*', name: 'error', component: ErrorComponent }
]
const router = new VueRouter({
    routes //shhort for routers
})

const vm =new Vue({
    data: {

    },

    methods: {

    },
    router
}).$mount("#app");