import { select } from 'd3-selection';
import { arc } from 'd3-shape';
import { html as svg } from '@redsift/d3-rs-svg';

const DEFAULT_SIZE = 128;
const DEFAULT_RATIO = 1.0;
const DEFAULT_MARGIN = 2;

export default function icon(id) {
  let classed = 'icon-progress',
      width = DEFAULT_SIZE,
      height = null,
      scale = 1.0,
      zoom = 1.0,
      inset = 0.8,
      rotation = 0.0,
      icon = 0.55,
      angle = Math.PI,
      colors = false,
      border = false,
      bgColor = 'white',
      fgColor = 'black';

  function _impl(context) {
    const selection = context.selection ? context.selection() : context,
          transition = (context.selection !== undefined);

    const _height = height || Math.round(width * DEFAULT_RATIO);

    selection.each(function() {
      const node = select(this);

      const root = svg(id ? 'svg-' + id : null)
              .width(width)
              .height(_height)
              .scale(scale)
              .margin(DEFAULT_MARGIN);
      let tnode = node;
      if (transition === true) {
        tnode = node.transition(context);
      }
      tnode.call(root);

      let snode = node.select(root.self());
      let parent = snode.select(root.child());

      let w = root.childWidth(),
          h = root.childHeight(),
          r = Math.min(w, h) / 2,
          cx = w/2,
          cy = h/2,
          iconScale = (w / DEFAULT_SIZE) * 15;

      let g = parent.select('g')

      if (colors) {
        g.attr('style', 'isolation: isolate');
      }

      if (g.empty()) {
        g = parent.append('g')
          .attr('id', id)
          .attr('transform', `translate(${-r},${-r}), scale(${zoom}), translate(${r},${r})`)
          .attr('style', 'mix-blend-mode: difference');

        g.append('circle')
              .attr('class', 'bg');
        g.append('path')
              .attr('class', 'fg')
              .attr('d', half)
              .attr('transform', `translate(${r},${r}), rotate(${rotation})`);
        g.append('g')
              .attr('transform', `translate(${r},${r}), scale(${iconScale * icon})`)
              .append('path')
                .attr('class', 'icon')
                .attr('d', 'M0,0l3,1c0,0,0.2,5.4-3,7c-3.2-1.6-3-7-3-7L0,0z')
                .attr('style', `mix-blend-mode: ${(colors || border) ? 'unset' : 'difference'}`)
                .attr('transform', `translate(0,-4)`);
      }
      let bg = g.select('circle.bg');
      let fg = g.select('path.fg'),
          shg = g.select('g'),
          sh = g.select('path.icon');
      let half = arc().innerRadius(0)
                  .outerRadius(r * inset)
                  .startAngle(-(angle / 2))
                  .endAngle(angle / 2);

      bg.attr('r', r).attr('cx', cx).attr('cy', cy).attr('fill', bgColor);
      fg.attr('d', half).attr('fill', fgColor)
      sh.attr('fill', (colors || border) ? fgColor : bgColor).attr('stroke', bgColor);

      let tfg = fg;
      if (transition === true) {
        g = g.transition(context);
        tfg = fg.transition(context);
        shg = shg.transition(context);
      }

      g.attr('transform', `translate(${r},${r}), scale(${zoom}), translate(${-r},${-r})`);
      tfg.attr('transform', `translate(${r},${r}), rotate(${rotation})`);
      shg.attr('transform', `translate(${r},${r}), scale(${iconScale * icon})`);
    });
  }

  _impl.self = function() { return 'g' + (id ?  '#' + id : '.' + classed); }

  _impl.id = function() {
    return id;
  };

  _impl.parent = function() {
    return id ? '#svg-' + id : '.svg-svg';
  };

  _impl.classed = function(value) {
    return arguments.length ? (classed = value, _impl) : classed;
  };

  _impl.size = function(value) {
    return arguments.length ? (width = value, height = null, _impl) : width;
  };

  _impl.width = function(value) {
    return arguments.length ? (width = value, _impl) : width;
  };

  _impl.height = function(value) {
    return arguments.length ? (height = value, _impl) : height;
  };

  _impl.scale = function(value) {
    return arguments.length ? (scale = value, _impl) : scale;
  };

  _impl.zoom = function(value) {
    return arguments.length ? (zoom = value, _impl) : zoom;
  };

  _impl.inset = function(value) {
    return arguments.length ? (inset = value, _impl) : inset;
  };

  _impl.rotation = function(value) {
    return arguments.length ? (rotation = value, _impl) : rotation;
  };

  _impl.angle = function(value) {
    return arguments.length ? (angle = value, _impl) : angle;
  };

  _impl.colors = function(bgC, fgC) {
    return arguments.length === 2 ? (colors =  true, bgColor = bgC, fgColor = fgC, _impl) : bgColor;
  };

  _impl.border = function(value) {
    return arguments.length ? (border = value, _impl) : border;
  };

  _impl.icon = function(value) {
    return arguments.length ? (icon = value, _impl) : icon;
  };

  return _impl;
}
