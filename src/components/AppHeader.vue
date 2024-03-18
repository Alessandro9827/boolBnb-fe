<template lang="">
    <header>
        <!--
        <div class=" container" data-bs-theme="dark">
            <div class="row ">
                    <div class="col-4 mt-4">
                        <img class="logo img-fluid" src="/public/img/airbnb_logo_icon_170605.png" alt="logo-bnb">
                        <router-link :to="{name: linkItems[0].routerName}" class="navbar-brand fw-semibold bnb ps-2 fs-4"> 
                            <span class="bnb">
                                boolbnb
                            </span>
                        </router-link>
                    </div>
                    <div class="col-4 mt-4">
                        <router-link :to="{name: linkItems[1].routerName}" class="navbar-brand fw-semibold bnb ps-2 fs-4"> 
                            <span class="">
                                {{linkItems[1].label}}
                            </span>
                        </router-link>
                    </div>
                    <!-- <div class="col-4 mt-4">
                        <router-link :to="{name: linkItems[2].routerName}" class="navbar-brand fw-semibold bnb ps-2 fs-4"> 
                            <span class="">
                                Contact Us
                            </span>
                        </router-link>
                    </div> --><!--
            </div>
            
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ">
                    <li class="nav-item " v-for=" (link,index) in linkItems " :key="index">
                        
                    </li> 
                </ul>
            </div>
            
        </div>
    -->
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <div class="col-4 mt-4">
                    <img class="logo img-fluid" src="/public/img/airbnb_logo_icon_170605.png" alt="logo-bnb">
                    <router-link :to="{name: linkItems[0].routerName}" class="navbar-brand fw-semibold bnb ps-2 fs-4"> 
                        <span class="bnb">
                            boolbnb
                        </span>
                    </router-link>
                </div>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link :to="{name: linkItems[0].routerName}" class="navbar-brand fw-semibold bnb ps-2 fs-4">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name: linkItems[1].routerName}" class="navbar-brand fw-semibold bnb ps-2 fs-4">
                                <a class="nav-link" href="#">
                                    {{linkItems[1].label}}
                                </a>
                            </router-link>
                        </li>
                        <!--
                        <li>
                            <router-link :to="{name: linkItems[2].routerName}" class="navbar-brand fw-semibold bnb ps-2 fs-4"> 
                                <a class="nav-link" href="#">Contact Us</a>
                            </router-link>
                        </li>
                    -->
                    </ul>
                </div>
            </div>
        </nav>
    
    </header>
</template>
<script>
import SearchBar from './search/SearchBar.vue';
export default {
    components: {
        SearchBar
    },
    data() {
        return {
            linkItems: [
                {
                    label: 'Apartments',
                    routerName: 'apartments'
                },
                {
                    label: 'Search',
                    routerName: 'apartments-search'
                },
                // {
                //     label: 'Contact US',
                //     routerName: 'contact-us'
                // },
            ]
        }
    },
}
</script>
<style lang="scss" scoped>
img.logo{
    vertical-align: bottom;
    width: 45px;
    height: 40px;
}
span.bnb{
    color: #FF385C;
    //height: 100%;
}

nav#boolBnB-logo{
    width: 40%;
}
</style>