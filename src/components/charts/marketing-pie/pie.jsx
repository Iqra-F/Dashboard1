import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationLegend,
  PieSeries,
  AccumulationDataLabel,
  Inject,
  AccumulationTooltip,
} from "@syncfusion/ej2-react-charts";
import { dataPie } from "../../../dates/jummy";
const Pie = () => {
  return (
    <div className="w-full ">
      <div className="h-full p-6 relative bg-white rounded-xl">
        <div className="flex items-center justify-between">
          <div className="items-center inline-flex gap-3">
            <i className="fa-solid fa-location-dot fa-xl text-zinc-500"></i>
            <div className="grow shrink basis-0 text-zinc-900 font-semibold">
              Order by Location
            </div>
          </div>
          <div className="cursor-pointer text-right text-orange-600 text-sm font-semibold leading-tight">
            View All
          </div>
        </div>
        <div className="mt-8">
          <AccumulationChartComponent
          height="100%"
          width="100%"
          id="chart-pie"
          legendSettings={{visible:true , background: 'white'}}
          tooltip={{enable:true}}
          >
            <Inject services={[
  AccumulationLegend,
  PieSeries,
  AccumulationDataLabel,
  AccumulationTooltip]}/>
  <AccumulationSeriesCollectionDirective>
    <AccumulationSeriesDirective
    startAngle={0}
    endAngle={360}
    dataSource={dataPie}
    xName="x"
    yName="y"
    explode= {true}
    explodeOffset="8%"
    explodeIndex={3}
    innerRadius="50%"
    >

    </AccumulationSeriesDirective>
  </AccumulationSeriesCollectionDirective>

          </AccumulationChartComponent>
        </div>
      </div>
    </div>
  );
};

export default Pie;
