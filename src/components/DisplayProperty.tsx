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
    const filtered = data.filter((elm) =>
      selecetedFilters.includes(elm.location)
    );
    // set filtered data to state for rendering
    setLocationObject([...(filtered ?? [])]);

    // if no filters selected, reset state
    if (!filtered?.length) {
      setLocationObject([...data]);
    }
  }, [selecetedFilters]);

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
        />
      </div>
      <div className='displayPropertyGroup'>
        {locationObject?.map((itm, idx) => {
          return <PropertyTile key={`property-${idx}`} data={itm} />;
        })}
      </div>
    </div>
  );
}

export default DisplayProperty;
