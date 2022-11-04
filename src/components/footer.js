import { createElement } from '../helpers/dom';

const Footer = (contentNode) => {
  const container = createElement('footer', undefined, { id: 'footer' });

  const tagline = createElement('p', 'Ahoy matey!');

  container.append(tagline);
  contentNode.appendChild(container);
};

export default Footer;
