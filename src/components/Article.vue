<template>
  <div class="article">
    <VueMarkdown v-if="src" :source="article" />
    <div id="article_list" v-else>
      <ul>
        <li v-for="item in list" :key="item.path">
          <p><a v-on:click="$go(item.path.replace(/^\/article\//, '/?blog/'))">{{item.Title}}</a></p>
          <p><span>{{item.Date}}</span></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";

export default {
  name: 'Article',
  props: {
    src: String
  },
  components: {
    VueMarkdown
  },
  data: () => ({
    article: "",
    list: window.$data.articles,
  }),
  watch: {
    src: {
      immediate: true,
      handler: function() {
        fetch(this.src)
          .then(res => res.text())
          .then(text => (this.article = text))
          .catch(console.error);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
</style>
