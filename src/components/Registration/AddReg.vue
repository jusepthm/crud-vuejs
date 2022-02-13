<template>
    <form >
        <label for="name">fecha</label>
        <input type="text" v-model="fecha" name="fecha" class="form-control">
        <label for="name">descripcion</label>
        <input type="text" v-model="descripcion" name="descripcion" class="form-control">
        <label for="name">estado</label>
        <input type="text" v-model="estado" name="estado" class="form-control">
        <button class="btn btn-primary my-2" v-on:click="addData">Agregar Dato</button>
    </form>
</template>
<script>
import {apiReg} from "../apis/apiReg";
export default {
    name:'AddReg',
    data(){
        return{
            fecha:null,
            descripcion:null,
            estado:null
        }
    },
    methods:{
        addData(e){
            e.preventDefault();
            let {fecha,descripcion,estado}= this;
            let data = {fecha,descripcion,estado};
            debugger
            if(data){
                this.axios.post(apiReg,data).then(res =>{
                    if(res.data){
                        this.$router.push('/Registration');
                    }
                })
            }
        }
    }
}
</script>