import { createElement } from '../helpers/dom';

const Contact = (contentNode) => {
  const container = createElement(
    'div',
    undefined,
    { id: 'contact' },
    { class: 'container' }
  );

  const heading = createElement('h2', 'Contact We (if ye dare)', {
    class: 'contact-title',
  });
  const tag = createElement(
    'p',
    'We often in the seas, but holla horns at we:',
    { class: 'contact-tag' }
  );

  const address = createElement('address');

  const mailAnchor = createElement('a', 'savory@pirate.arg', {
    href: 'mailto:savory@pirate.arg',
  });
  const phoneAnchor = createElement('a', '(000) 666-1234', {
    href: 'tel:+0006661234',
  });

  const breakLine = createElement('br');
  address.append(mailAnchor, breakLine, phoneAnchor);

  container.append(heading, tag, address);

  contentNode.appendChild(container);
};

export default Contact;
