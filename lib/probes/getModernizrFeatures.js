import { v3 as murmurhash } from 'murmur-hash';

/* Modernizr runs feature detection on import (index.html).
 * Results mounted to window.Modernizr */
const getModernizrFeatures = () => murmurhash.x64.hash128(JSON.stringify(window.Modernizr), 999);

export default getModernizrFeatures;
