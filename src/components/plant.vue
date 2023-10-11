<template>
    <v-card v-if="currentPlant"
            class="mx-auto"
            max-width="500">
        <v-img :src="currentPlant.image_url"
               height="250px"
               cover></v-img>

        <v-card-title>{{ currentPlant.common_name }}</v-card-title>
        <v-card-subtitle>{{ currentPlant.scientific_name }}</v-card-subtitle>

        <v-card-actions>
            <v-btn style="margin-left:10px;"
                   color="secondary"
                   size="small"
                   variant="outlined"
                   :icon="(favorites ? favorites.find(f => f == currentPlant.id) : false) ? 'mdi-heart' : 'mdi-heart-outline'"
                   @click="setFavorite(currentPlant.id)">
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn color="secondary"
                   :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                   @click="show = !show"
            ></v-btn>
        </v-card-actions>

        <v-expand-transition>
            <div v-show="show">
                <v-divider></v-divider>
                <v-card-text>Identification du genre : {{ currentPlant.genus_id }}</v-card-text>
                <v-card-text>Type : {{ currentPlant.rank }}</v-card-text>
                <v-card-text>Famille : {{ currentPlant.family }}</v-card-text>
            </div>
        </v-expand-transition>
    </v-card>
</template>

<script>
    export default {
        name: "plant",
        props: ['currentPlant'],

        data() {
            return {
                show: false,
                favorites: _getLocalStorageFavoritePlants() ? _getLocalStorageFavoritePlants() : []
            }
        },
        methods: {
            setFavorite(newId) {
                if (this.favorites.find(f => f == newId)) {
                    this.favorites = this.favorites.filter(f => f !== newId);
                } else {
                    this.favorites.push(newId);
                }
                localStorage['favoritePlants'] = JSON.stringify(this.favorites);
            }
        }
    }
</script>