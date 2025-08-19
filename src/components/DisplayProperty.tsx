import PropertyTile from './PropertyTile';
import type { propertyObjectData } from '../utils/types/propertyObjectData';
import { useEffect, useState } from 'react';

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
    const filtered = data
      .filter((elm) => {
        return selecetedFilters.includes(elm.location);
      })
      .filter((elm) => {
        if (!showSuperHost) {
          return elm;
        } else if (showSuperHost === elm.superhost) {
          return elm;
        }
      });

    if (!filtered?.length) {
      setLocationObject([...data]);
    } else {
      setLocationObject(filtered);
    }
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
        <label htmlFor='superhost'>Superhost</label>
        <input
          type='checkbox'
          name='superhost'
          id='superhost'
          className='roundToggle'
          onChange={() => {
            setShowSuperHost(!showSuperHost);
          }}
        />
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
