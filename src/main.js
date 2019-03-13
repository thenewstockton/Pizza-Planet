import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes';
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    //return { x: 0, y: 0};
    //return {selector: '.btn'};
    if(savedPosition){
      return savedPosition;
    } else {
      return { x: 0, y: 0};
    }
  }
});

//router.afterEach((to,from) => {});
// router.beforeEach((to, from, next) => {
//   console.log(to);
//   next();
//   // if(to.path === "/menu"){
//   //   next();
//   // } else {
//   //   next(false);
//   // }
  
// });

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
