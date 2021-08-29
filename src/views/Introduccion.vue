<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .float-layout-container.mb-5(data-aos="fade-up")
      img.img-text.ms-3.mb-3(src='@/assets/curso/intro-01.svg')
      p El programa de venta consultiva busca formar asesores integrales, quienes, basados en esta metodología, puedan ser más competitivos en un mundo altamente tecnológico y enfocado a los negocios virtuales. Es necesario brindar un enfoque diferencial entre el tipo de venta tradicional y la venta consultiva para poder enfocarse en un tipo de venta de productos de manera digital y hacer énfasis en el e-commerce.
      p Para la elaboración de este componente, se abordaron varios autores conocidos en venta consultiva de productos financieros, de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido de que el conocimiento es social y, por lo tanto, es para ser usado por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos de la venta de productos financieros.



</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
