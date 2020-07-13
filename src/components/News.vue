<template>
  <div class="news-container">
    <div class="news" v-for="(item, index) in news" :key="`_news_` + index">
      <div class="date">
        <p>
          <span>{{item.date}}</span>
        </p>
      </div>
      <h1>{{item.title}}</h1>
      <p>{{item.description}}</p>
    </div>
  </div>
</template>

<script>
import news from "../assets/news.js";

export default {
  name: "News",
  props: {
    src: String
  },
  data: () => ({
    news,
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

.date {
  position: relative;
  left: -1em;
  top: -1em;
}

.date p {
  position: absolute;
  width: 20em;
  height: 10.3em;
  margin: 0;
  overflow: hidden;
  color: #f3f3f3;
  z-index: -10;
  direction: rtl;
  white-space: nowrap;
}

.date span {
  font-size: 3.8em;
}

h1 {
  text-align: left;
  margin: 0.15em;
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
    text-align: left;
  }

  .news h1 {
    display: inline;
  }

  .date {
    display: inline;
    position: static;
  }

  .date p {
    display: inline;
    position: static;
    margin: 0 1em;
    overflow: auto;
    color: #888;
    z-index: 0;
  }

  .date span {
    font-size: 1em;
  }
}
</style>
