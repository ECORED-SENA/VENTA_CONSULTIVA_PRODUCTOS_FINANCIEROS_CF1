<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="fade-up")
      .titulo-principal__numero
        span 3
      h1 Ejecución y cierre del proceso de venta

    .float-layout-container.mb-5(data-aos="fade-up")
      img.img-text.ms-3.mb-3(src='@/assets/curso/t3-01.svg')
      p La ejecución del proceso de venta es toda acción que se desarrolle durante el proceso de ventas para lograr que culmine con un cierre exitoso. 
      p Se llama proceso de ventas, desde la perspectiva de Academia de Consultores (2018), a un conjunto de etapas o fases por las que pasa una empresa, desde que inicia sus esfuerzos de marketing hasta la consecución de una venta. 
      p Se trata de una secuencia de pasos a seguir, con la finalidad de conseguir el objetivo del negocio. Evidentemente, cada empresa tendrá su propio esquema, en función de sus distintas líneas de negocio, productos y servicios, que tratará de optimizar en todo momento para lograr mayores beneficios. El proceso de ventas debe estar claramente definido por su director comercial, para mantener una homogeneidad en el proceso, pero también para poder formularlo y mejorarlo de forma estratégica. Algunos factores que es importante analizar a la hora de establecerlo serán:

    .cajon.color-acento-contenido.p-5.mb-5(data-aos="fade-up")
      ul.lista-ul--color.mb-0
        li 
          i.fas.fa-check
          p.mb-0
            b Presupuesto disponible: 
            | ¿se tiene dinero para publicidad? ¿Muestras gratis? ¿Demostraciones?
        li 
          i.fas.fa-check
          p.mb-0
            b Equipo de ejecución: 
            | ¿se cuenta con un equipo comercial?
        li 
          i.fas.fa-check
          p.mb-0
            b Infraestructura: 
            | ¿se cuenta con tienda online, almacén, logística?
        li 
          i.fas.fa-check
          p.mb-0
            b Tipo de ventas: 
            | ¿al por menor o al por mayor, a profesionales o a particulares?
        li 
          i.fas.fa-check
          p.mb-0
            b Canal de distribución: 
            | ¿online, tiendas físicas propias, otros distribuidores?
        li 
          i.fas.fa-check
          p.mb-0
            b Tipo de producto: 
            | ¿físico o digital? ¿Perteneciente a qué sector (belleza, tecnología, deporte, textil…)?
        li 
          i.fas.fa-check
          p.mb-0
            b Precio del producto: 
            | cuanto mayor sea, la toma de decisión de la compra por parte del consumidor tardará más y el proceso de venta deberá ser más largo.
        li 
          i.fas.fa-check
          p.mb-0
            b Posicionamiento del producto: 
            | ¿es novedoso? ¿Es único? ¿Es la opción más barata del mercado?
        li.mb-0
          i.fas.fa-check
          p.mb-0
            b Buyer personas: 
            | ¿qué características tienen? ¿Es una única persona o un conjunto de ellas (equipo de trabajo de una empresa, familia…)?

    p.mb-5(data-aos="fade-up") Cada empresa debe definir cuál es su modus operandi en función de su realidad, respecto a los factores anteriormente expuestos u otros que pudieran interferir.  

    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-md-10
        .tarjeta.gradiente.p-5
          .row.justify-content-center.align-items-center
            .col-6.col-md-2.mb-4.mb-md-0
              img(src='@/assets/curso/t2-13.svg')
            .col-md.text-white.mb-4.mb-md-0
              h4 La Venta estratégica
              p.mb-0 Se invita al aprendiz a consultar el Blog de marketing estratégico, ventas, en el material complementario.

            .col-auto
              a.boton.color-acento-botones.me-3(href="https://academiadeconsultores.com/proceso-de-ventas/" target="_blank")
                span Ver blog
                i.fas.fa-blog

    .row.justify-content-center(data-aos="fade-up")
      .col-md-8
        img(src='@/assets/curso/t3-02.jpg')






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
