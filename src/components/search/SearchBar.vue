<template lang="">
    <section class="container">
        <div class="input-group m-4">
            <input type="text" class="form-control rounded-pill" id="floatingInput" placeholder="Cerca destinazione" aria-describedby="button-addon2"
            v-model="search" @keyup.enter="getApartments(search)" >
            <button class="btn btn-danger m-1 rounded-pill" type="button" id="button-addon2">Cerca</button>
        </div>
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
            search: '',
            title: '',
        }
    },
    methods:{
        getApartments(address){
            axios.get('http://127.0.0.1:8000/api/guest/apartments/search', {
                params: {
                    address: address,
                    title: this.search,
                }
            })
            .then((response) => {
                console.log(response);
                //this.apartments = response.data.results;

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