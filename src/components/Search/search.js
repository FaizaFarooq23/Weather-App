import React, { useState } from 'react'
import { AsyncPaginate } from "react-select-async-paginate"
import { geoApiOptions, url } from '../../api'

export default function Search({ onSearchChange }) {

  const [search, setSearch] = useState();

  const loadOptions = (inputValue) => {
    return fetch(
      `${url}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name} ${city.countryCode}`,
            };

          }),
        };
      })
    }

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  }
  return (
    <AsyncPaginate
      placeholder="Search for City"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  )
}
