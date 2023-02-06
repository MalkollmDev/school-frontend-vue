import {createRouter, createWebHashHistory} from "vue-router";
import MainComponent from "../components/MainComponent.vue"
import AddNewComponent from "@/components/AddNewComponent";
import AboutComponent from "../components/static/AboutComponent";
import ScheduleComponent from "@/components/ScheduleComponent";
import ParentsComponent from "@/components/static/ParentsComponent";
import MealComponent from "@/components/static/MealComponent";
import AchieveComponent from "@/components/static/AchieveComponent";
import AdminComponent from "@/components/admin/AdminComponent";
import AddEventSectionComponent from "@/components/admin/AddEventSectionComponent";
import AddScheduleSectionComponent from "@/components/admin/AddScheduleSectionComponent";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component:  MainComponent, alias: '/'},
        { path: '/addNew', component:  AddNewComponent},
        { path: '/about', component:  AboutComponent},
        { path: '/schedule', component:  ScheduleComponent},
        { path: '/parents', component:  ParentsComponent},
        { path: '/meal', component:  MealComponent},
        { path: '/achieve', component:  AchieveComponent},
        { path: '/admin', component:  AdminComponent},
        { path: '/addEvent', component:  AddEventSectionComponent},
        { path: '/addSchedule', component:  AddScheduleSectionComponent},
    ]
})