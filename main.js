import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';

// server set-up
const server =  new ApolloServer({
    // typeDefs
    // resolvers
    
});

const portNumber = 4000;
const { url } = await startStandaloneServer(server, {
    listen: { port: portNumber}
});
console.log("Server ready at port: ", portNumber);