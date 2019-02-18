import Vue from 'vue';
import Vuex from 'vuex';
import {
    GET_POSTS
} from './queries'
import {
    defaultClient as ApolloClient
} from "./main";
import {
    gql
} from "apollo-boost";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        key: "",
        posts: ""
    },

    getters: {
        posts: state => state.posts
    },

    mutations: {
        setPosts: (state, playload) => {
            state.posts = playload
        }
    },

    actions: {
        getPosts: async ({
            commit
        }) => {
            try {
                let response = await ApolloClient.query({
                    query: GET_POSTS
                })
                // console.log()
                commit("setPosts", response.data.getPosts)
            } catch (error) {
                console.log(error)
            }
        }
    }
});