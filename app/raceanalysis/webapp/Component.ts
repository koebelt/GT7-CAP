import BaseComponent from "sap/fe/core/AppComponent";
import Control from "sap/ui/core/Control";
import XMLView from "sap/ui/core/mvc/XMLView";
import JSONModel from "sap/ui/model/json/JSONModel";

/**
 * @namespace raceanalysis
 */
export default class Component extends BaseComponent {

	public static metadata = {
		manifest: "json"
	};

	init() : void {
        // *******************************************************************************************
        // MONKEY PATCH TO AVOID DUPLICATE ID ISSUES WITH "sap/ui/mdc/odata/v4/vizChart/ChartDelegate"
        // *******************************************************************************************
        // The ChartDelegate.createInnerChartContent method is called twice when the chart is created
        // and the check in ChartDelegate.getInnerChartBound is not enough to avoid duplicate IDs as
        // the chart is not bound yet as this happens in the ChartDelegate._performInitialBind method.
        // So there is a need to check if the chart is already created and return a resolved promise.
        // *******************************************************************************************
        // eslint-disable-next-line
        // @ts-ignore
        import("sap/ui/mdc/odata/v4/vizChart/ChartDelegate").then((ChartDelegate) => {
            const fnChartDelegateCreateInnerChartContent = ChartDelegate.default.createInnerChartContent;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ChartDelegate.default.createInnerChartContent = function (oChart: any, fnCallbackDataLoaded: any) {
                // eslint-disable-next-line
                // @ts-ignore
                if (this._getChart(oChart)) {
                    return Promise.resolve();
                }
                return fnChartDelegateCreateInnerChartContent.call(this, oChart, fnCallbackDataLoaded);
            };
        });
        super.init();
	}
}