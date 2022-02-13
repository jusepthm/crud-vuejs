
<template>
    <div> 
        <router-link to="/add">Agregar Datos</router-link>
        <table class="table">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Edad</th>
                    <th>Accion</th>
                </tr>
            </thead>
            <tbody v-for="(value,index) in data" :key="index">
                <tr>
                    <td>{{value.nombre}}</td>
                    <td>{{value.edad}}</td>
                    <td>
                        <router-link class="btn btn-secondary" :to="'/edit/'+value.id">Editar</router-link>
                        <button class="btn btn-danger" v-on:click="deleteData(value.id)">Eliminar</button>
                    </td>

                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import {api} from '../apis/apiUsers';
export default {
    name:'Users',
    data(){
        return{
            data:null
        };
    },
    mounted(){
        this.axios.get(api).then(res =>{
            if (res.data) {
                this.data = res.data;
            }
        });
    },
    methods:{
        deleteData (id) {
            if(id){
                this.axios.delete(`${api}/${id}`).then(res =>{
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