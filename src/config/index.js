const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.0/8 are considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

const API_URL = isLocalhost
  ? 'http://localhost:3000/api/'
  : 'https://wallaclone-281617.ew.r.appspot.com/api/';

const config = {
  API_URL,
  REGISTER: API_URL + 'register',
  LOGIN: API_URL + 'authenticate',
  ADS: API_URL + 'adverts',
  RECOVER: API_URL + 'recover',
  TAGS: API_URL + 'tags',
  AD_LIMIT_PER_PAGE: '15',
  SUPPORTED_LOCALES: ['en', 'es'],
  AD_IMAGE_BUCKET_NAME: 'images/',
};

export default config;
