<template lang="">
    <main class="container">
        <!--
        <section class="row justify-content-center">
            <SingleCard class="p-0 col-12 mx-4 my-5" 
            :user_name="apartment.user.name" 
            :user_surname="apartment.user.surname" 
            :user_email="apartment.user.email" 
            :title="apartment.title" 
            :apartment_image="apartment.img" 
            :no_rooms="apartment.no_rooms" 
            :no_beds="apartment.no_beds" 
            :no_bathrooms="apartment.no_bathrooms" 
            :square_meters="apartment.square_meters" 
            :address="apartment.address"
            :price="apartment.price" 
            :description="apartment.description || ''" 
            :fullLength="true"
            />
            <ContactForm/>
        </section>
        -->
        <section class="row justify-content-center">
                <div class="card">
                    <h1 class="card-title">
                            {{ apartment.title }}
                        </h1>
                    <img v-if="apartment.img" :src="apartment.img" class="card-img-top mb-3 rounded" :class="fullLength ? '' : 'image-preview'" alt="...">
                    <div class="card-body">
                        <p class="address">
                            {{ apartment.address }}
                        </p>
                        <p class="price-container">
                            <span class="price">
                                {{ apartment.price }}&euro;
                            </span>
                            <span class="text">
                                notte.
                            </span>
                        </p>
                        <div class="d-flex mb-3" v-if="linkRoute">
                            <router-link :to="linkRoute" class="btn btn-outline-dark">
                                {{ linkLabel }}
                            </router-link>
                        </div>
                    </div>
                </div>
        </section>
    </main>
</template>
<script>
import SingleCard from '@/components/SingleCard.vue';
import ContactForm from './ContactForm.vue';
import axios from 'axios';

export default {
    name: 'SingleApartment',
    data(){
        return{
            apartment: {},
            id: ''
        }
    },
    props:{
        title: {
            required: true,
            type: String,
        },
        user_name: {
            required: true,
            type: String,
        },
        user_surname: {
            required: true,
            type: String,
        },
        user_email: {
            required: true,
            type: String,
        },
        no_rooms: {
            required: true,
            type: Number,
        },
        no_beds: {
            required: true,
            type: Number,
        },
        no_bathrooms: {
            required: true,
            type: Number,
        },
        square_meters: {
            required: true,
            type: Number,
        },
        address: {
            required: false,
            type: String,
        },
        price: {
            required: true,
            type: String,
        },
        description: {
            required: false,
            type: String,
        },
        apartment_image: {
            required: true,
            type: [String, File]
        },
        linkRoute: {
            required: false,
            type: [ Object, String ]
        },
        linkLabel: {
            required: false,
            type: String,
        },
        fullLength: {
            required: false,
            type: Boolean,
        },
    },
    methods:{
        getApartment(){
            axios.get(`http://127.0.0.1:8000/api/guest/apartments/${this.$route.params.id}`, {
                params: {
                }
            })
            .then((response) => {
                console.log(response.data.results);
                this.apartment = response.data.results;

            })
            .catch(function (error) {
                console.warn(error);
                //this.$router.push({ name: 'not-found' })
            })
        }
    },
    components:{
        SingleCard,
        ContactForm
    },

    created(){
        this.getApartment();
    }
}
</script>
<style lang="scss" scoped>
#map {
    width: 100%;
    height: 500px;
}
</style>