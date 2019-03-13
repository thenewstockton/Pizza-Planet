const state = {
    currentUser: null
};

const mutations = {
    userStatus: function(state,user){
        if(user){
            state.currentUser = user.email;
        } else {
            state.currentUser = null;
        }
    }
};

const getters = {
    currentUser: state => {
        return state.currentUser;
    }
    
};

const actions = {
    setUser: (context, user) =>{
        context.commit('userStatus', user);
    }
};

export default {
    state, mutations, getters, actions
}