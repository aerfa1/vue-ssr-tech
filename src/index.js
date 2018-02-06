/**
 * Created by user1 on 2018/1/23.
 */
import Vue from 'vue'
import App from './app.vue'
import './assets/styles/test.css'
import './assets/styles/test.stylus.styl'
import  './assets/images/bg.jpg'

const root = document.createElement('div')
document.body.appendChild(root)
new Vue({
    render: (h) => h(App)
}).$mount(root)