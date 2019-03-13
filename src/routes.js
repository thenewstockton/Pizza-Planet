import Home from './components/Home.vue';
import Menu from './components/Menu.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import History1 from './components/History1.vue';
import Delivery from './components/Delivery.vue';
import OrderingGuide from './components/OrderingGuide.vue';
import Admin from './components/Admin.vue';

export const routes = [
    { path: '/', name: 'homeLink', components: {
        default: Home,
        "ordering-guide": OrderingGuide,
        "delivery": Delivery,
        "history": History1
    }},
    { path: '/menu', name: 'menuLink', component: Menu},
    { path: '/admin', name: 'adminLink', component: Admin, beforeEnter: (to, from, next) => {
      alert('This area is for authorized users only, please login to continue');
      next();
    }},
    { path: '/about', name: 'aboutLink', component: About, children: [
      { path: '/contact', name: 'contactLink', component: Contact},
      { path: '/history', name: 'history1Link', component: History1},
      { path: '/delivery', name: 'deliveryLink', component: Delivery},
      { path: '/ordering-guide',name: 'orderingGuideLink', component: OrderingGuide}
      // /contact www.pizzaplanet.com/contact
      // contact www.pizzaplanet.com/about/contact
    ]},
    { path: '*', redirect: '/'}
  ];