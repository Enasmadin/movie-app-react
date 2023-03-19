
import Add from './component/Add';
import Header from './component/Header';
import { Routes, Route ,BrowserRouter as Router } from "react-router-dom";
import Watchlist from './component/Watchlist';
import Whached from './component/Whached';
import ConstextProvider from './context/GloabalContext';



function App() {
  return (
    <>
    <Router>
    <ConstextProvider>
     <Header/>
      <Routes>
        <Route path="/" element={ <Watchlist/> } />
        <Route path="whaced" element={ <Whached/> } />
        <Route path="add" element={ <Add/> } />
      </Routes>
      </ConstextProvider>
      </Router>
    </>
    
  );
}

export default App;
