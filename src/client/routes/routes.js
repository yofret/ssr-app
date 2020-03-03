import Home from '../components/Home';
import UserList from '../components/UserList';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/users',
    component: UserList
  }
];

export default routes;
