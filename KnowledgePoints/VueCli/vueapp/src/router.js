import Vue from 'vue';
import Router from 'vue-router';
import Movie from './views/Movie.vue';
import Music from './views/Music.vue';
import Book from './views/Book.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'movie',
      component: Movie,
    },
    {
      path: '/music',
      name: 'music',
      component: Music,
    },
    {
      path: '/book',
      name: 'book',
      component: Book,
    },
  ],
});
