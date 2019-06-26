<template lang="pug">
    header
        v-toolbar(app='')
            v-toolbar-title.headline.text-uppercase
                span Vuetify
                router-link(to="/") Home
                router-link(to="/about") About
            v-spacer
            v-btn(flat='', href='https://github.com/vuetifyjs/vuetify/releases/latest', target='_blank')
                span.mr-2 Latest Release
</template>

<style lang="less" scoped>
a {
  color: black;
  margin: 0 10px;
}
</style>
