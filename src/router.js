import { createRouter, createWebHistory } from 'vue-router';
import Searchbar from './components/Searchbar.vue'
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
            path: '/guest/apartments',
            name: 'apartments',
            component: Apartments
        },
        {
            path: '/apartments/:id',
            name: 'single-apartment',
            component: SingleApartment
        },
        {
            path: '/searchbar',
            name: 'searchbar',
            component: Searchbar
        },


    ]

});

export { router }