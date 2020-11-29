class AviasalesApiService {
  base = 'https://front-test.beta.aviasales.ru/';

  requestResource = async (query, options) => {
    const res = await fetch(`${this.base}${query}`, options);

    if (!res.ok) {
      throw new Error(`Could not fetch ${query}, received ${res.status}`);
    }

    return res.json();
  };

  setSearchId = () => {
    const path = 'search';
    return this.requestResource(`${path}`);
  };

  getTickets = (searchId) => {
    const path = 'tickets';
    const query = `?searchId=${searchId}`;
    return this.requestResource(`${path}${query}`);
  };
}

export default new AviasalesApiService();
