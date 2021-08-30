<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="fade")
      .titulo-principal__numero
        span 8
      h1 
        em E-commerce

    p(data-aos="fade") También conocido como comercio electrónico, es un medio o sistema de compra y venta de productos o servicios que se realiza exclusivamente a través de Internet. Por lo tanto, se refiere a las transacciones entre compradores y vendedores mediante una plataforma <em>online</em> que gestiona cobros y pagos de manera completamente electrónica.
    p.mb-5(data-aos="fade")
      b Conozca los modelos que se utilizan en la plataforma transaccional.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/5079y-YZe7A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-0(data-aos="fade") En la actualidad, el <em>e-commerce</em> ha ido evolucionando cada vez más, a razón que el entorno empresarial se torna más exigente con respecto a las necesidades de los clientes, logrando que las empresas deban estar a la vanguardia de la tecnología con el fin de brindar apoyo a sus estrategias comerciales.

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
