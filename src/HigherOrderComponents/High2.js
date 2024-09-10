import React, { useEffect, useState } from "react";

function High2(title, Component, request) {
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
        <h1> component main</h1>
        <p>{title}</p>
        <Component data={data} />
      </div>
    );
  };
}
export default High2;
