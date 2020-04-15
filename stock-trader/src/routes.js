import Home from './components/Home.vue';
import Stocks from './components/stocks/Stocks.vue';
import Portfolio from './components/portfolio/Portfolio.vue';

const routes = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/stocks',
        component: Stocks
    },
    {
        path: '/portfolio',
        component: Portfolio
    },
    {
        path: '*',
        redirect: '/home'
    }
];

export default routes;