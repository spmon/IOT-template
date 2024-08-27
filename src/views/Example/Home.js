import React from 'react';
import { FaFan, FaTemperatureHigh } from 'react-icons/fa';
import './Home.scss';
import { CiSun } from 'react-icons/ci';
import { BsLightbulb } from 'react-icons/bs';
import { GiWaterDrop } from 'react-icons/gi';
import { TbAirConditioning } from 'react-icons/tb';
import LineChart from './LineChart';
class Home extends React.Component {
  state = {
    showLight: true,
    showFan: true,
    showAC: true,
  };

  toggleDevice = (device) => {
    this.setState((prevState) => ({
      [device]: !prevState[device],
    }));
  };

  render() {
    const { showLight, showFan, showAC } = this.state;
    const temperatureData = {
      labels: ['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00'],
      datasets: [
        {
          label: 'Temperature (°C)',
          data: [22, 25, 28, 30, 32, 31, 29],
          fill: false,
          backgroundColor: 'rgba(255, 165, 0, 0.2)',
          borderColor: 'rgba(255, 165, 0, 1)',
        },
      ],
    };

    
    const humidityData = {
      labels: ['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00'],
      datasets: [
        {
          label: 'Humidity (%)',
          data: [55, 60, 65, 70, 75, 80, 85],
          fill: false,
          backgroundColor: 'rgba(0, 94, 255, 0.468)',
          borderColor: 'rgba(0, 94, 255, 0.468)',
        },
      ],
    };

    
    const lightData = {
      labels: ['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00'],
      datasets: [
        {
          label: 'Light (Lux)',
          data: [300, 400, 500, 600, 700, 800, 900],
          fill: false,
          backgroundColor: 'rgb(255, 255, 0)',
          borderColor: 'rgb(255, 255, 0)',
        },
      ],
    };
    return (
      <div className='home'>
      <div className="container">
        
        <div className="box1">
          <span className="text">Temperature</span>
          <div className="Icon"><FaTemperatureHigh /></div>
          <div className='inform'>30°C</div>
        </div>
        <div className="box2">
          <span className="text">Humidity</span>
          <div className="Icon"><GiWaterDrop /></div>
          <div className='inform1'>87%</div>
        </div>
        <div className="box3">
          <span className="textL">Light</span>
          <div className="IconL"><CiSun /></div>
          <div className='inform2'>400 lux</div>
        </div>  
        

        
        <div className="Light">
          <span className="text">Light</span>
          <div className="button">
            {showLight ? (
              <>
              <div className="Icon4" ><BsLightbulb /></div>
             
              <div><button className='button-Off' onClick={() => this.toggleDevice('showLight')}>OFF</button></div>

              </>
            ) : (<>
              <div className="Icon1" ><BsLightbulb /></div>
              <div><button className='button-On' onClick={() => this.toggleDevice('showLight')}>ON</button></div></>
            )}
          </div>
        </div>
        
        <div className="Fan">
          <span className="text">Fan</span>
         
          <div className="button">
            {showFan ? (
              <>
              <div className="Icon4" ><FaFan /></div>
              <div><button  className='button-Off' onClick={() => this.toggleDevice('showFan')}>OFF</button></div>
              </>
            ) : (
              <>
              <div className="Icon2" ><FaFan /></div>
              <div><button className='button-On' onClick={() => this.toggleDevice('showFan')}>ON</button></div>
              </>
            )}
          </div>
        </div>
        
        <div className="AC">
          <span className="text">AC</span>
          
          <div className="button">
            {showAC ? (
              <>
              <div className="Icon4"><TbAirConditioning /></div>
              <div><button className='button-Off' onClick={() => this.toggleDevice('showAC')}>OFF</button></div>
              </>
            ) : (
              <>
              <div className="Icon3"><TbAirConditioning /></div>
              <div><button className='button-On' onClick={() => this.toggleDevice('showAC')}>ON</button></div>
              </>
            )}
          </div>
        
        </div>
      </div>
      <div className='chart'>
      <div className='chart1'>
        <LineChart data={temperatureData} title="Temperature" />
        <LineChart data={humidityData} title="Humidity"  /> 
        

      </div>
      <div className='chart2'>
      <LineChart data={lightData} title="Light"  /></div>
      </div>
      </div>
    );
  }
}

export default Home;
