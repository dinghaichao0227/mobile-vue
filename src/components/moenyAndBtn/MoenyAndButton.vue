<template>
  <div class="g-padding moenyAndBtn">
    <h2 style="line-height: 20px; height: 30px">$55.90</h2>
    <span class="btn">Add to Cart</span>
  </div>
</template>

<script>
export default {
  name: 'MoenyAndButton',
};
</script>

<style lang="scss" scoped>
.moenyAndBtn {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 18px;
  }
  .btn {
    width: 120px;
    height: 35px;
    background-color: #333;
    border-radius: 5px;
    color: #fff;
    text-align: center;
    line-height: 20px;
    cursor: pointer;
  }
}
</style>
