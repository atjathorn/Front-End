<template>
  <div id="head">
    <div class="nav">
      <div class="nav-brand">
        <span class="logo">
          <img
            alt="logo"
            src="@/assets/101814539_184411879608597_5666643309277219445_n 1.png"
          />
        </span>
        LIBRA TECH
      </div>
      <div class="nav-search">
        <input v-model="search" placeholder="search" type="text" />
      </div>
      <ul class="nav-bar">
        <li v-for="(menu, menuKey) in menus" :key="menuKey" class="nav-item">
          <router-link :to="menu.path" class="nav-link">
            {{ menu.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: null,
      menus: {
        home: {
          title: 'Home',
          path: '/home',
        },
        solution: {
          title: 'Solution',
          path: '/solution',
        },
        courese: {
          title: 'Courese',
          path: '/courese',
        },
        jobs: {
          title: 'Jobs',
          path: '/jobs',
        },
      },
    }
  },
}
</script>
<style lang="scss">
#head > .nav {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #3460d1;
  color: #fff;
  .nav-brand {
    display: flex;
    align-items: center;
    font-family: 'Comfortaa';
    font-size: 28.44px;
    line-height: 32px;
    letter-spacing: -1.5%;
    .logo {
      padding: 5px 13px;
      display: inline-block;
      background-color: #fff;
      margin-right: 8px;
    }

    text-align: center;
    .title {
      display: inline-block;
    }
  }
  .nav-search {
    width: 684px;
    > input {
      width: 100%;
      background-color: #4a7dff;
      padding: 0.75rem 0.75rem;
      border: 0px;
      border-radius: 4px;
      &::placeholder {
        color: #fff;
      }
    }
  }
  .nav-bar {
    display: flex;
    flex-direction: row;
    list-style: none;
    .nav-link {
      font-size: 15px;
      font-weight: 500;
      line-height: 18px;
      letter-spacing: -0.015em;
      text-align: center;

      padding: 0px 21px;
      color: #fff;
      text-decoration: none;
    }
  }
}
</style>
