import React, { useEffect, useState } from "react";

export default function HighOrderComp(title, Component, request, paragraph) {
  return function HOC() {
    const [data, setData] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/${request}`
        );
        console.log(response.ok);
        if (response.ok) {
          try {
            const data = await response.json();
            console.log(data);
            setData(data);
          } catch (err) {
            console.log(err);
          }
        } else {
          console.log("Wrong with api response");
        }
      };
      fetchData();
    }, []);

    return (
      <div>
        <h2>{title}</h2>
        <h3>{paragraph}</h3>
        <Component data={data} />
      </div>
    );
  };
}
