import PixabayContext from "./PixabayContext";

import React, { useEffect, useState } from 'react'

const PixabayState = (props) => {

  const [imageData, setImageData] = useState([])
  const [query, setQuery] = useState('london')

  const apiKey = import.meta.env.VITE_PIXABAY_API_KEY;


  useEffect(() => {
    
    const fetchData = async()=> {
      const api = await fetch(`https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo&pretty=true&per_page=100`)
      
      const data = await api.json()
      setImageData(data.hits)
      console.log(data.hits)
  }

  fetchData()
    
  }, [query])

  const fetchImageByCategory = async (cat) => {
    const api = await fetch(
      `https://pixabay.com/api/?key=${apiKey}&category=${cat}&image_type=photo&pretty=true&per_page=100`
    );
    const data = await api.json();
    setImageData(data.hits);
    console.log(data.hits);
  };
  return (
    <PixabayContext.Provider value={{imageData,fetchImageByCategory,setQuery}}>{props.children}</PixabayContext.Provider>
    
  )
}

export default PixabayState