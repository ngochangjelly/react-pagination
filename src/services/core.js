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
        const result = (resp && resp.json().data) || resp;
        return result;
      })
      .catch(err => Promise.reject(err));
  };

  fetchUser = qs => this.fetch('user', 'GET', qs);
}

export default CoreService;
export const user = new CoreService();
