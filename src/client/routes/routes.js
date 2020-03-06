import Home from '../components/pages/Home';
import UserList from '../components/pages/UserList';
import NotFound from '../components/pages/NotFound';
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
      },
      {
        component: NotFound,
      }
    ]
  }
];

export default routes;
