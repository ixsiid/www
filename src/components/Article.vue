<template>
  <div class="article">
    <VueMarkdown v-if="src" :source="article" />
    <ul v-else>
      <li v-for="item in list" :key="item.path">
        <a :onclick="'window._move(`' + item.path.replace(/^\/article\//, '/?blog/') + '`);'">{{item.path}}</a>
      </li>
    </ul>
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
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
