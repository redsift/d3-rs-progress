# d3-rs-progress

[![Circle CI](https://img.shields.io/circleci/project/redsift/d3-rs-progress.svg?style=flat-square)](https://circleci.com/gh/redsift/d3-rs-progress)
[![npm](https://img.shields.io/npm/v/@redsift/d3-rs-progress.svg?style=flat-square)](https://www.npmjs.com/package/@redsift/d3-rs-progress)
[![MIT](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://raw.githubusercontent.com/redsift/d3-rs-progress/master/LICENSE)

`d3-rs-progress` presents a progress indicator.

## Example

### Show / Hide

[View @redsift/d3-rs-progress on Codepen](http://codepen.io/rahulpowar/pen/zNRrEL)

### Custom Icon

[View @redsift/d3-rs-progress on Codepen](http://codepen.io/rahulpowar/pen/PWeJEG)

## Usage

```bash    
    npm i @redsift/d3-rs-progress
```

### Browser

```javascript
    <script src="//static.redsift.io/reusable/d3-rs-progress/latest/d3-rs-progress.umd-es2015.min.js"></script>
    <script>
        var hide = d3_rs_geo.show('#parent');
        setTimeout(() => {
            hide().then(() => console.log('hidden'))
        }, 1000);
    </script>
```

### ES6

```javascript
    import { show } from "@redsift/d3-rs-progress";
    let hide = show('#parent');
    ...
```

### Require

```javascript
    var progress = require("@redsift/d3-rs-progress");
    var hide = progress.show();
    ...
```

## API

The helper function `show(location, icon)` creates an SVG and animates it till the caller hides the icon.

Parameter|Detail
---------|------
`location`|Optional, defaults to body *String, D3 Selection* CSS selection where the icon should be injected.
`icon`|Optional, defaults to the standard size *Reusable* Chart to render as the animated Icon.

Returns   |Detail
----------|------
`function()`|Function to call to hide the icon. A call to the hide function returns a Promise that will resolve when the hide animation is finished.

## Icon

You may optionally supply an icon to `show()` that customizes the apperance of the animated icon or render it yourself as a standard reusable chart.

### Parameters

Property|Description|Transition
----|-----------|----------|-------
`classed`|*String* SVG custom class|N
`width`, `height`, `size`|*Integer* SVG container sizes|Y
`scale`|*Float* SVG container scale|Y
`background`|
`zoom`|*Float* Zoom on the elements inside the SVG|Y
`inset`|*Float* Pixel inset of the arc|N
`rotation`|*Float* Degree rotation of the arc|Y
`angle`|*Float* Radian size of the arc|Y
`icon`|*Float* Scale of the internal icon|Y