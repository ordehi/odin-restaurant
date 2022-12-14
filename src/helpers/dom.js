export const createElement = (tag, content, ...attrs) => {
  let element = document.createElement(tag);
  if (content) element.textContent = content;
  if (attrs.length) {
    attrs.forEach((attr) => {
      let [attrName, attrValue] = Object.entries(attr)[0];
      element.setAttribute(attrName, attrValue);
    });
  }
  return element;
};

export const destroy = (node) => node.remove();

export const replaceActive = (parent, newActive, active) => {
  parent.replaceChild(newActive, active);
  return newActive;
};
