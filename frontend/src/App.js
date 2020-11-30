import './App.css';
import { useState } from 'react';
import PrivateRoutes from './containers/PrivateRoutes/PrivateRoutes';
import LocalStorageService from "./services/localStorage";
import { BrowserRouter } from 'react-router-dom';
import UserContext from './context/UserContext';
import BottomHeader from './components/BottomHeader/BottomHeader';
import Footer from './containers/pages/Footer/Footer';

function App() {
  const [role, setRole] = useState(LocalStorageService.getRole());
  const [card, setCard] = useState([]);
  const [reservePartner, setReservePartner] = useState([]);
  const [change, setChange] = useState(false);

  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={{ role, setRole, card, setCard, reservePartner, setReservePartner, change, setChange }}>
          <BottomHeader />
          <PrivateRoutes />
          <Footer />
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
