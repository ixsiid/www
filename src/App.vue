<template>
  <div id="app">
    <div id="logo"><a href="/"><img alt="Vue logo" src="./assets/logo.png" /></a></div>
    <ul id="navi">
      <li><a onclick="window._move('?activity');">Activity</a></li>
      <li><a onclick="window._move('?blog');">Blog</a></li>
      <li><a onclick="window._move('?contact');">Contact</a></li>
    </ul>
    <HelloWorld v-if="view == 'top'" msg="Welcome to Your Vue.js App" />
    <HelloWorld v-if="view == 'top'" msg="Welcome to Your Vue.js App" />
    <HelloWorld v-if="view == 'top'" msg="Welcome to Your Vue.js App" />
    <HelloWorld v-if="view == 'top'" msg="Welcome to Your Vue.js App" />
    <HelloWorld v-if="view == 'top'" msg="Welcome to Your Vue.js App" />
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
          const [view, ...query] = window.location.search
            .split("/")
            .map((x, i) => i == 0 ? x.substr(1) : x)
            .filter(x => x);

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
        { once: false, passive: true }
      );

      Object.defineProperty(window, "_move", {
        enumerable: false,
        writable: false,
        value: (url, title = '', state = undefined) => {
          history.pushState(state, title, url);
          dispatchEvent(new PopStateEvent("popstate", {}));
        }
      });

      const s = {};
      window.addEventListener('load', () => {
        s.target = document.querySelector('#navi');
        s.top = document.querySelector('#logo').getClientRects()[0].height;
        s.height = document.querySelector('#navi').getClientRects()[0].height;

        logoResize();
      }, {once: true, passive: true});

      const logoResize = () => {
        if (!s.target) return;
        const current = s.target.getClientRects()[0].top;
        console.log(`Change: ${s.top} -> ${current} : ${current / s.top}`);
        const aw = document.body.clientWidth;
        document.querySelector('#logo').style.width = (aw * ((s.top - s.height) * (current / s.top) + s.height) / s.top) + 'px';
      };

      window.addEventListener('scroll', logoResize, {once: false, passive: true});
      window.addEventListener('resize', logoResize, {once: false, passive: true});

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
}

body {
  margin: 0;
}

#logo {
  z-index: 100;
}

#logo, #navi {
  padding: 0;
  margin: 0;
  position: sticky;
  top: 0;
}

#navi {
  background-color: #e5e5e5;
}

#navi, #navi li {
  padding: 1em 0;
}

#navi li {
  display: inline;
  list-style-type: none;
  font-weight: bold;

  margin: 0 5ex;
}


</style>
