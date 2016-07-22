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
  categoryToDesc(lang, id) {
    const types = {
      id2() {
        if (lang === 'el') {
          return 'Διαμέρισμα';
        }
        return 'Apartment';
      },
      id3() {
        if (lang === 'el') {
          return 'Μαιζονέτα';
        }
        return 'Maisonette';
      },
      id4() {
        if (lang === 'el') {
          return 'Μονοκατοικία';
        }
        return 'Detached House';
      },
      id5() {
        if (lang === 'el') {
          return 'Έπαυλη';
        }
        return 'Villa';
      },
    };
    return types[id]();
  },
};
export default helpers;
