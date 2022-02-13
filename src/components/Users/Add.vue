<template>
    <form >
        <label for="name">Nombre</label>
        <input type="text" v-model="nombre" name="nombre" class="form-control">
        <label for="name">Edad</label>
        <input type="text" v-model="edad" name="edad" class="form-control">
        <button class="btn btn-primary my-2" v-on:click="addData">Agregar Dato</button>
    </form>
</template>
<script>
import {api} from "../apis/apiUsers";
export default {
    name:'Add',
    data(){
        return{
            nombre:null,
            edad:null
        }
    },
    methods:{
        addData(e){
            e.preventDefault();
            let {nombre,edad}= this;
            let data = {nombre,edad};
            debugger
            if(data){
                this.axios.post(api,data).then(res =>{
                    if(res.data){
                        this.$router.push('/');
                    }
                })
            }
        }
    }
}
</script>