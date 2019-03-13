import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';

import menu from './modules/menu';
import orders from './modules/orders';
import users from './modules/users';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        menu,orders,users
    },
    state: {
        // menuItems: {
        //     1: {
        //         'name': 'Margherita1',
        //         'description': 'A delicious tomato based pizza topped with mozzarella',
        //         'options': [{
        //                 'size': 9,
        //                 'price': 6.95
        //             }, {
        //                 'size': 12,
        //                 'price': 10.95
        //             }]
        //     },
        //     2: {
        //     'name': 'Pepperoni',
        //     'description': 'A delicious tomato based pizza topped with mozzarella and pepperoni',
        //     'options': [{
        //             'size': 9,
        //             'price': 7.95
        //         }, {
        //             'size': 12,
        //             'price': 12.95
        //         }]
        //     },
        //     3: {
        //     'name': 'Ham and Pineapple',
        //     'description': 'A delicious tomato based pizza topped with mozzarella, ham and pineapple',
        //     'options': [{
        //             'size': 9,
        //             'price': 7.95
        //         }, {
        //             'size': 12,
        //             'price': 12.95
        //         }]
        //     }
        // },
        
        // orders: [],
        // currentUser: null
    },
    // getters: {
    //     getMenuItems: state => {
    //         return state.menuItems;
    //     },
    //     numberOfOrders: state => state.orders.length,
    //     currentUser: state => state.currentUser
    // },
    getters,
    mutations,
    // mutations: {
    //     addOrder: (state, orders) => {
    //         state.orders.push(orders);
    //     },
    //     userStatus(state,user){
    //         if(user){
    //             state.currentUser = user.email;
    //         } else {
    //             state.currentUser = null;
    //         }
    //     }
    // },

    actions
    // actions: {
    //     setUser(context, user){
    //         context.commit('userStatus', user);
    //     }
    // }
});