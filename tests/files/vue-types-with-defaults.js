import VueTypes from 'vue-types';

export default {
  props: {
    name: VueTypes.string.def('lolo'),
    value: VueTypes.number,
  },
};
