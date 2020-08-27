export default {
    namespaced: true,
    state: {
        selected: 'table'
    },
    mutations: {
        selectComponent(state, selection) {
            state.selected = selection;
        }
    }
};