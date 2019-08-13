interface BaseClass {
  config(value?: Object): void
  locale(value?: Object | String): void
  on(typenames?: String, listener?: Function): void
}
