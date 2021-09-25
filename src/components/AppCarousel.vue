<template>
  <div v-if="announcement" class="carousel">
    <div class="carousel-desc">{{ announcement.desc }}</div>
    <div class="carousel-control">
      <template v-for="(item, k) in announcements">
        <div
          :key="k"
          :class="{ active: k === current }"
          @click="handleChange(k)"
        />
      </template>
    </div>
    <img :src="announcement.src" :alt="announcement.alt" class="carousel-bg" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: 0,
      announcement: null,
      announcements: [
        {
          src: require('@/assets/class.png'),
          alt: 'class',
          desc: 'The largest community of photo enthusiasts',
        },
        {
          src: require('@/assets/class.png'),
          alt: 'class',
          desc: 'The largest community of photo enthusiasts',
        },
        {
          src: require('@/assets/class.png'),
          alt: 'class',
          desc: 'The largest community of photo enthusiasts',
        },
        {
          src: require('@/assets/class.png'),
          alt: 'class',
          desc: 'The largest community of photo enthusiasts',
        },
      ],
    }
  },
  mounted() {
    this.handleChange()
  },
  methods: {
    handleChange(k) {
      this.current = k || 0
      this.announcement = this.announcements[this.current]
    },
  },
}
</script>
<style lang="scss">
.carousel {
  position: relative;
  .carousel-desc {
    font-size: 56px;
    font-weight: 400;
    line-height: 80px;
    letter-spacing: -0.015em;

    position: absolute;
    right: 14%;
    top: 50%;
    width: 686px;
    height: 160px;
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
      0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .carousel-control {
    position: absolute;
    right: 21px;
    top: 31%;
    > div {
      width: 32px;
      height: 32px;
      background-color: #fff;
      margin: 8px;
      border-radius: 50%;
      margin-bottom: 20px;
      cursor: pointer;

      &.active {
        background-color: #5a5a5a;
      }
      &:hover {
        background-color: #949494;
      }
    }
  }
}
</style>
