<template>
  <div class="g-padding content">
    <Nav />
    <Header />
    <div class="img">
      <img :src="image" class="image" />
    </div>
    <Size />
    <Color />
    <MoenyAndButton />
    <!-- 拼图验证码 -->
    <!-- <slide-verify :l="42" :r="10" :w="310" :h="155" @success="onSuccess" @fail="onFail" @refresh="onRefresh"
      :slider-text="text"></slide-verify> -->
    <div>{{ msg }}</div>
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue';
import Nav from '@/components/nav/Nav.vue';
import Color from '@/components/color/Color.vue';
import Size from '@/components/size/Size.vue';
import MoenyAndButton from '@/components/moenyAndBtn/MoenyAndButton.vue';
import image from '@/assets/image.png';
export default {
  name: 'aboutView',
  components: {
    Header,
    Nav,
    Color,
    Size,
    MoenyAndButton,
  },
  data() {
    return {
      image,
      flag: false,
      msg: '',
      text: '向右滑动',
    };
  },
  methods: {
    onSuccess() {
      this.msg = '成功';
    },
    onFail() {
      this.msg = '';
    },
    onRefresh() {
      this.msg = '';
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  min-height: 100vh;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .img {
    padding: 10px 20px 0px 20px;
  }

  .image {
    width: 100%;
    border-radius: 10px;
  }
}
</style>
