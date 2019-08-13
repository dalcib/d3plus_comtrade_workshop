interface Geomap {
  fitFilter(value?: Number | String | any[] | Function): void
  fitKey(value: String): void
  fitObject(data: Object | String = undefined, formatter?: Function): void
  ocean(value?: String): void
  point(value?: Function | any[]): void
  pointSize(value?: Function | Number): void
  pointSizeMax(value?: Number): void
  pointSizeMin(value?: Number): void
  projection(projection: Function | String = 'geoMercator'): void
  projectionPadding(value?: Number | String): void
  tiles(value?: Boolean): void
  tileUrl(url?: String): void
  topojson(data: [] | String, formatter?: Function): void
  topojsonFill(value: String | Function): void
  topojsonFilter(value?: Number | String | any[] | Function): void
  topojsonKey(value: String): void
  topojsonId(value: String | Function = 'id'): void
}
