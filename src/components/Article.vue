<template>
  <div class="article">
    <div class="article-body" v-if="src">
      <div class="article-body-left">
        <h1>目次</h1>
        <ol ref="articleIndex"></ol>
      </div>
      <VueMarkdown
        :source="article"
        class="markdown-body"
        :postrender="generateIndex"
        ref="articleBody"
      />
      <div class="article-body-right"></div>
    </div>
    <div id="article_list" v-else>
      <ul>
        <li v-for="item in list" :key="item.path">
          <p>
            <a v-on:click="$go(item.path.replace(/^\/article\//, '/?blog/'))">{{item.Title}}</a>
          </p>
          <p>
            <span>{{item.Date}}</span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";

export default {
  name: "Article",
  props: {
    src: String
  },
  components: {
    VueMarkdown
  },
  data: () => ({
    article: "",
    list: window.$data.articles,
    fetch_count: 0,
    loading: false
  }),
  methods: {
    generateIndex: function(source) {
      setTimeout(() => {
        const titles = this.$refs.articleBody.$el.querySelectorAll(
          "h1, h2, h3, h4, h5, h6"
        );

        let current = this.$refs.articleIndex;
        current.textContent = "";
        let level = 1;
        titles.forEach(node => {
          const l = parseInt(node.nodeName.substr(1));
          for (let i = 0; i < l - level; i++) {
            const ol = document.createElement("ol");
            current.lastChild.appendChild(ol);
            current = ol;
          }
          for (let i = 0; i < level - l; i++) {
            current = current.parentElement.parentElement;
          }
          level = l;

          const li = document.createElement("li");
          li.textContent = node.textContent;
          current.appendChild(li);
        });
      }, 0);
      return source;
    },
    getArticle: function() {
      this.loading = true;
      this.fetch_count++;
      if (this.fetch_count > 4) return;

      fetch(this.src)
        .then(res => res.text())
        .then(text => {
          this.article = text;
          this.loading = false;
          this.fetch_count = 0;
        })
        .catch(err => {
          this.getArticle();
          console.warn(err);
        });
    }
  },
  watch: {
    src: {
      immediate: true,
      handler: function() { this.getArticle(); }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.article-body {
  display: flex;
  justify-content: center;
  overflow: hidden;
  flex-wrap: wrap;

  font-family: "Kosugi Maru", sans-serif;
  text-align: initial;
}

.article-body-left,
.article-body-right {
  width: calc(50% - 24em);
  margin: 2em;
  min-width: 10em;
}

.markdown-body {
  max-width: calc(min(40em, 97%));
}

#article_list ul {
  list-style-type: none;
  padding: 0;
  max-width: 40em;
  margin: 1em auto;
}
#article_list li {
  padding: 0.8em;
}
#article_list li + li {
  border-top: solid 1px #e5e5e5;
}
#article_list p {
  margin: 0.5ex;
}
#article_list a {
  font-size: 120%;
  font-weight: bold;
  color: #111;
  cursor: pointer;
}
#article_list span {
  font-size: 90%;
  font-weight: bold;
  color: #aaa;
}

@media screen and (max-width: 60em) {
  .article-body-left,
  .article-body-right {
    display: none;
  }
}

.markdown-body >>> strong,
.markdown-body >>> em {
  margin: 0 0.2em;
}

.markdown-body >>> h1,
.markdown-body >>> h2,
.markdown-body >>> h3,
.markdown-body >>> h4,
.markdown-body >>> h5,
.markdown-body >>> h6 {
  border-left: 12px solid #fac;
  border-bottom: 1px solid #fcc;
  padding-left: 0.3em;
  border-radius: 9px 0 0 9px;
}

.markdown-body >>> p {
  text-indent: 0.5em;
}

.article-body-left > h1 {
  font-size: 100%;
}

.article-body-left > ol {
  font-size: 90%;
  color: #666;
  list-style-type: none !important;
  padding-left: 0 !important;
}
.article-body-left >>> li {
  margin: 0.5em 0;
}

.article-body-left >>> ol {
  padding-left: 1em;
  margin-bottom: 1em;
  list-style-type: circle;
}
.article-body-left > ol > li > ol {
  padding-left: 2em;
  list-style-type: decimal;
}
.article-body-left > ol > li > ol > li > ol {
  padding-left: 1em;
  list-style-type: lower-alpha;
}
</style>

