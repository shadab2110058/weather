import axios from 'axios';

import { FaCloud } from "react-icons/fa";

import react,{useState,useEffect} from 'react';
const Front = () => {
  const apiKey = "b2dcbcd26cdccfeac192ff8f877e233f"
  const [inputCity,setInputCity] = useState("")
 const [data,setData] = useState({

 })
 const getWeatherDetails = (cityName)=>{
  if(!cityName) return 
  const apiURL = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+ apiKey +""
  axios.get(apiURL).then((res)=>{
    console.log("response",res.data)
       setData(res.data)
  }).catch((err)=>{
    // console.log("err",err)
  })

 }
 const handleInputChange=(e)=>{
      setInputCity(e.target.value); 
      
      getWeatherDetails(e.target.value)
      
 }
 

 useEffect(()=>{
  getWeatherDetails("Bareilly")
 },[])

  return (
    <div className='full'>
      <div className='container'>
          <div>
          <FaCloud  size='8%' className='cloud'/>
          <h1>Weather App</h1>
          </div>
          <input type="text" placeholder='Enter city' onChange={handleInputChange}></input>
          <h2 className='live-weather-condition'>Live Weather Condition</h2>
          <h2 className='temp'>{((data?.main?.temp)-273.15).toFixed(2)}°C</h2>
          <h2 className='cityName'>{data?.name}</h2>
          <div className='max'>
         <div className='min'> <h3 className='max-temp'>Max:{((data?.main?.temp_max)-273.15).toFixed(2)}</h3></div>
         <div className='min'> <h3 className='max-temp'>Min:{((data?.main?.temp_min)-273.15).toFixed(2)}</h3></div>
         <div className='min'> <h3 className='max-temp'>Hum:{data?.main?.humidity}%</h3></div>
          </div>



      </div>
    </div>
  )
}

export default Front
