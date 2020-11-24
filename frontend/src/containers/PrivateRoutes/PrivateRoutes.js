import React, { useState } from 'react';
import RolesList from '../../config/roles';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound/NotFound";


function PrivateRoutes(props) {
  const role = props.role || "GUEST";
  const [partner, setPartner] = useState(null);
  console.log(RolesList);
  console.log(props.role);
  return (
    <>
      <BrowserRouter>
        <Switch>
          {RolesList[role].map(({ path, page: PageComponent }) => <Route exact path={path}>
            <PageComponent setRole={props.setRole} role={role} partner={partner} setPartner={setPartner} />
          </Route>)}
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default PrivateRoutes;
