<template>
  <div id="app">
    <div id="title">
      <a id="logoA" href="/">
        <Icon id="logo" />
        <!--svg xmlns="http://www.w3.org/2000/svg"
          id="logo"
          width="150px"
          height="132px"
          viewBox="0 0 150 132">
          <g stroke="none">
              <path class="color fill" fill="#ffcd40" d="M 38.688268,3.157247 71.31324,48.25672 2.624966,127.63577 Z"/>
              <path class="color fill" fill="#93b6dd" d="M 79.86586,52.26577 9.841245,128.70485 147.48505,57.34389 Z"/>
              <path class="color fill" fill="#f0b4d3" d="M 117.01632,82.19995 95.63476,130.843 21.333833,129.23938 Z"/>
          </g>
        </svg-->
      </a>
      <div id="title_info">
        <p id="title_message">Halzion.net</p>
        <p>
          <label>
            <input type="checkbox" id="colorEdit" />Edit
          </label>
          <button v-on:click="save_logo">Save</button>
        </p>
      </div>
    </div>
    <ul id="navi">
      <li>
        <a onclick="window._move('?activity');">Activity</a>
      </li>
      <li>
        <a onclick="window._move('?blog');">Blog</a>
      </li>
      <li>
        <a onclick="window._move('?contact');">Contact</a>
      </li>
    </ul>

    <News v-if="view == 'top'" src="/news.md" />
    <Article v-else-if="view == 'blog'" :src="articlePath" />
    <Error v-else message="Not found" />
  </div>
</template>

<script>
import Article from "./components/Article.vue";
import Error from "./components/Error.vue";
import News from "./components/News.vue";
import Icon from "./components/Icon.vue";

export default {
  name: "App",
  components: {
    Icon,
    News,
    Article,
    Error
  },
  data: function() {
    return {
      view: "top",
      articlePath: ""
    };
  },
  methods: {
    save_logo: () => {
      const canvas = document.createElement("canvas");
      canvas.setAttribute("width", 512);
      canvas.setAttribute("height", 512);
      const context = canvas.getContext("2d");

      const a = document.createElement("a");

      const image = new Image();
      image.addEventListener(
        "load",
        () => {
          context.drawImage(image, 0, 0);
          a.setAttribute("href", canvas.toDataURL("image/png"));
          a.setAttribute("download", "logo.png");
          a.click();
        },
        { once: true }
      );
      image.setAttribute(
        "src",
        "data:image/svg+xml;charset=utf-8;base64," +
          btoa(
            unescape(
              encodeURIComponent(
                new XMLSerializer().serializeToString(
                  document.querySelector("#logo")
                )
              )
            )
          )
      );
    }
  },
  mounted: function() {
    if (!window._move) {
      window.addEventListener(
        "popstate",
        () => {
          const [view, ...query] = window.location.search
            .split("/")
            .map((x, i) => (i == 0 ? x.substr(1) : x))
            .filter(x => x);

          if (view) {
            this.view = view;

            if (view == "blog") {
              if (query.length > 0)
                this.articlePath = `/article/${query.join("/")}`;
              else this.articlePath = "";
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
        value: (url, title = "", state = undefined) => {
          history.pushState(state, title, url);
          dispatchEvent(new PopStateEvent("popstate", {}));
        }
      });

      const s = {};
      window.addEventListener(
        "load",
        () => {
          s.target = document.querySelector("#navi");
          s.top = document.querySelector("#title").getClientRects()[0].height;
          s.height = document.querySelector("#navi").getClientRects()[0].height;
          
          s.offsetX = document.querySelector('#title_info').getClientRects()[0].width;

          s.svg = {};
          s.svg.target = document.querySelector("#logo");
          s.svg.rect = s.svg.target.getClientRects()[0];
          s.svg.width = s.svg.rect.width;
          s.svg.height = s.svg.rect.height;

          document.querySelector("#title").style.height = s.top + "px";

          titleResize();
        },
        { once: true, passive: true }
      );

      const titleResize = () => {
        if (!s.target) return;
        const current = s.target.getClientRects()[0].top;

        const aw = document.body.clientWidth;
        const rate_h =
          ((s.top - s.height) * (current / s.top) + s.height) / s.top;
        const rate_w = 1 - (1 - current / s.top) * (1 - 160 / aw);
        const rate = Math.min(rate_h, rate_w);

        const current_width =
          document.querySelector("#title").getClientRects()[0].width + "px";
        const target_width = Math.min(document.body.clientWidth, aw * rate + s.offsetX) + "px";

        const target = document.querySelector("#title");
        target.animate([{ width: current_width }, { width: target_width }], {
          duration: 40,
          iterations: 1
        });
        target.style.width = target_width;

        s.svg.target.style.width = rate_h * s.svg.width + "px";
        s.svg.target.style.height = rate_h * s.svg.height + "px";

        document.querySelector("#title_info").style.opacity = Math.max(
          (rate - 0.8) * 5,
          0
        );
      };

      window.addEventListener("scroll", titleResize, {
        once: false,
        passive: true
      });
      window.addEventListener("resize", titleResize, {
        once: false,
        passive: true
      });

      const colorPicker = document.createElement("input");
      colorPicker.setAttribute("type", "color");
      colorPicker.style.position = "absolute";
      colorPicker.style.top = "0px";
      colorPicker.style.left = "0px";
      colorPicker.style.zIndex = "200";
      colorPicker.style.display = "none";
      colorPicker.target = undefined;

      colorPicker.addEventListener(
        "input",
        () => {
          if (!colorPicker.target) return;

          colorPicker.target.setAttribute("fill", colorPicker.value);
        },
        { once: false, passive: true }
      );

      colorPicker.addEventListener(
        "blur",
        () => {
          colorPicker.style.display = "none";
          console.log("blur");
        },
        { once: false, passive: true }
      );

      colorPicker.addEventListener(
        "change",
        () => {
          colorPicker.style.display = "none";
          console.log("change");
        },
        { once: false, passive: true }
      );

      document.body.appendChild(colorPicker);

      document.querySelectorAll(".color").forEach(element => {
        element.addEventListener(
          "click",
          mouseEvent => {
            if (!document.querySelector("#colorEdit").checked) return;

            colorPicker.target = element;
            colorPicker.style.top = mouseEvent.pageY + 20 + "px";
            colorPicker.style.left = mouseEvent.pageX + 20 + "px";
            colorPicker.style.display = "block";
            colorPicker.value =
              element.getAttribute("fill") ||
              element.parentElement.getAttribute("fill") ||
              element.parentElement.parentElement.getAttribute("fill");
            colorPicker.focus();
            setTimeout(() => colorPicker.click(), 10);
          },
          { once: false, passive: true }
        );
      });

      document.querySelector("#colorEdit").addEventListener(
        "change",
        event => {
          const a = document.querySelector("#logoA");
          if (event.target.checked) {
            a.removeAttribute("href");
          } else {
            a.setAttribute("href", "/");
          }
        },
        { once: false, passive: true }
      );
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

  #title_info label, #title_info button {
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

  #title_info label, #title_info button {
    display: none;
  }
}
</style>
