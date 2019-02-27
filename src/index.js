module.exports = elements => {
  // resize on load
  resizeElements(elements);

  // resize when the browser gets resized
  window.addEventListener(
    "resize",
    debounce(() => {
      resizeElements(elements);
      // console.log("resized");
    })
  );

  function resizeElements(elements) {
    // Get elements to resize to the nearest multiple of the baselineUnit
    let nodeList = document.querySelectorAll(elements);
    let newHeight = 0;
    let lh = parseFloat(getRootLineHeight(), 10);

    for (let elem of nodeList) {
      let h = elem.offsetHeight;
      newHeight = Math.ceil(h / lh) * lh - lh;
      // Mutate elem maxHeigh on load and resize
      elem.style.maxHeight = newHeight + "px";
    }
  }

  // Lets debounce the resize event
  // No need to change anything until the resizing has finished
  function debounce(fn, time = 1000) {
    let timeout;

    return function() {
      let functionCall = () => fn.apply(this, arguments);

      clearTimeout(timeout);
      timeout = setTimeout(functionCall, time);
    };
  }

  // Get styles set on the :root
  // as this should be the correct place to set up
  // a baseline rhythm for the entire site
  function getRootLineHeight() {
    let style = getComputedStyle(document.documentElement);
    let { lineHeight } = style;

    // console.log({ lineHeight });
    return lineHeight;
  }

  // Get height of the document
  function documentHeight() {
    let documentHeight = document.documentElement.scrollHeight;
    return documentHeight;
  }

  // Helper function to turn Strings into Floats
  function stringToFloat(str) {
    let float = parseInt(str, 10);
    return float;
  }
};
