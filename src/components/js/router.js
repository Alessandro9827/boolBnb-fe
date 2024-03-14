import { createRouter, createWebHistory } from 'vue-router';
import Apartments from '../../pages/Apartments.vue';
import ContactForm from '../../pages/ContactForm.vue';
import SingleApartment from '../../pages/SingleApartment.vue';




const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'apartments',
            component: Apartments
        },
        {
            path: '/contact-us',
            name: 'contact-us',
            component: ContactForm
        },
        // {
        //     path: '/guest/apartments',
        //     name: 'apartments',
        //     component: Apartments
        // },
        {
            path: '/apartments/:id',
            name: 'single-apartment',
            component: SingleApartment
        },
    ]

});

export { router }