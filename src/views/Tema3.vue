<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 #[em Let’s talk about job] (Hablemos de empleo)
    .bg-t3.margin-n.p-5.mb-5
      .row.justify-content-center.mb-5
        .col-lg-4.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema3/1.svg', alt='')
        .col-lg-8(data-aos="fade-left") 
          .contenedor-traductor(style='background-color: #dddeff')
              .contenedor-traductor__eng
                p.fst-italic.mb-0 Having a job makes part of the adult's world as some people calls it. In some countries, we can start working before 18 years old; in some others, after 21 years old. Some people were born in a family that runs a business and some others just work in farms growing fruits and vegetables or taking care of the animals. In Colombia, the salaries are not enough, in some cases, to run a family, so more than one member must join the labour world.
                  br
                  br
                  |After knowing how important having a job is, you are invited, as a learner, to see this video class and learn the vocabulary needed when talking about a job. 
                .d-flex.justify-content-end
                  Audio.color-secundario.mx-3.mb-0(
                    :audio="require('@/assets/curso/temas/audios/c/H36.wav')"
                    @audio-hover="mostrarIndicadorAudio = false"
                  )

                .contenedor-traductor__esp(:class="{ mostrar: dg1}")
                  p Tener un trabajo forma parte del mundo de los adultos, como lo llaman algunos. En algunos países, podemos empezar a trabajar antes de los 18 años; y en otros, después de los 21 años. Algunas personas nacieron en una familia que tiene un negocio y otras simplemente trabajan en granjas, cultivando frutas y verduras o cuidando animales. En Colombia, los salarios no alcanzan, en algunos casos, para mantener una familia, por lo que más de un miembro debe incorporarse al mundo laboral.
                a.boton-traduccion(@click='dg1 = !dg1' style='background-color: #fed947; color: #12263F') Ver traducción
      figure.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/76EKR8lFuLw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.1   #[em Interviews] (Entrevistas)
      .row.justify-content-center.mb-5
        .col-lg-8.mb-lg-0.mb-3(data-aos="fade-left") 
          .contenedor-traductor(style='background-color: #dddeff')
              .contenedor-traductor__eng
                p.fst-italic.mb-0 What’s a visa?: a citizen of a foreign country seeking another country, like the United States, must generally first obtain a US visa, which is placed in the traveler’s passport, a travel document issued by the country of which he or she is a citizen. Certain international travelers can visit the United States without a visa if they meet the requirements for visa-free travel. Let´s see the types of questions you may prepare before having that type of interview:
                  br
                  br
                  |Now, listen to the following interview and try to answer what is asked: 
                .d-flex.justify-content-end
                  Audio.color-secundario.mx-3.mb-0(
                    :audio="require('@/assets/curso/temas/audios/c/H40.wav')"
                    @audio-hover="mostrarIndicadorAudio = false"
                  )

                .contenedor-traductor__esp(:class="{ mostrar: dg1}")
                  p ¿Qué es una visa?: un ciudadano de un país extranjero que está interesado en viajar a otro país, como Estados Unidos, generalmente primero debe obtener una visa de EE.UU., que se coloca en el pasaporte del viajero, un documento de viaje emitido por el país del cual él o ella es ciudadano. Ciertos viajeros internacionales pueden visitar los Estados Unidos sin visa si cumplen con los requisitos para viajar sin ella. Veamos los tipos de preguntas que puede preparar antes de tener ese tipo de entrevista.
                    br
                    br
                    |Ahora, escuche la siguiente entrevista e intente responder lo que se pregunta:

                a.boton-traduccion(@click='dg1 = !dg1' style='background-color: #fed947; color: #12263F') Ver traducción 
        .col-lg-4.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema3/2.svg', alt='')
      .row.justify-content-center.mb-5
        .col-lg-10
          .tarjeta.position-relative(style="background-color: #ffe891 ").p-4
            .imagen-traductor.d-none.d-lg-block
                  img(src='@/assets/curso/temas/tema3/3.svg', alt='')
            .contenedor-traductor__eng
                  .ms-5.ps-4
                    .row.justify-content-center.g-1
                      .col-lg-7
                        TarjetaAudio.bg-white.color-secundario.mb-2(
                          texto="Q: Why do you want to study in the US?"
                          :audio="require('@/assets/curso/temas/audios/tema3/4.mp3')"
                        ) 
                        p.ms-3.mb-1.fst-italic.fw-bold A: You
                        TarjetaAudio.bg-white.color-secundario.mb-2(
                          texto="Q: How much do you think your stay in the US will cost you?"
                          :audio="require('@/assets/curso/temas/audios/c/H41.wav')"
                        ) 
                        p.ms-3.mb-1.fst-italic.fw-bold A: You
                        TarjetaAudio.bg-white.color-secundario.mb-2(
                          texto="Q: Do you have any intention of remaining in the US?"
                          :audio="require('@/assets/curso/temas/audios/tema3/6.mp3')"
                        ) 
                        p.ms-3.mb-1.fst-italic.fw-bold  A: You
                      .col-lg-4
                        p.fst-italic.mb-3.ms-5 For more practice, download the document and complete the sentences.
                        a.anexo.d-inline-block.ms-5(:href="obtenerLink('downloads/anexo1.pdf')" target="_blank" style='background-color: #3c3fa7; color: white') Descargar
                          .anexo__icono
                            img(src="@/assets/template/icono-pdf.svg")
                          .anexo__texto.text-white
                            p Anexo. Questions for practice Visa Interview
      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.2  #[em Important questions] (Preguntas relevantes)  
      .contenedor-traductor(style='background-color: #dddeff').mb-5
            .contenedor-traductor__eng
              p.fst-italic.mb-0 When participating in conversations, it is key to know how to talk about me, my skills, my abilities and desires. Initially, the questions somebody can pop would be orientated to discover who you are, your likes and dislikes. Every single answer can orientate the listener towards your goals and expectations. Here are some examples: 
              .contenedor-traductor__esp(:class="{ mostrar: dg1}")
                p Al participar de las conversaciones, es clave saber hablar de mí, mis habilidades, mis capacidades y deseos. Inicialmente, las preguntas que alguien puede hacer estarían orientadas a descubrir quién es, sus gustos y aversiones. Cada respuesta individual puede orientar al oyente hacia sus objetivos y expectativas. Aquí hay unos ejemplos:
              a.boton-traduccion(@click='dg1 = !dg1' style='background-color: #fed947; color: #12263F') Ver traducción 
      .row.justify-content-center.mb-5
        .col-lg-4.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema3/4.svg', alt='')
        .col-lg-8(data-aos="fade-left")
          p 
            span.r--3.fw-bold.fst-italic How would you describe yourself? 
            span(style='color: #777777')/ ¿Cómo se describiría a usted mismo?
            br
            span.r--3.fw-bold.fst-italic What are your strengths? 
            span(style='color: #777777')/ ¿Cuáles son sus fortalezas?
            br
            span.r--3.fw-bold.fst-italic What are your weaknesses? 
            span(style='color: #777777')/ ¿Cuáles son sus debilidades?
            br
            span.r--3.fw-bold.fst-italic Why did you leave your last job? 
            span(style='color: #777777')/ ¿Por qué dejó su último trabajo?
            br
            span.r--3.fw-bold.fst-italic What do you do in your current role? 
            span(style='color: #777777')/ ¿A qué se dedica en su cargo actual?
            br
            span.r--3.fw-bold.fst-italic Why would you like to work here? 
            span(style='color: #777777')/ ¿Por qué le gustaría trabajar aquí?
            br
            span.r--3.fw-bold.fst-italic When could you start? 
            span(style='color: #777777')/ ¿Cuándo podría empezar?
            br
            span.r--3.fw-bold.fst-italic What kind of salary are you expecting? 
            span(style='color: #777777')/ ¿Qué tipo de salario espera?
            br
            span.r--3.fw-bold.fst-italic Do you have any questions for me? 
            span(style='color: #777777')/ ¿Tiene alguna pregunta para mí?
          .row.justify-content-center.mb-5
            .col-lg-2.col-4.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema3/5.svg', alt='')
            .col-10
              .contenedor-traductor(style='background-color: #dddeff').mb-5

                .contenedor-traductor__eng
                  p.fst-italic.mb-0 More important than answering fast is giving the information requested. Please, read the questions and make sure you plan answers according to your real life. 
                  .contenedor-traductor__esp(:class="{ mostrar: dg1}")
                    p Más importante que responder rápido, es dar la información solicitada. Lea las preguntas y asegúrese de planificar las respuestas de acuerdo con su vida real.
                  a.boton-traduccion(@click='dg1 = !dg1' style='background-color: #fed947; color: #12263F') Ver traducción 
      p.mb-5(data-aos='fade-right').text-white Next, listen to the following dialogue, in which the topic that has been studied is applied. 
    Dialogo.color-primario(:dialogo="dialogo")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) Job interview
      template(#descripcion-actividad) Arrastra y suelta el cada una de las palabras en el orden correcto.                

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    dg1: true,
    dialogo: {
      personajes: [
        {
          nombre: 'Personal manager',
          img: require('@/assets/curso/temas/tema2/diana.svg'),
        },
        {
          nombre: 'Candidate',
          img: require('@/assets/curso/temas/tema2/orlando.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Personal manager',
          textoIng:
            'Hi, Mark. Thanks for coming today. I’m Linda Smith. Nice to meet you.',
          textoEsp: '',
          audio: require('@/assets/curso/temas/audios/tema3/8.mp3'),
        },
        {
          personaje: 'Candidate',
          textoIng: 'Hello. I’m Mark Turner. Nice to *** you, too.',
          textoEsp: '',
          audio: require('@/assets/curso/temas/audios/tema3/9.mp3'),
          palabra: 'meet',
        },
        {
          personaje: 'Personal manager',
          textoIng: 'Have you *** the information about this job?',
          textoEsp: '',
          audio: require('@/assets/curso/temas/audios/tema3/10.mp3'),
          palabra: 'read  ',
        },
        {
          personaje: 'Candidate',
          textoIng: 'Yes, it *** very interesting.',
          textoEsp: '',
          audio: require('@/assets/curso/temas/audios/tema3/11.mp3'),
          palabra: 'sounds',
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
.bg-t3
  background-image: url(../assets/curso/temas/tema3/bg-t3-1.svg)
  background-repeat: no-repeat
  background-position: start
  background-size: cover
.imagen-traductor
  position: absolute
  top: 0
  left: 0
  transform: translate(-50%, -10%)
  width: 210px
</style>
