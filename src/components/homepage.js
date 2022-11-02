/* 
      <header>
        <h1>The Savory Pirate</h1>
        <p>A delightful journey through aaaagh!</p>
      </header>
      <main>
        <img src="./images/pirate.jpg" alt="a pirate leading a ship" />
      </main>
       */

import { createElement } from '../helpers/dom';
import Pirate from '../images/pirate.jpg';

const Homepage = (contentNode) => {
  const container = createElement(
    'div',
    undefined,
    { id: 'homepage' },
    { class: 'container' }
  );

  const header = createElement('header');
  const heading = createElement('h1', 'The Savory Pirate');
  const tagline = createElement('p', 'A delightful journey through aaaagh!');
  header.appendChild(heading);
  header.appendChild(tagline);

  const main = createElement('main');
  const myPirate = new Image();
  myPirate.src = Pirate;
  myPirate.alt = 'a pirate leading a ship';

  main.appendChild(myPirate);

  container.appendChild(header);
  container.appendChild(main);

  contentNode.appendChild(container);
};

export default Homepage;
