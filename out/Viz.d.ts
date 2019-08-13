interface Viz {
  render(callback?: Function): void
  active(value?: Function): void
  aggs(value?: Object): void
  ariaHidden(value?: Boolean): void
  backConfig(value?: Object): void
  cache(value?: Boolean): void
  color(value?: Function | String | False): void
  colorScale(value?: Function | String | False): void
  colorScaleConfig(value?: Object): void
  colorScalePadding(value?: Boolean | Function): void
  colorScalePosition(value?: String | Boolean): void
  colorScaleMaxSize(value?: Number): void
  controls(value?: any[]): void
  controlConfig(value?: Object): void
  controlPadding(value?: Boolean | Function): void
  data(data: any[] | String, formatter?: Function): void
  dataCutoff(value?: Number): void
  depth(value?: Number): void
  detectResize(value: Boolean = true): void
  detectResizeDelay(value: Number = 400): void
  detectVisible(value: Boolean = true): void
  detectVisibleInterval(value: Number = 1000): void
  discrete(value?: String): void
  downloadButton(value?: Boolean): void
  downloadConfig(value?: Object): void
  downloadPosition(value?: String): void
  duration(ms?: Number): void
  filter(value?: Function): void
  groupBy(value?: String | Function | any[]): void
  height(value?: Number): void
  hiddenColor(value?: Function | String): void
  hiddenOpacity(value?: Function | Number): void
  hover(value?: Function): void
  label(value?: Function | String): void
  legend(value?: Boolean): void
  legendConfig(value?: Object): void
  legendCutoff(value?: Number): void
  legendTooltip(value?: Object): void
  legendPadding(value?: Boolean | Function): void
  legendPosition(value?: String): void
  legendSort(value: Function): void
  loadingHTML(value?: Function | String): void
  loadingMessage(value?: Boolean): void
  messageMask(value?: Boolean | String): void
  messageStyle(value?: Object): void
  noDataHTML(value?: Function | String): void
  noDataMessage(value?: Boolean): void
  scrollContainer(selector: String | HTMLElement): void
  select(selector?: String | HTMLElement): void
  shape(value?: Function | String): void
  shapeConfig(value?: Object): void
  svgDesc(value?: String): void
  svgTitle(value?: String): void
  threshold(value?: Function | Number): void
  thresholdKey(value?: Function | Number): void
  thresholdName(value?: String): void
  time(value?: Function | String): void
  timeFilter(value?: Function): void
  timeline(value?: Boolean): void
  timelineConfig(value?: Object): void
  timelinePadding(value?: Boolean | Function): void
  title(value?: Function | String): void
  titleConfig(value?: Object): void
  titlePadding(value?: Boolean | Function): void
  tooltip(value?: Boolean): void
  tooltipConfig(value?: Object): void
  total(value?: Boolean | Function | String): void
  totalConfig(value?: Object): void
  totalFormat(value: Function): void
  totalPadding(value?: Boolean | Function): void
  width(value?: Number): void
  zoom(value: Boolean = false): void
  zoomBrushHandleSize(value: Number = 1): void
  zoomBrushHandleStyle(value: Object | Boolean): void
  zoomBrushSelectionStyle(value: Object | Boolean): void
  zoomControlStyle(value: Object | Boolean): void
  zoomControlStyleActive(value: Object | Boolean): void
  zoomControlStyleHover(value: Object | Boolean): void
  zoomFactor(value: Number = 2): void
  zoomMax(value: Number = 16): void
  zoomPan(value: Boolean = true): void
  zoomPadding(value: Number = 20): void
  zoomScroll(value?: Boolean): void
}

interface Treemap extends Viz {
  tile: function
  layoutPadding: function | number
  sort: function //comparator
  sum: function | number
}
interface Pie extends Viz {
  innerRadius: function | number
  padAngle: number
  padPixel: number
  sort: function //comparator
  value: function | number
}
interface Donut extends Pie {}

interface Pack extends Viz {
  hover: function
  layoutPadding: function | number
  packOpacity: function | number
  sort: function //comparator
  sum: function | number
}
interface Tree extends Viz {
  orient: 'vertical' | 'horizontal'
  separation: function
}

interface Priestley extends Viz {
  axisConfig: Object
  start: function | string
  end: function | string
}

interface Network extends Viz {
  links: function //formatter
  linkSize: function | number = 1
  linkSizeMin: number = 2
  linkSizeScale: string = 'sqrt'
  nodeGroupBy: String | Function | Array
  nodes: function
  size: function | string
  sizeMax: number
  sizeMin: number
  sizeScale: string = 'sqrt'
  x: function | string
  y: function | string
}

interface Rings extends Viz {
  center: string
  hover: function
  //...
}
