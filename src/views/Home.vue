<template>
    <h1 class="mb-4">Bienvenue sur <b>Mon Jardin Botanique</b></h1>
    <p>Les plantes (Plantae) sont des organismes photosynthétiques et autotrophes,
       caractérisés par des cellules végétales. Elles forment l'un des règnes des
       Eukaryota. Ce règne est un groupe monophylétique comprenant les plantes
       terrestres. La science des plantes est la botanique, qui dans son acception classique
       étudie aussi les algues et les cyanobactéries (qui n'appartiennent pas au règne des
       Plantae). L'ancien « règne végétal » n'existe plus dans les classifications modernes
       (cladistes ou évolutionnistes). Le nombre d'espèces de plantes est difficile à
       déterminer, mais il existerait (en 2015) plus de 400 000 espèces décrites, dont la
       grande majorité sont des plantes à fleurs (369 000 espèces
       répertoriées), sachant que près de deux mille nouvelles espèces sont découvertes
       chaque année. Depuis le début du xxe siècle, trois espèces de plantes disparaissent
       chaque année, principalement victimes de la déforestation. Une plante sur cinq serait
       menacée d'extinction.</p>
    <!--        <v-btn @click="increment">+</v-btn>
            <v-btn @click="decrement">-</v-btn>-->
</template>

<script>
    import {useMyStore} from '../store/store.js';
    import {mapState} from 'pinia';

    export default {
        data() {
            const trefleStore = useMyStore();
            return {
                increment: trefleStore.increment,
                decrement: trefleStore.decrement,
            }
        },
        computed: {
            ...mapState(useMyStore, ['count'])
        }
    }
</script>
