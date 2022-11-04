import Header from './components/header';
import Footer from './components/footer';
import Homepage from './components/homepage';
import Menu from './components/menu';
import Contact from './components/contact';
import { replaceActive } from './helpers/dom';
// TODO: import css and inject as stylesheet rather than tag
import './styles/globals.css';

const contentNode = document.getElementById('content');

const routes = {
  home: Homepage(),
  menu: Menu(),
  contact: Contact(),
};

const App = () => {
  let currRoute = 'home';
  let activeNode = routes[currRoute];
  contentNode.append(Header(), activeNode, Footer());
  let currRouteLink = document.querySelector(`[data-route="${currRoute}"]`);
  currRouteLink.classList.add('active');

  // TODO: implement better, extensible routing
  document.addEventListener('click', (e) => {
    let prevRoute = currRoute;
    currRoute = e.target.dataset.route;

    if (currRoute && currRoute !== prevRoute) {
      activeNode = replaceActive(contentNode, routes[currRoute], activeNode);

      let prevRouteLink = currRouteLink;
      currRouteLink = e.target;
      currRouteLink.classList.toggle('active');
      prevRouteLink.classList.toggle('active');
    }
  });
};

App();
