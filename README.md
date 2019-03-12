# RDM - Rhythm

This is a function for resizing DOM elements to the nears multiple of the baseline unit. This is a tool for typography nerds that want to attempt a strict baseline rhythm throughout their web sites.

## Install
```
npm i rdmkit-rdm --save-dev
```

You will need to specify a `line-height` and `font-size` on the `:root` selector in order for this to work. This grid is configured to work on a site that is correctly configured for good typography.

```css
:root {
    line-height: 1.5;
    font-size: 20px;
  }
```

Then you will need to call the `rdm()` function and pass in the elements that you want to resize to a multiple of the baseline unit.
```js
// This will resize all figure elements
rdm("figure");
```

```js
// or you can resize several different elements like this
rdm("figure, .videos, embed");
```

## Usage
When the page loads, all elements passed into the `rdm()` function will be resized to a height closest to a multiple of the baseline unit. This function will also be fired off again on a resize event. This function is debounced, so it wont fire until the user stops resizing the window.

## Background
Again, setting type online to a strict baseline rhythm is tough. If you do manage to massage all of your type in to a perfect baseline rhythm, then images and responsive challenges will end up throwing all of your baseline efforts away. `rdm()` takes care of that.

I tested using fractional numbers in Chrome and you might be surprised to know that only quarters performed as expected. Thus widths/heights sets at 100.25px, 100.5px, and 100.75px renderd in the browser as expected. However, any other fractional number did not like 100.1px, 100.2px, 100.3px, 100.4px, 100.6px, 100.7px, 100.8px and 100.9px. I made a <a href="https://jsbin.com/vupinoj/edit?css,console,output">JSBIN to demonstrate this</a>.

This is why I use even numbers for base font sizes and 1.5 for line-height. This keeps all the math to whole numbers or perfect quarters which seems to yield consistent results. Otherwise, rounding issues kill all of your efforts to maintain vertical rhythm.
