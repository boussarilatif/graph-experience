import {
    gql
} from "apollo-boost";


/** get users posts */

export const GET_POSTS = gql `
    query {
        getPosts{
            _id,
            title
            description,
            _id
            createdBy {
                 username
                _id
                joinDate
                }
        }
    }
`