<template>
  <div>
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
.news {
  margin: 3em auto;
  padding: 1em;
  max-width: 40em;
  box-shadow: 3px 3px 7px 0px #ccc;
}
</style>
