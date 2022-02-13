<template>
    <div> 
        <router-link to="/addclient">Agregar Datos</router-link>
        <table class="table">
            <thead>
                <tr>
                    <th>nombre</th>
                    <th>direccion</th>
                    <th>Accion</th>
                </tr>
            </thead>
            <tbody v-for="(value,index) in data" :key="index">
                <tr>
                    <td>{{value.nombre}}</td>
                    <td>{{value.direccion}}</td>
                    <td>
                        <router-link class="btn btn-secondary" :to="'/editclient/'+value.id">Editar</router-link>
                        <button class="btn btn-danger" v-on:click="deleteData(value.id)">Eliminar</button>
                    </td>

                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>

import {apiClient} from '../apis/apiClient';
export default {
    name:'Client',
    data(){
        return{
            data:null
        };
    },
    mounted(){
        this.axios.get(apiClient).then(res =>{
            if (res.data) {
                this.data = res.data;
            }
        });
    },
    methods:{
        deleteData (id) {
            if(id){
                this.axios.delete(`${apiClient}/${id}`).then(res =>{
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
