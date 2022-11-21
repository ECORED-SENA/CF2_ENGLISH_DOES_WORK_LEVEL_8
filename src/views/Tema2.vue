<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 #[em Linkers] (Conectores)
    .margin-n.bg-t2.p-5.mb-5
      .row.justify-content-center.mb-5
        .col-lg-3.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema2/1.png', alt='')
        .col-lg-9(data-aos="fade-left")
          .contenedor-traductor(style='background-color: #dddeff')
            .contenedor-traductor__eng
              p.fst-italic.mb-0 They are words used to connect similar elements in a sentence. There are different connectors in English that can be used for expressing thoughts in a better way. To be able to work with them wisely, the most important tip will be to learn their function. Smart use of linkers can omit the requirement of single sentences and help in connecting the sentence in a more logical way.
                br
                br
                |Here you will not only know the various kinds of sentence connectors, but will also get simple linker examples that will help you in understanding the meaning of connectors. So, let´s begin:
              .d-flex.justify-content-end
                Audio.color-secundario.mx-3.mb-0(
                  :audio="require('@/assets/curso/temas/audios/c/H27.wav')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )

              .contenedor-traductor__esp(:class="{ mostrar: dg1}")
                p Son palabras que se utilizan para conectar elementos similares en una oración. Hay diferentes conectores en inglés que pueden usarse para expresar pensamientos de una mejor manera. Para poder trabajar con ellos sabiamente, el consejo más importante será aprender su función. El uso inteligente de los enlaces puede omitir el requisito de oraciones individuales y ayudar a conectar la oración de una manera más lógica.
                  br
                  br
                  |Aquí no solo conocerá, sino que también obtendrá ejemplos simples de enlaces que lo ayudarán a comprender el significado de los conectores. Vamos a empezar:
              a.boton-traduccion(@click='dg1 = !dg1' style='background-color: #fed947; color: #12263F') Ver traducción
      TabsB.color-acento-botones.mb-5
        .py-4.py-md-5.px-5(titulo="Time" :icono="require('@/assets/curso/temas/tema2/2.svg')" style='background-color: #fff7da')
          .row
            .col-md-4.mb-4.mb-md-0
              img(src='@/assets/curso/temas/tema2/9.svg', alt='')
            .col-md-8
              h4 Time
              TarjetaAudio.bg-white.color-secundario.mb-3(
                texto="<span class=r--1>I get up at 9:00.</span> <span class= r--3>Then</span>, I get dressed. <span class= r--3>After</span>  that, I have breakfast. Next, I go to work. "
                :audio="require('@/assets/curso/temas/audios/c/H28.wav')"
              )
              .flex-wrap.d-flex.align-ites-center.justify-content-center
                div(style="background-color: #ff9fa3 ; border-radius: 5px ").mx-2.p-2.px-4.mb-3
                  h4.mb-0 Later
                div(style="background-color: #ff9fa3 ; border-radius: 5px ").mx-2.p-2.px-4.mb-3
                  h4.mb-0 After
                div(style="background-color: #ff9fa3 ; border-radius: 5px ").mx-2.p-2.px-4.mb-3
                  h4.mb-0 Before
                div(style="background-color: #ff9fa3 ; border-radius: 5px ").mx-2.p-2.px-4.mb-3
                  h4.mb-0 Then
                div(style="background-color: #ff9fa3 ; border-radius: 5px ").mx-2.p-2.px-4.mb-3
                  h4.mb-0 Next
                div(style="background-color: #ff9fa3 ; border-radius: 5px ").mx-2.p-2.px-4.mb-3
                  h4.mb-0 Soon
                div(style="background-color: #ff9fa3 ; border-radius: 5px ").mx-2.p-2.px-4.mb-3
                  h4.mb-0 Finally
        .py-4.py-md-5.px-5(titulo="Addition" :icono="require('@/assets/curso/temas/tema2/3.svg')" style='background-color: #fff7da')
          .row
            .col-md-4.mb-4.mb-md-0
              img(src='@/assets/curso/temas/tema2/10.svg', alt='')
            .col-md-8
              h4 Addition
              TarjetaAudio.bg-white.color-secundario.mb-3(
                texto="<span class= r--1>My sister Mary</span> is 20 <span class= r--3>and</span> my sister Jane is 25. <br><br>I like flying very much. My brother Jake likes flying, <span class= r--3>too</span>. So does my brother Jake."
                :audio="require('@/assets/curso/temas/audios/c/H29.wav')"
              )
              .flex-wrap.d-flex.align-ites-center.justify-content-center
                div(style="background-color: #ff9fa3 ; border-radius: 5px ").mx-2.p-2.px-4.mb-3
                  h4.mb-0 As well as 
                div(style="background-color: #ff9fa3 ; border-radius: 5px ").mx-2.p-2.px-4.mb-3
                  h4.mb-0 Further
                div(style="background-color: #ff9fa3 ; border-radius: 5px ").mx-2.p-2.px-4.mb-3
                  h4.mb-0 So
                div(style="background-color: #ff9fa3 ; border-radius: 5px ").mx-2.p-2.px-4.mb-3
                  h4.mb-0 And
                div(style="background-color: #ff9fa3 ; border-radius: 5px ").mx-2.p-2.px-4.mb-3
                  h4.mb-0 Too
                div(style="background-color: #ff9fa3 ; border-radius: 5px ").mx-2.p-2.px-4.mb-3
                  h4.mb-0 Furthermore
                div(style="background-color: #ff9fa3 ; border-radius: 5px ").mx-2.p-2.px-4.mb-3
                  h4.mb-0 Also
                
        .py-4.py-md-5.px-5(titulo="Contrast" :icono="require('@/assets/curso/temas/tema2/4.svg')" style='background-color: #fff7da')
          .row
            .col-md-4.mb-4.mb-md-0
              img(src='@/assets/curso/temas/tema2/11.svg', alt='')
            .col-md-8
              h4 Contrast
              TarjetaAudio.bg-white.color-secundario.mb-3(
                texto="<span class= r--1>Our teacher</span> is sometimes very strict with us, <span class= r--3>but</span> she is very patient to explain all the new things we learn. <br><br> <span class= r--3>Although</span> a flat is easier to clean, I prefer living in a big house. "
                :audio="require('@/assets/curso/temas/audios/tema2/c3.mp3')"
              )
              .flex-wrap.d-flex.align-ites-center.justify-content-center
                div(style="background-color: #ff9fa3 ; border-radius: 5px ").mx-2.p-2.px-4.mb-3 
                  h4.mb-0 But
                div(style="background-color: #ff9fa3 ; border-radius: 5px ").mx-2.p-2.px-4.mb-3 
                  h4.mb-0 However
                div(style="background-color: #ff9fa3 ; border-radius: 5px ").mx-2.p-2.px-4.mb-3 
                  h4.mb-0 On the other hand
                div(style="background-color: #ff9fa3 ; border-radius: 5px ").mx-2.p-2.px-4.mb-3 
                  h4.mb-0 Otherwise
                div(style="background-color: #ff9fa3 ; border-radius: 5px ").mx-2.p-2.px-4.mb-3 
                  h4.mb-0 Unlike
                div(style="background-color: #ff9fa3 ; border-radius: 5px ").mx-2.p-2.px-4.mb-3 
                  h4.mb-0 Conversely 
                div(style="background-color: #ff9fa3 ; border-radius: 5px ").mx-2.p-2.px-4.mb-3 
                  h4.mb-0 Altthough
        .py-4.py-md-5.px-5(titulo="Order of elements" :icono="require('@/assets/curso/temas/tema2/5.svg')" style='background-color: #fff7da')
          .row
            .col-md-4.mb-4.mb-md-0
              img(src='@/assets/curso/temas/tema2/12.svg', alt='')
            .col-md-8
              h4 Order of elements
              TarjetaAudio.bg-white.color-secundario.mb-3(
                texto="<span class= r--1>I think they</span> have been very unfair to her. <br><span class= r--3>Firstly</span>, because I consider her the best typist in the world. <br><br><span class= r--3>Secondly, because she has worked very hard to get the job.</span> "
                :audio="require('@/assets/curso/temas/audios/c/H30.wav')"
              )
              .flex-wrap.d-flex.align-ites-center.justify-content-center
                div(style="background-color: #ff9fa3 ; border-radius: 5px ").mx-2.p-2.px-4.mb-3
                  h4.mb-0 First of all
                div(style="background-color: #ff9fa3 ; border-radius: 5px ").mx-2.p-2.px-4.mb-3
                  h4.mb-0 Firstly 
                div(style="background-color: #ff9fa3 ; border-radius: 5px ").mx-2.p-2.px-4.mb-3
                  h4.mb-0 Secondly
                div(style="background-color: #ff9fa3 ; border-radius: 5px ").mx-2.p-2.px-4.mb-3
                  h4.mb-0 Then
                div(style="background-color: #ff9fa3 ; border-radius: 5px ").mx-2.p-2.px-4.mb-3
                  h4.mb-0 After that
                div(style="background-color: #ff9fa3 ; border-radius: 5px ").mx-2.p-2.px-4.mb-3
                  h4.mb-0 The next stage
                div(style="background-color: #ff9fa3 ; border-radius: 5px ").mx-2.p-2.px-4.mb-3
                  h4.mb-0 lastly
        .py-4.py-md-5.px-5(titulo="Cause" :icono="require('@/assets/curso/temas/tema2/6.svg')" style='background-color: #fff7da')
          .row
            .col-md-4.mb-4.mb-md-0
              img(src='@/assets/curso/temas/tema2/13.svg', alt='')
            .col-md-8
              h4 Cause
              TarjetaAudio.bg-white.color-secundario.mb-3(
                texto="<span class= r--1>I didn’t tell</span> you this <span class= r--3>because</span> I didn’t know about it yet. "
                :audio="require('@/assets/curso/temas/audios/tema2/c5.mp3')"
              )
              .flex-wrap.d-flex.align-ites-center.justify-content-center
                div(style="background-color: #ff9fa3 ; border-radius: 5px ").mx-2.p-2.px-4.mb-3
                  h4.mb-0 Because
                div(style="background-color: #ff9fa3 ; border-radius: 5px ").mx-2.p-2.px-4.mb-3
                  h4.mb-0 As
                div(style="background-color: #ff9fa3 ; border-radius: 5px ").mx-2.p-2.px-4.mb-3
                  h4.mb-0 Seeing that
                div(style="background-color: #ff9fa3 ; border-radius: 5px ").mx-2.p-2.px-4.mb-3
                  h4.mb-0 Since
                div(style="background-color: #ff9fa3 ; border-radius: 5px ").mx-2.p-2.px-4.mb-3
                  h4.mb-0 Due to
                div(style="background-color: #ff9fa3 ; border-radius: 5px ").mx-2.p-2.px-4.mb-3
                  h4.mb-0 On account of
                div(style="background-color: #ff9fa3 ; border-radius: 5px ").mx-2.p-2.px-4.mb-3
                  h4.mb-0 Owing to
        .py-4.py-md-5.px-5(titulo="Giving examples" :icono="require('@/assets/curso/temas/tema2/7.svg')" style='background-color: #fff7da')
          .row
            .col-md-4.mb-4.mb-md-0
              img(src='@/assets/curso/temas/tema2/14.svg', alt='')
            .col-md-8
              h4 Giving examples
              TarjetaAudio.bg-white.color-secundario.mb-3(
                texto="<span class= r--1>There are different </span>kinds of films, <span class= r--3>for example</span>, horror films, westerns, romantic films…<br><br>I always dress in a causal way, but sometimes I have to dress smartly, <span class= r--3>for instance</span>, when I have an important meeting at the office. "
                :audio="require('@/assets/curso/temas/audios/tema2/c6.mp3')"
              )
              .flex-wrap.d-flex.align-ites-center.justify-content-center
                div(style="background-color: #ff9fa3 ; border-radius: 5px ").mx-2.p-2.px-4.mb-3
                  h4.mb-0 For example
                div(style="background-color: #ff9fa3 ; border-radius: 5px ").mx-2.p-2.px-4.mb-3
                  h4.mb-0 For instance
                div(style="background-color: #ff9fa3 ; border-radius: 5px ").mx-2.p-2.px-4.mb-3
                  h4.mb-0 Such as
                div(style="background-color: #ff9fa3 ; border-radius: 5px ").mx-2.p-2.px-4.mb-3
                  h4.mb-0 In this case
                div(style="background-color: #ff9fa3 ; border-radius: 5px ").mx-2.p-2.px-4.mb-3
                  h4.mb-0 For one thing
                div(style="background-color: #ff9fa3 ; border-radius: 5px ").mx-2.p-2.px-4.mb-3
                  h4.mb-0 In others words
                div(style="background-color: #ff9fa3 ; border-radius: 5px ").mx-2.p-2.px-4.mb-3
                  h4.mb-0 Illustared by
        .py-4.py-md-5.px-5(titulo="Consequence" :icono="require('@/assets/curso/temas/tema2/8.svg')" style='background-color: #fff7da')
          .row
            .col-md-4.mb-4.mb-md-0
              img(src='@/assets/curso/temas/tema2/15.svg', alt='')
            .col-md-8
              h4 Consequence
              TarjetaAudio.bg-white.color-secundario.mb-3(
                texto="<span class= r--1>I enjoy going</span> shopping when I finish work, and in this area there are hardly any shops, <span class= r--3>so</span> I have bought a flat in the centre of town."
                :audio="require('@/assets/curso/temas/audios/c/H31.wav')"
              )
              .flex-wrap.d-flex.align-ites-center.justify-content-center
                div(style="background-color: #ff9fa3 ; border-radius: 5px ").mx-2.p-2.px-4.mb-3
                  h4.mb-0 So 
                div(style="background-color: #ff9fa3 ; border-radius: 5px ").mx-2.p-2.px-4.mb-3
                  h4.mb-0 Thus
                div(style="background-color: #ff9fa3 ; border-radius: 5px ").mx-2.p-2.px-4.mb-3
                  h4.mb-0 Consequently
                div(style="background-color: #ff9fa3 ; border-radius: 5px ").mx-2.p-2.px-4.mb-3
                  h4.mb-0 As a result
                div(style="background-color: #ff9fa3 ; border-radius: 5px ").mx-2.p-2.px-4.mb-3
                  h4.mb-0 That’s why
                div(style="background-color: #ff9fa3 ; border-radius: 5px ").mx-2.p-2.px-4.mb-3
                  h4.mb-0 Therfore
                div(style="background-color: #ff9fa3 ; border-radius: 5px ").mx-2.p-2.px-4.mb-3
                  h4.mb-0 By
    .row.justify-content-center.mb-5
      .col-lg-2.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema2/16.svg', alt='')
      .col-lg-10(data-aos="fade-left")
        .contenedor-traductor(style='background-color: #dddeff')
            .contenedor-traductor__eng
              .d-flex.justify-content-end
                p.fst-italic.mb-0 After knowing what the linkers are and having quoted examples, let’s listen to the conversation and see the use of some of them:
                Audio.color-secundario.mx-3.mb-0(
                  :audio="require('@/assets/curso/temas/audios/c/H32.wav')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )

              .contenedor-traductor__esp(:class="{ mostrar: dg1}")
                p Luego de saber qué son los linkers y haber citado ejemplos, escuchemos la conversación y veamos el uso de algunos de ellos:
              a.boton-traduccion(@click='dg1 = !dg1' style='background-color: #fed947; color: #12263F') Ver traducción
    Dialogo.color-primario(:dialogo="dialogo")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) Excercise adverbs of degree
      template(#descripcion-actividad) Arrastra y suelta el cada una de las palabras en el orden correcto.
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    dg1: true,
    dialogo: {
      personajes: [
        {
          nombre: 'Diana',
          img: require('@/assets/curso/temas/tema2/diana.svg'),
        },
        {
          nombre: 'Carla',
          img: require('@/assets/curso/temas/tema2/carla.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Diana',
          textoIng: 'I cannot believe we are going to Colombia!',
          textoEsp: '',
          audio: require('@/assets/curso/temas/audios/c/H34B.wav'),
        },
        {
          personaje: 'Carla',
          textoIng: 'That&#x2019s *** we must pick him up.',
          textoEsp: '',
          audio: require('@/assets/curso/temas/audios/c/H33.wav'),
          palabra: 'because',
        },
        {
          personaje: 'Diana',
          textoIng: 'We must *** pick him up, but also see our families.',
          textoEsp: '',
          audio: require('@/assets/curso/temas/audios/c/H34.wav'),
          palabra: 'not only ',
        },
        {
          personaje: 'Carla',
          textoIng: '*** , Martin does not want to go with us.',
          textoEsp: '',
          audio: require('@/assets/curso/temas/audios/c/H35.wav'),
          palabra: 'On the other hand',
        },
      ],
    },
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
.bg-t2
  background-image: url(../assets/curso/temas/tema2/bg-t2-1.svg)
  background-repeat: no-repeat
  background-position: start
  background-size: cover
</style>
