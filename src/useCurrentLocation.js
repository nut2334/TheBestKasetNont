import { useState, useEffect } from 'react';

const useCurrentLocation = () => {
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: null,
    error: null,
  });

  useEffect(() => {
    const successHandler = (position) => {
      const { latitude, longitude } = position.coords;
      setLocation({
        loaded: true,
        coordinates: { lat: latitude, lng: longitude },
        error: null,
      });
    };

    const errorHandler = (error) => {
      setLocation({
        loaded: true,
        coordinates: null,
        error: error,
      });
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
    } else {
      setLocation({
        loaded: true,
        coordinates: null,
        error: { message: 'Geolocation is not supported by this browser.' },
      });
    }
  }, []);

  return location;
};

export default useCurrentLocation;
