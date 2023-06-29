import './Component.Styles.css'
export const AxisBottom = ({xScale,innerHeight,tickFormat}) =>{
    return(
      xScale.ticks().map(tickValue => 
      <g className ='tick' key = {tickValue} transform={`translate(${xScale(tickValue)}, 0)`}>
        <line y2={innerHeight} /> 
        <text 
        style= {{textAnchor: 'middle'}}
        y={innerHeight +5}
        dy=".71em">
          {tickFormat(tickValue) }
        </text>
      </g>
    )
    )
  }