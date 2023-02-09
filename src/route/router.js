import {createRouter, createWebHashHistory} from "vue-router";
import MainComponent from "../components/MainComponent.vue"
import AddNewComponent from "@/components/AddNewComponent";
import AboutComponent from "../components/static/AboutComponent";
import ScheduleComponent from "@/components/ScheduleComponent";
import ParentsComponent from "@/components/static/ParentsComponent";
import MealComponent from "@/components/static/MealComponent";
import OrganizationStructureComponent from "@/components/submenu/OrganizationStructureComponent";
import AdminComponent from "@/components/admin/AdminComponent";
import AddEventSectionComponent from "@/components/admin/AddEventSectionComponent";
import AddScheduleSectionComponent from "@/components/admin/AddScheduleSectionComponent";
import ETextBooksComponent from "@/components/submenu/ETextBooksComponent";
import OlympiadComponent from "@/components/submenu/OlympiadComponent";
import ProjectsComponent from "@/components/submenu/ProjectsComponent";
import PublicationsComponent from "@/components/submenu/PublicationsComponent";
import DocumentsComponent from "@/components/submenu/DocumentsComponent";
import ContactsComponent from "@/components/submenu/ContactsComponent";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component:  MainComponent, alias: '/'},
        { path: '/addNew', component:  AddNewComponent},
        { path: '/about', component:  AboutComponent},
        { path: '/schedule', component:  ScheduleComponent},
        { path: '/parents', component:  ParentsComponent},
        { path: '/meal', component:  MealComponent},
        { path: '/orgStructure', component:  OrganizationStructureComponent},
        { path: '/admin', component:  AdminComponent},
        { path: '/addEvent', component:  AddEventSectionComponent},
        { path: '/addSchedule', component:  AddScheduleSectionComponent},
        { path: '/textbooks', component:  ETextBooksComponent},
        { path: '/olympiad', component:  OlympiadComponent},
        { path: '/projects', component:  ProjectsComponent},
        { path: '/publications', component:  PublicationsComponent},
        { path: '/documents', component:  DocumentsComponent},
        { path: '/contacts', component:  ContactsComponent},
    ]
})