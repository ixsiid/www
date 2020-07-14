<template>
  <div class="news-container">
    <a class="news" v-for="(item, index) in news" :key="`_news_` + index" :href="item.link">
        <div class="meta">
          <p class="date">
            <span>{{item.date}}</span>
          </p>
          <p class="tag" v-if="item.tags">
            <span
              v-for="tag in item.tags"
              :key="`_news_` + index + `_tag_` + tag"
              v-bind:class="'tag_' + tag"
            >{{tag}}</span>
          </p>
        </div>
        <h1>{{item.title}}</h1>
        <p>{{item.description}}</p>
    </a>
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
    news
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

  transition: background-color 0.2s linear;
}

.news:hover[href] {
  background-color: #f8f8f8;
}

.meta {
  position: relative;
  left: -1em;
  top: -1em;
}

.meta p {
  position: absolute;
  width: 20em;
  margin: 0;
  overflow: hidden;
  z-index: -10;
  direction: rtl;
  white-space: nowrap;
}

.meta .date {
  height: 10.3em;
  color: #f3f3f3;
}

.meta .date span {
  font-size: 3.8em;
}

.meta .tag {
  margin: 8.3em 0 0 0.5em;
  text-align: left;
}

.meta .tag span {
  font-size: 33%;

  display: inline-block;
  overflow: hidden;
  width: 2em;
  height: 2em;
  margin: 0 1em;
  border-radius: 50%;

  background: var(--color);
  color: var(--color);
}

.tag_aa {
  --color: red;
}

.tag_bb {
  --color: blue;
}

.meta .tag span + span {
  margin-left: 1em;
}

a {
  text-decoration: none;
  color: unset;
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
    padding: 1em 0.2em 0em 0.2em;
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
    font-size: 1.3em;
    display: inline;
  }

  .meta {
    display: inline;
    position: static;
  }

  .meta .date {
    display: inline;
    position: static;
    margin: 0 0.3em 0 0.1em;
    overflow: auto;
    color: #888;
    z-index: 0;
  }

  .meta .date span {
    font-size: 1em;
  }

  .meta .tag {
    display: none;
  }
}
</style>
