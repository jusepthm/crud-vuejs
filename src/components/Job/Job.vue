<template>
    <div> 
        <router-link to="/addjob">Agregar Datos</router-link>
        <table class="table">
            <thead>
                <tr>
                    <th>Tipo de trabajo</th>
                    <th>Precio</th>
                    <th>Accion</th>
                </tr>
            </thead>
            <tbody v-for="(value,index) in data" :key="index">
                <tr>
                    <td>{{value.tipoTrabajo}}</td>
                    <td>{{value.precio}}</td>
                    <td>
                        <router-link class="btn btn-secondary" :to="'/editjob/'+value.id">Editar</router-link>
                        <button class="btn btn-danger" v-on:click="deleteData(value.id)">Eliminar</button>
                    </td>

                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>

import {apiJob} from '../apis/apiJob';
export default {
    name:'Job',
    data(){
        return{
            data:null
        };
    },
    mounted(){
        this.axios.get(apiJob).then(res =>{
            if (res.data) {
                this.data = res.data;
            }
        });
    },
    methods:{
        deleteData (id) {
            if(id){
                this.axios.delete(`${apiJob}/${id}`).then(res =>{
                    if(res.data){
                        let newArr = this.data.filter(el =>el.id !==id);
                        this.data =newArr
                    }
                })
            }
        }
    }
};

</script>
