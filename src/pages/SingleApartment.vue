<template lang="">
    <!--
    <main class="container">
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
            <div class="row pb-5 ">
                <div class="col-12">
                    <hr>
                    <p class="fs-4 fw-semibold mt-4 mb-3">Dove sarai?</p>
                    <div id="map"></div>
                </div>
            </div>
            <ContactForm/>
        </section>
    </main>
    -->

    <main class="container">
        <section class="row justify-content-center">
            <div class="card">
                <div class="position-container">
                <h1 class="card-title">
                    {{ apartment.title }}
                </h1>
                <div class="img-container">
                    <img v-if="apartment.img" :src="apartment.img" class="card-img-top mb-3 rounded" :class="fullLength ? '' : 'image-preview'" alt="...">
                </div>
                <div class="card-body">
                    <p class="address">
                        {{ apartment.address }}
                    </p>
                    <p class="info-container">
                        <span class="n-rooms">
                            {{ apartment.no_rooms }} rooms <i class="fa-solid fa-circle"></i>
                        </span>
                        <span class="n-beds">
                            {{ apartment.no_beds }} beds <i class="fa-solid fa-circle"></i>
                        </span>
                        <span class="n-bathrooms">
                            {{ apartment.no_bathrooms }} bathrooms
                        </span>
                    </p>
                    <p>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span class="text-star">Ancora nessuna recensione</span>
                    </p>
                    <hr>
                    <!--
                    <p class="price-container">
                        <span class="price">
                            {{ apartment.price }}&euro;
                        </span>
                        <span class="text">
                            night.
                        </span>
                    </p>
                    -->
                    <!--
                    <div class="d-flex mb-3" v-if="linkRoute">
                        <router-link :to="linkRoute" class="btn btn-outline-danger">
                            {{ linkLabel }}
                        </router-link>
                    </div>
                    -->
                    <div class="user-info">
                        <p>
                            <span class="user-logo">
                                <i class="fa-solid fa-user fa-xl me-1"></i>
                            </span>
                            <span class="info-text">
                                Hosted by:
                            </span>
                            <span class="info-name">
                                {{ apartment.user.surname}} {{ apartment.user.name}}
                            </span>
                        </p>

                        <ContactForm/>
                    </div>
                    <hr>
                    <!--Sezione dei filtri-->
                </div>
                <div class="user-info-container card-body">
                    <p><i class="fa-solid fa-door-open fa-xl"></i>Self check-in</p>
                    <p><i class="fa-solid fa-medal fa-xl"></i>{{ apartment.user.surname}} {{ apartment.user.name}} è Superhost.</p>
                    <p><i class="fa-solid fa-calendar-days fa-xl"></i>Cancellazione gratuita</p>
                </div>
                <hr>
                <p class="description-text">
                    {{ apartment.description}}
                </p>
                </div>
                <div class="row pb-5 ">
                <div class="col-12">
                    <hr>
                    <p class="fs-4 fw-semibold mt-4 mb-3"><i class="fa-solid fa-location-dot me-2"></i>Where you’ll be</p>
                    <p class="map-address">
                        {{ apartment.address }}
                    </p>
                    <div id="map"></div>
                </div>
            </div>
            </div>
        </section>
        
            <div class="card-form">
                <p class="price-container">
                    <span class="price">
                        {{ apartment.price }}&euro;
                    </span>
                    <span class="price-text">
                        night.
                    </span>
                </p>

            </div>
        
    </main>
</template>
<script>
import SingleCard from '@/components/SingleCard.vue';
import ContactForm from './ContactForm.vue';

import tt from "@tomtom-international/web-sdk-maps";
import axios from 'axios';

export default {
    name: 'SingleApartment',
    data(){
        return{
            apartment: {},
            id: ''
        }
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
        },
        createMap() {
            const map = tt.map({
                key: "9B3Txp0d4DICteHUwWohHtaZOMm3WCUY",
                container: "map",
                center: [this.apartment.longitude, this.apartment.latitude],
                zoom: 18
            });
            map.addControl(new tt.FullscreenControl());
            map.addControl(new tt.NavigationControl());
            const marker = new tt.Marker({
                
            }).setLngLat([this.apartment.longitude, this.apartment.latitude]).addTo(map);
            console.log(marker.getElement())
        },
    },
    mounted() {
        this.createMap();
    },
    created(){
        this.getApartment();
    },

    components:{
        SingleCard,
        ContactForm,
        
    },

}
</script>
<style lang="scss" scoped>

    .position-container {
        position: relative;
    }

    .card-title {
        margin-bottom: 1.5rem;
        margin-left: 2rem;
        padding-top: 1rem;
        font-size: 2rem;
        font-weight: 500;
    }

    .img-container {
        width: 100%;
        height: 600px;
        display: flex;
        justify-content: center;
    }
    img {
        object-fit: cover;
        //height: 550px;
        //width: 650px;
    }

    .address {
        margin: 0 0 .5rem 0;
        font-size: 1.4rem;
        font-weight: 400;
    }

    .fa-circle {
        scale: .3;
        margin-right: .2rem;
    }

    .info-container {
        font-weight: 300;
        margin-bottom: .3rem;
    }

    .fa-star {
        scale: .9;
        margin-right: .3rem;
    }

    .text-star {
        font-weight: 300;
    }

    .info-text,
    .info-name {
        font-weight: 600;
        font-size: 1.2rem;
    }

    .user-info-container{
        i{
            scale: 1.2;
            margin-right: 1rem;
        }
        p{
            margin-bottom: 2rem;
            font-weight: 600;
            font-size: 1.1rem;
        }
    }

    .description-text{
        font-weight: 300;
        margin: .8rem;
        width: 50%;
    }

    .map-address{
        font-size: .9rem;
        font-weight: 300;
    }

    #map {
        width: 100%;
        height: 500px;
    }

    /*Card price Style*/

    .card-form {
        border: 1px solid rgb(221, 221, 221);
        background-color: white;
        border-radius: 12px;
        padding: 24px;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
        height: 500px;
        width: 350px;
        position: absolute;
        top: 1500px;
        right: 110px;
        margin: .2rem;
        //z-index: 1;
        //overflow: scroll;
    }

    .price {
        font-weight: 600;
        font-size: 1.5rem;
    }
    .price-text {
        font-weight: 300;
        font-size: 1.2rem;
    }

</style>