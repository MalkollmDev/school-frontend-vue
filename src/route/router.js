import {createRouter, createWebHashHistory} from "vue-router";
import OneComponent from "../components/OneComponent.vue"
import TwoComponent from "../components/TwoComponent.vue"
import BodyComponent from "../components/BodyComponent.vue"

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/one', component:  OneComponent, alias: '/'},
        { path: '/two', component:  TwoComponent},
        { path: '/three', component:  BodyComponent},
    ]
})