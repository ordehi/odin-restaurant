import { createElement } from '../helpers/dom';
import Pirate from '../images/pirate.jpg';

const Homepage = (contentNode) => {
  const container = createElement(
    'div',
    undefined,
    { id: 'homepage' },
    { class: 'container' }
  );

  const myPirate = new Image();
  myPirate.src = Pirate;
  myPirate.alt = 'a pirate leading a ship';

  container.appendChild(myPirate);

  contentNode.appendChild(container);
};

export default Homepage;
