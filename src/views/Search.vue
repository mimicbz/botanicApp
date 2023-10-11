<template>
    <h1>Liste des plantes</h1>
    <v-data-table v-if="botanicDatas" :headers="headers" :items="botanicDatas" :search="search">
        <template v-slot:item.actions="{ item }">
            <v-btn color="secondary"
                   size="small"
                   @click="$router.push({ name: 'plant', params: { plantId: item.id } })">Détails
            </v-btn>
            <v-btn color="secondary"
                   style="margin-left:10px;"
                   size="small"
                   variant="outlined"
                   :icon="(favorites ? favorites.find(f => f == item.id) : false) ? 'mdi-heart' : 'mdi-heart-outline'"
                   @click="setFavorite(item.id)">
            </v-btn>
        </template>
    </v-data-table>
</template>

<script>
    import {useMyStore} from '@/store/store';
    import {mapState} from 'pinia';
    import axios from 'axios';

    export default {
        data() {
            const trefleStore = useMyStore();

            return {
                search: '',
                headers: [
                    {key: 'id', title: 'Id'},
                    {key: 'common_name', title: 'Nom Commun'},
                    {key: 'scientific_name', title: 'Nom scientifique'},
                    {key: 'year', title: 'Découverte'},
                    {key: 'bibliography', title: 'Bibliographie'},
                    {key: 'actions', title: 'Actions', sortable: false},
                ],
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
        methods: {

            setFavorite(newId) {
                if (this.favorites.find(f => f == newId)) {
                    this.favorites = this.favorites.filter(f => f !== newId);
                } else {
                    this.favorites.push(newId);
                }
                console.log(this.favorites);
                localStorage['favoritePlants'] = JSON.stringify(this.favorites);
            },

        }
    }
</script>