<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .margin-n.p-5.bg-intro
      .row.justify-content-center.mb-5
        .col-lg-8.mb-lg-0.mb-3(data-aos="fade-right")
          .contenedor-traductor(style='background-color: #dddeff').mb-5
              .contenedor-traductor__eng
                p.fst-italic To carry out a good reading comprehension, it is essential to know the types of texts and the grammar that each one contains; for this task, it will be important to know the connectors, some vocabulary, and, of course, the formal and informal questions. We invite you to take a detailed tour of this component and to take careful note of what is not familiar to you.
              .contenedor-traductor__esp(:class="{ mostrar: dg1}")
                p Con el fin de realizar una buena comprensión de lectura, es indispensable conocer los tipos de textos y la gramática que cada uno contiene; para esta tarea, será importante conocer los conectores, algo de vocabulario y, por supuesto, las preguntas formales e informales. Lo invitamos a que realice un recorrido detenido por este componente y a que tome atenta nota de aquello que no le es familiar.
              a.boton-traduccion(@click='dg1 = !dg1' style='background-color: #fed947; color: #12263F') Ver traducción
        .col-lg-4.col-6(data-aos="fade-left"): img(src='@/assets/curso/temas/intro/1.png', alt='')
      
        figure
          .video.contenedor-corazon
            iframe(width="560" height="315" src="https://www.youtube.com/embed/O4QXG_MsZQs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    dg1: true,
  }),
}
</script>

<style lang="sass">
.bg-intro
  background-image: url(../assets/curso/portada/bg-intro.svg)
  background-repeat: no-repeat
  background-position: start
</style>
