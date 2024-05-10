<template>
  <SideBar />
  <div class="page">
    <h1>Usuarios</h1>
    <p>En esta vista puede administrar a los usuarios que tienen acceso a la aplicación y editar su información.
    </p><br>
    <div class="options">
      <CustomInput :pholder="'Buscar por nombre'"/>
      <Button :mssg="'Nuevo'" :onClick="clork"/>
    </div>

    <div class="grid-container">
      <p class="grid-header">Nombre</p>
      <p class="grid-header">Rol</p>
        <div class="grid-item">Daniel Rayo</div>
        <div class="grid-item">doctor</div>


        <div class="grid-item">Sofia de la Rosa</div>
        <div class="grid-item">Doctor</div>

        <div class="grid-item">Ricardo Morales Sagastume</div>
        <div class="grid-item">Asistente</div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import '../assets/arrow-left-double-fill.svg'
import '../components/Button.vue'
import SideBar from'../components/SideBar.vue'
import Button from '../components/Button.vue'
import CustomInput from '../components/CustomInput.vue'

const clork = () => {
  console.log("Button pressed")
}

</script>

<style>

#app {
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  background-color: white;
  font-family: 'MotivaSansMedium'
}

.page {
  padding: 2rem;
  padding-top: 3rem;
}

.options{
  display: flex;
  width: 100%;
  justify-content: space-between;
}

h1,
p,
h2,
ul {
  color: black;
}

p {
  font-weight: lighter;
  font-size: small;
  color: var(--vt-c-dark-gray-1)
}


.grid-container {
  display: grid;
  grid-template-columns: auto auto;
  /* Two columns */
  color: var(--vt-c-dark-1);
  padding: 1rem;
}

.grid-header,
.grid-item {
  padding: 0.5rem;
  border-bottom: 0.2vh solid #ccc;
}

.grid-header {
  font-family: 'MotivaSansLighter';
  border-top: 0.2vh solid #ccc;
  font-weight: bold;
}

.grid-item :nth-child(even) {
  border-left: 1px solid #ccc;
}

.grid-item:nth-child(odd):hover + .grid-item,.grid-item:nth-child(odd):hover{
  background-color: var(--vt-c-light-yellow-1);
  cursor: pointer;
}
</style>