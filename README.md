# d3-rs-progress

[![Circle CI](https://img.shields.io/circleci/project/redsift/d3-rs-progress.svg?style=flat-square)](https://circleci.com/gh/redsift/d3-rs-progress)
[![npm](https://img.shields.io/npm/v/@redsift/d3-rs-progress.svg?style=flat-square)](https://www.npmjs.com/package/@redsift/d3-rs-progress)
[![MIT](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://raw.githubusercontent.com/redsift/d3-rs-progress/master/LICENSE)

`d3-rs-progress` presents a progress indicator.

## Example

[View @redsift/d3-rs-progress on Codepen](http://codepen.io/rahulpowar/pen/zNRrEL)

### Default Icon

![Default Icon](https://bricks.redsift.cloud/reusable/d3-rs-progress)

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

### Parameters

Property|Description|Transition|Preview
----|-----------|----------|-------
`classed`|*String* SVG custom class|N
`width`, `height`, `size`, `scale`|*Integer* SVG container sizes|Y
`background`|
`theme`|
`margin`|
`graticule`|
`projection`| http://map-projections.net/patterson.php
`projectionScale`|
`interrupted`|*Boolean* enabled clipping for interrupted projections
`country`|*Boolean* enable country polygons
`fill`| Land filling
`points`| Decimal expression of [ Longitude, Latitude ]
`pointsDisplay`|
`links`|
`linksDisplay`|
`zoom`|
`zoomX`, `zoomY`|
`onClick`|
`redrawTopology`|*Boolean* When drawing the map, redraw the topology too
`negative`|*String* Color for the negative space in the map i.e. typically the water. When interrupted is set to false, this does not display and the `background` color shows through
`boundary`|*String* Color for the boundaries between country polygons