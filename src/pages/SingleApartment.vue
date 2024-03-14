<template lang="">
    <main class="container">
        <section class="row justify-content-center">
            <SingleCard class="p-0 col-12 mx-4 my-5" :title="apartment.title" :apartment_image="apartment.img" :description="apartment.description" :fullLength="true"
            />
            <ContactForm/>
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
<style lang="scss">
</style>