const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String
    favoriteMovies: [Movie]
  }

  type Movie {
    movieId: ID!
    movieTitle: String!
    movieImage: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveMovie(movieId: ID!, movieTitle: String!, movieImage: String!): User
    removeMovie(movieId: ID!): User

  }
`;

module.exports = typeDefs;