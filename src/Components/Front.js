import axios from 'axios';
import { FaCloud } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React, { useEffect, useState } from 'react';
const Front = (props) => {
  const apiKey = "b2dcbcd26cdccfeac192ff8f877e233f"
  const [inputCity, setInputCity] = useState("Bareilly")
  const [data, setData] = useState({

  })

  const getWeatherDetails = (cityName) => {
    props.setProgress(30);
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey + ""
    props.setProgress(50);
    axios.get(apiURL).then((res) => {

      setData(res.data)
      props.setProgress(100);
    }).catch((e) => {
      console.log(e);
      if (e)
        props.setProgress(100);
        toast.error("city not found")
    })
  }

  const handleInputChange = (e) => {
    setInputCity(e.target.value);
    props.setProgress(0);
  }

  const handleSearch = () => {
    getWeatherDetails(inputCity);
  }

  useEffect(()=>{
    getWeatherDetails(inputCity);
    // eslint-disable-next-line
  },[]);

  return (
    <div className='full'>
      <div className='container'>
        <div className='weather'>
          <div className='cloud'><FaCloud size='8%' color='#4d99e9' /></div>
          <h1>Weather App</h1>
        </div>
        <div>
          <input type="text" placeholder='Enter city' onChange={handleInputChange}></input></div>

        <div className='button'><button onClick={handleSearch}> search</button></div>
        <h2 className='live-weather-condition'>Live Weather Condition</h2>
        <h2 className='temp'>{((data?.main?.temp) - 273.15).toFixed(2)}°C </h2>
        <h2 className='cityName'>{data?.name},{data?.sys?.country}</h2>
        <div className='max'>
          <div className='min'> <h3 className='max-temp '>Max.temp ||<br></br>{((data?.main?.temp_max) - 273.15).toFixed(2)}°C</h3></div>
          <div className='min'> <h3 className='max-temp min-temp'>Min.temp ||<br></br>{((data?.main?.temp_min) - 273.15).toFixed(2)}°C</h3></div>
          <div className='min'> <h3 className='max-temp humidity'>Humidity ||<br></br>{data?.main?.humidity}%</h3></div>
          <div className='min'> <h3 className='max-temp speed'>Speed<br></br>{data?.wind?.speed}mm/h</h3></div>


        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

export default Front
