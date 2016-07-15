'use strict';

var _reactValidProps = require('./react-valid-props');

var _reactValidProps2 = _interopRequireDefault(_reactValidProps);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
	myBadKeyHere: '1234',
	className: 'good-stuff'
};

describe('react-valid-props', function () {
	it('filters invalid react props', function () {
		(0, _assert2.default)(Object.keys(props).length === 2, 'just a check');

		var newProps = (0, _reactValidProps2.default)(props);
		(0, _assert2.default)(Object.keys(newProps).length === 1, 'bad key gone');
		(0, _assert2.default)(newProps.className === props.className, 'class name still here');
	});
});

//# sourceMappingURL=react-valid-props.spec.js.map