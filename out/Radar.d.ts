interface Radar extends Viz {
  axisConfig: Object
  metric: () => {} | string
  value: () => {} | string
  outerPadding: 100 | number
}
