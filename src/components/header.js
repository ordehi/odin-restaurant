import { createElement } from '../helpers/dom';

const Header = (contentNode) => {
  const container = createElement('header', undefined, { id: 'header' });

  const heading = createElement('h1', 'The Savory Pirate');
  const tagline = createElement('p', 'A delightful journey through aaaagh!');
  container.appendChild(heading);
  container.appendChild(tagline);

  contentNode.appendChild(container);
};

export default Header;
