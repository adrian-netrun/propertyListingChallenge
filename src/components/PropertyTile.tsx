import type { propertyObjectData } from '../utils/types/propertyObjectData';
import PropertyModal from './PropertyModal';
import './PropertyTile.css';

interface OpenPopUpEvent extends React.MouseEvent<HTMLDivElement> {}

function PropertyTile({ data }: any) {
  return (
    <div className='prop__tile__'>
      <div className='prop__tile__img__container__'>
        <img src={data.image} alt='image of property for rent' />
      </div>
      <p className='prop__tile__heading__'>{data.title}</p>
      <div className='prop__tile__meta__'>
        <p>€{data.price}</p>
        <p>Superhost: {data.superhost ? 'Yes' : 'No'}</p>
        <p>{data.rating}</p>
      </div>
      <PropertyModal data={data} />
    </div>
  );
}

export default PropertyTile;
