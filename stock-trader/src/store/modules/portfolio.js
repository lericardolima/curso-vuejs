const state = {
    funds: 10000,
    stocks: []
}

const mutations = {
    'BUY_STOCK'(state, { id, price, quantity }) {
        const record = state.stocks.find(el => el.id == id);
        if (record) {
            record.quantity += quantity;
        } else {
            state.stocks.push({ id, quantity });
        }

        state.funds -= price * quantity;
    },
    'SELL_STOCK'(state, { id, quantity, price }) {
        const record = state.stocks.find(el => el.id == id);
        if (record.quantity > quantity) {
            record.quantity -= quantity;
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1);
        }

        state.funds += price * quantity;
    }
}

const actions = {
    sellStocks({commit}, order) {
        commit('SELL_STOCK', order);
    }
};

const getters = {
    stockPortfolio (state, getters) {
        return state.stocks.map(stock => {
            const record = getters.stocks.find(el => el.id == stock.id);
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        })
    },
    funds (state) {
        return state.funds;
    }
}

export default {
    state,
    mutations,
    getters,
    actions
}