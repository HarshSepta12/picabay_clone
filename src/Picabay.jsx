import React, { useEffect, useState } from "react";

const Picabay = () => {
  const [apiData, setapiData] = useState([]);
  const [inputData,setinputData] = useState("paris")
  useEffect(() => {
    const API_KEY = "43198728-bdaa754053c0680af41ec46bb";
    let query = "tokyo";
    const fetchDataFromAPI = async () => {
      const api = await fetch(
        `https://pixabay.com/api/?key=${API_KEY}&q=${inputData}&image_type=photo`
      );
      const data = await api.json();

      console.log("My pixabay api data = ", data.hits);
      setapiData(data.hits);
    };
    fetchDataFromAPI();
  },[inputData]);<div className=""></div>
  return (

    <>
    <div style={{
        textAlign: "center",
        marging:"20px"
    }}>
        <input type="text" placeholder="Search Here..." onChange={(e) => setinputData(e.target.value)} />
    </div>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {apiData.map((data) => (
        <div
          key={data.id}
          style={{
            margin: "20px",
          }}
        >
          <img src={data.largeImageURL} 
          style={{
            width: "350px",
            // border: "2px solid blue",
            // borderRadius: "10px",
          }}/>
        </div>
      ))}
      <input type="text"/>
    </div>
    </>
  );
};

export default Picabay;
