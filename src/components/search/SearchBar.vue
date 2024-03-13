<template lang="">
    <section class="container">
        <div class="input-group m-4">
            <input type="text" class="form-control rounded-pill" id="floatingInput" placeholder="Cerca destinazione" aria-describedby="button-addon2"
                v-model="queryString" @keyup.enter="getApartments(queryString)" >
            <button class="btn btn-danger m-1 rounded-pill" type="button" id="button-addon2">Cerca</button>
        </div>

        <SingleCard class="p-0 col-12 mx-4 my-5" v-for="apartment in apartments" :key="apartment.id"
        :title="apartment.title" :apartment_image="apartment.img" :address="apartment.address" :description="apartment.description" :fullLength="true" 
        :linkRoute="{name: 'apartments', params: { id: apartment.id}}" 
            />

    </section>
    
    
</template>

<script>
import axios from 'axios';
import SingleApartment from '@/pages/SingleApartment.vue';
import Apartments from '@/pages/Apartments.vue';
import SingleCard from '../SingleCard.vue';

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
</style>