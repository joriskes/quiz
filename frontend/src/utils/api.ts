/**
 * Cleans up given uri and appends REACT_APP_API_URL from .env file
 * @param uri
 */
import { StrapiApiItem } from '../types';

function cleanUrl(uri: string) {
  let res = uri;
  if (uri.startsWith('/')) {
    res = uri.substring(1);
  }

  if (!process.env.REACT_APP_API_URL) {
    console.error(
      'Could not find REACT_APP_API_URL environment parameter (check /frontend/.env file)'
    );
    return uri;
  }

  if (!process.env.REACT_APP_API_URL.endsWith('/')) {
    return `${process.env.REACT_APP_API_URL}/${res}`;
  }
  return process.env.REACT_APP_API_URL + res;
}

/**
 * Returns a promise to the supplied uri
 * @param uri
 * @return Promise
 */
function apiGet<T extends StrapiApiItem>(uri: string) {
  return fetch(cleanUrl(uri), {
    method: 'GET',
    headers: {
      'content-type': 'application/json;charset=UTF-8',
      Authorization: `bearer ${process.env.REACT_APP_API_TOKEN}`,
    },
  }).then((response) =>
    response.json().then((r) => {
      if (r.data && Array.isArray(r.data)) {
        return r.data.map(
          (record: any) =>
            ({
              id: record.id,
              ...record.attributes,
            } as T)
        );
      }
      console.warn('Something went wrong parsing get call', r);
      return [];
    })
  );
}

export { apiGet };
