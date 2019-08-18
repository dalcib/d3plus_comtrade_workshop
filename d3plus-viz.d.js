active: any       //If value is specified, sets the active method to the specified function and returns the current class instance.
aggs: any         // If value is specified, sets the aggregation method for each key in the object and returns the current class instance.
ariaHidden: any   // Sets the "aria-hidden" attribute of the containing SVG element.The default value is "false", but it you need to hide the SVG from screen readers set this property to "true".
backConfig: any   // If value is specified, sets the config method for the back button and returns the current class instance.
cache: any        // Enables a lru cache that stores up to 5 previously loaded files / URLs.Helpful when constantly writing over the data array with a URL in the render function of a react component.
color: any        // Defines the main color to be used for each data point in a visualization.Can be either an accessor functin or a string key to reference in each data point.If a color value is returned, it will be used as is.If a string is returned, a unique color will be assigned based on the string.
colorScale: any   // Defines the value to be used for a color scale.Can be either an accessor function or a string key to reference in each data point.
colorScaleConfig: any // A pass - through to the config method of ColorScale.
colorScalePadding: any  // Tells the colorScale whether or not to use the internal padding defined by the visualization in it's positioning. For example, d3plus-plot will add padding on the left so that the colorScale appears centered above the x-axis. By default, this padding is only applied on screens larger than 600 pixels wide.
colorScalePosition: any  // Defines which side of the visualization to anchor the color scale.Acceptable values are "top", "bottom", "left", "right", and false.A false value will cause the color scale to not be displayed, but will still color shapes based on the scale.
colorScaleMaxSize: any  // Sets the maximum pixel size for drawing the color scale: width for horizontal scales and height for vertical scales.
controls: any     // Defines a list of controls to be rendered at the bottom of the visualization.
controlConfig: any  //If value is specified, sets the config method for the controls and returns the current class instance.
controlPadding: any  // Tells the controls whether or not to use the internal padding defined by the visualization in it's positioning. For example, d3plus-plot will add padding on the left so that the controls appears centered above the x-axis. By default, this padding is only applied on screens larger than 600 pixels wide.
data: Data | string /* (data, [formatter]) */  // Sets the primary data array to be used when drawing the visualization.The value passed should be an Array of objects or a String representing a filepath or URL to be loaded.The following filetypes are supported: csv, tsv, txt, and json.  Additionally, a custom formatting function can be passed as a second argument to this method.This custom function will be passed the data that has been loaded, as long as there are no errors.This function should return the final array of obejcts to be used as the primary data array.For example, some JSON APIs return the headers split from the data values to save bandwidth.These would need be joined using a custom formatter. If data is not specified, this method returns the current primary data array, which defaults to an empty array([]);
dataCutoff: any

  If the number of visible data points exceeds this number, the default hover behavior will be disabled(helpful for very large visualizations bogging down the DOM with opacity updates).



depth: any

  If value is specified, sets the depth to the specified number and returns the current class instance.The value should correspond with an index in the groupBy array.



detectResize(value) <>

  If the width and / or height of a Viz is not user - defined, it is determined by the size of it's parent element. When this method is set to true, the Viz will listen for the window.onresize event and adjust it's dimensions accordingly.



detectResizeDelay(value) <>

  When resizing the browser window, this is the millisecond delay to trigger the resize event.



detectVisible(value) <>

  Toggles whether or not the Viz should try to detect if it visible in the current viewport.When this method is set to true, the Viz will only be rendered when it has entered the viewport either through scrolling or if it's display or visibility is changed.



detectVisibleInterval(value) <>

  The interval, in milliseconds, for checking if the visualization is visible on the page.



discrete: any

  If value is specified, sets the discrete accessor to the specified method name(usually an axis) and returns the current class instance.



downloadButton: any

  Shows a button that allows for downloading the current visualization.



downloadConfig: any

  Sets specific options of the saveElement function used when downloading the visualization.



downloadPosition: any

  Defines which control group to add the download button into.



duration([ms]) <>

  If ms is specified, sets the animation duration to the specified number and returns the current class instance.If ms is not specified, returns the current animation duration.



filter: any

  If value is specified, sets the filter to the specified function and returns the current class instance.



groupBy: any

  If value is specified, sets the group accessor(s) to the specified string, function, or array of values and returns the current class instance.



function value(d) {
  return d.id;
}
height: any

  If value is specified, sets the overall height to the specified number and returns the current class instance.



