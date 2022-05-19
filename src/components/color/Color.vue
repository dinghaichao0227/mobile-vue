<template>
  <div class="g-padding color">
    <h3>Select Color</h3>
    <div class="colorSpan">
      <span class="g-size g-color1"></span>
      <span class="g-size g-color2"></span>
      <span class="g-size g-color3"></span>
      <span class="g-size g-color4"></span>
      <span class="g-size g-color5"></span>
      <span class="g-size g-color6"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'colorView',
};
</script>

<style lang="scss" scoped>
.color {
  display: flex;
  flex-direction: column;

  h3 {
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: 600;
  }
}
</style>
