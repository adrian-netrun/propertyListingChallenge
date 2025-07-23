// serves as a genral data type for data fetched from API
export type propertyObjectData = {
  capacity: {
    people: number;
    bedroom: number;
  };
  id: number;
  image: string;
  location: string;
  price: number;
  rating: number;
  superhost: boolean;
  title: string;
};
