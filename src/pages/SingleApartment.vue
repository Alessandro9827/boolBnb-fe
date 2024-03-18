<template lang="">
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
                center: [9.187319, 45.469114],
                zoom: 18
            });
            map.addControl(new tt.FullscreenControl());
            map.addControl(new tt.NavigationControl());
            const marker = new tt.Marker({
                
            }).setLngLat([9.187319, 45.469114]).addTo(map);
            console.log(marker.getElement())
        },
    },
    mounted() {
        this.createMap();
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
<style lang="scss">
#map {
    width: 100%;
    height: 500px;
}
</style>