import Home from '../components/Home';
import Hi from '../components/Hi';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/hi',
    component: Hi,
    exact: true,
  }
];

export default routes;
