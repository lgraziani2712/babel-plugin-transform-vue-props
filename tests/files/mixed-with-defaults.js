import VueTypes from 'vue-types';

export default {
  props: {
    name: VueTypes.oneOf(['lolo', 'lala']).def('lolo'),
    value: Boolean,
  },
};
