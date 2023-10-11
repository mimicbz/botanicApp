<script setup>
    import Plant from '../components/plant.vue';
</script>

<template>
    <h1 class="mb-3">Détails sur la plante</h1>

    <Plant :current-plant="currentPlant"></Plant>
    
</template>

<script>
    import botanicMixin from '../_mixins/botanicMixin';

    export default {
        mixins: [botanicMixin],

        mounted() {
            this.loadBotanicDatas();
        },
    }
</script>
