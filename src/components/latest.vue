<template lang="html">
<p>
  this is intro
</p>

</template>

<script>
  import { setCurrentRoute, setPreviousRoute } from '../vuex/actions';
  import { getCurrentRoute, getPreviousRoute } from '../vuex/getters';
  import { isEmpty } from 'lodash';

  export default {
    name: 'latest',
    // Options / Data
    data() {
      return {};
    },
    props: [],
    computed: {},
    methods: {

    },
    route: {
      activate(transition) {
        return new Promise((resolve) => {
          this.setCurrentRoute(transition.to.path);
          if (!isEmpty(transition.from)) {
            this.setPreviousRoute(transition.from.path);
          }
          resolve();
        });
      },
    },
    vuex: {
      getters: {
        getCurrentRoute,
        getPreviousRoute,
      },
      actions: {
        setCurrentRoute,
        setPreviousRoute,
      },
    },
  };
</script>
