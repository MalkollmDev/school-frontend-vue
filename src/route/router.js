import {createRouter, createWebHashHistory} from "vue-router";
import MainComponent from "../components/MainComponent.vue"
import AddNewComponent from "@/components/AddNewComponent";
import AboutComponent from "../components/static/AboutComponent";
import ScheduleComponent from "@/components/ScheduleComponent";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component:  MainComponent, alias: '/'},
        { path: '/addNew', component:  AddNewComponent},
        { path: '/about', component:  AboutComponent},
        { path: '/schedule', component:  ScheduleComponent},
    ]
})