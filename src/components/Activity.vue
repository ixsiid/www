<template>
  <div>
    <Loading v-if="loading" :count="fetch_count" :abort="fetch_count > 4" />
    <VueMarkdown v-else :source="source" />
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";
import Loading from './Loading.vue';

export default {
  name: "Article",
  components: {
    Loading,
    VueMarkdown
  },
  props: {
    src: String
  },
  data: () => ({
    source: "",
    fetch_count: 0,
    loading: false
  }),
  methods: {
    getArticle: function() {
      this.loading = true;
      this.fetch_count++;
      if (this.fetch_count > 4) return;

      fetch(this.src)
        .then(res => res.text())
        .then(text => {
          this.source = text;
          this.loading = false;
          this.fetch_count = 0;
        })
        .catch(err => {
          this.getArticle();
          console.warn(err);
        });
    }
  },
  mounted: function() { this.getArticle(); }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
>>> * {
  font-family: "Kosugi Maru", sans-serif;
}

>>> a {
  text-decoration: none;
  color: black;
}

>>> h1 {
  border-bottom: 1px solid #ccc;
  max-width: 90%;
  margin: 0.3ex auto;
  color: #777;
  font-size: 1.5em;
  font-family: "Poiret One", cursive;
}

>>> h2,
>>> h3,
>>> h4,
>>> h5,
>>> h6 {
  font-family: "Comfortaa", cursive;
}

>>> * + h1 {
  margin-top: 2em;
}

>>> h2 {
  font-size: 1.3em;
}

>>> a:after {
  content: url(/image/Link_16x.svg);
  display: inline-block;
  width: 1em;
  height: 1em;
  vertical-align: bottom;
  margin-left: 0.3em;
}

>>> ul {
  list-style: none;
  padding: 0;
}
</style>
