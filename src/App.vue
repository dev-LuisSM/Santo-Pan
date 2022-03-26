<template>
  <header>
    <img src="./assets/santo-pan/logo-blanco.png" alt="Santo Pan Logo">
    <nav>
      <router-link to="/">Inicio</router-link>
      <router-link to="/">Sobre nosotros</router-link>
      <router-link to="/">Nuestros productos</router-link>
      <router-link to="/">Crear pastel</router-link>
      <router-link to="/">Contacto</router-link>
    </nav>
  </header>
  <router-view/>
</template>

<style lang="scss">
header {
  width: 100%;
  padding: 1rem;

  position: absolute;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: small;
  
  nav > a{
    padding: 0 1rem;

    color: white;
    text-decoration: none;
    cursor: pointer;
    transition: 0.3s;
    display: inline-block;
    &::after{
      content: '';
      width: 0px;
      height: 1px;
      display: block;
      background: rgb(255, 255, 255);
      transition: 300ms;
    }

    &:hover::after{
        width: 100%;
    }
  }
}
</style>
