import {
    ApolloServer,
    gql
} from "apollo-server"

import mongoose from "mongoose";
import User from "./models/User";
import Post from "./models/Post";
import resolvers from "./resolver"
import bcrypt from "bcrypt"

// bcrypt.compare("1234", "$2b$10$UUhILXimukfEkUY7zp3BJ.EUTSumC7Ptj3c3..EhTckB/ntigrSm2", (err, same) => {
//     console.log(same === true)
// })

bcrypt.compare("1234", "$2b$10$UUhILXimuigrSm2", (err, same) => {
    console.log("faux")
    console.log(err, same)
})

import fs from "fs"
import path from "path"
const filepath = path.join(__dirname, "shema.gql")
const typeDefs = fs.readFileSync(filepath, "utf-8")

mongoose.connect('mongodb://localhost:27017/graph', {
    useNewUrlParser: true
});


const db = mongoose.connection;



db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
    console.log("connection effectué avec succes");
});






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