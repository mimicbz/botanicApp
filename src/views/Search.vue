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
    import botanicMixin from "@/_mixins/botanicMixin";

    export default {
        mixins: [botanicMixin],
        data() {
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
            }
        },
        mounted() {
            this.loadBotanicDatas();
        },
    }
</script>