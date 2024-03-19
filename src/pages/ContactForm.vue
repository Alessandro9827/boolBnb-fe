<template>
    
        

<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Contact me
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">

            </button>
        </div>
        <div class="modal-body">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-7">
                        <h1>
                            Contact me!
                        </h1>
                
                
                    </div>
                    <div class="col-7 mb-3">
                        <div class="alert alert-danger" v-for="error in errors.name">
                            <p>
                                {{ error }}
                            </p>
                        </div>
                        <div class="form-floating">
                            
                            <input type="text" class="form-control" id="floatingName" placeholder="Your name" v-model="name">
                            <label for="floatingPassword">Type your name</label>
                        </div>
                        <div class="alert alert-danger" v-for="error in errors.email">
                            <p>
                                {{ error }}
                            </p>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="email">
                            <label for="floatingInput">Type your email address</label>
                        </div>
                        <div class="alert alert-danger" v-for="error in errors.message">
                            <p>
                                {{ error }}
                            </p>
                        </div>
                        <div class="form-floating mb-3">
                            <textarea class="form-control testo" placeholder="Type your message here" id="floatingTextarea" v-model="message" style="height: 200px;">

                            </textarea>
                            <label for="floatingTextarea">Type your message here</label>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <div class="form-floating mb-3 d-flex justify-content-between">
                <button class="btn btn-primary btn-xl" @click="sendContactForm">
                    Send your message
                </button>
                <button class="btn btn-warning btn-xl" @click="resetFields">
                    Reset your message
                </button>
            </div>
            
        </div>
        </div>
    </div>
</div>
  




    
       
</template>
<script>
import axios from 'axios';
export default {
    name: 'ContactForm',

    data() {
        return {
            name : '',
            email : '',
            date : '',
            message : '',
            showModal: false,
            
            
            success : false,
            errors: {},
            
        }
    },
    methods: {
        closeModal() {
            this.showModal = false;
        },
    
        sendContactForm() {

            const fillingData = {
                name: this.name,
                email : this.email,
                date : new Date().toJSON().slice(0, 10).replace(/-/g,'/'),
                message : this.message,
            }

            this.errors = {};

            axios.post(`http://127.0.0.1:8000/api/contact-us/${this.$route.params.id}`, fillingData)
                
            
            .then((response) => {
                console.log(response.data.success);
                this.success = response.data.success;

                if(this.succes){
                    this.resetFields();
                } else {
                    this.errors = response.data.errors;
                }


            })
            .catch(function (error) {
                console.warn(error);
                
            })
            // if (this.errors === response.data.errors) {
            // }else {
            //     this.resetFields();
            // }
        },
        resetFields(){
        this.name = '';
        this.email = '';
        this.date = '';
        this.message = '';

    },
      
    },

    
}
</script>
<style lang="sccs" scoped>
   
</style>