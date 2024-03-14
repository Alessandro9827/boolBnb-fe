<template>
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
            <li v-for="service in services" :title="service.name">

            </li>
          </ul>
        </div>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="closeModal"></button>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
export default {
  data() {
    return {
      showModal: false,
      services: []
    };
  },
  methods: {
    closeModal() {
      this.showModal = false;
    },
    // getServices(){
    //         axios.get('http://127.0.0.1:8000/api/guest/services/search', {
    //             params: {
    //                 //address: this.search,
    //                 //title: title,
    //                 //address: address,
    //             }
    //         })
    //         .then((response) => {
    //             console.log(response.data.results);
    //             this.services = response.data.results;

    //         })
    //     }
  }
};
</script>

<style>
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
