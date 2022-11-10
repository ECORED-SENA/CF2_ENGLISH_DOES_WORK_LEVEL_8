<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 #[em Types of texts] (Tipos de texto)
    .row.justify-content-center.mb-5
      .col-lg-4.col-6.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/1.png', alt='')
      .col-lg-8
        .contenedor-traductor(style='background-color: #dddeff').mb-5
          .contenedor-traductor__eng
            p.fst-italic The types of texts are descriptive, expository and journalistic. In a descriptive text, the writer needs to make the reader dream about a person, place, or object. In the majority of descriptive essays, there is a detailed description, it sometimes has the feelings or perceptions of the writer.
            .d-flex.justify-content-end
              Audio.color-secundario.mx-3(
                :audio="require('@/assets/curso/temas/audios/tema1/1.mp3')"
                @audio-hover="mostrarIndicadorAudio = false"
              )

          .contenedor-traductor__esp(:class="{ mostrar: dg1}")
            p Los tipos de textos son descriptivos, expositivos y periodísticos. En un texto descriptivo, el escritor necesita hacer que el lector describa una persona, un lugar o un objeto. En la mayoría de los ensayos descriptivos, hay una descripción detallada; a veces, este contiene los sentimientos o percepciones del escritor. A continuación, conozca más sobre este tema.
          a.boton-traduccion(@click='dg1 = !dg1' style='background-color: #fed947; color: #12263F') Ver traducción
    .margin-n.p-5.bg-t1.mb-5
      p.text-center Los tipos de textos son descriptivos, expositivos y periodísticos.
      .row.justify-content-center.align-items-end.mb-5
        .col-lg-9.mb-lg-0.mb-3(data-aos="fade-right")
          .tarjeta.bg-white.p-5
            SlyderA(tipo='b')
              div
                .contenedor-traductor(style='background-color: #dddeff').mb-5
                  .contenedor-traductor__eng
                    p.fst-italic #[b Descriptive text:]
                      br
                      br
                      |A descriptive text is a text that explains what a person, place, or thing is like, often providing a visual experience using adjectives and adverbs. 
                    .d-flex.justify-content-end
                      Audio.color-secundario.mx-3(
                        :audio="require('@/assets/curso/temas/audios/tema1/2.mp3')"
                        @audio-hover="mostrarIndicadorAudio = false"
                      )

                    .contenedor-traductor__esp(:class="{ mostrar: dg2}")
                      p Texto descriptivo:
                        br
                        br
                        |Un texto descriptivo es un texto que explica cómo es una persona, un lugar o una cosa, a menudo, brindando una experiencia visual usando adjetivos y adverbios.

                    a.boton-traduccion(@click='dg2 = !dg2' style='background-color: #fed947; color: #12263F') Ver traducción
                .tarjeta(style="background-color: #f6f6f6").p-3
                  .row.justify-content-center.align-items-center
                    .col-lg-3.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/2.svg', alt='')
                    .col-lg-9(data-aos="fade-left") 
                      p.fst-italic My favorite animal is the penguin, because when a penguin walks is very funny and cute.
                        br
                        |Penguins are birds and, although they cannot fly, they can swim very well.
                        br
                        |Their bodies are black, white, and have a yellow neck. 
              div
                .contenedor-traductor(style='background-color: #dddeff').mb-5
                  .contenedor-traductor__eng
                    p.fst-italic #[b Expository texts:]
                      br
                      br
                      |Expository texts, or informational texts, are non-fiction texts that give facts and information about a topic. These academic texts are common in subjects such as science, history, and social sciences. There are numerous examples of expository texts, that include textbooks for school children, recipes, content on current affairs, and pamphlets on monuments and places.  
                    .d-flex.justify-content-end
                      Audio.color-secundario.mx-3(
                        :audio="require('@/assets/curso/temas/audios/tema1/3.mp3')"
                        @audio-hover="mostrarIndicadorAudio = false"
                      )

                    .contenedor-traductor__esp(:class="{ mostrar: dg4}")
                      p Texto expositivo:
                          br
                          br
                          |Los textos expositivos, o textos informativos, son textos de no ficción que brindan hechos e información sobre un tema. Estos textos académicos son comunes en materias como ciencias, historia y ciencias sociales. Hay numerosos ejemplos de textos expositivos, que incluyen libros de texto para escolares, recetas, contenidos de actualidad y folletos sobre monumentos y lugares.
                    a.boton-traduccion(@click='dg4 = !dg4' style='background-color: #fed947; color: #12263F') Ver traducción
                .row.justify-content-center.mb-5
                  .col-lg-6: img(src='@/assets/curso/temas/tema1/4.svg', alt='')
              .row.justify-content-center.mb-5
                .col-lg-7.mblg-0.mb-3
                  .contenedor-traductor(style='background-color: #dddeff').mb-5
                    .contenedor-traductor__eng
                      p.fst-italic #[b Journalistic texts:]
                        br
                        br
                        |Journalistic writing is a form of non-fiction writing used to report news and factual events. It can be newspaper articles, television reports, radio scripts, and on news websites. As it is written to inform, journalistic writing usually consists of short sentences and paragraphs that get to the point of the article quickly.
                      .d-flex.justify-content-end
                        Audio.color-secundario.mx-3(
                          :audio="require('@/assets/curso/temas/audios/tema1/4.mp3')"
                          @audio-hover="mostrarIndicadorAudio = false"
                        )

                      .contenedor-traductor__esp(:class="{ mostrar: dg3}")
                        p Textos periodísticos:
                          br
                          br
                          |La escritura periodística es una forma de escritura de no ficción utilizada para informar noticias y hechos reales. Pueden ser artículos de periódicos, reportajes de televisión, guiones de radio y sitios web de noticias. Como se escribe para informar, la redacción periodística suele consistir en frases cortas y párrafos que llegan rápidamente al punto del artículo.


                      a.boton-traduccion(@click='dg3 = !dg3' style='background-color: #fed947; color: #12263F') Ver traducción
                .col-lg-5.col-6: img(src='@/assets/curso/temas/tema1/3.svg', alt='')
                
        .col-lg-3.col-6(data-aos="fade-left"): img(src='@/assets/curso/temas/tema1/5.svg', alt='')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/6.png', alt='')
      .col-lg-8(data-aos="fade-left")
        .contenedor-traductor(style='background-color: #dddeff').mb-5
          .contenedor-traductor__eng
            p.fst-italic To sum up, there are 5 tips to be able to write a great text, whether it is descriptive, expository, or journalistic.
              br
              br
              |1. Write the events in order, in a coherent way.
              br
              |2. Use words or phrases that aren’t literal.
              br
              |3. Use strong verbs. 
              br
              |4. Use sensory details, like the smell of something, to help the readers to make an image of something.
              br
              |5. Think before writing, create a map of ideas.
            .d-flex.justify-content-end
              Audio.color-secundario.mx-3(
                :audio="require('@/assets/curso/temas/audios/tema1/5.mp3')"
                @audio-hover="mostrarIndicadorAudio = false"
              )

            .contenedor-traductor__esp(:class="{ mostrar: dg5}")
              p A modo de resumen, hay algunos consejos que puede tener en cuenta para escribir un gran texto, sea descriptivo, expositivo o periodístico.
                br
                |1. Escriba los eventos en orden, de forma coherente.
                br
                |2. Use palabras o frases que no sean literales.
                br
                |3. Use verbos fuertes.
                br
                |4. Use detalles sensoriales, como el olor de algo, para ayudar a los lectores a crear una imagen de algo.
                br
                |5. Piense antes de escribir, cree un mapa de ideas.

            a.boton-traduccion(@click='dg5 = !dg5' style='background-color: #fed947; color: #12263F') Ver traducción
        .contenedor-traductor(style='background-color: #dddeff').mb-5
          .contenedor-traductor__eng
            p.fst-italic Now, you will have the opportunity to practice reading texts and match them with an image that exemplifies the narration. Keep in mind that in all cases you must identify the purpose of the text, the noun of the sentence, the adverbs used to describe actions, and/or the adjectives that describe the noun, respectively. If there is unknown vocabulary, please write it and make sure you learn it through permanent use.
            .d-flex.justify-content-end
              Audio.color-secundario.mx-3(
                :audio="require('@/assets/curso/temas/audios/tema1/6.mp3')"
                @audio-hover="mostrarIndicadorAudio = false"
              )

            .contenedor-traductor__esp(:class="{ mostrar: dg6}")
              p A continuación, tendrá la oportunidad de practicar la lectura de textos y emparejarlos con una imagen que ejemplifique la narración. Tenga presente que en todos los casos deberá identificar el propósito del texto, el sustantivo de la oración, los adverbios utilizados para describir acciones y/o los adjetivos que califican el sustantivo, respectivamente. Si hay vocabulario desconocido, por favor consúltelo y asegúrese de aprendérselo a través del uso permanente del mismo.
            a.boton-traduccion(@click='dg6 = !dg6' style='background-color: #fed947; color: #12263F') Ver traducción
    .row.justify-content-center.mb-3
      .col-lg-4
        .tarjeta.bg-hover.p-4.h-100
          img(src='@/assets/curso/temas/tema1/7.png', alt='').mb-4
          .text-center.fst-italic
            h5 The sunset
            p The sunset filled the entire sky with the deep color of rubies, setting the clouds ablaze.
          .d-flex.justify-content-center
            Audio.color-secundario.mx-3(
              :audio="require('@/assets/curso/temas/audios/tema1/7.mp3')"
              @audio-hover="mostrarIndicadorAudio = false"
            )
      .col-lg-4
        .tarjeta.bg-hover.p-4.h-100
          img(src='@/assets/curso/temas/tema1/8.png', alt='').mb-4
          .text-center.fst-italic
            h5 The waves crashed
            p The waves crashed and danced along the shore, moving up and down in a graceful and gentle rhythm like they were dancing.
          .d-flex.justify-content-center
            Audio.color-secundario.mx-3(
              :audio="require('@/assets/curso/temas/audios/tema1/8.mp3')"
              @audio-hover="mostrarIndicadorAudio = false"
            )
      .col-lg-4
        .tarjeta.bg-hover.p-4.h-100
          img(src='@/assets/curso/temas/tema1/9.png', alt='').mb-4
          .text-center.fst-italic
            h5 The painting
            p The painting was a field of flowers, with deep and rich blues and yellows atop vibrant green stems that seemed to beckon you to reach right in and pick them.
          .d-flex.justify-content-center
            Audio.color-secundario.mx-3(
              :audio="require('@/assets/curso/temas/audios/tema1/9.mp3')"
              @audio-hover="mostrarIndicadorAudio = false"
            )
    .row.justify-content-center.mb-5
      .col-lg-4
        .tarjeta.bg-hover.p-4.h-100
          img(src='@/assets/curso/temas/tema1/10.png', alt='').mb-4
          .text-center.fst-italic
            h5 The old man
            p The old man was stooped and bent, his back making the shape of a C and his head bent so far forward that his beard would nearly have touched his knobby knees had he been just a bit taller.
          .d-flex.justify-content-center
            Audio.color-secundario.mx-3(
              :audio="require('@/assets/curso/temas/audios/tema1/10.mp3')"
              @audio-hover="mostrarIndicadorAudio = false"
            )
      .col-lg-4
        .tarjeta.bg-hover.p-4.h-100
          img(src='@/assets/curso/temas/tema1/11.png', alt='').mb-4
          .text-center.fst-italic
            h5 Soulful blue eyes
            p His deep and soulful blue eyes were like the color of the ocean on the clearest day you can ever imagine.
          .d-flex.justify-content-center
            Audio.color-secundario.mx-3(
              :audio="require('@/assets/curso/temas/audios/tema1/11.mp3')"
              @audio-hover="mostrarIndicadorAudio = false"
            )
      .col-lg-4
        .tarjeta.bg-hover.p-4.h-100
          img(src='@/assets/curso/temas/tema1/12.png', alt='').mb-4
          .text-center.fst-italic
            h5 The soft fur
            p The soft fur of the dog felt like silk against my skin and her black coloring glistened as it absorbed the sunlight, reflecting it back as a perfect, deep, dark mirror.
          .d-flex.justify-content-center
            Audio.color-secundario.mx-3(
              :audio="require('@/assets/curso/temas/audios/tema1/12.mp3')"
              @audio-hover="mostrarIndicadorAudio = false"
            )
    .margin-n.p-5.mb-5.bg-t2
      .row.justify-content-center.mb-5
        .col-lg-3.col-6.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/13.svg', alt='')
        .col-lg-8(data-aos="fade-left")
          .contenedor-traductor(style='background-color: #dddeff').mb-5
            .contenedor-traductor__eng
              p.fst-italic You can use adjectives to say a lot of different things. Thanks to adjectives, you can tell someone that you had an amazing birthday or that you ate a delicious meal. You can use adjectives to talk about your exciting vacation, your favorite movie, or even your little dog. Adjectives come in many different shapes and sizes, but many of them have something in common: they are used to describe people, places, and things. There are many types of adjectives, but descriptive adjectives are the ones you need when you want to describe something. 
                br
                br
                |Now, try to study these flashcards of the descriptive adjectives which can be useful to create descriptions while practicing definitions instead of meanings.
              .d-flex.justify-content-end
                Audio.color-secundario.mx-3(
                  :audio="require('@/assets/curso/temas/audios/tema1/13.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )

              .contenedor-traductor__esp(:class="{ mostrar: dg7}")
                p Puede usar adjetivos para decir muchas cosas diferentes. Gracias a los adjetivos, puede decirle a alguien que tuvo un cumpleaños increíble o que comió una comida deliciosa. Puede usar adjetivos para hablar sobre sus emocionantes vacaciones, su película favorita o incluso su perrito. Los adjetivos vienen en muchas formas y tamaños diferentes, pero muchos de ellos tienen algo en común: se usan para describir personas, lugares y cosas. Existen muchos tipos de adjetivos, pero los adjetivos descriptivos son los que necesita cuando quiere describir algo. 
                  br
                  br
                  |Ahora, intente estudiar estas tarjetas con los adjetivos descriptivos que pueden ser útiles para crear descripciones, mientras practica definiciones en lugar de significados:

              a.boton-traduccion(@click='dg7 = !dg7' style='background-color: #fed947; color: #12263F') Ver traducción
      .tarjeta.bg-white.p-3
        SlyderF.mb-5.text-center(columnas="col-lg-6 col-xl-2")
          .tarjeta.card-bg.d-flex.align-items-end.justify-content-center.p-2(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/14.jpg')})`}")
            .tarjeta.bg-white.p-2.mb-5
              .d-flex.justify-content-center.mb-3
                Audio.color-secundario.mx-3(
                      :audio="require('@/assets/curso/temas/audios/tema1/14.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
              p.text-center 
                span.r--2.fw-bold.fst-italic Aloof / The opposite to friendly
                br
                | 
          .tarjeta.card-bg.d-flex.align-items-end.justify-content-center(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/15.jpg')})`}")
            .tarjeta.bg-white.p-2.mb-5
              .d-flex.justify-content-center.mb-3
                Audio.color-secundario.mx-3(
                      :audio="require('@/assets/curso/temas/audios/tema1/15.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
              p 
                span.r--2.fw-bold.fst-italic Agreeable 
                br
                | Placentero
          .tarjeta.card-bg.d-flex.align-items-end.justify-content-center(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/16.jpg')})`}")
            .tarjeta.bg-white.p-2.mb-5
              .d-flex.justify-content-center.mb-3
                Audio.color-secundario.mx-3(
                      :audio="require('@/assets/curso/temas/audios/tema1/16.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
              p 
                span.r--2.fw-bold.fst-italic Adorable
                br
                | Adorable
          .tarjeta.card-bg.d-flex.align-items-end.justify-content-center(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/17.jpg')})`}")
            .tarjeta.bg-white.p-2.mb-5
              .d-flex.justify-content-center.mb-3
                Audio.color-secundario.mx-3(
                      :audio="require('@/assets/curso/temas/audios/tema1/17.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
              p 
                span.r--2.fw-bold.fst-italic Adventurous
                br
                | Aventurero
          .tarjeta.card-bg.d-flex.align-items-end.justify-content-center(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/18.jpg')})`}")
            .tarjeta.bg-white.p-2.mb-5
              .d-flex.justify-content-center.mb-3
                Audio.color-secundario.mx-3(
                      :audio="require('@/assets/curso/temas/audios/tema1/18.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
              p 
                span.r--2.fw-bold.fst-italic Alive
                br
                | Vivo
          .tarjeta.card-bg.d-flex.align-items-end.justify-content-center(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/19.jpg')})`}")
            .tarjeta.bg-white.p-2.mb-5
              .d-flex.justify-content-center.mb-3
                Audio.color-secundario.mx-3(
                      :audio="require('@/assets/curso/temas/audios/tema1/19.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
              p 
                span.r--2.fw-bold.fst-italic Amused 
                br
                | Divertido
          .tarjeta.card-bg.d-flex.align-items-end.justify-content-center(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/20.jpg')})`}")
            .tarjeta.bg-white.p-2.mb-5
              .d-flex.justify-content-center.mb-3
                Audio.color-secundario.mx-3(
                      :audio="require('@/assets/curso/temas/audios/tema1/20.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
              p 
                span.r--2.fw-bold.fst-italic Angry 
                br
                | Malgeniado
          .tarjeta.card-bg.d-flex.align-items-end.justify-content-center(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/21.jpg')})`}")
            .tarjeta.bg-white.p-2.mb-5
              .d-flex.justify-content-center.mb-3
                Audio.color-secundario.mx-3(
                      :audio="require('@/assets/curso/temas/audios/tema1/21.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
              p 
                span.r--2.fw-bold.fst-italic Tasty

                br
                | Sabroso
          .tarjeta.card-bg.d-flex.align-items-end.justify-content-center(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/22.jpg')})`}")
            .tarjeta.bg-white.p-2.mb-5
              .d-flex.justify-content-center.mb-3
                Audio.color-secundario.mx-3(
                      :audio="require('@/assets/curso/temas/audios/tema1/22.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
              p 
                span.r--2.fw-bold.fst-italic Risky 
                br
                | Riesgoso
          .tarjeta.card-bg.d-flex.align-items-end.justify-content-center(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/23.jpg')})`}")
            .tarjeta.bg-white.p-2.mb-5
              .d-flex.justify-content-center.mb-3
                Audio.color-secundario.mx-3(
                      :audio="require('@/assets/curso/temas/audios/tema1/23.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
              p 
                span.r--2.fw-bold.fst-italic Clumsy
                br
                | Torpe
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1   #[em Verb tenses] (Tiempos verbales)
    .row.justify-content-center.mb-5
      .col-lg-5.col-6.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/24.svg', alt='')
      .col-lg-7(data-aos="fade-left")
        .contenedor-traductor(style='background-color: #dddeff').mb-5
              .contenedor-traductor__eng
                p.fst-italic Verb tenses are verb forms (visit, visited, will visit) which English speakers use to talk about the past, present, and future in their language. There are twelve verb tense forms in English. For English students, knowing how to use English tenses can be quite a challenge. Let’s get started!
                .d-flex.justify-content-end
                  Audio.color-secundario.mx-3(
                    :audio="require('@/assets/curso/temas/audios/tema1/24.mp3')"
                    @audio-hover="mostrarIndicadorAudio = false"
                  )

                .contenedor-traductor__esp(:class="{ mostrar: dg8}")
                  p Los tiempos verbales son formas verbales (visit, visited, will visit) que los hablantes de inglés usan para hablar sobre el pasado, el presente y el futuro, en su idioma. Hay doce formas de tiempo verbal en inglés. Para los estudiantes de inglés, saber cómo usar los tiempos verbales puede ser todo un desafío. ¡Empecemos!
                a.boton-traduccion(@click='dg8 = !dg8' style='background-color: #fed947; color: #12263F') Ver traducción
    .margin-n.p-5.bg-t1.mb-5
      p Los tiempos verbales son formas verbales (visit, visited, will visit) que los hablantes de inglés usan para hablar sobre el pasado, el presente y el futuro, en su idioma.
      .tarjeta.bg-white.p-5
        SlyderA(tipo='b')
          div
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-6
                .tarjeta(style="background-color: #dddeff ").p-4
                  p The “present simple” is used to express habits and routines, general facts, repeated actions or situations, emotions, and permanent desires:
                    br
                    br
                    |I do exercise. (habit) 
                    br
                    |I work in California. (permanence)
                    br
                    |London is a big city. (general fact)
                    br
                    br
                    |To give instructions or directions:
                    br
                    |You walk two blocks, then turn left.
                    br
                    |To talk about arranged, present or future events:
                    br
                    |Your class starts at 07.00.
                    br
                    br
                    |To refer to the future, behind some conjunctions: 
                    br
                    |He’ll give it to you when you come next Monday.
                  
              .col-lg-6
                p(style='color: #777777 ') Se utiliza el “presente simple” para expresar hábitos y rutinas, hechos generales, acciones o situaciones repetidas, emociones y deseos permanentes:
                  br
                  br
                  |Hago ejercicio. (hábito)
                  br
                  |Trabajo en California. (permanencia)
                  br
                  |Londres es una gran ciudad. (dato general)
                  br
                  br
                  |Para dar instrucciones o indicaciones: 
                  br
                  |Caminas dos cuadras, luego giras a la izquierda.
                  br
                  |Para hablar de eventos programados, presentes o futuros: 
                  br
                  |Su clase comienza a las 07.00.
                  br
                  |Para referirse al futuro, detrás de algunas conjunciones: 
                  br
                  |Te lo dará cuando vengas el próximo lunes.
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-6.d-none.d-lg-block: img(src='@/assets/curso/temas/tema1/25.png', alt='')
              .col-lg-6
                h5.text-center  Example:  / Ejemplo
                .row.justify-content-center.mb-5
                  .col-lg-3.col-6.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema1/26.svg', alt='')
                  .col-lg-9
                    TarjetaAudio.color-secundario.mb-3(
                      texto="She eats lunch at 12:00 every Monday."
                      :audio="require('@/assets/curso/temas/audios/tema1/26.mp3')"
                    )
                    p.ms-3(style='color: #777777 ') Ella almuerza todos los lunes a las 12:00.
          div 
            .row.justify-content-center.mb-5
              .col-lg-7 
                .contenedor-traductor(style='background-color: #dddeff').mb-5
                  .contenedor-traductor__eng
                    p.fst-italic The simple future refers to a time after the present and expresses facts or certainties. The future simple is used: to predict a future event, to express a spontaneous decision, to express will or willingness to do something. 
                    .d-flex.justify-content-end
                      Audio.color-secundario.mx-3(
                        :audio="require('@/assets/curso/temas/audios/tema1/29.mp3')"
                        @audio-hover="mostrarIndicadorAudio = false"
                      )

                    .contenedor-traductor__esp(:class="{ mostrar: dg9}")
                      p El futuro simple se refiere a un tiempo posterior al presente y expresa hechos o certezas. El futuro simple se usa: para predecir un evento futuro, para expresar una decisión espontánea, para expresar disposición o voluntad de hacer algo.
                    a.boton-traduccion(@click='dg9 = !dg9' style='background-color: #fed947; color: #12263F') Ver traducción
                p.text-center.fst-italic Example: 
                .row.justify-content-center.mb-3
                  .col-lg-2.col-6.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema1/27.svg', alt='')
                  .col-lg-6
                    TarjetaAudio.color-secundario.mb-3(
                      texto="She <span class= r--1>will go</span> to the hospital."
                      :audio="require('@/assets/curso/temas/audios/tema1/30.mp3')"
                    )
                .row.justify-content-center.mb-5
                  .col-lg-2.col-6.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema1/28.svg', alt='')
                  .col-lg-6
                    TarjetaAudio.color-secundario.mb-3(
                      texto="She <span class= r--1>will not</span> sleep. "
                      :audio="require('@/assets/curso/temas/audios/tema1/30-1.mp3')"
                    )
              .col-lg-5.d-none.d-lg-block: img(src='@/assets/curso/temas/tema1/29.png', alt='')    
          div 
            .row.justify-content-center.mb-5
              .col-lg-7 
                .contenedor-traductor(style='background-color: #dddeff').mb-5
                  .contenedor-traductor__eng
                    p.fst-italic As It has been said before, the past simple is a verb tense that expresses situations or actions that occurred in the past, and although they can be from the recent past or the distant past, their duration is not important; It should only be understood that these have already ended. Here are some examples to figure this out.
                    .d-flex.justify-content-end
                      Audio.color-secundario.mx-3(
                        :audio="require('@/assets/curso/temas/audios/tema1/27.mp3')"
                        @audio-hover="mostrarIndicadorAudio = false"
                      )

                    .contenedor-traductor__esp(:class="{ mostrar: dg10}")
                      p Como lo hemos dicho antes, el pasado simple o past simple del inglés es un tiempo verbal que expresa situaciones o acciones que se dieron en el pasado, y aunque pueden ser del pasado reciente o del pasado lejano, su duración no es importante, solo se debe entender que estas ya finalizaron.
                    a.boton-traduccion(@click='dg10 = !dg10' style='background-color: #fed947; color: #12263F') Ver traducción
                p.text-center.fst-italic Example: 
                .row.justify-content-center.mb-3
                  .col-lg-2.col-6.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema1/30.svg', alt='')
                  .col-lg-6
                    TarjetaAudio.color-secundario.mb-3(
                      texto="She had an exam. "
                      :audio="require('@/assets/curso/temas/audios/tema1/28.mp3')"
                    )
                .row.justify-content-center.mb-5
                  .col-lg-2.col-6.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema1/31.svg', alt='')
                  .col-lg-6
                    TarjetaAudio.color-secundario.mb-3(
                      texto="They were worried."
                      :audio="require('@/assets/curso/temas/audios/tema1/28-1.mp3')"
                    )
              .col-lg-5.d-none.d-lg-block: img(src='@/assets/curso/temas/tema1/32.png', alt='')  
    .row.justify-content-center.mb-5
      .col-lg-10
        .contenedor-traductor(style='background-color: #dddeff').mb-5
          .contenedor-traductor__eng
            p.fst-italic To be able to put into practice the verb tenses (present, past, and future) studied before, please, read the following text and practice thinking the correct verb. 
            .d-flex.justify-content-end
              Audio.color-secundario.mx-3(
                :audio="require('@/assets/curso/temas/audios/tema1/31.mp3')"
                @audio-hover="mostrarIndicadorAudio = false"
              )

            .contenedor-traductor__esp(:class="{ mostrar: dg11}")
              p Con el fin de poner en práctica los tiempos verbales (presente, pasado y futuro) estudiados antes, lea el siguiente texto y practique pensando el verbo correcto.
            a.boton-traduccion(@click='dg11 = !dg11' style='background-color: #fed947; color: #12263F') Ver traducción
    .row.justify-content-center.mb-5
      .col-lg-3.col-6.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/33.svg', alt='')
      .col-lg-9
        h4.fst-italic.mb-5
          span.r--2 Cultural behaviour in business
        p.fst-italic Much of today's business is conducted across international borders, and while the majority of the global business community might share the use of English as a common language, the nuances and expectations of business communication might differ greatly from culture to culture. A lack of understanding of the cultural norms and practices of our business acquaintances can result in unfair judgements, misunderstandings, and breakdowns in communication. Here are three basic areas of differences in the business etiquette around the world that could help stand you in good stead when you next find yourself working with someone from a different culture.
    .margin-n.p-5(style="background-color: #f0f4ff").mb-5.fst-italic
      h4.mb-4 
        span.fw-bold.r--2 Addressing someone.
      p.line When discussing this topic in a training course, a German trainee and a British trainee
        SpanToolTip(texto="get") - - - -
        |  into a hot debate about whether it
        span.tool - - - - 
          .tool-up.text-center.text-white
            p.mb-4 be
        | appropriate for someone with a doctorate to use the corresponding title on their business card. The British trainee maintained that anyone who wasn’t a medical doctor expecting to be addressed as ‘Dr’ was disgustingly pompous and full of themselves. The German trainee, however, 
        span.tool - - - - 
          .tool-up.text-center.text-white
            p.mb-4 argue
        | that the hard work and years of education put into earning that PhD should give them full rights to expect to be addressed as ‘Dr’.
      .row.justify-content-center
        .col-lg-8 
          p.line This stark difference in opinion over something that could be conceived as minor and thus easily overlooked goes to show that we often attach meaning to even the most mundane practices. When things that we are used to are done differently, it could spark the strongest reactions in us. While many Continental Europeans and Latin Americans prefer to be addressed with a title, for example Mr. or Ms. and their surname when meeting someone in a business context for the first time, Americans, and increasingly the British, now tend to prefer using their first names. The best thing to do is to listen and  
            span.tool - - - - 
              .tool-up.text-center.text-white
                p.mb-4 observe
            |how your conversation partner addresses you and, if you are still unsure, do not be afraid to ask them how they would like to be addressed.
        .col-lg-4.col-6: img(src='@/assets/curso/temas/tema1/34.svg', alt='')
    .row.justify-content-center.mb-5
      .col-lg-3.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/35.svg', alt='')
      .col-lg-9(data-aos="fade-left")
        h4.mb-4.fst-italic 
          span.fw-bold.r--2 Smiling
        p.line.fst-italic A famous Russian proverb                               
          span.tool - - - - 
            .tool-up.text-center.text-white 
              p.mb-4 state
          |that ‘a smile without reason is a sign of idiocy’ and a so-called ‘smile of respect’ is seen as insincere and often regarded with suspicion in Russia. Yet in countries like the United States, Australia and Britain, smiling is often interpreted as a sign of openness, friendship and respect, and is frequently used to break the ice.
          br
          br
          | In a piece of research done on smiles across cultures, the researchers found that smiling individuals were considered more intelligent than non-smiling people in countries such as Germany, Switzerland, China and Malaysia. However, in countries like Russia, Japan, South Korea and Iran, pictures of smiling faces were rated as less intelligent than the non-smiling ones. Meanwhile, in countries like India, Argentina and the Maldives, smiling 
          span.tool - - - - 
            .tool-up.text-center.text-white 
              p.mb-4 be 
          |associated with dishonesty.
    .margin-n.p-5.bg-t3
      .row.justify-content-center.mb-5
        .col-lg-8
          h4.mb-4.fst-italic 
            span.fw-bold.r--2 Smiling
          p.line.fst-italic An American or British person might be looking their client in the eye to show that they are paying full attention to what is being said, but if that client is from Japan or Korea, they
            span.tool - - - - 
                .tool-up.text-center.text-white
                  p.mb-4 find
            | the direct eye contact awkward or even disrespectful. In parts of South America and Africa, prolonged eye contact could also be seen as challenging authority. In the Middle East, eye contact across genders is considered inappropriate, although eye contact within a gender could signify honesty and truthfulness.
            br
            br
            | Having an increased awareness of the possible differences in expectations and behaviour 
            span.tool - - - - 
                .tool-up.text-center.text-white
                  p.mb-4   help
            | us avoid cases of miscommunication, but it
            span.tool - - - - 
                .tool-up.text-center.text-white
                  p.mb-4  be
            | vital that we also remember that cultural stereotypes can be detrimental to building good business relationships. Although national cultures
            span.tool - - - - 
                .tool-up.text-center.text-white
                  p.mb-4 play
            |  a part in shaping the way we behave and think, we are also largely influenced by the region we come from, the communities we associate with, our age and gender, our corporate culture and our individual experiences of the world. The knowledge of the potential differences should therefore be something we keep at the back of our minds, rather than something that we use to pigeonhole the individuals of an entire nation.
        .col-lg-4.col-6: img(src='@/assets/curso/temas/tema1/36.svg', alt='')
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-10
          .tarjeta-avatar-b
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/temas/tema1/37.png' alt='AvatarTop')
            .tarjeta.d-flex.align-items-center(style="background-color: #c4d1ff")
              .p-2
                p #[em #[b Now read again and check the answers.]] / Ahora lea de nuevo y revise las respuestas.
                  br
                  br
                  |Text from: British Council. (2021). Cultural behaviour in business. 
                a.anexo(href="https://learnenglish.britishcouncil.org/skills/reading/c1-reading/cultural-behaviour-in-business" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p Enlace web. Cultural behaviour in business
      .tarjeta(style="background-color: #ffe891").p-5.position-relative.tarjeta-relative
        .row.justify-content-start.align-items-center
          .col-lg-5
            h5 Diccionario / Dictionary
            p If you want to check the meaning and pronunciation of the vocabulary provided in the text, you can make use of online tools such as 
          .col-lg-3 
            a.anexo(href="https://www.linguee.es/" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p Enlace web. Linguee 
          .col-lg-3 
            a.anexo(href="https://www.wordreference.com/" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p Enlace web. Wordreference 
        .tarjeta-icon.d-lg-block.d-none: img(src='@/assets/curso/temas/tema1/38.png', alt='')
      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.2  #[em Irregular verbs] (Verbos irregulares)
      .row.justify-content-center.mb-3
        .col-lg-8.mb-lg-0.mb-3(data-aos="fade-right")
          .contenedor-traductor(style='background-color: #dddeff').mb-5
            .contenedor-traductor__eng
              p.fst-italic Irregular verbs in English are those whose conjugation is not done with ed at the end in past and participle forms. For this reason, to conjugate this type of verbs, it is necessary to know them by heart.
                br
                br
                |The importance of mastering irregular verbs is that without them there is no communication.
                br
                br
                |It should be noted that irregular verbs fulfill the same functions as regular verbs, that is, to express states or actions, and are located within the sentence in the same position as regular verbs.
              .d-flex.justify-content-end
                Audio.color-secundario.mx-3(
                  :audio="require('@/assets/curso/temas/audios/tema1/32.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )

              .contenedor-traductor__esp(:class="{ mostrar: dg12}")
                p Los verbos irregulares en inglés son aquellos cuya conjugación no retoma la terminación -ed en sus formas de pretérito y pasado participio. Por esto, para conjugar este tipo de verbos, es necesario contemplar reglas y excepciones específicas.
                  br
                  br
                  |La importancia de dominar los verbos irregulares es que existe una infinidad de ellos, desde los que son de uso diario, tal es el caso del verbo to be, como aquellos de usos especializados para distintas profesiones y labores.
                  br
                  br
                  |Cabe subrayar que los verbos irregulares cumplen las mismas funciones que los verbos regulares, es decir, expresar estados o acciones, y se ubican dentro de la oración en la misma posición que los regulares.

              a.boton-traduccion(@click='dg12 = !dg12' style='background-color: #fed947; color: #12263F') Ver traducción
          .row.justify-content-center.mb-3
            .col-lg-6
              .tabla1.mb-5
                table.text-center
                  thead
                    tr
                      th Verb
                      th Past
                      th Translation
                  tbody
                    tr
                      td Do/Does
                      td Did
                      td Hacer
                    tr
                      td Drink
                      td Drank
                      td Beber
                    tr
                      td Eat
                      td Ate
                      td Comer
                    tr
                      td Feel
                      td Felt
                      td Sentir
        .col-lg-4.col-6(data-aos="fade-left"): img(src='@/assets/curso/temas/tema1/39.png', alt='')
      .row.justify-content-center.mb-5
        .col-lg-9
          .tarjeta(style="background-color: #fff0b5 ").p-3
            .row.justify-content-center.mb-5
              .col-lg-8.col-6.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema1/40.svg', alt='')
              .col-lg-4
                .contenedor-traductor(style='background-color: #dddeff')
                  .contenedor-traductor__eng
                    p.fst-italic Now, let´s see the examples:
                      br
                      br
                      |#[b I did homework yesterday.]
                      br
                      |#[b My sister drank wine.]
                      br
                      |#[b I ate potatoes for lunch.]
                      br
                      |#[b I felt silly.]
                    .d-flex.justify-content-end
                      Audio.color-secundario.mx-3(
                        :audio="require('@/assets/curso/temas/audios/tema1/34.mp3')"
                        @audio-hover="mostrarIndicadorAudio = false"
                      )

                    .contenedor-traductor__esp(:class="{ mostrar: dg13}")
                      p Ahora, veamos los ejemplos:
                        br
                        |Hice la tarea ayer.
                        br
                        |Mi hermana bebió vino.
                        br
                        |Comí papas para el almuerzo.
                        br
                        |Me sentí tonto.

                    a.boton-traduccion(@click='dg13 = !dg13' style='background-color: #fed947; color: #12263F') Ver traducción
      .row.justify-content-center.mb-5
        .col-lg-10
          .contenedor-traductor(style='background-color: #dddeff')
            .contenedor-traductor__eng
              p.fst-italic.mb-0 Now let's use the tenses in simple sentences which are placed in the following cards; pay attention to the structure, for instance, if it is a simple sentence (subject and verb), or past simple sentences (subject and verb in past), or future tense (subject and will and verb):
              .d-flex.justify-content-end
                Audio.color-secundario.mx-3.mb-0(
                  :audio="require('@/assets/curso/temas/audios/tema1/34.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )

              .contenedor-traductor__esp(:class="{ mostrar: dg14}")
                p Usemos los tiempos en oraciones simples que se colocan en las siguientes tarjetas; preste atención a la estructura, por ejemplo, si es una oración simple (sujeto y verbo), u oraciones en pasado simple (sujeto y verbo en pasado), o tiempo futuro (sujeto, will y verbo):
              a.boton-traduccion(@click='dg14 = !dg14' style='background-color: #fed947; color: #12263F') Ver traducción
      .row.justify-content-center.mb-5
        .col-lg-10 
          div(style='background-color: #ffccd0; border-radius: 20px 20px 0px 0px').py-2.px-4
            .row.justify-content-center.align-items-center
              .col-lg-4.mb-lg-0.mb-3
                .tarjeta(style='background-color: #ffdfe0;').py-2.px-4
                  .d-flex.justify-content-center
                    Audio.color-secundario.mx-3.mb-2(
                      :audio="require('@/assets/curso/temas/audios/tema1/35.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                  .text-center.fst-italic 
                    h5 Regular verbs
                    p I visit him.
                      br
                      |I visited him.
                      br
                      |I will visit him.
                    h5 Irregular verbs
                    p I go to work.
                      br
                      |I went to work.
                      br
                      |I have gone to work.

              .col-lg-3.mb-lg-0.mb-lg-0.mb-3
                h5.text-center Regular
                img(src='@/assets/curso/temas/tema1/41.svg', alt='' style='width: 148px').m-auto.mb-3
                p.text-center Verb + ed #[br] Dance – Danced
              .col-lg-3
                h5.text-center Irregular
                img(src='@/assets/curso/temas/tema1/42.svg', alt='' style='width: 148px').m-auto.mb-3
                p.text-center Verbs list #[br] Sing - Sang
          div(style='background-color: #ffdfe0;').py-2.px-4
            .row.justify-content-center.align-items-center
              .col-lg-4.mb-lg-0.mb-3
                .tarjeta(style='background-color: #fff0f1;').py-2.px-4
                  .d-flex.justify-content-center
                    Audio.color-secundario.mx-3.mb-2(
                      :audio="require('@/assets/curso/temas/audios/tema1/36.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                  .text-center.fst-italic 
                    p Regular and irregular verbs have the same function.
                      br
                      br
                      | Example:
                      br
                      |She had a great vacation.
                      br
                      |She visited the beach. 
              .col-lg-6.mb-lg-0.mb-3
                h5.text-center.mb-4.fst-italic Interrogative and negative use auxiliar Did
                .row.justify-content-center.align-items-center
                  .col-lg-5.col-6: img(src='@/assets/curso/temas/tema1/43.svg', alt='')
                  .col-lg-7
                    p.fst-italic She did not visit the beach
                      br
                      br
                      | Did she have a great vacation?
          div(style='background-color: #ffbfc1;').py-2.px-4
            .row.justify-content-center.align-items-center
              .col-lg-4.mb-lg-0.mb-3
                .tarjeta(style='background-color: #ff9fa3;').py-2.px-4
                  .d-flex.justify-content-center
                    Audio.color-secundario.mx-3.mb-2(
                      :audio="require('@/assets/curso/temas/audios/tema1/37.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                  .text-center.fst-italic 
                    p Use to express habits or routines in present perfect.

                      br
                      br
                      |Example:
                      br
                      |Samuel has written a book.
                      br
                      |Samuel has visited his grandpa.
              .col-lg-6.mb-lg-0.mb-3
                h5.text-center.mb-4.fst-italic Has / Have + Verb past participle
                .row.justify-content-center.align-items-center
                  .col-lg-5.col-6: img(src='@/assets/curso/temas/tema1/44.svg', alt='')
                  .col-lg-7
                    p.fst-italic Activity that started in the past and continues to the present
                    h5.fst-italic Past 
                      span.mx-3   
                      | Present      
                      span.mx-3   
                      | Future
          div(style='background-color: #ff9fa3; border-radius: 0px 0px 20px 20px').py-2.px-4
            .row.justify-content-center.align-items-center
              .col-lg-4.mb-lg-0.mb-3
                .tarjeta(style='background-color: #ffbfc1;').py-2.px-4
                  .d-flex.mb-5.justify-content-center
                    Audio.color-secundario.mx-3.mb-0(
                      :audio="require('@/assets/curso/temas/audios/tema1/38.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                  .text-center.fst-italic 
                    p Use for future simple.
                      br
                      br
                      |Example:
                      br
                      |You will come.
                      br
                      |You will learn.
              .col-lg-2.mb-lg-0.mb-3
                h5.mb-4.text-center.fst-italic Predictions
                p.text-center.fst-italic Future events
                  br
                  br
                  | + You will come
              .col-lg-2.mb-lg-0.mb-3
                h5.mb-4.text-center.fst-italic Resolutions
                p.text-center.fst-italic WILL
                  br
                  br
                  | Will you come?
              .col-lg-2.mb-lg-0.mb-3
                h5.mb-4.text-center.fst-italic Promises
                p.text-center.fst-italic Snap decisions
                  br
                  br
                  | - You won’t come
      .row.justify-content-center.mb-5
        .col-lg-10(data-aos="zoom-in")
          .contenedor-traductor(style='background-color: #dddeff')
            .imagen-traductor.d-none.d-lg-block
              img(src='@/assets/curso/temas/tema1/45.png', alt='')
            .contenedor-traductor__eng
              .ms-5
                p.fst-italic.mb-3.ms-5 To keep on working with the mixed sentences, listen to the song It’s Time by Imagine Dragons and identify the tenses, the sentence structure and the meaning of it taking into account the context. If you want to google it, it’s ok or just follow the link and identify the regular and irregular verbs:
                a.anexo.d-inline-block.ms-5(href="https://www.youtube.com/watch?v=sENM2wA_FTg" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p Enlace web.  Imagine Dragons - It’s Time
              .contenedor-traductor__esp(:class="{ mostrar: dg15}")
                p Para seguir trabajando con las oraciones mixtas, escuche la canción It's Time de Imagine Dragons e identifique los tiempos, la estructura de la oración y el significado de esta teniendo en cuenta el contexto. Si quiere buscarla en Google, está bien, o simplemente siga el enlace:
              a.boton-traduccion(@click='dg15 = !dg15' style='background-color: #fed947; color: #12263F') Ver traducción
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-1.col-4: img(src='@/assets/curso/temas/tema1/46.svg', alt='')
        .col-4
          p.mb-0 #[em #[b Now listen again and check the verbs]] / Ahora, lea de Nuevo y revise los verbos:
        .col-auto
          a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
            span Ver letra
            i.fas.fa-spell-check.fa-lg
    ModalA(:abrir-modal.sync="modal1")
      p.text-center So this is what you meant when you said that you were spent?
        br
        br
        |And now it's time to build from the bottom of the pit
        br
        |Right to the top, don't hold back
        br
        |Packing my bags and giving the academy a rain-check
        br
        |I don't ever wanna let you down
        br
        |I don't ever wanna leave this town
        br
        br
        |'Cause after all
        br
        |This city never sleeps at night
        br
        |It's time to begin, isn't it?
        br
        |I get a little bit bigger, but then I'll admit
        br
        |I'm just the same as I was
        br
        |Now, don't you understand that I'm never changing who I am?
        br
        |So this is where you fell, and I am left to sell?
        br
        |The path to heaven runs through miles of clouded hell
        br
        |Right to the top, don't look back
        br
        |Turning to rags and giving the commodities a rain-check
        br
        br
        |This road never looked so lonely
        br
        |This house doesn't burn down slowly
        br
        |To ashes
        br
        |To ashes
        br
        |It's time to begin, isn't it?
        br
        |I get a little bit bigger, but then I'll admit
        br
        |I'm just the same as I was
        br
        |Now, don't you understand that I'm never changing who I am?
        br
        |It's time to begin, isn't it?
        br
        |I get a little bit bigger, but then I'll admit
        br
        |I'm just the same as I was
        br
        |Don't you understand that I'm never changing who I am?
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.3  #[em Reading comprehension] (Comprensión de lectura) 
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3(data-aos="fade-right")
        .contenedor-traductor(style='background-color: #dddeff')
          .contenedor-traductor__eng
            p.fst-italic.mb-0 There are several comprehension strategies we use every day and, by using them, we can become experts in that field. Anyhow, it is a great idea to know how to promote reading comprehension in case of not having that ability. 
              br
              br
              |#[b What is the skimming technique?]
              br
              |This method of study is used to extract the most important ideas from a text. For instance, we will go directly to the first and last paragraphs, as well as to the titles, subtitles, and epigraphs of each section, analyzing the structure of the content to be developed.
              br
              br
              |That is, we have to quickly obtain a general idea of the concepts, dates, and data. To do this, without delving into the message, we will identify them dynamically throughout the text.
              |With the skimming method the reading speed increases up to four times. Of course, to handle it with ease requires a lot of practice.
              br
              br
              |Remember that, although it provides a global image, it reduces reading comprehension, so it is not useful for an in-depth study. Of course, it serves to analyze contexts and review.
            .d-flex.justify-content-end
              Audio.color-secundario.mx-3.mb-0(
                :audio="require('@/assets/curso/temas/audios/tema1/40.mp3')"
                @audio-hover="mostrarIndicadorAudio = false"
              )

            .contenedor-traductor__esp(:class="{ mostrar: dg16}")
              p Hay varias estrategias de comprensión que usamos todos los días y, al usarlas, podemos convertirnos en expertos en ese campo. De todos modos, es una gran idea saber cómo promover la comprensión lectora en caso de no tener esa habilidad.
                br
                br
                |¿Qué es la técnica skimming?
                br
                br
                | Puede usar adjetivos para decir muchas cosas diferentes. Gracias a los adjetivos, puede decirle a alguien que tuvo un cumpleaños increíble o que comió una comida deliciosa. Puede usar adjetivos para hablar sobre sus emocionantes vacaciones, su película favorita o incluso su perrito. Los adjetivos vienen en muchas formas y tamaños diferentes, pero muchos de ellos tienen algo en común: se usan para describir personas, lugares y cosas. Existen muchos tipos de adjetivos, pero los adjetivos descriptivos son los que necesita cuando quiere describir algo. 
                br
                br
                |Ahora, intente estudiar estas tarjetas con los adjetivos descriptivos que pueden ser útiles para crear descripciones, mientras practica definiciones en lugar de significados:
                br
                br
                |Este método de estudio se utiliza para extraer las ideas más importantes de un texto. Ahora bien, para ello, iremos directamente a los primeros y últimos párrafos, igual que a los títulos, subtítulos y epígrafes de cada apartado, analizando la estructura del contenido a desarrollar.
                br
                br
                |Es decir, hemos de obtener, de forma rápida, una idea general de los conceptos, las fechas y los datos. Para ello, sin profundizar en el mensaje, los identificaremos a lo largo del texto de forma dinámica.
                br
                br
                |Con el método skimming, la velocidad lectora aumenta hasta cuatro veces. Eso sí, para manejarlo con soltura, se requiere mucha práctica.
                br
                br
                |Recuerde que, aunque facilita una imagen global, reduce la comprensión lectora, por lo que no sirve para un estudio en profundidad. Eso sí, sirve para analizar contextos y repasar.



            a.boton-traduccion(@click='dg16 = !dg16' style='background-color: #fed947; color: #12263F') Ver traducción
      .col-lg-4.col-6(data-aos="fade-left")
        h5.fst-italic Extract the ideas from text
        img(src='@/assets/curso/temas/tema1/47.svg', alt='').mb-4
        figcaption(style="background-color: #ffe891") Note. Skimming is used to extract the most important ideas from a text.
    p.mb-5(data-aos='fade-right') 
      span.r--1.fst-italic Now, read the following text and answer the questions below. 
      span(style='color: #777777') / Ahora, lea el siguiente texto y responda las preguntas relacionadas.

            
          


      
</template>

<script>
import SpanToolTip from '../components/spanToolTip'
export default {
  name: 'Tema1',
  components: { SpanToolTip },
  data: () => ({
    modal1: false,
    dg1: true,
    dg2: true,
    dg3: true,
    dg4: true,
    dg5: true,
    dg6: true,
    dg7: true,
    dg8: true,
    dg9: true,
    dg10: true,
    dg11: true,
    dg12: true,
    dg13: true,
    dg14: true,
    dg15: true,
    dg16: true,
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
.bg-t1
  background-image: url(../assets/curso/temas/tema1/bg-t1-1.svg)
  background-repeat: no-repeat
  background-position: start
  background-size: cover
.bg-t2
  background-image: url(../assets/curso/temas/tema1/bg-t1-2.svg)
  background-repeat: no-repeat
  background-position: start
  background-size: cover
.bg-t3
  background-image: url(../assets/curso/temas/tema1/bg-t1-3.svg)
  background-repeat: no-repeat
  background-position: start
  background-size: 100%
.tarjeta-icon
    height: 100%
    position: absolute
    top: -2rem
    right: 0
    transform: translateX(50%)
    img
      width: 260px
      margin: 0 auto
.tarjeta-relative
  width: 90%
.tabla1
  thead
    background-color: #ff9fa3
  tbody
    tr:nth-child(odd)
      background-color: #f0f4ff
    tr:nth-child(even)
      background-color: #ffdfe0
.imagen-traductor
  position: absolute
  top: 0
  left: 0
  transform: translate(-50%, -10%)
  width: 210px
</style>
