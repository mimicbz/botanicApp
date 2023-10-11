import {defineStore} from 'pinia';

export const useMyStore = defineStore('myStore', {
    state: () => ({
        count: 0,
        botanicDatas: null
    }),
    actions: {
        increment() {
            this.count++;
        },
        decrement() {
            this.count--;
        },
        setBotanicDatas(datas) {
            this.botanicDatas = datas;
        },
    },
});