hiddenColor: any

  Defines the color used for legend shapes when the corresponding grouping is hidden from display(by clicking on the legend).



hiddenOpacity: any

  Defines the opacity used for legend labels when the corresponding grouping is hidden from display(by clicking on the legend).



hover: any

  If value is specified, sets the hover method to the specified function and returns the current class instance.



label: any

  If value is specified, sets the label accessor to the specified function or string and returns the current class instance.



legend: any

  If value is specified, toggles the legend based on the specified boolean and returns the current class instance.



legendConfig: any

  If value is specified, the object is passed to the legend's config method.



legendCutoff: any

  If value is specified, sets the cutoff for the amount of categories in the legend.



legendTooltip: any

  If value is specified, sets the config method for the legend tooltip and returns the current class instance.



legendPadding: any

  Tells the legend whether or not to use the internal padding defined by the visualization in it's positioning. For example, d3plus-plot will add padding on the left so that the legend appears centered underneath the x-axis. By default, this padding is only applied on screens larger than 600 pixels wide.



legendPosition: any

  Defines which side of the visualization to anchor the legend.Expected values are "top", "bottom", "left", and "right".



legendSort(value) <>

  A JavaScript sort comparator function used to sort the legend.



loadingHTML: any

  Sets the inner HTML of the status message that is displayed when loading AJAX requests and displaying errors.Must be a valid HTML string or a function that, when passed this Viz instance, returns a valid HTML string.



loadingMessage: any

  Toggles the visibility of the status message that is displayed when loading AJAX requests and displaying errors.



messageMask: any

  Sets the color of the mask used underneath the status message that is displayed when loading AJAX requests and displaying errors.Additionally, false will turn off the mask completely.



messageStyle: any

  Defines the CSS style properties for the status message that is displayed when loading AJAX requests and displaying errors.



noDataHTML: any

  Sets the inner HTML of the status message that is displayed when no data is supplied to the visualization.Must be a valid HTML string or a function that, when passed this Viz instance, returns a valid HTML string.



noDataMessage: any

  Toggles the visibility of the status message that is displayed when no data is supplied to the visualization.



scrollContainer(selector) <>

  If using scroll or visibility detection, this method allow a custom override of the element to which the scroll detection function gets attached.



select([selector]) <>

  If selector is specified, sets the SVG container element to the specified d3 selector or DOM element and returns the current class instance.If selector is not specified, returns the current SVG container element, which is undefined by default.



shape: any

  If value is specified, sets the shape accessor to the specified function or number and returns the current class instance.



shapeConfig: any

  If value is specified, sets the config method for each shape and returns the current class instance.



svgDesc: any

  If value is specified, sets the description accessor to the specified string and returns the current class instance.



svgTitle: any

  If value is specified, sets the title accessor to the specified string and returns the current class instance.



threshold: any

  If value is specified, sets the threshold for buckets to the specified function or string, and returns the current class instance.



thresholdKey: any

  If value is specified, sets the accesor for the value used in the threshold algorithm, and returns the current class instance.



thresholdName: any

  If value is specified, sets the label for the bucket item, and returns the current class instance.



time: any

  If value is specified, sets the time accessor to the specified function or string and returns the current class instance.



timeFilter: any

  If value is specified, sets the time filter to the specified function and returns the current class instance.



timeline: any

  If value is specified, toggles the timeline based on the specified boolean and returns the current class instance.



timelineConfig: any

  If value is specified, sets the config method for the timeline and returns the current class instance.



timelinePadding: any

  Tells the timeline whether or not to use the internal padding defined by the visualization in it's positioning. For example, d3plus-plot will add padding on the left so that the timeline appears centered underneath the x-axis. By default, this padding is only applied on screens larger than 600 pixels wide.



title: any

  If value is specified, sets the title accessor to the specified function or string and returns the current class instance.



titleConfig: any

  If value is specified, sets the config method for the title and returns the current class instance.



titlePadding: any

  Tells the title whether or not to use the internal padding defined by the visualization in it's positioning. For example, d3plus-plot will add padding on the left so that the title appears centered above the x-axis. By default, this padding is only applied on screens larger than 600 pixels wide.



tooltip: any

  If value is specified, toggles the tooltip based on the specified boolean and returns the current class instance.



tooltipConfig: any

  If value is specified, sets the config method for the tooltip and returns the current class instance.



