export default {
  namespaced: true,
  state: {
    todos: []
  },
  getters: {
    todos: state => state.todos
  },
  actions: {
    async initStore({ commit }) {
      const todos = await fetch("https://jsonplaceholder.typicode.com/todos/");
      commit("ADD_TODOS", await todos.json());
    },
    limit({ commit }) {
      commit("LIMIT_TODOS");
    }
  },
  mutations: {
    ADD_TODOS(state, todos) {
      console.log("Got todos", todos);
      state.todos = todos;
    },
    LIMIT_TODOS(state) {
      state.todos = state.todos.splice(0, 10);
    }
  }
};
