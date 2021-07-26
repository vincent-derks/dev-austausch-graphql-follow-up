import DataLoader from 'dataloader';

import {
  baseUrl,
  getGifsBySlug,
  getGifBySlug,
  getGifById,
  getGifsById,
} from './utils';

export const resolvers = {
  Query: {
    thing: async (_, { id }) => {
      const response = await fetch(`${baseUrl}things/${id}`);
      return response.json();
    },
    things: async () => {
      const response = await fetch(`${baseUrl}things`);
      return response.json();
    },
    gif: (_, { slug }) => getGifBySlug(slug),
    gifs: (_, { slug }) => getGifsBySlug(slug),
  },
  Thing: {
    gif: (parent, _, context) => {
      const { gif } = parent;
      return context.dataloaders.gif.load(gif);
    },
  },
};

export const dataLoaders = {
  gif: new DataLoader((ids) => getGifsById(ids)),
};

//
//
//
//
//
//
//
//
//
//
// gif: (parent, _, { dataloaders }) => {
//   const id = parent.gif;
//   return dataloaders.gif.load(id);
// },
