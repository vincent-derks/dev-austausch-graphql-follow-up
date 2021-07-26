import { ApolloServer } from 'apollo-server-micro';

import { typeDefs } from './schema';
import { resolvers, dataLoaders } from './resolvers';

// Core of the graphql-server
const createContext = ({ _, context }) => ({
  dataloaders: dataLoaders,
  context,
});

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: createContext,
});

// Below is nextjs boilerplate
const startServer = apolloServer.start();
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Headers', 'content-type, Cache-Control');
  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://studio.apollographql.com'
  );
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }

  await startServer;
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res);
}
export const config = {
  api: {
    bodyParser: false,
  },
};
