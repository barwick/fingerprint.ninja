import 'lib/probes/vendor/modernizr'; // Modernizr runs feature detection on import

const getModernizrFeatures = () => JSON.parse(JSON.stringify(window.Modernizr)); // Results are mounted to this property - JSON used for deep clone

export default getModernizrFeatures;
