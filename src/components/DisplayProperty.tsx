import PropertyTile from './PropertyTile';
import type { propertyObjectData } from '../utils/types/propertyObjectData';
import { useEffect, useState } from 'react';
import './DisplayProperty.css';

interface IDisplayProperty {
  location: string[];
  data: propertyObjectData[];
}

function DisplayProperty({ location, data }: IDisplayProperty) {
  const locations: string[] = [...new Set(location)];
  const [selecetedFilters, setSelectedFilters] = useState<string[]>([]);
  const [locationObject, setLocationObject] = useState<propertyObjectData[]>();
  const [showSuperHost, setShowSuperHost] = useState<boolean>(false);

  useEffect(() => {
    setLocationObject([...data]);
  }, [data]);

  // handle button click and appropriately filter content to be displayed
  const handleFilterClick = (itm: string) => {
    if (selecetedFilters.includes(itm)) {
      const filters = selecetedFilters.filter((el) => el !== itm);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selecetedFilters, itm]);
    }
  };

  useEffect(() => {
    // check if data.location is selected and filter
    let filteredData = [...data];

    if (selecetedFilters.length > 0) {
      filteredData = filteredData.filter((item) =>
        selecetedFilters.includes(item.location)
      );
    }

    if (showSuperHost) {
      filteredData = filteredData.filter((item) => item.superhost === true);
    }

    setLocationObject(filteredData);
  }, [selecetedFilters, showSuperHost]);

  return (
    <div className='displayContainer'>
      <div className='filterGroup'>
        {/* render out location filter buttons */}
        {locations.map((itm, idx) => (
          <button
            key={idx}
            className='filterChoice'
            onClick={() => handleFilterClick(itm)}
          >
            {itm}
          </button>
        ))}
      </div>
      {/* render toggle Superhost Toggle switch */}
      <div className='filterToggle'>
        <label htmlFor='toggle'>Superhost: </label>
        <input
          type='checkbox'
          id='toggle'
          className='checkbox'
          checked={showSuperHost}
          onChange={(e) => setShowSuperHost(e.target.checked)}
        />
        <label htmlFor='toggle' className='switch'></label>
      </div>
      <div className='displayPropertyGroup'>
        {locationObject?.map((itm, idx) => {
          return (
            <PropertyTile
              key={`property-${idx}`}
              data={itm}
              showSuper={showSuperHost}
            />
          );
        })}
      </div>
    </div>
  );
}

export default DisplayProperty;
