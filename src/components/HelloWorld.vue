<template lang="pug">
  v-container
    v-layout(text-xs-center='' wrap='')
      v-flex(xs12='')
        v-img.my-3(:src="require('../assets/logo.svg')" contain='' height='200')
      v-flex(mb-4='')
        h1.display-2.font-weight-bold.mb-3
          | Welcome to {{"vuetify" | capitalize}}
        div: button(v-on:click="limit") Limit Todos
        div(v-for="todo in todos")
          | {{todo.title}}
       

</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters("todo", ["todos"])
  },
  methods: {
    ...mapActions("todo", ["limit"])
  },
  data: () => ({
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader"
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify"
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify"
      }
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com"
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com"
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuetifyjs.com"
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs"
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify"
      }
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer"
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/layout/pre-defined"
      },
      {
        text: "Frequently Asked Questions",
        href: "https://vuetifyjs.com/getting-started/frequently-asked-questions"
      }
    ]
  })
};
</script>

<style>
button{
  background: #222;
  color: white;
  padding: 10px;
}
</style>
