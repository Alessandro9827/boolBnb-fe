<template lang="">
    <header >
        <section class="jumbotron pt-4">
       
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
    <section > 
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <div class="col-5">
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
                                    search
                                </a>
                            </router-link>
                        </li>
                        <!--Inserire dropdown bootstrap per Accedere/Iscriversi
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
                        -->
                    </ul>
                </div>
            </div>
           
        </nav>
        <section class="header-text">
        <h1 class="text-white"> Recharge energies in our unique BnB</h1>
        <div> hfhfhfhfhfh </div>
    </section>
    </section>
</section>
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
.jumbotron {
    position: relative; /* Assicura che i pseudoelementi siano posizionati correttamente */
    width: 100%;
    height: 1200px;
    background-image: url(../../public/img/baita-valon-sotto-le-stelle.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.jumbotron::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Opacità del 50% */
}

/* Aggiustiamo il contenuto all'interno della jumbotron per essere visibile sopra il livello semi-trasparente */
.jumbotron .content {
    position: relative;
    z-index: 1; /* Assicura che il contenuto sia sopra l'overlay */
}


    .navbar{
        height: 70px;
        width: 50%;
        padding-left: 2rem;
        margin-top: 3rem;
        border-radius: 3rem;
        background-color: white;
        margin: 0 auto;

    }

    img.logo{
        vertical-align: bottom;
        width: 40px;
        height: 40px;
    }

    span.bnb{
        color: #FF385C;
        font-size: 1.4rem;
    }

    .tag-home,
    .tag-search{
        font-weight: 400;
        margin-right: 1rem;
        font-size: 1.4rem;
    }

//nav#boolBnB-logo{
//    width: 40%;
//}
</style>