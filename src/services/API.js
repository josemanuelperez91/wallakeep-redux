import config from '../config';

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
  }).then((response) => {
    if (!response.ok) {
      throw new Error();
    }
  });
}

// .then((result) => {
//   if (!result.success) {
//     let msg = '';
//     if (result.error === 'duplicate') {
//       const key = Object.keys(result.value)[0];
//       const value = result.value[key];
//       msg = result.error + ' ' + key + ' ' + value;
//     } else {
//       msg = result.error;
//     }
//     throw new Error(msg);
//   }
// });

export function getTags(query) {
  const url = new URL(config.TAGS);
  url.search = new URLSearchParams(query);

  return fetch(url, {
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

export function getAds(query) {
  return fetch(query, {
    method: 'get',
  }).then((response) => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  });
}
export function getUserAds(username, query) {
  const url = new URL(config.ADS);
  url.search = new URLSearchParams({ username, ...query });

  return fetch(url, {
    method: 'get',
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
  });
}
export function deleteAd(id) {
  const deleteURL = `${config.ADS}/${id}`;
  return fetch(deleteURL, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'delete',
    credentials: 'include',
  }).then((response) => {
    if (!response.ok) {
      throw new Error();
    }
  });
}
