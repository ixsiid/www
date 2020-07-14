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
    <circle fill="#3d85c6" cx="0" cy="0" r="145" mask="url(#inner_orbit)" class="color" />
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
  props: {
    colorChangeable: Boolean
  },
  data: () => ({}),
  mounted: function() {
    const colorPicker = document.createElement("input");
    colorPicker.setAttribute("type", "color");
    colorPicker.style.position = "absolute";
    colorPicker.style.top = "0px";
    colorPicker.style.left = "0px";
    colorPicker.style.zIndex = "200";
    colorPicker.style.display = "none";
    colorPicker.target = undefined;

    colorPicker.addEventListener(
      "input",
      () => {
        if (!colorPicker.target) return;

        colorPicker.target.setAttribute("fill", colorPicker.value);
      },
      { once: false, passive: true }
    );

    colorPicker.addEventListener(
      "blur",
      () => {
        colorPicker.style.display = "none";
      },
      { once: false, passive: true }
    );

    colorPicker.addEventListener(
      "change",
      () => {
        colorPicker.style.display = "none";
      },
      { once: false, passive: true }
    );

    document.body.appendChild(colorPicker);

    document.querySelectorAll(".color").forEach(element => {
      element.addEventListener(
        "click",
        mouseEvent => {
          if (!this.colorChangeable) return;

          colorPicker.target = element;
          colorPicker.style.top = mouseEvent.pageY + 20 + "px";
          colorPicker.style.left = mouseEvent.pageX + 20 + "px";
          colorPicker.style.display = "block";
          colorPicker.value =
            element.getAttribute("fill") ||
            element.parentElement.getAttribute("fill") ||
            element.parentElement.parentElement.getAttribute("fill");
          colorPicker.focus();
          setTimeout(() => colorPicker.click(), 10);
        },
        { once: false, passive: true }
      );
    });
  },
  methods: {
    save: function() {
      const canvas = document.createElement("canvas");
      canvas.setAttribute("width", 512);
      canvas.setAttribute("height", 512);
      const context = canvas.getContext("2d");

      const a = document.createElement("a");

      const image = new Image();
      image.addEventListener(
        "load",
        () => {
          context.drawImage(image, 0, 0);
          a.setAttribute("href", canvas.toDataURL("image/png"));
          a.setAttribute("download", "halzion.png");
          a.click();
        },
        { once: true }
      );
      image.setAttribute(
        "src",
        "data:image/svg+xml;charset=utf-8;base64," +
          btoa(
            unescape(
              encodeURIComponent(
                new XMLSerializer().serializeToString(this.$el)
              )
            )
          )
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media screen and (max-width: 60em) {
}
</style>
