function Eye ({eyeOffsetX, eyeOffsetY, eyeRadius}){
    return(
        <circle 
            cx = { + eyeOffsetX}
            cy = { - eyeOffsetY}
            r={eyeRadius} 
            fill="black" >
        </circle>
    )
}

export default Eye