<template>
  <div id="app">
    <p>Hello, world!!</p>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <VueMarkdown :source="article">Article formatted markdown here</VueMarkdown>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import VueMarkdown from 'vue-markdown';

export default {
  name: 'App',
  components: {
    HelloWorld,
    VueMarkdown
  },
  data: function () {
    return {
      article: '# Hello world !???!!!'
    };
  },
  mounted: function () {
    if (window.location.pathname.startsWith('/blog/')) {
      const p = window.location.pathname.replace('/blog/', '/article/');
      fetch(p)
        .then(res => res.text())
        .then(text=> this.article = text)
        .catch(console.error);
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
