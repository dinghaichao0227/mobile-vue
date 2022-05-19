<template>
  <div class="header">
    <h2>H&M Women Dress</h2>
    <div class="prestige">
      <img :src="star" class="star" />
      <span> 4.5（4.5k+ reviews）</span>
    </div>
  </div>
</template>

<script>
import star from '@/assets/star.png';
export default {
  name: 'HeaderView',
  data() {
    return {
      star,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-bottom: 8px;
    font-size: 22px;
    font-weight: 600;
  }

  .prestige {
    display: flex;
    justify-content: center;
    font-size: 14px;

    .star {
      width: 16px;
      height: 16px;
      margin-right: 5px;
    }
  }
}
</style>
