<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="fade-up")
      .titulo-principal__numero
        span 7
      h1 Mercadeo o ventas digitales

    .row.justify-content-center.align-items-center.mb-5.mb-lg-0(data-aos="fade-up")
      .col-md-6
        p Dado nuestro contexto global en un mundo cada vez más tecnológico, las ventas digitales son la respuesta a este tipo de nuevos clientes, que son más demandantes, más sofisticados y difíciles de complacer. Son la nueva forma como las empresas desarrollan nuevos negocios, enfocándose en cómo llegar al cliente, usuario o consumidor, por medio de canales digitales, medios online, redes sociales y estrategias en Internet. 
      .col-md
        img(src='@/assets/curso/t7-01.svg')

    .row.justify-content-center.align-items-center.flex-row-reverse(data-aos="fade-up")
      .col-md-6.mb-4.mb-lg-0
        p El uso empresarial de las ventas digitales se ha desplazado de un intercambio electrónico de información a una amplia plataforma para aplicaciones empresariales, permitiendo al progreso de un mercado más grande y competitivo, mediante aplicaciones desarrolladas en una interfaz web que permiten la interacción con el usuario de una manera eficaz y oportuna.
      
      .col-md
        img(src='@/assets/curso/t7-02.svg')  
      













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
