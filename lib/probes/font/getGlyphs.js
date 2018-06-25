import { v3 as murmurhash } from 'murmur-hash';

/* eslint-disable-next-line max-len */
const glyphs = '\u20B9;\u2581;\u20BA;\uA73D;\uFFFD;\u20B8;\u05C6;\u1E9E;\u097F;\uF003;\u1CDA;\u17DD;\u23AE;\u0D02;\u0B82;\u115A;\u2425;\u302E;\uA830;\u2B06;\u21E4;\u20BD;\u2C7B;\u20B0;\uFBEE;\uF810;\uFFFF;\u007F;\u10A0;\u1D79;\u0700;\u1950;\u3095;\u532D;\u061C;\u20E3;\uFFF9;\u0218;\u058F;\u08E4;\u09B3;\u1C50;\u2619'.split(';');
const styles = ['sans-serif', 'serif', 'monospace', 'cursive', 'fantasy'];

const getGlyphs = () => {
  const results = styles
    .map(style =>
      glyphs
        .map(glyph => {
          const div = document.createElement('div');
          document.body.appendChild(div);

          div.style.position = 'absolute';
          div.style.left = '-5000px'; // Required - FF gives different bounding rects with window size
          div.style.visibility = 'hidden';
          div.style.fontFamily = style;
          div.style.fontSize = '10000%';
          div.textContent = glyph;

          const rect = div.getBoundingClientRect(); // DOMRect gives us access to unrounded dimensions
          const dims = `${rect.width},${rect.height}`;

          div.parentNode.removeChild(div);

          return dims;
        })
        .join(';'))
    .join(';');
  return murmurhash.x64.hash128(results, 999);
};

export default getGlyphs;
