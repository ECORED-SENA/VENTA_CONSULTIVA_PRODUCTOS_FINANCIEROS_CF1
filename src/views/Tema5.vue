<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="fade")
      .titulo-principal__numero
        span 5
      h1 Marco legal

    .bloque-texto-a.color-acento-contenido.p-4.mb-5(data-aos="fade")
      .row.align-items-center.justify-content-between
        .col-lg-3.mb-4.mb-lg-0
          img(src='@/assets/curso/t5-01.svg')
        .col-lg
          .bloque-texto-a__texto.px-4.py-5
            p Es un marco normativo que jurídicamente permite la protección del derecho a la seguridad e indemnidad de los consumidores, sin perjuicio de los demás que les reconozcan leyes especiales; está establecido en la Constitución Política de Colombia y en el Estatuto del Consumidor. Se establece para este efecto el Código de Comercio, el cual se puede encontrar para su utilización en el siguiente documento PDF.

    .row.justify-content-center(data-aos="fade")
      .col-xl-10
        .tarjeta.gradiente.px-5.py-4
          .row.justify-content-center.align-items-center
            .col-6.col-md-2.mb-4.mb-md-0
              img(src='@/assets/curso/t2-13.svg')
            .col-md.text-white.mb-4.mb-md-0
              h4 Marco legal
              p.mb-0 Decreto No. 410 27 de marzo de 1971

            .col-auto
              a.boton.color-acento-botones.me-3(:href="obtenerLink('/downloads/marco-legal.pdf')" target="_blank" type="application/pdf")
                span Descargar
                i.fas.fa-file-download











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
