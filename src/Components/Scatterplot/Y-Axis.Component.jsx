

export const Y_Axis_SC = ({yScale, innerWidth, tickOffset = 3 }) => {
    return(
      yScale.ticks().map(tickValue => (
        <g className="tick" transform={`translate(0,${yScale(tickValue)})`}>
          <line x2={innerWidth} />
          <text
            key={tickValue}
            style={{ textAnchor: 'end' }}
            x={-tickOffset}
            dy=".32em"
          >
            {tickValue}
          </text>
        </g>
      ) 
      
      )
    )
    
}