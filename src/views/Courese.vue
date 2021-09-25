<template>
  <div class="p-3">
    <div class="card mb-3">
      <div class="courses-hero">
        <div>
          <div class="title text-shadow">Our courses</div>
          <div class="desc text-shadow-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </div>
        </div>
        <div class="courses-list">
          <div v-for="(img, key) in imgs" :key="key">
            <img :src="img.src" :alt="img.alt" />
          </div>
        </div>
      </div>
    </div>
    <div class="card mb-3">
      <div class="courses-detail">
        <template v-for="(item, k) in coursesDetail">
          <div :key="k" class="item">
            <div class="img">
              <img :src="item.img.src" :alt="item.img.alt" />
            </div>
            <div class="content">
              <div class="title">{{ item.title }}</div>
              <div class="desc">
                {{ item.desc }}
              </div>
            </div>
          </div>
        </template>
        <AppPagination
          :data="courses()"
          :currentPage="currentPage"
          @change="handleChangePage"
        />
      </div>
    </div>
    <AppCarousel />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AppPagination from '@/components/AppPagination'
import AppCarousel from '@/components/AppCarousel'
export default {
  components: {
    AppCarousel,
    AppPagination,
  },
  data() {
    return {
      currentPage: 1,
      imgs: {
        1: {
          src: require('@/assets/1.png'),
          alt: 'img1',
        },
        2: {
          src: require('@/assets/2.png'),
          alt: 'img2',
        },
        3: {
          src: require('@/assets/3.png'),
          alt: 'img3',
        },
        4: {
          src: require('@/assets/4.png'),
          alt: 'img4',
        },
        5: {
          src: require('@/assets/5.png'),
          alt: 'img5',
        },
        6: {
          src: require('@/assets/6.png'),
          alt: 'img6',
        },
      },
    }
  },
  computed: {
    ...mapGetters({
      courses: 'getCourses',
    }),
    coursesDetail() {
      return this.courses().slice(
        (this.currentPage - 1) * 6,
        this.currentPage * 6
      )
    },
  },
  methods: {
    handleChangePage(v) {
      this.currentPage = v
    },
  },
}
</script>
<style lang="scss">
.card .courses-hero {
  // height: 594px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 47px;
  margin-top: -32px;
  .courses-list {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 110px;
    > div {
      margin: 0px 27px;
      margin-bottom: 1rem;
      width: 173px;
      height: 171px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .title {
    font-size: 48px;
    font-weight: 700;
    line-height: 72px;
    letter-spacing: -0.015em;
    text-align: center;

    margin-bottom: 30px;
    color: #3460d1;
  }
  .desc {
    font-size: 36px;
    font-weight: 400;
    line-height: 50px;
    letter-spacing: -0.015em;
    text-align: center;

    margin: 0 auto;
    width: 100%;
    max-width: 1270px;
  }
  img {
    box-shadow: 2px 3px 4px 0px #8f8e8e;
  }
}
.courses-detail {
  // max-height: 1445px;
  > .item {
    display: flex;
    margin-bottom: 48px;
    .content {
      margin: 0px 75px;
      .title {
        margin-bottom: 1rem;
        font-weight: bold;
        font-size: 24px;
        line-height: 36px;
        letter-spacing: -0.015em;

        color: #3460d1;
      }
      .desc {
        width: 100%;
        max-width: 686px;
        font-weight: normal;
        font-size: 18px;
        line-height: 30px;
        letter-spacing: -0.015em;
      }
    }
  }
}
.card {
  background-color: #fff;
  padding: 1rem;
}
.flex {
  display: flex;
}
.justify-content-between {
  justify-content: space-between;
}
.justify-content-around {
  justify-content: space-around;
}
.p-3 {
  padding: 2.1rem;
}
.mb-3 {
  margin-bottom: 2rem;
}
img {
  width: 100%;
  height: auto;
}
.text-shadow {
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.25);
  &-sm {
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15),
      0px 4px 4px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
}
.card {
  padding: 96px 123px 30px 123px;
}
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
