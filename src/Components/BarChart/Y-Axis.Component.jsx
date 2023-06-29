

export const Y_Axis = ({yScale}) => {
    return(
        yScale.domain().map(tickValue => 
       
        <g className="tick">
          <text
          key = {tickValue}
          style= {{textAnchor: 'end'}}
          dy='.32em'
          y={yScale(tickValue)+yScale.bandwidth()/2}
          x={-5}
          >
            {tickValue}
          </text>
        </g>  
      
      )
    )
    
}