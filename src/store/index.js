import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    courses: [
      {
        img: {
          src: require('@/assets/backdrop.png'),
          alt: 'backdrop',
        },
        title: 'Sed ut perspiciatis unde omnis',
        desc: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.',
      },
    ],
  },
  getters: {
    getCourses: (state) => () => {
      const item = []
      for (let i = 0; i < 32; i++) {
        item.push(state.courses[0])
      }
      return item
    },
  },
})
