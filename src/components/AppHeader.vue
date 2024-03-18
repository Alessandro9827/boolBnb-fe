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
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <div class="col-5 img-container">
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
                                <a class="nav-link active tag-home" href="#">Home</a>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{name: linkItems[1].routerName}" class="navbar-brand fw-semibold bnb ps-2 fs-4">
                                <a class="nav-link tag-search" href="#">
                                    <!--{{linkItems[1].label}}-->
                                    Cerca
                                </a>
                            </router-link>
                        </li>
                    </ul>
                </div>
                
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown button
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
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

    .navbar {
        width: 100%;
        height: 70px;
        //position: fixed;
        //z-index: 1;
        background-color: white;
    }

    img.logo{
        vertical-align: bottom;
        width: 40px;
        height: 40px;
        margin-left: 1rem;
    }
    span.bnb{
        color: #FF385C;
    }

    .tag-home,
    .tag-search {
        font-weight: 400;
        font-size: 1.4rem;
        margin-right: .5rem;
    }
    

</style>