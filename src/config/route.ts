import { route } from '../interface/index';
import Layout from '../component/Layout/index';
import Home from '../page/Home';
import About from '../page/About';
import Archives from '../page/Archives';
import Friends from '../page/Friends';
import Message from '../page/Message';
import Photos from '../page/Photos';
import Tags from '../page/Tags';
import Talks from '../page/Talks';
export const routes: route = {
  path: '/',
  element: () => Layout,
  children: [
    {
      path: 'home',
      element: () => Home,
      children: [],
    },
    {
      path: 'about',
      element: () => About,
      children: [],
    },
    {
      path: 'archives',
      element: () => Archives,
      children: [],
    },
    {
      path: 'friends',
      element: () => Friends,
      children: [],
    },
    {
      path: 'message',
      element: () => Message,
      children: [],
    },
    {
      path: 'photos',
      element: () => Photos,
      children: [],
    },
    {
      path: 'tags',
      element: () => Tags,
      children: [],
    },
    {
      path: 'talks',
      element: () => Talks,
      children: [],
    },
  ],
};
