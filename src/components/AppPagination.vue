<template>
  <div class="flex-center">
    <ul class="pagination">
      <li class="left" @click="back"></li>
      <template v-for="(item, k) in rows">
        <li
          :key="k"
          :class="{
            active: k + 1 === currentPage,
          }"
          @click="page(k + 1)"
        >
          {{ k + 1 }}
        </li>
      </template>
      <li class="right" @click="next"></li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    currentPage: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      perPage: 6,
    }
  },
  computed: {
    rows() {
      return Math.ceil(this.data.length / this.perPage)
    },
  },
  methods: {
    page(v) {
      this.$emit('change', v)
    },
    back() {
      this.$emit('change', this.currentPage < 2 ? 1 : this.currentPage - 1)
    },
    next() {
      this.$emit(
        'change',
        this.currentPage >= this.rows ? this.rows : this.currentPage + 1
      )
    },
  },
}
</script>
<style lang="scss">
.pagination {
  font-size: 36px;
  position: relative;
  background: #fff;
  display: flex;
  li {
    list-style: none;
    line-height: 50px;
    margin: 0 8px;
    font-size: 36px;
    letter-spacing: -0.015em;
    cursor: pointer;
    &.active {
      font-weight: bold;
    }
  }
  .right,
  .left {
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 40px solid #c4c4c4;
    transform: rotate(90deg);
    margin: 0 32px;
    cursor: pointer;
    &:hover {
      border-left: 20px solid transparent;
      border-right: 20px solid transparent;
      border-bottom: 40px solid #aaa;
    }
  }
  .left {
    transform: rotate(-90deg);
  }
}
</style>
