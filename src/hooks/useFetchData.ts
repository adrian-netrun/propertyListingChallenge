import { useState, useEffect } from 'react';
import type { propertyObjectData } from '../utils/types/propertyObjectData';
import type { propertyFetchError } from '../utils/types/propertyFetchError';
import axios from 'axios';

function useFetchData(): {
  data: propertyObjectData[];
  location: string[];
  fetchError: propertyFetchError | null | undefined;
} {
  const [data, setData] = useState<propertyObjectData[]>([]);
  const [location, setLocation] = useState<string[]>([]);
  const [fetchError, setFetchError] = useState<propertyFetchError | null>();
  // move to .env variable
  const url =
    'https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/property-listing-data.json';

  useEffect(() => {
    axios
      .get(url)
      .then((resp) => {
        const temp: string[] = [];
        setData(resp.data);
        resp.data.forEach((itm: propertyObjectData) => {
          temp.push(itm.location);
        });
        setLocation(temp);
        setFetchError(null);
      })
      .catch((error) => {
        // defaults to 404 all of the time
        console.log(error);
        setFetchError({ errorMessage: 'Unable to fetch data', errorCode: 404 });
      });
  }, []);

  return { data, location, fetchError };
}

export default useFetchData;
