type Data = {[key: string]: any}

interface Viz {
/**
      @memberof Viz
      @desc If *value* is specified, sets the active method to the specified function and returns the current class instance.
      @param {Function} [*value*]
      @chainable
  */
active: ()=>any

/**
    @memberof Viz
    @desc If *value* is specified, sets the aggregation method for each key in the object and returns the current class instance.
    @param {Object} [*value*]
    @chainable
*/
aggs: {[key: keyof Data]: ()=>any}

/**
    @memberof Viz
    @desc Sets the "aria-hidden" attribute of the containing SVG element. The default value is "false", but it you need to hide the SVG from screen readers set this property to "true".
    @param {Boolean} [*value* = true]
    @chainable
*/
ariaHidden: boolean

/**
    @memberof Viz
    @desc If *value* is specified, sets the config method for the back button and returns the current class instance.
    @param {Object} [*value*]
    @chainable
*/
// extends TextBox extends BaseClass
backConfig: {[key: string]: any}


/**
    @memberof Viz
    @desc Enables a lru cache that stores up to 5 previously loaded files/URLs. Helpful when constantly writing over the data array with a URL in the render function of a react component.
    @param {Boolean} [*value* = false]
    @chainable
*/
cache: boolean

/**
    @memberof Viz
    @desc Defines the main color to be used for each data point in a visualization. Can be either an accessor function or a string key to reference in each data point. If a color value is returned, it will be used as is. If a string is returned, a unique color will be assigned based on the string.
    @param {Function|String|False} [*value*]
    @chainable
*/
color: string | (()=>string) | boolean

/**
    @memberof Viz
    @desc Defines the value to be used for a color scale. Can be either an accessor function or a string key to reference in each data point.
    @param {Function|String|False} [*value*]
    @chainable
*/
  colorScale: string | (() => string) | boolean

/**
    @memberof Viz
    @desc A pass-through to the config method of ColorScale.
    @param {Object} [*value*]
    @chainable
*/
colorScaleConfig(_) {
  return arguments.length ? (this._colorScaleConfig = assign(this._colorScaleConfig, _), this) : this._colorScaleConfig;
}

/**
    @memberof Viz
    @desc Tells the colorScale whether or not to use the internal padding defined by the visualization in it's positioning. For example, d3plus-plot will add padding on the left so that the colorScale appears centered above the x-axis. By default, this padding is only applied on screens larger than 600 pixels wide.
    @param {Boolean|Function} [*value*]
    @chainable
*/
colorScalePadding(_) {
  return arguments.length ? (this._colorScalePadding = typeof _ === "function" ? _ : constant(_), this) : this._colorScalePadding;
}

/**
    @memberof Viz
    @desc Defines which side of the visualization to anchor the color scale. Acceptable values are `"top"`, `"bottom"`, `"left"`, `"right"`, and `false`. A `false` value will cause the color scale to not be displayed, but will still color shapes based on the scale.
    @param {String|Boolean} [*value* = "bottom"]
    @chainable
*/
colorScalePosition(_) {
  return arguments.length ? (this._colorScalePosition = _, this) : this._colorScalePosition;
}

/**
    @memberof Viz
    @desc Sets the maximum pixel size for drawing the color scale: width for horizontal scales and height for vertical scales.
    @param {Number} [*value* = 600]
    @chainable
*/
colorScaleMaxSize(_) {
  return arguments.length ? (this._colorScaleMaxSize = _, this) : this._colorScaleMaxSize;
}

/**
    @memberof Viz
    @desc Defines a list of controls to be rendered at the bottom of the visualization.
    @param {Array} [*value*]
    @chainable
*/
controls(_) {
  return arguments.length ? (this._controls = _, this) : this._controls;
}

/**
    @memberof Viz
    @desc If *value* is specified, sets the config method for the controls and returns the current class instance.
    @param {Object} [*value*]
    @chainable
*/
controlConfig(_) {
  return arguments.length ? (this._controlConfig = assign(this._controlConfig, _), this) : this._controlConfig;
}

/**
    @memberof Viz
    @desc Tells the controls whether or not to use the internal padding defined by the visualization in it's positioning. For example, d3plus-plot will add padding on the left so that the controls appears centered above the x-axis. By default, this padding is only applied on screens larger than 600 pixels wide.
    @param {Boolean|Function} [*value*]
    @chainable
*/
controlPadding(_) {
  return arguments.length ? (this._controlPadding = typeof _ === "function" ? _ : constant(_), this) : this._controlPadding;
}

/**
    @memberof Viz
    @desc Sets the primary data array to be used when drawing the visualization. The value passed should be an *Array* of objects or a *String* representing a filepath or URL to be loaded. The following filetypes are supported: `csv`, `tsv`, `txt`, and `json`.
Additionally, a custom formatting function can be passed as a second argument to this method. This custom function will be passed the data that has been loaded, as long as there are no errors. This function should return the final array of obejcts to be used as the primary data array. For example, some JSON APIs return the headers split from the data values to save bandwidth. These would need be joined using a custom formatter.
If *data* is not specified, this method returns the current primary data array, which defaults to an empty array (`[]`);
    @param {Array|String} *data* = []
    @param {Function} [*formatter*]
    @chainable
*/
data(_, f) {
  if (arguments.length) {
    const prev = this._queue.find(q => q[3] === "data");
    const d = [load.bind(this), _, f, "data"];
    if (prev) this._queue[this._queue.indexOf(prev)] = d;
    else this._queue.push(d);
    this._hidden = [];
    this._solo = [];
    return this;
  }
  return this._data;
}

/**
    @memberof Viz
    @desc If the number of visible data points exceeds this number, the default hover behavior will be disabled (helpful for very large visualizations bogging down the DOM with opacity updates).
    @param {Number} [*value* = 100]
    @chainable
*/
dataCutoff(_) {
  return arguments.length ? (this._dataCutoff = _, this) : this._dataCutoff;
}

/**
    @memberof Viz
    @desc If *value* is specified, sets the depth to the specified number and returns the current class instance. The *value* should correspond with an index in the [groupBy](#groupBy) array.
    @param {Number} [*value*]
    @chainable
*/
depth(_) {
  return arguments.length ? (this._depth = _, this) : this._depth;
}

/**
    @memberof Viz
    @desc If the width and/or height of a Viz is not user-defined, it is determined by the size of it's parent element. When this method is set to `true`, the Viz will listen for the `window.onresize` event and adjust it's dimensions accordingly.
    @param {Boolean} *value* = true
    @chainable
*/
detectResize(_) {
  return arguments.length ? (this._detectResize = _, this) : this._detectResize;
}

/**
    @memberof Viz
    @desc When resizing the browser window, this is the millisecond delay to trigger the resize event.
    @param {Number} *value* = 400
    @chainable
*/
detectResizeDelay(_) {
  return arguments.length ? (this._detectResizeDelay = _, this) : this._detectResizeDelay;
}

/**
    @memberof Viz
    @desc Toggles whether or not the Viz should try to detect if it visible in the current viewport. When this method is set to `true`, the Viz will only be rendered when it has entered the viewport either through scrolling or if it's display or visibility is changed.
    @param {Boolean} *value* = true
    @chainable
*/
detectVisible(_) {
  return arguments.length ? (this._detectVisible = _, this) : this._detectVisible;
}

/**
    @memberof Viz
    @desc The interval, in milliseconds, for checking if the visualization is visible on the page.
    @param {Number} *value* = 1000
    @chainable
*/
detectVisibleInterval(_) {
  return arguments.length ? (this._detectVisibleInterval = _, this) : this._detectVisibleInterval;
}

/**
    @memberof Viz
    @desc If *value* is specified, sets the discrete accessor to the specified method name (usually an axis) and returns the current class instance.
    @param {String} [*value*]
    @chainable
*/
discrete(_) {
  return arguments.length ? (this._discrete = _, this) : this._discrete;
}

/**
    @memberof Viz
    @desc Shows a button that allows for downloading the current visualization.
    @param {Boolean} [*value* = false]
    @chainable
*/
downloadButton(_) {
  return arguments.length ? (this._downloadButton = _, this) : this._downloadButton;
}

/**
    @memberof Viz
    @desc Sets specific options of the saveElement function used when downloading the visualization.
    @param {Object} [*value* = {type: "png"}]
    @chainable
*/
downloadConfig(_) {
  return arguments.length ? (this._downloadConfig = assign(this._downloadConfig, _), this) : this._downloadConfig;
}

/**
    @memberof Viz
    @desc Defines which control group to add the download button into.
    @param {String} [*value* = "top"]
    @chainable
*/
downloadPosition(_) {
  return arguments.length ? (this._downloadPosition = _, this) : this._downloadPosition;
}

/**
    @memberof Viz
    @desc If *ms* is specified, sets the animation duration to the specified number and returns the current class instance. If *ms* is not specified, returns the current animation duration.
    @param {Number} [*ms* = 600]
    @chainable
*/
duration(_) {
  return arguments.length ? (this._duration = _, this) : this._duration;
}

/**
    @memberof Viz
    @desc If *value* is specified, sets the filter to the specified function and returns the current class instance.
    @param {Function} [*value*]
    @chainable
*/
filter(_) {
  return arguments.length ? (this._filter = _, this) : this._filter;
}

/**
    @memberof Viz
    @desc If *value* is specified, sets the group accessor(s) to the specified string, function, or array of values and returns the current class instance.
    @param {String|Function|Array} [*value*]
    @chainable
    @example
function value(d) {
return d.id;
}
*/
groupBy(_) {
  if (!arguments.length) return this._groupBy;
  if (!(_ instanceof Array)) _ = [_];
  return this._groupBy = _.map(k => {
    if (typeof k === "function") return k;
    else {
      if (!this._aggs[k]) {
        this._aggs[k] = a => {
          const v = unique(a);
          return v.length === 1 ? v[0] : v;
        };
      }
      return accessor(k);
    }
  }), this;
}

/**
    @memberof Viz
    @desc If *value* is specified, sets the overall height to the specified number and returns the current class instance.
    @param {Number} [*value* = window.innerHeight]
    @chainable
*/
height(_) {
  return arguments.length ? (this._height = _, this) : this._height;
}

/**
    @memberof Viz
    @desc Defines the color used for legend shapes when the corresponding grouping is hidden from display (by clicking on the legend).
    @param {Function|String} [*value* = "#aaa"]
    @chainable
*/
hiddenColor(_) {
  return arguments.length ? (this._hiddenColor = typeof _ === "function" ? _ : constant(_), this) : this._hiddenColor;
}

/**
    @memberof Viz
    @desc Defines the opacity used for legend labels when the corresponding grouping is hidden from display (by clicking on the legend).
    @param {Function|Number} [*value* = 0.5]
    @chainable
*/
hiddenOpacity(_) {
  return arguments.length ? (this._hiddenOpacity = typeof _ === "function" ? _ : constant(_), this) : this._hiddenOpacity;
}

/**
    @memberof Viz
    @desc If *value* is specified, sets the hover method to the specified function and returns the current class instance.
    @param {Function} [*value*]
    @chainable
*/
hover(_) {

  let hoverFunction = this._hover = _;

  if (this._shapeConfig.hoverOpacity !== 1) {

    if (typeof _ === "function") {

      let shapeData = arrayMerge(this._shapes.map(s => s.data()));
      shapeData = shapeData.concat(this._legendClass.data());
      const activeData = _ ? shapeData.filter(_) : [];

      let activeIds = [];
      activeData.map(this._ids).forEach(ids => {
        for (let x = 1; x <= ids.length; x++) {
          activeIds.push(JSON.stringify(ids.slice(0, x)));
        }
      });
      activeIds = activeIds.filter((id, i) => activeIds.indexOf(id) === i);

      if (activeIds.length) hoverFunction = (d, i) => activeIds.includes(JSON.stringify(this._ids(d, i)));

    }

    this._shapes.forEach(s => s.hover(hoverFunction));
    if (this._legend) this._legendClass.hover(hoverFunction);

  }

  return this;
}

/**
    @memberof Viz
    @desc If *value* is specified, sets the label accessor to the specified function or string and returns the current class instance.
    @param {Function|String} [*value*]
    @chainable
*/
label(_) {
  return arguments.length ? (this._label = typeof _ === "function" ? _ : constant(_), this) : this._label;
}

/**
    @memberof Viz
    @desc If *value* is specified, toggles the legend based on the specified boolean and returns the current class instance.
    @param {Boolean} [*value* = true]
    @chainable
*/
legend(_) {
  return arguments.length ? (this._legend = _, this) : this._legend;
}

/**
    @memberof Viz
    @desc If *value* is specified, the object is passed to the legend's config method.
    @param {Object} [*value*]
    @chainable
*/
legendConfig(_) {
  return arguments.length ? (this._legendConfig = assign(this._legendConfig, _), this) : this._legendConfig;
}

/**
 * @memberof Viz
 * @desc If *value* is specified, sets the cutoff for the amount of categories in the legend.
 * @param {Number} [*value* = 1]
 * @chainable
 */
legendCutoff(_) {
  return arguments.length ? (this._legendCutoff = _, this) : this._legendCutoff;
}

/**
    @memberof Viz
    @desc If *value* is specified, sets the config method for the legend tooltip and returns the current class instance.
    @param {Object} [*value* = {}]
    @chainable
*/
legendTooltip(_) {
  return arguments.length ? (this._legendTooltip = assign(this._legendTooltip, _), this) : this._legendTooltip;
}

/**
    @memberof Viz
    @desc Tells the legend whether or not to use the internal padding defined by the visualization in it's positioning. For example, d3plus-plot will add padding on the left so that the legend appears centered underneath the x-axis. By default, this padding is only applied on screens larger than 600 pixels wide.
    @param {Boolean|Function} [*value*]
    @chainable
*/
legendPadding(_) {
  return arguments.length ? (this._legendPadding = typeof _ === "function" ? _ : constant(_), this) : this._legendPadding;
}

/**
    @memberof Viz
    @desc Defines which side of the visualization to anchor the legend. Expected values are `"top"`, `"bottom"`, `"left"`, and `"right"`.
    @param {String} [*value* = "bottom"]
    @chainable
*/
legendPosition(_) {
  return arguments.length ? (this._legendPosition = _, this) : this._legendPosition;
}

/**
    @memberof Viz
    @desc A JavaScript [sort comparator function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) used to sort the legend.
    @param {Function} *value*
    @chainable
*/
legendSort(_) {
  return arguments.length ? (this._legendSort = _, this) : this._legendSort;
}

/**
    @memberof Viz
    @desc Sets the inner HTML of the status message that is displayed when loading AJAX requests and displaying errors. Must be a valid HTML string or a function that, when passed this Viz instance, returns a valid HTML string.
    @param {Function|String} [*value*]
    @chainable
*/
loadingHTML(_) {
  return arguments.length ? (this._loadingHTML = typeof _ === "function" ? _ : constant(_), this) : this._loadingHTML;
}

/**
    @memberof Viz
    @desc Toggles the visibility of the status message that is displayed when loading AJAX requests and displaying errors.
    @param {Boolean} [*value* = true]
    @chainable
*/
loadingMessage(_) {
  return arguments.length ? (this._loadingMessage = _, this) : this._loadingMessage;
}

/**
    @memberof Viz
    @desc Sets the color of the mask used underneath the status message that is displayed when loading AJAX requests and displaying errors. Additionally, `false` will turn off the mask completely.
    @param {Boolean|String} [*value* = "rgba(0, 0, 0, 0.1)"]
    @chainable
*/
messageMask(_) {
  return arguments.length ? (this._messageMask = _, this) : this._messageMask;
}

/**
    @memberof Viz
    @desc Defines the CSS style properties for the status message that is displayed when loading AJAX requests and displaying errors.
    @param {Object} [*value*]
    @chainable
*/
messageStyle(_) {
  return arguments.length ? (this._messageStyle = assign(this._messageStyle, _), this) : this._messageStyle;
}

/**
    @memberof Viz
    @desc Sets the inner HTML of the status message that is displayed when no data is supplied to the visualization. Must be a valid HTML string or a function that, when passed this Viz instance, returns a valid HTML string.
    @param {Function|String} [*value*]
    @chainable
*/
noDataHTML(_) {
  return arguments.length ? (this._noDataHTML = typeof _ === "function" ? _ : constant(_), this) : this._noDataHTML;
}

/**
   @memberof Viz
   @desc Toggles the visibility of the status message that is displayed when no data is supplied to the visualization.
   @param {Boolean} [*value* = true]
   @chainable
*/
noDataMessage(_) {
  return arguments.length ? (this._noDataMessage = _, this) : this._noDataMessage;
}

/**
    @memberof Viz
    @desc If using scroll or visibility detection, this method allow a custom override of the element to which the scroll detection function gets attached.
    @param {String|HTMLElement} *selector*
    @chainable
*/
scrollContainer(_) {
  return arguments.length ? (this._scrollContainer = _, this) : this._scrollContainer;
}

/**
    @memberof Viz
    @desc If *selector* is specified, sets the SVG container element to the specified d3 selector or DOM element and returns the current class instance. If *selector* is not specified, returns the current SVG container element, which is `undefined` by default.
    @param {String|HTMLElement} [*selector*]
    @chainable
*/
select(_) {
  return arguments.length ? (this._select = select(_), this) : this._select;
}

/**
    @memberof Viz
    @desc If *value* is specified, sets the shape accessor to the specified function or number and returns the current class instance.
    @param {Function|String} [*value*]
    @chainable
*/
shape(_) {
  return arguments.length ? (this._shape = typeof _ === "function" ? _ : constant(_), this) : this._shape;
}

/**
    @memberof Viz
    @desc If *value* is specified, sets the config method for each shape and returns the current class instance.
    @param {Object} [*value*]
    @chainable
*/
shapeConfig(_) {
  return arguments.length ? (this._shapeConfig = assign(this._shapeConfig, _), this) : this._shapeConfig;
}

/**
    @memberof Viz
    @desc If *value* is specified, sets the description accessor to the specified string and returns the current class instance.
    @param {String} [*value*]
    @chainable
*/
svgDesc(_) {
  return arguments.length ? (this._svgDesc = _, this) : this._svgDesc;
}

/**
    @memberof Viz
    @desc If *value* is specified, sets the title accessor to the specified string and returns the current class instance.
    @param {String} [*value*]
    @chainable
*/
svgTitle(_) {
  return arguments.length ? (this._svgTitle = _, this) : this._svgTitle;
}

/**
    @memberof Viz
    @desc If *value* is specified, sets the threshold for buckets to the specified function or string, and returns the current class instance.
    @param {Function|Number} [value]
    @chainable
 */
threshold(_) {
  if (arguments.length) {
    if (typeof _ === "function") {
      this._threshold = _;
    }
    else if (isFinite(_) && !isNaN(_)) {
      this._threshold = constant(_ * 1);
    }
    return this;
  }
  else return this._threshold;
}

/**
    @memberof Viz
    @desc If *value* is specified, sets the accesor for the value used in the threshold algorithm, and returns the current class instance.
    @param {Function|Number} [value]
    @chainable
 */
thresholdKey(key) {
  if (arguments.length) {
    if (typeof key === "function") {
      this._thresholdKey = key;
    }
    else {
      this._thresholdKey = accessor(key);
    }
    return this;
  }
  else return this._thresholdKey;
}

/**
    @memberof Viz
    @desc If *value* is specified, sets the label for the bucket item, and returns the current class instance.
    @param {String} [value]
    @chainable
 */
thresholdName(_) {
  return arguments.length ? (this._thresholdName = _, this) : this._thresholdName;
}

/**
    @memberof Viz
    @desc If *value* is specified, sets the time accessor to the specified function or string and returns the current class instance.
    @param {Function|String} [*value*]
    @chainable
*/
time(_) {
  if (arguments.length) {
    if (typeof _ === "function") {
      this._time = _;
    }
    else {
      this._time = accessor(_);
      if (!this._aggs[_]) {
        this._aggs[_] = a => {
          const v = unique(a);
          return v.length === 1 ? v[0] : v;
        };
      }
    }
    this._timeFilter = false;
    return this;
  }
  else return this._time;
}

/**
    @memberof Viz
    @desc If *value* is specified, sets the time filter to the specified function and returns the current class instance.
    @param {Function} [*value*]
    @chainable
*/
timeFilter(_) {
  return arguments.length ? (this._timeFilter = _, this) : this._timeFilter;
}

/**
    @memberof Viz
    @desc If *value* is specified, toggles the timeline based on the specified boolean and returns the current class instance.
    @param {Boolean} [*value* = true]
    @chainable
*/
timeline(_) {
  return arguments.length ? (this._timeline = _, this) : this._timeline;
}

/**
    @memberof Viz
    @desc If *value* is specified, sets the config method for the timeline and returns the current class instance.
    @param {Object} [*value*]
    @chainable
*/
timelineConfig(_) {
  return arguments.length ? (this._timelineConfig = assign(this._timelineConfig, _), this) : this._timelineConfig;
}

/**
    @memberof Viz
    @desc Tells the timeline whether or not to use the internal padding defined by the visualization in it's positioning. For example, d3plus-plot will add padding on the left so that the timeline appears centered underneath the x-axis. By default, this padding is only applied on screens larger than 600 pixels wide.
    @param {Boolean|Function} [*value*]
    @chainable
*/
timelinePadding(_) {
  return arguments.length ? (this._timelinePadding = typeof _ === "function" ? _ : constant(_), this) : this._timelinePadding;
}

/**
    @memberof Viz
    @desc If *value* is specified, sets the title accessor to the specified function or string and returns the current class instance.
    @param {Function|String} [*value*]
    @chainable
*/
title(_) {
  return arguments.length ? (this._title = typeof _ === "function" ? _ : constant(_), this) : this._title;
}

/**
    @memberof Viz
    @desc If *value* is specified, sets the config method for the title and returns the current class instance.
    @param {Object} [*value*]
    @chainable
*/
titleConfig(_) {
  return arguments.length ? (this._titleConfig = assign(this._titleConfig, _), this) : this._titleConfig;
}

/**
    @memberof Viz
    @desc Tells the title whether or not to use the internal padding defined by the visualization in it's positioning. For example, d3plus-plot will add padding on the left so that the title appears centered above the x-axis. By default, this padding is only applied on screens larger than 600 pixels wide.
    @param {Boolean|Function} [*value*]
    @chainable
*/
titlePadding(_) {
  return arguments.length ? (this._titlePadding = typeof _ === "function" ? _ : constant(_), this) : this._titlePadding;
}

/**
    @memberof Viz
    @desc If *value* is specified, toggles the tooltip based on the specified boolean and returns the current class instance.
    @param {Boolean} [*value* = true]
    @chainable
*/
tooltip(_) {
  return arguments.length ? (this._tooltip = _, this) : this._tooltip;
}

/**
    @memberof Viz
    @desc If *value* is specified, sets the config method for the tooltip and returns the current class instance.
    @param {Object} [*value*]
    @chainable
*/
tooltipConfig(_) {
  return arguments.length ? (this._tooltipConfig = assign(this._tooltipConfig, _), this) : this._tooltipConfig;
}

/**
    @memberof Viz
    @desc If *value* is specified, sets the total accessor to the specified function or string and returns the current class instance.
    @param {Boolean|Function|String} [*value*]
    @chainable
*/
total(_) {
  if (arguments.length) {
    if (typeof _ === "function") this._total = _;
    else if (_) this._total = accessor(_);
    else this._total = false;
    return this;
  }
  else return this._total;
}

/**
    @memberof Viz
    @desc If *value* is specified, sets the config method for the total and returns the current class instance.
    @param {Object} [*value*]
    @chainable
*/
totalConfig(_) {
  return arguments.length ? (this._totalConfig = assign(this._totalConfig, _), this) : this._totalConfig;
}

/**
    @memberof Viz
    @desc Formatter function for the value in the total bar.
    @param {Function} *value*
    @chainable
*/
totalFormat(_) {
  return arguments.length ? (this._totalFormat = _, this) : this._totalFormat;
}

/**
    @memberof Viz
    @desc Tells the total whether or not to use the internal padding defined by the visualization in it's positioning. For example, d3plus-plot will add padding on the left so that the total appears centered above the x-axis. By default, this padding is only applied on screens larger than 600 pixels wide.
    @param {Boolean|Function} [*value*]
    @chainable
*/
totalPadding(_) {
  return arguments.length ? (this._totalPadding = typeof _ === "function" ? _ : constant(_), this) : this._totalPadding;
}

/**
    @memberof Viz
    @desc If *value* is specified, sets the overallwidth to the specified number and returns the current class instance.
    @param {Number} [*value* = window.innerWidth]
    @chainable
*/
width(_) {
  return arguments.length ? (this._width = _, this) : this._width;
}

/**
    @memberof Viz
    @desc Toggles the ability to zoom/pan the visualization. Certain parameters for zooming are required to be hooked up on a visualization by visualization basis.
    @param {Boolean} *value* = false
    @chainable
*/
zoom(_) {
  return arguments.length ? (this._zoom = _, this) : this._zoom;
}

/**
    @memberof Viz
    @desc The pixel stroke-width of the zoom brush area.
    @param {Number} *value* = 1
    @chainable
*/
zoomBrushHandleSize(_) {
  return arguments.length ? (this._zoomBrushHandleSize = _, this) : this._zoomBrushHandleSize;
}

/**
    @memberof Viz
    @desc An object containing CSS key/value pairs that is used to style the outer handle area of the zoom brush. Passing `false` will remove all default styling.
    @param {Object|Boolean} *value*
    @chainable
*/
zoomBrushHandleStyle(_) {
  return arguments.length ? (this._zoomBrushHandleStyle = _, this) : this._zoomBrushHandleStyle;
}

/**
    @memberof Viz
    @desc An object containing CSS key/value pairs that is used to style the inner selection area of the zoom brush. Passing `false` will remove all default styling.
    @param {Object|Boolean} *value*
    @chainable
*/
zoomBrushSelectionStyle(_) {
  return arguments.length ? (this._zoomBrushSelectionStyle = _, this) : this._zoomBrushSelectionStyle;
}

/**
    @memberof Viz
    @desc An object containing CSS key/value pairs that is used to style each zoom control button (`.zoom-in`, `.zoom-out`, `.zoom-reset`, and `.zoom-brush`). Passing `false` will remove all default styling.
    @param {Object|Boolean} *value*
    @chainable
*/
zoomControlStyle(_) {
  return arguments.length ? (this._zoomControlStyle = _, this) : this._zoomControlStyle;
}

/**
    @memberof Viz
    @desc An object containing CSS key/value pairs that is used to style each zoom control button when active (`.zoom-in`, `.zoom-out`, `.zoom-reset`, and `.zoom-brush`). Passing `false` will remove all default styling.
    @param {Object|Boolean} *value*
    @chainable
*/
zoomControlStyleActive(_) {
  return arguments.length ? (this._zoomControlStyleActive = _, this) : this._zoomControlStyleActive;
}

/**
    @memberof Viz
    @desc An object containing CSS key/value pairs that is used to style each zoom control button on hover (`.zoom-in`, `.zoom-out`, `.zoom-reset`, and `.zoom-brush`). Passing `false` will remove all default styling.
    @param {Object|Boolean} *value*
    @chainable
*/
zoomControlStyleHover(_) {
  return arguments.length ? (this._zoomControlStyleHover = _, this) : this._zoomControlStyleHover;
}

/**
    @memberof Viz
    @desc The multiplier that is used in with the control buttons when zooming in and out.
    @param {Number} *value* = 2
    @chainable
*/
zoomFactor(_) {
  return arguments.length ? (this._zoomFactor = _, this) : this._zoomFactor;
}

/**
    @memberof Viz
    @desc If *value* is specified, sets the max zoom scale to the specified number and returns the current class instance. If *value* is not specified, returns the current max zoom scale.
    @param {Number} *value* = 16
    @chainable
*/
zoomMax(_) {
  return arguments.length ? (this._zoomMax = _, this) : this._zoomMax;
}

/**
    @memberof Viz
    @desc If *value* is specified, toggles panning to the specified boolean and returns the current class instance. If *value* is not specified, returns the current panning value.
    @param {Boolean} *value* = true
    @chainable
*/
zoomPan(_) {
  return arguments.length ? (this._zoomPan = _, this) : this._zoomPan;
}

/**
    @memberof Viz
    @desc A pixel value to be used to pad all sides of a zoomed area.
    @param {Number} *value* = 20
    @chainable
*/
zoomPadding(_) {
  return arguments.length ? (this._zoomPadding = _, this) : this._zoomPadding;
}

/**
    @memberof Viz
    @desc If *value* is specified, toggles scroll zooming to the specified boolean and returns the current class instance. If *value* is not specified, returns the current scroll zooming value.
    @param {Boolean} [*value* = true]
    @chainable
*/
zoomScroll(_) {
  return arguments.length ? (this._zoomScroll = _, this) : this._zoomScroll;
}
}