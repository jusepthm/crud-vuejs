<template>
  <form>
    <label for="name">Nombre</label>
    <input type="text" v-model="nombre" name="nombre" class="form-control" />
    <label for="name">Edad</label>
    <input type="text" v-model="edad" name="edad" class="form-control" />
    <button class="btn btn-primary my-2" v-on:click="saveData">Guardar Dato</button>
  </form>
</template>
<script>
import { api } from "../apis/apiUsers";
export default {
  name: "Edit",
  data() {
    return {
        nombre:null,
        edad:null,
        id:null
    };
  },
  mounted(){
      let {id} = this.$route.params;
      if(id){
          this.axios.get(`${api}/${id}`).then(res =>{
              if(res.data){
                  this.nombre = res.data.nombre,
                  this.edad = res.data.edad
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
                edad:this.edad
            }
            if (data) {
                this.axios.put(`${api}/${this.id}`,data).then(res =>{
                    if (res.data) {
                        this.$router.push('/');
                    }
                })
            }
        }
  }
};
</script>