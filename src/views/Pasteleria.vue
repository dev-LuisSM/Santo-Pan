<template>
  <div class="home">
    <Index/>
    <Nosotros/>
    <Productos/>
    <Contacto/>
  </div>
</template>

<script>

import Index from '@/components/Inicio/Inicio.vue'
import Nosotros from '@/components/Inicio/Nosotros.vue'
import Productos from '@/components/Inicio/Productos.vue'
import Contacto from '@/components/Inicio/Footer.vue'

export default {
  name: 'InicioPasteles',
  components: {
    Index,
    Nosotros,
    Productos,
    Contacto
  }
}
</script>
