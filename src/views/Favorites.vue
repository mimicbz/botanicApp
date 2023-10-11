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
    import {useMyStore} from '@/store/store';
    import {mapState} from 'pinia';
    import axios from 'axios';

    export default {
        data() {
            const trefleStore = useMyStore();

            return {
                setBotanicDatas: trefleStore.setBotanicDatas,
                favorites: _getLocalStorageFavoritePlants() ? _getLocalStorageFavoritePlants() : []
            }
        },
        computed: {
            ...mapState(useMyStore, ['botanicDatas'])
        },
        mounted() {
            let _vm = this;
            axios({
                method: 'GET',
                url: `https://trefle.io/api/v1/plants?token=vFofOYMiBLQolXay8HkRs0RfnDYNnxtKs3kfzP4lOC4`,
            }).then(function (response) {
                _vm.setBotanicDatas(response.data.data);
            }).catch(function (error) {
                console.log(error);
            });

        },
    }
</script>