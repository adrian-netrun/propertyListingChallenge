import './App.css';
import useFetchData from './hooks/useFetchData';
import Header from './components/Header';

function App() {
  const propertyData = useFetchData();
  console.log(propertyData);
  return (
    <>
      <Header />
    </>
  );
}

export default App;
