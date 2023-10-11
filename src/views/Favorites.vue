<script setup>
    import Plant from '../components/plant.vue'
</script>

<template>
    <div>
        <h1>Mes favoris</h1>
        
        <v-row v-if="favorites && botanicDatas">
            <v-col v-for="favorite in favorites">
                <plant :current-plant="botanicDatas.find(p => p.id == favorite)"></plant>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import botanicMixin from "@/_mixins/botanicMixin";

    export default {
        mixins: [botanicMixin],
        
        mounted() {
            this.loadBotanicDatas();
        },
    }
</script>