export default {
    namespaced: true,
    state: {
        stripedTable: true,
        primaryEditbutton: false,
        dangerDeleteButton: false
    },
    getters: {
        editClass: state => {
            return state.primaryEditbutton ? "btn-primary" : "btn-secondary";
        },
        deleteClass: state => {
            return state.dangerDeleteButton ? "btn-danger" : "btn-secondary";
        },
        tableClass: (state, payload, rootState) => {
            return rootState.products.length > 0
                && rootState.products[0].price > 500 ? "table-striped" : "";
        }
    },
    mutations: {
        setEditButtonColor(state, primary) {
            state.primaryEditbutton = primary;
        },
        setDeleteButtonColor(state, danger) {
            state.dangerDeleteButton = danger;
        }
    }
};