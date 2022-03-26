<template>
  <section class="nosotros" id="nosotros">
    <h2>Somos Santo Pan</h2>
    <article>
      <div></div>
      <div>
        <h3>Dónde inició todo</h3>
        <p>
          Nuestra historia inicia con <b>Don Roberto</b> quién inicialmente
          creaba los más simples y maravillosos panes para su familia y amigos.
          Aquí es donde su esposa <b>Doña Margarita</b> decidió alentarlo para
          emprender una panadería y pastelería, única en su pueblo. Después de
          tanta insistencia, en 1905, Santo Pan nació como un negocio local y
          familiar buscando llegar cada vez más legos con su único sabor.
        </p>
        <h3>En la actualidad</h3>
        <p>
          Con el tiempo y gracias al excelente servicio que siempre brindaron,
          expandir el negocio por toda la ciudad (e inclusive en todo el estado
          fue posible). Actualmente hacemos, decoramos y vendemos más de 200
          pasteles al día, haciendo llegar nuestro sabor único e inigualable
          hasta tu paladar.
        </p>
        <br />
        <p>
          Desde entonces, nos encargamos de ofrecerte el mejor sabor en cada
          bocado, para preservarlo junto a los momentos más especiales de tu
          vida.
        </p>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: "Nosotros",
};
</script>

<style lang="scss">
.nosotros {
  width: 100%;
  padding: 2rem;

  article {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    height: fit-content;

    div {
      &:nth-child(1) {
        background: url("../../assets/santo-pan/pasteles.jpg");
        width: 30%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      }
      &:nth-child(2) {
        width: 70%;
        padding-left: 3rem;
      }
    }
  }
}

@media screen and (max-width: 900px) {
  .nosotros article {
    flex-direction: column-reverse;
    div {
      &:nth-child(1) {
        margin: 1rem 0;
        width: 100%;
        height: 30vh;
      }
      &:nth-child(2) {
        width: 100%;
        padding: 0;
      }
    }
  }
}
</style>