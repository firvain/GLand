const helpers = {
  ac(className, element = document) {
    const el = element;
    if (element.classList) {
      el.classList.add(className);
    } else {
      el.className += ` ${className}`;
    }
  },
  rc(className, element = document) {
    const el = element;
    if (el.classList) {
      el.classList.remove(className);
    } else {
      el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' '); // eslint-disable-line
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
