<template>
  <div aria-live="assertive" aria-atomic="true" aria-relevant="text" class="mdl-snackbar mdl-js-snackbar">
    <div class="mdl-snackbar__text"></div>
    <button type="button" class="mdl-snackbar__action"></button>
  </div>
</template>
<script lang="">
/* global componentHandler*/
  export default {
    // Options / Data
    data() {
      return {};
    },
    props: [],
    computed: {},
    methods: {},
    name: 'snackbar',
    ready() {
      componentHandler.upgradeElement(this.$el, 'MaterialSnackbar');
      this.$on(this.displayOn, (snackarConfig) => {
        this.$el.MaterialSnackbar.showSnackbar(snackarConfig);
      });
    },
  };
</script>
