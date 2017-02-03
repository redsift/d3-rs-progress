import { select } from 'd3-selection';
import { easeSinIn as easeIn, easeSinOut as easeOut, easeBounce } from 'd3-ease';
import { default as icon } from './icon';

const DURATION = 333;
const DURATION_INTRO = 666;

let ID = 0;

function start(p, container, hide, to, scale) {
  to = (to == null) ? 90 : to;
  let ease = (to % 180 != 0) ? easeOut : easeIn;
  let duration = DURATION;
  
  if (scale == null) {
    duration = DURATION_INTRO;
    ease = easeBounce;
    scale = 1.0;
  }
  if (hide.value) {
    scale = 0.0;
  }
  p = p.rotation(to).zoom(scale);
  container.transition()
          .duration(duration)
          .ease(ease)
          .call(p)
          .on('end', () => {
            if (hide.value && scale == 0.0) {
              container.select(p.parent()).remove();
              hide.done('end')
            } else {
              to += 90;
              start(p, container, hide, to, scale);
            }
          });
}

export default function show(parent, p) {
    parent = parent || 'body';
    ID = ID + 1;

    p = p || icon(`progress-${ID}`);
    p.rotation(-90).zoom(0);
    let container = parent;
    
    if (typeof container === 'string') {
        container = select(parent);
    }

    container.call(p);
    let ok = null;
    let done = new Promise((_ok) => {
        ok = _ok;
    });
    let hide = { value: false, done: ok };
    const cancel = () => {
        hide.value = true;
        return done;
    }
    start(p, container, hide);
    return cancel;    
}