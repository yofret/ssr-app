import Home from '../components/pages/Home';
import UserList from '../components/pages/UserList';
import AdminList from '../components/pages/AdminList';
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
        ...AdminList,
        path: '/admins',
      },
      {
        component: NotFound,
      }
    ]
  }
];

export default routes;
