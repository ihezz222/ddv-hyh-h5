import Login from '../views/Login/Login';
import Signup from '../views/Login/Signup';
import { IRouter } from '.';

const routerList: IRouter[] = [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/signup',
    component: Signup,
  },
];

export default routerList as [];
