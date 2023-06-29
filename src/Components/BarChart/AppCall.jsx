import React, {useState, useEffect} from 'react';
import { csvFormat, scaleBand,arc, scaleLinear,max,format } from 'd3';
import { UseData } from './Components/BarChart/useData.Hook';
import { AxisBottom } from './Components/BarChart/BottomAxis.Component';
import { Y_Axis } from './Components/BarChart/Y-Axis.Component';
import { Marks } from './Components/BarChart/Marks.Component';



const width = '960'
const height = '500'
const margin = { 
  top: 20, 
  left: 220, 
  right:30, 
  bottom: 65}

const innerHeight = height - margin.top - margin.bottom
const innerWidth  = width - margin.left - margin.right
const yValue = d => d.Country;
const xValue = d => d.Population;
const xAxisLabelOffset = 50


function App() {
  const data = UseData()
  
  

  const yScale = scaleBand()
  .domain(data ? data.map((d) => d.Country) : [])
  .range([0, innerHeight])
  .padding(0.15)

const xScale = scaleLinear()
  .domain([0, data ? max(data, (d) => d.Population) : 0])
  .range([0, innerWidth]);



  return (
    data ? (
      <svg width={width} height={height}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        <AxisBottom 
        xScale={xScale} 
        innerHeight={innerHeight}
        tickFormat={format(".2s")}
        />
        <Y_Axis yScale ={yScale}/>
        <text className='axisLabel' x={innerWidth/2} y = {innerHeight+xAxisLabelOffset} textAnchor='middle'>Population</text>
        <Marks
          data={data}
          xScale={xScale}
          yScale={yScale}
          xValue={xValue}
          yValue={yValue}
          tooltipFormat={format(".2s")}
        />
      </g>
    </svg>
    ) : (
      <div>Loading...</div>
    )
  );
  
    }

export default App;