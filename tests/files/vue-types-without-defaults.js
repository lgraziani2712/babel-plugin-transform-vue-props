import VueTypes from 'vue-types';

export default {
  props: {
    name: VueTypes.string.isRequired,
    value: VueTypes.number,
  },
};
