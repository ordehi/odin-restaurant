import { createElement } from '../helpers/dom';
import { capitalize } from '../helpers/text';

const sampleMenu = {
  entrees: [
    { dishName: 'Ahoy Chips', price: 2.5 },
    { dishName: 'Matey Scallops', price: 5.5 },
  ],
  salads: [
    { dishName: 'Caesar Drowned', price: 5.95 },
    { dishName: 'Red Algae Spaghetti', price: 6.66 },
  ],
  seafood: [
    { dishName: 'A Whole Shark', price: 1666.01 },
    { dishName: 'Imitation Whale', price: 321.123 },
  ],
};

const Menu = (contentNode, menuData = sampleMenu) => {
  const container = createElement(
    'div',
    undefined,
    { id: 'menu' },
    { class: 'container' }
  );

  for (const cat in menuData) {
    let catNode = createElement('div', undefined, { id: cat });
    let catTitle = createElement('h3', capitalize(cat), {
      class: 'category-title',
    });
    catNode.appendChild(catTitle);

    menuData[cat].map((dish) => {
      let dishNode = createElement('div', undefined, { class: 'dish' });
      let nameNode = createElement('span', dish.dishName, {
        class: 'dish-name',
      });
      let priceNode = createElement('span', dish.price, {
        class: 'dish-price',
      });
      dishNode.append(nameNode, priceNode);
      catNode.appendChild(dishNode);
    });

    container.appendChild(catNode);
  }

  contentNode.appendChild(container);
};

export default Menu;
