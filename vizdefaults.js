this._aggs = {};
this._ariaHidden = true;
this._backClass = new TextBox()
  .on("click", () => {
    if (this._history.length) this.config(this._history.pop()).render();
    else this.depth(this._drawDepth - 1).filter(false).render();
  })
  .on("mousemove", () => this._backClass.select().style("cursor", "pointer"));
this._backConfig = {
  fontSize: 10,
  padding: 5,
  resize: false
};
this._cache = true;

this._color = (d, i) => this._groupBy[0](d, i);
this._colorScaleClass = new ColorScale();
this._colorScaleConfig = {};
this._colorScalePadding = defaultPadding;
this._colorScalePosition = "bottom";
this._colorScaleMaxSize = 600;

const controlTest = new Select();
this._controlCache = {};
this._controlConfig = {
  selectStyle: Object.assign({ margin: "5px" }, controlTest.selectStyle())
};
this._controlPadding = defaultPadding;

this._data = [];
this._dataCutoff = 100;
this._detectResize = true;
this._detectResizeDelay = 400;
this._detectVisible = true;
this._detectVisibleInterval = 1000;
this._downloadButton = false;
this._downloadConfig = { type: "png" };
this._downloadPosition = "top";
this._duration = 600;
this._hidden = [];
this._hiddenColor = constant("#aaa");
this._hiddenOpacity = constant(0.5);
this._history = [];
this._groupBy = [accessor("id")];

this._legend = true;
this._legendClass = new Legend();
this._legendConfig = {
  label: legendLabel.bind(this),
  shapeConfig: {
    ariaLabel: legendLabel.bind(this),
    labelConfig: {
      fontColor: undefined,
      fontResize: false,
      padding: 0
    }
  }
};
this._legendCutoff = 1;
this._legendPadding = defaultPadding;
this._legendPosition = "bottom";
this._legendSort = (a, b) => this._drawLabel(a).localeCompare(this._drawLabel(b));
this._legendTooltip = {};

this._loadingHTML = constant(`
    <div style="left: 50%; top: 50%; position: absolute; transform: translate(-50%, -50%); font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;">
      <strong>Loading Visualization</strong>
      <sub style="bottom: 0; display: block; line-height: 1; margin-top: 5px;"><a href="https://d3plus.org" target="_blank">Powered by D3plus</a></sub>
    </div>`);

this._loadingMessage = true;
this._lrucache = lrucache(10);
this._messageClass = new Message();
this._messageMask = "rgba(0, 0, 0, 0.05)";
this._messageStyle = {
  "bottom": "0",
  "left": "0",
  "position": "absolute",
  "right": "0",
  "text-align": "center",
  "top": "0"
};

this._noDataHTML = constant(`
    <div style="left: 50%; top: 50%; position: absolute; transform: translate(-50%, -50%); font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;">
      <strong>No Data Available</strong>
    </div>`);

this._noDataMessage = true;
this._on = {
  "click.shape": clickShape.bind(this),
  "click.legend": clickLegend.bind(this),
  "mouseenter": mouseenter.bind(this),
  "mouseleave": mouseleave.bind(this),
  "mousemove.shape": mousemoveShape.bind(this),
  "mousemove.legend": mousemoveLegend.bind(this)
};
this._queue = [];
this._scrollContainer = typeof window === undefined ? "" : window;
this._shape = constant("Rect");
this._shapes = [];
this._shapeConfig = {
  ariaLabel: (d, i) => this._drawLabel(d, i),
  fill: (d, i) => {
    while (d.__d3plus__ && d.data) {
      d = d.data;
      i = d.i;
    }
    if (this._colorScale) {
      const c = this._colorScale(d, i);
      if (c !== undefined && c !== null) {
        const scale = this._colorScaleClass._colorScale;
        const colors = this._colorScaleClass.color();
        if (!scale) return colors instanceof Array ? colors[colors.length - 1] : colors;
        else if (!scale.domain().length) return scale.range()[scale.range().length - 1];
        return scale(c);
      }
    }
    const c = this._color(d, i);
    if (color(c)) return c;
    return colorAssign(c);
  },
  labelConfig: {
    fontColor: (d, i) => {
      const c = typeof this._shapeConfig.fill === "function" ? this._shapeConfig.fill(d, i) : this._shapeConfig.fill;
      return colorContrast(c);
    }
  },
  opacity: constant(1),
  stroke: (d, i) => {
    const c = typeof this._shapeConfig.fill === "function" ? this._shapeConfig.fill(d, i) : this._shapeConfig.fill;
    return color(c).darker();
  },
  role: "presentation",
  strokeWidth: constant(0)
};
this._solo = [];
this._svgDesc = "";
this._svgTitle = "";

this._timeline = true;
this._timelineClass = new Timeline().align("end");
this._timelineConfig = {
  brushing: false,
  padding: 5
};
this._timelinePadding = defaultPadding;

this._threshold = constant(0.0001);
this._thresholdKey = undefined;
this._thresholdName = "Values";

this._titleClass = new TextBox();
this._titleConfig = {
  ariaHidden: true,
  fontSize: 12,
  padding: 5,
  resize: false,
  textAnchor: "middle"
};
this._titlePadding = defaultPadding;

this._tooltip = true;
this._tooltipClass = new Tooltip();
this._tooltipConfig = {
  pointerEvents: "none",
  titleStyle: {
    "max-width": "200px"
  }
};

this._totalClass = new TextBox();
this._totalConfig = {
  fontSize: 10,
  padding: 5,
  resize: false,
  textAnchor: "middle"
};
this._totalFormat = d => `Total: ${formatAbbreviate(d, this._locale)}`;
this._totalPadding = defaultPadding;

this._zoom = false;
this._zoomBehavior = zoom();
this._zoomBrush = brush();
this._zoomBrushHandleSize = 1;
this._zoomBrushHandleStyle = {
  fill: "#444"
};
this._zoomBrushSelectionStyle = {
  "fill": "#777",
  "stroke-width": 0
};
this._zoomControlStyle = {
  "background": "rgba(255, 255, 255, 0.75)",
  "border": "1px solid rgba(0, 0, 0, 0.75)",
  "color": "rgba(0, 0, 0, 0.75)",
  "display": "block",
  "font": "900 15px/21px 'Roboto', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
  "height": "20px",
  "margin": "5px",
  "opacity": 0.75,
  "padding": 0,
  "text-align": "center",
  "width": "20px"
};
this._zoomControlStyleActive = {
  background: "rgba(0, 0, 0, 0.75)",
  color: "rgba(255, 255, 255, 0.75)",
  opacity: 1
};
this._zoomControlStyleHover = {
  cursor: "pointer",
  opacity: 1
};
this._zoomFactor = 2;
this._zoomMax = 16;
this._zoomPadding = 20;
this._zoomPan = true;
this._zoomScroll = true;