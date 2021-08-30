<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="fade")
      .titulo-principal__numero
        span 4
      h1 Retroalimentación y mejoramiento del proceso

    .bloque-texto-a.color-acento-contenido.p-4.mb-5(data-aos="fade")
      .row.align-items-center.justify-content-between
        .col-lg-3.mb-4.mb-lg-0
          img(src='@/assets/curso/t4-01.svg')
        .col-lg
          .bloque-texto-a__texto.px-4.py-5
            p Cuando se habla de retroalimentación en el proceso de venta, se hace alusión a la oportunidad que reciben las empresas de comunicarse con el cliente. Una vez se cierra el ciclo de venta, se inicia el proceso de retroalimentación con el cliente, cuyo objetivo es conocer el nivel de satisfacción con el producto o servicio ofrecido.

    p(data-aos="fade") Es una ventaja competitiva si se realiza adecuadamente en la empresa, debido a que permite obtener resultados de informes de ventas, análisis, presupuestos y cierre de brechas, con la finalidad de implementar una mejora continua en un proceso de venta, para obtener un resultado donde se reciben opiniones, sugerencias, quejas de productos, quejas de los servicios y la atención en la venta. 

    p.mb-5(data-aos="fade") 
      b Conozca los indicadores de la retroalimentación y mejoramiento del proceso de ventas.

    TabsA.color-acento-contenido(data-aos="fade")
      .tarjeta.color-secundario--claro.p-4(titulo=" Informes de venta mensual")
        h4 Informes de venta mensual
        p Los informes de venta mensual son un apoyo fundamental para los procesos de ventas, ya que permiten visualizar, a una fecha determinada del mes, cómo vamos con relación a la meta establecida a principios de mes. Con los datos que se tengan al día y con la información que se extrae de ellos, es posible redireccionar los esfuerzos, ajustar procesos y recomponer las marchas para el logro de los objetivos. 
        .row.justify-content-center
          .col-6
            img(src='@/assets/curso/t4-02.svg')

      .tarjeta.color-secundario--claro.p-4(titulo="Análisis venta mes vs presupuesto mes")
        h4 Análisis venta mes vs presupuesto mes
        p Los presupuestos se deben diseñar sobre los históricos de ventas que haya alcanzado la empresa. Una vez establecido este presupuesto, se debe distribuir entre la fuerza de ventas, para su cumplimiento, y al llevar un buen informe de ventas a tiempo real, se puede hacer el análisis de las ventas realizadas contra la meta establecida como presupuesto.
        .row.justify-content-center
          .col-6
            img(src='@/assets/curso/t4-03.svg')

      .tarjeta.color-secundario--claro.p-4(titulo="Cierre brechas de la ejecución del mes")
        h4 Cierre brechas de la ejecución del mes
        p Este punto es clave para la consolidación del grupo comercial y cómo funcionará a futuro. El cierre de brechas entre lo ejecutado y lo presupuestado debe hacerse de manera individual entre líder y asesor, donde se destaquen los puntos que deban ser corregidos, pero en un ambiente de construcción, más no de reproche, para asegurar que no se vaya a perder ese capital humano que se tiene ya dentro del grupo.
        .row.justify-content-center
          .col-6
            img(src='@/assets/curso/t4-04.svg')













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
