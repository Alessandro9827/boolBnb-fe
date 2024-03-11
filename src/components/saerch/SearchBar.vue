<template lang="">
    <section class="container">
        <div class="input-group mt-3">
        <input type="text" class="form-control rounded-pill" placeholder="Cerca destinazioni" aria-label="Cerca destinazioni" aria-describedby="basic-addon2">
        <div class="input-group-append">
            <button class="btn btn-danger m-1 rounded-pill" type="button">
                Cerca
            </button>
        </div>
    </div>
    </section>
    
</template>

<script>
    export default {
        name: 'SearchBar',
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
</style>