<template>
  <form>
    <label for="name">tipo de Trabajo</label>
    <input type="text" v-model="tipoTrabajo" name="tipoTrabajo" class="form-control" />
    <label for="name">precio</label>
    <input type="text" v-model="precio" name="precio" class="form-control" />
    <button class="btn btn-primary my-2" v-on:click="saveData">Guardar Dato</button>
  </form>
</template>
<script>
import { apiJob } from "../apis/apiJob";
export default {
  name: "EditJob",
  data() {
    return {
        tipoTrabajo:null,
        precio:null,
        id:null
    };
  },
  mounted(){
      let {id} = this.$route.params;
      if(id){
          this.axios.get(`${apiJob}/${id}`).then(res =>{
              if(res.data){
                  this.tipoTrabajo = res.data.tipoTrabajo,
                  this.precio = res.data.precio
                  this.id = res.data.id
              }
          })
      }

      },
    methods:{
        saveData(e){
            e.preventDefault();
            let data = {
                tipoTrabajo:this.tipoTrabajo,
                precio:this.precio
            }
            if (data) {
                this.axios.put(`${apiJob}/${this.id}`,data).then(res =>{
                    if (res.data) {
                        this.$router.push('/Job');
                    }
                })
            }
        }
  }
};
</script>