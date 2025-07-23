import type { propertyObjectData } from '../utils/types/propertyObjectData';

function PropertyTile({ data }: { data: propertyObjectData[] }) {
  return data.map((itm) => {
    return (
      <div key={itm.price}>
        <img src={itm.image} alt='' />
        <p>{itm.title}</p>
        <p>€{itm.price}</p>
        <p>{itm.rating}</p>
      </div>
    );
  });
}

export default PropertyTile;
