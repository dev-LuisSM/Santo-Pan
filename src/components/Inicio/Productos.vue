<template>
  <section class="productos" id="productos">
    <div>
      <h2>Nuestros productos</h2>
      <p>
        Puedes personalizar todos nuestros productos para que tu pastel de
        cumpleaños sea un extraordinario para tu día especial. Sea lo que sea lo
        que necesites, no dudes en contactar con nosotros ¡estaremos encantados
        de elaborar un producto a medida solo para ti! <br /><br />
        Elaboramos nuestros panes con ingredientes de primera calidad, porque lo
        primero es que tú disfrutes de todo el sabor. Nuestros rústicos son un
        claro ejemplo de nuestra pasión por la tradición. Un pan hecho a mano en
        horno de leña con ingredientes 100% naturales que conserva su receta
        original.
      </p>
    </div>

    <div class="cards">
      <div>
        <img src="../../assets/santo-pan/producto1.png" alt="Foto de Pastel" />
        <p>Pasteles</p>
        <span
          >Prueba nuestros pasteles, nuestro primer producto, además de que
          puedes crear cientas de variedades en nuestra web.</span
        >
      </div>
      <div>
        <img src="../../assets/santo-pan/producto2.png" alt="Foto de Pan" />
        <p>Pan</p>
        <span
          >Nuestro pan recién horneado es conocido por toda la ciudad, tenemos
          cientos de variedades y sabores.</span
        >
      </div>
      <div>
        <img src="../../assets/santo-pan/producto3.png" alt="Foto de Galletas" />
        <p>Galletas</p>
        <span
          >Prueba nuestras nuevas y crocantes galletas, únicas en su tipo, sin
          azúcar, elaboradas con una receta tradicional.</span
        >
      </div>
      <div>
        <img src="../../assets/santo-pan/producto4.png" alt="Foto de Muffin" />
        <p>Postres</p>
        <span
          >Tenemos distintos postrs para cientos de gustos, flanes, gelatinas,
          muffins, entre muchos otros productos más.</span
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Productos",
};
</script>

<style lang="scss">
.productos {
  padding: 2rem;
  .cards {
    margin-top: 2rem;
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    div {
      overflow: hidden;
      text-align: center;
      border-radius: 1rem;
      position: relative;
      width: 300px;
      margin: 0 2rem 2rem 2rem;
      img {
        width: 100%;
      }
      p {
        font-weight: 600;
      }
      span {
        font-size: smaller;
      }
    }
  }
}
</style>