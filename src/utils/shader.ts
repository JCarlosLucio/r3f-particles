import { snoise3 } from './noise';

// vertex shader
export const vertexShader = `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

// fragment shader
export const fragmentShader = `
  precision highp float;

  ${snoise3}

  uniform float scale;
  uniform float size;
  uniform float density;
  uniform float time;

  uniform vec3 bg;
  uniform vec3 yellow;
  uniform vec3 orange;

  varying vec2 vUv;

  float patternLine(float v) {
    float f = abs(fract(v) - .5);
    float df = fwidth(v) * density;
    return smoothstep(0., df, f);
  }

  float loopNoise (vec2 v, float t, float scale, float offset) {
    float duration = scale;
    float current = t * scale;
    return ((duration - current) * snoise(vec3(v, current + offset)) + current * snoise(vec3(v, current - duration + offset))) / duration;
  }

  vec3 gradient() {
    return mix(orange, yellow, vUv.x + vUv.y);
  }

  float box(vec2 st, vec2 w){
    // bottom-left
    vec2 bl = step(w, st);
    float pct = bl.x * bl.y;

    // top-right
    vec2 tr = step(w, 1.0 - st);
    pct *= tr.x * tr.y;

    return pct;
  }

  void main () {
    vec2 p = vUv * scale;
    float amp = 0.5;
    float v = 0.0;

    v += loopNoise(p, time, 1.0, 60.0) * amp;
    amp *= 0.5;
    p *= 2.0;
    v /= size;

    float t = patternLine(v);
    t *= box(vUv, vec2(0.01));
    vec3 fragColor = mix(gradient(), bg, t);

    gl_FragColor = vec4(fragColor, 1.0);
  }
`;
