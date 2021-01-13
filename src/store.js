import { createStore } from "vuex";
const store = createStore({
    state: {
        incoming_price: 110,
        justList: ["vue", "react", "instagram"],
        userInfo: {},
        productList: [{ id: 1, title: "masa " }, { id: 2, title: "sandalye" }, { id: 3, title: "zibel" }]
    },
    mutations: {
        setIncomingPrice(state, price) {
            state.incoming_price = price;
        },
        addToList(state, newItem) {
            state.justList.push(newItem);
        },
        addProduct(state, newProduct) {
            state.productList.push(newProduct);
        },
        deleteProduct(state, productID) {
            state.productList = state.productList.filter(p => p.id != productID)
        },
    },
    getters: {
        userPrice(state) {
            return parseInt(state.incoming_price) + 5;
        },
        productList: (state) => state.productList,
    },
});

export default store;