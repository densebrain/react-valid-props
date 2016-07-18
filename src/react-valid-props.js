

export const EventPropNames = ("onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate " +
		"onKeyDown onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit " +
		"onDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave " +
		"onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel onTouchEnd onTouchMove onTouchStart onScroll onWheel " +
		"onAbort onCanPlay onCanPlayThrough onDurationChange onEmptied onEncrypted " +
		"onEnded onError onLoadedData onLoadedMetadata onLoadStart onPause onPlay " +
		"onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend " +
		"onTimeUpdate onVolumeChange onWaiting onLoad onError onAnimationStart onAnimationEnd onAnimationIteration onTransitionEnd").split(' ')

// https://facebook.github.io/react/docs/tags-and-attributes.html#svg-attributes
export const SVGPropNames = [
	'clipPath',
	'cx',
	'cy',
	'd',
	'dx',
	'dy',
	'fill',
	'fillOpacity',
	'fontFamily',
	'fontSize',
	'fx',
	'fy',
	'gradientTransform',
	'gradientUnits',
	'markerEnd',
	'markerMid',
	'markerStart',
	'offset',
	'opacity',
	'patternContentUnits',
	'patternUnits',
	'points',
	'preserveAspectRatio',
	'r',
	'rx',
	'ry',
	'spreadMethod',
	'stopColor',
	'stopOpacity',
	'stroke',
	'strokeDasharray',
	'strokeLinecap',
	'strokeOpacity',
	'strokeWidth',
	'textAnchor',
	'transform',
	'version',
	'viewBox',
	'x1',
	'x2',
	'x',
	'y1',
	'y2',
	'y'
]


export const HTMLPropNames = [
	'accept',
	'acceptCharset',
	'accessKey',
	'action',
	'allowFullScreen',
	'allowTransparency',
	'alt',
	'async',
	'autoComplete',
	'autoFocus',
	'autoPlay',
	'cellPadding',
	'cellSpacing',
	'charSet',
	'checked',
	'classID',
	'className',
	'colSpan',
	'cols',
	'content',
	'contentEditable',
	'contextMenu',
	'controls',
	'coords',
	'crossOrigin',
	'data',
	'dateTime',
	'defer',
	'dir',
	'disabled',
	'download',
	'draggable',
	'encType',
	'form',
	'formAction',
	'formEncType',
	'formMethod',
	'formNoValidate',
	'formTarget',
	'frameBorder',
	'headers',
	'height',
	'hidden',
	'high',
	'href',
	'hrefLang',
	'htmlFor',
	'httpEquiv',
	'icon',
	'id',
	'label',
	'lang',
	'list',
	'loop',
	'low',
	'manifest',
	'marginHeight',
	'marginWidth',
	'max',
	'maxLength',
	'media',
	'mediaGroup',
	'method',
	'min',
	'multiple',
	'muted',
	'name',
	'noValidate',
	'open',
	'optimum',
	'pattern',
	'placeholder',
	'poster',
	'preload',
	'radioGroup',
	'readOnly',
	'rel',
	'required',
	'role',
	'rowSpan',
	'rows',
	'sandbox',
	'scope',
	'scoped',
	'scrolling',
	'seamless',
	'selected',
	'shape',
	'size',
	'sizes',
	'span',
	'spellCheck',
	'src',
	'srcDoc',
	'srcSet',
	'start',
	'step',
	'style',
	'tabIndex',
	'target',
	'title',
	'type',
	'useMap',
	'value',
	'width',
	'wmode'
]

const toLower = (str) => !str ? null : str.toLowerCase()


const mergedProps = SVGPropNames.concat(EventPropNames,HTMLPropNames).map(propName => toLower(propName))

// Ensure unique
export const AllReactProps = mergedProps
	.filter((propName,index) => mergedProps.indexOf(propName) === index)


/**
 * Filter properties ensuring valid
 *
 * @param props
 * @returns {*}
 */
export function filterProps(props) {
	return Object.keys(props)
		.filter(propName => propName && AllReactProps.indexOf(toLower(propName)) > -1)
		.reduce((filteredProps,propName) => {
			filteredProps[propName] = props[propName]
			return filteredProps
		},{})
}

export default filterProps;

