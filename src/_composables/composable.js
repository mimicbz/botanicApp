import { ref } from "vue";
export default function Counter(){
    
    const c = ref(0);

    function add(){
        c.value++;
    }
    
    function dec(){
        c.value--;
    }
    
    return {
        c,
        add,
        dec
    }
}