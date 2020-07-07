<template>
  <div class="article">
    <VueMarkdown v-if="src" :source="article" />
    <ul v-else>
      <li><a onclick="window._move('/blog/test.md');">1</a></li>
      <li><a onclick="window._move('/blog/test2.md');">2</a></li>
    </ul>
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
  data: function() {
    return {
      article: ""
    };
  },
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
