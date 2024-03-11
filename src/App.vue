<script>
import HomePage from './components/HomePage.vue';
import SearchBar from './components/saerch/SearchBar.vue';

  export default{
    components: { 
      HomePage,
      SearchBar,
    }
}
</script>

<template>
    <SearchBar />
    <router-view>
      
    </router-view>

</template>

<style lang="scss">
  @use './style/general.scss' as *;
</style>
