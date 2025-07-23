import './App.css';
import useFetchData from './hooks/useFetchData';
import Header from './components/Header';
import Splash from './components/Splash';
import LocationFilter from './components/LocationFilter';
import PropertySubHeading from './components/PropertySubHeading';
import PropertyTile from './components/PropertyTile';

function App() {
  const propertyData = useFetchData();

  return (
    <>
      <Header />
      <Splash />
      <LocationFilter data={propertyData.location} />
      <PropertySubHeading />
      <PropertyTile data={propertyData.data} />
    </>
  );
}

export default App;