total: any

  If value is specified, sets the total accessor to the specified function or string and returns the current class instance.



totalConfig: any

  If value is specified, sets the config method for the total and returns the current class instance.



totalFormat(value) <>

  Formatter function for the value in the total bar.



totalPadding: any

  Tells the total whether or not to use the internal padding defined by the visualization in it's positioning. For example, d3plus-plot will add padding on the left so that the total appears centered above the x-axis. By default, this padding is only applied on screens larger than 600 pixels wide.



width: any

  If value is specified, sets the overallwidth to the specified number and returns the current class instance.



zoom(value) <>

  Toggles the ability to zoom / pan the visualization.Certain parameters for zooming are required to be hooked up on a visualization by visualization basis.



zoomBrushHandleSize(value) <>

  The pixel stroke - width of the zoom brush area.



zoomBrushHandleStyle(value) <>

  An object containing CSS key / value pairs that is used to style the outer handle area of the zoom brush.Passing false will remove all default styling.



zoomBrushSelectionStyle(value) <>

  An object containing CSS key / value pairs that is used to style the inner selection area of the zoom brush.Passing false will remove all default styling.



zoomControlStyle(value) <>

  An object containing CSS key / value pairs that is used to style each zoom control button(.zoom -in, .zoom - out, .zoom - reset, and.zoom - brush).Passing false will remove all default styling.



zoomControlStyleActive(value) <>

  An object containing CSS key / value pairs that is used to style each zoom control button when active(.zoom -in, .zoom - out, .zoom - reset, and.zoom - brush).Passing false will remove all default styling.



zoomControlStyleHover(value) <>

  An object containing CSS key / value pairs that is used to style each zoom control button on hover(.zoom -in, .zoom - out, .zoom - reset, and.zoom - brush).Passing false will remove all default styling.



zoomFactor(value) <>

  The multiplier that is used in with the control buttons when zooming in and out.



zoomMax(value) <>

  If value is specified, sets the max zoom scale to the specified number and returns the current class instance.If value is not specified, returns the current max zoom scale.



zoomPan(value) <>

  If value is specified, toggles panning to the specified boolean and returns the current class instance.If value is not specified, returns the current panning value.



zoomPadding(value) <>

  A pixel value to be used to pad all sides of a zoomed area.



zoomScroll: any

  If value is specified, toggles scroll zooming to the specified boolean and returns the current class instance.If value is not specified, returns the current scroll zooming value.


interface Viz {
render: any  //([callback]) 
active: ()=>{}
aggs: object 
ariaHidden: any 
backConfig: any 
cache: any 
color: any 
colorScale: any 
colorScaleConfig: any 
colorScalePadding: any 
colorScalePosition: any 
colorScaleMaxSize: any 
controls: any 
controlConfig: any 
controlPadding: any 
data: any      //(data, [formatter]) ↩︎
dataCutoff: any 
depth: any 
detectResize: any
detectResizeDelay: any
detectVisible: any
detectVisibleInterval: any
discrete: any 
downloadButton: any 
downloadConfig: any 
downloadPosition: any 
duration  //([ms]) 
filter: any 
groupBy: any 
height: any 
hiddenColor: any 
hiddenOpacity: any 
hover: any 
label: any 
legend: any 
legendConfig: any 
legendCutoff: any 
legendTooltip: any 
legendPadding: any 
legendPosition: any 
legendSort: any
loadingHTML: any 
loadingMessage: any 
messageMask: any 
messageStyle: any 
noDataHTML: any 
noDataMessage: any 
scrollContainer: any      //(selector)
select: any      //([selector])
shape: any 
shapeConfig: any 
svgDesc: any 
svgTitle: any 
threshold: any 
thresholdKey: any 
thresholdName: any 
time: any 
timeFilter: any 
timeline: any 
timelineConfig: any 
timelinePadding: any 
title: any 
titleConfig: any 
titlePadding: any 
tooltip: any 
tooltipConfig: any 
total: any 
totalConfig: any 
totalFormat: any
totalPadding: any 
width: any 
zoom: any
zoomBrushHandleSize: any
zoomBrushHandleStyle: any
zoomBrushSelectionStyle: any
zoomControlStyle: any
zoomControlStyleActive: any
zoomControlStyleHover: any
zoomFactor: any
zoomMax: any
zoomPan: any
zoomPadding: any
zoomScroll: any 
}