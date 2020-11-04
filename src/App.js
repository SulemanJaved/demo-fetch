import React from 'react';
import './App.css';
import {Bar} from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(0,99,132,0.2)',
      borderColor: 'rgba(0,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(0,99,132,0.4)',
      hoverBorderColor: 'rgba(0,99,132,1)',
      data: [32, 59, 80, 81, 56, 55, 99]
    }
  ]
};

function App() {
  return (
    <div>
     <h2>Bar Example (custom size)</h2>
        <Bar
          data={data}
          width={100}
          height={170}
          options={{
            maintainAspectRatio: false
          }}
        /> 
    </div>
  );
}

export default App;
