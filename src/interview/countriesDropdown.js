import React, { useState } from "react";

function CountriesDropdown() {
  const countries = [
    { name: "INDIA", value: "IN", cities: ["mumbai", "delhi"] },
    { name: "USA", value: "US", cities: ["hongkong"] },

    { name: "Dubai", value: "DI", cities: ["Dubai city"] },

    {
      name: "America",
      value: "AM",
      cities: ["switzerland", "francisco", "paris"],
    },
  ];
  const [country, setCountry] = useState("");
  return (
    <div>
      <select
        value={country}
        onChange={(e) => {
          setCountry(e.target.value);
        }}
      >
        <option value="" disabled>
          Select a country
        </option>

        {countries.map((item, index) => {
          return (
            <option key={index} value={index}>
              {item.name}
            </option>
          );
        })}
      </select>

      {country !== "" && (
        <select>
          {countries[country].cities.map((item, index) => {
            return (
              <>
                <option key={index} value={item}>
                  {item}
                </option>
              </>
            );
          })}
        </select>
      )}
    </div>
  );
}

export default CountriesDropdown;
