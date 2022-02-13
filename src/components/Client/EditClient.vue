<template>
  <form>
    <label for="name">Nombre</label>
    <input type="text" v-model="nombre" name="nombre" class="form-control" />
    <label for="name">direccion</label>
    <input type="text" v-model="direccion" name="direccion" class="form-control" />
    <button class="btn btn-primary my-2" v-on:click="saveData">Guardar Dato</button>
  </form>
</template>
<script>
import { apiClient } from "../apis/apiClient";
export default {
  name: "EditClient",
  data() {
    return {
        nombre:null,
        direccion:null,
        id:null
    };
  },
  mounted(){
      let {id} = this.$route.params;
      if(id){
          this.axios.get(`${apiClient}/${id}`).then(res =>{
              if(res.data){
                  this.nombre = res.data.nombre,
                  this.direccion = res.data.direccion
                  this.id = res.data.id
              }
          })
      }

      },
    methods:{
        saveData(e){
            e.preventDefault();
            let data = {
                nombre:this.nombre,
                cliente:this.cliente
            }
            if (data) {
                this.axios.put(`${apiClient}/${this.id}`,data).then(res =>{
                    if (res.data) {
                        this.$router.push('/Client');
                    }
                })
            }
        }
  }
};
</script>