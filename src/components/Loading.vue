<template>
  <div>
    <p ref="loading" v-bind:class="{animating: !abort, aborted: abort}"><span class="letter" v-for="letter in 'Loading'" :key="'_' + letter">{{letter}}</span><span class="dots">...</span></p>
    <p class="fail" v-if="count > 0">Failed<span v-if="count > 1"> ({{ count }})</span></p>
    <p class="abort" v-if="abort">Aborted</p>
  </div>
</template>

<script>
export default {
  name: "Loading",
  props: {
    count: Number,
    abort: Boolean
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--- lang="sass"を使ったほうがいいかも -->
<style scoped>
p {
  font-size: 200%;
  margin: 0.3em auto;
  font-weight: bold;
  letter-spacing: 0.1em;
  font-family: "Poiret One", cursive;
}

p.aborted {
  animation: fade 0.7s ease 0s 1 forwards;
}

@keyframes fade {
  0% { opacity: 1; }
  100% { opacity: 0; }
}

p > .letter {
  display: inline-block;
}

.animating > .letter:nth-child(1) {
  transform-origin: 50% 50%;
  animation: bounding 8s ease 0.4s infinite;
}

.animating > .letter:nth-child(2) {
  transform-origin: 48% 62%;
  animation: bounding 8s ease 1.4s infinite;
}

.animating > .letter:nth-child(3) {
  transform-origin: 48% 62%;
  animation: bounding 8s ease 2.6s infinite;
}

.animating > .letter:nth-child(4) {
  transform-origin: 48% 62%;
  animation: bounding 8s ease 3.2s infinite;
}

.animating > .letter:nth-child(5) {
  transform-origin: 48% 62%;
  animation: bounding 8s ease 4.9s infinite;
}

.animating > .letter:nth-child(6) {
  transform-origin: 48% 62%;
  animation: bounding 8s ease 6.2s infinite;
}

.animating > .letter:nth-child(7) {
  transform-origin: 48% 62%;
  animation: bounding 8s ease 7.7s infinite;
}

@keyframes bounding {
	0% {transform: rotate(0deg);}
  10% {transform: rotate(360deg); }
  100% {transform: rotate(360deg); }
}

.fail {
  color: #cc0;
}

.abort {
  color: #700;
}

@media screen and (max-width: 60em) {
}
</style>
