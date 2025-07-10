import { useState } from 'react';
import axios from 'axios';

function useFetchData(): void {
  const url =
    'https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/property-listing-data.json';
  axios
    .get(url)
    .then((resp) => {
      console.log(resp.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

export default useFetchData;
