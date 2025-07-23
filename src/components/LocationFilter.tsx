import { useEffect, useState } from 'react';
import './LocationFilter.css';

interface locationData {
  data: string[];
}

function LocationFilter({ data }: locationData) {
  const [location, setLocation] = useState<string[]>([]);

  useEffect(() => {
    const temp: string[] = [];
    data.filter((word) => {
      if (!temp.includes(word)) {
        temp.push(word);
      }
    });
    setLocation(temp);
  }, [data]);

  return (
    <div className='location__filter'>
      <div className='location__filter__head'>
        <h4>Locations: </h4>
      </div>
      <div className='location__filter__location'>
        {location.map((local) => (
          <p key={local}>{local}</p>
        ))}
      </div>
    </div>
  );
}

export default LocationFilter;
