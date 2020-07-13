<template>
  <div class="news-container">
    <div class="news" v-for="(item, index) in items" :key="`news_` + index">
      <VueMarkdown :source="item" />
    </div>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";

export default {
  name: "News",
  props: {
    src: String
  },
  components: {
    VueMarkdown
  },
  data: () => ({
    items: []
  }),
  mounted: function() {
    fetch(this.src)
      .then(res => res.text())
      .then(
        text =>
          (this.items = text
            .split(/^# /m)
            .filter(x => x)
            .map(x => "# " + x))
      )
      .catch(console.error);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.news-container {
  margin: 0em 4.5em;
}

.news {
  display: inline-block;
  overflow: hidden;
  width: 18em;
  height: 8.3em;
  margin: 1.3em 1em;
  padding: 1em;
  max-width: 40em;
  box-shadow: 3px 3px 7px 0px #ccc;
}

@media screen and (max-width: 60em) {
  .news {
    margin: 0;
    width: calc(100% - 1em);
    max-width: unset;
    height: unset;
    padding: 0.2em 0.5em;
    box-shadow: none;
  }

  .news + .news {
    border-top: 1px solid #ccc;
  }

  .news-container {
    margin: 0em 1em;
  }
}
</style>
