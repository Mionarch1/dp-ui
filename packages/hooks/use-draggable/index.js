let isDragging = false;
let userSelectStyle = 'initial';

const rootElement = document.documentElement;

const isTouchDevice = 'ontouchstart' in rootElement;

const EVENTS = isTouchDevice
  ? {
      start: 'touchstart',
      move: 'touchmove',
      end: 'touchend'
    }
  : {
      start: 'mousedown',
      move: 'mousemove',
      end: 'mouseup'
    };

export default (element, options) => {
  const moveFn = function (event) {
    if (options.drag) {
      options.drag(event);
    }
  };
  const upFn = function (event) {
    rootElement.removeEventListener(EVENTS.move, moveFn);
    rootElement.removeEventListener(EVENTS.end, upFn);
    rootElement.style.userSelect = userSelectStyle;
    rootElement.ondragstart = null;

    isDragging = false;

    if (options.end) {
      options.end(event);
    }
  };
  element.addEventListener(EVENTS.start, function (event) {
    if (isDragging) return;
    userSelectStyle = rootElement.style.userSelect;
    rootElement.style.userSelect = 'none';
    rootElement.ondragstart = function () {
      return false;
    };

    rootElement.addEventListener(EVENTS.move, moveFn);
    rootElement.addEventListener(EVENTS.end, upFn);
    isDragging = true;

    if (options.start) {
      options.start(event);
    }
  });
};
