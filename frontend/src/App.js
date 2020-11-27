import './App.css';
import { useState } from 'react';
import PrivateRoutes from './containers/PrivateRoutes/PrivateRoutes';
import LocalStorageService from "./services/localStorage";

function App() {
  const [role, setRole] = useState(LocalStorageService.getRole());

  return (
    <>
      <PrivateRoutes role={role} setRole={setRole} />
    </>
  );
}

export default App;
