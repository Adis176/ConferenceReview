export const userTypes = `#graphql
    type User {
        userId: ID!
        firstName: String!
        lastName: String!
        password: String!
        email: String!
        institution: String
        gender: String!
        role: String!
        conferencesCreated: [ID!]!
    }
    input UserInput {
        firstName: String!
        lastName: String!
        password: String!
        email: String!
        institution: String
        gender: String!
        role: String!
    }

    type Conference {
        conferenceId: ID!
        createdBy: ID!
        papers: [ID!]!
    }

    type Paper {
        paperId: ID!
        authorId: ID!
        peers: [ID!]!
    }

    type Review {
        reviewId: ID!
        originalPaperId: ID!
        reviewerId: ID!
        rating: Int!
    }

    type Query {
        fetchProfile(email: String!): User
    }

    type Mutation {
        createUser(data: UserInput!) : User!
        loginUser(email: String!, password: String!): User
    }
`;