import '../styles/index.scss';

import Scrolling from './components/Scrolling';
// import Navgation from './components/Navigation';
// import Preloader from './components/Preloader';

import AboutScene from './scenes/About';
import ProductScene from './scenes/Product';
import CollectionsScene from './scenes/Collections';
import HomeScene from './scenes/Home';

import AboutPage from './pages/About';
import ProductPage from './pages/Product';
import CollectionsPage from './pages/Collections';
import HomePage from './pages/Home';

import Application from './classes/App';

const App = new Application();

const components = [
  {
    component: Scrolling,
  },
];

App.initComponents(components);

const routes = [
  {
    component: HomePage,
    scene: HomeScene,
    template: 'home',
  },
  {
    component: AboutPage,
    scene: AboutScene,
    template: 'about',
  },
  {
    component: ProductPage,
    scene: ProductScene,
    template: 'product',
  },
  {
    component: CollectionsPage,
    scene: CollectionsScene,
    template: 'collections',
  },
];

App.initRoutes(routes);
App.init();

window.App = App;
