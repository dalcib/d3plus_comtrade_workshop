interface Plot extends Viz {
  annotations(annotations: any[] | Object): void
  backgroundConfig(value?: Object): void
  barPadding(value: Number = 0): void
  baseline(value: Number): void
  confidence(value: String[] | any[]): void
  confidenceConfig(value?: Object): void
  discrete(value: String): void
  discreteCutoff(value: Number): void
  groupPadding(value?: Number): void
  shapeSort(value: Function): void
  size(value: Function | Number | String = 10): void
  sizeMax(value: Number = 20): void
  sizeMin(value: Number = 5): void
  sizeScale(value: String = 'sqrt'): void
  stacked(value: Boolean = false): void
  stackOffset(value: Function | String = 'descending'): void
  stackOrder(value: Function | String | any[] = 'none'): void
  x(value: Function | Number): void
  x2(value: Function | Number): void
  xConfig(value: Object): void
  xCutoff(value: Number): void
  x2Config(value: Object): void
  xDomain(value: any[]): void
  x2Domain(value: any[]): void
  xSort(value: Function): void
  x2Sort(value: Function): void
  y(value: Function | Number): void
  y2(value: Function | Number): void
  yConfig(value: Object): void
  yCutoff(value: Number): void
  y2Config(value: Object): void
  yDomain(value: any[]): void
  y2Domain(value: any[]): void
  ySort(value: Function): void
  y2Sort(value: Function): void
}

/*

AreaPlot
  .baseline(0)
  .discrete("x")
  .shape("Area")

BarChart
  .baseline(0)
  .discrete("x")
  .shape("Bar")

BoxWhisker
  .discrete("x")
  .shape("Box")

LinePlot
  .discrete("x")
  .shape("Line")

StackedArea
  .stacked(true)

BumpChart
  .discrete("x")
  .shape("Line")
  .x("x")
  .y2(d => this._y(d))
  .yConfig({
    tickFormat: val => {
      const data = this._formattedData;
      const xDomain = this._xDomain;
      const startData = data.filter(d => d.x === xDomain[0]);
      const d = startData.find(d => d.y === val);
      return this._drawLabel(d, d.i);
     }
   })
  .y2Config({
    tickFormat: val => {
      const data = this._formattedData;
      const xDomain = this._xDomain;
      const endData = data.filter(d => d.x === xDomain[xDomain.length - 1]);
      const d = endData.find(d => d.y === val);
      return this._drawLabel(d, d.i);
     }
   })
  .ySort((a, b) => b.y - a.y)
  .y2Sort((a, b) => b.y - a.y)


*/
