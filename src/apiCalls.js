import {parseObjectAttrsFromSnakeToCamel} from './utils';

function fetchBugBoxData() {
  return fetch(`${process.env.API_URL}/dashboard/bugbox/`)
    .then(response => response.json())
    .then(parseObjectAttrsFromSnakeToCamel)
}

export {fetchBugBoxData}
