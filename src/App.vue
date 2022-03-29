<template>
  <header>
    <div>
      <img src="./assets/santo-pan/logo-blanco.png" alt="Santo Pan Logo" />
      <font-awesome-icon @click="$store.dispatch('toggleNav')" icon="bars" />
    </div>
    <nav>
      <router-link to="/">Inicio</router-link>
      <router-link to="/">Sobre nosotros</router-link>
      <router-link to="/">Nuestros productos</router-link>
      <router-link to="/">Crear pastel</router-link>
      <router-link to="/">Contacto</router-link>
    </nav>
  </header>
  <router-view />
</template>

<style lang="scss" scoped>
header {
  width: 100%;
  padding: 1rem 2rem;

  position: absolute;

  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: small;

  nav {
    a {
      padding: 0 1rem;

      color: #d1d1d1;
      text-decoration: none;
      cursor: pointer;
      transition: 0.3s;
      display: inline-block;
      &::after {
        content: "";
        width: 0px;
        height: 1.1px;
        display: block;
        background: #d1d1d1;
        transition: 300ms;
      }

      &:hover::after {
        width: 100%;
      }
    }
  }
  .fa-bars{
    display: none;
  }
}

@media screen and (max-width: 900px) {
  header {
    div{
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
    nav {
      display: flex;
      flex-direction: column;

      width: 100%;
      align-items: center;

      align-items: flex-end;
      
      transform: translateX(50%);
      transition: all 0.3s;
      a{
        padding: 0;
      }
    }

    .fa-bars{
      display: block;
      color: #acacac;
      font-size: x-large;
    }
  }
}
</style>
