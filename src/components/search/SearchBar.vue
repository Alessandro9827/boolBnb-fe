<template lang="">
     <div id="my_container">
        <div class="d-flex justify-content-center">
            <div class="col-4 form-floating m-4 d-flex">
                <input type="text" class="form-control rounded-pill" id="floatingInput"  v-model="address" @keyup.enter="getApartments()">
                <label for="floatingInput">Search by address</label>
                <button class="btn btn-danger m-1 rounded-pill" type="button" id="button-addon2" @click="getApartments()">Cerca</button>
            </div>

            <div>
               <!-- angolo prove -->
            </div>
           
        </div>
    </div> 
    
    <div class="container">
        <div class="row justify-content-center">
            <SingleCard class="p-0 col-3 mx-4 my-5" v-for="apartment in apartments" :key="apartment.id"
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
            :linkRoute="{ name: 'single-apartment', params: { id: apartment.id }}" 
            linkLabel="Read more..." />
        </div>
        <div class='row'>
          
            <div>
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary" @click="showModal = true">
                  Choose your filter
                </button>
            
                <!-- Modal -->
                <div class="modal" :class="{ 'is-active': showModal }">
                  <div class="modal-background" @click="closeModal"></div>
                  <div class="modal-content">
                    <!-- Contenuto della modale -->
                    <div class="box">
                      <ul>
                        <div>
                            <div class="col-4 m-4">
                                <div class="me-3">
                                    <label for="range" class="form-label mb-3">Distanza: <span class="primary-color fw-bold ">{{ range }} km</span></label>
                                    <input type="range" v-model="range" class="form-range" min="2" max="20" step="1" id="range">
                                </div> 
                                <div class="me-3">
                                    <label for="beds" class="form-label mb-3">Number of beds: <!-- <span class="primary-color fw-bold ">{{ range }} km</span> --></label>
                                    <input type="number" v-model="beds" class="form-control" step="1" id="beds">
                                </div>
                                <div class="me-3">
                                    <label for="rooms" class="form-label mb-3">Number of rooms: <!-- <span class="primary-color fw-bold ">{{ range }} km</span> --></label>
                                    <input type="number" v-model="rooms" class="form-control" step="1" id="rooms">
                                </div>
                                <div class="me-3">
                                    <label for="bathrooms" class="form-label mb-3">Number of bathrooms: <!-- <span class="primary-color fw-bold ">{{ range }} km</span> --></label>
                                    <input type="number" v-model="bathrooms" class="form-control" step="1" id="bathrooms">
                                </div>



                                <div class="col-5 mb-3" v-for="service in services">
                                    <div class="form-check">
                                        <input class="form-check-input my-check" type="checkbox" v-model="filteredServices" :value="service.id" :id="'Check-' + service.id">
                                        <label class="form-check-label" :for="'Check-' + services.id">
                                            {{ service.name }}
                                        </label>
                                    </div>
                                </div>

                                <div class="modal-footer">
                                    <button type="button" class="btn" data-bs-dismiss="modal" @click="getApartments(this.rooms, this.beds, this.filteredServices, this.address, this.range);">Mostra</button>
                                </div>
                              <!-- <input type="checkbox" id="wifi" class="custom-checkbox" v-model="checkedFilters" value="wi-fi">
                              <label for="wifi">Wi-Fi</label> -->
                
                              <!-- <input type="checkbox" id="parking" class="custom-checkbox" v-model="checkedFilters" value="parking">
                              <label for="parking">Parking</label> -->
                
                              <!-- Aggiungi altre checkbox per gli altri servizi -->
                                
                               
                            </div>
                        </div>
                      </ul>
                    </div>
                  </div>
                  <button class="modal-close is-large" aria-label="close" @click="closeModal"></button>
                </div>
              </div>

        </div>
    </div>

</template>

<script>
import axios from 'axios';
import SingleApartment from '@/pages/SingleApartment.vue';
import Apartments from '@/pages/Apartments.vue';
import SingleCard from '../SingleCard.vue';
import { store } from '../js/store';
// import FilterSearchBar from './FilterSearchBar.vue';

export default {
    emits: ['check-filter'],
    name: 'SearchBar',
    data(){
        return{
            showModal: false,
            apartments: [],
            services: [],
            filteredServices: [],
            address: '',
            range: 10,
            beds: 0,
            rooms: 0,
            bathrooms: 0,
            // filter: ['wi-fi', 'parking', 'sauna']
        }     
    },


    methods:{
        updateDataByFilter(updatedOptions){
            this.filter= updatedOptions
        },
        getApartments(){
            axios.get('http://127.0.0.1:8000/api/guest/apartments/search', {
                params: {
                    address: this.address,
                    beds: this.beds,
                    rooms: this.rooms,
                    bathrooms: this.bathrooms,
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
        },

        getServices() {
            axios.get('http://127.0.0.1:8000/api/apartment/services', {
                params: {
                }
            })
            .then( response => {
                console.log(response.data.results);
                // this.services = response.data.results;
            })
            .catch(function (error) {
                console.log(error);
            });
        },

        checkFilter() {
            // Emetti l'evento con i filtri selezionati
            this.$emit('check-filter', this.checkedFilters);
        },

        closeModal() {
            this.showModal = false;
        }
    },

    created() {
        this.getServices();
        this.getApartments(this.rooms, this.beds, this.filteredServices, this.address, this.range);
    },
        
    components: {
        SingleApartment,
        Apartments,
        SingleCard,
        // FilterSearchBar,
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

    /* Stili per la modale */
.modal {
    display: none;
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .modal.is-active {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .modal-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .modal-content {
    background-color: #fff;
    padding: 20px;
    width: 50%;
    border-radius: 5px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }
  
  .modal-close {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #333;
  }
</style>