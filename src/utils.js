/**
 * @param {Object} object
 * @return Object
 * @private
 */
function parseObjectAttrsFromSnakeToCamel(object) {
  return Object.entries(object).reduce(
    (_object, [snakeKey, value]) => {
      const _camelKey = snakeKey.replace(/(_\w)/g, m => m[1].toUpperCase()); // Snake to Camel Case
      _object[_camelKey] = value;
      return _object
    },
    {} // Value to start the iteration as "_object"
  );
}

export {parseObjectAttrsFromSnakeToCamel};
