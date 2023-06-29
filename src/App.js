import React, { useState, useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { csv, scaleLinear, max, format, extent } from 'd3';


const width = 960;
const height = 500;
const margin = { top: 20, right: 30, bottom: 65, left: 90 };
const xAxisLabelOffset = 50;
const yAxisLabelOffset = 45;

const csvUrl = 'https://gist.githubusercontent.com/germax98/4045dc753aafa811a8887cc5cb79cb5e/raw/8661ac30e500720876d29acfc6947678749d20c8/1706CrimeIndex_byward%2520.csv'

function UseData_SC(){
  const [data, setData] = useState([]);

  useEffect(() => {
    const row = d => {
      const trimmedData = {
        WeightedCrimeIndex: d[" WeightedCrimeIndex "],
        Postcode: d.WD22CD,
        ID:d.ID,
      };
      rowPrep(trimmedData)
      
      
      return trimmedData;
    };
    csv(csvUrl, row).then(setData);
  }, []);
  
  return data;
}

const rowPrep=(trimmedData)=>{
  const dataArray = [[],[],[],[],[],[],[],[]]
  const [bar1,bar2,bar3,bar4,bar5,bar6,bar7,bar8]=dataArray
  switch(trimmedData){
    case (trimmedData.WeightedCrimeIndex >= 0.02 && trimmedData.WeightedCrimeIndex < 0.12 ):
    bar1.push(trimmedData.WeightedCrimeIndex)
    break
    case (trimmedData.WeightedCrimeIndex >= 0.12 && trimmedData.WeightedCrimeIndex < 0.22 ):
    bar2.push(trimmedData.WeightedCrimeIndex)
    break
    console.log('hier prüfen')
    case (trimmedData.WeightedCrimeIndex >= 0.12 && trimmedData.WeightedCrimeIndex < 0.22 ):
    bar3.push(trimmedData.WeightedCrimeIndex)
    break

    case (trimmedData.WeightedCrimeIndex >= 0.12 && trimmedData.WeightedCrimeIndex < 0.22 ):
    bar4.push(trimmedData.WeightedCrimeIndex)
    break

    case (trimmedData.WeightedCrimeIndex >= 0.12 && trimmedData.WeightedCrimeIndex < 0.22 ):
    bar5.push(trimmedData.WeightedCrimeIndex)
    break

    case (trimmedData.WeightedCrimeIndex >= 0.12 && trimmedData.WeightedCrimeIndex < 0.22 ):
    bar6.push(trimmedData.WeightedCrimeIndex)
    break

    case (trimmedData.WeightedCrimeIndex >= 0.12 && trimmedData.WeightedCrimeIndex < 0.22 ):
    bar7.push(trimmedData.WeightedCrimeIndex)
    break

    case (trimmedData.WeightedCrimeIndex >= 0.12 && trimmedData.WeightedCrimeIndex < 0.22 ):
    bar8.push(trimmedData.WeightedCrimeIndex)
    break
    default:
      console.log('something went wrong')
      break
  }
  return dataArray
}

const App = () => {
  const data = UseData_SC();
  
  if (!data) {
    return <pre>Loading...</pre>;

  }

  

  

  return (
    console.log('hello World')
  );
};

export default App;