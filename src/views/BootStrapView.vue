<template>
  <div class="container-fluid">
    <button type="button" class="btn btn-primary">测试按钮</button>
    <div class="row">
      <div class="col-lg-12">
        <div class="swiper">轮播图</div>
      </div>
      <div class="col-sm-6 col-lg-3">
        <div class="left">left</div>
      </div>
      <div class="col-sm-6 col-lg-3">
        <div class="center">center</div>
      </div>
      <div class="col-sm-6 col-lg-3">
        <div class="right">right</div>
      </div>
      <div class="col-sm-6 col-lg-3">
        <div class="right">right</div>
      </div>

      <!-- <div class="col-md-5">.col-md-222</div> -->
      <!-- <div class="col-lg-5">.col-md-1111</div>
      <div class="col-lg-5" >.col-md-3333</div>
      <div class="col-lg-5">.col-md-145</div> -->
      <!-- <div class="col-md-2">.col-md-1</div>
      <div class="col-md-2">.col-md-1</div>
      <div class="col-md-2">.col-md-1</div>
      <div class="col-md-2">.col-md-1</div>
      <div class="col-md-2">.col-md-1</div>
      <div class="col-md-2">.col-md-1</div>
      <div class="col-md-2">.col-md-1</div> -->
    </div>
    <!-- <div class="row">
      <div class="col-md-5">.col-md-8</div>
      <div class="col-md-5">.col-md-5</div>
      <div class="col-md-5">.col-md-5</div>
    </div>
    <div class="row">
      <div class="col-md-4">.col-md-4</div>
      <div class="col-md-4">.col-md-4</div>
      <div class="col-md-4">.col-md-4</div>
    </div>
    <div class="row">
      <div class="col-md-6">.col-md-6</div>
      <div class="col-md-6">.col-md-6</div>
    </div> -->
  </div>
</template>

<script>
export default {};
</script>

<style>
.col-md-3,
.col-md-8,
.col-md-6,
.col-md-4,
.col-sm-5,
.col-xs-4,
.col-lg-4,
.col-sm-4 {
  border: 1px solid;
}
.swiper {
  width: 100%;
  height: 200px;
  background-color: #e98e98;
  margin-bottom: 20px;
}
.left,
.center,
.right {
  height: 300px;
  margin-bottom: 20px;
}
.left {
  background-color: #339988;
}
.center {
  background-color: #202020;
}
.right {
  background-color: #e0e0e0;
}
</style>
