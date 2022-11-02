export const createElement = (tag, content, ...attrs) => {
  let element = document.createElement(tag);
  if (content) element.textContent = content;
  if (attrs.length) {
    attrs.forEach((attr) => {
      let [attrName, attrValue] = Object.entries(attr)[0];
      console.log(attrName);
      console.log(attrValue);
      element.setAttribute(attrName, attrValue);
    });
  }
  return element;
};
