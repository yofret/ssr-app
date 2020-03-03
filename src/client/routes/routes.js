import Home from '../components/pages/Home';
import UserList from '../components/pages/UserList';

const routes = [
  {
    ...Home,
    path: '/',
    exact: true
  },
  {
    ...UserList,
    path: '/users',
  }
];

export default routes;
