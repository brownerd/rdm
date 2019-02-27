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

I prefer a `line-height` of `1.5` and a `font-size` of any even number for a few reasons. One reason is that I think it looks good. It's fine if you disargee. The other reason why I follow these setting is that the math yields consistent results. When values are used that don't yield even numbers or perfect halves, then different browsers are going to handle rounding fractional numbers differently. You can't have 100.19337px. This will throw off your baseline efforts and make managing baseline rhythm a pain in the ass. We don't want that.
