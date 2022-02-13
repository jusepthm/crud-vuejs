<template>
    <div> 
        <router-link to="/addreg">Agregar Datos</router-link>
        <table class="table">
            <thead>
                <tr>
                    <th>Fecha</th>
                    <th>Descripcion</th>
                    <th>Estado</th>
                    <th>Accion</th>
                </tr>
            </thead>
            <tbody v-for="(value,index) in data" :key="index">
                <tr>
                    <td>{{value.fecha}}</td>
                    <td>{{value.descripcion}}</td>
                    <td>{{value.estado}}</td>
                    <td>
                        <router-link class="btn btn-secondary" :to="'/editreg/'+value.id">Editar</router-link>
                        <button class="btn btn-danger" v-on:click="deleteData(value.id)">Eliminar</button>
                    </td>

                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import {apiReg} from '../apis/apiReg';
export default {
    name:'Registration',
    data(){
        return{
            data:null
        };
    },
    mounted(){
        this.axios.get(apiReg).then(res =>{
            if (res.data) {
                this.data = res.data;
            }
        });
    },
    methods:{
        deleteData (id) {
            if(id){
                this.axios.delete(`${apiReg}/${id}`).then(res =>{
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