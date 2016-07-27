<template lang="html">
  <div>
    <nav class="actions">
      <mdl-tooltip for="actions-search">{{ $t('navigation.search') }}</mdl-tooltip>
      <mdl-button icon='true' v-link="{ name: 'search' }" id="actions-search"><i class="mdi mdi-magnify"></i></mdl-button>
      <mdl-tooltip for="actions-toggleLanguage">{{ $t('navigation.toggleLanguage') }}</mdl-tooltip>
      <mdl-button icon='true'  @click="toggleLanguage" id="actions-toggleLanguage"><i class="mdi mdi-translate"></i></i></mdl-button>
      <mdl-tooltip for="actions-home">{{ $t('navigation.home') }}</mdl-tooltip>
      <mdl-button icon='true'  @click="goToHome" id="actions-home"><i class="mdi mdi-home"></i></i></mdl-button>
      <mdl-tooltip for="actions-back">{{ $t('navigation.back') }}</mdl-tooltip>
      <mdl-button icon='true'   @click="goBack" id="actions-back"><i class="mdi mdi-undo-variant"></i></i></mdl-button>
    </nav>

    <router-view keep-alive></router-view>
  </div>
</template>
<script>
  import Vue from 'vue';
  import search from './search';
  import { changeLanguage } from '../vuex/actions';
  import { getLanguage, getPreviousRoute } from '../vuex/getters';
  
  export default {
    // Options / Data
    data() {
      return {
      };
    },
    props: [],
    computed: {},
    methods: {
      toggleLanguage() {
        if (this.getLanguage === 'el') {
          Vue.config.lang = 'en';
          this.changeLanguage('en');
        } else {
          Vue.config.lang = 'el';
          this.changeLanguage('el');
        }
      },
      goToHome() {
        this.$router.go({ path: '/' });
      },
      goBack() {
        this.$router.go({ path: this.getPreviousRoute });
      },
    },
    ready() {
    },
    components: {
      search,
    },
    vuex: {
      getters: {
        getLanguage,
        getPreviousRoute,
      },
      actions: {
        changeLanguage,
      },
    },
  };
</script>
<style lang="scss" scoped>
@import "../sass/_fonts";
@import "~mdi/css/materialdesignicons.css";
nav {
  height: 3em;
  border-bottom: .3em solid rgb(255, 82, 82);
  display: flex;
  align-items: center;
  // justify-content: center;
  button {
    align-self: center;
  }
}

</style>
