<template>
  <div class="nav">
    <img :src="back" class="back" />
    <div class="right">
      <img :src="heart" class="heart" />
      <img :src="dot" class="dot" />
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
  display: flex;
  justify-content: space-between;
  padding: 30px 20px 0px;
  align-items: center;

  .back {
    width: 25px;
  }
  .right {
    display: flex;
    justify-content: center;
    align-items: center;

    .dot {
      margin-left: 15px;
      width: 5px;
    }
    .heart {
      width: 20px;
    }
  }
}
</style>
