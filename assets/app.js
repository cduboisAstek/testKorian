/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.scss';

import './font/fontello/css/fontello.css';

// start the Stimulus application
import './bootstrap';

import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/pages/Home'

const routes = [
    { path: '/', component: Home, name: 'home' }
]

const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes
})

Vue.use(VueRouter)

new Vue({
    router,
}).$mount('#app')