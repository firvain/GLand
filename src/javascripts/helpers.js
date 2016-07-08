const helpers = {
  ac(className, element = document) {
    const el = element;
    if (element.classList) {
      el.classList.add(className);
    } else {
      el.className += ` ${className}`;
    }
  },
  qs(selector, context = document) {
    return context.querySelector(selector);
  },
  qsa(selector, context = document) {
    return context.querySelectorAll(selector);
  },
};
export default helpers;
