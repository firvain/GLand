<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',
    };
  },
  router: {
    activate({ next }) {
      alert('active');
      // when done:
      next();
    },
    deactivate({ next }) {
      console.log('inbox deactivated.');
      // when done:
      next();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$primary-color: rgb(66, 185, 131);
h1 {
  color: $primary-color;
}
</style>
