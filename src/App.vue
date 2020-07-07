<template>
  <div id="app">
    <a href="/"><img alt="Vue logo" src="./assets/logo.png" /></a>
    <ul>
      <li><a onclick="window._move('/activity');">Activity</a></li>
      <li><a onclick="window._move('/blog');">Blog</a></li>
      <li><a onclick="window._move('/contact');">Contact</a></li>
    </ul>
    <HelloWorld v-if="view == 'top'" msg="Welcome to Your Vue.js App" />
    <Article v-else-if="view == 'blog'" :src="articlePath" />
    <Error v-else message="Not found" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Article from "./components/Article.vue";
import Error from "./components/Error.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Article,
    Error
  },
  data: function() {
    return {
      view: "top",
      articlePath: '',
    };
  },
  mounted: function() {
    if (!window._move) {
      window.addEventListener(
        "popstate",
        () => {
          const [view, ...query] = window.location.pathname
            .split("/")
            .filter(x => x);

          console.log(view);
          console.log(query);
          if (view) {
            this.view = view;

            if (view == "blog") {
              if (query.length > 0) this.articlePath = `/article/${query.join("/")}`;
              else this.articlePath = '';
            }
          } else {
            this.view = "top";
          }
        },
        { once: false }
      );

      Object.defineProperty(window, "_move", {
        enumerable: false,
        writable: false,
        value: (url, title = '', state = undefined) => {
          history.pushState(state, title, url);
          dispatchEvent(new PopStateEvent("popstate", {}));
        }
      });
    }

    dispatchEvent(new PopStateEvent("popstate", {}));
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
