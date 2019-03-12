module.exports = elements => {
  // resize on load
  // resizeElements(elements);
  document.addEventListener("DOMContentLoaded", function(event) {
    resizeElementsOnLoad(elements);
  });

  // resize when the browser gets resized
  window.addEventListener(
    "resize",
    debounce(
      () => {
        // getInitialHeights(elements);
        resizeElementsOnResize(elements);
        // console.log("resized");
        // console.log(initialHeight);
      },
      1000,
      true
    )
  );

  function resizeElementsOnLoad(elements) {
    // Get elements to resize to the nearest multiple of the baselineUnit
    let nodeList = document.querySelectorAll(elements);
    let lh = parseFloat(getRootLineHeight(), 10);

    setTimeout(() => {
      for (let elem of nodeList) {
        let h = elem.offsetHeight;
        elem.style.height = newHeight(h, lh);
        console.log(h);
      }
    }, 500);
  }

  function resizeElementsOnResize(elements) {
    // Get elements to resize to the nearest multiple of the baselineUnit
    let nodeList = document.querySelectorAll(elements);
    let lh = parseFloat(getRootLineHeight(), 10);

    // Reset height to auto as soon as resize event fires
    // this lets the element responsively resize
    for (let elem of nodeList) {
      let h = elem.offsetHeight;
      // elem.style.transition = ".2s all ease-in-out";
      elem.style.height = "auto";
      console.log(h);
    }

    // Then fire off the baseline resizing
    setTimeout(() => {
      for (let elem of nodeList) {
        let h = elem.offsetHeight;
        // Mutate elem maxHeigh on load and resize
        // elem.style.maxHeight = newHeight + "px";
        // elem.style.maxHeight = newHeight(h, lh);
        elem.style.height = newHeight(h, lh);
        console.log(h);
      }
    }, 1500);
  }

  // Function used for finding nearest multiple
  function newHeight(h, lh) {
    var result = Math.ceil(h / lh) * lh - lh;
    return result + "px";
  }

  // Lets debounce the resize event
  // No need to change anything until the resizing has finished
  function debounce(callback, wait = 1000, immediate = false) {
    let timeout = null;

    return function() {
      const callNow = immediate && !timeout;
      const next = () => callback.apply(this, arguments);

      clearTimeout(timeout);
      timeout = setTimeout(next, wait);

      if (callNow) {
        next();
      }
    };
  }

  // function debounce(fn, time = 1000) {
  //   let timeout;

  //   return function() {
  //     let functionCall = () => fn.apply(this, arguments);

  //     clearTimeout(timeout);
  //     timeout = setTimeout(functionCall, time);
  //   };
  // }

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
