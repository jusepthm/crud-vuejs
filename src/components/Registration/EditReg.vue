<template>
  <form>
    <label for="name">fecha</label>
    <input type="text" v-model="fecha" name="fecha" class="form-control" />
    <label for="name">descripcion</label>
    <input type="text" v-model="descripcion" name="descripcion" class="form-control" />
    <label for="name">estado</label>
    <input type="text" v-model="estado" name="estado" class="form-control" />
    <button class="btn btn-primary my-2" v-on:click="saveData">Guardar Dato</button>
  </form>
</template>
<script>
import { apiReg } from "../apis/apiReg";
export default {
  name: "EditReg",
  data() {
    return {
        fecha:null,
        descripcion:null,
        estado:null,
        id:null
    };
  },
  mounted(){
      let {id} = this.$route.params;
      if(id){
          this.axios.get(`${apiReg}/${id}`).then(res =>{
              if(res.data){
                  this.fecha = res.data.fecha,
                  this.descripcion = res.data.descripcion,
                  this.estado = res.data.estado,
                  this.id = res.data.id
              }
          })
      }

      },
    methods:{
        saveData(e){
            e.preventDefault();
            let data = {
                fecha:this.fecha,
                descripcion:this.descripcion,
                estado:this.estado
            }
            if (data) {
                this.axios.put(`${apiReg}/${this.id}`,data).then(res =>{
                    if (res.data) {
                        this.$router.push('/Registration');
                    }
                })
            }
        }
  }
};
</script>