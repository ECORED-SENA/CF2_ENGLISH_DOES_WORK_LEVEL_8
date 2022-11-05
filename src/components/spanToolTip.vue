<template lang="pug">
span.tool
  slot
  .tool-up.text-center.text-white 
    p.mb-4 {{texto}}
</template>

<script>
export default {
  name: 'SpanToolTip',
  props: {
    texto: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="sass"></style>
