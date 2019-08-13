/**
 * Default padding logic that will return false if the screen is less than 600 pixels wide.
 */
declare function defaultPadding(): void;

/**
 * Turns an array of values into a list string.
 */
declare function listify(): void;

declare class Viz {
    constructor();

    /**
     * 
     * @param *callback* An optional callback function that, if passed, will be called after animation is complete.
     */
    static render(*callback*?: Function): void;

    /**
     * 
     * @param *value*
     */
    static active(*value*?: Function): void;

    /**
     * 
     * @param *value*
     */
    static aggs(*value*?: Object): void;

    /**
     * 
     * @param *value*
     */
    static ariaHidden(*value*?: Boolean): void;

    /**
     * 
     * @param *value*
     */
    static backConfig(*value*?: Object): void;

    /**
     * 
     * @param *value*
     */
    static cache(*value*?: Boolean): void;

    /**
     * 
     * @param *value*
     */
    static color(*value*?: Function | String | False): void;

    /**
     * 
     * @param *value*
     */
    static colorScale(*value*?: Function | String | False): void;

    /**
     * 
     * @param *value*
     */
    static colorScaleConfig(*value*?: Object): void;

    /**
     * 
     * @param *value*
     */
    static colorScalePadding(*value*?: Boolean | Function): void;

    /**
     * 
     * @param *value*
     */
    static colorScalePosition(*value*?: String | Boolean): void;

    /**
     * 
     * @param *value*
     */
    static colorScaleMaxSize(*value*?: Number): void;

    /**
     * 
     * @param *value*
     */
    static controls(*value*?: any[]): void;

    /**
     * 
     * @param *value*
     */
    static controlConfig(*value*?: Object): void;

    /**
     * 
     * @param *value*
     */
    static controlPadding(*value*?: Boolean | Function): void;

    /**
     * 
     * @param *data* = []
     * @param *formatter*
     */
    static data(*data*: any[] | String, *formatter*?: Function): void;

    /**
     * 
     * @param *value*
     */
    static dataCutoff(*value*?: Number): void;

    /**
     * 
     * @param *value*
     */
    static depth(*value*?: Number): void;

    /**
     * 
     * @param *value* = true
     */
    static detectResize(*value*: Boolean): void;

    /**
     * 
     * @param *value* = 400
     */
    static detectResizeDelay(*value*: Number): void;

    /**
     * 
     * @param *value* = true
     */
    static detectVisible(*value*: Boolean): void;

    /**
     * 
     * @param *value* = 1000
     */
    static detectVisibleInterval(*value*: Number): void;

    /**
     * 
     * @param *value*
     */
    static discrete(*value*?: String): void;

    /**
     * 
     * @param *value*
     */
    static downloadButton(*value*?: Boolean): void;

    /**
     * 
     * @param *value*
     */
    static downloadConfig(*value*?: Object): void;

    /**
     * 
     * @param *value*
     */
    static downloadPosition(*value*?: String): void;

    /**
     * 
     * @param *ms*
     */
    static duration(*ms*?: Number): void;

    /**
     * 
     * @param *value*
     */
    static filter(*value*?: Function): void;

    /**
     * 
     * @param *value*
     */
    static groupBy(*value*?: String | Function | any[]): void;

    /**
     * 
     * @param *value*
     */
    static height(*value*?: Number): void;

    /**
     * 
     * @param *value*
     */
    static hiddenColor(*value*?: Function | String): void;

    /**
     * 
     * @param *value*
     */
    static hiddenOpacity(*value*?: Function | Number): void;

    /**
     * 
     * @param *value*
     */
    static hover(*value*?: Function): void;

    /**
     * 
     * @param *value*
     */
    static label(*value*?: Function | String): void;

    /**
     * 
     * @param *value*
     */
    static legend(*value*?: Boolean): void;

    /**
     * 
     * @param *value*
     */
    static legendConfig(*value*?: Object): void;

    /**
     * 
     * @param *value*
     */
    static legendCutoff(*value*?: Number): void;

    /**
     * 
     * @param *value*
     */
    static legendTooltip(*value*?: Object): void;

    /**
     * 
     * @param *value*
     */
    static legendPadding(*value*?: Boolean | Function): void;

    /**
     * 
     * @param *value*
     */
    static legendPosition(*value*?: String): void;

    /**
     * 
     * @param *value*
     */
    static legendSort(*value*: Function): void;

