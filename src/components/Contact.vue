<template>
  <div>
    <div class="profile">
      <p>Name</p>
      <p>~チルダ</p>
      <p>Web</p>
      <p>https://www.halzion.net</p>
    </div>
    <ul class="sites">
      <li><a href="https://twitter.com/ixsiid"><img src="/image/Twitter_Social_Icon_Square_Color.png" alt="Twitter" /></a></li>
      <li><a href="https://github.com/ixsiid"><img src="/image/GitHub-Mark-120px-plus.png" alt="GitHub" /></a></li>
      <li><a href="https://qiita.com/ixsiid"><img src="/image/qiita_favicon.png" alt="Qiita" /></a></li>
      <li><a href="https://www.halzion.net"><img src="/favicon.svg" alt="" />ニコニコ</a></li>
      <li><a href="https://www.halzion.net"><img src="/favicon.svg" alt="" />はてブロ</a></li>
      <li><a href="https://www.halzion.net"><img src="/favicon.svg" alt="" />グラブル</a></li>
      <li><a href="https://www.halzion.net"><img src="/favicon.svg" alt="" />Steam</a></li>
      <li><a href="https://www.halzion.net"><img src="/favicon.svg" alt="" />PSオンライン</a></li>
      <li><a href="https://www.halzion.net"><img src="/favicon.svg" alt="" />ニンテンドーオンライン</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Contact"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.profile {
  display: flex;
  flex-wrap: wrap;
  margin: 2em auto;
  justify-content: center;
}

.profile p {
  font-size: 133%;
  margin: 0.4em 0;
}

.profile p:nth-child(odd) {
  width: 20%;
  padding: 0;
  text-align: right;
}

.profile p:nth-child(even) {
  overflow: hidden;
  text-overflow: ellipsis;
  box-sizing: border-box;
  width: 61%;
  padding: 0 0 0 2em;
  text-align: left;
}

.sites {
  display: flex;
  list-style: none;
  margin: 2em 0 0 0;
  justify-content: center;
  padding: 0;
}

.sites li {
  width: 4em;
  height: 4em;
  margin: 1.3em;
}

.sites img {
  width: 100%;
  border-radius: 50%;
}
</style>
