<template>
  <div id="activity">
    <VueMarkdown :source="source" />
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";

export default {
  name: 'Article',
  props: {
    src: String,
  },
  data : () => ({
    source: '# Loading',
  }),
  components: {
    VueMarkdown
  },
  mounted: function () {
    fetch(this.src)
    .then(res => res.text())
    .then(text => this.source = text)
    .catch(console.error);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#activity * {
  font-family: 'Kosugi Maru', sans-serif;
}

#activity a {
  text-decoration: none;
  color: black;
}

#activity h1 {
  border-bottom: 1px solid #ccc;
  max-width: 90%;
  margin: 0.3ex auto;
  color: #777;
  font-size: 1.5em;
  font-family: 'Poiret One', cursive;
}

#activity h2,
#activity h3,
#activity h4,
#activity h5,
#activity h6 {
  font-family: 'Comfortaa', cursive;
}

#activity * + h1 {
  margin-top: 2em;
}

#activity h2 {
  font-size: 1.3em;
}

#activity a:after {
  content: url(/image/Link_16x.svg);
  display: inline-block;
  width: 1em;
  height: 1em;
  vertical-align: bottom;
  margin-left: 0.3em;
}

#activity ul {
  list-style: none;
  padding: 0;
}
</style>
