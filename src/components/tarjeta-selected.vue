<template lang="pug">
.tarjeta-selected
  .row.justify-content-center.mb-5
    .col-6.col-xl-4
      .tarjeta.color-acento-contenido.p-4(
        :class="{selected : selected == 1}"
        @mouseover="mostrarIndicador = false"
        @click="selected = 1"
      )
        .row.justify-content-center
          .col-8
            img(src='@/assets/curso/t2-14.svg')
        h4.text-center Ciclo de venta

    .col-6.col-xl-4
      .tarjeta.color-secundario.p-4(
        :class="{selected : selected == 2}"
        @mouseover="mostrarIndicador = false"
        @click="selected = 2"
      )
        .indicador--click(v-if="mostrarIndicador")
        .row.justify-content-center
          .col-8
            img(src='@/assets/curso/t2-15.svg')
        h4.text-center Ciclo de compra

  .row.justify-content-center.mb-3
    .col-md-10
      .tarjeta.color-acento-contenido.p-5(v-if="selected == 1")
        p.mb-0 Este proceso está compuesto por una serie de pasos o etapas encaminadas y necesarias para lograr la venta de un producto, un bien o un servicio, desde el primer contacto con el cliente hasta la postventa. 

      .tarjeta.color-secundario.p-5(v-else-if="selected == 2")
        p En este proceso se debe tener en cuenta que el cliente tiene en sus manos este ciclo, el cual puede ser enmarcado en cuatro fases o pasos, que son:

        p.mb-0
          b Atención. 
          | Es cuando el cliente siente la necesidad o deseo de compra. 
          br
          b Interés. 
          | Se presenta cuando hace averiguaciones o investiga cómo satisfacerlas. 
          br
          b Deseo o decisión. 
          | Ocurre cuando, ya con la información conseguida y recopilada, ha formado un criterio propio y sabe qué desea. 
          br
          b Acción. 
          | Cuando ya el cliente pasa a comprar o adquirir lo que requiere. 
  p.text-center.text-red Click en cada una para mostrar información 
</template>

<script>
export default {
  name: 'TarjetaSelected',
  data: () => ({
    selected: 1,
    mostrarIndicador: true,
  }),
}
</script>

<style lang="sass" scoped></style>
