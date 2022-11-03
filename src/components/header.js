import { createElement } from '../helpers/dom';

const sampleNav = ['Home', 'Menu', 'Contact'];

const Header = (contentNode, navData = sampleNav) => {
  const container = createElement('header', undefined, { id: 'header' });

  const heading = createElement('h1', 'The Savory Pirate');
  const tagline = createElement('p', 'A delightful journey through aaaagh!');
  const nav = createElement('nav', undefined, { class: 'navbar' });

  const ul = createElement('ul', undefined, { class: 'navlist' });
  navData.map((item) => {
    let li = createElement('li', undefined, { class: 'list-item' });
    let anchor = createElement(
      'a',
      item,
      { class: 'list-link' },
      { href: '#' },
      { 'data-route': item.toLowerCase() }
    );
    li.appendChild(anchor);
    ul.appendChild(li);
  });
  nav.appendChild(ul);

  container.append(heading, nav, tagline);
  contentNode.appendChild(container);
};

export default Header;
