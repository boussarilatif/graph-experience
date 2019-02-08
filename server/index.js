import {
    ApolloServer,
    gql
} from "apollo-server"

import mongoose from "mongoose";
import User from "./models/User";
import Post from "./models/Post";



mongoose.connect('mongodb://localhost:27017/graph', {
    useNewUrlParser: true
});


const db = mongoose.connection;



db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
    console.log("success");
});


const books = [{
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J.K. Rowling',
    },
    {
        title: 'Jurassic Park',
        author: 'Michael Crichton',
    },
];

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql `
    # Comments in GraphQL are defined with the hash (#) symbol.
  
    # This "Book" type can be used in other type declarations.
    type Book {
      title: String
      author: String
    }
  
    # The "Query" type is the root of all GraphQL queries.
    # (A "Mutation" type will be covered later on.)
    type Query {
      books: [Book]
    }
  `;

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
    Query: {
        books: () => {
            console.log(books)
            return books

        },
    },
};


const server = new ApolloServer({
    resolvers,
    typeDefs,
    context: {
        User,
        Post
    }
})

server.listen().then(({
    url
}) => {
    console.log(`🚀  Server ready at ${url}`);
});