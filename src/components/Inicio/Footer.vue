<template>
  <footer id="contacto">
    <svg viewBox="0 0 1440 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 64L120 58.7C240 53 480 43 720 48C960 53 1200 75 1320 85.3L1440 96V0H1320C1200 0 960 0 720 0C480 0 240 0 120 0H0V64Z"
        fill="white"
      />
    </svg>

    <div class="informacion">
      <div>
        <img src="../../assets/santo-pan/logo-blanco.png" alt="Logo bakery" />
      </div>
      <div>
        <p>Contacto</p>
        <p>
          Mejoramiento Urbano 48 <br />
          SAHOP Chacón
        </p>
        <br />
        <a
          href="https://api.whatsapp.com/send?phone=+527713185600"
          target="blank"
          >Teléfono: 771 318 5600</a
        >
        <br />
        <p>Horarios de atencion<br />8:00 am - 9:00 pm</p>
      </div>
      <div>
        <p>Mapa del sitio</p>
        <router-link to="/">Pastelero</router-link> <br />
        <router-link to="/">Sobre nosotros</router-link> <br />
        <router-link to="/">Nuestros productos</router-link> <br />
        <router-link to="/">Contacto</router-link>
      </div>
      <div>
        <p>Redes</p>
        <div>
          <a class="logos-redes" href="https://facebook.com" target="blank">
            <img
              src="../../assets/santo-pan/Facebook.svg"
              alt="Facebook logo"
            />
          </a>
          <a class="logos-redes" href="https://instagram.com" target="blank"
            ><img src="../../assets/santo-pan/Insta.svg" alt="Instagram logo"
          /></a>
        </div>
      </div>
    </div>
    <p class="me">
      <a class="logos-redes" href="https://github.com/dev-LuisSM" target="blank"
        >Developed with ♡. Luis Eduardo Silva Martín.</a
      >
    </p>
  </footer>
</template>

<script>
export default {
  name: "Contacto",
};
</script>

<style lang="scss">
footer {
  width: 100%;
  height: auto;
  background-color: #19110f;
  background-image: url(../../assets/santo-pan/Patron.svg);
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  svg {
    width: 100%;
  }

  .informacion {
    display: flex;
    width: 100%;

    > div {
      width: 25%;
      &:nth-of-type(1) {
        margin: 0 0 0 1rem;
      }
      &:nth-of-type(2),
      &:nth-of-type(3) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
      &:nth-of-type(4) div{
        display: flex;
        flex-direction: row;
        width: 100%;

      }
      a {
        color: #dfdfdf;
        text-decoration: none;
        &::after {
          content: "";
          width: 0px;
          height: 1px;
          display: block;
          background: #dfdfdf;
          transition: 300ms;
        }

        &:hover::after {
          width: 100%;
        }
      }
    }

    p {
      color: #dfdfdf;
      &:first-of-type {
        font-weight: 600;
        font-size: larger;
        color: #ececec;
        margin-bottom: 1rem;

        &::before {
          content: " ";
          width: 0;
          border-right: 5px solid transparent;
          border-left: 5px solid #cd6d4d;
          position: initial;
        }
      }
    }

    .logos-redes {
      margin-right: 1rem;
    }
  }

  .me {
    padding-top: 1rem;
    text-align: center;
    a {
      color: #696969;
      font-size: small;
      text-decoration: none;
    }
  }
}

@media screen and (max-width: 900px) {
    footer .informacion{
        flex-wrap: wrap;
        font-size: small;
        justify-content: space-evenly;
        div{
            width: 190px;
            padding: 1rem;
            &:nth-of-type(1){
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0;
                width: 100%;
            }
        }
    }
}
</style>