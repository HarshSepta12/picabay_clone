import React from "react";
import { useEffect, useState } from "react";
const FetchData = () => {
  const [APIData, setAPI] = useState([]);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      const api = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await api.json();

      console.log(data);
      setAPI(data);
    };
    fetchDataFromAPI();
  }, []);
  return (
    <div>
      {APIData.map((data) => (
        <div
          key="{data.id}"
          style={{
            textAlign: "center",
            backgroundColor: "green",
            margin: "10px",
            padding: "10px",
            borderRadius: "10px",
            border: "2px solid blue",
          }}
        >
          <h3>{data.title}</h3>
          <h3>{data.body}</h3>
        </div>
      ))}
    </div>
  );
};

export default FetchData;
