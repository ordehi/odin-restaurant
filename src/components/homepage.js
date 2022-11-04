import { createElement } from '../helpers/dom';
import Pirate from '../images/pirate.jpg';

const Homepage = () => {
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

  return container;
};

export default Homepage;
