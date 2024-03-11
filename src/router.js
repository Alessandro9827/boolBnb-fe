import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './components/HomePage.vue';
import Apartments from './pages/Apartments.vue';
import SingleApartment from './pages/SingleApartment.vue';




const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: HomePage
        },
        {
            path: '/apartments',
            name: 'apartments',
            component: Apartments
        },
        {
            path: '/apartments/:id',
            name: 'single-apartment',
            component: SingleApartment
        },


    ]

});

export { router }