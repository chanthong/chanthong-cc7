import './App.css';
import { useState } from 'react';
import PrivateRoutes from './containers/PrivateRoutes/PrivateRoutes';
import LocalStorageService from "./services/localStorage";
import Footer from './containers/pages/Footer/Footer';

function App() {
  const [role, setRole] = useState(LocalStorageService.getRole());

  return (
    <div>
      <PrivateRoutes role={role} setRole={setRole} />
      <Footer/>
    </div>
  );
}

export default App;
