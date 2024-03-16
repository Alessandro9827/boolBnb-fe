<template >
    <div>
        <div class="card-body">
            <h1 class="card-title mb-3">
                {{ title }}
            </h1>
            <p>
                Owner info:
                <ul>
                    <li>
                        {{ user_name}}.
                    </li>            
                    <li>
                        {{ user_surname}}.
                    </li>
                    <li>
                        {{ user_email}}.
                    </li>
                </ul>


                

            </p>


            <img v-if="apartment_image" :src="apartment_image" class="card-img-top mb-3" :class="fullLength ? '' : 'image-preview'" alt="...">
            
            <p class="card-text" v-if="fullLength && description">
                {{ description }}
            </p>
            <p v-else>
                {{ description.substring(0, 120) }}...
            </p>
            <p>
                The house has:
                <ul>
                    <li>
                        {{ no_rooms}} rooms
                    </li>            
                    <li>
                        {{ no_beds}} beds
                    </li>
                    <li>
                        {{ no_bathrooms}} bathrooms
                    </li>
                </ul>
            </p>
            <p>
                The house has: {{ square_meters }} square meters.
            </p>
            <p>
                The house address is: {{ address }}.
            </p>
            
    


            <div class="w-100 d-flex mb-3" v-if="linkRoute">
                <router-link :to="linkRoute" class="btn btn-primary">
                    {{ linkLabel }}
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    props:{
        title: {
            required: true,
            type: String,
        },
        user_name: {
            required: true,
            type: String,
        },
        user_surname: {
            required: true,
            type: String,
        },
        user_email: {
            required: true,
            type: String,
        },
        no_rooms: {
            required: true,
            type: Number,
        },
        no_beds: {
            required: true,
            type: Number,
        },
        no_bathrooms: {
            required: true,
            type: Number,
        },
        square_meters: {
            required: true,
            type: Number,
        },
        address: {
            required: false,
            type: String,
        },
        description: {
            required: false,
            type: String,
        },
        apartment_image: {
            required: true,
            type: [String, File]
        },
        linkRoute: {
            required: false,
            type: [ Object, String ]
        },
        linkLabel: {
            required: false,
            type: String,
        },
        fullLength: {
            required: false,
            type: Boolean,
        },
    }
}
</script>
<style lang="scss" scoped>
    img{
        height: 400px;
        object-fit: cover;
        margin-bottom: 3rem;
    }

    img.image-preview{
        height: 200px;
    }
</style>