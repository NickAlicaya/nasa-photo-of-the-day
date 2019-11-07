import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import NasaCard from "./component/NasaCard"

function App() {
  const [data, setdata] = useState([]);
  useEffect(()=>{
  axios.get('https://api.nasa.gov/planetary/apod?api_key=2qD76VUzXC8HEKzqNzrdKGTx0AIuSrrUEYREqewj')
    .then((response)=>{
    console.log(response.data);
    setdata(response.data)
    })
    .catch((error) =>{
    console.log(error);
  })  
  },[])
console.log(data)
  return (
  
    <div className="App">
    <NasaCard title={data['title']}imgUrl={data['url']} photoCaption={data['explanation']}/>
     
    </div>
  )
}

export default App;
