import Home from '../components/Home';
import Hi from '../components/Hi';
import UserList from '../components/UserList';

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
  },
  {
    path: '/users',
    component: UserList,
    exact: true,
  }
];

export default routes;
