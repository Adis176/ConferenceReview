import { userResolver } from "./User.js"

export const resolvers = {
    Query: {
        ...userResolver.Query,
    },

    Mutation: {
        ...userResolver.Mutation,
    }
}