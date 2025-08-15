import './App.css';
import useFetchData from './hooks/useFetchData';
import Header from './components/Header';
import Splash from './components/Splash';
import PropertySubHeading from './components/PropertySubHeading';
import DisplayProperty from './components/DisplayProperty';

function App() {
  const propertyData = useFetchData();

  return (
    <>
      <Header />
      <Splash />
      <PropertySubHeading />
      <DisplayProperty
        location={propertyData.location}
        data={propertyData.data}
      />
    </>
  );
}

export default App;
