import React, { useContext, useState } from 'react';
import RolesList from '../../config/roles';
import { Switch, Route } from "react-router-dom";
import NotFound from "../pages/NotFound/NotFound";
import LocalStorageService from '../../services/localStorage';
import jwtDecode from 'jwt-decode';
import UserContext from '../../context/UserContext';


function PrivateRoutes() {
  const { role, setRole } = useContext(UserContext);

  const roleStatus = role || "GUEST";
  const token = LocalStorageService.getToken();

  // เพื่อกำหนด ค่าตั้งต้น ของ partner profile
  let initialPartner = null;
  let initialUser = null;
  if (token) {
    initialPartner = jwtDecode(token);
    initialUser = jwtDecode(token);
  }


  // กำหนด role
  const [partner, setPartner] = useState(initialPartner);
  const [user, setUser] = useState(initialUser);

  console.log(role);
  return (
    <>
      <Switch>
        {RolesList[role].map(({ path, page: PageComponent }) => <Route exact path={path}>
          <PageComponent setRole={setRole} role={roleStatus} partner={partner} setPartner={setPartner} setUser={setUser} user={user} />
        </Route>)}
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );
}

export default PrivateRoutes;
