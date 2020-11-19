import dotenv from 'dotenv';
dotenv.config()
import fs from 'fs';
import { ApolloServer, gql } from 'apollo-server';
import theMovieDatabaseAPI from '../dataSources/theMovieDatabaseAPI/index.js';
import resolvers from '../resolvers/index.js';

const schema = fs.readFileSync('./config/schema.gql');
const typeDefs = gql`
  ${schema}
`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    theMovieDatabaseAPI: new theMovieDatabaseAPI(),
  }),
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});