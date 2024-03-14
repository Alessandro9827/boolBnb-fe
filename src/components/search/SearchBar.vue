<template lang="">
     <div id="my_container">
        <div class="d-flex justify-content-center">
            <div class="col-6 form-floating mb-3 d-flex">
                <input type="text" class="form-control rounded-pill" id="floatingInput"  v-model="queryString" @keyup="getApartments(queryString)">
                <label for="floatingInput">Search by city</label>
                <button class="btn btn-danger m-1 rounded-pill" type="button" id="button-addon2" @click="getApartments(queryString)">Cerca</button>
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
    </div>
</template>

<script>
import axios from 'axios';
import SingleApartment from '@/pages/SingleApartment.vue';
import Apartments from '@/pages/Apartments.vue';
import SingleCard from '../SingleCard.vue';
import { store } from '../js/store';

export default {
    name: 'SearchBar',
    data(){
        return{
            apartments: [],
            queryString: '',
            //title: '',
        }
    },
    methods:{
        getApartments(address){
            axios.get('http://127.0.0.1:8000/api/guest/apartments/search', {
                params: {
                    //address: this.search,
                    //title: title,
                    address: address,
                }
            })
            .then((response) => {
                console.log(response.data.results);
                this.apartments = response.data.results;

            })
            .catch(function (error) {
                console.warn(error);
                this.$router.push({ name: 'not-found' })
            })
        }
    },
        
    components: {
        SingleApartment,
        Apartments,
        SingleCard
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