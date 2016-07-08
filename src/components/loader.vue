<template lang="html">
 <div class="loader" :class="{'visuallyhidden': !active }">
    <mdl-spinner :active="active"></mdl-spinner>
    <div class="mdl-layout__obfuscator" :class="{'is-visible': active }"></div>
  </div>
</template>
<script>
  export default {
    // Options / Data
    data() {
      return {};
    },
    props: ['active'],
    computed: {},
    methods: {},
    name: 'loader',
  };
</script>
<style lang="scss">
  .loader {
    position: absolute;
    left: 0; top: 0; right: 0; bottom: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .mdl-spinner {
      z-index: 999999;
      width: 7rem;
      height: 7rem;
    }
    .mdl-layout__obfuscator {
      z-index: 999998;
    }
  }
</style>
