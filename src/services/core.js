import fetch from 'unfetch';
import queryString from 'query-string';


class CoreService {
  fetch = (
    path = '',
    method = 'GET',
    {
      body, rawBody, params, ...opts
    } = {},
  ) => {
    let qs = queryString.stringify(params);
    qs = qs ? `?${qs}` : '';
    const url = 'https://reqres.in/api/';
    return fetch(`${url}${path}${qs}`, {
      method,
      ...opts,
      // wrap body
      body: rawBody || (body ? JSON.stringify(body) : null),
    })
      .then((resp) => {
        const result = (resp && resp.json()) || resp;
        return result;
      })
      .catch(err => Promise.reject(err));
  };

  fetchUser = (page) => this.fetch('user', 'GET', `?page=${page}`);
}

export default CoreService;
export const user = new CoreService();
