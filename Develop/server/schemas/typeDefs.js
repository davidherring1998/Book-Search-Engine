const { gql } = require('apollo-server-express');

const typeDefs = gql `
type User {
    _id: ID    
    username: String
    email: String
    bookCount: Int
}

type Book {
    bookId: String
    authors: [authors]
    description: String
    title: String
    image:
    link: 
}

type Auth {
    token: 
    user: [User!]
}

type Query {
    me: [User]
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook()
    removeBook(bookId: ID!): Book
}
`

module.exports = typeDefs;