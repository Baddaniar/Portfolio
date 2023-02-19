import { createRouter, createWebHistory } from "vue-router";
import Feed from './views/Feed.vue'
import Authentication from './views/Authentication.vue'
import OtherProfile from './views/OtherProfile.vue'
import MyProfile from './views/MyProfile.vue'
import FollowUsers from './views/FollowUsers.vue'

const router =  createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        { path: '/', component: Feed },
        { path: '/auth', component: Authentication },
        { path: '/profile/:id', component: OtherProfile },
        { path: '/profile', component: MyProfile },
        { path: '/follow', component: FollowUsers },
    ]
})

export default router