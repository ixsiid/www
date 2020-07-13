<template>
  <svg
    viewBox="-240.0 -240.0 480.0 480.0"
    stroke="none"
    fill="none"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <mask id="outer_orbit">
        <circle cx="0" cy="0" r="203" fill="#ffffff" />
        <circle cx="0" cy="0" r="179" fill="#000000" />
        <circle cx="0" cy="187.5" r="34.8" fill="#000000" />
        <circle cx="0" cy="-187.5" r="34.8" fill="#000000" />
      </mask>
      <mask id="inner_orbit">
        <circle cx="0" cy="0" r="142.5" fill="#ffffff" />
        <circle cx="0" cy="0" r="118.5" fill="#000000" />
        <circle transform="rotate(0)" cx="0" cy="-133.8" r="34.8" fill="#000000" />
        <circle transform="rotate(72)" cx="0" cy="-133.8" r="34.8" fill="#000000" />
        <circle transform="rotate(144)" cx="0" cy="-133.8" r="34.8" fill="#000000" />
        <circle transform="rotate(216)" cx="0" cy="-133.8" r="34.8" fill="#000000" />
        <circle transform="rotate(288)" cx="0" cy="-133.8" r="34.8" fill="#000000" />
      </mask>
      <mask id="positron_bottom">
        <rect x="-240" y="-240" width="480" height="480" fill="#ffffff" />
        <circle transform="rotate(0)" cx="0" cy="-57" r="54" fill="#000000" />
        <circle transform="rotate(120)" cx="0" cy="-57" r="54" fill="#000000" />
        <circle transform="rotate(240)" cx="0" cy="-57" r="54" fill="#000000" />
        <circle cx="0" cy="0" r="54" fill="#000000" />
      </mask>
      <mask id="positron_middle">
        <rect x="-240" y="-240" width="480" height="480" fill="#ffffff" />
        <circle cx="0" cy="0" r="54" fill="#000000" />
      </mask>
    </defs>

    <rect
      fill="#3d85c6"
      x="-240"
      y="-240"
      width="240"
      height="480"
      mask="url(#outer_orbit)"
      class="color"
    />
    <rect
      fill="#3d85c6"
      x="0"
      y="-240"
      width="240"
      height="480"
      mask="url(#outer_orbit)"
      class="color"
    />
    <circle
      fill="#3d85c6"
      cx="0"
      cy="0"
      r="145"
      mask="url(#inner_orbit)"
      class="color"
    />
    <g fill="#3d85c6">
      <circle transform="rotate(0)" cx="0" cy="-133.8" r="22.8" class="color" />
      <circle transform="rotate(72)" cx="0" cy="-133.8" r="22.8" class="color" />
      <circle transform="rotate(144)" cx="0" cy="-133.8" r="22.8" class="color" />
      <circle transform="rotate(216)" cx="0" cy="-133.8" r="22.8" class="color" />
      <circle transform="rotate(288)" cx="0" cy="-133.8" r="22.8" class="color" />
    </g>
    <g fill="#e69138">
      <g mask="url(#positron_bottom)">
        <circle transform="rotate(60)" cx="0" cy="-57" r="38" class="color" />
        <circle transform="rotate(180)" cx="0" cy="-57" r="38" class="color" />
        <circle transform="rotate(300)" cx="0" cy="-57" r="38" class="color" />
      </g>
      <g mask="url(#positron_middle)">
        <circle transform="rotate(0)" cx="0" cy="-57" r="38" class="color" />
        <circle transform="rotate(120)" cx="0" cy="-57" r="38" class="color" />
        <circle transform="rotate(240)" cx="0" cy="-57" r="38" class="color" />
      </g>

      <circle cx="0" cy="0" r="38" class="color" />
    </g>
  </svg>
</template>

<script>
export default {
  name: "Icon",
  data: () => ({}),
  mounted: function() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media screen and (max-width: 60em) {
}
</style>
