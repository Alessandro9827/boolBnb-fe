<template lang="">
        <div id="my_container">
            <div class="d-flex justify-content-center">
                <div class="col-4 form-floating m-4 d-flex">
                    <input type="text" class="form-control rounded-pill" id="floatingInput"  v-model="address" @keyup.enter="getApartments()">
                    <label for="floatingInput">Search by address</label>
                    <button class="btn btn-danger m-1 rounded-pill" type="button" id="button-addon2" @click="getApartments(queryString)">Cerca</button>
                </div>
                <div class="col-4 m-4">
                    <label for="range" class="form-label mb-3">Distanza: <span class="primary-color fw-bold ">{{ range }} km</span></label>
                    <input type="range" v-model="range" class="form-range" min="2" max="20" step="1" id="range">
                </div>
            </div>
        </div> 
        <div class="container">
            <div class="row justify-content-center">
                <SingleCard class="p-0 col-3 mx-4 my-5" v-for="apartment in apartments" :key="apartment.id"
                :title="apartment.title" :apartment_image="apartment.img" :address="apartment.address" :description="apartment.description" :fullLength="true" 
                linkLabel="Read more..."
                :linkRoute="{name: 'single-apartment', params: { id: apartment.id}}" />
            </div>
            <div class='row'>
                <FilterSearchBar @check-filter = "updateDataByFilter" 
                v-for="apartment in apartments" :no_bathrooms="apartment.no_bathrooms" :no_beds="apartment.no_beds"
                :no_rooms="apartment.no_rooms" :services="apartment.services"
                />
            </div>
        </div>
     

</template>

<script>
import axios from 'axios';
import SingleApartment from '@/pages/SingleApartment.vue';
import Apartments from '@/pages/Apartments.vue';
import SingleCard from '../SingleCard.vue';
import { store } from '../js/store';
import FilterSearchBar from './FilterSearchBar.vue';

export default {
    name: 'SearchBar',
    data(){
        return{
            apartments: [],
            // services: [],
            address: '',
            range: 10,
            filter: ['wi-fi', 'parking', 'sauna']
        }     
    },


    methods:{
        updateDataByFilter(updatedOptions){
            this.filter= updatedOptions
        },
        getApartments(){
            axios.get('http://127.0.0.1:8000/api/guest/apartments/search', {
                params: {
                    //address: this.search,
                    //title: title,
                    address: this.address,
                    range: this.range,
                }
            })
            .then((response) => {
                console.log(response.data.results);
                this.apartments = response.data.results;
            })
            .catch(function (error) {
                console.warn(error);
                // this.$router.push({ name: 'not-found' })
            })
        }
    },
        
    components: {
        SingleApartment,
        Apartments,
        SingleCard,
        FilterSearchBar,
    }
}
</script>

<style lang="scss" scoped>

    .container {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .input-group{
        width: 50%;
    }
    div#my_container {
        width: 80%;
        margin: 0 auto;
    }
</style>