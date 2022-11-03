import Header from './components/header';
import Homepage from './components/homepage';
import Menu from './components/menu';
import Contact from './components/contact';
import { destroy } from './helpers/dom';

const contentNode = document.getElementById('content');

const App = () => {
  Header(contentNode);
  let active = Homepage(contentNode);

  // TODO: implement better, extensible routing
  document.addEventListener('click', (e) => {
    let route = e.target.dataset.route;
    if (route) {
      destroy(active);
      switch (route) {
        case 'home':
          active = Homepage(contentNode);
          break;
        case 'menu':
          active = Menu(contentNode);
          break;
        case 'contact':
          active = Contact(contentNode);
          break;
        default:
          break;
      }
    }
  });
};

App();
