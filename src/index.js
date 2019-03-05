'use strict';

const { declare } = require('@babel/helper-plugin-utils');
const { types: t } = require('@babel/core');

module.exports = declare(api => {
  api.assertVersion(7);

  return {
    name: 'transform-vue-props',
    visitor: {
      /**
       * @param {babel.types.ImportDeclaration} path Import declaration
       * @return {void}
       */
      ImportDeclaration(path) {
        if (path.node.source.value === 'vue-types') {
          path.remove();
        }
      },
      /**
       * @param {babel.types.Identifier} path Identifier
       * @return {void}
       */
      Identifier(path) {
        if (path.node.name !== 'props' || !t.isObjectProperty(path.container)) {
          return;
        }
        /**
         * @type {babel.types.ObjectProperty}
         */
        const container = path.container;
        /**
         * @type {babel.types.ObjectExpression}
         */
        const element = container.value;

        if (!t.isObjectExpression(path.container.value)) {
          return;
        }

        container.value = checkIfAnyPropHasADefault(element)
          ? setNodeAsObjectExpression(element)
          : setNodeAsArrayOfString(element);
      },
    },
  };
});

function setNodeAsObjectExpression(element) {
  return t.objectExpression(
    element.properties.map(prop => {
      const key = t.identifier(prop.key.name);

      if (isDefCallExpression(prop)) {
        return t.objectProperty(
          key,
          t.objectPattern([
            t.objectProperty(t.identifier('default'), prop.value.arguments[0]),
          ]),
        );
      }
      const defaultValue = isObjectWithDefault(prop);

      return t.objectProperty(
        key,
        defaultValue
          ? t.objectPattern([
              t.objectProperty(t.identifier('default'), defaultValue),
            ])
          : t.nullLiteral(),
      );
    }),
  );
}

/**
 *
 * @param {babel.types.ObjectExpression} element The element
 * @return {babel.types.ArrayExpression} Array of strings
 */
function setNodeAsArrayOfString(element) {
  return t.arrayExpression(
    element.properties.map(prop => t.stringLiteral(prop.key.name)),
  );
}

function isDefCallExpression(prop) {
  return (
    t.isCallExpression(prop.value) && prop.value.callee.property.name === 'def'
  );
}

function isObjectWithDefault(prop) {
  if (!t.isObjectExpression(prop.value)) {
    return false;
  }

  for (const attr of prop.value.properties) {
    if (attr.key.name === 'default') {
      return attr.value;
    }
  }

  return false;
}

/**
 *
 * @param {babel.types.ObjectExpression} element The element
 * @return {boolean} Has a prop a default value?
 */
function checkIfAnyPropHasADefault(element) {
  for (const prop of element.properties) {
    if (isDefCallExpression(prop) || isObjectWithDefault(prop)) {
      return true;
    }
  }

  return false;
}
