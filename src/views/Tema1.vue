<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="fade-up")
      .titulo-principal__numero
        span 1
      h1 Introducción a la venta consultiva

    .float-layout-container(data-aos="fade-up")
      img.img-text.ms-3.mb-3(src='@/assets/curso/t1-01.svg')
      p En el mundo actual, es necesario que las entidades financieras cuenten con colaboradores altamente entrenados y comprometidos con las metas de ventas de la organización. Esto se debe a que estas entidades deben enfrentar la alta y compleja demanda de sus clientes, cada vez más especializados o más conocedores de lo que requieren, lo que los hace mucho más difíciles de satisfacer.  Dado lo anterior, para las organizaciones y quienes las conforman, se hace necesario desarrollar nuevas habilidades comerciales, enfocándose en el proceso de venta consultiva, para disminuir las brechas que separan de un cierre de venta exitoso. 

    Separador(data-aos="fade-up")

    #1-1.titulo-segundo(data-aos="fade-up")
      h2 1.1 Tipos de ventas

    p(data-aos="fade-up") Existen muchos tipos de ventas en el mercado mundial y varios modelos para comercializar productos, como son las llamadas telefónicas, ventas al por mayor, ventas al detal o por menor, ventas por catálogo y ventas personales. Se puede definir que, en esencia, hay dos formas de venta: 
      b la tradicional y la consultiva. 
    p(data-aos="fade-up") Ambas son válidas y diametralmente opuestas. La tradicional basa su fortaleza de venta en el producto ofrecido, mientras que la consultiva hace énfasis en el vendedor más como un asesor o consultor.
    p(data-aos="fade-up") Es conveniente adoptar diferentes tipos de ventas consultivas para tener elementos de juicio y poder realizar una venta efectiva. 
    p(data-aos="fade-up")
      b A continuación, se estudia cada uno de ellos:

    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-md-8
        figure
          img.borde-verde(src='@/assets/curso/t1-02.svg')

    Separador(data-aos="fade-up")

    #1-2.titulo-segundo(data-aos="fade-up")
      h2 1.2 Estado venta consultiva

    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-md-8
        figure
          img.borde-verde(src='@/assets/curso/t1-03.jpg')

    p.mb-5(data-aos="fade-up") La venta consultiva es el tipo de venta en que el asesor, como su nombre lo indica, consulta, ausculta, indaga, averigua sobre los gustos y necesidades del cliente o consumidor para poder darle cumplimento y satisfacer sus necesidades. Al lograr esto, se consigue el objetivo que debe primar en las instituciones: el gana-gana. Gana el cliente, porque satisface sus necesidades, se siente satisfecho, y gana la institución, porque logra fidelizar y mantener a su cliente o consumidor.   

    .row.justify-content-center(data-aos="fade-up")
      .col-8
        .row.justify-content-center.align-items-center.banner-row
          .col-6.col-md-4.mb-4.mb-md-0
            img.borde-verde(src='@/assets/curso/t1-04.svg')
          .col-md.banner-row__texto
            h3.mb-0 
              span El cliente debe ser el fin de toda la negociación comercial, 
              span.text-300 sea de manera directa, tradicional, virtual o cualquiera sea la forma en que se realice.
        



</template>

<script>
export default {
  name: 'Tema1',
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
