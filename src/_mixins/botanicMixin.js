import axios from "axios";
import {useMyStore} from "@/store/store";
import {mapState} from "pinia";

export default {
    data(){
        const trefleStore = useMyStore();
        
        return {
            currentPlant: null,
            setBotanicDatas: trefleStore.setBotanicDatas,
            plantId: this.$route.params.plantId,
            favorites: _getLocalStorageFavoritePlants() ? _getLocalStorageFavoritePlants() : []
        }
    },
    computed: {
        ...mapState(useMyStore, ['botanicDatas'])
    },
    methods: {
        loadBotanicDatas(){
            let _vm = this;
            if (!this.botanicDatas) {
                axios({
                    method: 'GET',
                    url: `https://trefle.io/api/v1/plants?token=vFofOYMiBLQolXay8HkRs0RfnDYNnxtKs3kfzP4lOC4`,
                }).then((response) => {
                    if(_vm.$route.name === 'plant'){
                        _vm.currentPlant = response.data.data.find(p => p.id == _vm.plantId);
                    } else {
                        _vm.setBotanicDatas(response.data.data);
                    }
                }).catch((error) => {
                    console.log(error);
                });
            } else if(_vm.$route.name === 'plant') {
                this.currentPlant = this.botanicDatas.find(p => p.id == _vm.plantId);
            }
        },

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
