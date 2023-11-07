<template>
  <div class="nav">
    <div class="nav-icon">
      <img :src="back" class="nav-icon-back" />
    </div>
    <div class="nav-right">
      <img :src="heart" class="nav-right-heart" />
      <img :src="dot" class="nav-right-dot" />
    </div>
  </div>
</template>

<script>
import back from '@/assets/back.png';
import heart from '@/assets/heart.png';
import dot from '@/assets/dot.png';
export default {
  name: 'NavView',
  data() {
    return {
      back,
      heart,
      dot,
    };
  },
};
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;
  height: 100%;
  display: flex;
  // justify-content: space-between;
  &-icon {
    width: 100%;
    height: 20px;
    margin: auto;
    line-height: 20px;
    margin-left: 20px;
    &-back {
      width: 25px;
    }
  }
  &-right {
    width: 100px;
    height: 25px;
    display: flex;
    justify-content: flex-end;
    margin-right: 20px;

    &-heart {
      width: 25px;
      margin-right: 10px;
    }
  }
}
</style>
