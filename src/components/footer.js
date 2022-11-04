import { createElement } from '../helpers/dom';

const Footer = () => {
  const container = createElement('footer', undefined, { id: 'footer' });

  const tagline = createElement('p', 'Ahoy matey!');

  container.append(tagline);

  return container;
};

export default Footer;
