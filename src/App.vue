<template>
  <div id="app">
    <div id="title">
      <a id="logoA" href="/">
        <svg xmlns="http://www.w3.org/2000/svg"
          id="logo"
          width="150px"
          height="132px"
          viewBox="0 0 150 132">
          <g stroke="none">
              <path class="color fill" fill="#ffcd40" d="M 38.688268,3.157247 71.31324,48.25672 2.624966,127.63577 Z"/>
              <path class="color fill" fill="#93b6dd" d="M 79.86586,52.26577 9.841245,128.70485 147.48505,57.34389 Z"/>
              <path class="color fill" fill="#f0b4d3" d="M 117.01632,82.19995 95.63476,130.843 21.333833,129.23938 Z"/>
          </g>
        </svg>
      </a>
      <p style="overflow-x: hidden">
        <label><input type="checkbox" id="colorEdit" />Edit</label>
      </p>
    </div>
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
        s.top = document.querySelector('#title').getClientRects()[0].height;
        s.height = document.querySelector('#navi').getClientRects()[0].height;

        titleResize();
      }, {once: true, passive: true});

      const titleResize = () => {
        if (!s.target) return;
        const current = s.target.getClientRects()[0].top;

        const aw = document.body.clientWidth;
        const rate = ((s.top - s.height) * (current / s.top) + s.height) / s.top;

        const current_width = document.querySelector('#title').getClientRects()[0].width + 'px';
        const target_width = (aw * rate) + 'px';

        const target = document.querySelector('#title');
        target.animate([
          { width: current_width },
          { width: target_width }
        ], {duration: 40, iterations: 1});
        target.style.width = target_width;
      };

      window.addEventListener('scroll', titleResize, {once: false, passive: true});
      window.addEventListener('resize', titleResize, {once: false, passive: true});

      const colorPicker = document.createElement('input');
      colorPicker.setAttribute('type', 'color');
      colorPicker.style.position = 'absolute';
      colorPicker.style.top = '0px';
      colorPicker.style.left = '0px';
      colorPicker.style.zIndex = '200';
      colorPicker.style.display = 'none';
      colorPicker.target = undefined;

      colorPicker.addEventListener('input', () => {
        if (!colorPicker.target) return;

        [].filter.call(colorPicker.target.classList, x => ['fill', 'stroke'].indexOf(x) >= 0)
                 .forEach(attr => colorPicker.target.setAttribute(attr, colorPicker.value));
      }, {once: false, passive: true});

      colorPicker.addEventListener('blur', () => {
        colorPicker.style.display = 'none';
        console.log('blur');
      }, {once: false, passive: true});

      colorPicker.addEventListener('change', () => {
        colorPicker.style.display = 'none';
        console.log('change');
      }, {once: false, passive: true});
      
      document.body.appendChild(colorPicker);

      document.querySelectorAll('.color').forEach(element => {
        element.addEventListener('click', mouseEvent => {
          if(!document.querySelector('#colorEdit').checked) return;

          colorPicker.target = element;
          colorPicker.style.top = mouseEvent.pageY + 20 + 'px';
          colorPicker.style.left = mouseEvent.pageX + 20 + 'px';
          colorPicker.style.display = 'block';
          colorPicker.value = element.getAttribute('fill') || element.getAttribute('stroke');
          colorPicker.focus();
          setTimeout(() => colorPicker.click(), 10);
        }, {once: false, passive: true});
      });

      document.querySelector('#colorEdit').addEventListener('change', event => {
        const a = document.querySelector('#logoA');
        if (event.target.checked) {
          a.removeAttribute('href');
        } else {
          a.setAttribute('href', '/');
        }
      }, {once: false, passive: true});
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

#title, #navi {
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;
  margin: 0;
  position: sticky;
  top: 0;
}

#navi {
  background-color: #93b6dd;
  color: #333;
  box-shadow: 0 2px 6px 0 #58a;
}

#navi li:hover {
  color: #000;
}

#navi li {
  list-style-type: none;
  font-weight: bold;
  text-transform: uppercase;

  margin: 0.7em 5ex;
  padding: 0.3em 0;

  cursor: pointer;
}
</style>
