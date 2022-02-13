<template>
    <form >
        <label for="name">tipoDeTrabajo</label>
        <input type="text" v-model="tipoTrabajo" name="tipoTrabajo" class="form-control">
        <label for="name">precio</label>
        <input type="text" v-model="precio" name="precio" class="form-control">
        <button class="btn btn-primary my-2" v-on:click="addData">Agregar Dato</button>
    </form>
</template>
<script>
import {apiJob} from "../apis/apiJob";
export default {
    name:'AddJob',
    data(){
        return{
            tipoTrabajo:null,
            precio:null
        }
    },
    methods:{
        addData(e){
            e.preventDefault();
            let {tipoTrabajo,precio}= this;
            let data = {tipoTrabajo,precio};
            debugger
            if(data){
                this.axios.post(apiJob,data).then(res =>{
                    if(res.data){
                        this.$router.push('/Job');
                    }
                })
            }
        }
    }
}
</script>