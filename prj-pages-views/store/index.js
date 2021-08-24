import Vuex from "vuex";
import axios from "axios";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPost: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPost = posts;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios
          .get(
            "https://nuxt-blog-4fd31-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json"
          )
          .then(res => {
            const postsArray = [];
            for (const key in res.data) {
              postsArray.push({ ...res.data[key], id: key });
            }
            vuexContext.commit("setPosts", postsArray);
          })
          .catch(e => {
            context.error(e);
          });
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPost;
      }
    }
  });
};

export default createStore;
