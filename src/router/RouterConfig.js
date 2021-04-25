import Notice from '../pages/Notice';
import Post from '../pages/Post';
import Profile from '../pages/Profile';
import Task from '../pages/Task';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound'

const RouterConfig = [
  {
    path: "/login",
    component: Login,
    auth: false
  },
  {
    path: "/main/notice",
    component: Notice,
    auth: true
  },
  {
    path: "/main/post",
    component: Post,
    auth: true
  },
  {
    path: "/main/profile",
    component: Profile,
    auth: true
  },
  {
    path: "/main/task",
    component: Task,
    auth: true
  },
  {
    path: "/notfound",
    component: NotFound,
    auth: false
  }
];

export default RouterConfig;