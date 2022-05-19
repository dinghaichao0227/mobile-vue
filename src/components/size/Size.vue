<template>
  <div class="g-padding size">
    <h3>Select Size</h3>
    <div class="sizeSpan">
      <span class="sizeD">S</span>
      <span class="sizeD">M</span>
      <span class="sizeD">L</span>
      <span class="sizeD">XL</span>
      <span class="sizeD">XXL</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sizeView',
};
</script>

<style lang="scss" scoped>
.size {
  display: flex;
  flex-direction: column;

  h3 {
    margin-bottom: 1px;
    font-size: 16px;
    font-weight: 600;
  }
  .sizeSpan {
    .sizeD {
      display: inline-block;
      width: 30px;
      height: 30px;
      border: 1px solid #777;
      margin-right: 10px;
      text-align: center;
      line-height: 30px;
      border-radius: 8px;
      margin-top: 10px;
      font-size: 8px;
    }
    .sizeD:hover {
      cursor: pointer;
      background-color: #ff6c79;
      color: #fff;
      border: 1px solid #ff6c79;
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
    }
  }
}
</style>
