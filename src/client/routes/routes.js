import Home from '../components/pages/Home';
import UserList from '../components/pages/UserList';
import App from './index';

const routes = [
  {
    ...App,
    routes: [
      {
        ...Home,
        path: '/',
        exact: true
      },
      {
        ...UserList,
        path: '/users',
      }
    ]
  }
];

export default routes;
