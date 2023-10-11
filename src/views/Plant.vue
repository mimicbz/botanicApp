<script setup>
    import Plant from '../components/plant.vue'
</script>

<template>
    <h1 class="mb-3">Détails sur la plante</h1>
    
    <Plant :current-plant="currentPlant"></Plant>
</template>

<script>
    import {useMyStore} from '@/store/store';
    import {mapState} from 'pinia';
    import axios from 'axios';

    export default {
        data() {
            const trefleStore = useMyStore();
            return {
                plantId: this.$route.params.plantId,
                currentPlant: null,
                botanicDatas: trefleStore.botanicDatas,
                setCurrentPlant: trefleStore.setCurrentPlant,
                setBotanicDatas: trefleStore.setBotanicDatas
            }
        },
        computed: {
            ...mapState(useMyStore, ['count'])
        },
        mounted() {
            let _vm = this;
            if (!this.botanicDatas) {
                axios({
                    method: 'GET',
                    url: `https://trefle.io/api/v1/plants?token=vFofOYMiBLQolXay8HkRs0RfnDYNnxtKs3kfzP4lOC4`,
                }).then((response) => {
                    _vm.currentPlant = response.data.data.find(p => p.id == _vm.plantId);
                }).catch((error) => {
                    console.log(error);
                });
            } else {
                this.currentPlant = this.botanicDatas.find(p => p.id == _vm.plantId);
            }
        },
    }
</script>
