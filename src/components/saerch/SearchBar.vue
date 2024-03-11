<template lang="">
    <section class="container">
        <div class="input-group mt-3">
        <input type="text" class="form-control rounded-pill" placeholder="Cerca destinazioni" aria-label="Cerca destinazioni" aria-describedby="basic-addon2"
        v-model="queryString" @keyup.enter="getApartments(queryString)" >
        <div class="input-group-append">
            <button class="btn btn-danger m-1 rounded-pill" type="button">
                Cerca
            </button>
        </div>
    </div>
    </section>
    
</template>

<script>
import axios from 'axios';
import SingleApartment from '@/pages/SingleApartment.vue';

export default {
    name: 'SearchBar',
    data(){
        return{
            apartments: [],
            queryString: '',
        }
    },
    methods:{
        getPosts(address){
            axios.get('http://127.0.0.1:8000', {
                params: {
                    address: address,
                }
            })
            .then((apartments) => {
                console.log(apartments);
                //this.posts = response.data.results;

            })
            .catch(function (error) {
                console.warn(error);
                //this.$router.push({ name: 'not-found' })
            })
        }
    },
    components:{
        SingleApartment
    },
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