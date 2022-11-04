import Header from './components/header';
import Footer from './components/footer';
import Homepage from './components/homepage';
import Menu from './components/menu';
import Contact from './components/contact';
import { replaceActive } from './helpers/dom';
// TODO: import css and inject as stylesheet rather than tag
import './styles/globals.css';

const contentNode = document.getElementById('content');

const App = () => {
  let active = Homepage();
  contentNode.append(Header(), active, Footer());

  // TODO: implement better, extensible routing
  document.addEventListener('click', (e) => {
    let route = e.target.dataset.route;
    if (route) {
      switch (route) {
        case 'home':
          active = replaceActive(contentNode, Homepage(), active);
          break;
        case 'menu':
          active = replaceActive(contentNode, Menu(), active);
          break;
        case 'contact':
          active = replaceActive(contentNode, Contact(), active);
          break;
        default:
          break;
      }
    }
  });
};

App();
