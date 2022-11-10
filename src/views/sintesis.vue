<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .bg-sintesis.p-5
      .row.justify-content-center.mb-5
        .col-lg-3.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/1.png', alt='')
        .col-lg-9
          p 
            span.fst-italic Up to this point, we have been able to appreciate everything that has to do with getting a job. We invite you to review what was learnt.
            br
            br
            span(style='color: #777777') Hasta este punto, hemos podido apreciar todo lo que tiene que ver con el empleo. Lo invitamos a ver lo que se aprendió:

    .row.justify-content-center
      .col-lg-9.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="alt")
      .col-4
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

<style lang="sass">
.bg-sintesis
  background-image: url(../assets/curso/temas/bg-sintesis.svg)
  background-repeat: no-repeat
  background-position: start
</style>
