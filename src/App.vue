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
    <router-view>
      
    </router-view>

    <SearchBar />
</template>

<style lang="scss">
  @use './style/general.scss' as *;
</style>
