<template lang="">
    <header>
        <div class=" container" data-bs-theme="dark">
            <div class="row">
                <nav calss="navbar navbar-expand-lg col-12" id="boolBnB-logo">
                    <img class="logo img-fluid" src="/public/img/airbnb_logo_icon_170605.png" alt="logo-bnb">
                    <router-link :to="{name: linkItems[0].routerName}" class="navbar-brand fw-semibold bnb ps-2 fs-4"> 
                        <span class="bnb">
                            boolbnb
                        </span>
                    </router-link>
                </nav>
                <SearchBar/>
                
            </div>
        
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ">
                    <li class="nav-item " v-for=" (link,index) in linkItems " :key="index">
                        
                    </li> 
                </ul>
            </div>
            
        </div>
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
    height: 100%;
}

nav#boolBnB-logo{
    width: 40%;
}
</style>