<template >
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link class="nav-link" to="/">Usuarios</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/job">Trabajos</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/registration">Registro</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/client">Clientes</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>  
</template>
<script>
export default {
   name : 'MainHeader'
}
</script>
