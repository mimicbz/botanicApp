<template class="mt-2">
    Test Composant composable
    c : {{ c }}

    <v-btn @click="dec">-</v-btn>
    count :  {{ c }}
    <v-btn @click="inc">+</v-btn>


</template>

<script>
    import composable from "../_composables/composable";

    export default {
        data(){
            const {c, add, dec} = composable();
            return {
                c,add, dec
            }
        }
    }
</script>