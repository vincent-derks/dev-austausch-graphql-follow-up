import { GiphyFetch } from '@giphy/js-fetch-api';

export const baseUrl = 'http://localhost:3000/api/';

export const gfClient = new GiphyFetch('GmNKowBbux9EcW1EtEmCjZ6RtyVg8RnT');

export const getGifsBySlug = async (slug) => {
  const { data: gifs } = await gfClient.search(slug, { limit: 10 });
  return gifs;
};

export const getGifBySlug = async (slug) => {
  const { data: gifs } = await gfClient.search(slug, { limit: 1 });
  return gifs.length && gifs[0];
};

export const getGifById = async (id) => {
  console.log('getGifById ', id);
  const { data: gif } = await gfClient.gif(id);
  return gif;
};

export const getGifsById = async (ids) => {
  console.log('getGifsById ', ids);
  const { data: gifs } = await gfClient.gifs(ids);
  return gifs;
};
