export default {
  install(app) {
    app.directive("test2", {
      mounted(el) {
        const textContent = el;
        const targetW = textContent.getBoundingClientRect().width;
        const range = document.createRange();
        range.setStart(textContent, 0);
        range.setEnd(textContent, textContent.childNodes.length);
        const rangeWidth = range.getBoundingClientRect().width;
        console.log(
          "rangeWidth > targetW",
          rangeWidth > targetW,
          rangeWidth,
          targetW
        );
        return rangeWidth > targetW;
      },
    });
    app.directive("test3", {
      mounted(el) {
        console.log('el', el)
        el.parentNode && el.parentNode.removeChild(el)
      }
    })
  },
};
