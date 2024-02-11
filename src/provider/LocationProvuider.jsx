import { useState } from "react";
import { LocationContext } from "../context";

const LocationProvider = ({ children }) => {
  const [searchedLocation, setSearchedLocation] = useState({
    location: "",
    latitude: 0,
    longitude: 0,
  });

  return (
    <LocationContext.Provider value={{ searchedLocation, setSearchedLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;
