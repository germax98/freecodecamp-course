import BackgroundCircle from './smileycomponents/smileybackground';
import Eye from './smileycomponents/eye.component';
import Mouth from './smileycomponents/mouth.component';
import FaceContainer from './smileycomponents/faceContainer.component';

function SVG_Smileyface({width, height,centerX,centerY,strokewidth,eyeOffsetX,eyeOffsetY,eyeRadius,mouthWidth,mouthRadius}) {
    return (
        <FaceContainer
        width={width} 
        height={height} 
        centerX={centerX} 
        centerY={centerY}
        >
            
            <BackgroundCircle
            radius = {centerY - strokewidth/2}
            strokeWidth={strokewidth}/>

            //lefteye
            <Eye
            eyeOffsetX = {- eyeOffsetX}
            eyeOffsetY= {eyeOffsetY}
            eyeRadius= {eyeRadius}
            />

            //right eye    
            <Eye
            eyeOffsetX = {+ eyeOffsetX}
            eyeOffsetY= {eyeOffsetY}
            eyeRadius= {eyeRadius}
            />
    
            <Mouth
            mouthRadius={mouthRadius}
            mouthWidth = {mouthWidth}/>

        </FaceContainer>
    );
  }
  
  export default SVG_Smileyface;