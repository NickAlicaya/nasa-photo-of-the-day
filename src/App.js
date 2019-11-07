import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import NasaCard from "./component/NasaCard"
import 'bootstrap/dist/css/bootstrap.min.css';
import Example from './component/Example'

function App() {
  const [data, setdata] = useState([]);
  
  useEffect(()=>{
  axios.get('https://api.nasa.gov/planetary/apod?api_key=2qD76VUzXC8HEKzqNzrdKGTx0AIuSrrUEYREqewj')
    .then((response)=>{
    console.log(response);
    setdata(response.data)
    })
    .catch((error) =>{
    console.log(error);
  })  
  },[])
  return (
  <>
  
  <Example/>
    <div className="App">
      
   
    
    <NasaCard title={data['title']} date={data['date']} imgUrl={data['url']} copyright={data['copyright']} photoCaption={data['explanation']}/>
     
    </div>
    </>
  )
}

export default App;
