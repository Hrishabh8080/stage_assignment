import './App.css';
import CaruosalData from './components/CaruosalData';
import Header from './components/Header';
import RowData from './components/RowData';
import SplashScreen from './components/SplashScreen';

function App() {
  return (
    <div>
      <SplashScreen />
      <Header />
      <CaruosalData />
      <RowData title={"हमारे टॉप 20 शोज़"} />
      <RowData title={"VIP शोज़"} />
      <RowData title={"VIP वीडियोज़"} />
    </div>
  );
}

export default App;
