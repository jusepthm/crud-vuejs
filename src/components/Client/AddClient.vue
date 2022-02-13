<template>
    <form >
        <label for="name">Nombre</label>
        <input type="text" v-model="nombre" name="nombre" class="form-control">
        <label for="name">direccion</label>
        <input type="text" v-model="direccion" name="direccion" class="form-control">
        <button class="btn btn-primary my-2" v-on:click="addData">Agregar Dato</button>
    </form>
</template>
<script>
import {apiClient} from "../apis/apiClient";
export default {
    name:'AddClient',
    data(){
        return{
            nombre:null,
            direccion:null
        }
    },
    methods:{
        addData(e){
            e.preventDefault();
            let {nombre,direccion}= this;
            let data = {nombre,direccion};
            debugger
            if(data){
                this.axios.post(apiClient,data).then(res =>{
                    if(res.data){
                        this.$router.push('/Client');
                    }
                })
            }
        }
    }
}
</script>