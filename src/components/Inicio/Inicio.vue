<template>
  <section class="landing" id="inicio">
    <p>Tu pastel perfecto está<br />a un clic de distancia</p>
    <p>Prepara el pastel que más te gusta con nuestro nuevo menú interactivo</p>
    <router-link to="/">
      <button>¡Hagamos magia!</button>
    </router-link>
  </section>
</template>

<script>
export default {
  name: "Index",
};
</script>

<style lang="scss">
.landing {
  background-image: url("../../assets/santo-pan/background.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;

  width: 100%;
  height: 100vh;

  padding-right: 2rem;

  p {
    &:first-of-type {
      font-size: xxx-large;
      font-weight: 600;
    }
    margin-bottom: 1rem;
  }

  color: white;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  text-align: end;
}

h2 {
  padding-bottom: 2rem;
  &::before {
    content: " ";
    width: 0;
    border-right: 5px solid transparent;
    border-left: 5px solid #cb6d4d;
    position: initial;
  }
}

h3 {
  padding: 0.5rem 0;
  &::after {
    content: "";
    display: block;
    width: 32px;
    padding-top: 3px;
    border-bottom: 2px solid #f1c85e;
  }
}

button {
  padding: 0.5rem 2rem;

  border: 2px solid white;
  border-radius: 88px;

  background-color: #ffffff00;

  font-family: "Poppins";
  color: white;

  transition: 0.3s;

  &:hover {
    padding: 0.5rem 2rem;

    border: none;
    border-radius: 88px;

    color: black;
    background-color: white;

    border: 2px solid transparent;
  }
}

@media screen and (max-width: 900px) {
  .landing {
    p {
      padding: 0 1rem;
      font-size: small;
      &:first-of-type {
        font-size: x-large;
      }
    }
  }
}
</style>