import Home from './components/Home.vue';
import Stocks from './components/stocks/Stocks.vue';
import StocksStock from './components/stocks/Stock.vue';
import Portfolio from './components/portfolio/Portfolio.vue';
import PortfolioStock from './components/portfolio/Stock.vue';

const routes = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/stocks',
        component: Stocks,
        children: [
            {
                path: ':id',
                component: StocksStock
            }
        ]
    },
    {
        path: '/portfolio',
        component: Portfolio,
        children: [
            {
                path: ':id',
                component: PortfolioStock
            }
        ] 
    },
    {
        path: '*',
        redirect: '/home'
    }
];

export default routes;