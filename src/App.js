import logo from './logo.svg';
import './App.css';
import HomeComponent from './BaiTapThucHanhLayout/HomeComponent';
import HomePage from './BaiTapGlasses/HomePage';
import './style.css';
import ShoesStore from './BaiTapChonGiay/ShoesStore';

function App() {
  return (
    <div className="App">
      <ShoesStore/>
      {/* <HomePage/> */}
        {/* <HomeComponent/> */}
    </div>
  );
}

export default App;
