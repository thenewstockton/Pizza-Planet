import { firebaseAction } from 'vuexfire';
import { firebaseMutations } from 'vuexfire';

const state ={
    orders: []
};

const mutations = {
    addOrder: (state, orders) => {
        state.orders.push(orders);
    },...firebaseMutations
};

const getters = {
    getOrders: state => {
        let unique = [...new Set(state.orders)];
        return unique;
    }, 
    numberOfOrders: state => { return state.orders.length}
};

const actions = {
    setOrdersRef: firebaseAction(({ bindFirebaseRef}, { ref }) => {
        // this will unbind any previously bound ref to 'todos'
        bindFirebaseRef('orders', ref);
      })
};

export default {
    state, mutations, getters, actions
}