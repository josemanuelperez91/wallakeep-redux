import config from '../config';
const _ = require('lodash');

function createURLQuery(params) {
  if (params.min || params.max) params.price = `${params.min}-${params.max}`;

  params = _.omit(params, 'max', 'min');
  params = _.omitBy(params, _.isEmpty);

  const url = new URL(config.ADS);
  url.search = new URLSearchParams(params);
  return url;
}

export function signIn(body) {
  return fetch(config.LOGIN, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'post',
    body: JSON.stringify(body),
    credentials: 'include',
  }).then((response) => {
    if (!response.ok) {
      throw new Error();
    }
  });
}
export function signUp(body) {
  return fetch(config.REGISTER, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'post',
    body: JSON.stringify(body),
    credentials: 'include',
  })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      if (!result.success) {
        const key = Object.keys(result.value)[0];
        const value = result.value[key];
        const msg = result.error + ' ' + key + ' ' + value;
        console.log(msg);
        throw new Error(msg);
      }
    });
}

export function getTags() {
  return fetch(config.TAGS, {
    method: 'get',
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .catch(() => {
      console.error('API Error');
      return { results: [null] };
    });
}

export function getAds(params) {
  const query = createURLQuery(params);

  return fetch(query, {
    method: 'get',
    credentials: 'include',
  }).then((response) => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  });
}

export function getAdDetails(id) {
  return fetch(`${config.ADS}/${id}`, {
    method: 'get',
    credentials: 'include',
  }).then((response) => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  });
}
export function postAd(body) {
  return fetch(config.ADS, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'post',
    body: JSON.stringify(body),
    credentials: 'include',
  }).then((response) => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  });
}
export function putAd(id, body) {
  const putURL = `${config.ADS}/${id}`;
  return fetch(putURL, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'put',
    body: JSON.stringify(body),
    credentials: 'include',
  }).then((response) => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  });
}
