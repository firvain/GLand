<template>
  <div id="app" class="app">
    <div class="flex-wrapper full">
      <sidebar class="left"></sidebar>
      <map class="right"></map>
    </div>
    <loader :active='showLoader' ></loader>
    <mdl-snackbar display-on="A"></mdl-snackbar>
  </div>
</template>

<script type="text/babel">
import 'material-design-lite';
import 'mdi';
import loader from './components/Loader';
import map from './components/map';
import sidebar from './components/sidebar';
import store from './vuex/store';
import { getSnackbarMsg } from './vuex/getters';

export default {
  name: 'app',
  store,
  data() {
    return {
      showLoader: true,
    };
  },
  components: {
    loader,
    sidebar,
    map,
  },
  ready() {
    this.removeLoader();
    // this.$watch('msg', () => {
    //   this.$broadcast('A', { message: this.getSnackbarMsg });
    // });
    this.$on('test', (testval) => {
      console.log('testval', testval);
    });
    this.$emit('test', this.getSnackbarMsg);
  },
  computed: {
    msg() {
      // this.$broadcast('A', { message: this.getSnackbarMsg });
      return this.getSnackbarMsg;
    },
  },
  methods: {
    removeLoader() {
      this.showLoader = false;
    },
  },
  watch: {
    msg() {
      this.$emit('test', this.getSnackbarMsg);
    },
    immediate: true,
  },
  vuex: {
    getters: {
      getSnackbarMsg,
    },
  },
};
</script>

<style lang="scss">
@import "~normalize.css/normalize.css";
@import "~material-design-lite/dist/material.blue_grey-red.min";
@import "./sass/_fonts";

@include font-face(roboto-light, './assets/fonts/Roboto-Light', 300, normal);
@include font-face(roboto-regular, './assets/fonts/Roboto-Regular', 400, normal);
@include font-face(roboto-black, './assets/fonts/Roboto-Black', 900, normal);

html {
  height: 100%;
  box-sizing: border-box;
  font-size: 62.5% // https://css-tricks.com/snippets/css/less-mixin-for-rem-font-sizing/
}

body {
  @include roboto-regular;
  height: 100%;
  margin: 0;
  padding: 0;
  @include font-size(1.6);
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
.app {
  width: 100%;
  height: 100%; /*Fallback*/
  height: 100vh;

}
.flex-wrapper {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
}
.full {
  width: 100%;
  height: 100%; /*Fallback*/
  height: 100vh;
}
.left {
  width: 100%;
  height: 100%; /*Fallback*/
  height: 100vh;
  overflow-y: auto;
  flex: 1 0 30%;
}
.right {
  width: 100%;
  height: 100%; /*Fallback*/
  height: 100vh;
  flex: 1 0 70%;
}
// @media (min-width: 1024px) {
//   .left {
//     flex: 1 0 30%;
//   }
//   .right {
//     flex: 1 0 70%;
//   }
// }
// @media (max-width: 1023px) {
//   .left {
//     flex: 1 0 20%;
//   }
//   .right {
//     flex: 1 0 80%;
//   }
// }


</style>
