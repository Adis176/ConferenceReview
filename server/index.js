import { ApolloServer } from '@apollo/server';
import { PrismaClient } from '@prisma/client';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema/typeDefs/index.js';
import { resolvers } from './schema/resolvers/index.js';

const prisma = new PrismaClient();
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers
});
  
// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
    context: async () => ({
        prisma
    }),
    listen: { port: 4000 }
});

  
console.log(`🚀  Server ready at: ${url}`);


// const users = [
//     {
//       id: '1',
//       name: 'Elizabeth Bennet',
//       age: 5
//     },
//     {
//       id: '2',
//       name: 'Fitzwilliam Darcy',
//       age: 30
//     },
//     {
//         id: '3',
//         name: 'kok marse',
//         age: 5
//     },
//     {
//       id: '4',
//       name: 'Adi',
//       age: 30
//     },
//     {
//       id: '5',
//       name: 'Adi',
//       age: 5
//     }
//   ];