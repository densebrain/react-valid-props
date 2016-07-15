'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.filterProps = filterProps;


// https://facebook.github.io/react/docs/tags-and-attributes.html#svg-attributes
var SVGPropNames = exports.SVGPropNames = ['clipPath', 'cx', 'cy', 'd', 'dx', 'dy', 'fill', 'fillOpacity', 'fontFamily', 'fontSize', 'fx', 'fy', 'gradientTransform', 'gradientUnits', 'markerEnd', 'markerMid', 'markerStart', 'offset', 'opacity', 'patternContentUnits', 'patternUnits', 'points', 'preserveAspectRatio', 'r', 'rx', 'ry', 'spreadMethod', 'stopColor', 'stopOpacity', 'stroke', 'strokeDasharray', 'strokeLinecap', 'strokeOpacity', 'strokeWidth', 'textAnchor', 'transform', 'version', 'viewBox', 'x1', 'x2', 'x', 'y1', 'y2', 'y'];

var HTMLPropNames = exports.HTMLPropNames = ['accept', 'acceptCharset', 'accessKey', 'action', 'allowFullScreen', 'allowTransparency', 'alt', 'async', 'autoComplete', 'autoFocus', 'autoPlay', 'cellPadding', 'cellSpacing', 'charSet', 'checked', 'classID', 'className', 'colSpan', 'cols', 'content', 'contentEditable', 'contextMenu', 'controls', 'coords', 'crossOrigin', 'data', 'dateTime', 'defer', 'dir', 'disabled', 'download', 'draggable', 'encType', 'form', 'formAction', 'formEncType', 'formMethod', 'formNoValidate', 'formTarget', 'frameBorder', 'headers', 'height', 'hidden', 'high', 'href', 'hrefLang', 'htmlFor', 'httpEquiv', 'icon', 'id', 'label', 'lang', 'list', 'loop', 'low', 'manifest', 'marginHeight', 'marginWidth', 'max', 'maxLength', 'media', 'mediaGroup', 'method', 'min', 'multiple', 'muted', 'name', 'noValidate', 'open', 'optimum', 'pattern', 'placeholder', 'poster', 'preload', 'radioGroup', 'readOnly', 'rel', 'required', 'role', 'rowSpan', 'rows', 'sandbox', 'scope', 'scoped', 'scrolling', 'seamless', 'selected', 'shape', 'size', 'sizes', 'span', 'spellCheck', 'src', 'srcDoc', 'srcSet', 'start', 'step', 'style', 'tabIndex', 'target', 'title', 'type', 'useMap', 'value', 'width', 'wmode'];

var toLower = function toLower(str) {
	return !str ? null : str.toLowerCase();
};

var mergedProps = SVGPropNames.concat(HTMLPropNames).map(function (propName) {
	return toLower(propName);
});

var AllReactProps = exports.AllReactProps = mergedProps.filter(function (propName, index) {
	return mergedProps.indexOf(propName) === index;
});

function filterProps(props) {
	return Object.keys(props).filter(function (propName) {
		return propName && AllReactProps.indexOf(toLower(propName)) > -1;
	}).reduce(function (filteredProps, propName) {
		filteredProps[propName] = props[propName];
		return filteredProps;
	}, {});
}

exports.default = filterProps;

//# sourceMappingURL=react-valid-props.js.map