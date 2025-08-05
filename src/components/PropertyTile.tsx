import { useState } from 'react';
import type { propertyObjectData } from '../utils/types/propertyObjectData';
import PropertyModal from './PropertyModal';
import './PropertyTile.css';

interface OpenPopUpEvent extends React.MouseEvent<HTMLDivElement> {}

function PropertyTile({ data }: { data: propertyObjectData[] }) {
  return data.map((itm, idx) => {
    return (
      <div key={idx} id={idx.toString()} className='prop__tile__'>
        <div className='prop__tile__img__container__'>
          <img src={itm.image} alt='image of property for rent' />
        </div>
        <p className='prop__tile__heading__'>{itm.title}</p>
        <div className='prop__tile__meta__'>
          <p>€{itm.price}</p>
          <p>Superhost: {itm.superhost ? 'Yes' : 'No'}</p>
          <p>{itm.rating}</p>
        </div>
        <PropertyModal data={data} index={idx} />
      </div>
    );
  });
}

export default PropertyTile;
