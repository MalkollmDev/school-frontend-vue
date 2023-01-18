import {createRouter, createWebHashHistory} from "vue-router";
import MainComponent from "../components/MainComponent.vue"
import AddNewComponent from "@/components/AddNewComponent";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component:  MainComponent, alias: '/'},
        { path: '/addNew', component:  AddNewComponent},
    ]
})