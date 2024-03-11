<template lang="">
    <main class="container">
        <section class="row justify-content-center">
            <div class="col-12">
               
            </div>
            <SingleCard class="card p-0 col-3 mx-4 my-5" v-for="apartment in apartments" :key="apartment"
                :title="apartment.title" :apartment_image="apartment.img" :description="apartment.description" :linkRoute="{ name: 'single-cocktail', params: { id: apartment.id }}" linkLabel="Read more..."
            />
        </section>
    </main>
</template>
<script>
import SingleCard from '@/components/SingleCard.vue';
import axios from 'axios';

export default {
    name: 'Apartments',
    data(){
        return{
            Apartments: [],
        }
    },
    methods:{
        getApartments(){
            axios.get('http://127.0.0.1:8000/api/apartments', {
                params: {
                }
            })
            .then((response) => {
                console.log(response.data.results.data);
                this.apartments = response.data.results.data;

            })
            .catch(function (error) {
                console.warn(error);
                this.$router.push({ name: 'not-found' })
            })
        }
    },
    components:{
        SingleCard
    },

    created(){
        this.getApartments();
    }
}
</script>
<style lang="scss" scoped>
</style>