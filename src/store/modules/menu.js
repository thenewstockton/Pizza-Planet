import { firebaseAction } from 'vuexfire';
import { firebaseMutations } from 'vuexfire';

const state = {
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
    // }
    menuItems:[]
};

const getters = {
    getMenuItems: state => {
        let unique = [...new Set(state.menuItems)];
        return unique;
    }
};

const mutations = {
    ...firebaseMutations
};

const actions = {
    setMenuRef: firebaseAction(({ bindFirebaseRef}, { ref }) => {
        // this will unbind any previously bound ref to 'todos'
        bindFirebaseRef('menuItems', ref);
      })
};

export default {
    state, getters, mutations, actions
}