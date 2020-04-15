import Vue from 'vue'
import Vuex from 'vuex'
import stocks from './modules/stock'
import portfolio from './modules/portfolio'
import * as actions from './action'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        stocks,
        portfolio
    },
    actions
});