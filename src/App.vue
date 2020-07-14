<template>
  <div id="app">
    <div id="title">
      <a id="logoA" :href="isColorEdit ? undefined : '/'">
        <Icon id="logo" :colorChangeable="isColorEdit" ref="logo" />
      </a>
      <div id="title_info">
        <p id="title_message">Halzion.net</p>
        <p>
          <label>
            <input type="checkbox" id="colorEdit" v-model="isColorEdit" />Edit
          </label>
          <button v-on:click="saveLogo">Save</button>
        </p>
      </div>
    </div>
    <ul id="navi">
      <li>
        <a v-on:click="$go('?activity')">Activity</a>
      </li>
      <li>
        <a v-on:click="$go('?blog');">Blog</a>
      </li>
      <li>
        <a v-on:click="$go('?contact');">Contact</a>
      </li>
    </ul>

    <News v-if="view == 'top'" src="/news.md" />
    <Activity v-else-if="view == 'activity'" src="/activity/index.md" />
    <Article v-else-if="view == 'blog'" :src="articlePath" />
    <Contact v-else-if="view == 'contact'" />
    <Error v-else message="Not found" />
  </div>
</template>

<script>
import Article from "./components/Article.vue";
import Error from "./components/Error.vue";
import News from "./components/News.vue";
import Icon from "./components/Icon.vue";
import Activity from './components/Activity.vue';
import Contact from './components/Contact.vue';

export default {
  name: "App",
  components: {
    Contact,
    Activity,
    Icon,
    News,
    Article,
    Error
  },
  data: function() {
    return {
      view: "top",
      articlePath: "",
      isColorEdit: false,

      scrollParam: {}
    };
  },
  methods: {
    saveLogo: function() {
      this.$refs.logo.save();
    },

    windowLoad: function() {
      this.scrollParam.target = document.querySelector("#navi");
      this.scrollParam.top = document
        .querySelector("#title")
        .getClientRects()[0].height;
      this.scrollParam.height = document
        .querySelector("#navi")
        .getClientRects()[0].height;

      this.scrollParam.offsetX = document
        .querySelector("#title_info")
        .getClientRects()[0].width;

      this.scrollParam.svg = {};
      this.scrollParam.svg.target = document.querySelector("#logo");
      const rect = this.scrollParam.svg.target.getClientRects()[0];
      this.scrollParam.svg.width = rect.width;
      this.scrollParam.svg.height = rect.height;

      document.querySelector("#title").style.height =
        this.scrollParam.top + "px";

      this.titleResize();
    },

    titleResize: function() {
      if (!this.scrollParam.target) return;
      const current = this.scrollParam.target.getClientRects()[0].top;

      const aw = document.body.clientWidth;
      const rate_h =
        ((this.scrollParam.top - this.scrollParam.height) *
          (current / this.scrollParam.top) +
          this.scrollParam.height) /
        this.scrollParam.top;
      const rate_w = 1 - (1 - current / this.scrollParam.top) * (1 - 160 / aw);
      const rate = Math.min(rate_h, rate_w);

      const current_width =
        document.querySelector("#title").getClientRects()[0].width + "px";
      const target_width =
        Math.min(
          document.body.clientWidth,
          aw * rate + this.scrollParam.offsetX
        ) + "px";

      const target = document.querySelector("#title");
      target.animate([{ width: current_width }, { width: target_width }], {
        duration: 40,
        iterations: 1
      });
      target.style.width = target_width;

      this.scrollParam.svg.target.style.width =
        rate_h * this.scrollParam.svg.width + "px";
      this.scrollParam.svg.target.style.height =
        rate_h * this.scrollParam.svg.height + "px";

      const opacity = Math.max((rate - 0.8) * 5, 0);
      document.querySelector("#title_info").style.opacity = opacity;
      document.querySelector('#title').style.pointerEvents = opacity > 0.6 ? 'auto' : 'none';
    }
  },
  mounted: function() {
    this.$queryCallback.push((view, query) => {
      this.view = view || "top";
      if (view === "blog") {
        this.articlePath =
          query.length == 0 ? "" : `/article/${query.join("/")}`;
      }
    });

    window.addEventListener("load", this.windowLoad, {
      once: true,
      passive: true
    });
    window.addEventListener("scroll", this.titleResize, {
      once: false,
      passive: true
    });
    window.addEventListener("resize", this.titleResize, {
      once: false,
      passive: true
    });

    dispatchEvent(new PopStateEvent("popstate", {}));
  },
  destroyed: function() {
    window.removeEventListener("load", this.windowLoad, {
      once: true,
      passive: true
    });
    window.removeEventListener("scroll", this.titleResize, {
      once: false,
      passive: true
    });
    window.removeEventListener("resize", this.titleResize, {
      once: false,
      passive: true
    });
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

#title {
  z-index: 100;
  overflow-x: hidden;
}

#title,
#navi {
  display: flex;
  justify-content: center;

  padding: 0;
  margin: 0;
  position: sticky;
  top: 0;
}

#logoA {
  filter: drop-shadow(2px 2px 3px #ccc);
}

#navi {
  align-items: center;

  background-color: #93b6dd;
  color: #333;
  box-shadow: 0 2px 6px 0 #82b2ef;
  margin-bottom: 2.5em;
}

#navi li:hover {
  color: #000;
}

#navi li {
  list-style-type: none;
  font-weight: bold;
  text-transform: uppercase;

  margin: 0.7em 2.3ex;
  padding: 0.3em 0;

  cursor: pointer;
}

#logo {
  width: 320px;
  height: 320px;
}

#title_message {
  font-family: "Baloo Tamma 2", cursive;
  font-size: 200%;
}

#title_info {
  display: flex;
  flex-direction: column;
}

#title_message {
  flex: 1;

  display: flex;
  align-items: center;
}

#title_info input {
  margin-right: 0.5em;
}

#title_info label {
  font-weight: bold;
  cursor: pointer;
  font-size: 100%;
}

#title_info button {
  font-size: 100%;
  margin: 0.1em 2em;
  font-weight: bold;
  padding: 0.2ex;
  border: none;
  background-color: unset;
  cursor: pointer;
}

@media screen and (max-width: 400px) {
  #logo {
    width: 240px;
    height: 240px;
  }

  #title_message {
    writing-mode: vertical-lr;
    margin: 1em 0;
  }

  #title_info label,
  #title_info button {
    display: none;
  }
}

@media screen and (max-width: 300px) {
  #logo {
    width: 180px;
    height: 180px;
  }

  #title_message {
    writing-mode: vertical-lr;
    margin: 1em 0;
  }

  #title_info label,
  #title_info button {
    display: none;
  }
}
</style>