    /**
     * 
     * @param *value*
     */
    static loadingHTML(*value*?: Function | String): void;

    /**
     * 
     * @param *value*
     */
    static loadingMessage(*value*?: Boolean): void;

    /**
     * 
     * @param *value*
     */
    static messageMask(*value*?: Boolean | String): void;

    /**
     * 
     * @param *value*
     */
    static messageStyle(*value*?: Object): void;

    /**
     * 
     * @param *value*
     */
    static noDataHTML(*value*?: Function | String): void;

    /**
     * 
     * @param *value*
     */
    static noDataMessage(*value*?: Boolean): void;

    /**
     * 
     * @param *selector*
     */
    static scrollContainer(*selector*: String | HTMLElement): void;

    /**
     * 
     * @param *selector*
     */
    static select(*selector*?: String | HTMLElement): void;

    /**
     * 
     * @param *value*
     */
    static shape(*value*?: Function | String): void;

    /**
     * 
     * @param *value*
     */
    static shapeConfig(*value*?: Object): void;

    /**
     * 
     * @param *value*
     */
    static svgDesc(*value*?: String): void;

    /**
     * 
     * @param *value*
     */
    static svgTitle(*value*?: String): void;

    /**
     * 
     * @param value
     */
    static threshold(value?: Function | Number): void;

    /**
     * 
     * @param value
     */
    static thresholdKey(value?: Function | Number): void;

    /**
     * 
     * @param value
     */
    static thresholdName(value?: String): void;

    /**
     * 
     * @param *value*
     */
    static time(*value*?: Function | String): void;

    /**
     * 
     * @param *value*
     */
    static timeFilter(*value*?: Function): void;

    /**
     * 
     * @param *value*
     */
    static timeline(*value*?: Boolean): void;

    /**
     * 
     * @param *value*
     */
    static timelineConfig(*value*?: Object): void;

    /**
     * 
     * @param *value*
     */
    static timelinePadding(*value*?: Boolean | Function): void;

    /**
     * 
     * @param *value*
     */
    static title(*value*?: Function | String): void;

    /**
     * 
     * @param *value*
     */
    static titleConfig(*value*?: Object): void;

    /**
     * 
     * @param *value*
     */
    static titlePadding(*value*?: Boolean | Function): void;

    /**
     * 
     * @param *value*
     */
    static tooltip(*value*?: Boolean): void;

    /**
     * 
     * @param *value*
     */
    static tooltipConfig(*value*?: Object): void;

    /**
     * 
     * @param *value*
     */
    static total(*value*?: Boolean | Function | String): void;

    /**
     * 
     * @param *value*
     */
    static totalConfig(*value*?: Object): void;

    /**
     * 
     * @param *value*
     */
    static totalFormat(*value*: Function): void;

    /**
     * 
     * @param *value*
     */
    static totalPadding(*value*?: Boolean | Function): void;

    /**
     * 
     * @param *value*
     */
    static width(*value*?: Number): void;

    /**
     * 
     * @param *value* = false
     */
    static zoom(*value*: Boolean): void;

    /**
     * 
     * @param *value* = 1
     */
    static zoomBrushHandleSize(*value*: Number): void;

    /**
     * 
     * @param *value*
     */
    static zoomBrushHandleStyle(*value*: Object | Boolean): void;

    /**
     * 
     * @param *value*
     */
    static zoomBrushSelectionStyle(*value*: Object | Boolean): void;

    /**
     * 
     * @param *value*
     */
    static zoomControlStyle(*value*: Object | Boolean): void;

    /**
     * 
     * @param *value*
     */
    static zoomControlStyleActive(*value*: Object | Boolean): void;

    /**
     * 
     * @param *value*
     */
    static zoomControlStyleHover(*value*: Object | Boolean): void;

    /**
     * 
     * @param *value* = 2
     */
    static zoomFactor(*value*: Number): void;

    /**
     * 
     * @param *value* = 16
     */
    static zoomMax(*value*: Number): void;

    /**
     * 
     * @param *value* = true
     */
    static zoomPan(*value*: Boolean): void;

    /**
     * 
     * @param *value* = 20
     */
    static zoomPadding(*value*: Number): void;

    /**
     * 
     * @param *value*
     */
    static zoomScroll(*value*?: Boolean): void;

}

/**
 * Applies the threshold algorithm according to the type of chart used.
 * @param data The data to process.
 */
declare function _thresholdFunction(data: any[]): void;

