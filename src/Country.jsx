import React, { useEffect, useState } from 'react'
function Card({country}) {
  return (
    <div style={{
        display:"flex",
        flexDirection: "column",
        width:"200px",
        height:"200px",
        justifyContent:"center",
        alignItems:"center",
        border:"2px solid black",
        borderRadius:"8px",
        gap:"10px",
        padding:"10px",
        margin:"10px",
        textAlign:"center"
    }}> 
        <img src={country.flag} alt={country.abbr} style={{
            width:"100px",
            height:"100px"
        }}/>
        <h3>{country.name}</h3>
    </div>
  )
}
function Countries() {
    const [countries,setCountries] = useState([]);
    const fetchCountries = async()=>{
        try {
            const response = await fetch('https://xcountries-backend.azurewebsites.net/all');
            const data = await response.json();
            setCountries(data);
        } catch (error) {
            console.error("Error fetching data:",error)
        }
        
    }
    useEffect(()=>{
        fetchCountries()
    },[])
    
    return (
        <div style={{
            display:"flex",
            flexWrap:"wrap"
        }}>
            {countries.map((country)=><Card country={country} key={country.abbr}/>)}
        </div>
    )
}

export default Countries;
