<template>
  <div id="app">
    <p>Hello, world!!</p>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Article id="nn" src="/article/test.md" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Article from "./components/Article.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Article
  },
  mounted: function() {
    if (!window.__move) {
      window.addEventListener(
        "popstate",
        event => {
          console.log(event);
          
        },
        { once: false }
      );

      Object.defineProperty(window, "_move", {
        enumerable: false,
        writable: false,
        value: text => {
          history.pushState(undefined, "", text);
          const popStateEvent = new PopStateEvent("popstate", {});
          dispatchEvent(popStateEvent);
        }
      });
    }
  }
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
