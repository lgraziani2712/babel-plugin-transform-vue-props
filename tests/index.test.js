'use strict';

const { transformFileSync } = require('@babel/core');

const transformVueProps = require('../src');

function transformFile(fileName) {
  return transformFileSync(`${__dirname}/files/${fileName}.js`, {
    babelrc: false,
    plugins: [transformVueProps],
  }).code;
}

describe('babel-plugin-transform-vue-props', () => {
  describe('Normal props', () => {
    test('Without defaults', () => {
      expect(transformFile('normal-without-defaults')).toMatchSnapshot();
    });
    test('With defaults', () => {
      expect(transformFile('normal-with-defaults')).toMatchSnapshot();
    });
  });

  describe('Vue-types props', () => {
    test('Without defaults', () => {
      expect(transformFile('vue-types-without-defaults')).toMatchSnapshot();
    });
    test('With defaults', () => {
      expect(transformFile('vue-types-with-defaults')).toMatchSnapshot();
    });
  });

  describe('Mixed props', () => {
    test('Without defaults', () => {
      expect(transformFile('mixed-without-defaults')).toMatchSnapshot();
    });
    test('With defaults', () => {
      expect(transformFile('mixed-with-defaults')).toMatchSnapshot();
    });
  });
});
