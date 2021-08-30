<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="fade")
      .titulo-principal__numero
        span 6
      h1 Programación neurolingüística (PNL) y motivacional

    .row.justify-content-center.align-items-center(data-aos="fade")
      .col-6.col-lg-6.mb-4.mb-lg-0.pe-0
        img(src='@/assets/curso/t6-01.svg')
      .col-lg.ps-2.ps-lg-0
        .tarjeta.tarjeta.color-secundario.p-5
          p Es un conjunto de técnicas que fueron desarrolladas para estudiar cómo nuestra mente se programa y cómo el lenguaje que resulta de esta programación puede afectar o incidir en nuestra labor diaria a todo nivel. Se ha utilizado de manera muy marcada en áreas o temas comerciales, porque brinda oportunidades que, junto con los programas motivacionales que tenga una empresa, pueden lograr que la fuerza de ventas sea superlativa. 
          p.mb-0 Las ventas son un estado de ánimo. El día que la fuerza de ventas se siente querida, importante, necesaria, valiosa, motivada, tendrá niveles de efectividad muy buenos. Por ello, las empresas deben destinar medios, no necesariamente económicos, para mantener su fuerza de ventas motivada, comprometida y enfocada al logro de los objetivos.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
