'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsShallowCompare = require('react-addons-shallow-compare');

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

var _padLine = require('./utils/pad-line');

var _padLine2 = _interopRequireDefault(_padLine);

var _separateChildrenByType = require('./utils/separate-children-by-type');

var _separateChildrenByType2 = _interopRequireDefault(_separateChildrenByType);

var _getPaddingFromCircleNodes = require('./utils/get-padding-from-circle-nodes');

var _getPaddingFromCircleNodes2 = _interopRequireDefault(_getPaddingFromCircleNodes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var number = _react.PropTypes.number;
var LinkGraph = (_temp = _class = function (_Component) {
  _inherits(LinkGraph, _Component);

  function LinkGraph() {
    _classCallCheck(this, LinkGraph);

    return _possibleConstructorReturn(this, (LinkGraph.__proto__ || Object.getPrototypeOf(LinkGraph)).apply(this, arguments));
  }

  _createClass(LinkGraph, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProp, nextState) {
      return (0, _reactAddonsShallowCompare2.default)(this, nextProp, nextState);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;

      var restProps = _objectWithoutProperties(_props, ['children']);

      var _separateChildrenByTy = (0, _separateChildrenByType2.default)(children);

      var defs = _separateChildrenByTy.defs;
      var nodes = _separateChildrenByTy.nodes;
      var links = _separateChildrenByTy.links;

      // 1. get all nodes and extract their cx, cy locations
      // 2. clone the links and subplant the x1, y1 with the cx cy locations
      // of the nodes.

      var linksWithCoords = links.map(function (link) {
        var _link$props = link.props;
        var from = _link$props.from;
        var to = _link$props.to;
        var _link$props$paddingSt = _link$props.paddingStart;
        var paddingStart = _link$props$paddingSt === undefined ? 0 : _link$props$paddingSt;
        var _link$props$paddingEn = _link$props.paddingEnd;
        var paddingEnd = _link$props$paddingEn === undefined ? 0 : _link$props$paddingEn;

        var linkProps = _objectWithoutProperties(_link$props, ['from', 'to', 'paddingStart', 'paddingEnd']);

        var _getPaddingFromCircle = (0, _getPaddingFromCircleNodes2.default)(from, nodes);

        var x1 = _getPaddingFromCircle.cx;
        var y1 = _getPaddingFromCircle.cy;
        var r1 = _getPaddingFromCircle.r;

        var _getPaddingFromCircle2 = (0, _getPaddingFromCircleNodes2.default)(to, nodes);

        var x2 = _getPaddingFromCircle2.cx;
        var y2 = _getPaddingFromCircle2.cy;
        var r2 = _getPaddingFromCircle2.r;

        // calculate the intersection points

        var paddedEndPoints = (0, _padLine2.default)(x1, y1, x2, y2, -r1 - paddingStart, -r2 - paddingEnd);

        return (0, _react.cloneElement)(link, _extends({}, paddedEndPoints, linkProps), link.children);
      });

      return _react2.default.createElement(
        'svg',
        restProps,
        defs,
        nodes,
        linksWithCoords
      );
    }
  }]);

  return LinkGraph;
}(_react.Component), _class.propTypes = {
  /** width of svg figure */
  width: number.isRequired,
  /** height of svg figure */
  height: number.isRequired
}, _temp);
exports.default = LinkGraph;
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(number, 'number', 'src/link-graph.js');

  __REACT_HOT_LOADER__.register(LinkGraph, 'LinkGraph', 'src/link-graph.js');
})();

;